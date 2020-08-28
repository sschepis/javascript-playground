export default async (shell, {url}) => {
  // For use with https://github.com/RangerMauve/websocket-shell-service
  if(!url) url = 'ws:localhost:8080'
  const socket = new WebSocket(url)
  let closed = false
  socket.onclose = () => {
    closed = true
    shell.printLine(`Connection to ${url} closed`)
  }
  socket.onmessage = ({data}) => {
    shell.print(data)
  }
  for await(let data of shell.readStream()) {
    if(closed) break
    socket.send(data)
  }
}
