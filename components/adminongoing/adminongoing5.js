import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import admin from '../../styles/adminongoingview.module.css'

import { PageHeader5 } from '../adminongoingview'
import { AbortButton } from '../adminongoingview'
import { StandardButton } from '../adminongoingview'
import { NextButton } from '../adminongoingview'
import { ChangeMatch } from '../adminongoingview'
import { Form } from '../adminongoingview'




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