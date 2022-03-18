import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useLoginContext, useLoginDispatchContext, isValidLogin } from '../../context/logincontext';
import login from '../../styles/login.module.css'

export default function LoginView(props) {
    // user or organizer mode
    const rank = props.rank;

    const loginTitle = rank === 'user' ? "Login" : "Admin Login";
    const switchPage = rank === ' user' ? "/admin" : "/login";
    const otherTitle = rank === 'user' ? "Admin Login" : "User Login";

    // for redirect
    const router = useRouter()

    // for user login
    const state = useLoginContext();
    const dispatch = useLoginDispatchContext();

    // local states
    const [input, setInput] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    // redirecting on successful login
    if (status === 'success') {
        console.log("Redirecting...");
        setTimeout(() => {
            router.push('/event')
        }, 1500)
    }

    // when submit button is pressed
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');

        try {
            await submitForm(input, rank);
            dispatch({
                type: 'LOGIN',
                username: input,
            });
            console.log("Success: " + state.currentUser + " (" + state.userRank + ") " + "logged in.")
            setInput('');
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    // triggered on every input
    function handleInput(e) {
        if (error !== null) {
            setError(null);
        }
        setInput(e.target.value.toLowerCase());
    }

    return (
        <>
            <Head>
                <title>
                    {loginTitle}
                </title>
            </Head>
            {status !== 'success' && <>
                <h1 className={login.h1}>{loginTitle}</h1>
                <form onSubmit={handleSubmit} className={login.form}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="u"
                        value={input}
                        onChange={handleInput}
                        disabled={status === 'submitting'}
                    />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="p" />
                    <button disabled={
                        input.length === 0 ||
                        status === 'submitting'
                    }>
                        Submit
                    </button>
                </form>
                {error !== null && <p className="Error">
                    {error.message}
                </p>}
            </>}
            {rank !== 'user' &&
                <Link href="/login">
                    <a>
                        Wrong page? Go to user login &rarr;
                    </a>
                </Link>
            }
            {status === 'success' && <span>
                <h1>
                    Logged in as: <b>{state.currentUser}</b> ({state.userRank})
                </h1>
                <h2>
                    <i>redirecting...</i>
                </h2>
            </span>}
        </>
    )
}

function submitForm(input, rank) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const validLogin = isValidLogin(input);
            if (!validLogin) {
                reject(new Error('Wrong username or password, try again.'));
            } else {
                if (rank !== 'user') {
                    reject(new Error('Error: User is not admin.'));
                }
                resolve();
            }
        }, 1000);
    });
}