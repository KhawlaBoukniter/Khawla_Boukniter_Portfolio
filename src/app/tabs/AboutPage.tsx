import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import Profile from "@/assets/khawla_profile.png";

export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <section className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
        {/* Photo */}
        <div className="relative w-28 h-28 lg:w-28 lg:h-28 rounded-3xl overflow-hidden ring-8 ring-white/30 shadow-2xl mx-auto lg:mx-0">
          <Image
            src={Profile}
            alt="Khawla Boukniter - Développeuse Full-Stack"
            fill
            className="object-cover hover:scale-105 transition-all duration-500"
            priority
          />
        </div>

        <div className="flex-1 space-y-6">
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
            Je suis une développeuse web full-stack passionnée par la création
            d'expériences numériques impactantes et performantes. Mon objectif est
            de transformer les idées en solutions web scalables et élégantes.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Mon Parcours
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Actuellement en formation de Développement Web Full Stack à YouCode
          (UM6P), j'ai acquis une solide expertise en technologies frontend et
          backend. Mon parcours inclut une certification en Software
          Engineering d'ALX et une expérience en tant que stagiaire full-stack
          chez l'ANEP.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Je maîtrise un large éventail de technologies : React.js, Next.js,
          Node.js, Express, PHP, Laravel, Python, Django, Java et Spring Boot.
          Côté bases de données, je travaille avec PostgreSQL, MySQL et
          MongoDB.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Ma Philosophie
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Je crois que chaque projet raconte une histoire. Mon approche
          privilégie l'attention aux détails, la performance et la création
          d'interfaces intuitives qui font plaisir à utiliser. Je suis très
          attachée à l'apprentissage continu et à l'amélioration constante.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Au-delà du Code
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Hors du développement, j'aime explorer de nouvelles technologies,
          apprendre sur l'intelligence artificielle et résoudre des défis
          techniques. Je suis toujours ouverte à de nouvelles opportunités et
          collaborations stimulantes.
        </p>
      </section>
    </div>
  );
}
