import { Widget } from '@phosphor/widgets'
import { Message } from '@phosphor/messaging'

import ace from 'ace-builds/src-noconflict/ace'

import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-sass'
import 'ace-builds/src-noconflict/mode-less'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-typescript'

import 'ace-builds/src-noconflict/ext-settings_menu.js'
import 'ace-builds/src-noconflict/ext-statusbar.js'
import 'ace-builds/src-noconflict/ext-language_tools.js'
import 'ace-builds/src-noconflict/ext-code_lens.js'

import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-tomorrow_night_eighties'
import 'ace-builds/src-noconflict/theme-vibrant_ink'

import { debounce } from '../components/js-playground-engine'


export abstract class EditorInputWidget extends Widget {
  static contentNode(d) {
    const n = document.createElement('div')
    n.id = d
    return n
  }
  abstract editorChanged(state: any);
  abstract stateUpdated(state: any);
  editor
  updatingState
  constructor(props) {
    super(Object.assign(props, {
      node: EditorInputWidget.contentNode(props.id)}
    ))
    this.updatingState = true
    this.initWidget(props)
    this.updatingState = false
  }
  initWidget(props) {
    const self = this
    this.setFlag(Widget.Flag.DisallowLayout)
    this.addClass('content')
    this.addClass('editor-input')
    this.title.label = props.label
    this.title.closable = false
    this.title.caption = props.label
    this.initEditor()
    document.addEventListener('state_updated', (e:any) => {
      console.log('EditorInputWidget', 'state_updated')
      this.updatingState = true
      this.stateUpdated(e)
      this.updatingState = false
    })
    this.editor.on('change', (delta) => {
      if (this.updatingState) return
      console.log('EditorInputWidget', 'change')
      self.editorChanged(delta)
    })
  }
  dispatch (e:any, p:any = null) {
    document.dispatchEvent(p ? new CustomEvent(e, { detail: p }) : new Event(e))
  }
  initEditor() {
    ace.require('ace/ext/themelist')
    ace.require('ace/ext/options')
    ace.require('ace/ext/language_tools')
    ace.require('ace/ext/code_lens')
    ace.require('ace/ext/status_bar')
    ace.require('ace/ext/settings_menu')
    ace.require('ace/theme/vibrant_ink')
    this.editor = ace.edit(this.node);
    ace.config.set('basePath', '/')
    ace.config.set('enableCodeLens', true)
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus()
    }
  }
}

export class HTMLInputWidget extends EditorInputWidget {
  constructor(props) {
    super(Object.assign(props, { id: 'html-input', label: 'HTML Input'}))
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) { this.node.focus() }
  }
  initEditor() {
    super.initEditor()
    this.editor.setTheme("ace/theme/vibrant_ink");
    this.editor.session.setMode("ace/mode/html");
    this.editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: false
    })
  }
  stateUpdated(state: any) {
    const v = this.editor.getValue()
    if(state.detail && state.detail.html !== v) {
      this.editor.setValue(state.detail.html)
    }
  }
  editorChanged(delta:any) {
    const debounceEditorChanges = () => {
      const detail = { html: this.editor.getValue() }
      this.dispatch('inputs_updated', detail)
    }
    debounce(debounceEditorChanges, 2000)()
  }
}

export class CSSInputWidget extends EditorInputWidget {
  constructor(props) {
    super(Object.assign(props, { id: 'css-input', label: 'CSS Input'}))
  }
  initEditor() {
    super.initEditor()
    this.editor.setTheme("ace/theme/vibrant_ink");
    this.editor.session.setMode("ace/mode/css");
    this.editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: false
    })
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) { this.node.focus() }
  }
  stateUpdated(state: any) {
    const v = this.editor.getValue()
    if(state.detail && state.detail.css !== v) {
      this.editor.setValue(state.detail.css)
    }
  }
  editorChanged(delta:any) {
    const debounceEditorChanges = () => {
      const detail = { css: this.editor.getValue() }
      this.dispatch('inputs_updated', detail)
    }
    debounce(debounceEditorChanges, 2000)()
  }
}

export class JSInputWidget extends EditorInputWidget {
  constructor(props) {
    super(Object.assign(props, { id: 'js-input', label: 'JS Input'}))
  }
  initEditor() {
    super.initEditor()
    this.editor.setTheme("ace/theme/vibrant_ink");
    this.editor.session.setMode("ace/mode/javascript");
    this.editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: false
    })
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) { this.node.focus() }
  }
  stateUpdated(state: any) {
    const v = this.editor.getValue()
    if(state.detail && state.detail.js !== v) {
      this.editor.setValue(state.detail.js)
    }
  }
  editorChanged(delta:any) {
    const debounceEditorChanges = () => {
      const detail = { js: this.editor.getValue() }
      this.dispatch('inputs_updated', detail)
    }
    debounce(debounceEditorChanges, 2000)()
  }
}

