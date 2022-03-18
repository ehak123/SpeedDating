import { createContext, useContext, useState, useReducer } from 'react'

// Contexts
const EventContext = createContext(null);
const EventDispatchContext = createContext(null);

export function useEventContext() {
    return useContext(EventContext);
}

export function useEventDispatchContext() {
    return useContext(EventDispatchContext);
}

// Initial state
const initialState = {
    eventOn: false,
    finished: false,
    step: 1,
}

// Provider
export function EventWrapper({ children }) {
    const [state, dispatch] = useReducer(eventReducer, initialState);

    return (
        <EventContext.Provider value={state}>
            <EventDispatchContext.Provider value={dispatch}>
                {children}
            </EventDispatchContext.Provider>
        </EventContext.Provider>
    );
}

// Reducer
export default function eventReducer(state, action) {
    switch (action.type) {
        case 'START_EVENT':
            state.eventOn = true;
            return state;
        case 'NEXTSTEP':
            state.step++;
            console.log("Entering Step " + state.step);
            return state;
        case 'FINISH_EVENT':
            state.eventOn = false;
            state.finished = true;
            return state;
        case 'EVENT_RESET':
            state.step = 1;
            state.eventOn = false;
            state.finished = false;
            return state;
        default:
            throw new Error();
    }
}
