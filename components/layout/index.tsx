import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { useTheme } from "next-themes";
import { MobileNavigation } from './mobileNavigation/index'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const router = useRouter()
    const { resolvedTheme } = useTheme()
    const dotRef = useRef<HTMLParagraphElement>(null)
    const [mounted, setMounted] = useState(false);

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
                    <Navigation />
                    <MobileNavigation />
                </div>
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout