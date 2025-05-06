import { motion } from "framer-motion"
import { useTranslation } from "next-i18next";
import { Experience } from "./experience";

export const Experiences = () => {
    const { t } = useTranslation('common')

    return (
        <div className="flex flex-col gap-5 xl:w-[50rem]">
            <p className="text-3xl font-bold flex justify-center xl:justify-start">{t("resume_experience")}</p>
            <div className="flex mt-8">
                <div className="w-[0.02rem] bg-black dark:bg-white" />
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="ml-8 flex flex-col gap-5"
                >
                    <Experience
                        date={t("resume_experience_firstjob_date")}
                        job={t("resume_experience_firstjob_job")}
                        company={t("resume_experience_firstjob_company")}
                        description={t("resume_experience_firstjob_description")}
                    />
                    <Experience
                        date={t("resume_experience_secondjob_date")}
                        job={t("resume_experience_secondjob_job")}
                        company={t("resume_experience_secondjob_company")}
                        description={t("resume_experience_secondjob_description")}
                    />
                </motion.div>
            </div>
        </div>
    )
}