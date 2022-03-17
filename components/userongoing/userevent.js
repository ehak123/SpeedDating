import MatchFound from "./MatchFound";

export default function UserEvent ()  {
    const [round, setRound] = useState()
    return  (
        <>
        <MatchFound round={1} matchname={"berit"}/>
        <EventTimer />
        <MatchRating />
        </>
    )
}