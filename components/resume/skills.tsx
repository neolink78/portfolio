import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "next-i18next";

type SkillType = {
    languages: { icon: React.ComponentType<{ className: string }>; name: string }[];
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export const Skills = ({ languages }: SkillType) => {
    const { t } = useTranslation('common')

    return (
        <AnimatePresence>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <div className="flex flex-col gap-5 xl:w-[45rem]">
                    <p className="text-3xl font-bold flex justify-center xl:justify-start">{t("resume_skills")}</p>
                    <div className="grid grid-cols-2 grid:grid-cols-3 gridxl:grid-cols-4 gap-5">
                        {languages.map(({ icon: SkillIcon, name }, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="relative group bg-orange-300 dark:bg-[#2e2e2e] py-2 rounded-lg flex justify-center items-center"
                            >
                                <SkillIcon className="fill-black dark:fill-white mx-[3.5rem] w-10 h-10 hover:cursor-pointer hover:fill-white hover:dark:fill-orange-500" />
                                <div className="absolute bottom-full mb-2 px-3 py-1 rounded-md bg-black dark:bg-white text-white dark:text-black text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
                                    {name}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
