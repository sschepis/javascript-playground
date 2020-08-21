import React from 'react'
import {Widget} from "@phosphor/widgets"
import {IWidgetState, IWidgetProps} from './interfaces'
import WrapperWidget from './wrapper-widget'
import {createPortal} from "react-dom"

export default class ReactPhosphorWidget extends React.PureComponent<IWidgetProps, IWidgetState> {
  elem: HTMLElement
  widget: any
  props: {
    id: any,
    elementClass: any,
    contextStore: any,
    widgetCreated?: any,
    widgetDidMount?: any
  }
  widgetInfo: { node: any, component: any }
  constructor(props) {
    super(props)
    this.widget = new this.props.elementClass(this.props.contextStore)
    this.widget.id = this.props.id
    if(this.props.widgetCreated) {
      this.props.widgetCreated(this, this.widget)
    }
  }

  componentDidMount() {
    let node = document.createElement("div")
    let wrapper = new WrapperWidget(this.constructor.name, node)
    console.log(this.constructor.name)

    this.widgetInfo = {node, component:this}
    Widget.attach(wrapper, this.elem);
    if(this.props.widgetDidMount) {
      this.props.widgetDidMount(this, wrapper, this.elem)
    }
  }

  render() {
    return (
      <div ref={(c) => this.elem = c}>
        {createPortal(
               this.widgetInfo.component, 
               this.widgetInfo.node)}
      </div>
    )
  }
}