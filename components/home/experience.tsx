import CountUp from "react-countup"

export const Experience = () => {
    return (
        <div className="flex justify-between mt-20">
            <p className="flex gap-4 items-center"><span className="flex gap-4 items-center ">
                <CountUp end={26} duration={5} className="text-4xl xl:text-5xl font-bold" />
            </span>
                months at current role</p>
            <p className="flex gap-4 items-center"><span className="flex gap-4 items-center ">
                <CountUp end={2} duration={5} className="text-4xl xl:text-5xl font-bold" />
            </span>
                Years of professional experience</p>
            <p className="flex gap-4 items-center"><span className="flex gap-4 items-center ">
                <CountUp end={1} duration={5} className="text-4xl xl:text-5xl font-bold" />
            </span>
                company worked at</p>
            <p className="flex gap-4 items-center"><span className="flex gap-4 items-center ">
                <CountUp end={2} duration={5} className="text-4xl xl:text-5xl font-bold" />
            </span>
                technologies mastered</p>
        </div>
    )
}