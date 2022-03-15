import { TopLogo } from "../components/top_logo";
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import BeritProfile from "../components/profiles/BeritProfile";
import profileStyle from "../styles/utils.module.css";

// TODO: Add styles 
export default function MatchFound() {
    const siteTitle = 'First Round';
    const router = useRouter()

    // Borde gå att använda <Link> ist för router dock, hmm, hade samma problem när jag
    // implementerade loginknappar osv
    function userIsAtTable() {
        router.push('/ratings')
    }

    return (
        <>
            <TopLogo />
            <title>Hello</title>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={(profileStyle.grid, profileStyle.container)}>
                <div className={profileStyle.card}>
                    <BeritProfile />
                </div>
            </section>
            <section className={(profileStyle.grid, profileStyle.container)}>
                <div className={profileStyle.card}>
                    Go to table number: 5
                    <br />
                    Status: Berit is waiting at your table
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
