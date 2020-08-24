
import React, { h, Component } from 'react'
import ReactDOM from 'react-dom'

import 'regenerator-runtime/runtime'
import ConsolePanel from './components/console-panel'
import { Hook } from 'console-feed'

import { PhosphorController, styles } from './phosphor/index'
import JSPlaygroundEngine, { ser, debounce } from './components/js-playground-engine'

export default class JavascriptPlayground extends Component {
  state: {
    logs: [],
    html,
    css,
    js,
    jslibs,
    csslibs,
    compiledPage
  }
  consoleEl
  updatedEvent
  engine
  constructor(props: any) {
    super(props)
    this.state = {
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
      compiledPage: ''
    }
    this.state = Object.assign(this.state, ser('jsplayground'))
    this.handleRefresh = this.handleRefresh.bind(this)
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
    this.installLogger()
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
    const o = Object.assign({},e.detail)
    delete o.onRefresh
    ser('jsplayground', o)
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

  render() {
    const getTabsCount = () => {
      return {
        js: this.state.js.length,
        css: this.state.css.length
      }
    }
    return (<div style={styles}><PhosphorController tabs={getTabsCount()}/>
    {document.getElementById('console-log-parent')?ReactDOM.createPortal(
      (<ConsolePanel logs={this.state.logs}/>),document.getElementById('console-log-parent')):(<div/>)}
    </div>)
  }
}

ReactDOM.render(<JavascriptPlayground />, document.getElementById('app'))
