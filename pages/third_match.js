import {TopLogo} from "../components/top_logo";
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import UserProfile from "../components/UserProfile";
import profileStyle from "../components/event_user/userevent.module.css";


// TODO: Add styles 
export default function Match_found() {
    const siteTitle = 'Third Round';
    const router = useRouter()
    return (
        <>
            <TopLogo title="Third Round" />
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section >
                <div className={profileStyle.card}>
                <h1> Christina is your third match </h1>
                <UserProfile name="christina" />
                </div>
            </section>

            <section>
                <div className={profileStyle.card}>
                <h1> Get ready! </h1>
                    Go to table number: 2
                <br />
                Status: Christina is already at your table
                <div>
                        <button type="button" onClick={() => router.push('/third_rating')} className={profileStyle.userbutton}>I'm at my table</button>
                        <Link href="/">
                            <a>See table locations</a>
                        </Link>
                    </div>

                </div>
            </section>
            <div className={profileStyle.exit}>
                    <button  className={profileStyle.exitbutton} >Exit event</button>
            </div>
        </>
    )
}
