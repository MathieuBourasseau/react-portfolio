import Image from "next/image";
import { IoMdFlame } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import React from 'react'

type ItemsConfig = {
    label: string;
    src: string;
    alt: string;
}

type HardSkillsConfig = {
    category: string;
    items: ItemsConfig[];
}

export default function Skills() {

    const skills : HardSkillsConfig[] = [
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
                { label: "Express js", src: "/skills/Xpressjs.png", alt: "logo express" },
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

    const softSkills = [
        { label: "Esprit d'équipe", icon: <RiTeamFill />  },
        { label: "Goût de l'apprentissage", icon: <FaGraduationCap /> },
        { label: "Curiosité", icon: <BsFillPatchQuestionFill /> },
        { label: "Rigueur", icon: <FaClipboardList /> },
        { label: "Résolution de problème", icon: <FaGear /> },
    ]

    return (
        <div className="text-center flex flex-col gap-6 py-[5%] px-[10%]">
            <h1 className="text-2xl text-white font-bold">Mes compétences</h1>

            {/* HARD SKILLS */}

            <section className="text-white flex flex-col gap-6">
                <div className="flex flex-col gap-6 py-8">
                    <h2 className="text-xl flex justify-center items-center uppercase p-4 rounded-lg gap-6 font-bold bg-[#F74518]">
                        <IoMdFlame className="text-[25px]"  />
                        Hard skills
                        <IoMdFlame className="text-[25px]" />
                    </h2>

                    {skills.map((skill, i) => (
                        <article
                            key={i}
                            className="flex flex-col gap-4"
                        >
                            <h3 className="text-lg font-bold text-text-center ">{skill.category}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {skill.items.map((icon, i) => (
                                    <div 
                                        key={i} 
                                        className="flex flex-col items-center rounded-xl p-6 gap-4 text-sm text-black bg-[#E2E8F0]">
                                        <div className="h-[40px]">
                                            <Image
                                                src={icon.src}
                                                width={30}
                                                height={25}
                                                alt={icon.alt}
                                                className="h-full w-auto object-contain"
                                             />
                                        </div>
                                         <p className="font-bold">{icon.label}</p>
                                    </div>
                                     
                                ))}
                            </div>

                        </article>
                    ))}

                </div>
                <div>
                    <h2 className="text-xl flex justify-center items-center uppercase p-4 rounded-lg gap-6 font-bold bg-[#F74518]">
                        <FaHandshake className="text-[25px]"  />
                        Soft skills
                        <FaHandshake className="text-[25px]" />
                    </h2>
                </div>
            </section>
        </div>
    )
}
