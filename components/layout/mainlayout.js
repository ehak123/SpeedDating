import NavBar from './navbar'
import Content from './content'
import Head from 'next/head'
import { siteTitle, metadataDescription } from '../../data/metadata'
import layout from '../../styles/layout.module.css'

export default function Layout({ children, nav }) {
  return (
    <>
      <Head>
      <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metadataDescription}/>
      </Head>

      <div className={layout.mainlayout}>
        {nav && <NavBar />}

        <Content>
          {children}
        </Content>
      </div>
    </>
  )
}