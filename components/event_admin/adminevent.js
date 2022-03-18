import AdminOngoing from "./AdminOngoing";
import { useState, useCallback } from "react";
import { useEventContext, useEventDispatchContext } from "../../context/eventcontext";
import { useCommContext } from "../../context/commcontext";
import StartButton from "./buttons/StartButton";
import HomeFooter from '../layout/homefooter'

export default function AdminEvent({emitFunc}) {
    const state = useEventContext();
    const dispatch = useEventDispatchContext();
    const commState = useCommContext();

    return (
        <>
            <p>/adminevent: Step {state.step}</p>
            <p>/adminevent: Comm step {commState.step}</p>
            <p>Event on: {state.eventOn && "true"}{!state.eventOn && "false"}</p>
            <br />
            {!state.eventOn && <>
                <StartButton emitFunc={emitFunc}/>
                <HomeFooter />
            </>}
            {state.eventOn && <>
                <AdminOngoing emitFunc={emitFunc} step={state.step} />
            </>}
        </>
    )
}
