import '../styles/reset.css'
import '../styles/global.css'
import { AppWrapper } from '../context/logincontext'
import Layout from '../components/layout/mainlayout'
import Head from 'next/head'

// For dev info header, change <Layout> to <Layout nav>
export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout nav>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  )
}
