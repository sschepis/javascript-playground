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

import {JSInputWidget, HTMLInputWidget,CSSInputWidget}  from './editor-input'
import CompiledOutputWidget from './compiled-output'
import ConsoleOutputWidget from './console-output'

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
  cssWidget
  htmlWidget
  props: {
    js: any,
    css: any,
    html: any
  }
  constructor(props) {
    super(props)
    this._componentRef = React.createRef()
  }
  dispatch (e:any, p:any = null) {
    document.dispatchEvent(p ? new CustomEvent(e, { detail: p }) : new Event(e))
  }
  componentDidMount() {
    const self = this
    const initPhosphorUI = (node:any) => {
      this.commandRegistry.addCommand('workspace:new', {
        label: 'New Tab',
        mnemonic: 0,
        caption: 'Open a new tab',
        execute: () => {
          console.log('New Tab');
        }
      });
      this.commandRegistry.addCommand('workspace:open', {
        label: 'Close Tab',
        mnemonic: 1,
        caption: 'Close the current tab',
        execute: () => {
          console.log('Close Tab');
        }
      });
      this.commandRegistry.addCommand('workspace:clone', {
        label: 'Save on Exit',
        mnemonic: 0,
        caption: 'Toggle the save on exit flag',
        execute: () => {
          console.log('Save on Exit');
        }
      });
      this.commandRegistry.addCommand('workspace:settings', {
        label: 'Workspace settings',
        mnemonic: 0,
        caption: 'Show the workspace settings dialg',
        execute: () => {
          console.log('Settings');
        }
      });
      this.commandRegistry.addCommand('sketch:run', {
        label: 'Run sketch',
        mnemonic: 1,
        caption: 'Run the active sketch',
        execute: () => {
          console.log('Run Sketch');
        }
      });
      this.commandRegistry.addCommand('sketch:livemode', {
        label: 'Toggle Livemode',
        mnemonic: 1,
        caption: 'Toggle sketch livemode',
        execute: () => {
          console.log('Livemode');
        }
      });
      this.commandRegistry.addCommand('sketch:clearconsole', {
        label: 'Clear Console',
        mnemonic: 1,
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
    
      this.outputWidget = new CompiledOutputWidget('Output');
      this.javascriptWidget = new JSInputWidget('Javascript', this.props.js);
      this.consoleWidget = new ConsoleOutputWidget('Console');
      this.cssWidget = new CSSInputWidget('CSS', this.props.css);
      this.htmlWidget = new HTMLInputWidget('HTML', this.props.html);

      dock.addWidget(this.outputWidget);
      dock.addWidget(this.consoleWidget, { mode: 'split-bottom', ref: this.outputWidget });
      dock.addWidget(this.javascriptWidget, { mode: 'split-right', ref: this.consoleWidget });
      dock.addWidget(this.cssWidget, { mode: 'split-bottom', ref: this.javascriptWidget });
      dock.addWidget(this.htmlWidget, { mode: 'split-right', ref: this.cssWidget });

      let savedLayouts: DockPanel.ILayoutConfig[] = [];
    
      this.commandRegistry.addCommand('save-dock-layout', {
        label: 'Save Layout',
        caption: 'Save the current dock layout',
        execute: () => {
          savedLayouts.push(dock.saveLayout());
          palette.addItem({
            command: 'restore-dock-layout',
            category: 'Dock Layout',
            args: { index: savedLayouts.length - 1 }
          });
        }
      });

      this.commandRegistry.addCommand('restore-dock-layout', {
        label: args => {
          return `Restore Layout ${args.index as number}`;
        },
        execute: args => {
          dock.restoreLayout(savedLayouts[args.index as number]);
        }
      });

      palette.addItem({
        command: 'save-dock-layout',
        category: 'Dock Layout',
        rank: 0
      });

      BoxPanel.setStretch(dock, 1);
      
      let main = this.mainPanel
      let bar = this.menuBar

      main.id = 'main';
      main.addWidget(palette);
      main.addWidget(dock);
    
      window.onresize = () => { main.update(); };
    
      Widget.attach(bar, node);
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
