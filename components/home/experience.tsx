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
        <div className="mx-auto grid grid-cols-2 gap-5 justify-center lg:gap-2 lg:flex lg:justify-between mt-10 lg:mt-20">
            <p className="flex gap-4 items-center w-[7rem] lg:w-[13rem]"><span className="flex gap-4 items-center">
                <CountUp end={countMonths()} duration={5} className="text-4xl xl:text-5xl font-bold" />
            </span>
                Months at current role</p>
            <p className="flex gap-4 items-center w-[7rem] lg:w-[13rem]"><span className="flex gap-4 items-center ">
                <CountUp end={2} duration={5} className="text-4xl xl:text-5xl font-bold" />
            </span>
                Years of professional experience</p>
            <p className="flex gap-4 items-center w-[7rem] lg:w-[13rem]"><span className="flex gap-4 items-center ">
                <CountUp end={1} duration={5} className="text-4xl xl:text-5xl font-bold" />
            </span>
                Company worked at</p>
            <p className="flex gap-4 items-center w-[7rem] lg:w-[13rem]"><span className="flex gap-4 items-center ">
                <CountUp end={2} duration={5} className="text-4xl xl:text-5xl font-bold" />
            </span>
                Technologies mastered</p>
        </div>
    )
}