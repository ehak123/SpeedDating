import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { PageHeader1 } from '../adminongoingview'
import { AbortButton } from '../adminongoingview'
import { StandardButton } from '../adminongoingview'
import { NextButton } from '../adminongoingview'
7


export default function AdminOngoing1(props) {
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
        <NextButton props/>
      </div>
    </>
  )
}