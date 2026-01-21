import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import Profile from "@/assets/khawla_profile.png";

export default function AboutPage() {
  return (
    <div className="relative divide-y rounded-none bg-white shadow-2xl md:rounded-xl dark:bg-[#242533]">
      <div>
        <section className="relative flex py-4">
          <div className="absolute left-0 h-full w-px">
            <div
              className="absolute bg-gradient-to-b"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--glow-color), transparent)",
                height: "87.8732%",
                width: "100%",
              }}
            />
            <div
              className="absolute -ml-px w-0.5 bg-gradient-to-b opacity-60"
              style={{
                background: "linear-gradient(transparent, white, transparent)",
                height: "87.8732%",
                width: "100%",
              }}
            />
            <div
              className="absolute -ml-0.5 w-1 opacity-100 blur-sm"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--glow-color), transparent)",
                height: "87.8732%",
                width: "100%",
              }}
            />
            <div
              className="absolute -ml-1 w-2 opacity-80 blur-md"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--glow-color), transparent)",
                height: "87.8732%",
                width: "100%",
              }}
            />
            <div
              className="absolute -ml-2 w-4 opacity-60 blur-lg"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--glow-color), transparent)",
                height: "87.8732%",
                width: "100%",
              }}
            />
          </div>

          <div className="wl-8 mx-auto max-w-4xl space-y-8 ml-8">
            <section className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
              {/* Photo */}
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-3xl shadow-2xl lg:mx-0 lg:h-20 lg:w-20">
                <Image
                  src={Profile}
                  alt="Khawla Boukniter - Développeuse Full-Stack"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  priority
                />
              </div>

              <div className="flex-1 space-y-6">
                <h3 className="cursor-default text-2xl font-bold">Who Am I?</h3>
              </div>
            </section>

            <section className="mt-4 cursor-default space-y-6 text-sm leading-relaxed md:text-base dark:text-gray-500">
              <div className="mt-5 flex cursor-default flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-400/40 bg-transparent px-3 py-1 text-sm text-gray-700 transition duration-300 dark:border-emerald-900 dark:text-gray-300 dark:hover:bg-emerald-500/10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-emerald-500 dark:text-emerald-300"
                    height="17"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                    data-darkreader-inline-stroke=""
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zm0 17.96c-4.4 0-7.98-3.58-7.98-7.98S7.6 4.02 12 4.02 19.98 7.6 19.98 12 16.4 19.98 12 19.98zM12.75 5l-4.5 8.5h3.14V19l4.36-8.5h-3z"></path>
                  </svg>
                  <span>Available for work</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-400/40 bg-transparent px-3 py-1 text-sm text-gray-700 transition duration-300 dark:border-pink-300/40 dark:text-gray-300 dark:hover:bg-pink-300/10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-pink-500/70 dark:text-pink-300"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    data-darkreader-inline-stroke=""
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z"></path>
                  </svg>
                  <span>Hands-on Project Experience</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-400/40 bg-transparent px-3 py-1 text-sm text-gray-700 transition duration-300 dark:border-orange-300/40 dark:text-gray-300 dark:hover:bg-orange-400/10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-orange-400 dark:text-orange-300"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                    data-darkreader-inline-stroke=""
                  >
                    <path
                      fill="none"
                      stroke-width="2"
                      d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
                    ></path>
                  </svg>
                  <span>Safi, Maroc</span>
                </div>
              </div>
              <p>
                Je suis une développeuse web full-stack passionnée par la création
                d'expériences numériques impactantes et performantes. Mon objectif
                est de transformer les idées en solutions web scalables et
                élégantes.
                <br /> <br />
                Actuellement en formation de Développement Web Full Stack à YouCode
                (UM6P), j'ai acquis une solide expertise en technologies frontend et
                backend. Mon parcours inclut une certification en Software
                Engineering d'ALX et une expérience en tant que stagiaire full-stack
                chez l'ANEP.
              </p>
            </section>

            <section className="mt-4 cursor-default space-y-6">
              <h3 className="cursor-default text-2xl font-bold">Ma Philosophie</h3>
              <p className="text-sm leading-relaxed md:text-base dark:text-gray-500">
                Je crois que chaque projet raconte une histoire. Mon approche
                privilégie l'attention aux détails, la performance et la création
                d'interfaces intuitives qui font plaisir à utiliser. Je suis très
                attachée à l'apprentissage continu et à l'amélioration constante.
              </p>
            </section>

            <section className="mt-4 cursor-default space-y-6">
              <h3 className="cursor-default text-2xl font-bold">Au-delà du Code</h3>
              <p className="text-sm leading-relaxed md:text-base dark:text-gray-500">
                Hors du développement, j'aime explorer de nouvelles technologies,
                apprendre sur l'intelligence artificielle et résoudre des défis
                techniques. Je suis toujours ouverte à de nouvelles opportunités et
                collaborations stimulantes.
              </p>
            </section>

            <div className="mt-7 flex flex-wrap gap-3">
              <div className="group relative flex w-fit select-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-pink-300 to-indigo-500 opacity-60 blur-lg filter transition-all duration-1000 group-hover:duration-200 dark:opacity-45 dark:group-hover:opacity-65"></div>
                <a
                  href="/Khawla-Boukniter_CV.pdf"
                  download=""
                  title="Get my Resume"
                  className="group relative flex items-center justify-center rounded-xl bg-gray-800 px-8 py-2 text-base font-semibold whitespace-nowrap text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-600/30 dark:bg-gray-900"
                >
                  <span>Get my Resume</span>
                  <span className="ml-2 flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  data-darkreader-inline-stroke=""
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.469 5.469 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4 4-4h-2.55z"></path>
                </svg>
              </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
