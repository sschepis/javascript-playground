import React, { h, Component } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ReactMarkdown = require('react-markdown')

export default class MarkdownReader extends Component {
  render() {
    return (<Modal
      show={this.props.show}
      onHide={this.props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Markdown Readers
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReactMarkdown input={this.props.input} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onButtonClick}>Close</Button>
      </Modal.Footer>
    </Modal>)
  }
}