import { FrenchFlagIcon } from "@/lib/icons/frenchFlag";
import { Sun } from "@/lib/icons/sun";
import { EnglishFlagIcon } from "@/lib/icons/ukFlag";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { Moon } from "@/lib/icons/moon";
import { TFunction } from "next-i18next";

type NavigationType = {
    t: TFunction,
    changeLanguage: (lang: string) => void
}

export const Navigation = ({ t, changeLanguage }: NavigationType) => {
    const router = useRouter();
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <div className="hidden lg:flex gap-7 items-center">
            <div className="flex gap-5 ">
                <p
                    className={`${router.route === "/"
                        ? "pb-1 border-b-2 border-orange-500 text-orange-500"
                        : "border-b border-transparent"
                        } hover:border-b-2 hover:border-orange-500 hover:cursor-pointer`}
                    onClick={() => router.push("/")}
                >
                    {t("header_homepage")}
                </p>
                <p
                    className={`${router.route === "/resume"
                        ? "pb-1 border-b-2 border-orange-500 text-orange-500"
                        : "border-b border-transparent"
                        } hover:border-b-2 hover:border-orange-500 hover:cursor-pointer`}
                    onClick={() => router.push("/resume")}
                >
                    {t("header_resume")}
                </p>
                <p
                    className={`${router.route === "/projects"
                        ? "pb-1 border-b-2 border-orange-500 text-orange-500"
                        : "border-b border-transparent"
                        } hover:border-b-2 hover:border-orange-500 hover:cursor-pointer`}
                    onClick={() => router.push("/projects")}
                >
                    {t("header_projects")}
                </p>
            </div>
            <p className="p-[0.02rem] h-16 bg-black dark:bg-white"></p>
            <div className="flex gap-5 items-center">
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
                <div onClick={() => changeLanguage('fr')}>
                    <FrenchFlagIcon className="w-5 h-5 hover:cursor-pointer" />
                </div>
                <div onClick={() => changeLanguage('en')}>
                    <EnglishFlagIcon className="w-5 h-5 hover:cursor-pointer" />
                </div>
            </div>
        </div>
    );
};
