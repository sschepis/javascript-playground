import { Widget } from '@phosphor/widgets'
import { Message } from '@phosphor/messaging'
import TerminalSession from '../term/session'

export default class TerminalInputWidget extends Widget {
  session
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

    // this.session = new TerminalSession(this.node)
    // this.session.start()
    
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus()
    }
  }
  static getWidgetTitle() {
    return "Terminal Input"
  }
}
