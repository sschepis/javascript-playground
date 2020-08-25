import { Widget } from '@phosphor/widgets'
import { Message } from '@phosphor/messaging'

export default class RunkitEndpointWidget extends Widget {
  static contentNode(d) {
    const n = document.createElement('div')
    n.id = d
    return n
  }
  props: {
    id: any,
    widgetCreated?: any,
    widgetDidMount?: any,
    children?: any
  }
  iframe
  constructor(props) {
    super(Object.assign(props, {
      node: RunkitEndpointWidget.contentNode('runkit-endpoint-parent')}
    ))

    this.setFlag(Widget.Flag.DisallowLayout)
    this.addClass('content')
    this.addClass('runkit-endpoint')
    this.title.label = 'Runkit Endpoint'
    this.title.closable = false
    this.title.caption = 'Runkit Endpoint'
  }
}
