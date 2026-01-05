import Image from "next/image";
import Logo1 from "@/assets/experience/exp_logo_1.jpg";
import { LogoFlipDeck, LogoItem } from "@/components/LogoFlipAnimation";

export default function ExperienceFlip() {
  return (
    <LogoFlipDeck
      items={[
        <LogoItem key="react" className="bg-red-50 pr-1.5 pl-2 dark:bg-white">
          <Image src={Logo1} alt="anep" />
        </LogoItem>,
      ]}
    />
  );
}
