import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import startview from '../../styles/startview.module.css'

export default function StartViewLinks() {
    return (
        <section className={startview.links}>
            <a className={utilStyles.card} disabled={this}>
                <h3>Become a member today &rarr;</h3>
                <p>Join our dating community and find your soulmate</p>
            </a>

            <Link href="/login">
                <a className={utilStyles.card}>
                    <h3>Log in &rarr;</h3>
                    <p>Log in in order to sign up to new exiting events</p>
                </a>
            </Link>

            <Link href="./upcomingevents">
                <a className={utilStyles.card}>
                    <h3>Coming Speed Dating events &rarr;</h3>
                    <p>Check out all our fun upcoming events here!</p>
                </a>
            </Link>
        </section>
    )
}
