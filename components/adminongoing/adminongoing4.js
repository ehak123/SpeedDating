import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { PageHeader4 } from '../adminongoingview'
import { AbortButton } from '../adminongoingview'
import { StandardButton } from '../adminongoingview'
import { NextButton } from '../adminongoingview'


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
        <NextButton />
      </div>
    </>
  )
}