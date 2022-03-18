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
    userstep: 1,
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
        case 'NEXT_USER_STEP':
            state.userstep++;
            console.log("Entering User Step " + state.userstep);
            return state;
            /*
        case 'NEXT_USER_STEP2':
            state.userstep++;
            console.log("Entering User Step2 " + state.userstep);
            return state;
            */
        case 'FINISH_EVENT':
            state.eventOn = false;
            state.finished = true;
            return state;
        case 'EVENT_RESET':
            state.step = 1;
            state.userstep = 1;
            state.eventOn = false;
            state.finished = false;
            return state;

        //WORKAROUND för NEXTSTEP x2 bug
        case 'STEP1':
            state.step = 1;
            console.log("Entering Step " + state.step);
            return state;
        case 'STEP2':
            state.step = 2;
            console.log("Entering Step " + state.step);
            return state;
        case 'STEP3':
            state.step = 3;
            console.log("Entering Step " + state.step);
            return state;
        case 'STEP4':
            state.step = 4;
            console.log("Entering Step " + state.step);
            return state;
        case 'STEP5':
            state.step = 5;
            console.log("Entering Step " + state.step);
            return state;
        case 'STEP6':
            state.step = 6;
            console.log("Entering Step " + state.step);
            return state;
        case 'STEP7':
            state.step = 7;
            console.log("Entering Step " + state.step);
            return state;
        case 'STEP8':
            state.step = 8;
            console.log("Entering Step " + state.step);
            return state;
        case 'STEP9':
            state.step = 9;
            console.log("Entering Step " + state.step);
            return state;

//--------------------------------------

        case 'USER_STEP1':
            state.userstep = 1;
            console.log("Entering Userstep " + state.userstep);
            return state;
        case 'USER_STEP2':
            state.userstep = 2;
            console.log("Entering Userstep " + state.userstep);
            return state;
        case 'USER_STEP3':
            state.userstep = 3;
            console.log("Entering Userstep " + state.userstep);
            return state;
        case 'USER_STEP4':
            state.userstep = 4;
            console.log("Entering Userstep " + state.userstep);
            return state;
        case 'USER_STEP5':
            state.userstep = 5;
            console.log("Entering Userstep " + state.userstep);
            return state;
        case 'USER_STEP6':
            state.userstep = 6;
            console.log("Entering Userstep " + state.userstep);
            return state;
        case 'USER_STEP7':
            state.userstep = 7;
            console.log("Entering Userstep " + state.userstep);
            return state;
        case 'USER_STEP8':
            state.userstep = 8;
            console.log("Entering Userstep " + state.userstep);
            return state;
        case 'USER_STEP9':
            state.userstep = 9;
            console.log("Entering Userstep " + state.userstep);
            return state;
        case 'USER_STEP10':
            state.userstep = 10;
            console.log("Entering Userstep " + state.userstep);
            return state;
        case 'USER_STEP11':
            state.userstep = 11;
            console.log("Entering Userstep " + state.userstep);
            return state;
        case 'USER_STEP12':
            state.userstep = 12;
            console.log("Entering Userstep " + state.userstep);
            return state;
        case 'USER_STEP13':
            state.userstep = 13;
            console.log("Entering Userstep " + state.userstep);
            return state;

        //WORKAROUND end
        default:
            throw new Error();
    }
}
