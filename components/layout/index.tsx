import { useRouter } from "next/router";
import { useRef } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const router = useRouter()
    const dotRef = useRef<HTMLParagraphElement>(null)

    const triggerBounce = () => {
        if (dotRef.current) {
            dotRef.current.classList.remove('animate-bounceUp')
            void dotRef.current.offsetWidth
            dotRef.current.classList.add('animate-bounceUp')
        }
    }

    return (
        <div className="text-white max-w-6xl mx-auto mt-12">
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
    )
}

export default Layout