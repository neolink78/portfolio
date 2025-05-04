import { motion, AnimatePresence } from "framer-motion";

type SkillType = {
    languages: React.ComponentType<{ className: string }>[];
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
    return (
        <AnimatePresence>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <div className="flex flex-col gap-5 w-[45rem]">
                    <p className="text-3xl font-bold flex justify-center xl:justify-start">Skills</p>
                    <div className="grid grid-cols-4 gap-5">
                        {languages.map((Skill, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="bg-[#2e2e2e] py-3 rounded-lg flex justify-center items-center"
                            >
                                <Skill className="fill-black dark:fill-white w-10 h-10" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
