import React, { h, Component } from 'react'
import AceEditor from 'react-ace'
import ActionBar from '../action-bar'
import ConsolePanel from '../console-panel'
import TitleBar from '../title-bar'
import classes from './index.css'
import JsIncludesModal from './js-includes-modal'
import CssIncludesModal from './css-includes-modal'
import HelpReader from './help-reader'
import Iframe from 'react-iframe'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'


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

class ICustomFrame extends Component {
  static propTypes = {
    srcDoc: PropTypes.string.isRequired,
    onLoad: PropTypes.func,
  }
  componentDidMount () {
    let iframe = ReactDOM.findDOMNode(this.refs.iframe)
    iframe.addEventListener('load', this.props.onLoad);
  }
  render () {
    return (
      <iframe
        ref="iframe"
        srcdoc={this.props.srcDoc}
        frameBorder={'1'}
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

const localStore = window.localStorage

const ser = (k,v) => {
  if (!v) {
    const v = localStore.getItem(k)
    return JSON.parse(v)
  }
  window.localStorage.setItem(k, JSON.stringify(v))
}

const debounceTimes = {}
const debounceTimerRefs = {}

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

export default class JavascriptPlayground extends Component {
  state = {
    html : '',
    css : '',
    js : '',
    jslibs: '',
    csslibs: '',
    logs: [],
    dom: undefined,
    compiledPage: '',
    showjs: false,
    showcss: false,
    showhelp: false,
    refreshKey: 0,
    iframe: undefined,
    liveCompile: true
  }
  
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleChanges = this.handleChanges.bind(this)
    this.handleShowJs = this.handleShowJs.bind(this)
    this.handleShowCss = this.handleShowCss.bind(this)
    this.handleCloseJs = this.handleCloseJs.bind(this)
    this.handleCloseCss = this.handleCloseCss.bind(this)
    this.handleGearClick = this.handleGearClick.bind(this)
    this.handleHelpLoad = this.handleHelpLoad.bind(this)
    this.handleHelpClose = this.handleHelpClose.bind(this)
    this.handleLiveCompileChange = this.handleLiveCompileChange.bind(this)
    this.frameContentDidMount = this.frameContentDidMount.bind(this)
    this.frameContentDidUpdate = this.frameContentDidUpdate.bind(this)
    this.onFrameContextConsume = this.onFrameContextConsume.bind(this)
    this.saveAndRefresh = this.saveAndRefresh.bind(this)
    this.frameLoaded = this.frameLoaded.bind(this)
  }

  componentDidMount() {
    this.setState({ mounted: true })
    const s = ser('jsplayground')
    if (s) {
      this.state = Object.assign(this.state, s)
    }
    this.refreshiFrame()
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

  handleLiveCompileChange = (lc) =>this.setState({ liveCompile: lc })

  runPage() {

  }

  compilePage() {
    const textToArray = (t) => {
      if(!t.split) { return [] }
      return t.split('\n')
    } 
    return `<html>
    <head>
    ${textToArray(this.state.csslibs).map(el => {
      if (!el || el.startsWith('#')) { return }
      return `<link rel="stylesheet" href="${el}" />`
    }).join('\n')}
    <style>
    body {
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0;
    }
    ${this.state.css}
    </style>
    <script type="text/javascript">
      console = window.console = window.parent.console
      const loadJs = (f) => {
        const s = document.createElement('script')
        s.setAttribute('type','text/javascript')
        s.setAttribute('src', f)
        document.body.appendChild(s)
      }
    </script>
    ${textToArray(this.state.jslibs).map(el => {
      if (!el || el.startsWith('#')) { return }
      return `<script type="text/javascript" src="${el}"></script>`
    }).join('\n')}
    </head>
    <body>
    ${this.state.html}
    </body>
    <script type="text/javascript">
    ${this.state.js}
    </script>
    </html>`
  }

  saveAndRefresh() {
    const self = this
    const o = {
      html : this.state.html,
      css : this.state.css,
      js : this.state.js,
      jslibs: this.state.jslibs,
      csslibs: this.state.csslibs,
      liveCompile: this.state.liveCompile,
      compiledPage: this.state.liveCompile 
        ? this.compilePage() 
        : this.state.compiledPage
    }
    ser('jsplayground', o)
    if(this.state.liveCompile) {
      setTimeout(()=>self.refreshiFrame(), 0)
    }
  }

  refreshiFrame() {
    this.setState({
      compiledPage: this.compilePage(),
      refreshKey: this.state.refreshKey + 1,
      iframe: ((<ICustomFrame srcDoc={this.state.compiledPage}
        key={this.state.refreshKey}
        width={'100%'}
        height={'300px'}
        style={{width:'100%', height: '100%', border: 0}}
        id={'contentframe'}
        className={'contentframe'} />))
    })
  }

  frameContentDidMount (event) {
    console.log('frameCOntentDidMount')
  }

  frameContentDidUpdate (event) {
    console.log('frameContentDidUpdate')
  }

  onFrameContextConsume (event) {
    console.log('onFrameContextConsume')
  }

  frameLoaded (event) {
    console.log('frameLoaded', event)
  }
  
  handleGearClick(e) {
    this.setState({showhelp:true})
  }

  handleChange (v) {
    this.setState(v)
    debounce(()=>this.saveAndRefresh(), 2000)()
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
          <div className='abswrap'>
            <TitleBar text='output' />
            {this.state.iframe}
          </div></div>
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
          <div className='abswrap'>
          <ActionBar 
            onLiveCompileChange={this.handleLiveCompileChange}
            liveCompile={this.state.liveCompile}
            onGearClick={this.handleGearClick} 
          ></ActionBar>
          </div></div>
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
          <div className='abswrap'>
            <TitleBar text='html' />
            <AceEditor
                value={this.state.html}
                width='100%'
                height='100%'
                mode='html'
                theme='monokai'
                onChange={(v) => this.handleChange({ html: v })}
                name='htmlEditor'
                editorProps={{ $blockScrolling: true }} />
            </div></div>
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
          <div className='abswrap'>
            <TitleBar text='css' onArrowUp={this.handleShowCss} />
            <AceEditor
                value={this.state.css}
                width='100%'
                height='100%'
                mode='css'
                theme='monokai'
                onChange={(v) => this.handleChange({ css: v })}
                name='cssEditor'
                editorProps={{ $blockScrolling: true }} />
                </div></div>
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
          <div className='abswrap'>
          <TitleBar  text='js' onClick={this.handleShowJs} onArrowUp={this.handleShowJs} />
          <AceEditor
              value={this.state.js}
              width='100%'
              height='100%'
              mode='javascript'
              theme='monokai'
              onChange={(v) => this.handleChange({ js: v })}
              name='javascriptEditor'
              editorProps={{ $blockScrolling: true }} /></div></div>
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
            <div className='abswrap'>
            <TitleBar text='console' />
            <ConsolePanel logs={this.state.logs} /></div>
            </div>
        </div>
      </div>
      </div>
    )
  }
}