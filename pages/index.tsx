import { Experience } from "@/components/home/experience";
import { Icons } from "@/components/home/icons";
import Me from "@/components/home/motion";
import ParticlesBackground from "@/components/Particles";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col mt-12">
      <ParticlesBackground />
      <main className="flex text-white justify-between items-center">
        <div className="w-96 flex flex-col gap-5">

          <p className="text-7xl font-inspiration font-bold">Hello I&apos;m
            <span className="text-orange-500"> Thibaut</span>
          </p>
          <p className="font-text text-gray-200 italic text-lg/7">I&apos;m a passionate full-stack developer with a focus on building dynamic and efficient web applications.
            Since beginning my journey in 2022, I&apos;ve had the privilege of collaborating through multiple projects, sharpening my
            expertise in both front-end and back-end development, along with a variety of other skills.
          </p>
          <Icons />
        </div>
        <div>
          <Me />
        </div>
      </main>
      <Experience />
    </div>
  );
}

