import Image from "next/image";

import { motion } from "framer-motion";

type ItemsConfig = {
    label: string;
    src: string;
    alt: string;
}

type HardSkillsConfig = {
    category: string;
    items: ItemsConfig[];
}

type SoftSkillsConfig = {
    label: string;
    icon: React.ReactNode;
}

export default function Skills() {

    const skills: HardSkillsConfig[] = [
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

    const softSkills: SoftSkillsConfig[] = [
        { label: "Esprit d'équipe", icon: <RiTeamFill className="text-[#F74518]" /> },
        { label: "Goût de l'apprentissage", icon: <FaGraduationCap className="text-[#38BDF8]" /> },
        { label: "Curiosité", icon: <BsFillPatchQuestionFill className="text-[#6EBD4D]" /> },
        { label: "Rigueur", icon: <FaClipboardList /> },
        { label: "Résolution de problème", icon: <FaGear className="text-[#F2493B]" /> },
    ]

    return (
        <div className="text-center flex flex-col gap-6 py-[5%] lg:py-8 px-4 lg:px-10 xl:px-[10%]">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-2xl text-white font-bold lg:text-3xl mb-4"
            >
                Mes compétences
            </motion.h1>

            {/* MAIN CONTENT */}

            <section className="relative lg:z-20 text-white flex flex-col gap-6 max-w-[600px] mx-auto lg:rounded-xl lg:max-w-[1200px] lg:flex-row lg:items-start">

                {/* HARD SKILLS */}

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    className="w-full lg:w-2/3 flex flex-col gap-6 py-8 p-4 rounded-xl bg-neutral-900/50 backdrop-blur-sm border shadow-[0_0_15px_rgba(44,62,80,0.6)] border-[#2C3E50] lg:p-8">
                    <h2 className="text-xl flex justify-center items-center uppercase p-4 rounded-lg gap-6 font-bold bg-[#F74518] lg:mx-auto">
                        <IoMdFlame className="text-[25px]" />
                        Hard skills
                        <IoMdFlame className="text-[25px]" />
                    </h2>

                    {skills.map((skill, i) => (
                        <article
                            key={i}
                            className="flex flex-col gap-4 lg:py-4"
                        >
                            <h3 className="text-lg font-bold text-text-center ">{skill.category}</h3>
                            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
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

                </motion.div>

                {/* SOFT SKILLS */}

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    className="w-full lg:w-1/3 flex flex-col gap-6 py-8 p-4 bg-neutral-900/50 backdrop-blur-sm border rounded-xl shadow-[0_0_15px_rgba(44,62,80,0.6)] border-[#2C3E50] lg:p-8">
                    <h2 className="text-xl flex justify-center items-center uppercase p-4 rounded-lg gap-6 font-bold bg-[#F74518] lg:mx-auto lg:mb-4">
                        <FaHandshake className="text-[25px]" />
                        Soft skills
                        <FaHandshake className="text-[25px]" />
                    </h2>

                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 xl:grid-cols-2">
                        {softSkills.map((skill, i) => (
                            <article
                                key={i}
                                className="flex font-bold flex-col items-center rounded-xl p-6 gap-4 text-sm text-black bg-[#E2E8F0]"
                            >
                                <div className="text-[40px]">
                                    {skill.icon}
                                </div>
                                <p>{skill.label}</p>
                            </article>
                        ))}
                    </div>

                </motion.div>
            </section>
        </div>
    )
}
