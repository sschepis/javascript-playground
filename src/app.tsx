
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
      css: [],
      js: [],
      jslibs: [],
      csslibs: [],
      compiledPage: '',
    }
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
    this.state = Object.assign(this.state, ser('jsplayground'))
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
    ser('jsplayground', e.detail)
  }

  inputsUpdated(e:any) {
    this.setComponentState(e.detail)
    const debounceRebuild = () => {
      this.rebuildEngine()
    }
    debounce(debounceRebuild, 100)()
  }

  setComponentState(s) {
    if(s.js && s.index) {
      var js = this.state.js
      if(!Array.isArray(js)) {
        js = [js]
      }
      while(js.length<=s.index) {
        js.push('')
      }
      js[s.index] = s.js
      s.js = js
    }
    if(s.css && s.index) {
      var css = this.state.css
      if(!Array.isArray(css)) {
        css = [css]
      }
      while(css.length<=s.index) {
        css.push('')
      }
      css[s.index] = s.css
      s.css = css
    }
    this.setState(s)
  }

  handleRefresh(o) {
    this.setComponentState(o)
    this.dispatch('state_updated', o)
  }

  dispatch (e:any, p:any = null) {
    document.dispatchEvent(p ? new CustomEvent(e, { detail: p }) : new Event(e))
  }

  render() {
    return (<div style={styles}><PhosphorController />
    {document.getElementById('console-log-parent')?ReactDOM.createPortal(
      (<ConsolePanel logs={this.state.logs}/>),document.getElementById('console-log-parent')):(<div/>)}
    </div>)
  }
}

ReactDOM.render(<JavascriptPlayground />, document.getElementById('app'))
