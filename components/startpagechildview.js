import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


const name = 'STH Speed Dating'
export const siteTitle = 'STH Speed Dating'

export function StartPageHeader() {
  return (
    <div className={utilStyles.container}>
      <header className={styles.header}>
        <>
          <section id={styles.container}>
            <Image
              priority
              src="/images/icon400x400.jpg"
              className={utilStyles.borderCircle}
              height={80}
              width={80}
              alt={name}
            />
          </section>
          <h1 className={utilStyles.headingXl}>{name}</h1>
        </>
      </header>
    </div>
  )
}


export function StartPageFooter() {
  return (
    <div className={styles.backToHome}>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </div>
  )
}