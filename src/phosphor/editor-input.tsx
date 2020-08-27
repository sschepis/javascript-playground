import { Widget } from '@phosphor/widgets'
import { Message } from '@phosphor/messaging'
import RedisplayableWidget from './widget'

import $ from 'jquery'

import ace from 'ace-builds/src-noconflict/ace'

import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-sass'
import 'ace-builds/src-noconflict/mode-less'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-typescript'

import 'ace-builds/src-noconflict/ext-settings_menu.js'
import 'ace-builds/src-noconflict/ext-statusbar.js'
import 'ace-builds/src-noconflict/ext-language_tools.js'
import 'ace-builds/src-noconflict/ext-code_lens.js'

import { debounce } from '../components/js-playground-engine'

export abstract class EditorInputWidget extends RedisplayableWidget {
  static contentNode(d) {
    const n = document.createElement('div')
    n.id = d
    return n
  }
  abstract editorChanged(state: any);
  abstract stateInited(state: any);
  editor
  constructor(props) {
    super(Object.assign(props, {
      node: EditorInputWidget.contentNode(props.id)}
    ))
    this.stateInitedListener = this.stateInitedListener.bind(this)
    this.stateRefreshListener = this.stateRefreshListener.bind(this)
    this.onEditorChangeListener = this.onEditorChangeListener.bind(this)
    this.initWidget(props)
  }

  stateInitedListener(e:any) {
    this.stateInited(e)
  }

  stateRefreshListener (e:any) {
    this.stateInited(e)
  }

  onEditorChangeListener(delta:any) {
    this.editorChanged(delta)
  }

  onResizeLayout() {
    if(this.editor) {
      this.editor.resize()
    }
  }

  onAfterAttach() {
    this.initEditor()
    document.addEventListener('state_inited', this.stateInitedListener)
    document.addEventListener('state_refresh', this.stateRefreshListener)
    document.addEventListener('resize_layout', this.onResizeLayout)
    this.editor.on('change', this.onEditorChangeListener)
  }

  oneBeforeDetach() {
    document.removeEventListener('state_inited', this.stateInitedListener)
    document.removeEventListener('state_refresh', this.stateRefreshListener)
    this.editor.on('change', null)
    this.editor.destroy()
    const newContentNode = EditorInputWidget.contentNode(this.props.id)
    this.node.parentElement.appendChild(newContentNode)
    $(this.node).remove();
    this.node = newContentNode
    this.editor = null;
  }

  initWidget(props) {
    this.setFlag(Widget.Flag.DisallowLayout)
    this.addClass('content')
    this.addClass('editor-input')
    this.title.label = props.label
    this.title.closable = true
    this.title.caption = props.label
  }

  dispatch (e:any, p:any = null) {
    document.dispatchEvent(p ? new CustomEvent(e, { detail: p }) : new Event(e))
  }

  initEditor() {
    ace.config.set('basePath', '/')
    ace.require('ace/ext/themelist')
    ace.require('ace/ext/options')
    ace.require('ace/ext/language_tools')
    ace.require('ace/ext/code_lens')
    ace.require('ace/ext/status_bar')
    ace.require('ace/ext/settings_menu')
    ace.require('ace/theme/tomorrow_night_eighties')
    this.editor = ace.edit(this.node);
    this.editor.setTheme("ace/theme/tomorrow_night_eighties");
    this.editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true,
      enableCodeLens: true
    })
  }

  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus()
    }
  }
  static getWidgetTitle() {
    return "Widget"
  }
  getWidgetTitle() {
    return EditorInputWidget.getWidgetTitle()
  }
}

export class HTMLInputWidget extends EditorInputWidget {
  constructor(props) {
    super(Object.assign(props, { id: 'html-input', label: 'HTML Input'}))
  }
  static getWidgetTitle() {
    return "HTML Input"
  }
  getWidgetTitle() {
    return HTMLInputWidget.getWidgetTitle()
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) { this.node.focus() }
  }
  initEditor() {
    super.initEditor()
    this.editor.session.setMode("ace/mode/html");
  }
  stateInited(state: any) {
    const v = this.editor.getValue()
    if(state.detail && state.detail.html !== v) {
      this.editor.setValue(state.detail.html)
    }
  }
  initWidget(props) {
    super.initWidget(props)
    this.title.closable = true
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
  index
  constructor(index) {
    super({
      id: `css-input-${index}`,
      label: `CSS Input ${index}`,
      index
    })
    this.index = index
  }
  static getWidgetTitle() {
    return "CSS Input"
  }
  getWidgetTitle() {
    return CSSInputWidget.getWidgetTitle()
  }
  initEditor() {
    super.initEditor()
    this.editor.session.setMode("ace/mode/css");
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) { this.node.focus() }
  }
  initWidget(props) {
    super.initWidget(props)
    this.title.closable = this.index !== 0
  }
  stateInited(state: any) {
    const v = this.editor.getValue()
    if(state.detail && state.detail.css) {
      const cv = state.detail.css
      if(!Array.isArray(cv)) {
        return
      }
      if(cv.length > this.index && cv[this.index] !== v) {
        this.editor.setValue(cv[this.index])
      }
    }
  }
  editorChanged() {
    this.title.closable = this.index !== 0 && this.editor.getValue()
    const debounceEditorChanges = () => {
      const detail = { css: this.editor.getValue(), index: this.index }
      this.dispatch('inputs_updated', detail)
    }
    debounce(debounceEditorChanges, 2000)()
  }
}

