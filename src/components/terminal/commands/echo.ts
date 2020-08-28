export default async (shell, args) => {
  let message = null
  if (args.length) await shell.printLine(args.join(' '))
  // Loop until they hit enter without typing anything
  while (message = await shell.readLine('')) {
    await shell.printLine(message)
  }
}
