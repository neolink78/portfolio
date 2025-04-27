import { appWithTranslation } from 'next-i18next'
import '@/styles/globals.css'
import { AppProps } from 'next/app';
import Layout from '@/components/layout';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>)
}

export default appWithTranslation(App)