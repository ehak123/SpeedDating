import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/utils.module.css";
import timer from "../styles/timer.module.css";
import { useRouter } from "next/router";
import MatchRating from '../components/event_user/MatchRating.js';

function Timer({ round, matchname }) {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("3/18/2022 22:10:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);



  return (
    <div >
      <Head>
        <title>Countdown Timer</title>
      </Head>


      {partyTime ? (
        <>  
          <MatchRating round={round} matchname={matchname} />
        </>
      ) : (
        <>
          <div className={timer.timerwrapper}>
            <div className={timer.timerinner}>
              <div className={timer.timersegment}>
                <span className={timer.time}>{days}</span>
                <span className={timer.label}>Days</span>
              </div>
              <span className={timer.divider}>:</span>
              <div className={timer.timersegment}>
                <span className={timer.time}>{hours}</span>
                <span className={timer.label}>Hours</span>
              </div>
              <span className={timer.divider}>:</span>
              <div className={timer.timersegment}>
                <span className={timer.time}>{minutes}</span>
                <span className={timer.label}>Minutes</span>
              </div>
              <span className={timer.divider}>:</span>
              <div className={timer.timersegment}>
                <span className={timer.time}>{seconds}</span>
                <span className={timer.label}>Seconds</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Timer;
