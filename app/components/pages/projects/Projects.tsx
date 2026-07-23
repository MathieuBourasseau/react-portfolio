import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { projects } from "./contentProject";
import MainTitle from "../../reusable ui/MainTitle";

const containerVariants : Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        }
    }
};

const itemVariants : Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export default function Projects() {
    return (
        <section className="relative z-10 py-6 flex flex-col text-center">
            <MainTitle title="Mes projets"/>

            <motion.div 
                className="group grid grid-cols-1 place-items-center gap-6 py-8 px-[5%] md:grid-cols-2 md:mx-auto md:max-w-[900px] lg:max-w-[1200px] lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {projects.map((project, i) => (
                    project.available ? (
                        <motion.div
                            variants={itemVariants}
                            key={project.title}
                            className="relative w-full max-w-[450px] md:max-w-[350px] lg:max-w-[400px]"
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group/card flex flex-col items-center justify-center overflow-hidden text-sm text-white cursor-pointer h-[200px] rounded-lg transition-transform transition-shadow duration-300 ease-in-out ring-0 w-full hover:ring-2 hover:ring-[#2C3E50] ring-inset hover:scale-105 hover:shadow-[0_0_10px_#2C3E50,0_0_20px_rgba(44,62,80,0.5),0_0_40px_rgba(44,62,80,0.3)]"
                            >
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    fill
                                    priority={i < 4}
                                    className="absolute inset-0 object-cover object-center brightness-60 transition-all duration-300 group-hover/card:brightness-110"
                                />
                                <div className="relative z-10 text-lg flex flex-col gap-4 font-bold [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
                                    <div>
                                        <h2 className="text-white">{project.title}</h2>
                                        <span className="text-[#F74518]">{project.type}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 items-center justify-center">
                                        {project.items.map((tech) => (
                                            <div
                                                key={tech.tech}
                                                className="flex items-center gap-1.5 border border-white/10 py-1 px-2.5 rounded-full bg-black/70 text-white"
                                            >
                                                <div className="h-[18px]">
                                                    <Image
                                                        src={tech.icon}
                                                        width={18}
                                                        height={18}
                                                        alt={tech.tech}
                                                        className={`h-full brightness-110 ${tech.invert ? 'invert brightness-150' : ''}`}
                                                    />
                                                </div>
                                                <span className="text-[10px] font-medium uppercase tracking-wider">
                                                    {tech.tech}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </a>

                            {project.github && project.github.length > 0 && (
                                <div className="flex justify-center gap-4 mt-2">
                                    {project.github.map((gh) => (
                                        <a
                                            key={gh.link}
                                            href={gh.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-white/70 transition-colors duration-200 hover:text-[#F74518]"
                                        >
                                            <FaGithub size={12} />
                                            {gh.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ) : (
                        <motion.div
                            variants={itemVariants}
                            key={project.title}
                            className="relative group/card flex flex-col items-center justify-center overflow-hidden text-sm text-white h-[200px] rounded-lg transition-transform transition-shadow duration-300 ease-in-out ring-0 w-full max-w-[450px] md:max-w-[350px] lg:max-w-[400px] hover:ring-2 hover:ring-[#2C3E50] ring-inset hover:scale-105 hover:shadow-[0_0_10px_#2C3E50,0_0_20px_rgba(44,62,80,0.5),0_0_40px_rgba(44,62,80,0.3)]"
                        >
                            <Image
                                className="absolute inset-0 object-cover object-center brightness-60"
                                src={project.img}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                fill
                                priority={i < 4}
                                alt={project.title}
                            />
                            <div className="relative z-10 text-lg font-bold [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
                                <div>
                                    <h2 className="text-white">{project.title}</h2>
                                    <span className="text-[#F74518]">{project.type}</span>
                                    <br />
                                    <span className="text-base">En cours de développement 💻</span>
                                </div>
                            </div>
                        </motion.div>
                    )
                ))}
            </motion.div>
        </section>
    );
}