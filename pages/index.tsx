import ParticlesBackground from "@/components/Particles";

export default function Home() {
  return (
    <>
    <ParticlesBackground />
    <div className="flex text-white justify-center items-center min-h-screen">
      <main className="flex justify-center items-center"> 
        <p>Hello I'm Thibaut</p>
        <p>I'm a passionate full-stack developer with a focus on building dynamic and efficient web applications.
          Since beginning my journey in 2022, I've had the privilege of collaborating through multiple projects, sharpening my 
          expertise in both front-end and back-end development, along with a variety of other skills.
        </p>
      </main>
    </div>
    </>
  );
}

