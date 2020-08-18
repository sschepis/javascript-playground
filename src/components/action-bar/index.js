// import a CSS module
import React, { h, Component } from 'react'

import 'font-awesome/css/font-awesome.css'

import './index.css'
// #009688
export default class ActionBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      trapEnter: props.trapEnter | false,
      showOutput: props.showOutput | true
    }
    // This binding is necessary to make `this` work in the callback
    this.handleRunClick = this.handleRunClick.bind(this)
    this.handleClearClick = this.handleClearClick.bind(this)
    this.handleLoadClick = this.handleLoadClick.bind(this)
    this.handleTrapEnterChange = this.handleTrapEnterChange.bind(this)
    this.handleShowOutputChange = this.handleShowOutputChange.bind(this)
  }

  handleRunClick () {
    if (this.props.onRunClick) {
      this.props.onRunClick(this)
    }
  }

  handleClearClick () {
    if (this.props.onClearClick) {
      this.props.onClearClick(this)
    }
  }

  handleLoadClick () {
    if (this.props.onLoadClick) {
      this.props.onLoadClick(this)
    }
  }

  handleTrapEnterChange (evt) {
    const newValue = evt.target.checked
    if (this.props.onTrapEnterChange) {
      this.props.onTrapEnterChange(this, newValue)
    }
    if (this.props.trapEnter !== undefined && this.props.trapEnter !== newValue) {
      this.setState({ trapEnter: newValue })
      this.props.trapEnter = newValue
    }
  }

  handleShowOutputChange (evt, nv) {
    const newValue = evt ? evt.target.checked : nv
    if (this.props.onShowOutputChange) {
      this.props.onShowOutputChange(this, newValue)
    }
    if (this.props.showOutput !== undefined && this.props.showOutput !== newValue) {
      this.setState({ showOutput: newValue })
      this.props.showOutput = newValue
    }
  }

  render () {
    const so = this.state.showOutput
    const te = this.state.trapEnter
    const tg = () => {
      this.handleShowOutputChange(undefined, !this.state.showOutput)
    }
    return (
      <div style={{ minHeight: 50 }} className='action-bar'>
        <div className='toolbar toolbar--primary'>
          <div className='toolbar__section'>
            <button onClick={this.handleRunClick} className='toolbar-item'>
              <div className='toolbar-item__icon'>
                <i className='fa fa-play' />
              </div>
            </button>
            <div href='#' className='toolbar-separator' />
          </div>
          <div className='toolbar__section toolbar__section--fill' >
            <button onClick={this.handleClearClick} className='toolbar-item'>
              <div className='toolbar-item__icon'>
                <i className='fa fa-eraser' />
              </div>
            </button>
            <button className='toolbar-item' style={{ paddingRight: '20px', paddingLeft: '15px' }}>
              <div className='toolbar-item__icon' style={{ width: 'auto' }}>
                <input type='checkbox'
                  id='trapEnter'
                  onChange={this.handleTrapEnterChange}
                  value={te} /> trap crlf
              </div>
            </button>
          </div>
          <div className='toolbar__section'>
            <div href='#' className='toolbar-separator' />
            <button onClick={tg} className='toolbar-item' style={{ paddingRight: '20px', paddingLeft: '15px' }}>
              <div className='toolbar-item__icon'>
                <input type='checkbox'
                  id='showOutput'
                  onChange={this.handleShowOutputChange}
                  checked={so ? 'checked' : ''} /> output
              </div>
            </button>
            <button onClick={this.props.onGearClick} className='toolbar-item'>
              <div className='toolbar-item__icon'>
                <i className='fa fa-gear' />
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
