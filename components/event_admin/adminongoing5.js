import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import admin from './adminevent.module.css'

import { PageHeader5 } from './AdminButtons'
import { AbortButton } from './AdminButtons'
import { StandardButton } from './AdminButtons'
import { NextButton } from './AdminButtons'
import { ChangeMatch } from './AdminButtons'
import { Form } from './AdminButtons'




export default function AdminOngoing5() {
  return (
    <>
      <div className={utilStyles.container}>
        <PageHeader5 />
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