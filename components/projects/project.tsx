import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslation } from "next-i18next";

type ProjectType = {
    title: string
    description: string
    link?: string
    githubLink?: string
    isWebsite?: boolean
    image: string
    imageClass: string
}


export const Project = ({ title, description, link, githubLink, isWebsite, image, imageClass }: ProjectType) => {
    const { t } = useTranslation('common')
    return (
        <div className="flex mt-8">
            <div className="grid:w-[0.02rem] bg-black dark:bg-white" />
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid:ml-8 flex flex-col gap-5"
            >
                <div>
                    <p className="text-xl font-bold dark:text-orange-500">{title}</p>
                    <p className="mt-2">{description} <br />
                        {t("projects_code")}
                        <a href={githubLink}
                            target="_blank" rel="noopener noreferrer"
                            className="hover:text-orange-500 hover:underline"
                        >
                            {` ${githubLink}`}
                        </a> <br />
                        {isWebsite ?
                            <p>{t("projects_visit")}
                                <a href={link}
                                    target="_blank" rel="noopener noreferrer"
                                    className="hover:text-orange-500 hover:underline"
                                >
                                    {` ${link}`}
                                </a>
                            </p>
                            :
                            <p>{t("projects_robot")}
                                <a href={link}
                                    target="_blank" rel="noopener noreferrer"
                                    className="hover:text-orange-500 hover:underline"
                                >
                                    {` ${link}`}
                                </a>
                            </p>

                        }
                    </p>

                    <Image alt={title} src={`/${image}`}
                        width={800} height={800}
                        className={imageClass}

                    />

                </div>
            </motion.div>
        </div>
    )
}