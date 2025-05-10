import { useTranslation } from "next-i18next";

export const About = () => {
    const { t } = useTranslation('common')
    return (
        <div className="flex flex-col gap-5 xl:w-[30rem] items-center xl:items-start">
            <p className="text-3xl font-bold">{t("resume_about")}</p>
            <p className="text-lg">{t("resume_about_description")}</p>
        </div>

    )
}