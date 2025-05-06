type EducationType = {
    date: string
    job: string
    school: string
    description: string
}

export const Education = ({ date, job, school, description }: EducationType) => {
    return (
        <div>
            <p className="dark:text-orange-500 pl-1">{date}</p>
            <p className="text-xl font-bold">{job}</p>
            <div className="flex gap-1 items-center">
                <p className="px-1 h-2 bg-orange-500 rounded-full" />
                <p className="font-bold">{school}</p>
            </div>
            <p className="xl:w-[40rem]">
                {description}
            </p>
        </div>
    )
}