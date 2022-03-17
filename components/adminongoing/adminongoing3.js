import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import cd from '../../styles/countdown.module.css'

import { PageHeader3 } from '../adminongoingview'
import { AbortButton } from '../adminongoingview'
import { StandardButton } from '../adminongoingview'
import { NextButton } from '../adminongoingview'
import Countdown from '../Countdown'




export default function AdminOngoing3() {
  return (
    <>
      <div className={utilStyles.container}>
        <PageHeader3 />
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
            <NextButton />
          </div>
        </>
        )
}