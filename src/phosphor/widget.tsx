import { Widget } from '@phosphor/widgets'
import { Message } from '@phosphor/messaging'
import PhosphorController from '../phosphor/controller'

export default class RedisplayableWidget extends Widget {
  props
  constructor(props) {
    super(props)
    this.props = Object.assign({}, props)
  }
  protected onCloseRequest(msg: Message): void {

    const pinstance = PhosphorController.getInstance()
    const pcmd = pinstance
      .commandRegistry.addCommand(`view:show_${this.props.id}`, {
      label: `Show ${this.props.label}`,
      mnemonic: 2,
      caption: `Show the ${this.props.label}`,
      execute: () => {
        if(pinstance.widgetFuncs[this.id]) {
          pinstance.widgetFuncs[this.id]()
          pcmd.dispose()
        }
      }
    })
    if(!this.props.menuAdded) {
      pinstance
        .commandPalette.addItem({ command: `view:show_${this.props.id}`, category: 'View' });
      this.props.menuAdded = true
    }
    super.onCloseRequest(msg)
  }
}
