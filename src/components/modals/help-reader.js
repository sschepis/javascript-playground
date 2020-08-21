import React, { h, Component } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Iframe from '@trendmicro/react-iframe'

export default class HelpReader extends Component {
  render() {
    return (<Modal
      show={this.props.show}
      onHide={this.props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          help!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Iframe height={600} 
          width={"100%"} 
          style={{overflow:scroll,maxHeight:'600px'}} 
          src="help/jslibs.html" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onButtonClick}>Close</Button>
      </Modal.Footer>
    </Modal>)
  }
}