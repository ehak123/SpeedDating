import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import upcoming from '../styles/upcomingevents.module.css'
import StartViewHeader from '../components/startview/startviewheader'
import HomeFooter from '../components/layout/homefooter'
import Event from '../components/upcomingview/event'

export default function UpComingEvents() {
  return (
    <>
      <StartViewHeader size="small"/>
        <Head>
          <title>Upcoming Events</title>
        </Head>
        <section className={upcoming.allevents}>
          <Event
            date = '2022-04-25'
            title = 'Singles ready to mingle'
            descr = 'Tired of searching for "the one"? Let our match-making-algorithm do the job. This is a classic Speed Dating event for everyone, infused with our world renownd concept.'
          />
          <Event
            date = '2022-06-30'
            title = 'Singles that likes Pringles'
            descr = 'This event is for all you Pringles fans out there.Tired of searching for "the one"? Let our match-making-algorithm do the job. This is a classic Speed Dating event for everyone, infused with our world renownd concept.'
            extra = 'THIS EVENT IS SPONSORED'
          />
          <Event
            date = '2022-08-15'
            title = 'Sailors night (gay event)'
            descr = 'Ship-o-hoy! Are you a Red October-navy-fan or just a Captain Crook? Lets raise all sails for this navy-themed event!'
          />
        </section>
          <h3 id={utilStyles.centertext} className={upcoming.more}>
            ...more events will be added soon!
            <br />
            Become a member today and do not miss out!
          </h3>
      <HomeFooter />
    </>
  )
}