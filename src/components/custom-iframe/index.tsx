import React, { h, Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

class CustomIFrame extends Component {
  static propTypes = {
    srcDoc: PropTypes.string.isRequired,
    onLoad: PropTypes.func,
  }
  props: {
    onLoad: any
  }
  componentDidMount () {
    let iframe = ReactDOM.findDOMNode(this.refs.iframe)
    iframe.addEventListener('load', this.props.onLoad);
  }
  render () {
    return (
      <iframe
        ref="iframe"
        src="empty.html"
        {...this.props}
        frameBorder={'0'}
        width={'100%'}
        height={'100%'}
        style={{
      width: '100%',
      height: '100%',
      border: '0',
      position: 'absolute',
    }} />
    )
  }
}