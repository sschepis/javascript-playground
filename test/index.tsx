import React, {h, Component} from 'react'
import {render} from 'react-dom'
import {Widget} from "@phosphor/widgets"

import {
  ReactPhosphorBoxPanel,
  ReactPhosphorWidget
} from '../src/lib/react-phosphor'

export default class BoxPanelTest extends Component {
  constructor(props: any) {
    super(props)
  }

  widgetCreated() {
    console.log('widgetCreated')
  }

  widgetDidMount() {
    console.log('widgetDidMount')
  }

  render() {

    return (<div>
      <ReactPhosphorBoxPanel direction={'left-to-right'} spacing={0} id={'main'}>
        <ReactPhosphorWidget 
          id={'widget'}
          contextStore={{}}
          elementClass={Widget} 
          widgetCreated={this.widgetCreated}
          widgetDidMount={this.widgetDidMount} />
      </ReactPhosphorBoxPanel>
    </div>)
  }
}

render(<BoxPanelTest />, document.getElementById('app'))