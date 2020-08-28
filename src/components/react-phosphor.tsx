import React from 'react'
import {DockPanel, Widget} from "@phosphor/widgets";
import {createPortal} from "react-dom";

interface IWidgetInfo {
  component: JSX.Element;
  node: HTMLElement;
}

interface IDockState {
  widgetInfos: IWidgetInfo[];
}

interface IDockProps {
  children: JSX.Element[];
}

class WrapperWidget extends Widget {
  constructor(name: string, node: HTMLElement) {
    super({node});
    this.setFlag(Widget.Flag.DisallowLayout);
    this.title.label = name;
  }
}

export class Dock extends React.PureComponent<IDockProps, IDockState> {
  elem: HTMLElement;
  dock: DockPanel;

  componentDidMount() {
    this.dock = new DockPanel(this.context.store);

    let widgetInfos = [];
    for (let component of this.props.children) {
      let node = document.createElement("div");
      let widget = new WrapperWidget("Widget Name", node);
      this.dock.addWidget(widget);
      widgetInfos.push({node, component});
    }
    this.setState({...this.state, widgetInfos});

    Widget.attach(this.dock, this.elem);
  }

  render() {
    return (<div ref={(c) => this.elem = c}>
          {this.state.widgetInfos.map(widgetInfo => {
             return createPortal(widgetInfo.component, widgetInfo.node);
          })}
      </div>
    );
  }
}