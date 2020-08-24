import { Widget } from '@phosphor/widgets'
import { Message } from '@phosphor/messaging'

export default class CompiledOutputWidget extends Widget {
  props: {
    id: any,
    widgetCreated?: any,
    widgetDidMount?: any,
    children?: any
  }
  iframe
  constructor(props) {
    super(Object.assign(props, {
      node: document.createElement('div')}
    ))

    this.setFlag(Widget.Flag.DisallowLayout)
    this.addClass('content')
    this.addClass('compiled-output')
    this.title.label = 'Compiled Output'
    this.title.closable = false
    this.title.caption = 'Compiled Output'

    document.addEventListener('state_updated', (e:any) => {
      this.updateiFrame(e.detail)
    })
  }
  updateiFrame(content) {
    if(!content) {
      return
    }
    if(this.iframe) {
      this.iframe.parentNode.removeChild(this.iframe);
    }
    this.iframe = document.createElement('iframe')
    this.iframe.height = '100%'
    this.iframe.width = '100%'
    this.iframe.srcdoc = content.compiledPage
    this.node.appendChild(this.iframe)
    console.log('CompiledOutputWidget', 'updateiFrame')
  }
  protected onActivateRequest(msg: Message): void {
    if (this.isAttached) {
      this.node.focus()
    }
  }
}
