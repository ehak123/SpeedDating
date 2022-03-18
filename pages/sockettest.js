/*import { useEffect, useState } from 'react'
import io from 'Socket.IO-client'
let socket;
import HomeFooter from '../components/layout/homefooter';

const Home = () => {
  const [input, setInput] = useState('')

  useEffect(() => socketInitializer(), [])

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on('server-message', msg => {
      //setInput(msg);
      var item = document.createElement('li');
      item.textContent = msg;
      messages.appendChild(item);
      //socket.emit('message', msg);
    });

     we dont wanna update the other's field
    socket.on('update-input', msg => {
      setInput(msg)
    })
    
  }

  const onChangeHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value)
    //socket.emit('input-change', e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input) {
      console.log("hello");
      console.log(input);
      socket.emit('client-message', input);
      setInput('');
    }
  }

  return (
    <>
      <ul id="messages"></ul>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type something"
          value={input}
          onChange={onChangeHandler}
        />
        <button>Send</button>
      </form>
      <HomeFooter />
    </>
  )
}
*/
//export default Home;