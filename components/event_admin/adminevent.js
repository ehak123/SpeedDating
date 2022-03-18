import AdminOngoing from "./AdminOngoing";
import { useState } from "react";
import { useEventContext, useEventDispatchContext } from "../../context/eventcontext";

export default function AdminEvent() {
    const state = useEventContext();
    const dispatch = useEventDispatchContext();


    return (
        <>
            <p>Step {state.step}</p>
            <AdminOngoing step={state.step} />
        </>
    )
}
/*
            {state.currentPage === 1 && <AdminOngoing1 value={text} onChange={handleChange}/>}
            {state.currentPage === 2 && <AdminOngoing2 />}
            {state.currentPage === 3 && <AdminOngoing3 />}
            {state.currentPage === 4 && <AdminOngoing4 />}
            {state.currentPage === 5 && <AdminOngoing5 />}
            {state.currentPage === 6 && <AdminOngoing6 />}
            {state.currentPage === 7 && <AdminOngoing7 />}
            {state.currentPage === 8 && <AdminOngoing8 />}
            {state.currentPage === 9 && <AdminOngoing9 />}
*/