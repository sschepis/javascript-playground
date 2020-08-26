import ArgParser from './shell/arg_parser.js'
import Pipeline from './shell/pipeline.js'
import { expandPath, parentDirectory, fileName, pathJoin } from './shell/utils.js'
import Stream from './stream.js'

const KEYS = {
  backspace: 8,
  tab: 9,
  enter: 13,
  left: 37,
  up: 38,
  right: 39,
  down: 40
}

class Shell {
  constructor (session, prompt) {
    this.session = session
    this.term = session.term
    this.prompt = prompt
    this.line = ''
    this.history = []
    this.position = 0
    this.listeners = {}
    this.lastStatus = 0
    this.stdin = new Stream()
    this.stdout = new Stream()
    this.stderr = new Stream()
  }

  execute (line, callback) {
    if (line.trim() === '') return callback()
    const parts = line.trim().split(/\s*\|\s*/).map((part) => {
      try {
        return ArgParser.parse(part)
      } catch (e) {
        this.stderr.writeln(`Unable to parse command line: ${e}`)
        callback()
      }
    })
    if (parts.length > 0 && parts[0]) {
      new Pipeline(parts, this.session, this.stdin, this.stdout, this.stderr).start((status) => {
        this.lastStatus = status
        this.bindInput()
        callback()
      })
    }
  }

  executeLine (line) {
    this.history.unshift(line)
    this.history = [...new Set(this.history)]
    this.execute(line, () => {
      this.term.write(this.prompt())
      this.position = 0
      this.line = ''
    })
  }

  main () {
    this.setupStreams()
    this.term.write(this.prompt(), false)
    this.bindInput()
  }

  setupStreams () {
    this.term.on('key', (key, ev) => this.stdin.write(key, ev))
    const out = (str) => {
      str = str.replace(/\n/g, "\r\n")
      this.term.write.apply(this.term, [str].concat(Array.prototype.slice(arguments, 1)))
    }
    this.stdout.bind(out)
    this.stderr.bind(out)
  }

  bindInput () {
    this.bindInputAlready = this.bindInputAlready || 0
    this.bindInputAlready++
    if (this.bindInputAlready > 10) return
    this.stdin.bind(this.handleKey.bind(this))
  }
  
  backspace () {
    if (this.line.length > 0) {
      if (this.position > 0 && this.term.buffer.x === 0) {
        const x = this.term.geometry[0]
        const y = this.term.buffer.y // NOTE: this should be y - 1; maybe a bug in xterm.js?
        this.term.write(`\x1B[${y};${x}f `)
      }
      this.term.write('\b \b')
      this.line = this.line.substring(0, this.line.length - 1)
      this.position--
    }
  }

  replaceLine (line, prompt = false) {
    const bs = this.position
    for (let i = 0; i < bs; i++) { this.backspace() }
    if (prompt) this.term.write(this.prompt())
    this.line = line
    this.term.write(line)
    this.position = line.length
  }

  handleKey (key, ev) {
    switch (ev.keyCode) {
      case KEYS.enter:
        delete this.historyPosition
        this.term.write('\r\n')
        this.executeLine(this.line)
        break
      case KEYS.backspace:
        this.backspace()
        break
      case KEYS.tab:
        /* eslint-disable */
        const words = this.line.split(/\s+/)
        const word = words[words.length - 1]
        const path = expandPath(this.session.cwd, word)
        const dir = parentDirectory(path)
        const matchWord = fileName(path)
        this.session.fs.readdir(dir, (err, files) => {
          if (err) throw err
          const matching = files.filter((f) => f.indexOf(matchWord) === 0)
          if (matching.length > 0) {
            const match = matching[0]
            const path = expandPath(dir, match)
            this.session.fs.stat(path, (err, stat) => {
              let existing = pathJoin([dir, matchWord])
              let rest = path.substring(existing.length)
              if (rest.length > 0) {
                if (stat.isDirectory()) rest = rest + '/'
                this.line = this.line + rest
                this.position += rest.length
                this.term.write(rest)
              }
            })
          }
        })
        break
      case KEYS.up:
        if (typeof(this.historyPosition) !== 'undefined') {
          if (this.historyPosition < this.history.length - 1) this.historyPosition++
        } else {
          this.historyPosition = 0
        }
        this.replaceLine(this.history[this.historyPosition])
        break
      case KEYS.down:
        if (typeof(this.historyPosition) !== 'undefined') {
          if (this.historyPosition > -1) this.historyPosition--
        } else {
          this.historyPosition = -1
        }
        this.replaceLine(this.historyPosition === -1 ? '' : this.history[this.historyPosition])
        break
      case KEYS.left:
        if (this.position > 0) {
          this.position--
          this.term.write('\b')
        }
        break
      case KEYS.right:
        if (this.position < this.line.length) {
          this.position++
          this.term.write('\x1B[1C')
        }
        break
      default:
        if (ev.ctrlKey && ev.key === 'l') {
          this.term.clear()
          this.position = 0
          this.replaceLine(this.line, true)
        } else {
          if(this.position === this.line.length) {
            this.line = this.line + key
            this.term.write(key)
          } else {
            this.line = this.line.substring(0, this.position) + key + this.line.substring(this.position)
            this.term.write(key)
            const rest = this.line.substring(this.position + 1)
            this.term.write(rest)
            for (let i = 0; i < rest.length; i++) this.term.write('\b')
          }
          this.position++
        }
    }
  }
}

export default Shell
