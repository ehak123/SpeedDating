import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import admin from './adminevent.module.css'

import ProgressBar from './ProgressBar'
import { AbortButton, StandardButton } from './AdminButtons'
import NextButton from './NextButton'
import ChangeMatch from './ChangeMatch'
import Form from './AdminForm'


export default function AdminOngoing2() {
  return (
    <>
      <div className={utilStyles.container}>
        <PageHeader2 />
          <Head>
          </Head>
          <section className={utilStyles.container}>
            <h3 id={utilStyles.centertext} >
              <br /> <br />
              Gå vidare för att presentera matchning med standardmeddelande <br /> eller anpassa texten nedan för tematiska event:
            </h3>
            <br />
          </section>
          <Form className={admin.form}/>
      </div>
         
          <br />
          <div className={utilStyles.adminbuttonbox}>
            <AbortButton />
            <StandardButton />
            <ChangeMatch />
            <NextButton />
          </div>
        </>
        )
}