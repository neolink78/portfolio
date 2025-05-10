type ButtonsType = {
    display: string
    setDisplay: (value: string) => void;
    t: (key: string) => string;
}

export const Buttons = ({ display, setDisplay, t }: ButtonsType) => {
    return (
        <div className="flex flex-col gap-7">
            <button className={` w-[20rem] lg:w-[23rem] hover:bg-orange-400 dark:hover:bg-orange-500 rounded-lg px-5 py-2 text-xl font-bold ${display === 'about' ?
                'bg-orange-400 dark:bg-orange-500 hover:cursor-default' : 'bg-orange-300 dark:bg-[#2e2e2e]'}`}
                onClick={() => setDisplay('about')}>
                {t("resume_about")}
            </button>
            <button className={` w-[20rem] lg:w-[23rem] hover:bg-orange-400 dark:hover:bg-orange-500 rounded-lg px-5 py-2 text-xl font-bold ${display === 'skills' ?
                'bg-orange-400 dark:bg-orange-500 hover:cursor-default' : 'bg-orange-300 dark:bg-[#2e2e2e]'}`}
                onClick={() => setDisplay('skills')}>{t("resume_skills")}</button>
            <button className={` w-[20rem] lg:w-[23rem] hover:bg-orange-400 dark:hover:bg-orange-500 rounded-lg px-5 py-2 text-xl font-bold ${display === 'experience' ?
                'bg-orange-400 dark:bg-orange-500 hover:cursor-default' : 'bg-orange-300 dark:bg-[#2e2e2e]'}`}
                onClick={() => setDisplay('experience')}>{t("resume_experience")}</button>
            <button className={` w-[20rem] lg:w-[23rem] hover:bg-orange-400 dark:hover:bg-orange-500 rounded-lg px-5 py-2 text-xl font-bold ${display === 'education' ?
                'bg-orange-400 dark:bg-orange-500 hover:cursor-default' : 'bg-orange-300 dark:bg-[#2e2e2e]'}`}
                onClick={() => setDisplay('education')}>{t("resume_education")}</button>
        </div>)
}