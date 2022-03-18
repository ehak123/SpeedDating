import AdminOngoing from "./AdminOngoing";
import { useState } from "react";
import { useEventContext, useEventDispatchContext } from "../../context/eventcontext";
import StartButton from "./buttons/StartButton";
import SocketChat from '../SocketChat'
import HomeFooter from '../layout/homefooter'

export default function AdminEvent() {
    const state = useEventContext();
    const dispatch = useEventDispatchContext();

    function startEvent(callbackStartEvent) {
        dispatch({
            type: 'START_EVENT',
        });
    }

    return (
        <>
            <p>Step {state.step}</p>
            <p>Event on: {state.eventOn && "true"}{!state.eventOn && "false"}</p>
            {!state.eventOn && <>
                <StartButton />
                <SocketChat />
                <HomeFooter />
            </>}
            {state.eventOn && <>
            <AdminOngoing step={state.step} />
            </>}
        </>
    )
}
/*
            {state.currentPage === 1 && <AdminOngoing1 value={text} onChange={handleChange}/>}
            {state.currentPage === 2 && <AdminOngoing2 />}
            {state.currentPage === 3 && <AdminOngoing3 />}
            {state.currentPage === 4 && <AdminOngoing4 />}
            {state.currentPage === 5 && <AdminOngoing5 />}
            {state.currentPage === 6 && <AdminOngoing6 />}
            {state.currentPage === 7 && <AdminOngoing7 />}
            {state.currentPage === 8 && <AdminOngoing8 />}
            {state.currentPage === 9 && <AdminOngoing9 />}
*/