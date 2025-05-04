import { motion } from "framer-motion"

export const Experience = () => {
    return (
        <div className="flex flex-col gap-5 xl:w-[50rem]">
            <p className="text-3xl font-bold flex justify-center xl:justify-start">My experience</p>
            <div className="flex mt-8">
                <div className="w-[0.02rem] bg-black dark:bg-white" />
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="ml-8 flex flex-col gap-5"
                >
                    <div>
                        <p className="dark:text-orange-500 pl-1">September 2024 - Present</p>
                        <p className="text-xl font-bold">Full-stack Developer</p>
                        <div className="flex gap-1 items-center">
                            <p className="px-1 h-2 bg-orange-500 rounded-full" />
                            <p className="font-bold">Freelance</p>
                        </div>
                        <p className="xl:w-[40rem]">
                            Developing and maintaining configurable applications for several customers mainly using Nextjs and Nodejs.
                        </p>
                    </div>

                    <div>
                        <p className="dark:text-orange-500 pl-1">Mars 2023 - September 2024</p>
                        <p className="text-xl font-bold">Full-stack Developer</p>
                        <div className="flex gap-1 items-center">
                            <p className="px-1 h-2 bg-orange-500 rounded-full" />
                            <p className="font-bold">Pulselab</p>
                        </div>
                        <p className="xl:w-[40rem]">
                            Work-study program.<br />
                            Work part: Made 2 websites from scratch in a pair, a case opening site and an online sports betting site.<br />
                            Study part: Made an IDE similar to CodeSandbox with 3 other students.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}