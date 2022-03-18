import { TopLogo } from "../components/top_logo";
import RatingStars1 from "../components/RatingStars";
import RatingStars2 from "../components/RatingStars";
import RatingStars3 from "../components/RatingStars";
import RatingStars4 from "../components/RatingStars";
import Head from "next/head";
import user from "./userevent.module.css";
import UserProfile from "../components/UserProfile";

export default function MatchRating({round, matchname}) {

  var siteTitle;
  if (round === 1) {
    siteTitle = "First Round completed";  
  } else if (round === 2) {
    siteTitle = "Second completed";
  } else if (round === 3) {
    siteTitle = "Third completed";
  }

  const siteTitle = "First Round completed";

  return (
    <>
      <TopLogo title={siteTitle} />

      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={user.card}>
        <UserProfile name={matchname} />
        </div>
      </section>

      <section className={user.card}>
        <h3>How was your date?</h3>
        <div>
          <h4>Matching personality</h4>
          <RatingStars1 />
        </div>
        <div>
          <h4>Matching values</h4>
          <RatingStars2 />
        </div>
        <div>
          <h4>Overall impression</h4>
          <RatingStars3 />
        </div>
        <div>
          <h4>Would you like to go on a second date with this person?</h4>
          <RatingStars4 />
        </div>

        <button
          type="button"
          onClick={() => router.push("/second_match")}
          className={user.userbutton}
        >
          Go to next round
        </button>
      </section>
    </>
  );
}
