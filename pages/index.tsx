import ParticlesBackground from "@/components/Particles";
import { Github } from "@/lib/icons/github";
import { Instagram } from "@/lib/icons/instagram";
import { LinkedIn } from "@/lib/icons/linkedIn";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col mt-12">
    <ParticlesBackground />
    <main className="flex text-white justify-between items-center">
        <div className="w-96">
        <p className="text-7xl font-bold">Hello I&apos;m 
          <span className="text-orange-500"> Thibaut</span>
        </p>
        <p>I&apos;m a passionate full-stack developer with a focus on building dynamic and efficient web applications.
          Since beginning my journey in 2022, I&apos;ve had the privilege of collaborating through multiple projects, sharpening my 
          expertise in both front-end and back-end development, along with a variety of other skills.
        </p>
        <div className="flex justify-around mt-5">
        <a href="https://github.com/neolink78" target="_blank" rel="noopener noreferrer" 
        className="group rounded-full border border-orange-500 p-2 hover:bg-orange-500 hover:cursor-pointer"
        >
          <Github className="fill-white group-hover:fill-black transition-colors duration-300"/>
          </a>
          <a href="https://www.instagram.com/neolink78/" target="_blank" rel="noopener noreferrer"  
          className="group rounded-full border border-orange-500 p-2 hover:bg-orange-500 hover:cursor-pointer">
          <Instagram className="fill-white group-hover:fill-black transition-colors duration-300"/>
          </a>
          <a href="https://www.linkedin.com/in/thibaut-resse-36674015a/" target="_blank" rel="noopener noreferrer"
          className="group rounded-full border border-orange-500 p-2 hover:bg-orange-500 hover:cursor-pointer">
          <LinkedIn className="fill-white group-hover:fill-black transition-colors duration-300"/>
          </a>
        
        </div>
        </div>
        <div className="border-4 border-orange-500 rounded-lg">
        <Image alt="yo" src={'/picture.png'} width={500} height={500}/>
        </div>
      
    </main>
    <div className="flex justify-between mt-5">
    <p><span>26</span> months at current role</p>
    <p><span>26</span> months at current role</p>
    <p><span>26</span> months at current role</p>
    <p><span>26</span> months at current role</p>
    </div>
    </div>
  );
}

