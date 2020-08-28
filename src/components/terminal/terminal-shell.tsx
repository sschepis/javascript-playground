import Terminal from 'xterm/lib/xterm'
import XtermJSShell from './xterm-shell'
import help from './commands/help'
import curl from './commands/curl'
import echo from './commands/echo'
import confirm from './commands/confirm'
import ssh from './commands/ssh'

import styles from 'xterm/css/xterm.css'

const terminal = new Terminal()
const shell = new XtermJSShell(terminal)

  function startTerminalShell(domElement) {
    shell
    .command('help', help, null)
    .command('curl', curl, null)
    .command('echo', echo, null)
    .command('confirm', confirm, null)
    .command('ssh', ssh, null)
    .repl()
    terminal.open(domElement)
  }

  function stopTerminalShell(domElement) {}

  export { startTerminalShell, stopTerminalShell, terminal, shell, styles }
