import { Widget } from '@phosphor/widgets'
import { Message } from '@phosphor/messaging'

export default class CompiledOutputWidget extends Widget {
  static createNode(): HTMLElement {
    let node = document.createElement('div')
    return node;
  }
  constructor(name: string) {
    super({ node: CompiledOutputWidget.createNode() })
    this.setFlag(Widget.Flag.DisallowLayout)
    this.addClass('content')
    this.addClass(name.toLowerCase())
    this.title.label = name
    this.title.closable = true
    this.title.caption = `Long description for: ${name}`
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus()
    }
  }
}