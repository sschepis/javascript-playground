// import a CSS module
import { h, Component } from 'react'

import 'regenerator-runtime/runtime'
import { Console } from 'console-feed'

import './index.css'

export default class ConsolePanel extends Component {
  state = {
    cssStyles: {
      minHeight: 150,
      backgroundColor: '#242424',
      overflow: 'scroll'
    }
  }

  render () {
    return (
      <div className='console-panel' id='console-panel' style={this.state.cssStyles}>
        <Console logs={this.props.logs} style={{ border: '1px solid #eee' }} variant='dark' />
      </div>
    )
  }
}
