import { useState } from "react"
import { React } from "@/lib/icons/skills/react"
import { getStaticPropsWithTranslations } from '@/hoc/serverSideProps';
import { useTranslation } from "next-i18next";
import { Buttons } from "@/components/resume/buttons"
import { Displayed } from "@/components/resume/displayed"

export const getStaticProps = getStaticPropsWithTranslations()

const Resume = () => {
    const [display, setDisplay] = useState('about')
    const { t } = useTranslation('common')

    return (
        <div className="text-black dark:text-white flex flex-col items-center xl:items-start xl:flex-row mt-40 gap-10">
            <Buttons display={display} setDisplay={setDisplay} t={t} />
            <Displayed display={display} />
        </div>
    )
}

export default Resume