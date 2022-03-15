import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { PageHeader1 } from '../components/adminongoingview'
import { AbortButton } from '../components/adminongoingview'
import { StandardButton } from '../components/adminongoingview'
import { NextButton1 } from '../components/adminongoingview'


export default function AdminOngoing1() {
  return (
    <>
      <div className={utilStyles.container}>
        <PageHeader1 />
        <main>
          <Head>
          </Head>
          <section className={utilStyles.containerwide}>
            <h3 id={utilStyles.centertext} >
              <br /> <br />
              MATCHNING 1 ÄR GJORD  &#10004;
              <br /> <br />  <br />
              Gå vidare för att administrera och presentera matchningar.
            </h3>
          </section>
        </main>
      </div>
      <br />
      <div className={utilStyles.adminbuttonbox}>
        <AbortButton />
        <StandardButton />
        <NextButton1 />
      </div>
    </>
  )
}