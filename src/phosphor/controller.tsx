import React, {h, Component} from 'react'
import {CommandRegistry} from '@phosphor/commands'
import safeStringify from 'fast-safe-stringify'
import { debounce } from '../components/js-playground-engine'
import {
  Widget,
  CommandPalette,
  ContextMenu,
  MenuBar,
  Menu,
  DockPanel,
  BoxPanel
} from '@phosphor/widgets'

import {
  JSInputWidget,
  HTMLInputWidget,
  CSSInputWidget,
  JSLibsWidget,
  CSSLibsWidget,
  WorkspaceSettingsWidget
} from './editor-input'

import CompiledOutputWidget from './compiled-output'
import ConsoleOutputWidget from './console-output'
import RunkitRunnerWidget from './runkit-runner'
import RunkitEndpointWidget from './runkit-endpoint'
import TerminalInputWidget from './terminal-input'
import { Message } from '@phosphor/messaging'
import { ser } from '../components/js-playground-engine'

export default class PhosphorController extends React.PureComponent {
  static instance
  _commandRegistry
  _commandPalette
  _contextMenu
  _menuBar
  _mainPanel
  _dockPanel
  outputWidget
  consoleWidget
  javascriptWidget
  jslibsWidget
  csslibsWidget
  cssWidget
  htmlWidget
  runkitEndpointWidget
  runkitRunnerWidget
  terminalInputWidget
  cssWidgets
  jsWidgets
  workspaceSettingsWidget
  props: {
    tabs : {
      css: any,
      js: any
    }
  }
  constructor(props) {
    super(props)
    this._componentRef = React.createRef()
    PhosphorController.instance = this
  }
  static getInstance() {
    return PhosphorController.instance
  }
  dispatch (e:any, p:any = null) {
    document.dispatchEvent(p ? new CustomEvent(e, { detail: p }) : new Event(e))
  }
  componentDidMount() {
    const self = this
    const initPhosphorUI = (node:any) => {
      this.commandRegistry.addCommand('workspace:new', {
        label: 'New Workspace',
        mnemonic: 0,
        caption: 'Create a new workspace',
        isEnabled: () => true,
        execute: () => {
          this.dispatch('new_workspace')
        }
      })
      this.commandRegistry.addCommand('workspace:open', {
        label: 'Open Workspace',
        mnemonic: 1,
        caption: 'Open an existing Workspace',
        isEnabled: () => false,
        execute: () => {
          console.log('Close Tab')
        }
      })
      this.commandRegistry.addCommand('workspace:clone', {
        label: 'Clone Workspace',
        mnemonic: 1,
        caption: 'Clone the current Workspace',
        isEnabled: () => false,
        execute: () => {
          console.log('Close Tab')
        }
      })
      this.commandRegistry.addCommand('workspace:settings', {
        label: 'Workspace settings',
        mnemonic: 0,
        caption: 'Open workspace settings',
        isEnabled: () => false,
        execute: () => {
          console.log('Settings')
        }
      })
      this.commandRegistry.addCommand('sketch:run', {
        label: 'Run sketch',
        mnemonic: 1,
        caption: 'Run the active sketch',
        execute: () => {
          this.dispatch('refresh_view')
        }
      })
      this.commandRegistry.addCommand('sketch:addjs', {
        label: 'Add Javascript Tab',
        mnemonic: 1,
        caption: 'Add a new Javascript Tab',
        execute: () => {
          this.dispatch('create_js')
        }
      })
      this.commandRegistry.addCommand('sketch:addcss', {
        label: 'Add CSS Tab',
        mnemonic: 1,
        caption: 'Add a new CSS Tab',
        execute: () => {
          this.dispatch('create_css')
        }
      })
      this.commandRegistry.addCommand('sketch:livemode', {
        label: 'Toggle Live Mode',
        mnemonic: 1,
        caption: 'Toggle sketch live Mode',
        execute: () => {
          console.log('Livemode')
        }
      })
      this.commandRegistry.addCommand('sketch:clearconsole', {
        label: 'Clear Console',
        mnemonic: 1,
        caption: 'Clear the Javascript Console',
        execute: () => {
          this.dispatch('clear_console')
        }
      })
      const createMenu = (label:any, mnem:any) => {
        let menu1 = new Menu({commands:this.commandRegistry})
        menu1.title.label = label
        menu1.title.mnemonic = mnem
        this.menuBar.addMenu(menu1)
        return menu1
      }
      createMenu('Workspace', 0)
      createMenu('Sketch', 1)
      createMenu('View', 2)

      let palette = this.commandPalette
      var dock = this.dockPanel

      palette.addItem({ command: 'workspace:new', category: 'Workspace' })
      palette.addItem({ command: 'workspace:clone', category: 'Workspace' })
      palette.addItem({ command: 'workspace:open', category: 'Workspace' })
      palette.addItem({ command: 'workspace:settings', category: 'Workspace' })
      palette.addItem({ command: 'sketch:run', category: 'Sketch' })
      palette.addItem({ command: 'sketch:addjs', category: 'Sketch' })
      palette.addItem({ command: 'sketch:addcss', category: 'Sketch' })
      palette.addItem({ command: 'sketch:livemode', category: 'Sketch' })
      palette.addItem({ command: 'sketch:clearconsole', category: 'Sketch' })

      let contextMenu = this.contextMenu
      document.addEventListener('contextmenu', (event: MouseEvent) => {
        if (contextMenu.open(event)) {
          event.preventDefault()
        }
      })
      contextMenu.addItem({ command: 'workspace:new', selector: '.p-CommandPalette'})
      contextMenu.addItem({ command: 'workspace:clone',selector: '.p-CommandPalette'})
      contextMenu.addItem({ command: 'workspace:open', selector: '.p-CommandPalette'})
      contextMenu.addItem({ command: 'workspace:settings', selector: '.p-CommandPalette'})
      contextMenu.addItem({ command: 'sketch:run', selector: '.p-CommandPalette' })
      contextMenu.addItem({ command: 'sketch:livemode', selector: '.p-CommandPalette' })
      contextMenu.addItem({ type: 'separator', selector: '.p-CommandPalette-input' })

      document.addEventListener('keydown', (event: KeyboardEvent) => {
        this.commandRegistry.processKeydownEvent(event)
      })

      this.jsWidgets = []
      this.cssWidgets = []

      this.outputWidget = new CompiledOutputWidget('Output')
      this.javascriptWidget = new JSInputWidget(0)
      this.consoleWidget = new ConsoleOutputWidget('Console')
      this.cssWidget = new CSSInputWidget(0)
      this.csslibsWidget = new CSSLibsWidget('CSS Includes')
      this.jslibsWidget = new JSLibsWidget('Javascript Includes')
      this.htmlWidget = new HTMLInputWidget('HTML')
      this.terminalInputWidget = new TerminalInputWidget('Terminal')
      this.runkitEndpointWidget = new RunkitEndpointWidget('Runkit Endpoint')
      this.runkitRunnerWidget = new RunkitRunnerWidget('Runkit Runner')
      this.workspaceSettingsWidget = new WorkspaceSettingsWidget('Runkit Runner')
      this.jsWidgets.push(this.javascriptWidget)
      this.cssWidgets.push(this.cssWidget)

      const addTheWidget = (o, p = null) => {
        if(p) this.dockPanel.addWidget(o, p)
        else this.dockPanel.addWidget(o)
        return o
      }

      /* eslint-disable */
      this.addOutputWidget = () => addTheWidget(this.outputWidget)
      this.addConsoleWidget = () => addTheWidget(this.consoleWidget, { mode: 'split-bottom', ref: this.outputWidget })
      this.addJavascriptWidget = () => addTheWidget(this.javascriptWidget, { mode: 'split-right', ref: this.consoleWidget })
      this.addCssWidget = () => addTheWidget(this.cssWidget, { mode: 'split-bottom', ref: this.javascriptWidget })
      this.addHtmlWidget = () => addTheWidget(this.htmlWidget, { mode: 'split-right', ref: this.cssWidget })
      this.addJsLibsWidget = () => addTheWidget(this.jslibsWidget, { ref: this.consoleWidget })
      this.addRunkitEndpointWidget = () => addTheWidget(this.runkitEndpointWidget, { ref: this.consoleWidget })
      this.addRunkitRunnerWidget = () => addTheWidget(this.runkitRunnerWidget, { ref: this.consoleWidget })
      this.addCssLisWidget = () => addTheWidget(this.csslibsWidget, { ref: this.cssWidget })
      this.addTerminalInputWidget = () => addTheWidget(this.terminalInputWidget, { ref: this.consoleWidget })
      this.addWorkspaceSettingsWidget = () => addTheWidget(this.workspaceSettingsWidget, { ref: this.consoleWidget })

      const widgetFuncs = {
      }
      widgetFuncs[this.outputWidget.id]=this.addOutputWidget,
      widgetFuncs[this.consoleWidget.id]=this.addConsoleWidget,
      widgetFuncs[this.javascriptWidget.id]=this.addJavascriptWidget,
      widgetFuncs[this.cssWidget.id]=this.addCssWidget,
      widgetFuncs[this.htmlWidget.id]=this.addHtmlWidget,
      widgetFuncs[this.jslibsWidget.id]=this.addJsLibsWidget,
      widgetFuncs[this.runkitEndpointWidget.id]=this.addRunkitEndpointWidget,
      widgetFuncs[this.runkitRunnerWidget.id]=this.addRunkitRunnerWidget,
      widgetFuncs[this.csslibsWidget.id]=this.addCssLisWidget,
      widgetFuncs[this.terminalInputWidget.id]=this.addTerminalInputWidget,
      widgetFuncs[this.workspaceSettingsWidget.id]=this.addWorkspaceSettingsWidget
      this.widgetFuncs = widgetFuncs

      Object.values(widgetFuncs).forEach(el => el())

      this.createJsTab = () => {
        const w =  new JSInputWidget(this.jsWidgets.length)
        dock.addWidget(w, { ref: this.javascriptWidget })
        this.jsWidgets.push(w)
      }
      document.addEventListener('create_js', () => this.createJsTab())
      for (var i=0 i<this.props.tabs.js - 1 i++) {
        this.createJsTab()
      }

      this.createCssTab = () => {
        const w =  new CSSInputWidget(this.cssWidgets.length)
        dock.addWidget(w, { ref: this.cssWidget })
        this.cssWidgets.push(w)
      }
      document.addEventListener('create_css', () => this.createCssTab())
      for (var i=0 i<this.props.tabs.css - 1 i++) {
        this.createCssTab()
      }
      BoxPanel.setStretch(dock, 1)

      let main = this.mainPanel
      let bar = this.menuBar

      main.id = 'main'
      main.addWidget(palette)
      main.addWidget(dock)

      const resizeThings = () => {
        main.update()
        this.dispatch('resize_layout')
      }
      window.onresize = () => debounce(() => resizeThings(), 100)()

      Widget.attach(bar, node)
      Widget.attach(main, node)
    }
    initPhosphorUI(document.body)
  }
  render() {
    return (<div style={{width:'0',height:'0'}} />)
  }

