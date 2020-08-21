import {MenuBar,Menu} from "@phosphor/widgets"
import ReactPhosphorWidgetContainer from './widget-container'
import ReactPhosphorWidget from './widget'

export default class ReactPhosphorMenuBar extends ReactPhosphorWidgetContainer {
  props: {
    id: any,
    children?: any
  }
  state: {
    addWidgetFunc: (t: any, c: any)
  }
  constructor(props) {
    super(props)
    this.container = new MenuBar()
    this.container.id = this.props.id
    this.state = {
      addWidgetFunc: (t:any, c: any) => t.addMenu(c)
    }
  }
}

export class ReactPhosphorMenu extends ReactPhosphorWidgetContainer {
  props: {
    registry?: any,
    children?: any,
    label: string,
    mnemonic: number
  }
  state: {
    addWidgetFunc: (t:any, c: any)
  }
  constructor(props: any) {
    super(props)
    this.state = {
      addWidgetFunc:(t:any, c: any) => t.addItem(c)
    }
    this.container = new Menu(this.props.registry)
    this.container.id = this.props.label
  }
}