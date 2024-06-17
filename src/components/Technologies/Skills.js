import { DiAndroid, DiTerminal, DiJavascript1 } from "react-icons/di";
import {
  SiJava,
  SiFirebase,
  SiGit,
  SiNextDotJs,
  SiRedux,
  SiMongodb,
} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { AiOutlineConsoleSql, AiFillCodeSandboxCircle } from "react-icons/ai";

export const Skills = [
  {
    slug: "React.js",
    title: "React.js",
    Description: () => <>Advanced</>,
    icon: <FaReact size={40} />,
  },
  {
    slug: "Next.js",
    title: "Next.js",
    Description: () => <>Intermediate</>,
    icon: <SiNextDotJs size={40} />,
  },
  {
    slug: "Redux.js Toolkit",
    // Component: SiJava,
    title: "Redux.js Toolkit",
    Description: () => <>Intermediate</>,
    icon: <SiRedux size={40} />,
  },
  {
    slug: "Node.js",
    title: "Node.js",
    Description: () => <>Intermediate</>,
    icon: <FaNodeJs size={40} />,
  },
  {
    slug: "JavaScript",
    title: "JavaScript",
    Description: () => <>Advanced</>,
    icon: <DiJavascript1 size={40} />,
  },
  {
    slug: "HTML/CSS",
    title: "HTML/CSS",
    Description: () => <>Advanced</>,
    icon: <TiHtml5 size={40} />,
  },
  {
    slug: "MySQL",
    title: "MySQL",
    Description: () => <>Beginner</>,
    icon: <AiOutlineConsoleSql size={40} />,
  },
  {
    slug: "MongoDB",
    title: "MongoDB",
    Description: () => <>Beginner</>,
    icon: <SiMongodb size={40} />,
  },
];
