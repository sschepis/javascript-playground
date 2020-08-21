import {DockPanel,Widget} from "@phosphor/widgets"
import ReactPhosphorWidgetContainer from './widget-container'
import ReactPhosphorWidget from './widget'


export default class ReactPhosphorDockPanel extends ReactPhosphorWidgetContainer {
  props: {
    id: any,
    children?: any,
  }
  state: {
    addWidgetFunc: (t:any, c: any)
  }
  constructor(props) {
    super(props)
    this.container = new DockPanel()
    this.container.id = this.props.id
    this.state = {
      addWidgetFunc:(t:any, c: any) => {
        var p, o
        if (Array.isArray(c)) {
          p = c[0]
          if(c.length > 1) {
            o = c[1]
          }
        }
        t.addWidget(p, o) 
      }
    }
  }
}

export class ReactPhosphorDockWidget extends ReactPhosphorWidget {
  props: {
    id: string,
    flags?: [],
    classes?: [],
    title: {
      label: string,
      closable?: boolean
    },
    dock: {
      mode: string,
      ref: any
    }
  }
  static createNode(): HTMLElement {
    return document.createElement('div') 
  }
  constructor(props) {
    super(
      Object.assign(props,{ node: ReactPhosphorDockWidget.createNode() })
    )
    this.widget = new Widget()
    this.widget.id = this.props.id
    this.widget.setFlag(Widget.Flag.DisallowLayout)
    this.widget.addClass('content')
    this.widget.addClass(this.props.title.label.toLowerCase())
    this.widget.title.label = this.props.title.label
    this.widget.title.closable = this.props.title.closable || true
    this.widget.title.caption = `Long description for: ${this.props.title.label}`
  }
}
