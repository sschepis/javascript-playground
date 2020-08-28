export default async (shell, [ url ]) => {
  const response = await fetch(url)
  const text = await response.text()
  await shell.print(text)
}
