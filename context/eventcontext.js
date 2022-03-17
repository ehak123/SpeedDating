import { createContext, useContext, useReducer } from 'react'

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
    currentPage: 1,
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
        case 'NEXTPAGE':
            state.currentPage++;
            return state;
        default:
            throw new Error();
    }
}
