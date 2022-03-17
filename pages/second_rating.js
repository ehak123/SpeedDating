import { TopLogo } from "../components/top_logo";
import RatingStars1 from "../components/RatingStars";
import RatingStars2 from "../components/RatingStars";
import RatingStars3 from "../components/RatingStars";
import RatingStars4 from "../components/RatingStars";
import { useRouter } from 'next/router';
import Head from 'next/head';
import user from "../styles/userongoing.module.css";
import UserProfile from "../components/UserProfile";

export default function Ratings() {
  const siteTitle = 'Second Round completed';
  const router = useRouter()
  
  return (
    <>
      <TopLogo title="Second round completed"/>

      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={user.card}>
          <UserProfile path="https://images.unsplash.com/photo-1603691436755-354a2d9b4bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHx3b21hbiUyMGhpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" name="Nina Nice" age="36"/>
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

        <button type="button" onClick={() => router.push('/third_match')} className= {user.userbutton}  >
          Go to next round
        </button>

      </section>
    </>
  )
}