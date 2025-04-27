import CountUp from "react-countup"

export const Experience = () => {

    function countMonths(): number {
        const start = new Date(2024, 8, 20);
        const today = new Date();
        const yearsDiff = today.getFullYear() - start.getFullYear();
        const monthsDiff = today.getMonth() - start.getMonth();

        return yearsDiff * 12 + monthsDiff;
    }

    return (
        <div className="flex justify-between mt-20">
            <p className="flex gap-4 items-center"><span className="flex gap-4 items-center ">
                <CountUp end={countMonths()} duration={5} className="text-4xl xl:text-5xl font-bold" />
            </span>
                Months at current role</p>
            <p className="flex gap-4 items-center"><span className="flex gap-4 items-center ">
                <CountUp end={2} duration={5} className="text-4xl xl:text-5xl font-bold" />
            </span>
                Years of professional experience</p>
            <p className="flex gap-4 items-center"><span className="flex gap-4 items-center ">
                <CountUp end={1} duration={5} className="text-4xl xl:text-5xl font-bold" />
            </span>
                Company worked at</p>
            <p className="flex gap-4 items-center"><span className="flex gap-4 items-center ">
                <CountUp end={2} duration={5} className="text-4xl xl:text-5xl font-bold" />
            </span>
                Technologies mastered</p>
        </div>
    )
}