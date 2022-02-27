import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { PageHeader } from '../components/userview'

export const siteTitle = 'STH Speed Dating'


export default function UpComingEvents() {
  return (
    <div className={utilStyles.container}>
      <PageHeader/>
        <main>
        <Head>
          <title> {siteTitle} </title>
        </Head>
        <section className={utilStyles.containerwide}>
          <h3 id={utilStyles.centertext} > USERVIEW PLACEHOLDER </h3>
        </section>
      </main>
    </div>
  )
}