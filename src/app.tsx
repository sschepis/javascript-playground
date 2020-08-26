
import React, { h, Component } from 'react'
import ReactDOM from 'react-dom'

import 'regenerator-runtime/runtime'
import ConsolePanel from './components/console-panel'
import { Hook } from 'console-feed'
import randomstring from 'randomstring'

import { PhosphorController, styles } from './phosphor/index'
import JSPlaygroundEngine, { ser, debounce } from './components/js-playground-engine'
import GunService from './components/gun-service'

import Embed from 'react-runkit'

const nav = (g, p, s = '/') => {
  var o = g.user
  p.split(s)
   .forEach (el => o = o.get(el))
  return o
}

function whenReady(parent, obj, func) {
  var cnt = 0, intv
  const _retry = () => {
    if(cnt > 99 || parent[obj]) {
      clearInterval(intv)
    }
    return parent[obj] ? func() : null
  }
  intv = setInterval(() => { _retry(); cnt++ }, 100)
  return intv
}

export default class JavascriptPlayground extends Component {
  state: {
    logs: [],
    html,
    css,
    js,
    jslibs,
    csslibs,
    runkitrunnerjs,
    runkitendpointjs,
    compiledPage,
    auth,
    observablePaths
  }
  consoleEl
  updatedEvent
  gunObserver
  engine
  gun
  _gun
  workspaceSaver
  constructor(props: any) {
    super(props)
    this.buildStateTree(false)
    this._gun = {
      observedPaths: []
    }
    this.handleRefresh = this.handleRefresh.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleAuth = this.handleAuth.bind(this)
    this.handleEmit = this.handleEmit.bind(this)
    this.handleObserving = this.handleObserving.bind(this)
    const gprops = {
      auth:this.state.auth,
      observablePaths:this.state.observablePaths,
      onEmit:this.handleEmit,
      onObserving:this.handleObserving,
      onAuth:this.handleAuth,
      onCreate:this.handleCreate
    }
    this.gunObserver = new GunService(gprops)

    //this.workspaceSaver = setInterval(() => this.saveWorkspaceActual(this.buildWorkspaceState()), 30000)
  }

  buildStateTree(setState) {
    const stateTree = {
      logs: [],
      html: '',
      css: [''],
      js: [''],
      jslibs: [
        '#remove the \'#\' in front of the library to use it, one library per line',
        '#//unpkg.com/react@16/umd/react.development.js',
        '#//unpkg.com/react-dom@16/umd/react-dom.development.js',
        '#//unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js'
      ],
      csslibs: [
        '# remove the \'#\' in front of the library to use it, one library per line',
        '#//maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
      ],
      runkitendpointjs: `exports.endpoint = function(request, response) {\n  // your code goes here\n  return response.end('hello')}`,
      runkitrunnerjs: `  // your code goes here`,
      compiledPage: '',
      auth: this.getAuthInfo(),
      observablePaths: [
      ]
    }
    if(setState) {
      this.setComponentState(stateTree)
    } else {
      this.state = stateTree
    }
  }

  getAuthInfo() {
    const ai = () => {return {
      username: randomstring.generate(),
      password: randomstring.generate(),
      create: true
    }}
    try {
      var a = ser('jsPlaygroundAuth')
      if(!a) {
        a = ai()
      } else a = JSON.parse(a)
      return a
    } catch(e) {
      return ai()
    }
  }

  setAuthInfo(a) {
    ser('jsPlaygroundAuth', JSON.stringify(a))
  }

  rebuildEngine() {
    this.engine = new JSPlaygroundEngine(Object.assign(this.state, {
      onRefresh: (e) => {
        this.setComponentState(e)
        this.dispatch('state_updated', e)
      }
    }))
    this.engine.refresh()
  }

  componentDidMount() {
    const self = this
    document.addEventListener('inputs_updated',
      (e:any) => this.inputsUpdated(e)
    )
    document.addEventListener('state_updated',
      (e:any) => this.stateUpdated(e)
    )
    document.addEventListener('refresh_view',
      (e:any) => this.rebuildEngine()
    )
    document.addEventListener('clear_console',
      (e:any) => this.setComponentState({logs:[]})
    )
    document.addEventListener('new_workspace',
    (e:any) => this.newWorkspace()
    )
    this.installLogger()
    this.dispatch('state_inited', this.state)
    this.dispatch('refresh_view', this.state)
  }

  newWorkspace() {
    this.buildStateTree(true)
    this.dispatch('state_inited', this.state)
    this.dispatch('refresh_view', this.state)
  }

  installLogger() {
    // Disable code-sandbox console
    if (console.feed) {
      Object.keys(console.feed.pointers).forEach(key => {
        console[key] = console.feed.pointers[key]
      })
    }
    Hook(
      window.console,
      log => {
        this.setComponentState({ logs: [...this.state.logs, log] })
      },
      false
    )
    console.warn = console.feed.pointers.warn = function () {}
  }

  stateUpdated(e:any) {
    if(!this._gun.activeWorkspace) {
      return
    }
    const workspaceUpdatey = () => {
      const o = Object.assign({}, e.detail)
      delete o.onRefresh
      this.saveWorkspace(e)
    }
    debounce(workspaceUpdatey, 10000)()
  }

  inputsUpdated(e:any) {
    this.setComponentState(e.detail)
    const debounceRebuild = () => {
      this.rebuildEngine()
    }
    debounce(debounceRebuild, 100)()
  }

