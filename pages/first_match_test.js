import {TopLogo} from "../components/top_logo";
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import UserProfile from "../components/UserProfile";
import profileStyle from "../styles/utils.module.css";
import { Book } from "@mui/icons-material";

// TODO: Add styles 

export default function MatchFound({matchName, tableNo, age, profilePic}) {
    const siteTitle = 'First Round';
    const router = useRouter()

    // Borde gå att använda <Link> ist för router dock, hmm, hade samma problem när jag
    // implementerade loginknappar osv
    function userIsAtTable() {
        router.push('/first_rating')
    }

    return (
        <>
            <TopLogo title="First Round" />
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={(profileStyle.grid, profileStyle.container)}>
                <h1> Berit is your first match </h1>
                <UserProfile path={profilePic} name={matchName} age={age}/>
            </section>
            <section className={(profileStyle.grid, profileStyle.container)}>
                <div className={profileStyle.card}>
                <h1> Get ready! </h1>
                    Go to table number: {tableNo}
                    <br />
                    Status: {matchName} is waiting at your table
                    <div>
                        <button
                            type="button"
                            onClick={userIsAtTable}
                            className={profileStyle.userbutton}>
                            I'm at my table
                        </button>
                        <Link href="/">
                            <a>See table locations</a>
                        </Link>
                    </div>

                </div>
            </section>
            <section className={(profileStyle.grid, profileStyle.container)}>
                <div className={profileStyle.buttons}>
                    <button>Exit event</button>
                </div>
            </section>
        </>
    )
}
