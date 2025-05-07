import { About } from "@/components/resume/about"
import { Skills } from "@/components/resume/skills"
import { useState } from "react"
import { Css3 } from "@/lib/icons/skills/css3"
import { Express } from "@/lib/icons/skills/express"
import { Figma } from "@/lib/icons/skills/figma"
import { Html5 } from "@/lib/icons/skills/html5"
import { Javascript } from "@/lib/icons/skills/javascript"
import { Nextjs } from "@/lib/icons/skills/nextjs"
import { Nodejs } from "@/lib/icons/skills/nodejs"
import { Openai } from "@/lib/icons/skills/openai"
import { Postgresql } from "@/lib/icons/skills/postgresql"
import { Prisma } from "@/lib/icons/skills/prisma"
import { React } from "@/lib/icons/skills/react"
import { Sass } from "@/lib/icons/skills/sass"
import { Tailwind } from "@/lib/icons/skills/tailwind"
import { Typescript } from "@/lib/icons/skills/typescript"
import { Experiences } from "@/components/resume/experience"
import { Educations } from "@/components/resume/education"
import { getStaticPropsWithTranslations } from '@/hoc/serverSideProps';
import { useTranslation } from "next-i18next";

export const getStaticProps = getStaticPropsWithTranslations()

const Resume = () => {
    const [display, setDisplay] = useState('about')
    const { t } = useTranslation('common')

    return (
        <div className="text-black dark:text-white flex flex-col items-center xl:items-start xl:flex-row mt-40 gap-10">
            <div className="flex flex-col gap-7">
                <button className={` w-[20rem] lg:w-[23rem] hover:bg-orange-400 dark:hover:bg-orange-500 rounded-lg px-5 py-2 text-xl font-bold ${display === 'about' ?
                    'bg-orange-400 dark:bg-orange-500 hover:cursor-default' : 'bg-orange-300 dark:bg-[#2e2e2e]'}`}
                    onClick={() => setDisplay('about')}>
                    {t("resume_about")}
                </button>
                <button className={` w-[20rem] lg:w-[23rem] hover:bg-orange-400 dark:hover:bg-orange-500 rounded-lg px-5 py-2 text-xl font-bold ${display === 'skills' ?
                    'bg-orange-400 dark:bg-orange-500 hover:cursor-default' : 'bg-orange-300 dark:bg-[#2e2e2e]'}`}
                    onClick={() => setDisplay('skills')}>{t("resume_skills")}</button>
                <button className={` w-[20rem] lg:w-[23rem] hover:bg-orange-400 dark:hover:bg-orange-500 rounded-lg px-5 py-2 text-xl font-bold ${display === 'experience' ?
                    'bg-orange-400 dark:bg-orange-500 hover:cursor-default' : 'bg-orange-300 dark:bg-[#2e2e2e]'}`}
                    onClick={() => setDisplay('experience')}>{t("resume_experience")}</button>
                <button className={` w-[20rem] lg:w-[23rem] hover:bg-orange-400 dark:hover:bg-orange-500 rounded-lg px-5 py-2 text-xl font-bold ${display === 'education' ?
                    'bg-orange-400 dark:bg-orange-500 hover:cursor-default' : 'bg-orange-300 dark:bg-[#2e2e2e]'}`}
                    onClick={() => setDisplay('education')}>{t("resume_education")}</button>
            </div>
            <div className="relative flex justify-center">
                {display === 'about' && <About />}
                {display === 'skills' && <Skills languages={[
                    { icon: Html5, name: "Html5" },
                    { icon: Css3, name: 'Css3' },
                    { icon: Javascript, name: 'Javascript' },
                    { icon: Typescript, name: 'Typescript' },
                    { icon: Tailwind, name: 'TailwindCss' },
                    { icon: Sass, name: 'Sass' },
                    { icon: React, name: 'React' },
                    { icon: Nextjs, name: 'Nextjs' },
                    { icon: Nodejs, name: 'Nodejs' },
                    { icon: Postgresql, name: 'Postgresql' },
                    { icon: Prisma, name: 'Prisma' },
                    { icon: Express, name: 'Express' },
                    { icon: Figma, name: 'Figma' },
                    { icon: Openai, name: 'Openai' }
                ]} />}
                {display === 'experience' && <Experiences />}
                {display === 'education' && <Educations />}
            </div>
        </div>
    )
}

export default Resume