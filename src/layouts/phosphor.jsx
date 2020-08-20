import React, { h, Component } from 'react'
import JavascriptPlayground from './phosphor'
import { render } from 'react-dom'

import classes from './app.css'

export default class App extends Component {
  render() {
    return (
      <JavascriptPlayground style={classes}></JavascriptPlayground>
    )
  }
}

render(<App />, document.getElementById('app'))