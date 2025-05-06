import { useEffect, useState } from "react"
import { TFunction } from "next-i18next";

type FooterType = {
    t: TFunction,
}

export const Footer = ({ t }: FooterType) => {
    const [showFooter, setShowFooter] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            const isSmallScreen = window.innerWidth < 950;
            const isScrolled = window.scrollY > 50;

            setShowFooter(isSmallScreen && isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div className={`fixed left-1/2 -translate-x-1/2 bottom-2 flex dark:text-orange-300 gap-1 transition-opacity duration-300 ${showFooter ? "opacity-100" : "opacity-0 pointer-events-none lg:opacity-100"
            }`}>
            © 2025 Thibaut Resse.  <span className="hidden xl:block">{t("footer")}
                <a href="https://nextjs.org/" className="hover:underline hover:decoration-orange-500 text-orange-600  dark:text-orange-500 ">Next.js</a> {t("footer_and")}
                <a href="https://www.typescriptlang.org/" className="hover:underline hover:decoration-orange-500 text-orange-600  dark:text-orange-500">TypeScript</a>
            </span>
        </div>
    )
}