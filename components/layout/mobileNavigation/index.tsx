import { List } from "@/lib/icons/list"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Navigation } from "./navigation"
import { TFunction } from "next-i18next";

type NavigationType = {
    t: TFunction,
    changeLanguage: (lang: string) => void
}

export const MobileNavigation = ({ t, changeLanguage }: NavigationType) => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
            document.body.style.overflow = "hidden"
            document.body.style.paddingRight = `${scrollbarWidth}px`
        } else {
            document.body.style.overflow = ""
            document.body.style.paddingRight = ""
        }

        return () => {
            document.body.style.overflow = ""
            document.body.style.paddingRight = ""
        }
    }, [isOpen])

    return (
        <div className="lg:hidden relative z-50">
            <div onClick={() => setIsOpen(true)}>
                <List className="fill-black dark:fill-orange-500 hover:cursor-pointer" />
            </div>
            <div
                className={`fixed inset-0 bg-black/60 z-30 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsOpen(false)}
            />
            <div
                className={`fixed top-0 right-0 h-screen w-[20rem] z-40 bg-orange-400 dark:bg-black text-white transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="pr-12 pt-9 flex justify-end">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-black dark:text-orange-500 text-4xl pr-2"
                    >
                        ×
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-black dark:text-white text-3xl font-bold hover:cursor-pointer mt-10"
                        onClick={() => router.push("/")}
                    >Thibaut
                        <span className="text-orange-500">.</span>
                    </p>
                    <Navigation setIsOpen={setIsOpen} t={t} changeLanguage={changeLanguage} />
                </div>
            </div>
        </div>
    )
}
