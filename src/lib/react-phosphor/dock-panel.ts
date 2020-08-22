import {DockPanel,Widget} from "@phosphor/widgets"
import ReactPhosphorWidgetContainer from './widget-container'

export default class ReactPhosphorDockPanel extends ReactPhosphorWidgetContainer {
  props: {
    id: any,
    children?: any,
    flags?: [],
    classes?: [],
    title: {
      label: string,
      closable?: boolean
    },
    mode?: string
  }
  state: {
    addWidgetFunc: (t:any, c: any)
  }
  static createNode(): HTMLElement {
    return document.createElement('div')
  }
  constructor(props) {
    super(Object.assign(props, {node:ReactPhosphorDockPanel.createNode()}))
    this.container = new DockPanel()
    this.container.id = this.props.id
    this.container.setFlag(Widget.Flag.DisallowLayout)
    this.container.addClass('content')
    this.container.addClass(this.props.title.label.toLowerCase())
    this.container.title.label = this.props.title.label
    this.container.title.closable = this.props.title.closable || true
    this.container.title.caption = `Long description for: ${this.props.title.label}`
    this.state = {
      addWidgetFunc:(t:any, c: any) => {
        t.container.addWidget(c, c.props.mode) 
      }
    }
  }
}

