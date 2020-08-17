import React, { h, Component } from 'react'
import { findDOMNode } from 'react-dom'
import AceEditor from 'react-ace'
import ActionBar from '../action-bar'
import ConsolePanel from '../console-panel'
import TitleBar from '../title-bar'
import Iframe from '@trendmicro/react-iframe'
import { Modal, Button } from 'react-bootstrap'
import { render } from 'react-dom'

import classes from './index.css'

import '/node_modules/ace-builds/src-min-noconflict/mode-javascript'
import '/node_modules/ace-builds/src-min-noconflict/mode-typescript'
import '/node_modules/ace-builds/src-min-noconflict/mode-css'
import '/node_modules/ace-builds/src-min-noconflict/mode-html'
import '/node_modules/ace-builds/src-min-noconflict/ext-beautify'
import '/node_modules/ace-builds/src-min-noconflict/ext-code_lens'
import '/node_modules/ace-builds/src-min-noconflict/ext-language_tools'
import '/node_modules/ace-builds/src-min-noconflict/ext-modelist'
import '/node_modules/ace-builds/src-min-noconflict/ext-options'
import '/node_modules/ace-builds/src-min-noconflict/ext-searchbox'
import '/node_modules/ace-builds/src-min-noconflict/ext-settings_menu'
import '/node_modules/ace-builds/src-min-noconflict/ext-themelist'

import '/node_modules/ace-builds/src-min-noconflict/theme-ambiance'
import '/node_modules/ace-builds/src-min-noconflict/theme-chaos'
import '/node_modules/ace-builds/src-min-noconflict/theme-chrome'
import '/node_modules/ace-builds/src-min-noconflict/theme-clouds'
import '/node_modules/ace-builds/src-min-noconflict/theme-clouds_midnight'
import '/node_modules/ace-builds/src-min-noconflict/theme-cobalt'
import '/node_modules/ace-builds/src-min-noconflict/theme-crimson_editor'
import '/node_modules/ace-builds/src-min-noconflict/theme-dawn'
import '/node_modules/ace-builds/src-min-noconflict/theme-dracula'
import '/node_modules/ace-builds/src-min-noconflict/theme-dreamweaver'
import '/node_modules/ace-builds/src-min-noconflict/theme-eclipse'
import '/node_modules/ace-builds/src-min-noconflict/theme-github'
import '/node_modules/ace-builds/src-min-noconflict/theme-gob'
import '/node_modules/ace-builds/src-min-noconflict/theme-gruvbox'
import '/node_modules/ace-builds/src-min-noconflict/theme-idle_fingers'
import '/node_modules/ace-builds/src-min-noconflict/theme-iplastic'
import '/node_modules/ace-builds/src-min-noconflict/theme-katzenmilch'
import '/node_modules/ace-builds/src-min-noconflict/theme-kr_theme'
import '/node_modules/ace-builds/src-min-noconflict/theme-kuroir'
import '/node_modules/ace-builds/src-min-noconflict/theme-merbivore'
import '/node_modules/ace-builds/src-min-noconflict/theme-merbivore_soft'
import '/node_modules/ace-builds/src-min-noconflict/theme-mono_industrial'
import '/node_modules/ace-builds/src-min-noconflict/theme-monokai'
import '/node_modules/ace-builds/src-min-noconflict/theme-nord_dark'
import '/node_modules/ace-builds/src-min-noconflict/theme-pastel_on_dark'
import '/node_modules/ace-builds/src-min-noconflict/theme-solarized_dark'
import '/node_modules/ace-builds/src-min-noconflict/theme-solarized_light'
import '/node_modules/ace-builds/src-min-noconflict/theme-sqlserver'
import '/node_modules/ace-builds/src-min-noconflict/theme-terminal'
import '/node_modules/ace-builds/src-min-noconflict/theme-textmate'
import '/node_modules/ace-builds/src-min-noconflict/theme-tomorrow'
import '/node_modules/ace-builds/src-min-noconflict/theme-tomorrow_night'
import '/node_modules/ace-builds/src-min-noconflict/theme-tomorrow_night_blue'
import '/node_modules/ace-builds/src-min-noconflict/theme-tomorrow_night_bright'
import '/node_modules/ace-builds/src-min-noconflict/theme-tomorrow_night_eighties'
import '/node_modules/ace-builds/src-min-noconflict/theme-twilight'
import '/node_modules/ace-builds/src-min-noconflict/theme-vibrant_ink'
import '/node_modules/ace-builds/src-min-noconflict/theme-xcode'

