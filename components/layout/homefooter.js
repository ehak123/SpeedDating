import layout from '../../styles/layout.module.css'
import Link from 'next/link'

export default function HomeFooter() {
    return (
      <div className={layout.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )
  }