import { Widget } from '@phosphor/widgets'
import { Message } from '@phosphor/messaging'
import { Terminal } from 'xterm';

export default class TerminalInputWidget extends Widget {
  term
  static contentNode(d) {
    const n = document.createElement('div')
    n.id = d
    n.style.position = 'absolute'
    n.style.left = '0'
    n.style.top = '0'
    n.style.width = '100%'
    n.style.height = '100%'
    return n
  }
  constructor(props) {
    super(Object.assign(props, {
      node: TerminalInputWidget.contentNode('terminal-input-parent')}
    ))
    this.setFlag(Widget.Flag.DisallowLayout)
    this.addClass('content')
    this.addClass('terminal-input')
    this.title.label = 'Terminal Input'
    this.title.closable = false
    this.title.caption = 'Terminal Input'

    this.term = new Terminal();
    this.term.open(this.node);
    this.term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus()
    }
  }
}
