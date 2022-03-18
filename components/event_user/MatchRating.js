import EventHeader from "../EventHeader";
import RatingStars1 from "../RatingStars";
import RatingStars2 from "../RatingStars";
import RatingStars3 from "../RatingStars";
import RatingStars4 from "../RatingStars";
import Head from "next/head";
import user from "./userevent.module.css";
import UserProfile from "../UserProfile";
import { useRouter } from "next/router";
import { useEventDispatchContext } from "../../context/eventcontext";
import Grid from "@mui/material/Grid";
import RatingCard from "../RatingCard"
//TODO: skapa en ny fil i components för RatingCard <- jag kommer inte åt mappstrukturen


const msg1 ="Matching personality";
const msg2 ="Matching value";
const msg3 ="Overall impression";
const msg4 ="Would you like to go on a second date with this person?";
export default function MatchRating({ round, matchname }) {

  const dispatch = useEventDispatchContext();
  var siteTitle;
  if (round === 1) {
    siteTitle = "First Round completed";
  } else if (round === 2) {
    siteTitle = "Second completed";
  } else if (round === 3) {
    siteTitle = "Third completed";
  }



  const router = useRouter()

  function goNextUser() {
    dispatch({
      type: 'NEXT_USER_STEP'
    });
    router.push('/event');
  }

  return (
    <>
       <EventHeader title={siteTitle} />
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={user.card}>
          <UserProfile name={matchname} />
        </div>
      </section>
      <Grid
  container
  direction="column"
  justifyContent="space-around"
  alignItems="center"
>
<RatingCard message={msg1}/>   
<RatingCard message={msg2}/>   
<RatingCard message={msg3}/>   
<RatingCard message={msg4}/>   
        </Grid>

        <button
          type="button"
          onClick={goNextUser}
          className={user.userbutton}
        >
          Go to next round
        </button>
    </>
  );
}
