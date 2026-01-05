import Logo1 from "@/assets/experience/exp_logo_1.jpg";
import { StaticImageData } from "next/image";

export interface Experience {
  id: string;
  name: string;
  role: string;
  duration: string;
  description: string[];
  logo: StaticImageData;
}

export const experienceData: Experience[] = [
  {
    id: "1",
    name: "ANEP (Agence Nationale des Équipements Publics)",
    role: "Stagiaire Développeuse Web Full Stack",
    duration: "Mai - Juillet 2025",
    logo: Logo1,
    description: [
      "Conception et développement d'une application web complète pour gérer les employés, compétences, modules, cycles et évaluations de formation.",
      "Implémentation du frontend réactif avec React.js et Tailwind CSS, garantissant une expérience utilisateur fluide et intuitive.",
      "Développement du backend avec Node.js, Express.js et Sequelize pour une gestion structurée des données.",
      "Intégration de MongoDB pour une gestion flexible des données et préparation au déploiement en environnement production.",
    ],
  },
];
