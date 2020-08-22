import ReactPhosphorWidgetContainer from './widget-container'
import ReactPhosphorWidget from './widget'
import {CommandRegistry} from '@phosphor/commands';
import {CommandPalette} from '@phosphor/widgets';


export default class ReactPhosphorCommandRegistry extends ReactPhosphorWidgetContainer {
  props: {
    id: string,
    children?: any
  }
  state: {
    addWidgetFunc: (t:any, c: any)
  }
  static _registry
  constructor(props) {
    super(props)
    this.container = ReactPhosphorCommandRegistry._registry = new CommandRegistry()
    this.container.id = this.props.id
    this.state = {
      addWidgetFunc:(t:any, c: any) => {
        t.container.addCommand(c.props.command, c.props.options) 
      }
    }
  }
}

export class ReactPhosphorCommandPalette extends ReactPhosphorWidgetContainer {
  props: {
    id: any,
    children?: any,
    registry?: any
  }
  state: {
    addWidgetFunc: any
  }
  constructor(props) {
    super(props)
    const self = this
    this.container = new CommandPalette({commands:ReactPhosphorCommandRegistry._registry})
    this.state = {
      addWidgetFunc:(t:any, c: any) => {
        const command = c.props.command
        const category = c.props.category
        t.container.addItem({command, category}) 
      }
    }
  }
}

class PhosphorCommand {
  props
  constructor(p) {
    this.props = Object.assign({}, p)
  }
}

export class ReactPhosphorCommand extends ReactPhosphorWidget {
  props: {
    type?: any,
    command?: any,
    mnemonic?: any,
    category?: any,
    options?: any,
    rank?: any,
    args?: any
  }
  constructor(props: any) {
    super(Object.assign(props, {attach:false}))
    this.widget = new PhosphorCommand({
      type: this.props.type,
      command: this.props.command,
      category: this.props.category,
      mnemonic: this.props.mnemonic,
      options: this.props.options,
      rank: this.props.rank,
      args: this.props.args
    })
  }
}
