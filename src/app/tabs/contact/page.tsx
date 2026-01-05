import { Metadata } from "next";
import LogoBox from "@/components/LogoBox";
import ContactFlip from "@/components/ContactFlip";
import ContactForm from "@/components/ContactForm";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Contactez-moi",
  description:
    "Contactons-nous ! Que ce soit pour un projet, une collaboration ou simplement échanger des idées, je suis toujours ouverte aux conversations enrichissantes.",
};

export default function ContactPage() {
  return (
    <section
      className="sm:ml-8"
      aria-labelledby="contact-heading"
      role="region"
    >
      <header className="mb-10 flex items-center gap-4">
        <LogoBox aria-hidden="true" className="size-20 place-content-center">
          <ContactFlip />
        </LogoBox>

        <h2 id="contact-heading" className="cursor-default text-2xl font-bold">
          Contactez-moi
        </h2>
      </header>
      <p className="mt-4 cursor-default text-gray-500">
        Les grands projets commencent par de grandes conversations. Que vous souhaitiez
        échanger des idées, collaborer sur un projet excitant, ou simplement dire bonjour !
        Je suis toujours ouverte aux discussions enrichissantes. Contactons-nous et construisons
        quelque chose qui en vaille la peine.
      </p>
      <div className="relative h-full overflow-hidden">
        <div className="absolute top-1/2 w-[490px] -translate-x-[230px] -translate-y-1/2">
          <CallToAction />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
