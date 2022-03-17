import { TopLogo } from "../top_logo";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import UserProfile from "../UserProfile";
import profileStyle from "../../styles/userongoing.module.css";
import { GetUserProfile } from "../../context/users";

// TODO: Add styles
export default function MatchFound({ children, round, matchname, tableNo }) {
  var siteTitle;
  if (round === 1) {
    siteTitle = "First Round";  
  } else if (round === 2) {
    siteTitle = "Second Round";
  } else if (round === 3) {
    siteTitle = "Third Round";
  }
  
  const router = useRouter();
  return (
    <>
      <TopLogo title={siteTitle} />
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <div className={profileStyle.card}>
          <h1> {matchname} is your first match </h1>
          <GetUserProfile name={matchname} />
        </div>
      </section>

      <GoToTable tableNumber={tableNo} waitingName={matchname} />
      <div className={profileStyle.exit}>
        <button className={profileStyle.exitbutton}>Exit event</button>
      </div>
    </>
  );
}
