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
      
      </main>
    </Layout>
  )
}