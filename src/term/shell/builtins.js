import Stream from '../stream.js'
import Program from '../program.js'
import { expandPath } from './utils.js'

export class cat extends Program {
  main(status) {
    if (this.args.length > 0) {
      this.args.forEach((arg) => {
        const path = expandPath(this.session.cwd, arg)
        this.session.fs.readFile(path, (err, data) => {
          if (err) {
            this.stderr.writeln(`cat: ${path}: ${err}`)
            status(1)
          } else {
            this.stdout.writeln(data)
            status(0)
          }
        })
      })
    } else {
      this.stdin.bind((data) => {
        this.stdout.write(data)
      })
      this.stdin.onClosed(() => {
        status(0)
      })
    }
  }
}

export class cd extends Program {
  main(status) {
    const path = this.args[0]
    const newCwd = expandPath(this.session.cwd, path)
    this.session.fs.stat(newCwd, (err, stat) => {
      if (err) {
        this.stderr.writeln(`cd: ${newCwd}: ${err}`)
        status(1)
      } else if (stat.isDirectory()) {
        this.session.cwd = newCwd
        status(0)
      } else {
        this.stderr.writeln(`cd: ${newCwd} is not a directory`)
        status(1)
      }
    })
  }
}

export class clear extends Program {
  main(status) {
    this.term.clear()
    status(0)
  }
}

export class echo extends Program {
  main(status) {
    const strings = this.args.map((arg) => expandVariables(arg, this.session.shell))
    this.stdout.writeln(strings.join(' '))
    status(0)
  }
}

export class ls extends Program {
  main(status) {
    const path = expandPath(this.session.cwd, this.args[0] || '.')
    this.session.fs.readdir(path, (err, files) => {
      if (err) {
        this.stderr.writeln(`ls: ${path}: ${err}`)
        status(1)
      } else {
        files.forEach((file) => {
          this.stdout.writeln(file)
        })
        status(0)
      }
    })
  }
}

export class mkdir extends Program {
  main(status) {
    const path = expandPath(this.session.cwd, this.args[0] || '.')
    this.session.fs.mkdir(path, (err) => {
      if (err) {
        this.stderr.writeln(`mkdir: ${path}: ${err}`)
        status(1)
      } else {
        status(0)
      }
    })
  }
}

export class pwd extends Program {
  main(status) {
    this.stdout.writeln(this.session.cwd)
    status(0)
  }
}

export class rm extends Program {
  main(status) {
    const path = expandPath(this.session.cwd, this.args[0] || '.')
    this.session.fs.unlink(path, (err) => {
      if (err) {
        this.stderr.writeln(`rm: ${path}: ${err}`)
        status(1)
      } else {
        status(0)
      }
    })
  }
}

export class rmdir extends Program {
  main(status) {
    const path = expandPath(this.session.cwd, this.args[0] || '.')
    this.session.fs.rmdir(path, (err) => {
      if (err) {
        this.stderr.writeln(`rmdir: ${path}: ${err}`)
        status(1)
      } else {
        status(0)
      }
    })
  }
}

export class sort extends Program {
  main(status) {
    let lines = []
    if (this.args.length > 0) {
      this.args.forEach((arg) => {
        const path = expandPath(this.session.cwd, arg)
        this.session.fs.readFileSync(path).split(/\n/).forEach((line) => lines.push(line))
      })
      this.stdout.writeln(lines.sort().join('\n'))
      status(0)
    } else {
      let currentLine = ''
      this.stdin.bind((data) => {
        currentLine = currentLine + data
        if (currentLine.match(/\n/)) {
          const parts = currentLine.split(/\n/)
          currentLine = parts.pop()
          lines = lines.concat(parts)
        }
      })
      this.stdin.onClosed(() => {
        if (currentLine) lines.push(currentLine)
        this.stdout.writeln(lines.sort().join('\n'))
        status(0)
      })
    }
  }

  static test() {
    assertStdout(sort, [], 'a\nb\nz\n', (stdin) => {
      stdin.writeln('b')
      stdin.writeln('z')
      stdin.writeln('a')
      stdin.close()
    })
  }
}

export class touch extends Program {
  main(status) {
    const path = expandPath(this.session.cwd, this.args[0] || '.')
    this.session.fs.writeFile(path, '', (err) => {
      if (err) {
        this.stderr.writeln(`touch: ${path}: ${err}`)
        status(1)
      } else {
        status(0)
      }
    })
  }
}

const expandVariables = (string, shell) => {
  return string.replace(/\$(\?)|\$(\w+)|\$\{([^\}]+)\}/g, (match) => {
    const name = match[1] || match[2] || match[3]
    switch (name) {
      case '?':
        return shell.lastStatus
      default:
        return ''
    }
  })
}

const assertEq = (expected, actual, testName) => {
  console.assert(expected === actual, testName, JSON.stringify(expected), '!==', JSON.stringify(actual))
}

const assertStdout = (programClass, args, expected, writer) => {
  const session = {}
  const stdin = new Stream()
  const stdout = new Stream()
  const stderr = new Stream()
  const program = new programClass(args, session, stdin, stdout, stderr)
  program.main((status) => {
    if (status !== 0) throw status
    assertEq(expected, stdout.dataAsString)
  })
  writer(stdin)
}

sort.test()
