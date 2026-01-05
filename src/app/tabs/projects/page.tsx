import { Metadata } from "next";
import ProjectFlip from "@/components/ProjectFlip";
import LogoBox from "@/components/LogoBox";
import ProjectCards from "@/components/ProjectCards";
import Button from "@/components/Button";
import { HiArrowRight } from "react-icons/hi";
import { PiShootingStar, PiCoffeeBold } from "react-icons/pi";
import Tag from "@/components/Tag";

export const metadata: Metadata = {
  title: "Mes Projets",
  description:
    "Présentation d'applications réelles et d'expérimentations qui combinent design, utilisabilité et ingénierie pour offrir des solutions soignées.",
};

export default function ProjectsPage() {
  return (
    <>
      <section
        className="sm:ml-8"
        aria-labelledby="my-projects"
        role="tabpanel"
      >
        <header className="mb-10 flex items-center gap-4">
          <LogoBox className="size-20 place-content-center">
            <ProjectFlip />
          </LogoBox>
          <h2 className="cursor-default text-2xl font-bold">
            Projets que j&apos;ai réalisés
          </h2>
        </header>
        <div className="mb-5 flex flex-wrap gap-3">
          <Tag
            icon={
              <PiShootingStar
                size={16}
                className="text-purple-500/70 dark:text-purple-300"
              />
            }
            label="Projets de qualité"
            className="dark:border-purple-300/40 dark:hover:bg-purple-300/10"
          />
          <Tag
            icon={
              <PiCoffeeBold
                size={16}
                className="text-indigo-500/70 dark:text-indigo-300"
              />
            }
            label="Propulsés par le café"
            className="dark:border-indigo-300/40 dark:hover:bg-indigo-300/10"
          />
        </div>
        <p className="mt-4 mb-10 cursor-default text-gray-500">
          Chaque projet est une histoire de curiosité transformée en code.
          J&apos;ai conçu des solutions qui ne se contentent pas de fonctionner,
          mais qui procurent aussi une bonne expérience, en combinant design, logique
          et souci du détail pour donner vie aux idées, de la première ligne jusqu&apos;au déploiement.
        </p>

        <ProjectCards />
        <div className="mt-12 flex justify-center">
          <Button
            text="Voir tous mes projets"
            icon={<HiArrowRight size={18} />}
            href="https://github.com/Khawla-Boukniter"
            title="Voir tous mes projets"
            newTab
          />
        </div>
      </section>
    </>
  );
}
