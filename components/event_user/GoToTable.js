import profileStyle from "./userevent.module.css";
import Link from "next/link";
import { useEventDispatchContext } from "../../context/eventcontext";
import { useEventContext } from "../../context/eventcontext";
import { useRouter } from 'next/router';

export default function GoToTable({ tableNumber, waitingName, emitFunc }) {
    const state = useEventContext();
    const dispatch = useEventDispatchContext();

    const router = useRouter()

    function goNextUser2() { 
        emitFunc('USER_STEP' + (state.userstep + 1));
    /*if(state.userstep === 2)
    {
        emitFunc('USER_STEP3');
    }else if(state.userstep === 6)
    {
        emitFunc('USER_STEP7')
    }else if(state.userstep === 10)
    {
        emitFunc('USER_STEP11')
    }
    dispatch({
      type: 'NEXT_USER_STEP2'
    });
    router.push('/event');*/
  }

    return (
        <>
            <section>
                <div className={profileStyle.card}>
                    <h1> Get ready! </h1>
                    Go to table number: {tableNumber}
                    <br />
                    Status: {waitingName} is already at your table
                    <div>
                        
                            <button
                                type="button"
                                className={profileStyle.userbutton}
                                onClick={goNextUser2}
                            >
                                I'm at my table
                            </button>
                        
                        <a>See table locations</a>
                    </div>
                </div>
            </section>
        </>
    )
}