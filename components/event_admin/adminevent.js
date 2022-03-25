import AdminOngoing from "./AdminOngoing";
import { useState, useCallback } from "react";
import { useEventContext, useEventDispatchContext } from "../../context/eventcontext";
import { useCommContext } from "../../context/commcontext";
import StartButton from "./buttons/StartButton";
import HomeFooter from '../layout/homefooter'
import upcoming from '../../styles/upcomingevents.module.css'
import Event from "../../pages/event";
import EventHeader from "../EventHeader";
import ChangeMatch from "./ChangeMatch";

export default function AdminEvent({ emitFunc }) {
    const state = useEventContext();
    const dispatch = useEventDispatchContext();
    const commState = useCommContext();

    return (
        <>
            <EventHeader title={"SpeedDating: Singles ready to mingle"} />
            {!state.eventOn && <>
                <br/><br/><br/>
                <section>
                <p className={upcoming.eventDescr}>Tired of searching for "the one"? Let our match-making-algorithm do the job. This is a classic Speed Dating event for everyone, infused with our world renownd concept.</p>
                </section>
                <StartButton emitFunc={emitFunc} />
                <HomeFooter />
            </>}
            {state.eventOn && !state.changematchbool && <>
                <AdminOngoing emitFunc={emitFunc} step={state.step} />
            </>}
            {state.eventOn && state.changematchbool && <>
                <ChangeMatch emitFunc={emitFunc} step={state.step} />
            </>}
        </>
    )
}
