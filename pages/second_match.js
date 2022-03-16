import {TopLogo} from "../components/top_logo";
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NinaProfile from "../components/NinaProfile";
import profileStyle from "../styles/userongoing.module.css";


// TODO: Add styles 
export default function Match_found() {
    const siteTitle = 'Second Round';
    const router = useRouter()
    return (
        <>
            <TopLogo title="Second Round" />
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section >
                <div className={profileStyle.card}>
                <h1> Nina is your second match </h1>
                    <NinaProfile />
                </div>
            </section>

            <section>
                <div className={profileStyle.card}>
                <h1> Get ready! </h1>
                    Go to table number: 3
                <br />
                Status: Nina is on her way to your table
                <div>
                        <button type="button" onClick={() => router.push('/second_rating')} className={profileStyle.userbutton}>I'm at my table</button>
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
