import React, { h, Component } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import AceEditor from 'react-ace'

export default class JsIncludesModal extends Component {
  render() {
    return (<Modal
      show={this.props.show}
      onHide={this.props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          js libraries
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Javascript libraries</h4>
        <AceEditor
          value={this.props.value}
          width='100%'
          height='300px'
          mode='javascript'
          theme='monokai'
          onChange={(v) => this.props.onTextChange({ jslibs: v })}
          name='jslibsEditor'
          editorProps={{ $blockScrolling: true }} />
      </Modal.Body>
      <Modal.Footer><Button onClick={this.props.onButtonClick}>Close</Button></Modal.Footer>
    </Modal>)
  }
}