import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import cd from '../styles/countdown.module.css'

import { PageHeader6 } from '../components/adminongoingview'
import { AbortButton } from '../components/adminongoingview'
import { StandardButton } from '../components/adminongoingview'
import { NextButton6 } from '../components/adminongoingview'
import Countdown from '../components/Countdown'




export default function AdminOngoing6() {
  return (
    <>
      <div className={utilStyles.container}>
        <PageHeader6 />
          <Head>
          </Head>
          <section className={utilStyles.container}>
            <h3 id={utilStyles.centertext} >
              <br /> <br />
              DATE PÅGÅR <br />
              (använd timern för att hålla koll på tiden)
            </h3>
            <br />
            <div className={cd.container}>
              <Countdown />
            </div>
            <br />
          </section>
      </div>
         
          <br />
          <div className={utilStyles.adminbuttonbox}>
            <AbortButton />
            <StandardButton />
            <NextButton6 />
          </div>
        </>
        )
}