import {TopLogo} from "../components/top_logo";
import RatingStars from "../components/RatingStars";
import Head from 'next/head';
import user from "../styles/utils.module.css";
import BeritProfile from "../components/BeritProfile";

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
      <BeritProfile />
          </div>
          </section>

      <fieldset className='rating-form'>
        <h3>Let us know what you think about your match!</h3>
        <div>
          <h4>Matching personality</h4>
          <RatingStars />
        </div>
        <div>
          <h4>Matching values</h4>
          <RatingStars />
        </div>
        <div>
          <h4>Physical appearance</h4>
          <RatingStars />
        </div>
        <div>
          <h4>Would you like to go on a second date with this person?</h4>
          <RatingStars />
        </div>

        <button>
          Next 
        </button>


      </fieldset>
      </>
    )
}