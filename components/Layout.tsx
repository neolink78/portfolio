import { FrenchFlagIcon } from "@/lib/icons/frenchFlag";
import { Sun } from "@/lib/icons/sun";
import { EnglishFlagIcon } from "@/lib/icons/ukFlag";
import { useRouter } from "next/router";
import { useRef } from "react";

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
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
            <div className="flex gap-7 items-center">
                <div className="flex gap-5 ">
                <p className={`${router.route === '/' ? 'pb-1 border-b-2 border-orange-500 text-orange-500' : 'border-b border-transparent'} hover:border-b-2 hover:border-orange-500 hover:cursor-pointer`}
                 onClick={() => router.push('/')}>Home</p>
                <p className={`${router.route === '/resume' ? 'pb-1 border-b-2 border-orange-500 text-orange-500' : 'border-b border-transparent'} hover:border-b-2 hover:border-orange-500 hover:cursor-pointer`} 
                onClick={() => router.push('/resume')}>Resume</p>
                <p className={`${router.route === '/projects' ? 'pb-1 border-b-2 border-orange-500 text-orange-500' : 'border-b border-transparent'} hover:border-b-2 hover:border-orange-500 hover:cursor-pointer`} 
                onClick={() => router.push('/projects')}>Personal Projects</p>
                </div>
               <p className="p-[0.02rem] h-16 bg-white "></p> 
               <div className="flex gap-5 items-center">
            
               <Sun className={`p-2 bg-orange-500 rounded-md hover:bg-orange-400 hover:cursor-pointer stroke-white hover:stroke-black transition-colors duration-300`}/>
           
               <FrenchFlagIcon className="w-5 h-5 hover:cursor-pointer"/>
               <EnglishFlagIcon className="w-5 h-5 hover:cursor-pointer"/>
               </div>
            </div>
        </div>
        {children}
        <div className="fixed left-1/2 -translate-x-1/2 bottom-2 flex text-orange-300 gap-1">
            © 2025 Thibaut Resse. All rights reserved. | Made with 
            <a href="https://nextjs.org/" className="hover:underline hover:decoration-orange-500 text-orange-500 ">Next.js</a> and 
            <a href="https://www.typescriptlang.org/" className="hover:underline hover:decoration-orange-500 text-orange-500">TypeScript</a>
        </div>
        </div>
    )
}

export default Layout