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
  constructor(props) {
    super(props)
    this.container = new CommandRegistry()
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
        t.addCommand(p, o) 
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
    addWidgetFunc: (t:any, c: any)
  }
  constructor(props) {
    super(props)
    this.container = new CommandPalette({commands:this.props.registry})
    this.state = {
      addWidgetFunc:(t:any, c: any) => {
        t.addItem(c) 
      }
    }
  }
}

export class ReactPhosphorCommand extends ReactPhosphorWidget {
  props: {
    type?: any,
    command?: any,
    category?: any,
    options?: any,
    rank?: any,
    args?: any
  }
  constructor(props: any) {
    super(props)
    this.widget = {
      typs: this.props.type,
      command: this.props.command,
      category: this.props.category,
      options: this.props.options,
      rank: this.props.rank,
      args: this.props.args
    }
  }
}
