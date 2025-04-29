import { Github } from "@/lib/icons/github";
import { Instagram } from "@/lib/icons/instagram";
import { LinkedIn } from "@/lib/icons/linkedIn";

export const Icons = () => {
    return (
        <div className="flex justify-around mt-5">
            <a href="https://github.com/neolink78" target="_blank" rel="noopener noreferrer"
                className="group rounded-full border border-[black] dark:border-orange-500 p-2 hover:bg-[#FFD0A3] dark:hover:bg-orange-500 hover:cursor-pointer"
            >
                <Github className="fill-black dark:fill-white  group-hover:fill-black transition-colors duration-300" />
            </a>
            <a href="https://www.instagram.com/neolink78/" target="_blank" rel="noopener noreferrer"
                className="group rounded-full border border-[black] dark:border-orange-500 p-2 hover:bg-[#FFD0A3] dark:hover:bg-orange-500 hover:cursor-pointer"
            >
                <Instagram className="fill-black dark:fill-white group-hover:fill-black transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/thibaut-resse-36674015a/" target="_blank" rel="noopener noreferrer"
                className="group rounded-full border border-[black] dark:border-orange-500 p-2 hover:bg-[#FFD0A3] dark:hover:bg-orange-500 hover:cursor-pointer"
            >
                <LinkedIn className="fill-black dark:fill-white group-hover:fill-black transition-colors duration-300" />
            </a>

        </div>
    )
}