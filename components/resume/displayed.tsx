import { About } from "@/components/resume/about"
import { Skills } from "@/components/resume/skills"
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

type DisplayedType = {
    display: string
}


export const Displayed = ({ display }: DisplayedType) => {
    return (
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
    )
}