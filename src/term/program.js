import { expandPath } from './shell/utils.js'

class Program {
  constructor (args, session, stdin, stdout, stderr) {
    this.args = args
    this.session = session
    this.term = session.term
    this.stdin = stdin
    this.stdout = stdout
    this.stderr = stderr
  }

  absolutePath (path) {
    return expandPath(this.session.cwd, path)
  }
}

export default Program
