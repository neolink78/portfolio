import { motion } from "framer-motion"


export const Education = () => {
    return (
        <div className="flex flex-col gap-5 w-[50rem]">
            <p className="text-3xl font-bold flex justify-center xl:justify-start">Education</p>
            <div className="flex mt-8">
                <div className="w-[0.02rem] bg-black dark:bg-white" />
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="ml-8 flex flex-col gap-5"
                >
                    <div>
                        <p className="text-orange-500 pl-1">March 2023 - September 2024</p>
                        <p className="text-xl font-bold">Full-stack Developer</p>
                        <div className="flex gap-1 items-center">
                            <p className="px-1 h-2 bg-orange-500 rounded-full" />
                            <p className="font-bold">Wild Code School</p>
                        </div>
                        <p className="w-[40rem]">
                            Internship to prepare a master degree obtained by the end of it. Learned graphQl, Apollo, NextJs, Fastify,
                            PostgreSql and many more tools !
                        </p>
                    </div>
                    <div>
                        <p className="text-orange-500 pl-1">September 2022 - March 2023</p>
                        <p className="text-xl font-bold">Full-stack Developer</p>
                        <div className="flex gap-1 items-center">
                            <p className="px-1 h-2 bg-orange-500 rounded-full" />
                            <p className="font-bold">Wild Code School</p>
                        </div>
                        <p className="w-[40rem]">
                            Learned Javascript through 5 months of studies where I&apos;ve been teached
                            Html5, Css3, Javascript, React, Vite, Nodejs, ExpressJs, MySql.
                        </p>
                    </div>


                </motion.div>
            </div>
        </div>
    )
}