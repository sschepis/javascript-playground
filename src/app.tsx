
import React, { h, Component } from 'react'
import ReactDOM from 'react-dom'
// import ConsolePanel from './components/console-panel'

import { PhosphorController, styles } from './phosphor/index'
import JSPlaygroundEngine, { ser } from './components/js-playground-engine'

export default class JavascriptPlayground extends Component {
  state: {
    logs: [],
    html,
    css,
    js,
    compiledOutput,
    onRefresh
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
      compiledOutput: ''
    }
    this.state = Object.assign(this.state, ser('jsplayground'))
    this.handleRefresh = this.handleRefresh.bind(this)
    const self = this
    this.engine = new JSPlaygroundEngine(Object.assign({
      onRefresh: (e) => this.handleRefresh(e)
    }, this.state))
  }

  componentDidMount() {
    document.addEventListener('inputs_updated', (e:any) => {
      this.setState(e.detail)
      this.engine = new JSPlaygroundEngine(Object.assign({
        onRefresh: (e) => this.handleRefresh(e)
      }, this.state))
    })
    this.engine.init()
    this.engine.refresh()
  }

  handleRefresh(o) {
    this.setState(o)
    this.dispatch('state_updated', o 
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
