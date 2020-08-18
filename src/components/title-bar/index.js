import React, { h, Component } from 'react'

import classes from './index.css'

export default class TitleBar extends Component {
  state = {
    text: ''
  }
  constructor (props) {
    super(props)
    this.handleExpand = this.handleExpand.bind(this)
    this.handleCollapse = this.handleCollapse.bind(this)
    this.handleArrowUp = this.handleArrowUp.bind(this)
    this.handleArrowDown = this.handleArrowDown.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state.text = props.text ? props.text : ''
  }

  handleExpand (v, c) {
    if (this.props.onExpand) {
      this.props.onExpand(this, v, c)
    }
  }

  handleCollapse (v, c) {
    if (this.props.onCollapse) {
      this.props.onCollapse(this, v, c)
    }
  }

  handleArrowUp (v, c) {
    if (this.props.onArrowUp) {
      this.props.onArrowUp(this, v, c)
    }
  }

  handleArrowDown (v, c) {
    if (this.props.onArrowDown) {
      this.props.onArrowDown(this, v, c)
    }
  }

  handleClose (v, c) {
    if (this.props.onClose) {
      this.props.onClose(this, v, c)
    }
  }

  render () {
    return (
      <div style={classes} className={'titlebar'}>
          <i style={{ marginLeft: 2, marginTop: 2, marginRight: 5 }} className='fa fa-dot-circle-o grabbing grid-stack-item-content' />
          <i style={{ marginLeft: 2, marginTop: 2 }} onClick={this.handleArrowUp} className='fa fa-clipboard' />
          <span className={'title-text'}>{this.props.text}</span>
          
          <button style={{ float: 'right', marginRight: 4, marginTop: 2 }}>
            <i style={{ marginRight: 4, marginTop: 4, display: 'none' }} className='fa fa-caret-up' />
            <i style={{ marginRight: 4, marginTop: 4 }} onClick = {
                (e) => e.target.classes.find(el => el === 'hidden') 
                ? e.target.classes.filter(e => e !== 'hidden')
                : e.target.classes.push('hidden')}
            className='fa fa-caret-down' />
          </button>
      </div>
    )
  }
}
