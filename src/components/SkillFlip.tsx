import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";
import { LogoFlipDeck, LogoItem } from "@/components/LogoFlipAnimation";
export default function SkillFlip() {
  return (
    <LogoFlipDeck
      items={[
        <LogoItem key="react" className="bg-sky-400 text-white">
          <FaReact />
        </LogoItem>,
        <LogoItem
          key="javascript"
          className="bg-yellow-300 text-neutral-900 dark:text-white"
        >
          <SiJavascript />
        </LogoItem>,
        <LogoItem key="tailwind" className="bg-sky-500 text-white">
          <SiTailwindcss />
        </LogoItem>,
        <LogoItem key="html" className="bg-orange-500 text-white">
          <SiHtml5 />
        </LogoItem>,
      ]}
    />
  );
}
