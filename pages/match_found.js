import {TopLogo} from "../components/top_logo";
import Link from 'next/link';
import Head from 'next/head';
import Profile from "../components/Profile";
import profileStyle from "../styles/utils.module.css";


// TODO: Add styles 
export default function Match_found() {
const siteTitle = 'First Round';
    return (
        <>
        <TopLogo/>
        <title>Hello</title>
        <Head>
        <title>{siteTitle}</title>
        </Head>
            <section className={profileStyle.grid, profileStyle.container}>
              <div className={profileStyle.card}>
            <Profile/>
            </div>
            </section>
            <section className={profileStyle.grid, profileStyle.container}>
            <div className={profileStyle.card}>
                Go to table number: 5
                <br/>
                Status: Berit is waiting at your table
                <div>
                <button className={profileStyle.userbutton}>I'm at my table</button>
                <Link href="/">
                <a>See table locations</a>
                </Link>
                </div>

            </div>
            </section>
            <section className={profileStyle.grid, profileStyle.container}>
                  <div className={profileStyle.buttons}>    
                    <button className={profileStyle.userbutton}>Help</button>
                    <button >Exit event</button>
                </div>
            </section>
        </>
    )
}
