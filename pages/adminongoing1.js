import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { PageHeader } from '../components/adminongoingview'


export default function UpComingEvents() {
  return (
    <div className={utilStyles.container}>
      <PageHeader />
      <main>
        <Head>
          {PageHeader}
        </Head>
        <section className={utilStyles.containerwide}>
          <h3 id={utilStyles.centertext} >
            <br/> <br/>
            MATCHNING 1 ÄR GJORD 
            <br/> <br/>
            Gå vidare för att administrera och presentera matchningar.
          </h3>
        </section>
      </main>
    </div>
  )
}