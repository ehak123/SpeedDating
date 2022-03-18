import { useEffect, useState } from 'react'
import io from 'Socket.IO-client'
let socket;

export default function SocketChat() {
    const [input, setInput] = useState('')

    useEffect(() => socketInitializer(), [])

    const socketInitializer = async () => {
        await fetch('/api/socket');
        socket = io()

        socket.on('connect', () => {
            console.log('connected')
        })

        socket.on('server-message', msg => {
            var item = document.createElement('li');
            item.textContent = msg;
            messages.appendChild(item);
        });

    }

    const onChangeHandler = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.value);
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
        </>
    )
}
