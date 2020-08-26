class Stream {
  constructor () {
    this.data = []
    this.closed = false
  }

  bind (callback) {
    this.callback = callback
    this.drain()
  }

  drain () {
    while (this.data.length > 0) {
      const args = this.data.shift()
      this.callback.apply(null, args)
    }
  }

  unbind () {
    this.callback = null
  }

  onClosed (callback) {
    this.closedCallback = callback
    if (this.closed) this.closedCallback()
  }

  close () {
    this.closed = true
    if (this.closedCallback) this.closedCallback()
  }

  write (_args) {
    const args = []
    for (let i = 0; i < arguments.length; i++) {
      args.push(arguments[i])
    }
    this.data.push(args)
    if (this.callback) {
      this.drain()
    }
  }

  writeln (string) {
    this.write(string + '\n')
  }

  pipe (emitter) {
    this.callback = emitter.emit
  }

  get dataAsString () {
    const parts = []
    this.data.forEach((part) => parts.push(part[0]))
    return parts.join('\n')
  }
}

export default Stream
