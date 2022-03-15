import startview from '../../styles/startview.module.css'
import utilStyles from '../../styles/utils.module.css'
import StartViewLinks from './startviewlinks'
import AdminLoginLink from './adminloginlink'

export default function StartView({ children, news }) {
  return (
    <>
      <section className={utilStyles.headingMd}>
        {children}
      </section>
      <StartViewLinks />
      <AdminLoginLink />
      {news === 'on' && <>
        {/*<News />*/}
      </>}
    </>
  )
}