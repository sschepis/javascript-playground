import Shell from './shell.js'
import { fsWrapper, FS } from './fs.js'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'

export default class TerminalSession {
  constructor (domNode) {
    this.domNode = domNode
    this.fsWrapper = fsWrapper
    this.term = new Terminal()
    const fitAddon = new FitAddon()
    this.term.loadAddon(fitAddon)
    this.env = { PWD: '/' }
    this.fs = FS
  }

  get cwd () { return this.env.PWD }
  set cwd (dir) { this.env.PWD = dir }

  start () {
    this.term.open(this.domNode, true)
    //this.term.fit()
    this.term.clear = () => {
      // this clear is better than the built-in one
      const height = this.term.geometry[1]
      this.term.write(`\x1B[${height}0f`)
      for (let i = 0; i < height; i++) {
        this.term.write('\r\n')
      }
      this.term.write('\x1B[0;0f')
    }
    this.shell = new Shell(this, () => `${this.cwd}$ `)
    this.shell.main()
  }
}
