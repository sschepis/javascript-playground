export default async (shell) => {
  const char = await shell.readChar('Y/n?')
  await shell.printLine(char)
}
