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
    widgetClass: any,
    contextStore: any,
    widgetCreated?: any,
    widgetDidMount?: any,
    children?: any
  }
  widgetInfo: { node: any, component: any }
  constructor(props) {
    super(props)
    if(this.props.widgetClass) {
      this.widget = new this.props.widgetClass(this.props.contextStore)
      this.widget.id = this.props.id
      if(this.props.widgetCreated) {
        this.props.widgetCreated(this, this.widget)
      }
    }
  }
  
  componentDidMount() {
    let widgetInfo = {}
    let node = document.createElement("div")
    let widget = new WrapperWidget(this.widget.constructor.name, node)

    var p = null, s = null
    try {
      p =  ((this.props) as any).addWidgetFunc
      s = ((this.state) as any).addWidgetFunc
    } catch(e:any) {}
    const pawFunc: any = p
    const sawFunc: any = s

    if(pawFunc) {
      pawFunc(this.widget)
    } else if(sawFunc) {
      sawFunc(this.widget)
    } else {

    }
    const component = this.widget
    this.widgetInfo = {node, component}

    Widget.attach(this.widget, this.elem);
    if(this.props.widgetDidMount) {
      this.props.widgetDidMount(this, this.widget, this.elem)
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