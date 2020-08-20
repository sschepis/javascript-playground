import React, { h, Component } from 'react'
import JavascriptPlayground from './gridstack'
import { render } from 'react-dom'

import classes from './gridstack.css'

export default class App extends Component {
  render() {
    return (
      <JavascriptPlayground style={classes}></JavascriptPlayground>
    )
  }
}

render(<App />, document.getElementById('app'))