import { Experience } from "@/components/home/experience";
import { Icons } from "@/components/home/icons";
import Motion from "@/components/home/motion";
import ParticlesBackground from "@/components/Particles";
import { useTheme } from "next-themes";
import { getStaticPropsWithTranslations } from '@/hoc/serverSideProps';
import { useTranslation } from "next-i18next";

export const getStaticProps = getStaticPropsWithTranslations()

export default function Home() {
  const { resolvedTheme } = useTheme()
  const { t } = useTranslation('common')

  return (
    <div className='text-black dark:text-white flex flex-col mt-20 mb-5 lg:mb-0'>
      {resolvedTheme === 'dark' && <ParticlesBackground />}
      <main className="flex flex-col-reverse xl:flex-row justify-between items-center">
        <div className="xl:w-96 flex flex-col gap-5 ">
          <p className="flex flex-col items-center xl:block text-6xl xs:text-7xl font-inspiration font-bold mt-5 xl:mt-0">
            Hello I’m
            <span className="text-orange-500"> Thibaut</span>
          </p>
          <p className="font-text italic text-lg/7">
            {t("index_description")}
          </p>
          <Icons />
        </div>
        <div>
          <Motion />
        </div>
      </main>
      <Experience />
    </div>
  );
}

