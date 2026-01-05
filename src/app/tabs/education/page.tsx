import { Metadata } from "next";
import LogoBox from "@/components/LogoBox";
import EducationCard from "@/components/EducationCard";
import { GoTrophy } from "react-icons/go";
import { LiaMedalSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import EducationFlip from "@/components/EducationFlip";

export const metadata: Metadata = {
  title: "Formation",
  description:
    "Parcours éducatif qui a construit des bases solides en technologie et résolution de problèmes, façonnant ma manière d'aborder la création de solutions pratiques et scalables.",
};

export default function EducationPage() {
  return (
    <section
      className="sm:ml-8"
      aria-labelledby="my-academic-path"
      role="tabpanel"
    >
      <header className="mb-10 flex items-center gap-4">
        <LogoBox className="size-20 place-content-center">
          <EducationFlip />
        </LogoBox>
        <h2 className="cursor-default text-2xl font-bold">Mon Parcours Académique</h2>
      </header>
      <p className="mt-4 cursor-default text-gray-500">
        D'une apprenante curieuse à l'excellence académique, mon parcours universitaire
        a été celui de la croissance. Tout au long du chemin, j'ai su équilibrer
        résultats académiques et passion, en organisant des événements techniques
        qui ont affiné mon leadership et ma créativité.
      </p>

      <section className="relative mt-8" aria-labelledby="Academic-timeline">
        <h3 id="timeline-heading" className="sr-only">
          Chronologie de la formation
        </h3>
        <EducationCard />
      </section>

    </section>
  );
}
