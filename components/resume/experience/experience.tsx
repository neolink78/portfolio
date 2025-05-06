type ExperienceType = {
    date: string
    job: string
    company: string
    description: string
}

export const Experience = ({ date, job, company, description }: ExperienceType) => {
    const lines = description.split('<br />');

    return (
        <div>
            <p className="dark:text-orange-500 pl-1">{date}</p>
            <p className="text-xl font-bold">{job}</p>
            <div className="flex gap-1 items-center">
                <p className="px-1 h-2 bg-orange-500 rounded-full" />
                <p className="font-bold">{company}</p>
            </div>
            <div className="xl:w-[40rem]">
                {lines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
            </div>
        </div>
    );
}
