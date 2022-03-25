import MatchFound from "./MatchFound";
import { useState } from 'react'
import { getUserFirstName } from "../../context/users";
import { useEventContext } from "../../context/eventcontext";
import { useCommContext } from "../../context/commcontext";
import HomeFooter from "../layout/homefooter";
import MatchRating from "./MatchRating";
import ShareContact from "./ShareContact";
import Waiting from "./Waiting";
import UserCountdown from "./UserCountdown";

export default function UserEvent({emitFunc})  {
    //const [round, setRound] = useState(1)
    const state = useEventContext();

    return  (
        <>
            <br />
            {state.eventOn && <>
            {state.userstep === 1 && <Waiting waitTitle={"Please wait for match 1"} />}
            {state.userstep === 2 && <MatchFound round={1} matchname={"berit"} emitFunc = {emitFunc}/>}
            {state.userstep === 3 && <UserCountdown round={1} matchname={"berit"} />}
            {state.userstep === 4 && <MatchRating round={1} matchname={"berit"} emitFunc = {emitFunc}/>}
            {state.userstep === 5 && <Waiting waitTitle={"Please wait for match 2"} />}
            {state.userstep === 6 && <MatchFound round={2} matchname={"nina"} emitFunc = {emitFunc}/>}
            {state.userstep === 7 && <UserCountdown round={2} matchname={"nina"} />}
            {state.userstep === 8 && <MatchRating round={2} matchname={"nina"} emitFunc = {emitFunc}/>}
            {state.userstep === 9 && <Waiting waitTitle={"Please wait for match 3"} />}
            {state.userstep === 10 && <MatchFound round={3} matchname={"christina"} emitFunc = {emitFunc}/>}
            {state.userstep === 11 && <UserCountdown round={3} matchname={"christina"} />}
            {state.userstep === 12 && <MatchRating round={3} matchname={"christina"} emitFunc = {emitFunc}/>}
            {state.userstep === 13 && <ShareContact />}
            </>}
            {!state.eventOn && <>
            <h1>Väntar på start</h1>
            <p>Din värd kommer snart att påbörja eventet. Snart börjar det!</p>
            <Waiting waitTitle={"Laddar..."}/>
            <HomeFooter />
            </>}
        </>
    )
}