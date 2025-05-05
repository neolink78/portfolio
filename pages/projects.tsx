import { Project } from "@/components/projects/project"


const Projects = () => {
    return (
        <div className="flex flex-col gap-5">
            <Project
                title="L'atelier de Bernard"
                description="Website showcasing paintings made by a painter located in the North-West of France.
                        It has been the first project done by myself  from scratch."
                link='https://atelier-de-bernard.vercel.app'
                githubLink="https://github.com/neolink78/atelier-de-bernard"
                image="atelier.png"
                imageClass="mt-5 w-full h-[30rem]"
                isWebsite
            />
            <Project
                title="Epic free games"
                description="Robot made to scrap data from the Epic Games store to train myself with easy scrapping using Got. 
                Available through discord to respond to query commands which provides current and next week's free games."
                link='https://shorturl.at/zcrtW'
                githubLink="https://github.com/neolink78/EpicFreeGames"
                image="bot.png"
                imageClass="mt-5 w-full h-[40rem]"
            />
        </div>
    )
}
export default Projects