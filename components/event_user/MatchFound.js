import EventHeader from "../EventHeader"; 
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import UserProfile from "../UserProfile";
import profileStyle from "./userevent.module.css";
import { getUserFirstName, GetUserProfile } from "../../context/users";
import GoToTable from './GoToTable';

// TODO: Add styles
export default function MatchFound({ children, round, matchname }) {
  var siteTitle;
  var tableNo;

  const roundString = ["first","second","third"]

  if (round === 1) {
    siteTitle = "First Round";  
    tableNo = 4;
  } else if (round === 2) {
    siteTitle = "Second Round";
    tableNo = 7;
  } else if (round === 3) {
    siteTitle = "Third Round";
    tableNo = 2;
  }
  
  const matchrealname = getUserFirstName(matchname);

  const router = useRouter();
  return (
    <>
      <EventHeader title={siteTitle} />
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <div className={profileStyle.card}>
          <h1> {matchrealname} is your {roundString[round-1]} match </h1>
          <UserProfile name={matchname} />
        </div>
      </section>

      <GoToTable tableNumber={tableNo} waitingName={matchrealname} />

      <div className={profileStyle.exit}>
        <Link href="/">
          <button className={profileStyle.exitbutton}>Exit event</button>
        </Link>
      </div>
    </>
  );
}
