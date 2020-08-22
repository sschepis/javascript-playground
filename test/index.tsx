import React, {h, Component} from 'react'
import {render} from 'react-dom'
import {Widget, BoxPanel, DockPanel} from "@phosphor/widgets"
import { Message } from '@phosphor/messaging'

import {
  ReactPhosphorWidget,
  ReactPhosphorWidgetContainer,
  ReactPhosphorBoxPanel,
  ReactPhosphorDockPanel,
  ReactPhosphorCommandRegistry,
  ReactPhosphorCommand,
  ReactPhosphorCommandPalette,
  ReactPhosphorMenuBar,
  ReactPhosphorMenu,
  ReactPhosphorContextMenu

} from '../src/lib/react-phosphor'

class ContentWidget extends Widget {
  static createNode(): HTMLElement {
    return document.createElement('div');
  }
  constructor(name: string) {
    super({ node: ContentWidget.createNode() });
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus();
    }
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
            <ReactPhosphorCommandRegistry id="commandRegistry" >
        <ReactPhosphorCommand command={'jsplayground:new-sketch'} options={opt('New Sketch', 0)} />
        <ReactPhosphorCommand command={'jsplayground:open-sketch'} options={opt('Open Sketch', 0)} />
        <ReactPhosphorCommand command={'jsplayground:clone-sketch'} options={opt('Clone Sketch', 0)} />
        <ReactPhosphorCommand command={'jsplayground:settings'} options={opt('Settings', 0)} />
        <ReactPhosphorCommand command={'sketch:run-sketch'} options={opt('Run Sketch', 1)} />
        <ReactPhosphorCommand command={'sketch:live-mode'} options={opt('Toggle Live Mode', 1)} />
        {/* <ReactPhosphorCommand command={'save-dock-layout'} options={opt(['Save Layout', 
        'Save the current dock layout'], undefined)}/>
        <ReactPhosphorCommand command={'restore-dock-layout'} options={opt(['Restore Layout',
        'Restore the current dock layout'], undefined)}/> */}
      </ReactPhosphorCommandRegistry>
      
      <ReactPhosphorCommandPalette id={'palette'}>
        <ReactPhosphorCommand command={'jsplayground:new-sketch'} category={'Workspace'}/>
        <ReactPhosphorCommand command={'jsplayground:open-sketch'} category={'Workspace'}/>
        <ReactPhosphorCommand command={'jsplayground:clone-sketch'} category={'Workspace'}/>
        <ReactPhosphorCommand command={'jsplayground:settings'} category={'Workspace'}/>
        <ReactPhosphorCommand command={'sketch:run-sketch'} category={'Sketch'}/>
        <ReactPhosphorCommand command={'sketch:live-mode'} category={'Sketch'}/>
        {/* <ReactPhosphorCommand command={'save-dock-layout'} category={'Dock Layout'} rank={0}/> */}
      </ReactPhosphorCommandPalette>

      <ReactPhosphorMenuBar id={'menu'}>
        <ReactPhosphorMenu label={'Workspace'} mnemonic={0} />
        <ReactPhosphorCommand mnemonic={0} command={'jsplayground:new-sketch'}/>
        <ReactPhosphorCommand mnemonic={0} command={'jsplayground:open-sketch'}/>
        <ReactPhosphorCommand mnemonic={0} command={'jsplayground:clone-sketch'}/>
        <ReactPhosphorCommand type={'separator'}/>
        <ReactPhosphorCommand mnemonic={0} command={'jsplayground:settings'}/>
        <ReactPhosphorMenu label={'Sketch'} mnemonic={1} />
        <ReactPhosphorCommand mnemonic={0} command={'sketch:run-sketch'}/>
        <ReactPhosphorCommand type={'separator'}/>
        <ReactPhosphorCommand mnemonic={0} command={'sketch:live-mode'}/>
      </ReactPhosphorMenuBar>

      <ReactPhosphorContextMenu />
    </div>)
  }
}

render(<WidgetContainerTest />, document.getElementById('app'))