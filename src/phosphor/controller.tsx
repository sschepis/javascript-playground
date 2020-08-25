import React, {h, Component} from 'react'
import {CommandRegistry} from '@phosphor/commands';
import {
  Widget,
  CommandPalette,
  ContextMenu,
  MenuBar,
  Menu,
  DockPanel,
  BoxPanel
} from '@phosphor/widgets';

import {JSInputWidget, HTMLInputWidget,CSSInputWidget,JSLibsWidget,CSSLibsWidget}  from './editor-input'
import CompiledOutputWidget from './compiled-output'
import ConsoleOutputWidget from './console-output'
import RunkitRunnerWidget from './runkit-runner'
import { ser } from '../components/js-playground-engine'

export default class PhosphorController extends React.PureComponent {
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
  runkitRunnerWidget
  cssWidgets
  jsWidgets
  props: {
    tabs : {
      css: any,
      js: any
    }
  }
  constructor(props) {
    super(props)
    this._componentRef = React.createRef()
    let registry = this.commandRegistry
    let palette = this.commandPalette
    let contextMenu = this.contextMenu
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
        isEnabled: () => false,
        execute: () => {
          console.log('New Tab');
        }
      });
      this.commandRegistry.addCommand('workspace:open', {
        label: 'Open Workspace',
        mnemonic: 1,
        caption: 'Open an existing Workspace',
        isEnabled: () => false,
        execute: () => {
          console.log('Close Tab');
        }
      });
      this.commandRegistry.addCommand('workspace:clone', {
        label: 'Clone Workspace',
        mnemonic: 1,
        caption: 'Clone the current Workspace',
        isEnabled: () => false,
        execute: () => {
          console.log('Close Tab');
        }
      });
      this.commandRegistry.addCommand('workspace:settings', {
        label: 'Workspace settings',
        mnemonic: 0,
        caption: 'Open workspace settings',
        isEnabled: () => false,
        execute: () => {
          console.log('Settings');
        }
      });
      this.commandRegistry.addCommand('sketch:run', {
        label: 'Run sketch',
        mnemonic: 1,
        caption: 'Run the active sketch',
        execute: () => {
          this.dispatch('refresh_view')
        }
      });
      this.commandRegistry.addCommand('sketch:addjs', {
        label: 'Add Javascript Tab',
        mnemonic: 1,
        caption: 'Add a new Javascript Tab',
        execute: () => {
          this.dispatch('create_js')
        }
      });
      this.commandRegistry.addCommand('sketch:addcss', {
        label: 'Add CSS Tab',
        mnemonic: 1,
        caption: 'Add a new CSS Tab',
        execute: () => {
          this.dispatch('create_css')
        }
      });
      this.commandRegistry.addCommand('sketch:livemode', {
        label: 'Toggle Live Mode',
        mnemonic: 1,
        caption: 'Toggle sketch live Mode',
        execute: () => {
          console.log('Livemode');
        }
      });
      this.commandRegistry.addCommand('sketch:clearconsole', {
        label: 'Clear Console',
        mnemonic: 1,
        caption: 'Clear the Javascript Console',
        caption: 'Clear Console',
        execute: () => {
          this.dispatch('clear_console')
        }
      });
      const createMenu = (label:any, mnem:any) => {
        let menu1 = new Menu({commands:this.commandRegistry})
        menu1.title.label = label;
        menu1.title.mnemonic = mnem;
        this.menuBar.addMenu(menu1);
        return menu1
      }
      createMenu('Workspace', 0);
      createMenu('Sketch', 1);

      let palette = this.commandPalette
      let contextMenu = this.contextMenu
      var dock = this.dockPanel

      palette.addItem({ command: 'workspace:new', category: 'Workspace' });
      palette.addItem({ command: 'workspace:clone', category: 'Workspace' });
      palette.addItem({ command: 'workspace:open', category: 'Workspace' });
      palette.addItem({ command: 'workspace:settings', category: 'Workspace' });
      palette.addItem({ command: 'sketch:run', category: 'Sketch' });
      palette.addItem({ command: 'sketch:addjs', category: 'Sketch' });
      palette.addItem({ command: 'sketch:addcss', category: 'Sketch' });
      palette.addItem({ command: 'sketch:livemode', category: 'Sketch' });
      palette.addItem({ command: 'sketch:clearconsole', category: 'Sketch' });

      // document.addEventListener('contextmenu', (event: MouseEvent) => {
      //   if (contextMenu.open(event)) {
      //     event.preventDefault();
      //   }
      // });

      // contextMenu.addItem({ command: 'workspace:new', selector: '.p-CommandPalette'});
      // contextMenu.addItem({ command: 'workspace:clone',selector: '.p-CommandPalette'});
      // contextMenu.addItem({ command: 'workspace:open', selector: '.p-CommandPalette'});
      // contextMenu.addItem({ command: 'workspace:settings', selector: '.p-CommandPalette'});
      // contextMenu.addItem({ command: 'sketch:run', selector: '.p-CommandPalette' });
      // contextMenu.addItem({ command: 'sketch:livemode', selector: '.p-CommandPalette' });
      // contextMenu.addItem({ type: 'separator', selector: '.p-CommandPalette-input' });

      document.addEventListener('keydown', (event: KeyboardEvent) => {
        this.commandRegistry.processKeydownEvent(event);
      });

      this.jsWidgets = []
      this.cssWidgets = []

      this.outputWidget = new CompiledOutputWidget('Output');
      this.javascriptWidget = new JSInputWidget(0);
      this.consoleWidget = new ConsoleOutputWidget('Console');
      this.cssWidget = new CSSInputWidget(0);
      this.csslibsWidget = new CSSLibsWidget('CSS Includes');
      this.jslibsWidget = new JSLibsWidget('Javascript Includes');
      this.htmlWidget = new HTMLInputWidget('HTML');
      this.runkitRunnerWidget = new RunkitRunnerWidget('Runkit');
      this.jsWidgets.push(this.javascriptWidget)
      this.cssWidgets.push(this.cssWidget)

      dock.addWidget(this.outputWidget);
      dock.addWidget(this.consoleWidget, { mode: 'split-bottom', ref: this.outputWidget });
      dock.addWidget(this.javascriptWidget, { mode: 'split-right', ref: this.consoleWidget });
      dock.addWidget(this.cssWidget, { mode: 'split-bottom', ref: this.javascriptWidget });
      dock.addWidget(this.htmlWidget, { mode: 'split-right', ref: this.cssWidget });
      dock.addWidget(this.jslibsWidget, { ref: this.javascriptWidget });
      dock.addWidget(this.runkitRunnerWidget, { ref: this.javascriptWidget });
      dock.addWidget(this.csslibsWidget, { ref: this.cssWidget });

      const createJsTab = () => {
        const w =  new JSInputWidget(this.jsWidgets.length)
        dock.addWidget(w, { ref: this.javascriptWidget });
        this.jsWidgets.push(w)
      }
      document.addEventListener('create_js', () => createJsTab());

      const createCssTab = () => {
        const w =  new CSSInputWidget(this.cssWidgets.length)
        dock.addWidget(w, { ref: this.cssWidget });
        this.cssWidgets.push(w)
      }
      document.addEventListener('create_css', () => createCssTab());

      for (var i=0; i<this.props.tabs.js - 1; i++) {
        createJsTab()
      }
      for (var i=0; i<this.props.tabs.css - 1; i++) {
        createCssTab()
      }
      const savedLayout = ser('savedLayout');
      if(savedLayout) {
        dock.restoreLayout(savedLayout);
      }

      BoxPanel.setStretch(dock, 1);

      let main = this.mainPanel
      let bar = this.menuBar

      main.id = 'main';
      main.addWidget(palette);
      main.addWidget(dock);

      const resizeThings = () => {
        main.update();

        //ser('savedLayout', dock.saveLayout());

        // this.outputWidget.editor.resize()
        // this.javascriptWidget.editor.resize()
        // this.consoleWidget.editor.resize()
        // this.cssWidget.editor.resize()
        // this.csslibsWidget.editor.resize()
        // this.jslibsWidget.editor.resize()
        // this.htmlWidget.editor.resize()
      }
      window.onresize = () => resizeThings()
      dock.onresize = () => resizeThings()

      //Widget.attach(bar, node);
      Widget.attach(main, node);
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
    return this._commandPalette
  }

  get mainPanel() {
    if(!this._mainPanel) {
      this._mainPanel = new BoxPanel({ direction: 'left-to-right', spacing: 0 });
      this._mainPanel.id = 'main'
    }
    return this._mainPanel
  }

  get dockPanel() {
    if(!this._dockPanel) {
      this._dockPanel = new DockPanel();
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