  _componentRef
  get componentRef() {
    if(!this._componentRef) {
      this._componentRef = React.createRef()
    }
    return this._componentRef
  }

  get commandRegistry() {
    if(!this._commandRegistry) {
      this._commandRegistry = new CommandRegistry()
      this._commandRegistry.id = 'registry'
    }
    return this._commandRegistry
  }

  get commandPalette() {
    if(!this._commandPalette) {
      this._commandPalette = new CommandPalette({commands:this.commandRegistry})
      this._commandPalette.id = 'palette'
    }
    return this._commandPalette
  }

  get contextMenu() {
    if(!this._contextMenu) {
      this._contextMenu = new ContextMenu({commands:this.commandRegistry})
      this._contextMenu.id = 'contextMenu'
    }
    return this._contextMenu
  }

  get mainPanel() {
    if(!this._mainPanel) {
      this._mainPanel = new BoxPanel({ direction: 'left-to-right', spacing: 0 })
      this._mainPanel.id = 'main'
    }
    return this._mainPanel
  }

  get dockPanel() {
    if(!this._dockPanel) {
      this._dockPanel = new DockPanel()
      this._dockPanel.id = 'dock'
    }
    return this._dockPanel
  }

  get menuBar() {
    if(!this._menuBar) {
      this._menuBar = new MenuBar()
      this._menuBar.id = 'menuBar'
    }
    return this._menuBar
  }
}
