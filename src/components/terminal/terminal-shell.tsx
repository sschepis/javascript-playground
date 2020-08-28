import XtermJSShell from './xterm-shell'
import help from './commands/help'
import curl from './commands/curl'
import echo from './commands/echo'
import confirm from './commands/confirm'
import ssh from './commands/ssh'

import 'xterm/css/xterm.css'

  function startTerminalShell(terminal, domElement) {
    const shell = new XtermJSShell(terminal)
    shell
    .command('help', help, null)
    .command('curl', curl, null)
    .command('echo', echo, null)
    .command('confirm', confirm, null)
    .command('ssh', ssh, null)
    .repl()
    terminal.open(domElement)
    return shell
  }

  function stopTerminalShell(domElement) {}

  export { startTerminalShell, stopTerminalShell, shell }
