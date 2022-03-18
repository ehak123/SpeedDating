import { createContext, useContext, useState, useReducer } from 'react'

// Contexts
const CommContext = createContext(null);
const CommDispatchContext = createContext(null);

export function useCommContext() {
    return useContext(CommContext);
}

export function useCommDispatchContext() {
    return useContext(CommDispatchContext);
}

// Initial state
const initialState = {
    startevent: false,
    step: 1,
}

// Provider
export function CommWrapper({ children }) {
    const [state, dispatch] = useReducer(commReducer, initialState);

    return (
        <>
        <CommContext.Provider value={state}>
            <CommDispatchContext.Provider value={dispatch}>
                {children}
            </CommDispatchContext.Provider>
        </CommContext.Provider>
        </>
    )
}

// Reducer
export default function commReducer(state, action) {
    switch (action.type) {
        case 'ADMIN_SEND_STARTEVENT':
            state.startevent = true;
            console.log("ADMIN_SEND_STARTEVENT: true");
            return state;
        case 'ADMIN_SEND_NEXTSTEP':
            state.step = action.step;
            console.log("ADMIN_SEND_NEXTSTEP: " + state.step);
            return state;
        case 'ADMIN_SEND_EXITEVENT':
            state.startevent = false;
            console.log("ADMIN_SEND_STARTEVENT: false");
            return state;
        default:
            throw new Error();
    }
}
