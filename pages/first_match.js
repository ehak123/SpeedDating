import {TopLogo} from "../components/top_logo";
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import BeritProfile from "../components/BeritProfile";
import profileStyle from "../styles/userongoing.module.css";


// TODO: Add styles 
export default function Match_found() {
    const siteTitle = 'First Round';
    const router = useRouter()
    return (
        <>
            <TopLogo title="First Round" />
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section >
                <div className={profileStyle.card}>
                <h1> Berit is your first match </h1>
                    <BeritProfile />
                </div>
            </section>

            <section>
                <div className={profileStyle.card}>
                <h1> Get ready! </h1>
                    Go to table number: 5
                <br />
                Status: Berit is already waiting at your table
                <div>
                        <button type="button" onClick={() => router.push('/first_rating')} className={profileStyle.userbutton}>I'm at my table</button>
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
