import {BoxPanel} from "@phosphor/widgets"
import ReactPhosphorWidgetContainer from './widget-container'

export default class ReactPhosphorBoxPanel extends ReactPhosphorWidgetContainer {
  props: {
    id: any,
    dynamicChildren?: any,
    children: any,
    direction: any,
    spacing?: any
  }
  state: {
    addWidgetFunc: (t:any, c: any)
  }
  constructor(props: any) {
    super(props)
    this.state = {
      addWidgetFunc:(t:any, c: any) => t.addWidget(c)
    }
    this.container = new BoxPanel({ direction: this.props.direction, spacing: this.props.spacing })
    this.container.id = this.props.id
  }
}