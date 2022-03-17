import profileStyle from "../../styles/userongoing.module.css";

export default function GoToTable({ children, tableNumber, waitingName }) {
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
                        <Link href="/">
                            <a>See table locations</a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}