import {TopLogo} from "../components/top_logo";
import RatingBars from "../components/rating_bars";
import Head from 'next/head';
import user from "../styles/utils.module.css";
import Profile from "../components/Profile";

export default function Ratings() {
    const siteTitle = 'First Round completed';
    return (
        <>
        <TopLogo />

        <Head>
        <title>{siteTitle}</title>
        </Head>
        <section className={user.grid, user.container}>
        <div className={user.card}>
      <Profile />
      </div>
      </section>
      <h3>What do you think about your date?</h3>
        <section className={user.ratings}>
        <fieldset className={user.rate}>

        <div>
        <p>Matching personality </p>
        <RatingBars/>
        </div>

        <div>
        <p>Matching values</p>
        <RatingBars/>
        </div>

        <div>
        <p>I would like to meet this person again</p>
        <RatingBars/>
        </div>

        <button className={user.userbutton}>Submit</button>

        </fieldset>
        </section>
      </>
    )
}