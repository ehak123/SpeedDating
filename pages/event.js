import MatchFound from "../components/event_user/MatchFound";
import { useLoginContext } from "../context/logincontext";
import UserEvent from "../components/event_user/userevent";
import AdminEvent from "../components/event_admin/adminevent";
import Link from "next/link";
import { EventWrapper } from "../context/eventcontext";

export default function Event({ children }) {
    const state = useLoginContext();

    return (
        <EventWrapper>
            {!state.loggedIn && <>
                <p>You are not logged in! :(</p>
                <br />
                <Link href="/login">
                    <a>Go to login</a>
                </Link>
            </>}
            {state.loggedIn && state.userRank === 'user' && <>
                <UserEvent />
            </>}
            {state.loggedIn && state.userRank === 'organizer' && <>
                <AdminEvent />
            </>}
        </EventWrapper>
    )
}