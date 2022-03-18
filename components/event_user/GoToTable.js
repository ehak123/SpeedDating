import profileStyle from "./userevent.module.css";
import Link from "next/link";
import { useEventDispatchContext } from "../../context/eventcontext";

export default function GoToTable({ children, tableNumber, waitingName }) {
    const dispatch = useEventDispatchContext();

    return (
        <>
            <section>
                <div className={profileStyle.card}>
                    <h1> Get ready! </h1>
                    Go to table number: {tableNumber}
                    <br />
                    Status: {waitingName} is already at your table
                    <div>
                        <Link href="/first_rating">
                            <button
                                type="button"
                                className={profileStyle.userbutton}
                            >
                                I'm at my table
                            </button>
                        </Link>
                        <a>See table locations</a>
                    </div>
                </div>
            </section>
        </>
    )
}