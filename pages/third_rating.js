import { TopLogo } from "../components/top_logo";
import RatingStars1 from "../components/RatingStars";
import RatingStars2 from "../components/RatingStars";
import RatingStars3 from "../components/RatingStars";
import RatingStars4 from "../components/RatingStars";
import { useRouter } from 'next/router';
import Head from 'next/head';
import profileStyle from "../components/event_user/userevent.module.css";
import UserProfile from "../components/UserProfile";

export default function Ratings() {
  const siteTitle = 'Third Round completed';
  const router = useRouter()
  
  return (
    <>
      <TopLogo title="Third round completed"/>

      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={user.card}>
        <UserProfile name="christina" />
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

        <button type="button" onClick={() => router.push('/final_rating')} className= {user.userbutton}  >
          Next page
        </button>

      </section>
    </>
  )
}