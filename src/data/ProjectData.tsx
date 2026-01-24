import { ReactNode } from "react";
import { StaticImageData } from "next/image";

import { FaReact, FaLaravel, FaStripe, FaPhp, FaLinux, FaTerminal, FaCode, FaPython, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiC, SiDjango, SiSqlite } from "react-icons/si";
import { TbCube3dSphere } from "react-icons/tb";
import { MdMemory } from "react-icons/md";

import ProjectImg1 from "@/assets/projects/artspace-mock.png";
import ProjectImg2 from "@/assets/projects/simpleShell.gif";
// import ProjectImg3 from "@/assets/projects/basicblogger-mock.webp";

export interface SkillTag {
  icon: ReactNode;
  label: string;
  className?: string;
}

export interface ProjectData {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
  skills: SkillTag[];
  repo: string;
  live: string;
  details: string[];
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "ArtSpace",
    image: ProjectImg1,
    description:
      "Plateforme de galerie d'art virtuelle 3D avec portfolios artistes, billetterie événements et paiements sécurisés",
    skills: [
      { icon: <FaReact size={16} className="text-cyan-400" />, label: "React" },
      { icon: <FaLaravel size={16} className="text-red-500" />, label: "Laravel" },
      { icon: <TbCube3dSphere size={16} className="text-purple-400" />, label: "Three.js" },
      { icon: <SiTailwindcss size={16} className="text-teal-400" />, label: "Tailwind CSS" },
      { icon: <FaStripe size={16} className="text-indigo-400" />, label: "Stripe" },
      { icon: <FaPhp size={16} className="text-blue-400" />, label: "PHP" },
    ],
    repo: "https://github.com/KhawlaBoukniter/ArtSpace",
    live: "", // TODO: ajoute ton lien si tu le déploies
    details: [
      "J'ai développé une application full-stack permettant aux artistes d'exposer leurs œuvres dans des galeries 3D immersives créées avec Three.js",
      "J'ai implémenté un système complet de gestion d'événements avec billetterie, réservations, paiements Stripe et génération de QR codes",
      "J'ai conçu une architecture backend Laravel avec authentification multi-rôles (Admin, Artiste, Visiteur) et 13 modèles Eloquent interconnectés",
      "J'ai intégré des animations fluides et une interface moderne en Tailwind CSS pour une expérience utilisateur premium",
    ],
  },

  {
    id: 2,
    title: "Simple Shell",
    image: ProjectImg2,
    description:
      "Interpréteur de commandes UNIX en C avec support des opérateurs logiques, variables d'environnement et builtins avancés",
    skills: [
      { icon: <SiC size={16} className="text-blue-600" />, label: "C" },
      { icon: <FaLinux size={16} className="text-yellow-500" />, label: "Linux" },
      { icon: <FaTerminal size={16} className="text-gray-700 dark:text-gray-300" />, label: "Unix" },
      { icon: <MdMemory size={16} className="text-purple-600" />, label: "System Programming" },
      { icon: <FaCode size={16} className="text-green-600" />, label: "Algorithms" },
    ],
    repo: "https://github.com/KhawlaBoukniter/simple_shell",
    live: "https://khawlaboukniter.github.io/simple_shell/",
    details: [
      "J'ai implémenté un shell UNIX complet en C avec gestion des processus via fork/exec et recherche automatique dans le PATH",
      "J'ai développé des commandes intégrées (exit, cd, env, setenv, unsetenv, history, alias, help) avec parsing robuste",
      "J'ai intégré le support des opérateurs logiques (&&, ||, ;) et le remplacement de variables ($?, $$, $VARIABLE)",
      "J'ai conçu une architecture modulaire avec gestion rigoureuse de la mémoire, listes chaînées et historique persistant",
    ],
  },

  {
    id: 3,
    title: "BasicBlogger",
    image: ProjectImg2,
    description:
      "Plateforme de blog Django avec système de commentaires, authentification et gestion de profils utilisateurs.",
    skills: [
      { icon: <FaPython size={16} className="text-yellow-500" />, label: "Python" },
      { icon: <SiDjango size={16} className="text-green-600" />, label: "Django" },
      { icon: <SiSqlite size={16} className="text-sky-600" />, label: "SQLite" },
      { icon: <FaBootstrap size={16} className="text-purple-600" />, label: "Bootstrap" },
      { icon: <FaHtml5 size={16} className="text-orange-500" />, label: "HTML5" },
      { icon: <FaCss3Alt size={16} className="text-blue-500" />, label: "CSS3" },
    ],
    repo: "https://github.com/MRX-Baiz/posts",
    live: "https://khawla0.pythonanywhere.com/",
    details: [
      "J'ai développé un système CRUD complet pour les articles de blog avec permissions basées sur les utilisateurs",
      "J'ai implémenté un système d'authentification (inscription, connexion, récupération de mot de passe par email)",
      "J'ai créé un système de commentaires permettant aux utilisateurs d'interagir sur les articles",
      "J'ai intégré la gestion de profils avec upload d'images et validation des extensions de fichiers",
      "J'ai conçu une interface responsive avec Bootstrap et Django Crispy Forms",
    ],
  },
];
