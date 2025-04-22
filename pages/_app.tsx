import {appWithTranslation} from 'next-i18next'
import '@/styles/globals.css'
import { AppProps } from 'next/app';
import ParticlesBackground from '@/components/Particles';

function App({Component, pageProps }: AppProps) {
    return <>
    <ParticlesBackground />
    <Component {...pageProps} />
    </>
}

export default appWithTranslation(App)