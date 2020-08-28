class Process {
  constructor (Program, args, session, stdin, stdout, stderr) {
    this.program = new Program(args, session, stdin, stdout, stderr)
  }

  start (status) {
    this.program.main(status)
  }
}

export default Process
