import { TopLogo } from "../components/top_logo";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import UserProfile from "../components/UserProfile";
import profileStyle from "../styles/userongoing.module.css";

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
          <UserProfile path="https://images.unsplash.com/photo-1603691436755-354a2d9b4bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHx3b21hbiUyMGhpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" name="Nina Nice" age="36" />
        </div>
      </section>

      <section>
        <div className={profileStyle.card}>
          <h1> Get ready! </h1>
          Go to table number: 3
          <br />
          Status: Nina is on her way to your table
          <div>
            <button
              type="button"
              onClick={() => router.push("/second_rating")}
              className={profileStyle.userbutton}
            >
              I'm at my table
            </button>
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
