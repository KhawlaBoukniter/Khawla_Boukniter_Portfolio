import { ReactNode } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaJava,
  FaDocker,
  FaTrello,
  FaCode,
  FaTerminal,
  FaSitemap ,
  FaExchangeAlt 
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiPhp,
  SiLaravel,
  SiPostgresql,
  SiMysql,
  SiDjango,
  SiPython,
  SiSpringboot,
  SiSpringsecurity,
  SiSequelize,
  SiApachemaven,
  SiSwagger,
  SiJunit5,
  SiSelenium,
  SiJira,
  SiGithubactions ,
} from "react-icons/si";

import { DiScrum } from "react-icons/di";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

import { MdViewKanban } from "react-icons/md";

export type SkillTag = {
  icon: ReactNode;
  label: string;
  className?: string;
};

export const SkillSections: { title: string; skills: SkillTag[] }[] = [
  {
    title: "Frontend",
    skills: [
      { icon: <FaHtml5 />, label: "HTML" },
      { icon: <FaCss3Alt />, label: "CSS" },
      { icon: <SiJavascript />, label: "JavaScript" },
      { icon: <FaReact />, label: "React.js" },
      { icon: <RiTailwindCssFill />, label: "Tailwind CSS" },
      { icon: <TbBrandFramerMotion />, label: "Three.js" },
      { icon: <FaReact />, label: "Angular" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: <SiPhp />, label: "PHP" },
      { icon: <SiPython />, label: "Python" },
      { icon: <FaJava />, label: "Java" },
      { icon: <FaNodeJs />, label: "Node.js" },

      { icon: <SiLaravel />, label: "Laravel" },
      { icon: <SiDjango />, label: "Django" },
      { icon: <SiSpringboot />, label: "Spring Boot" },
      { icon: <SiSpringsecurity />, label: "Spring Security" },
      { icon: <SiExpress />, label: "Express.js" },
      { icon: <FaJava />, label: "JEE" },
      { icon: <SiSequelize />, label: "Sequelize" },
      { icon: <FaNodeJs />, label: "API REST" },
    ],
  },

  {
    title: "Databases",
    skills: [
      { icon: <SiPostgresql />, label: "PostgreSQL" },
      { icon: <SiMysql />, label: "MySQL" },
      { icon: <SiMongodb />, label: "MongoDB" },
    ],
  },
  {
    title: "Outils & DevOps",
    skills: [
      { icon: <FaGitAlt />, label: "Git" },
      { icon: <FaGithub />, label: "GitHub" },
      { icon: <FaFigma />, label: "Figma" },
      { icon: <SiPostman />, label: "Postman" },
      { icon: <FaDocker />, label: "Docker" },
      { icon: <SiApachemaven />, label: "Maven" },
      { icon: <SiSwagger />, label: "Swagger" },
    ],
  },
  {
    title: "Tests & Méthodologies",
    skills: [
      { icon: <SiJunit5 />, label: "JUnit 5" },
      { icon: <FaCode />, label: "Mockito" },
      { icon: <FaCode />, label: "Jacoco" },
      { icon: <SiSelenium />, label: "Selenium" },
      { icon: <DiScrum />, label: "Scrum" },
      { icon: <MdViewKanban />, label: "Kanban" },
      { icon: <SiJira />, label: "Jira" },
      { icon: <FaTrello />, label: "Trello" },
    ],
  },
  {
    title: "Autres",
    skills: [
      { icon: <FaTerminal />, label: "C" },
      { icon: <FaSitemap  />, label: "UML" },
      { icon: <SiGithubactions  />, label: "CI/CD" },
      { icon: <FaExchangeAlt  />, label: "Kafka" },
    ],
  },
];
