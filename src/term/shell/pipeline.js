import Process from '../process.js'
import Resolver from './resolver.js'
import Stream from '../stream.js'
import { mapAsync } from './utils.js'

class Pipeline {
  constructor(parts, session, stdin, stdout, stderr) {
    this.parts = parts
    this.session = session
    this.stdin = stdin
    this.stdout = stdout
    this.stderr = stderr
  }

  start(status) {
    let stdin = this.stdin
    let stdout = this.stdout
    let stderr = this.stderr
    mapAsync(this.parts, (part, cb) => {
      new Resolver(part, this.session).resolve(cb)
    }, (err, parts) => {
      parts.forEach(([command, args, program], index) => {
        const first = index == 0
        const last = index == parts.length - 1
        stdin = first ? this.stdin : stdout
        stdout = last ? this.stdout : new Stream()
        if (program) {
          const process = new Process(program, args, this.session, stdin, stdout, stderr)
          const callback = (s) => {
            if (s === 0 && last) {
              status(0)
            } else if (s === 0) {
              stdout.close()
            } else {
              status(s)
            }
          }
          process.start(callback)
        } else {
          this.stderr.writeln(`command not found: ${command}`)
          status(127)
        }
      })
    })
  }
}

export default Pipeline
