import { appWithTranslation } from 'next-i18next'
import '@/styles/globals.css'
import { AppProps } from 'next/app';
import Layout from '@/components/layout';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import TransitionOverlay from '@/components/transitionOverlay';
import { useOverlay } from '@/hooks/overlayHook';


function App({ Component, pageProps }: AppProps) {
  const { showOverlay, showPage, router } = useOverlay()

  return (
    <ThemeProvider attribute='class'>
      <Head>
        <title>Portfolio</title>
      </Head>
      {showPage &&
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>}
      {showOverlay && <TransitionOverlay />}
    </ThemeProvider>
  )
}

export default appWithTranslation(App)