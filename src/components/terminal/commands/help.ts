
import XtermJSShell from '../xterm-shell'

export default async (shell: XtermJSShell) => {
  await shell.printLine(`
  Try running one of these commands:
  ${shell.commands.map((command) => ` - ${command}`).join('\n')}

  `)
}
