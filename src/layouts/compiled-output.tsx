import { Widget } from '@phosphor/widgets'
import { Message } from '@phosphor/messaging'
import ReactPhosphorWidget from '../lib/react-phosphor/widget'

export default class CompiledOutputWidget extends ReactPhosphorWidget {
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
    this.widget.setFlag(Widget.Flag.DisallowLayout)
    this.widget.addClass('content')
    this.widget.addClass(props.name.toLowerCase())
    this.widget.title.label = props.title.label
    this.widget.title.closable = props.title.closable
    this.widget.title.caption = props.title.caption
  }
  
  get widget() {
    if(!super.widget) {
      super.widget = new Widget()
    }
    return super.widget
  }

  protected onActivateRequest(msg: Message): void {
    if (this.widget.isAttached) {
      this.widget.node.focus()
    }
  }
}
