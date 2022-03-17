import {TopLogo} from "../components/top_logo";
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import UserProfile from "../components/UserProfile";
import profileStyle from "../styles/userongoing.module.css";


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
                <UserProfile path="https://images.unsplash.com/photo-1573166475912-1ed8b4f093d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHdvbWFuJTIwaW4lMjB0ZWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" name="Christina Tech" age="40" />
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
