import Link from 'next/link'
import Date from '../components/date'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Children({ allPostsData }) {
  return (
    <Layout children>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <section className={utilStyles.containerwide}>
          <div className={utilStyles.calendercard}>
            <p className={utilStyles.lighttext}> 2022-04-25 </p>
            <h3>Singles ready to mingle</h3>
            <p>Tired of searching for "the one"? Let our match-making-algorithm do the job. This is a classic Speed Dating event for everyone, infused with our world renownd concept. </p>
          </div>
          <div className={utilStyles.calendercard}>
            <p className={utilStyles.lighttext}> 2022-06-30 </p>
            <h3>Singles that likes Pringles</h3>
            <p>This event is for all you Pringles fans out there.</p>
            <p > THIS EVENT IS SPONSORED</p>
          </div>
          <div className={utilStyles.calendercard}>
            <p className={utilStyles.lighttext}> 2022-08-15 </p>
            <h3>Sailors night (gay event)</h3>
            <p>Ship-o-hoy! Are you a Red October-navy-fan or just a Captain Crook? Lets raise all sails for this navy-themed event!</p>
          </div>
          <br/>
          <h3>...more events will be added soon! <br></br>Become a member today and do not miss out! </h3>
        </section>
      </main>
    </Layout>
  )
}