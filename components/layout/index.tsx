import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { useTheme } from "next-themes";
import { MobileNavigation } from './mobileNavigation/index'
import { useTranslation } from "next-i18next";


type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const router = useRouter()
    const { resolvedTheme } = useTheme()
    const dotRef = useRef<HTMLParagraphElement>(null)
    const [mounted, setMounted] = useState(false);
    const { t, i18n } = useTranslation('common')

    const changeLanguage = (lang: string) => {
        if (lang === i18n.language) return
        i18n.changeLanguage(lang)
        router.push(router.pathname, router.asPath, { locale: lang === 'en' ? false : lang })
    }

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const triggerBounce = () => {
        if (dotRef.current) {
            dotRef.current.classList.remove('animate-bounceUp')
            void dotRef.current.offsetWidth
            dotRef.current.classList.add('animate-bounceUp')
        }
    }

    return (
        <div className={`text-black dark:text-white transition-colors duration-700 ${resolvedTheme === 'light' && 'bg-gradient-to-r from-[#FFE6C9] to-[#FFD0A3]'}`}>
            <div className={`max-w-2xl px-5 lg:px-0 lg:max-w-4xl xl:max-w-6xl mx-auto pt-10 pb-20 lg:pb-0`}>
                <div className="flex justify-between items-center">
                    <div className="text-4xl font-bold flex hover:cursor-pointer" onClick={() => router.push('/')}>
                        {['T', 'h', 'i', 'b', 'a', 'u', 't'].map((letter, idx) => (
                            <p key={idx} className="hover:animate-wiggle transition-transform">{letter}</p>
                        ))}
                        <p className="text-orange-400" onMouseEnter={triggerBounce} ref={dotRef} >.</p>
                    </div>
                    <Navigation t={t} changeLanguage={changeLanguage} />
                    <MobileNavigation t={t} changeLanguage={changeLanguage} />
                </div>
                {children}
                <Footer t={t} />
            </div>
        </div>
    )
}

export default Layout