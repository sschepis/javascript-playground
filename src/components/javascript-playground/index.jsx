import React, { h, Component } from 'react'
import AceEditor from 'react-ace'
import ActionBar from '../action-bar'
import ConsolePanel from '../console-panel'
import TitleBar from '../title-bar'
import Iframe from '@trendmicro/react-iframe'
import classes from './index.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


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

const framePropTypes = {
  width: '100%',
  height: '100%',
  sandbox: {
    allowForms: true,
    allowModals: true,
    allowPointerLock: false,
    allowPopups: true,
    allowSameOrigin: true,
    allowScripts: true,
    allowTopNavigation: false
  }}

const debounceTimes = {}
const debounceTimerRefs = {}

class JsIncludesModal extends Component {
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
class CssIncludesModal extends Component {
  render() {
    return (<Modal
      show={this.props.show}
      onHide={this.props.onHide}
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
        <AceEditor
          value={this.props.value}
          width='100%'
          height='300px'
          mode='css'
          theme='monokai'
          onChange={(v) => this.props.onTextChange({ csslibs: v })}
          name='csslibsEditor'
          editorProps={{ $blockScrolling: true }} />
      </Modal.Body>
      <Modal.Footer><Button onClick={this.props.onButtonClick}>Close</Button></Modal.Footer>
    </Modal>)
  }
}
class HelpReader extends Component {
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

const ser = (k,v) => {
  if (!v) {
    const v = window.localStorage.getItem(k)
    console.log('getser', v)
    return v ? JSON.parse(v) : null
  }
  window.localStorage.setItem(k, JSON.stringify(v))
  console.log('setser', v)
}


function debounce(f, t) {
  const fName = f.name ? f.name : 'anonymous'
  function funcOut() {
      const timeNow = Date.now()
      const timeBefore = debounceTimes[fName] ? debounceTimes[fName] : -1
      const timerRef = debounceTimerRefs[fName]
      if (timerRef) {
          clearTimeout(timerRef)
          debounceTimerRefs[fName] = undefined
      }
      if(timeBefore === -1 || timeNow - timeBefore >= t) {
          debounceTimes[fName] = timeNow
          return f()
      } else {
        debounceTimerRefs[fName] = setTimeout(f, t - (timeNow - timeBefore))
      }
  }
  return funcOut
}

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

export default class JavascriptPlayground extends Component {
  state = {
    html : '',
    css : '',
    js : '',
    jslibs: '',
    csslibs: '',
    iframe: undefined,
    dom: undefined,
    showjs: false,
    showcss: false,
    showhelp: false
  }

  componentDidMount() {
    this.setState({
      iframe: (<Iframe src={'empty.html'} onLoad={this.oniFrameLoad} />),
      mounted: true
    })
    const s = ser('jsplayground')
    if (s) {
      this.state = Object.assign(this.state, s)
    }
  }

  handleChanges = (e) => {
    this.setState(e)
    this.refreshiFrame()
  }
  
  handleShowJs = () => this.setState({ showjs: true })
  handleCloseJs = () => {
    this.setState({ showjs: false })
    this.refreshiFrame()
  }
  
  handleShowCss = () => this.setState({ showcss: true })
  handleCloseCss = () => {
    this.setState({ showcss: false })
    this.refreshiFrame()
  }
  
  handleHelpLoad = () =>this.setState({ showhelp: false })
  handleHelpClose = () => { this.setState({ showhelp: false }) }

  textToArray(t) {
    if(!t.split) { return [] }
    return t.split('\n')
  } 
  arrayToText(t) {
    return t.join('\n')
  } 

  constructor (props) {
    super(props)

    this.oniFrameLoad = this.oniFrameLoad.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChanges = this.handleChanges.bind(this)
    this.handleShowJs = this.handleShowJs.bind(this)
    this.handleShowCss = this.handleShowCss.bind(this)
    this.handleCloseJs = this.handleCloseJs.bind(this)
    this.handleCloseCss = this.handleCloseCss.bind(this)
    this.handleGearClick = this.handleGearClick.bind(this)
    this.handleHelpLoad = this.handleHelpLoad.bind(this)
    this.handleHelpClose = this.handleHelpClose.bind(this)
  }

  buildContentFrame(frame) {
    if(!frame) return
    if(!frame.contentDocument) return
    const head = frame.contentDocument.head
    const body = frame.contentDocument.body

    const scriptContent = []
    const styleContent = []

    const createScriptElement = (c, s, t) => {
      if (!s && !t) { return }
      var sval = `<script type="text/javascript" `
      if (s) { sval += ` src="${s}" ></script>` } 
      else if (t) { sval += `>${t}</script>` }
      c.push(sval)
      return t
    }
    const createStyleElement = (c, s, t) => {
      if(!s && !t) { return }
      if(s) { c.push(`<link rel="stylesheet" href="${s}" />`) } 
      else if (t) { c.push(`<style>${t}</style>`);  return t }
    }

    this.textToArray(this.state.jslibs).forEach((el) => createScriptElement(scriptContent, el))
    this.textToArray(this.state.csslibs).forEach((el) => createStyleElement(styleContent, el))

    const wrap = (cd) => `
    $(document).ready(() => {
    try {
      ${cd}
    } catch (e) {
      console.error(e)
    }}
    `
    const bodyScripts = `<script type="text/javascript">${wrap(oframe_js+this.state.js)}</script>`
    const bodyStyles = `<style>${oframe_css}\n${this.state.css}</style>`
    const scripts = scriptContent.join('\n')
    const styles = styleContent.join('\n')

    $(head).append($(`${scripts}\n${styles}`))
    body.innerHTML = `${bodyStyles}\n\n${this.state.html}\n\n${bodyScripts}`;
  }

  refreshiFrame() {
    const o = {
      html : this.state.html,
      css : this.state.css,
      js : this.state.js,
      jslibs: this.state.jslibs,
      csslibs: this.state.csslibs,
    }
    ser('jsplayground', o)
    if(this.state.dom) {
      setTimeout(() => this.buildContentFrame(this.state.dom), 0)
    }
  }

  oniFrameLoad (event) {
    this.setState({
      dom: event.iframe
    })
    this.refreshiFrame()
  }

  handleGearClick(e) {
    this.setState({showhelp:true})
  }

  handleChange (v) {
    this.setState(v)
    debounce(()=>this.refreshiFrame(), 2000)()
  }

  render() {

    // findDOMNode
    return (
      <div>
      <div style={classes} className='grid-stack debug-console-app'>

        <JsIncludesModal
          show={this.state.showjs}
          value={this.state.jslibs}
          onHide={this.handleCloseJs}
          onTextChange={this.handleChanges}
          onButtonClick={this.handleCloseJs} />
        <CssIncludesModal
          show={this.state.showcss}
          value={this.state.csslibs}
          onHide={this.handleCloseCss}
          onTextChange={this.handleChanges}
          onButtonClick={this.handleCloseCss} />
        <HelpReader
          show={this.state.showhelp}
          onHide={this.handleHelpClose}
          onHelpLoad={this.handleHelpLoad}
          onButtonClick={this.handleHelpClose} />
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
            <div id="root">
              {this.state.iframe}
            </div>
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
          <ActionBar onGearClick={this.handleGearClick} ></ActionBar></div>
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
          <TitleBar text='css' onArrowUp={this.handleShowCss} />
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
          <TitleBar  text='js' onClick={this.handleShowJs} onArrowUp={this.handleShowJs} />
          <AceEditor
              value={this.state.js}
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