import * as Builtins from './builtins.js'
import { expandPath } from './utils.js'
import Program from '../program.js'

window.Program = Program // needed for some reason because webpack?

class Resolver {
  constructor(command, session) {
    this.name = command[0]
    this.args = command[1].map(unescape)
    this.session = session
  }

  resolve(callback) {
    const path = expandPath(this.session.cwd, this.name)
    this.session.fs.stat(path, (err, stat) => {
      if (err) {
        // must be a built-in
        const program = Builtins[this.name]
        callback(null, [this.name, this.args, program])
      } else if (stat.isFile()) {
        // grab source
        this.session.fs.readFile(path, (err, source) => {
          const mangledSource = '(function() {' + source.toString().replace(/^export default ([a-z]+)/im, 'return $1 })()')
          const program = eval(mangledSource)
          callback(null, [this.name, this.args, program])
        })
      } else {
        // a directory?
        callback(null, [this.name, this.args, null])
      }
    })
  }
}

const unescape = (str) => (
  str
    .replace(/\\n/g, "\n")
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
)

export default Resolver
