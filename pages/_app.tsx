import { appWithTranslation } from 'next-i18next'
import '@/styles/globals.css'
import { AppProps } from 'next/app';
import Layout from '@/components/layout';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TransitionOverlay from '@/components/transitionOverlay';


function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [showOverlay, setShowOverlay] = useState(false)
  const [showPage, setShowPage] = useState(false)

  useEffect(() => {
    setShowOverlay(true)
    const initialTimeout = setTimeout(() => {
      setShowPage(true)
    }, 1000)

    const hideOverlayTimeout = setTimeout(() => {
      setShowOverlay(false)
    }, 1500)

    return () => {
      clearTimeout(initialTimeout)
      clearTimeout(hideOverlayTimeout)
    }
  }, [])

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setShowOverlay(true)
      setShowPage(false)
    }

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setShowPage(true)
      }, 1000)
      setTimeout(() => {
        setShowOverlay(false)
      }, 1500)
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeComplete)
    }
  }, [router])

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