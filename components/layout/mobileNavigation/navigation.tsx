import { FrenchFlagIcon } from "@/lib/icons/frenchFlag";
import { Sun } from "@/lib/icons/sun";
import { EnglishFlagIcon } from "@/lib/icons/ukFlag";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { Moon } from "@/lib/icons/moon";
import { TFunction } from "next-i18next";

type NavigationType = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    t: TFunction,
    changeLanguage: (lang: string) => void
}


export const Navigation = ({ setIsOpen, t, changeLanguage }: NavigationType) => {
    const router = useRouter()
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <div className="text-black dark:text-white flex flex-col gap-7 items-center mt-10">
            <div className="flex flex-col gap-5 items-center">
                <p
                    className={`${router.route === "/"
                        ? "pb-1 border-b-2 border-black dark:border-orange-500 dark:text-orange-500"
                        : "border-b-2 border-transparent"
                        } text-xl w-fit hover:border-b-2 hover:border-black dark:hover:border-orange-500 hover:cursor-pointer`}
                    onClick={() => {
                        setIsOpen(false)
                        if (router.route !== "/") router.push("/")
                    }}
                >
                    {t("header_homepage")}
                </p>
                <p
                    className={`${router.route === "/resume"
                        ? "pb-1 border-b-2 border-black dark:border-orange-500 dark:text-orange-500"
                        : "border-b-2 border-transparent"
                        } text-xl w-fit hover:border-b-2 hover:border-black dark:hover:border-orange-500 hover:cursor-pointer`}
                    onClick={() => {
                        setIsOpen(false)
                        if (router.route !== "/resume") router.push("/resume")
                    }}
                >
                    {t("header_resume")}
                </p>
                <p
                    className={`${router.route === "/projects"
                        ? "pb-1 border-b-2 border-black dark:border-orange-500 dark:text-orange-500"
                        : "border-b-2 border-transparent"
                        } text-xl w-fit hover:border-b-2 hover:border-black dark:hover:border-orange-500 hover:cursor-pointer`}
                    onClick={() => {
                        setIsOpen(false)
                        if (router.route !== "/projects") router.push("/projects")
                    }}
                >
                    {t("header_projects")}
                </p>
            </div>
            <div className="flex flex-col gap-5 items-center">
                {resolvedTheme === 'dark' ?
                    <div onClick={() => setTheme('light')}>
                        <Sun
                            className={`p-2 bg-orange-500 rounded-md hover:bg-orange-400 hover:cursor-pointer stroke-white hover:stroke-black transition-colors duration-300`}
                        />
                    </div>
                    :
                    <div onClick={() => setTheme('dark')}>
                        <Moon
                            className={`p-2 bg-black rounded-md hover:cursor-pointer fill-white hover:fill-orange-500 transition-colors duration-300`}
                        />
                    </div>
                }

            </div>
            <div className="flex gap-5">
                <div onClick={() => changeLanguage('fr')}>
                    <FrenchFlagIcon className="rounded-full overflow-hidden w-7 h-7 hover:cursor-pointer" />
                </div>
                <div onClick={() => changeLanguage('en')}>
                    <EnglishFlagIcon className="rounded-full overflow-hidden w-7 h-7 hover:cursor-pointer" />
                </div>
            </div>
        </div>
    )
}