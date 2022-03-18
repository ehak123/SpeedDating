import profileStyle from "./userevent.module.css";
import Link from "next/link";
import { useEventDispatchContext } from "../../context/eventcontext";
import { useRouter } from 'next/router';

export default function GoToTable({ tableNumber, waitingName }) {
    const dispatch = useEventDispatchContext();

    const router = useRouter()

    function goNextUser2() { 
    dispatch({
      type: 'NEXT_USER_STEP2'
    });
    router.push('/event');
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