  setComponentState(s) {
    if(s.js && !Array.isArray(s.js) && s.index !== undefined && Object.keys(s).length === 2) {
      var js = this.state.js
      if(!Array.isArray(js)) {
        const el = js
        js = []
        while(js.length<=s.index) {
          js.push('')
        }
        js[0] = el
      }
      js[s.index] = s.js
      s.js = js
    }
    else if(s.css && Array.isArray(s.css)  && s.index !== undefined && Object.keys(s).length === 2) {
      var css = this.state.css
      if(!Array.isArray(css)) {
        const el = css
        css = []
        while(css.length<=s.index) {
          css.push('')
        }
        css[0] = el
      }
      css[s.index] = s.css
      s.css = css
    }
    delete s.index
    super.setState(s)
  }

  handleRefresh(o) {
    this.setComponentState(o)
    this.dispatch('state_updated', o)
  }

  dispatch (e:any, p:any = null) {
    document.dispatchEvent(p ? new CustomEvent(e, { detail: p }) : new Event(e))
  }

  handleCreate(o, v, c) {
    this._gun.user = o
    delete this.state.auth.create
    this.setComponentState({auth : {
      username: v.username,
      password: v.password
    }})
    console.log('Welcome', `to the decentralized web. Welcome, new user ${v.username}`)
    this.initObservables(v.username)
  }

  handleAuth(u, v) {
    this._gun.user = u
    this.setComponentState({auth : {
      username: v.username,
      password: v.password
    }})
    console.log('Connected', `to the decentralized web. Welcome, returning user ${v.username}`)
    this.initObservables(v.username)
  }

  initObservables (v) {
    this.state = Object.assign(this.state, {
      observablePaths : [
        `${v}/decentralit/jsplayground/workspaces`,
        `${v}/decentralit/jsplayground/activeworkspace`,
        `${v}/decentralit/jsplayground/public`,
        `${v}/decentralit/jsplayground/followers`,
        `${v}/decentralit/jsplayground/following`,
        `/decentralit/jsplayground/announce`,
      ]
    });
    this.setComponentState(this.state)

    if(!this._gun.pending) this._gun.pending = {}
    this._gun.workspaces = this.state.observablePaths[0]
    this._gun.activeWorkspace = this.state.observablePaths[1]
    this._gun.announcePath = this.state.observablePaths[5]

    if(this.gunObserver) this.gunObserver.observe(this.state.observablePaths)

    this.initWorkspace()
  }

  handleObserving (p, o) {
    if(!this._gun) {
      return
    }
    const contains = this._gun.observedPaths.find (e => e === p)
    if(!contains) {
      this._gun.observedPaths.push(p)
      if(p === this._gun.pending.workspaces) {
        this._gun.workspaces = this._gun.pending.workspaces
        delete this._gun.pending.workspaces
      } else if(p === this._gun.pending.activeWorkspace) {
        this._gun.activeWorkspace = this._gun.pending.activeWorkspace
        delete this._gun.pending.activeWorkspace
      }else if(p === this._gun.pending.announcePath) {
        this._gun.announcePath = this._gun.pending.announcePath
        delete this._gun.pending.announcePath
      }
    }
  }

  initWorkspace() {
    this.loadWorkspace()
  }
  
  loadWorkspace() {
    if(!this._gun || !this._gun.activeWorkspace) {
      return //whenReady(this._gun, 'activeWorkspace', () => this.loadWorkspace())
    }
    nav(this._gun, this._gun.activeWorkspace).once((v) => {
      console.log(`loading active workspace for user ${this.state.auth.username}`)
      if(v) v = JSON.parse(v)
      this.setComponentState(v)
      this.dispatch('state_updated', v)
      setTimeout(() => this.dispatch('state_refresh', v), 10)
    })
  }

  saveWorkspace(w) {
    if(!this._gun || !this._gun.activeWorkspace) {
      return //whenReady(this._gun, 'activeWorkspace', () => this.saveWorkspace(w))
    }
    this.setAuthInfo(this.state.auth)
    nav(this._gun, this._gun.activeWorkspace).put(JSON.stringify(this.state))
    console.log(`saved active workspace for user ${this.state.auth.username}`)
  }

  saveWorkspace_(w) {

  }

  buildWorkspaceState(v:any = null) {
    if(v) {
      return this.setComponentState(v)
    }
    const o = Object.assign({
      auth: this.getAuthInfo()
    }, this.state)
    return o
  }

  handleEmit(p, o, v) {
    //console.log('handleEmit', p, o, v)
  }

  render() {
    const getTabsCount = () => {
      return {
        js: this.state.js.length,
        css: this.state.css.length
      }
    }
    const el = i => document.getElementById(i)
    const cl = () => el('console-log-parent')
    const rk = () => el('runkit-endpoint-parent')
    const rn = () => el('runkit-runner-parent')
    const sh = () => el('terminal-input-parent')
    return (<div style={styles}>
    <PhosphorController tabs={getTabsCount()}/>
    {cl()?ReactDOM.createPortal((<ConsolePanel logs={this.state.logs}/>),cl()):(<div/>)}
    {rk()?ReactDOM.createPortal((<div id={'embedframe'}><Embed source={this.state.runkitendpointjs} mode={'endpoint'}/></div>),rk()):(<div/>)}
    {rn()?ReactDOM.createPortal((<div id={'embedframe'}><Embed source={this.state.runkitrunnerjs} /></div>),rn()):(<div/>)}
    {/* {sh()?ReactDOM.createPortal((<div id={'embedframe'}><XTerm /></div>),sh()):(<div/>)} */}
    </div>)
  }
}

ReactDOM.render(<JavascriptPlayground />, document.getElementById('app'))