export class JSInputWidget extends EditorInputWidget {
  index
  constructor(index) {
    super({
      id: `js-input-${index}`,
      label: `js Input ${index}`,
      index
    })
    this.index = index
  }
  initEditor() {
    super.initEditor()
    this.editor.session.setMode("ace/mode/javascript");
  }
  initWidget(props) {
    super.initWidget(props)
    this.title.closable = this.index !== 0
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) { this.node.focus() }
  }
  stateInited(state: any) {
    const v = this.editor.getValue()
    if(state.detail && state.detail.js) {
      const cv = state.detail.js
      if(!Array.isArray(cv)) {
        return
      }
      if(cv.length > this.index && cv[this.index] !== v) {
        this.editor.setValue(cv[this.index])
      }
    }
  }
  editorChanged(delta:any) {
    this.title.closable = this.index !== 0 && this.editor.getValue()
    const debounceEditorChanges = () => {
      const detail = { js: this.editor.getValue(), index: this.index }
      this.dispatch('inputs_updated', detail)
    }
    debounce(debounceEditorChanges, 2000)()
  }
  static getWidgetTitle() {
    return "Javascript Input"
  }
  getWidgetTitle() {
    return JSInputWidget.getWidgetTitle()
  }
}

export class JSLibsWidget extends EditorInputWidget {
  constructor(props) {
    super(Object.assign(props, { id: 'js-libs', label: 'JS Libraries'}))
  }
  initEditor() {
    super.initEditor()
    this.editor.session.setMode("ace/mode/text");
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) { this.node.focus() }
  }
  initWidget(props) {
    super.initWidget(props)
    this.title.closable = true
  }
  stateInited(state: any) {
    const v = this.editor.getValue()
    const nv = state.detail.jslibs.join('\n')
    if(state.detail && nv !== v) {
      this.editor.setValue(nv)
    }
  }
  editorChanged(delta:any) {
    const debounceEditorChanges = () => {
      const detail = { jslibs: this.editor.getValue().split('\n') }
      this.dispatch('inputs_updated', detail)
    }
    debounce(debounceEditorChanges, 2000)()
  }
  static getWidgetTitle() {
    return "Javascript Libraries"
  }
  getWidgetTitle() {
    return JSLibsWidget.getWidgetTitle()
  }
}

export class CSSLibsWidget extends EditorInputWidget {
  constructor(props) {
    super(Object.assign(props, { id: 'css-libs', label: 'CSS Libraries'}))
  }
  initEditor() {
    super.initEditor()
    this.editor.session.setMode("ace/mode/text");
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) { this.node.focus() }
  }
  initWidget(props) {
    super.initWidget(props)
    this.title.closable = true
  }
  stateInited(state: any) {
    const v = this.editor.getValue()
    const nv = state.detail.csslibs.join('\n')
    if(state.detail && nv !== v) {v
      this.editor.setValue(nv)
    }
  }
  editorChanged(delta:any) {
    const debounceEditorChanges = () => {
      const detail = { csslibs: this.editor.getValue().split('\n') }
      this.dispatch('inputs_updated', detail)
    }
    debounce(debounceEditorChanges, 2000)()
  }
  static getWidgetTitle() {
    return "CSS Libraries"
  }
  getWidgetTitle() {
    return CSSLibsWidget.getWidgetTitle()
  }
}

export class WorkspaceSettingsWidget extends EditorInputWidget {
  constructor(props) {
    super(Object.assign(props, { id: 'workspace-settings', label: 'Workspace Settings'}))
  }
  initEditor() {
    super.initEditor()
    this.editor.session.setMode("ace/mode/json");
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) { this.node.focus() }
  }
  initWidget(props) {
    super.initWidget(props)
    this.title.closable = true
  }
  stateInited(state: any1 ) {
    const v = this.editor.getValue()
    const nv = JSON.stringify(state.detail.settings,null, 2)
    if(state.detail && nv !== v) {v
      this.editor.setValue(nv)
    }
  }
  editorChanged(delta:any) {
    const debounceEditorChanges = () => {
      const detail = { settings: this.editor.getValue() }
      this.dispatch('inputs_updated', detail)
    }
    debounce(debounceEditorChanges, 2000)()
  }
  static getWidgetTitle() {
    return "Workspace Settings"
  }
  getWidgetTitle() {
    return WorkspaceSettingsWidget.getWidgetTitle()
  }
}
