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
import { Experience } from "@/components/resume/experience"
import { Education } from "@/components/resume/education"


const Resume = () => {
    const [display, setDisplay] = useState('about')

    return (
        <div className="text-black dark:text-white min-h-screen flex flex-col items-center xl:items-start xl:flex-row mt-40 gap-10">
            <div className="flex flex-col gap-7">
                <button className={`hover:bg-orange-500 rounded-lg w-[23rem] px-5 py-2 text-xl font-bold ${display === 'about' ?
                    'bg-orange-500 hover:cursor-default' : 'bg-[#2e2e2e]'}`}
                    onClick={() => setDisplay('about')}>
                    About me
                </button>
                <button className={`hover:bg-orange-500 rounded-lg w-[23rem] px-5 py-2 text-xl font-bold ${display === 'skills' ?
                    'bg-orange-500' : 'bg-[#2e2e2e]'}`}
                    onClick={() => setDisplay('skills')}>Skills</button>
                <button className={`hover:bg-orange-500 rounded-lg w-[23rem] px-5 py-2 text-xl font-bold ${display === 'experience' ?
                    'bg-orange-500' : 'bg-[#2e2e2e]'}`}
                    onClick={() => setDisplay('experience')}>My experience</button>
                <button className={`hover:bg-orange-500 rounded-lg w-[23rem] px-5 py-2 text-xl font-bold ${display === 'education' ?
                    'bg-orange-500' : 'bg-[#2e2e2e]'}`}
                    onClick={() => setDisplay('education')}>Education</button>
            </div>
            <div className="relative flex justify-center">
                {display === 'about' && <About />}
                {display === 'skills' && <Skills languages={[
                    Html5, Css3, Javascript, Typescript, Tailwind, Sass, React, Nextjs, Nodejs, Postgresql, Prisma, Express, Figma, Openai
                ]} />}
                {display === 'experience' && <Experience />}
                {display === 'education' && <Education />}
            </div>
        </div>)
}

export default Resume