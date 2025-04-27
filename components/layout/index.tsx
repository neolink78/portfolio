import { useRouter } from "next/router";
import { useRef } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { useTheme } from "next-themes";

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const router = useRouter()
    const { theme } = useTheme()
    const dotRef = useRef<HTMLParagraphElement>(null)

    const triggerBounce = () => {
        if (dotRef.current) {
            dotRef.current.classList.remove('animate-bounceUp')
            void dotRef.current.offsetWidth
            dotRef.current.classList.add('animate-bounceUp')
        }
    }

    return (
        <div className={`text-white dark:text-dark transition-colors duration-700 ${theme === 'light' && 'bg-gradient-to-r from-[#FFE6C9] to-[#FFD0A3]'}`}>
            <div className={`max-w-6xl mx-auto pt-12`}>
                <div className="flex justify-between items-center">
                    <div className="text-4xl font-bold flex hover:cursor-pointer" onClick={() => router.push('/')}>
                        {['T', 'h', 'i', 'b', 'a', 'u', 't'].map((letter, idx) => (
                            <p key={idx} className="hover:animate-wiggle transition-transform">{letter}</p>
                        ))}
                        <p className="text-orange-400" onMouseEnter={triggerBounce} ref={dotRef} >.</p>
                    </div>
                    <Navigation />
                </div>
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout