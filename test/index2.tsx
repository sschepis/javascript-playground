import React, {h, Component} from 'react'
import {render} from 'react-dom'
import { Message } from '@phosphor/messaging'

import {CommandRegistry} from '@phosphor/commands';
import {CommandPalette, MenuBar, Menu} from '@phosphor/widgets';
import { ReactPhosphorMenu } from '../src/lib/react-phosphor';


const commandRegistries = []

class PhosphorCommand extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  props 
  render() {
    return (<div/>)
  }
  static propsObj(i): any {
    const out: any = {}
    if(i.type) out.type = i.type
    if(i.command) out.command = i.command
    if(i.mnemonic) out.mnemonic = i.mnemonic
    if(i.category) out.category = i.category
    if(i.options) out.options = i.options
    if(i.rank) out.rank = i.rank
    if(i.args) out.args = i.args
    if(i.label) out.label = i.label
    return out
  }
}

class PhosphorCommandRegistry extends React.PureComponent {
  _commandRegistry
  props: {
    children?:any,
    id: any
  }
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    var cs = Array.isArray(this.props.children) ? this.props.children : [ this.props.children ]
    cs.forEach(comp => {
      if(comp.props.command && comp.props.options) {
        this.commandRegistry.addCommand(comp.props.command, comp.props.options)
        console.log(comp.props.command, comp.props.options)
      }
    })
  }
  render() {
    return (<div/>)
  }

  get commandRegistry() {
    if(!this._commandRegistry) {
      commandRegistries[this.props.id] = this._commandRegistry = new CommandRegistry()
    }
    return this._commandRegistry
  }
}

class PhosphorCommandPalette extends React.PureComponent {
  _commandRegistry
  _commandPalette
  props: {
    id: any,
    registryId: any,
    children?:any,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this._commandRegistry = commandRegistries[this.props.registryId]
    var cs = Array.isArray(this.props.children) ? this.props.children : [ this.props.children ]
    cs.forEach(comp => {
      const propsO = PhosphorCommand.propsObj(comp.props)
      if(propsO.command && propsO.category) {
        this.commandPalette.addItem(propsO)
        console.log(propsO)
      }
    })
  }

  get commandPalette() {
    this._commandRegistry = commandRegistries[this.props.registryId]
    if(!this._commandPalette) {
      if(!this._commandRegistry) {
        throw new Error('no command registry set on command palette')
      }
      this._commandPalette = new CommandPalette({commands:this._commandRegistry})
    }
    return this._commandPalette
  }

  render() {
    return (<div/>)
  }
}

const menuBars = {}

class PhosphorMenuBar extends React.PureComponent {
  _commandRegistry
  _menuBar
  props: {
    id: any,
    registryId: any,
    children?:any,
  }
  state: {
    menus: any
  }
  constructor(props) {
    super(props)
    this.state = {
      menus: {}
    }
  }
  _ref
  get ref() {
    if(!this._ref) {
      this._ref = React.createRef();
    }
    return this._ref
  }
  componentDidMount() {
    this._commandRegistry = commandRegistries[this.props.registryId]
    if(!this._commandRegistry) {
      throw new Error('no command registry set on menu bar')
    }
    var cs = Array.isArray(this.props.children) ? this.props.children : [ this.props.children ]
    cs.forEach(comp => {
      const propsO = PhosphorCommand.propsObj(comp.props)
      if(propsO.type) {
        this.menuBar.addMenu(propsO)
      }
      if(propsO.mnemonic && propsO.label) {
        if(!this.state.menus[propsO.mnemonic]) {
          const m = this.state.menus[propsO.mnemonic] = new Menu({commands:this._commandRegistry})
          this.menuBar.addMenu(m)
          m.title.label = propsO.title
          m.title.mnemonic = propsO.mnemonic
          console.log('Menu', propsO)
        }
      }
      if(propsO.mnemonic && propsO.command) {
        const m = this.state.menus[propsO.mnemonic]
        if(!m) {
          throw new Error('menu with mnemonic ' + propsO.mnemonic + ' not found')
        }
        m.addItem({command: propsO.command})
        console.log({command: propsO.command})
      }
    })
  }

  get menuBar() {
    this._commandRegistry = commandRegistries[this.props.registryId]
    if(!this._menuBar) {
      if(!this._commandRegistry) {
        throw new Error('no command registry set on menu bar')
      }
      this._menuBar = new MenuBar()
    }
    return this._menuBar
  }

  render() {
    return (<div/>)
  }
}

class PhosphorContextMenu extends React.PureComponent {
  _commandRegistry
  _contextMenu
  props: {
    id: any,
    registryId: any,
    children?:any,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this._commandRegistry = commandRegistries[this.props.registryId]
    var cs = Array.isArray(this.props.children) ? this.props.children : [ this.props.children ]
    cs.forEach(comp => {
      const propsO = PhosphorCommand.propsObj(comp.props)
      if(propsO.type && propsO.selector) {
        const v = {type: propsO.command, selector: propsO.selector}
        this.contextMenu.addItem(v)
        console.log('contextMenu', v)
      }
      if(propsO.command && propsO.selector) {
        this.contextMenu.addItem(propsO)
        console.log('contextMenu', propsO)
      }
    })
  }

