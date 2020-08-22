import {MenuBar,Menu,ContextMenu} from "@phosphor/widgets"
import ReactPhosphorWidgetContainer from './widget-container'
import ReactPhosphorWidget from './widget'
import ReactPhosphorCommandRegistry from './command-registry'

export default class ReactPhosphorMenuBar extends ReactPhosphorWidgetContainer {
  props: {
    id: any,
    children?: any
  }
  state: {
    addWidgetFunc: any
  }
  constructor(props) {
    super(props)
    this.container = new MenuBar()
    this.container.id = this.props.id
    this.state = {
      addWidgetFunc: (t:any, c: any) => {
        if(c.props.label != undefined && c.props.mnemonic !== undefined) {
          this.state[`m_m${c.props.mnemonic}`] = new Menu(ReactPhosphorCommandRegistry._registry)
          this.state[`m_m${c.props.mnemonic}`].title.label = c.props.label
          this.state[`m_m${c.props.mnemonic}`].title.mnemonic = c.props.mnemonic
          t.addMenu(c)
        } else {
          const t = this.state[`m_m${c.props.mnemonic}`]
          t.addItem({
            command: c.props.command, 
            selector: c.props.selector
          })
        }
      }
    }
  }
}

export class ReactPhosphorMenu extends ReactPhosphorWidget {
  props: {
    label: string,
    mnemonic: number
  }
  constructor(props: any) {
    super(props)
    this.widget = new Menu(ReactPhosphorCommandRegistry._registry)
    this.widget.title.label = this.props.label
    this.widget.title.mnemonic = this.props.mnemonic
  }
}

export class ReactPhosphorContextMenu extends ReactPhosphorWidgetContainer {
  props: {
    children?: any
  }
  state: {
    addWidgetFunc: (t:any, c: any)
  }
  constructor(props: any) {
    super(props)
    const cm = this.container = new ContextMenu(ReactPhosphorCommandRegistry._registry)
    this.state = {
      addWidgetFunc:(t:any, c: any) => t.addItem({
        command: c.props.command, 
        selector: c.props.selector
      })
    }
  }
  componentDidMount() {
    super.componentDidMount()
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      if (this.container.open(event)) {
        event.preventDefault();
      }
    });
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      ReactPhosphorCommandRegistry._registry.processKeydownEvent(event);
    });
  }
}