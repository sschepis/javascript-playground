import React, { Component } from 'react'

import classes from './index.css'

import {
  ReactPhosphorBoxPanel,
  ReactPhosphorDockPanel,
  ReactPhosphorMenuBar,
  ReactPhosphorMenu,
  ReactPhosphorCommandRegistry,
  ReactPhosphorCommand, 
  ReactPhosphorCommandPalette,
  ReactPhosphorDockWidget
} from '../lib/react-phosphor'

import { 
  CommandPalette, 
  ContextMenu, 
  Menu, 
} from '@phosphor/widgets';


export default class JavascriptPlayground extends Component {
  state: {
    savedLayouts: any
  }
  constructor(props) {
    super(props)
    
    this.commandRegistryCreated = this.commandRegistryCreated.bind(this)

    this.state = {
      savedLayouts: []
    }
  }
  
  saveLayout(l: any) {
    return l
  }

  commandRegistryCreated(widget:any, commands:any) {
    this.setState({
      commandRegistry: commands
    }) 
  
    let contextMenu = new ContextMenu({ commands });
  
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      if (contextMenu.open(event)) {
        event.preventDefault();
      }
    });
  
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      commands.processKeydownEvent(event);
    });
    
    this.state.savedLayouts = [];

    const cmd = this.state.commandRegistryCommands
    cmd.push('save-dock-layout', {
      label: 'Save Layout',
      caption: 'Save the current dock layout',
      execute: () => {
        this.state.savedLayouts.push(widget.saveLayout());
        palette.addItem({
          command: 'restore-dock-layout',
          category: 'Dock Layout',
          args: { index: this.state.savedLayouts.length - 1 }
        });
      }
    });
  
    cmd.push('restore-dock-layout', {
      label: args => {
        return `Restore Layout ${args.index as number}`;
      },
      execute: args => {
        widget.restoreLayout(this.state.savedLayouts[args.index as number]);
      }
    });
  
    palette.addItem({
      command: 'save-dock-layout',
      category: 'Dock Layout',
      rank: 0
    });

    this.setState({menuBarChildren: [ menu1, menu2 ]})
  }
  
  render() {
    return (<div style={classes}>
      <div id='root' />

      <ReactPhosphorCommandRegistry id="commandRegistry" >

        <ReactPhosphorCommand command={'jsplayground:new-sketch'} options={{
          label: 'New Sketch',
          mnemonic: 0,
          caption: 'Create a new sketch',
          execute: () => {
            console.log('New Sketch');
          }
        }} />
        <ReactPhosphorCommand command={'jsplayground:open-sketch'} options={{
          label: 'Open Sketch',
          mnemonic: 0,
          caption: 'Open a sketch',
          execute: () => {
            console.log('Open Sketch');
          }
        }} />
        <ReactPhosphorCommand command={'jsplayground:clone-sketch'} options={{
          label: 'Clone Sketch',
          mnemonic: 0,
          caption: 'Clone the sketch',
          execute: () => {
            console.log('Clone Sketch');
          }
        }} />
        <ReactPhosphorCommand command={'sketch:run-sketch'} options={{
          label: 'Run Sketch',
          mnemonic: 0,
          caption: 'Run the Sketch',
          execute: () => {
            console.log('Run Sketch');
          }
        }} />
        <ReactPhosphorCommand command={'sketch:live-mode'} options={{
          label: 'Toggle Live Mode',
          mnemonic: 0,
          caption: 'Toggle Live Mode',
          execute: () => {
            console.log('Live Mode');
          }
        }} />

        <ReactPhosphorCommandPalette id={'palette'}>
          <ReactPhosphorCommand command={'jsplayground:new-sketch'} category={'Workspace'}/>
          <ReactPhosphorCommand command={'jsplayground:open-sketch'} category={'Workspace'}/>
          <ReactPhosphorCommand command={'jsplayground:clone-sketch'} category={'Workspace'}/>
          <ReactPhosphorCommand command={'jsplayground:settings'} category={'Workspace'}/>
          <ReactPhosphorCommand command={'sketch:run-sketch'} category={'Sketch'}/>
          <ReactPhosphorCommand command={'sketch:live-mode'} category={'Sketch'}/>
        </ReactPhosphorCommandPalette>

        <ReactPhosphorMenuBar id={'menuBar'}>
          <ReactPhosphorMenu label={'Workspace'} mnemonic={0}>
            <ReactPhosphorCommand command={'jsplayground:new-sketch'}/>
            <ReactPhosphorCommand command={'jsplayground:open-sketch'}/>
            <ReactPhosphorCommand command={'jsplayground:clone-sketch'}/>
            <ReactPhosphorCommand type={'separator'}/>
            <ReactPhosphorCommand command={'jsplayground:settings'}/>
          </ReactPhosphorMenu>
          <ReactPhosphorMenu label={'Sketch'} mnemonic={1}>
            <ReactPhosphorCommand command={'sketch:run-sketch'}/>
            <ReactPhosphorCommand type={'separator'}/>
            <ReactPhosphorCommand command={'sketch:live-mode'}/>
          </ReactPhosphorMenu>
        </ReactPhosphorMenuBar>

      </ReactPhosphorCommandRegistry>

      <ReactPhosphorBoxPanel id={'main'} direction={'left-to-right'} spacing={0}>
        <ReactPhosphorDockPanel direction={'left-to-right'} spacing={0} id={'dock'}>
          <ReactPhosphorDockWidget title={'Output'}>
            <ReactPhosphorDockWidget title={'HTML'} mode={'split-right'}>
              <ReactPhosphorDockWidget title={'JS'} mode={'split-top'}/>
              <ReactPhosphorDockWidget title={'CSS'} mode={'split-left'}/>
            </ReactPhosphorDockWidget>
          </ReactPhosphorDockWidget>
        </ReactPhosphorDockPanel>
        <ReactPhosphorDock title={'Console'} mode={'split-bottom'}/>
      </ReactPhosphorBoxPanel>
    </div>)
  }
}