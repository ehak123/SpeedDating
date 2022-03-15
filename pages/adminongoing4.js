import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { PageHeader4 } from '../components/adminongoingview'
import { AbortButton } from '../components/adminongoingview'
import { StandardButton } from '../components/adminongoingview'
import { NextButton4 } from '../components/adminongoingview'


export default function AdminOngoing4() {
  return (
    <>
      <div className={utilStyles.container}>
        <PageHeader4 />
        <main>
          <Head>
          </Head>
          <section className={utilStyles.containerwide}>
            <h3 id={utilStyles.centertext} >
              <br /> <br />
              MATCHNING 2 ÄR GJORD  &#10004;
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
        <NextButton4 />
      </div>
    </>
  )
}