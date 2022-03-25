import MatchFound from "../components/event_user/MatchFound";
import { useLoginContext } from "../context/logincontext";
import UserEvent from "../components/event_user/userevent";
import AdminEvent from "../components/event_admin/adminevent";
import Link from "next/link";
import { useEventContext, useEventDispatchContext } from "../context/eventcontext";
import { useCommContext, useCommDispatchContext } from "../context/commcontext";
import { useEffect, useState } from 'react'
import io from 'Socket.IO-client'
let socket;
import { useRouter } from 'next/router'

export default function Event({ children }) {
    const [input, setInput] = useState('')

    const router = useRouter()

    const state = useLoginContext();
    const eventState = useEventContext();
    const eventDispatch = useEventDispatchContext();
    const commState = useCommContext();
    const commDispatch = useCommDispatchContext();

    useEffect(() => socketInitializer(), [])

    const socketInitializer = async () => {
        await fetch('/api/socket');
        socket = io()

        socket.on('connect', () => {
            console.log('You have connected to the socket.')
        })

        socket.on('message', msg => {
            var item = document.createElement('li');
            item.textContent = msg;
            messages.appendChild(item);
        });

        socket.on('eventSignal', signal => {
            console.log("Got signal: " + signal);
            eventDispatch({
                type: signal,
            });
            router.replace('/event');
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
            console.log("Sending message: " + input);
            socket.emit('eventSignal', input);
            setInput('');
        }
    }
    function emitFunc(msg) {
        console.log("Emit:" + msg);
        socket.emit('eventSignal', msg);
    }

    return (
        <>
            {!state.loggedIn && <>
                <p>You are not logged in! :(</p>
                <br />
                <Link href="/login">
                    <a>Go to login</a>
                </Link>
            </>}
            {state.loggedIn && state.userRank === 'user' && <>
                <UserEvent emitFunc={emitFunc} />
            </>}
            {state.loggedIn && state.userRank === 'organizer' && <>
                <AdminEvent emitFunc={emitFunc} />
            </>}
        </>
    )
}

/*
{state.loggedIn && state.userRank === 'user' && <>
                <UserEvent emitFunc = {emitFunc}/>
            </>}
            {state.loggedIn && state.userRank === 'organizer' && <>
                <AdminEvent emitFunc = {emitFunc}/>
                <ul id="messages"></ul>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Type something"
                        value={input}
                        onChange={onChangeHandler}
                    />
                    <button>Submit</button>
                </form>
                <p>START_EVENT</p>
                <p>NEXTSTEP</p>
                <p>FINISH_EVENT</p>
                <p>EVENT_RESET</p>
            </>}
*/