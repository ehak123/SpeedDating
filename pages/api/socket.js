import { Server } from 'Socket.IO'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', (socket) => {
      socket.on('connect', () => {
        console.log('A client has connected.');
      });

      socket.on('disconnect', () => {
        console.log('A client has disconnected.');
      });

      socket.on('message', (msg) => {
        io.emit('message', msg);
      });
      
      socket.on('eventSignal', (signal) => {
        console.log("Sending out signal: " + signal);
        io.emit('eventSignal', signal);
      });
    })
  }
  res.end()
}

export default SocketHandler