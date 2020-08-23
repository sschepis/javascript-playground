// @ts-nocheck

import React, { h, Component } from 'react'
import ReactDOM from 'react-dom'
import ConsolePanel from './components/console-panel'
import 'regenerator-runtime/runtime'

import { PhosphorController, styles } from './phosphor/index'

export default class JavascriptPlayground extends Component {
  consoleEl
  state: {
    logs: []
  }
  constructor(props: any) {
    super(props)
    this.state = {
      logs: []
    }
    if (console.feed) {
      Object.keys(console.feed.pointers).forEach(key => {
        console[key] = console.feed.pointers[key]
      })
    }
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
      <ConsolePanel />
    </div>)
  }
}

ReactDOM.render(<JavascriptPlayground />, document.getElementById('app'))
