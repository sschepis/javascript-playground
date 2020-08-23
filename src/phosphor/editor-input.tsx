import { Widget } from '@phosphor/widgets'
import { Message } from '@phosphor/messaging'

import ace from 'ace-builds/src-noconflict/ace'

export class EditorInputWidget extends Widget {
  static contentNode(d) {
    const n = document.createElement('div')
    n.id = d
    return n
  }
  editor
  constructor(props) {
    super(Object.assign(props, {
      node: EditorInputWidget.contentNode(props.id)}
    ))
    this.initWidget(props)
  }
  initWidget(props) {
    this.setFlag(Widget.Flag.DisallowLayout)
    this.addClass('content')
    this.addClass('editor-input')
    this.title.label = props.label
    this.title.closable = false
    this.title.caption = props.label
    this.initEditor()    
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
}

