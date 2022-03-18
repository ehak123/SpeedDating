import { Server } from 'Socket.IO'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', socket => {
      socket.on('client-message', msg => {
        socket.broadcast.emit('server-message', msg)
      })
    })

    io.on('connection', socket => {
      socket.on('admin-startevent', msg => {
        socket.broadcast.emit('user-startevent', msg)
      })
    })

    io.on('connection', socket => {
      socket.on('admin-nextstep', msg => {
        socket.broadcast.emit('user-startevent', msg)
      })
    })
  }
  res.end()
}

export default SocketHandler