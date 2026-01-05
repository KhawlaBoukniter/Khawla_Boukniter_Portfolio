import { Metadata } from "next";
import LogoBox from "@/components/LogoBox";
import ExperienceFlip from "@/components/ExperienceFlip";
import ExperienceCard from "@/components/ExperienceCard";

export const metadata: Metadata = {
  title: "Expérience",
  description:
    "Expérience complète en développement full-stack et livraison de produits, avec un focus sur la création de solutions fiables et la collaboration étroite avec les équipes pour transformer les idées en résultats concrets.",
};

export default function ExperiencePage() {
  return (
    <section
      className="sm:ml-8"
      aria-labelledby="my-experience"
      role="tabpanel"
    >
      <div className="mb-10 flex items-center gap-4">
        <LogoBox className="size-20 place-content-center">
          <ExperienceFlip />
        </LogoBox>
        <h1 className="cursor-default text-2xl font-bold">Mon Expérience</h1>
      </div>

      <p className="mt-4 cursor-default text-gray-500">
        Il s'agit de construire des choses qui comptent, de développer des
        applications web propres et prêtes pour la production à la création
        d'expériences d'apprentissage engageantes. En chemin, j'ai appris à
        avancer rapidement, à résoudre des problèmes réels et à créer un travail
        qui a un impact concret.
      </p>

      <div className="mt-5 space-y-8">
        <ExperienceCard />
      </div>
    </section>
  );
}
