import MatchFound from "./MatchFound";
import { useState } from 'react'
import { getUserFirstName } from "../../context/users";
import { useEventContext } from "../../context/eventcontext";
import { useCommContext } from "../../context/commcontext";
import HomeFooter from "../layout/homefooter";
import MatchRating from "./MatchRating";

export default function UserEvent({emitFunc})  {
    //const [round, setRound] = useState(1)
    const state = useEventContext();
    //const commState = useCommContext();
/*<p>users: Comm step {commState.step}</p>*/
    var round;
    if (state.userstep === 1 || state.userstep === 2) {
        round = 1;
    } else if (state.userstep === 3 || state.userstep === 4) {
        round = 2;
    } else if (state.userstep === 5 || state.userstep === 6) {
        round = 3;
    }

    return  (
        <>
            <p>users: Step {state.step}</p>
            <p>users: UserStep(local) {state.userstep}</p>
            
            <p>Event on: {state.eventOn && "true"}{!state.eventOn && "false"}</p>
            <br />
            {state.eventOn && <>
            {state.userstep === 1 && <p>Waiting For Match 1</p>}
            {state.userstep === 2 && <MatchFound round={round} matchname={"berit"} emitFunc = {emitFunc}/>}
            {state.userstep === 3 && <p>Date 1 Timer</p>}
            {state.userstep === 4 && <MatchRating round={round} matchname={"berit"} emitFunc = {emitFunc}/>}
            {state.userstep === 5 && <p>Waiting For Match 2</p>}
            {state.userstep === 6 && <MatchFound round={round} matchname={"nina"} emitFunc = {emitFunc}/>}
            {state.userstep === 7 && <p>Date 2 Timer</p>}
            {state.userstep === 8 && <MatchRating round={round} matchname={"nina"} emitFunc = {emitFunc}/>}
            {state.userstep === 9 && <p>Waiting For Match 3</p>}
            {state.userstep === 10 && <MatchFound round={round} matchname={"christina"} emitFunc = {emitFunc}/>}
            {state.userstep === 11 && <p>Date 3 Timer</p>}
            {state.userstep === 12 && <MatchRating round={round} matchname={"christina"} emitFunc = {emitFunc}/>}
            {state.userstep === 13 && <p>Final Rating</p>}
            </>}
            {!state.eventOn && <>
            <p>Waiting for host</p>
            <HomeFooter />
            </>}
        </>
    )
}