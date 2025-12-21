import { IconType } from "react-icons";
import { FaGraduationCap, FaClipboardList } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";

// Types

type ItemsConfig = {
    label: string;
    src: string;
    alt: string;
}

export type HardSkillsConfig = {
    category: string;
    items: ItemsConfig[];
}

export type SoftSkillsConfig = {
    label: string;
    icon: IconType; 
    color?: string; 
}

// Hard skills content

export const skills: HardSkillsConfig[] = [
    {
        category: "Langages",
        items: [
            { label: "Javascript", src: "/skills/javascript.svg", alt: "logo javascript" },
            { label: "Typescript", src: "/skills/typescript.svg", alt: "logo typescript" },
            { label: "HTML", src: "/skills/html.svg", alt: "logo html" },
            { label: "CSS", src: "/skills/css.svg", alt: "logo css" },
        ]
    },
    {
        category: "Front-end",
        items: [
            { label: "React js", src: "/skills/react.svg", alt: "logo react" },
            { label: "Svelte", src: "/skills/svelte.svg", alt: "logo svelte" },
            { label: "Tailwind", src: "/skills/tailwind.svg", alt: "logo tailwind" },
        ]
    },
    {
        category: "Back-end & Base de données",
        items: [
            { label: "Node js", src: "/skills/nodejs.svg", alt: "logo node" },
            { label: "Express js", src: "/skills/express-js.png", alt: "logo express" },
            { label: "PostgreSQL", src: "/skills/postgresql.svg", alt: "logo postgres" },
            { label: "Next js", src: "/skills/nextjs.svg", alt: "logo nextjs" },
        ]
    },
    {
        category: "CMS",
        items: [
            { label: "Drupal", src: "/skills/drupal.svg", alt: "logo drupal" },
            { label: "Wordpress", src: "/skills/wordpress.svg", alt: "logo wordpress" },
        ]
    }
];

// Soft Skills content

export const softSkills: SoftSkillsConfig[] = [
    { label: "Esprit d'équipe", icon: RiTeamFill, color: "#F74518" },
    { label: "Goût de l'apprentissage", icon: FaGraduationCap, color: "#38BDF8" },
    { label: "Curiosité", icon: BsFillPatchQuestionFill, color: "#6EBD4D" },
    { label: "Rigueur", icon: FaClipboardList },
    { label: "Résolution de problème", icon: FaGear, color: "#F2493B" },
];