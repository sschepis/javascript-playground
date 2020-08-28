import { Widget } from '@phosphor/widgets'
import { Message } from '@phosphor/messaging'
import RedisplayableWidget from './widget'

export default class ConsoleOutputWidget extends RedisplayableWidget {
  static contentNode(d) {
    const n = document.createElement('div')
    n.id = d
    return n
  }
  constructor(props) {
    super(Object.assign(props, {
      node: ConsoleOutputWidget.contentNode('console-log-parent')}
    ))
    this.setFlag(Widget.Flag.DisallowLayout)
    this.addClass('content')
    this.addClass('console-output')
    this.title.label = 'Console Output'
    this.title.closable = false
    this.title.caption = 'Console Output'
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus()
    }
  }

  static getWidgetTitle() {
    return "Console Output"
  }
}