const oframe_css = `
body {
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
}
`
const oframe_js = `
  console = window.parent.console
`

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function JsIncludesModal(props) {
  return (
    <Modal
      {...props}
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
        <textarea value={props.jsLibs} style={{width:'100%', height: 150}}></textarea>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onjsLibsHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function CssIncludesModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          css libraries
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>CSS libraries</h4>
        <textarea value={props.cssLibs} style={{width:'100%', height: 150}}></textarea>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onCssLibsHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default class JavascriptPlayground extends Component {
  state = {
    html : '',
    css : '',
    js : '',
    jsLibs: [],
    cssLibs: [],
    iframe: undefined,
    iframeDOM: undefined,
    showJsLibrariesModal: false,
    showCssLibrariesModal: false
  }

  constructor (props) {
    super(props)

    this.oniFrameLoad = this.oniFrameLoad.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleJsLibsClick = this.handleJsLibsClick.bind(this)
    this.handleCssLibsClick = this.handleCssLibsClick.bind(this)
    this.handleJsLibsClose = this.handleJsLibsClose.bind(this)
    this.handleCssLibsClose = this.handleCssLibsClose.bind(this)

    this.state.iframe = (<Iframe
      src="empty.html"
      onLoad={this.oniFrameLoad}
    />)
  }

  headContent() {
    return `
    <script type='text/javascript'>${oframe_js}</script>
    <script type='text/javascript'>${this.state.js}</script>
    <style>${oframe_css + this.state.css}</style>
    `
  }

  buildContentFrame(frame) {
    const head = frame.contentDocument.head
    const body = frame.contentDocument.body

    const createScriptElement = (o, s, t) => {
      var script = document.createElement("script");
      script.type = "text/javascript";
      if(s) {
        script.src = s;
      } else {
        script.text = t;
      }
      o.appendChild(script);
    }
    this.state.jsLibs.forEach((el) => createScriptElement(head, el))
    createScriptElement(head, null, this.state.js )
    body.innerHTML = this.state.html
  }

  oniFrameLoad (event) {
    const iframeDOM = event.iframe
    this.setState({iframeDOM})
    this.buildContentFrame(iframeDOM)
  }

  handleChange (v) {
    const self = this
    if (!self.state.iframeDOM) {
      return
    }
    debounce(() => {
      this.buildContentFrame(this.state.iframeDOM)
    }, 5000)()
    self.setState(Object.assign(this.state, v))
  }

  handleJsLibsClick(v) {
    this.state.showJsLibrariesModal = true
  }

  handleCssLibsClick(v) {
    this.state.showCssLibrariesModal = true
  }

  handleJsLibsClose(v) {
    this.state.showJsLibrariesModal = false
  }

  handleCssLibsClose(v) {
    this.state.showCssLibrariesModal = false
  }

  render() {
    // findDOMNode
    return (
      <div>
      <div>
      <JsIncludesModal
        show={this.state.showJsLibrariesModal}
        onHide={this.handleJsLibsClose}
      />
      <CssIncludesModal
        show={this.state.showCssLibrariesModal}
        onHide={this.handleCssLibsClose}
      />
      </div>
      <div style={classes} className='grid-stack debug-console-app'>
        <div className='grid-stack-item output-panel'
          data-gs-no-move='no'
          data-gs-no-resize='no'
          data-gs-locked='no'
          data-gs-x={6}
          data-gs-y={1}
          data-gs-min-height={2}
          data-gs-min-width={6}
          data-gs-height={6}
          data-gs-width={6}>
          <div className='editor-frame' style={{height:'100%'}}>
            <TitleBar text='output' />
            <div id="root">{this.state.iframe}</div>
          </div>
        </div>

        <div className='grid-stack-item actionbar-panel'
          data-gs-no-move='no'
          data-gs-no-resize='no'
          data-gs-locked='no'
          data-gs-x={0}
          data-gs-y={0}
          data-gs-height={1}
          data-gs-min-height={1}
          data-gs-max-height={1}
          data-gs-min-width={12}
          data-gs-min-width={12}
          data-gs-width={12} >
          <div className='editor-frame'>
          <ActionBar></ActionBar></div>
        </div>

        <div className='grid-stack-item input-panel'
          data-gs-no-move='no'
          data-gs-no-resize='no'
          data-gs-locked='no'
          data-gs-x={0}
          data-gs-y={1}
          data-gs-height={3}
          data-gs-min-height={1}
          data-gs-min-width={3}
          data-gs-width={6} >
          <div className='editor-frame'>
          <TitleBar text='html' />
          <AceEditor
              value={this.state.html}
              width='100%'
              height='100%'
              mode='html'
              theme='monokai'
              onChange={(v) => this.handleChange({ html: v })}
              name='htmlEditor'
              editorProps={{ $blockScrolling: true }} /></div>
        </div>

        <div className='grid-stack-item input-panel'
          data-gs-no-move='no'
          data-gs-no-resize='no'
          data-gs-locked='no'
          data-gs-x={0}
          data-gs-y={4}
          data-gs-min-height={1}
          data-gs-min-width={3}
          data-gs-height={3}
          data-gs-width={6} >
          <div className='editor-frame'>
          <TitleBar  text='css' onArrowUp={this.handleCssLibsClick} />
          <AceEditor
              value={this.state.css}
              width='100%'
              height='100%'
              mode='css'
              theme='monokai'
              onChange={(v) => this.handleChange({ css: v })}
              name='cssEditor'
              editorProps={{ $blockScrolling: true }} /></div>
        </div>

        <div className='grid-stack-item input-panel'
          data-gs-no-move='no'
          data-gs-no-resize='no'
          data-gs-locked='no'
          data-gs-x={0}
          data-gs-y={7}
          data-gs-min-height={1}
          data-gs-min-width={3}
          data-gs-height={3}
          data-gs-width={6} >
          <div className='editor-frame'>
          <TitleBar  text='js' onArrowUp={this.handleJsLibsClick} />
          <AceEditor
              value={this.state.javascript}
              width='100%'
              height='100%'
              mode='javascript'
              theme='monokai'
              onChange={(v) => this.handleChange({ js: v })}
              name='javascriptEditor'
              editorProps={{ $blockScrolling: true }} /></div>
        </div>
  
        <div style={{float:'left'}} className='grid-stack-item console-panel'
            data-gs-no-move='no'
            data-gs-no-resize='no'
            data-gs-locked='no'
            data-gs-x={6}
            data-gs-y={7}
            data-gs-min-height={1}
            data-gs-min-width={3}
            data-gs-height={3}
            data-gs-width={6}>
            <div className='editor-frame'>
            <TitleBar text='console' />
            <ConsolePanel /></div>
        </div>
      </div>
      </div>
    )
  }
}