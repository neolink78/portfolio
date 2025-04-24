import {appWithTranslation} from 'next-i18next'
import '@/styles/globals.css'
import { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import Head from 'next/head';

function App({Component, pageProps }: AppProps) {
    return <Layout>
        <Head>
        <title>Portfolio</title>
      </Head>
    <Component {...pageProps} />
    </Layout>
}

export default appWithTranslation(App)