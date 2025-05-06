import { Project } from "@/components/projects/project"
import { getStaticPropsWithTranslations } from '@/hoc/serverSideProps';
import { useTranslation } from "next-i18next";

export const getStaticProps = getStaticPropsWithTranslations()

const Projects = () => {
    const { t } = useTranslation('common')

    return (
        <div className="mt-10 min-h-screen">
            <div className="h-[35rem] xl:h-[40rem] overflow-y-scroll custom-scrollbar">
                <div className="flex flex-col gap-5">
                    <Project
                        title={t("projects_first_title")}
                        description={t("projects_first_description")}
                        link='https://atelier-de-bernard.vercel.app'
                        githubLink="https://github.com/neolink78/atelier-de-bernard"
                        image="atelier.png"
                        imageClass="mt-5 xl:w-[80%] xl:h-[30rem]"
                        isWebsite
                    />
                    <Project
                        title="Epic free games"
                        description={t("projects_second_description")}
                        link='https://shorturl.at/zcrtW'
                        githubLink="https://github.com/neolink78/EpicFreeGames"
                        image="bot.png"
                        imageClass="mt-5 xl:w-[80%] xl:h-[40rem]"
                    />
                </div>
            </div>
        </div>
    )
}
export default Projects