import React from 'react'
import {Widget} from "@phosphor/widgets"
import {IWidgetContainerState, IWidgetContainerProps} from './interfaces'
import WrapperWidget from './wrapper-widget'
import {createPortal} from "react-dom"

export default class ReactPhosphorWidgetContainer extends React.PureComponent<IWidgetContainerProps, IWidgetContainerState> {
  elem: HTMLElement
  container: any
  props: {
    id: any,
    containerClass?: any,
    contextStore?: any,
    dynamicChildren: any,
    addWidgetFunc?: any,
    onContainerCreated?: any,
    children: any
  }
  widgetInfos: Array<{ node: any, component: any }>
  constructor(props) {
    super(props)
    this.widgetInfos = []
    if(this.props.containerClass) {
      this.container = new this.props.containerClass(this.props.contextStore)
      this.container.id = this.props.id
    }
    if(this.props.onContainerCreated) {
      this.props.onContainerCreated(this, this.container)
    }
  }

  componentDidMount() {
    let widgetInfos = []
    for (let component of this.props.dynamicChildren) {
      let node = document.createElement("div")
      let widget = new WrapperWidget(component.constructor.name, node)
      console.log(component.constructor.name)

      var p = null, s = null
      try {
        p =  ((this.props) as any).addWidgetFunc
        s = ((this.state) as any).addWidgetFunc
      } catch(e:any) {}
      const pawFunc: any = p
      const sawFunc: any = s

      if(pawFunc) {
        pawFunc(this.container, widget)
      } else if(sawFunc) {
        sawFunc(this.container, widget)
      }
      const comp = Array.isArray(component) ? component[0] : component
      widgetInfos.push({node, comp})
    }
    this.widgetInfos = widgetInfos
    Widget.attach(this.container, this.elem);
  }

  render() {
    return (
      <div style={{width:'100%', height:'100%'}} ref={(c) => this.elem = c}>
          {this.widgetInfos.map(widgetInfo => {
             return createPortal(
               widgetInfo.component, 
               widgetInfo.node)
          })}
      </div>
    )
  }
}