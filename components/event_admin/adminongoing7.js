import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { PageHeader7 } from './AdminButtons'
import { AbortButton } from './AdminButtons'
import { StandardButton } from './AdminButtons'
import { NextButton } from './AdminButtons'


export default function AdminOngoing7() {
  return (
    <>
      <div className={utilStyles.container}>
        <PageHeader7/>
        <main>
          <Head>
          </Head>
          <section className={utilStyles.containerwide}>
            <h3 id={utilStyles.centertext} >
              <br /> <br />
              MATCHNING 3 ÄR GJORD  &#10004;
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