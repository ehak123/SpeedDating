import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import UserProfile from "../components/UserProfile";
import profileStyle from "../components/event_user/userevent.module.css";
import EventHeader from "../components/EventHeader"


// TODO: Add styles
export default function Match_found() {
  const siteTitle = "Second Round";
  const router = useRouter();
  return (
    <>
      <TopLogo title="Second Round" />
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <div className={profileStyle.card}>
          <h1> Nina is your second match </h1>
          <UserProfile name="nina" />
        </div>
      </section>

      <section>
        <div className={profileStyle.card}>
          <h1> Get ready! </h1>
          Go to table number: 3
          <br />
          Status: Nina is on her way to your table
          <div>
            <Link href="/second_rating">
              <button
                type="button"
                className={profileStyle.userbutton}
              >
                I'm at my table
              </button>
            </Link>
            <Link href="/">
              <a>See table locations</a>
            </Link>
          </div>
        </div>
      </section>
      <div className={profileStyle.exit}>
        <button className={profileStyle.exitbutton}>Exit event</button>
      </div>
    </>
  );
}
