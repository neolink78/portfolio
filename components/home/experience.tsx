import CountUp from "react-countup"

export const Experience = () => {
    return (
        <div className="flex justify-between mt-5">
            <p><CountUp end={26} duration={5} /> months at current role</p>
            <p><span>2</span> Years of professional experience</p>
            <p><span>1</span> company worked at</p>
            <p><span>2</span> technologies mastered</p>
        </div>
    )
}