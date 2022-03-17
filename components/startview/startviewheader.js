import Image from 'next/image'
import startview from '../../styles/startview.module.css'
import utilStyles from '../../styles/utils.module.css'
import { siteTitle } from '../../data/metadata'


export default function StartViewHeader(props) {
  var sizeValue;
  if (props.size === 'small'){
    sizeValue = 80;
  } else {
    sizeValue = 144; //default
  }
  return (
    <header className={[startview.header]}>
      <section className={startview.logo}>
        <Image
          priority
          src="/images/icon400x400.jpg"
          className={utilStyles.borderCircle}
          height={sizeValue}
          width={sizeValue}
          alt={siteTitle}
        />
      </section>
      {props.size === 'small' &&
        <h1 className={utilStyles.headingXl}>{siteTitle}</h1>
      }
      {props.size !== 'small' &&
        <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
      }
    </header>
  )
}