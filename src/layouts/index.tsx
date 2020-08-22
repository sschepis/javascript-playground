import React, { Component } from 'react'

import classes from './index.css'

import {
  ReactPhosphorBoxPanel,
  ReactPhosphorDockPanel,
  ReactPhosphorMenuBar,
  ReactPhosphorContextMenu,
  ReactPhosphorMenu,
  ReactPhosphorCommandRegistry,
  ReactPhosphorCommand, 
  ReactPhosphorCommandPalette
} from '../lib/react-phosphor'


export default class JavascriptPlayground extends Component {
  state: {
    savedLayouts: any
  }
  constructor(props) {
    super(props)
    this.state = {
      savedLayouts: []
    }
  }
  saveLayout(l: any) {
    return l
  }
  
  render() {
    const opt = (t:any, m = undefined, e = undefined) => {
      const label = Array.isArray(t) ? t[0] : t
      const caption = Array.isArray(t) && t.length > 1 ? t[1] : label
      const o:any = {label}
      if(caption) { o.caption=caption }
      if(m) { o.mnemonic=m }
      o.execute = () => e ? e(m) : console.log(t)
      return o
    }
    return (<div>
      <div style={classes} id='root' />
      <ReactPhosphorCommandRegistry id="commandRegistry" >

        <ReactPhosphorCommand command={'jsplayground:new-sketch'} options={opt('New Sketch', 0)} />
        <ReactPhosphorCommand command={'jsplayground:open-sketch'} options={opt('Open Sketch', 0)} />
        <ReactPhosphorCommand command={'jsplayground:clone-sketch'} options={opt('Clone Sketch', 0)} />
        <ReactPhosphorCommand command={'jsplayground:settings'} options={opt('Settings', 0)} />
        <ReactPhosphorCommand command={'sketch:run-sketch'} options={opt('Run Sketch', 1)} />
        <ReactPhosphorCommand command={'sketch:live-mode'} options={opt('Toggle Live Mode', 1)} />
        <ReactPhosphorCommand command={'save-dock-layout'} options={
          opt(['Save Layout', 'Save the current dock layout'], undefined, (cmd) => {
            this.state.savedLayouts.push(cmd.saveLayout())
            cmd.container.addItem({
              command: 'restore-dock-layout',
              category: 'Dock Layout',
              args: { index: this.state.savedLayouts.length - 1 }
            })
          })
        } />
        <ReactPhosphorCommand command={'restore-dock-layout'} options={
          opt(
            args => `Restore Layout ${args.index as number}`, 
            undefined, 
            cmd => cmd.restoreLayout(this.state.savedLayouts[cmd.index as number])
          )
        } />

        <ReactPhosphorCommandPalette id={'palette'}>
          <ReactPhosphorCommand command={'jsplayground:new-sketch'} category={'Workspace'}/>
          <ReactPhosphorCommand command={'jsplayground:open-sketch'} category={'Workspace'}/>
          <ReactPhosphorCommand command={'jsplayground:clone-sketch'} category={'Workspace'}/>
          <ReactPhosphorCommand command={'jsplayground:settings'} category={'Workspace'}/>
          <ReactPhosphorCommand command={'sketch:run-sketch'} category={'Sketch'}/>
          <ReactPhosphorCommand command={'sketch:live-mode'} category={'Sketch'}/>
          <ReactPhosphorCommand command={'save-dock-layout'} category={'Dock Layout'} rank={0}/>
        </ReactPhosphorCommandPalette>

        <ReactPhosphorMenuBar id={'menu'}>
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

        <ReactPhosphorContextMenu />

      </ReactPhosphorCommandRegistry>

      <ReactPhosphorBoxPanel direction={'left-to-right'} spacing={0} id={'main'}>
        <ReactPhosphorDockPanel id='dock' title={{label:'Output'}}>
          <ReactPhosphorDockPanel id='compiled-output' title={{label:'Output'}} mode={'split-right'}>
            <ReactPhosphorDockPanel id='html-input' title={{label:'HTML'}}  mode={'split-right'}>
              <ReactPhosphorDockPanel id='js-input' title={{label:'JS'}}  mode={'split-top'}/>
              <ReactPhosphorDockPanel id='css-input' title={{label:'CSS'}}  mode={'split-left'}/>
            </ReactPhosphorDockPanel>
          </ReactPhosphorDockPanel>
        </ReactPhosphorDockPanel>
        <ReactPhosphorDockPanel id='console-output' title={{label:'Console'}} mode={'split-bottom'}/>
      </ReactPhosphorBoxPanel>
    </div>)
  }
}