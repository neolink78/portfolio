import { useRouter } from "next/router";


type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
    const router = useRouter()
    return (
        <div className="text-white max-w-6xl mx-auto mt-12">
        <div className="flex justify-between items-center">
            <div className="text-4xl font-bold flex hover:cursor-pointer" onClick={() => router.push('/')}>
            <p>T</p>
            <p>h</p>
            <p>i</p>
            <p>b</p>
            <p>a</p>
            <p>u</p>
            <p>t</p>
            <p className="text-orange-400">.</p>
            </div>
            <div className="flex gap-6">
                <div className="flex gap-5 ">
                <p className="hover:cursor-pointer" onClick={() => router.push('/')}>Home</p>
                <p className="hover:cursor-pointer" onClick={() => router.push('/resume')}>Resume</p>
                <p className="hover:cursor-pointer" onClick={() => router.push('/projects')}>Personal Projects</p>
                </div>
               <p>|</p> 
               <div className="flex gap-2">
               <p>image</p>
               <p>image</p>
               </div>
                {// image pour dark/light mode
                }
                {// image pour la langue
                }
            </div>
        </div>
        {children}
        <div>yo</div>
        </div>
    )
}

export default Layout