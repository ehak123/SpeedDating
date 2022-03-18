import AdminOngoing from "./AdminOngoing";
import { useState, useCallback } from "react";
import { useEventContext, useEventDispatchContext } from "../../context/eventcontext";
import { useCommContext } from "../../context/commcontext";
import StartButton from "./buttons/StartButton";
import HomeFooter from '../layout/homefooter'

export default function AdminEvent() {
    const state = useEventContext();
    const dispatch = useEventDispatchContext();
    const commState = useCommContext();

    function startEvent() {
        console.log("starting event");
    }

    return (
        <>
            <p>/adminevent: Step {state.step}</p>
            <p>/adminevent: Comm step {commState.step}</p>
            <p>Event on: {state.eventOn && "true"}{!state.eventOn && "false"}</p>
            {!state.eventOn && <>
                <StartButton cb={startEvent} />
                <HomeFooter />
            </>}
            {state.eventOn && <>
                <AdminOngoing step={state.step} />
            </>}
        </>
    )
}