  get contextMenu() {
    this._commandRegistry = commandRegistries[this.props.registryId]
    if(!this._contextMenu) {
      if(!this._commandRegistry) {
        throw new Error('no command registry set on command palette')
      }
      this._contextMenu = new CommandPalette({commands:this._commandRegistry})
    }
    return this._contextMenu
  }

  render() {
    return (<div/>)
  }
}

export default class WidgetContainerTest extends Component {
  state: {
    boxPanelContextStore: {
      direction: any,
      spacing: any
    },
    widgetContextStore: any,
    dockPanelContextStore: any
  }
  constructor(props: any) {
    super(props)
    this.state = {
      boxPanelContextStore: {
        direction: 'left-to-right',
        spacing: 0
      },
      widgetContextStore: undefined,
      dockPanelContextStore: undefined
    }
  }

  containerCreated() {
    console.log('container Created')
  }

  containerDidMount() {
    console.log('container Did Mount')
  }

  widgetCreated() {
    console.log('widget Created')
  }

  widgetDidMount() {
    console.log('widget Did Mount')
  }

  render() {
    const opt = (t:any, m = undefined, e = undefined) => {
      const label = Array.isArray(t) ? t[0] : t
      const caption = Array.isArray(t) && t.length > 1 ? t[1] : label
      const o:any = {label}
      if(caption) { o.caption=caption }
      if(m) { o.mnemonic=m }
      o.execute = () => e ? e(this) : console.log(t)
      return o
    }
    return (<div>
      <PhosphorCommandRegistry id="commandRegistry" >
        <PhosphorCommand command={'jsplayground:new-sketch'} options={opt('New Sketch', 0)} />
        <PhosphorCommand command={'jsplayground:open-sketch'} options={opt('Open Sketch', 0)} />
        <PhosphorCommand command={'jsplayground:clone-sketch'} options={opt('Clone Sketch', 0)} />
        <PhosphorCommand command={'jsplayground:settings'} options={opt('Settings', 0)} />
        <PhosphorCommand command={'sketch:run-sketch'} options={opt('Run Sketch', 1)} />
        <PhosphorCommand command={'sketch:live-mode'} options={opt('Toggle Live Mode', 1)} />
        <PhosphorCommand command={'save-dock-layout'} options={opt(['Save Layout', 'Save the current dock layout'], undefined)}/>
        <PhosphorCommand command={'restore-dock-layout'} options={opt(['Restore Layout', 'Restore the current dock layout'], undefined)}/>
      </PhosphorCommandRegistry>
      
      <PhosphorContextMenu registryId={'commandRegistry'} id={'contextMenu'}>
        <PhosphorCommand command={'sketch:live-mode'} selector={'.p-CommandPalette-input'}/>
        <PhosphorCommand type={'separator'} selector={'.p-CommandPalette-input'}/>
      </PhosphorContextMenu>

      <PhosphorCommandPalette registryId={'commandRegistry'} id={'palette'}>
        <PhosphorCommand command={'jsplayground:new-sketch'} category={'Workspace'}/>
        <PhosphorCommand command={'jsplayground:open-sketch'} category={'Workspace'}/>
        <PhosphorCommand command={'jsplayground:clone-sketch'} category={'Workspace'}/>
        <PhosphorCommand command={'jsplayground:settings'} category={'Workspace'}/>
        <PhosphorCommand command={'sketch:run-sketch'} category={'Sketch'}/>
        <PhosphorCommand command={'sketch:live-mode'} category={'Sketch'}/>
        <PhosphorCommand command={'save-dock-layout'} category={'Dock Layout'} rank={0}/>
      </PhosphorCommandPalette>

      <PhosphorMenuBar registryId={'commandRegistry'} id={'menuBar'}>
        <PhosphorCommand label={'Workspace'} mnemonic={0} />
        <PhosphorCommand mnemonic={0} command={'jsplayground:new-sketch'}/>
        <PhosphorCommand mnemonic={0} command={'jsplayground:open-sketch'}/>
        <PhosphorCommand mnemonic={0} command={'jsplayground:clone-sketch'}/>
        <PhosphorCommand type={'separator'}/>
        <PhosphorCommand mnemonic={0} command={'jsplayground:settings'}/>
        <PhosphorCommand label={'Sketch'} mnemonic={1} />
        <PhosphorCommand mnemonic={0} command={'sketch:run-sketch'}/>
        <PhosphorCommand type={'separator'}/>
        <PhosphorCommand mnemonic={0} command={'sketch:live-mode'}/>
      </PhosphorMenuBar>
    </div>)
  }
}

render(<WidgetContainerTest />, document.getElementById('app'))