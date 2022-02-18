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

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
      <title> {siteTitle} </title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to Stockholm Speed Dating, your interactive and modern matchmaker-service!</p>
      </section>
      <section className={utilStyles.grid, utilStyles.container}>
              <a href="/testchildren" className={utilStyles.card} disabled={this}>
                <h3>Become a member today &rarr;</h3>
                <p>Join our dating comunity and find your soulmate</p>
              </a>

              <a href="" className={utilStyles.card}>
                <h3>Log in &rarr;</h3>
                <p>Log in in order to sign up to new exiting events</p>
              </a>

              <a href="/upcomingevents" className={utilStyles.card}>
                <h3>Coming Speed Dating events &rarr;</h3>
                <p>Check out all our fun up-comming event here!</p>
              </a>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>News</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}