import {MenuBar,Menu,ContextMenu} from "@phosphor/widgets"
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

export class ReactPhosphorContextMenu extends ReactPhosphorWidget {
  props: {
    registry?: any,
  }
  state: {
    addWidgetFunc: (t:any, c: any)
  }
  constructor(props: any) {
    super(props)
    this.state = {
      addWidgetFunc:(t:any, c: any) => t.addItem(c)
    }
    const cm = this.widget = new ContextMenu(this.props.registry)
    this.widget.id = this.props.label

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      if (cm.open(event)) {
        event.preventDefault();
      }
    });
  
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      this.props.registry.processKeydownEvent(event);
    });
  }
}