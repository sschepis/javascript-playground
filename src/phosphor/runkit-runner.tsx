import { Widget } from '@phosphor/widgets'
import { Message } from '@phosphor/messaging'
import RedisplayableWidget from './widget'

export default class RunkitRunnerWidget extends RedisplayableWidget {
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
      node: RunkitRunnerWidget.contentNode('runkit-runner-parent')}
    ))

    this.setFlag(Widget.Flag.DisallowLayout)
    this.addClass('content')
    this.addClass('runkit-runner')
    this.title.label = 'Runkit Runner'
    this.title.closable = true
    this.title.caption = 'Runkit Runner'
  }

  static getWidgetTitle() {
    return "Runkit Runner"
  }
}
