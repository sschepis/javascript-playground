import React, {h, Component} from 'react'
import {render} from 'react-dom'
import {Widget, BoxPanel, DockPanel} from "@phosphor/widgets"
import { Message } from '@phosphor/messaging'

import {
  ReactPhosphorWidget,
  ReactPhosphorWidgetContainer,
  ReactPhosphorBoxPanel,
  ReactPhosphorDockPanel
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
    return (<div>

\

    </div>)
  }
}

render(<WidgetContainerTest />, document.getElementById('app'))