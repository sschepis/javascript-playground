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
    containerClass: any,
    contextStore: any,
    addWidgetFunc: any,
    containerCreated: any,
    containerDidMount: any,
    children?: any
  }
  widgetInfos: Array<{ node: any, component: any }>
  constructor(props) {
    super(props)
    this.widgetInfos = []
    if(this.props.containerClass) {
      this.container = new this.props.containerClass(this.props.contextStore)
      this.container.id = this.props.id
      if(this.props.containerCreated) {
        this.props.containerCreated(this)
      }
    }
  }

  componentDidMount() {
    let widgetInfos = []

    var cs = Array.isArray(this.props.children) ? this.props.children : [ this.props.children ]
    cs.forEach(comp => {
      let node = document.createElement("div")
      let widget = new WrapperWidget(comp.props.id, node)

      var p = null, s = null
      try {
        p =  ((this.props) as any).addWidgetFunc
        s = ((this.state) as any).addWidgetFunc
      } catch(e:any) {}
      const pawFunc: any = p
      const sawFunc: any = s

      if(pawFunc) {
        pawFunc(this, widget)
      } else if(sawFunc) {
        sawFunc(this, widget)
      } else {
        this.container.addWidget(widget)
      }
      const component = Array.isArray(comp) ? comp[0] : comp
      widgetInfos.push({node, component})
      this.widgetInfos = widgetInfos
    })

    Widget.attach(this.container, this.elem);
    if(this.props.containerDidMount) {
      this.props.containerDidMount(this)
    }
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