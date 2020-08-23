import { Widget } from '@phosphor/widgets'
import { Message } from '@phosphor/messaging'

export default class CompiledOutputWidget extends Widget {
  props: {
    id: any,
    widgetCreated?: any,
    widgetDidMount?: any,
    children?: any
  }
  constructor(props) {
    super(Object.assign(props, {
      node: document.createElement('div')}
    ))
    this.setFlag(Widget.Flag.DisallowLayout)
    this.addClass('content')
    this.addClass('compiled-output')
    this.title.label = 'Compiled Output'
    this.title.closable = false
    this.title.caption = 'Compiled Output'
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus()
    }
  }
}
