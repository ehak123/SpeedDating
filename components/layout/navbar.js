import Link from 'next/link'
import layout from '../../styles/layout.module.css'
import { useLoginContext, useLoginDispatchContext } from '../../context/logincontext'
import { useRouter } from 'next/router'

export default function NavBar() {
    // for redirect
    const router = useRouter()

    // for login
    const state = useLoginContext();
    const dispatch = useLoginDispatchContext();

    function handleClick() {
        dispatch({
            type: 'LOGOUT',
        });
        router.replace('/');
    }

    return (
        <header className={layout.navbar}>
            {state.loggedIn && <>
                <p>Logged in as <b>{state.currentUser}</b> ({state.userRank})</p>
                <button onClick={handleClick} className={layout.logout}>Log Out</button>
            </>}
            {!state.loggedIn && <>
                <p>Not logged in</p>
            </>}
        </header>
    )
}
