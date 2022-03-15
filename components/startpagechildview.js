import Image from 'next/image'
import startview from '../styles/startview.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { siteTitle } from '../data/metadata'

export function PageHeader() {
  return (
    <div className={utilStyles.container}>
      <header className={startpage.header}>
        <>
          <section id={startpage.logo}>
            <Image
              priority
              src="/images/icon400x400.jpg"
              className={utilStyles.borderCircle}
              height={80}
              width={80}
              alt={siteTitle}
            />
          </section>
          <h1 className={utilStyles.headingXl}>{siteTitle}</h1>
        </>
      </header>
    </div>
  )
}

export function PageFooter() {
  return (
    <div className={startpage.backToHome}>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </div>
  )
}