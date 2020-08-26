// import a CSS module
import React, { h, Component } from 'react'
import MicroModal from 'micromodal'
import './style.css'

export default class ReactMicroModal extends Component {
  state = {
  };

  componentDidMount () {
    MicroModal.init({
      onShow: modal => this.props.onShow, // [1]
      onClose: modal => this.props.onClose, // [2]
      openTrigger: this.props.openTrigger || 'data-custom-open', // [3]
      closeTrigger: this.props.closeTrigger || 'data-custom-close', // [4]
      openClass: this.props.openClass || 'is-open', // [5]
      disableScroll: this.props.disableScroll || true, // [6]
      disableFocus: this.props.disableFocus || false, // [7]
      awaitOpenAnimation: this.props.awaitOpenAnimation || false, // [8]
      awaitCloseAnimation: this.props.awaitCloseAnimation || false, // [9]
      debugMode: this.props.debugMode || true // [10]
    })
  }

  render () {
    return (<div class='modal micromodal-slide' id={this.props.id || 'micromodal'} aria-hidden={this.props.visible}>
      <div class='modal__overlay' tabindex='-1' data-micromodal-close>
        <div class='modal__container' role='dialog' aria-modal='true' aria-labelledby='modal-1-title'>
          <header class='modal__header'>
            <h2 class='modal__title' id='modal-1-title'>
              {this.props.title}
            </h2>
            <button class='modal__close' aria-label='Close modal' data-micromodal-close />
          </header>
          <main class='modal__content' id='modal-1-content'>
            {this.props.body}
          </main>
          <footer class='modal__footer'>
            <button onClick={this.props.onOkayClick} class='modal__btn modal__btn-primary'>{this.props.okayText || 'Okay'}</button>
            <button onClick={this.props.onCancelClick} class='modal__btn' data-micromodal-close aria-label='Close this dialog window'>{this.props.cancelText || 'Cancel'}</button>
          </footer>
        </div>
      </div>
    </div>)
  }
}
