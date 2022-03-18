import MatchFound from "./MatchFound";
import { useState } from 'react'
import { getUserFirstName } from "../../context/users";

export default function UserEvent()  {
    const [round, setRound] = useState(1)

    return  (
        <>
            {round === 1 && <MatchFound round={1} matchname={"berit"}/>}
        </>
    )
}