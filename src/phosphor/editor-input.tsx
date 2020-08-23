import { Widget } from '@phosphor/widgets'
import { Message } from '@phosphor/messaging'

import ace from 'ace-builds/src-noconflict/ace'

import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/ext-settings_menu.js'
import 'ace-builds/src-noconflict/ext-statusbar.js'
import { ThemeProvider } from 'react-bootstrap'


export abstract class EditorInputWidget extends Widget {
  static contentNode(d) {
    const n = document.createElement('div')
    n.id = d
    return n
  }
  abstract editorChanged(state: any);
  abstract stateUpdated(state: any);
  editor
  constructor(props) {
    super(Object.assign(props, {
      node: EditorInputWidget.contentNode(props.id)}
    ))
    this.initWidget(props)
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
      this.stateUpdated(e)
    })
    this.editor.on('change', (delta) => {
      self.editorChanged(delta)
    })
  }
  dispatch (e:any, p:any = null) {
    document.dispatchEvent(p ? new CustomEvent(e, { detail: p }) : new Event(e))
  }
  initEditor() {
    this.editor = ace.edit(this.node);
    ace.config.set('basePath', '/')
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
    if (this.isAttached) {
      this.node.focus()
    }
  }
  initEditor() {
    super.initEditor()
    this.editor.setTheme("ace/theme/monokai");
    this.editor.session.setMode("ace/mode/html");
  }
  stateUpdated(state: any) {
    const v = this.editor.getValue()
    if(state.detail && state.detail.html !== v) {
      this.editor.setValue(state.detail.html)
    }
  }
  editorChanged(delta:any) {
    const detail = {
      html: this.editor.getValue()
    }
    this.dispatch('inputs_updated', detail)
  }
}

export class CSSInputWidget extends EditorInputWidget {
  constructor(props) {
    super(Object.assign(props, { id: 'css-input', label: 'CSS Input'}))
  }
  initEditor() {
    super.initEditor()
    this.editor.setTheme("ace/theme/monokai");
    this.editor.session.setMode("ace/mode/css");
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus()
    }
  }
  stateUpdated(state: any) {
    const v = this.editor.getValue()
    if(state.detail && state.detail.css !== v) {
      this.editor.setValue(state.detail.css)
    }
  }
  editorChanged(delta:any) {
    const detail = {
      css: this.editor.getValue()
    }
    this.dispatch('inputs_updated', detail)
  }
}

export class JSInputWidget extends EditorInputWidget {
  constructor(props) {
    super(Object.assign(props, { id: 'js-input', label: 'JS Input'}))
  }
  initEditor() {
    super.initEditor()
    this.editor.setTheme("ace/theme/monokai");
    this.editor.session.setMode("ace/mode/javascript");
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus()
    }
  }
  stateUpdated(state: any) {
    const v = this.editor.getValue()
    if(state.detail && state.detail.js !== v) {
      this.editor.setValue(state.detail.js)
    }
  }
  editorChanged(delta:any) {
    const detail = {
      js: this.editor.getValue()
    }
    this.dispatch('inputs_updated', detail)
  }
}

