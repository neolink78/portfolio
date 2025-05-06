import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useTranslation } from "next-i18next";

const Motion = () => {
    const { resolvedTheme } = useTheme()
    const [showGlow, setShowGlow] = useState(false);
    const { t } = useTranslation('common')

    const isDarkMode = resolvedTheme === 'dark' ? true : false

    useEffect(() => {
        if (!isDarkMode) {
            const timer = setTimeout(() => setShowGlow(true), 2000);
            return () => clearTimeout(timer);
        }
    }, [isDarkMode]);

    const renderGlow = () =>
        !isDarkMode &&
        showGlow && (
            <motion.div
                className="absolute inset-0 w-[290px] h-[290px] xl:w-[440px] xl:h-[440px] bg-orange-500"
                style={{ borderRadius: '50%', filter: 'blur(60px)', opacity: 0.5 }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: [0.95, 1.05], opacity: [0.1, 0.6] }}
                transition={{
                    duration: 5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            />
        );

    const renderBorderAnimation = () => {
        if (isDarkMode) {
            return (
                <motion.rect
                    key="dark-mode-rect"
                    x="3"
                    y="3"
                    width="500"
                    height="500"
                    stroke="#f97316"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, strokeOpacity: 0.3 }}
                    animate={{ pathLength: 1, strokeOpacity: 1 }}
                    transition={{
                        duration: 3,
                        ease: 'easeInOut',
                        repeat: 0,
                    }}
                />
            );
        }

        return (
            <motion.rect
                key="light-mode-rect"
                x="3"
                y="3"
                width="500"
                height="500"
                stroke={isDarkMode ? '#f97217' : '#000'}
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: '10 10 10 10' }}
                animate={{ strokeDasharray: ['5 15 100 100', '25 50 75 100'] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            />
        );
    };

    return (
        <div className="w-full h-full relative">
            {renderGlow()}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 0.6,
                        ease: isDarkMode ? 'easeIn' : 'easeOut',
                    },
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 0.8,
                            duration: 0.6,
                            ease: isDarkMode ? 'easeIn' : 'easeInOut',
                        },
                    }}
                    className="relative w-[298px] h-[298px] xl:w-[390px] xl:h-[390px] bg:none"
                >
                    <Image alt="Thibaut" src={'/picture.png'} priority
                        quality={100}
                        fill
                        sizes="(max-width: 768px) 100vw, 
                    (max-width: 1200px) 50vw, 
                    33vw"
                        className="object-contain"
                    />

                    <div className="hidden lg:block absolute h-[1px] bottom-1 right-0 text-black dark:text-gray-500">
                        <span className="px-1 text-[9px]">
                            {t("index_imageai")}
                        </span>
                    </div>

                </motion.div>
                <motion.svg
                    className="dark:shadow-sm absolute top-0 left-0 w-[298px] h-[298px] xl:w-[390px] xl:h-[390px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {renderBorderAnimation()}
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Motion;