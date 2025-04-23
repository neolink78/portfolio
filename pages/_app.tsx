import {appWithTranslation} from 'next-i18next'
import '@/styles/globals.css'
import { AppProps } from 'next/app';
import Layout from '@/components/Layout';

function App({Component, pageProps }: AppProps) {
    return <Layout>
    <Component {...pageProps} />
    </Layout>
}

export default appWithTranslation(App)