import '../styles/reset.css'
import '../styles/global.css'
import { AppWrapper } from '../context/logincontext'
import { EventWrapper } from '../context/eventcontext'
import { CommWrapper } from '../context/commcontext'
import Layout from '../components/layout/mainlayout'
import Head from 'next/head'

// For dev info header, change <Layout> to <Layout nav>
export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <CommWrapper>
        <EventWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </EventWrapper>
      </CommWrapper>
    </AppWrapper>
  )
}
