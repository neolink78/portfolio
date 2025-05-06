import { motion } from "framer-motion"
import { useTranslation } from "next-i18next";
import { Education } from "./education";

export const Educations = () => {
    const { t } = useTranslation('common')

    return (
        <div className="flex flex-col gap-5 xl:w-[50rem]">
            <p className="text-3xl font-bold flex justify-center xl:justify-start">{t("resume_education")}</p>
            <div className="flex mt-8">
                <div className="w-[0.02rem] bg-black dark:bg-white" />
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="ml-8 flex flex-col gap-5"
                >
                    <Education
                        date={t("resume_education_firsteducation_date")}
                        job={t("resume_education_firsteducation_job")}
                        school={t("resume_education_firsteducation_school")}
                        description={t("resume_education_firsteducation_description")}
                    />
                    <Education
                        date={t("resume_education_secondeducation_date")}
                        job={t("resume_education_secondeducation_job")}
                        school={t("resume_education_secondeducation_school")}
                        description={t("resume_education_secondeducation_description")}
                    />
                </motion.div>
            </div>
        </div>
    )
}