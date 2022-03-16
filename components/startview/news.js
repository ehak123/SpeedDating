import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts';

const allPostsData = getSortedPostsData();

// Seems to be broken due to fs not found.
export default function News() {
    return (
        <section className={[utilStyles.headingMd, utilStyles.padding1px]}>
            <h2 className={utilStyles.headingLg}>News</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={'../pages/posts/${id}'}>
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
    )
}