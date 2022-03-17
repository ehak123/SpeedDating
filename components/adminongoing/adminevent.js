import AdminOngoing1 from "./adminongoing1";
import AdminOngoing2 from "./adminongoing2";
import AdminOngoing3 from "./adminongoing3";
import AdminOngoing4 from "./adminongoing4";
import AdminOngoing5 from "./adminongoing5";
import AdminOngoing6 from "./adminongoing6";
import AdminOngoing7 from "./adminongoing7";
import AdminOngoing8 from "./adminongoing8";
import AdminOngoing9 from "./adminongoing9";
import { useState } from "react";
import { useEventContext, useEventDispatchContext } from "../../context/eventcontext";

export default function AdminEvent() {
    const [text, setText] = useState('initial text');
    const state = useEventContext();
    const dispatch = useEventDispatchContext();

    function handleChange(newText) {
        setText(newText);
    }

    return (
        <>
            <p>{text}</p>
            {state.currentPage === 1 && <AdminOngoing1 value={text} onChange={handleChange}/>}
            {state.currentPage === 2 && <AdminOngoing2 />}
            {state.currentPage === 3 && <AdminOngoing3 />}
            {state.currentPage === 4 && <AdminOngoing4 />}
            {state.currentPage === 5 && <AdminOngoing5 />}
            {state.currentPage === 6 && <AdminOngoing6 />}
            {state.currentPage === 7 && <AdminOngoing7 />}
            {state.currentPage === 8 && <AdminOngoing8 />}
            {state.currentPage === 9 && <AdminOngoing9 />}
        </>
    )
}