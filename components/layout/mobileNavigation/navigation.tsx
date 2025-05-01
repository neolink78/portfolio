import { FrenchFlagIcon } from "@/lib/icons/frenchFlag";
import { Sun } from "@/lib/icons/sun";
import { EnglishFlagIcon } from "@/lib/icons/ukFlag";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { Moon } from "@/lib/icons/moon";

type NavigationType = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Navigation = ({ setIsOpen }: NavigationType) => {
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
                        router.push("/")
                    }}
                >
                    Home
                </p>
                <p
                    className={`${router.route === "/resume"
                        ? "pb-1 border-b-2 border-black dark:border-orange-500 dark:text-orange-500"
                        : "border-b-2 border-transparent"
                        } text-xl w-fit hover:border-b-2 hover:border-black dark:hover:border-orange-500 hover:cursor-pointer`}
                    onClick={() => {
                        setIsOpen(false)
                        router.push("/resume")
                    }}
                >
                    Resume
                </p>
                <p
                    className={`${router.route === "/projects"
                        ? "pb-1 border-b-2 border-black dark:border-orange-500 dark:text-orange-500"
                        : "border-b-2 border-transparent"
                        } text-xl w-fit hover:border-b-2 hover:border-black dark:hover:border-orange-500 hover:cursor-pointer`}
                    onClick={() => {
                        setIsOpen(false)
                        router.push("/projects")
                    }}
                >
                    Personal Projects
                </p>
            </div>
            <div className="flex flex-col gap-5 items-center" onClick={() => resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark')}>
                {resolvedTheme === 'dark' ? <Sun
                    className={`p-2 bg-orange-500 rounded-md hover:bg-orange-400 hover:cursor-pointer stroke-white hover:stroke-black transition-colors duration-300`}
                /> : <Moon
                    className={`p-2 bg-black rounded-md hover:cursor-pointer fill-white hover:fill-orange-500 transition-colors duration-300`}
                />
                }

            </div>
            <div className="flex gap-5">
                <FrenchFlagIcon className="w-7 h-7 hover:cursor-pointer" />
                <EnglishFlagIcon className="w-7 h-7 hover:cursor-pointer" />
            </div>
        </div>
    )
}