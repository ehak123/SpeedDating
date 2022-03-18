import MatchFound from "./MatchFound";
import { useState } from 'react'
import { getUserFirstName } from "../../context/users";
import { useEventContext } from "../../context/eventcontext";
import SocketChat from "../SocketChat";
import HomeFooter from "../layout/homefooter";

export default function UserEvent()  {
    const [round, setRound] = useState(1)
    const state = useEventContext();

    return  (
        <>
            <p>Step {state.step}</p>
            <p>Event on: {state.eventOn && "true"}{!state.eventOn && "false"}</p>
            {state.eventOn && <>
            {round === 1 && <MatchFound round={1} matchname={"nina"}/>}
            </>}
            {!state.eventOn && <>
            <p>Waiting for host</p>
            <SocketChat />
            <HomeFooter />
            </>}
        </>
    )
}