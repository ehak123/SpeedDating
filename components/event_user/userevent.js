import MatchFound from "./MatchFound";
import { useState } from 'react'
import { getUserFirstName } from "../../context/users";
import { useEventContext } from "../../context/eventcontext";
import { useCommContext } from "../../context/commcontext";
import HomeFooter from "../layout/homefooter";
import MatchRating from "./MatchRating";

export default function UserEvent()  {
    //const [round, setRound] = useState(1)
    const state = useEventContext();
    const commState = useCommContext();

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
            <p>users: Comm step {commState.step}</p>
            <p>Event on: {state.eventOn && "true"}{!state.eventOn && "false"}</p>
            {state.eventOn && <>
            {state.userstep === 1 && <MatchFound round={round} matchname={"berit"}/>}
            {state.userstep === 2 && <MatchRating round={round} matchname={"berit"}/>}
            {state.userstep === 3 && <MatchFound round={round} matchname={"nina"}/>}
            {state.userstep === 4 && <MatchRating round={round} matchname={"nina"}/>}
            {state.userstep === 5 && <MatchFound round={round} matchname={"christina"}/>}
            {state.userstep === 6 && <MatchRating round={round} matchname={"christina"}/>}
            
            </>}
            {!state.eventOn && <>
            <p>Waiting for host</p>
            <HomeFooter />
            </>}
        </>
    )
}