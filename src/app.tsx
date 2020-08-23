
import React, { h, Component } from 'react'
import ReactDOM from 'react-dom'
// import ConsolePanel from './components/console-panel'

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
      css: '',
      js: '',
      jslibs: [],
      csslibs: [],
      compiledPage: '',
    }
    this.handleRefresh = this.handleRefresh.bind(this)
  }

  rebuildEngine() {
    console.log('JavascriptPlayground', 'rebuildEngine')
    this.engine = new JSPlaygroundEngine(Object.assign(this.state, {
      onRefresh: (e) => {
        console.log('JavascriptPlayground', 'handleRefresh')
        this.setComponentState(e)
        this.dispatch('state_updated', e)
      }
    }))
    this.engine.refresh()
  }

  componentDidMount() {
    const self = this
    console.log('JavascriptPlayground', 'componentDidMount')
    this.state = Object.assign(this.state, ser('jsplayground'))
    document.addEventListener('inputs_updated', 
      (e:any) => this.inputsUpdated(e)
    )
    document.addEventListener('state_updated', 
      (e:any) => this.stateUpdated(e)
    )
    this.dispatch('state_updated', this.state)
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
    this.setState(s)
  }

  handleRefresh(o) {
    console.log('JavascriptPlayground', 'handleRefresh')
    this.setComponentState(o)
    this.dispatch('state_updated', o)
  }

  dispatch (e:any, p:any = null) {
    document.dispatchEvent(p ? new CustomEvent(e, { detail: p }) : new Event(e))
  }
  
  get consoleElement() {
    if(this.consoleEl) {
      return this.consoleEl
    }
    this.consoleEl = document.getElementById('console-log-parent')
    return this.consoleEl
  }
  
  render() {
    return (<div style={styles}>
      <PhosphorController html={this.state.html} js={this.state.js} css={this.state.css} />
    </div>)
  }
}

ReactDOM.render(<JavascriptPlayground />, document.getElementById('app'))
