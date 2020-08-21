export interface IWidgetInfo {
  component: JSX.Element
  node: HTMLElement
}

export interface IWidgetContainerState {
  widgetInfos: IWidgetInfo[]
}

export interface IWidgetContainerProps {
  children?: JSX.Element[]
}

export interface IWidgetState {
  widgetInfo: IWidgetInfo
}

export interface IWidgetProps {
  me?: JSX.Element
}