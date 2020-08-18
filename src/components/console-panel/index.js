// import a CSS module
import React, { h, Component } from 'react'
import { Hook, Console } from 'console-feed'
import TitleBar from '../title-bar'

import './index.css'

export default class ConsolePanel extends Component {
  state = {
    logs: [],
    cssStyles: {
      minHeight: 150,
      backgroundColor: '#242424',
      overflow: 'scroll'
    }
  };

  componentDidMount () {
    // Disable code-sandbox console
    if (console.feed) {
      Object.keys(console.feed.pointers).forEach(key => {
        console[key] = console.feed.pointers[key]
      })
    }
    Hook(
      window.console,
      log => {
        this.setState({ logs: [...this.state.logs, log] })
        const doo = document.getElementById('console-panel')
        doo.scrollTop = doo.scrollHeight
        this.setState({cssStyles:{overflow:'scroll'}})
      },
      false
    )
    console.warn = console.feed.pointers.warn = function () {}
  }

  render () {
    return (
      <div className='console-panel' id='console-panel' style={this.state.cssStyles}>
        <Console logs={this.state.logs} style={{border: '1px solid #eee'}} variant='dark' />
      </div>
    )
  }
}
