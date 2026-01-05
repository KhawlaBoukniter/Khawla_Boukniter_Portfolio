import { Metadata } from "next";
import SkillFlip from "@/components/SkillFlip";
import LogoBox from "@/components/LogoBox";
import SkillCard from "@/components/SkillCard";
import { LuBrainCircuit } from "react-icons/lu";
import { MdAutoGraph } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import SkillTags from "@/components/SkillsTags";

export const metadata: Metadata = {
  title: "Mes Compétences",
  description:
    "Polyvalente en développement frontend et backend, créant des interfaces intuitives et des systèmes qui s'échelonnent facilement.",
};

export default function SkillsPage() {
  return (
    <section className="sm:ml-8" aria-labelledby="my-skills" role="tabpanel">
      <div className="mb-10 flex items-center gap-4">
        <LogoBox className="size-20 place-content-center">
          <SkillFlip />
        </LogoBox>
        <h1 className="cursor-default text-2xl font-bold">Mes Superpouvoirs</h1>
      </div>

      <div className="mt-4 cursor-default space-y-6 text-sm leading-relaxed text-gray-600 md:text-base dark:text-gray-500">
        <p>
          Chaque créateur a son arsenal d'outils, mais je préfère voir les miens comme
          des superpouvoirs. De la conception d'interfaces épurées à l'animation de
          backends puissants, ce sont ces compétences qui me permettent de transformer
          des idées en expériences concrètes.
        </p>
      </div>

      <div className="py-8 lg:px-2">
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <SkillCard icon={<LuBrainCircuit />} label="Résolution de Problèmes" />
          <SkillCard icon={<MdAutoGraph />} label="Optimisation Performance" />
          <SkillCard icon={<FaLaptopCode />} label="Design Responsive" />
        </div>
      </div>

      <SkillTags />
    </section>
  );
}
