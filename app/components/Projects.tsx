import Image from "next/image";
import React from 'react'
import { motion } from "framer-motion"


export default function Projects() {

    return (
        <section className="relative z-10 py-6 flex flex-col text-center">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-2xl text-white font-bold lg:text-3xl mb-4"
            >Mes projets</motion.h1>

            <motion.div 
                className="group grid grid-cols-1 place-items-center gap-6 py-8 px-[5%] md:grid-cols-2 md:mx-auto md:max-w-[900px] lg:max-w-[1200px] lg:grid-cols-3"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}>
                
                {projects.map((project, i) => (

                    project.available
                        ? (
                            <a
                                key={i}
                                href={project.link}
                                target="_blank"
                                className="
                            relative group/card flex flex-col items-center justify-center overflow-hidden text-sm text-white cursor-pointer  h-[200px] rounded-lg  transition-all duration-300 ease-in-out ring-0 w-full max-w-[450px] md:max-w-[350px] lg:max-w-[400px] hover:ring-2 hover:ring-[#2C3E50] ring-inset   hover:scale-105  hover:shadow-[0_0_10px_#2C3E50,0_0_20px_rgba(44,62,80,0.5),0_0_40px_rgba(44,62,80,0.3)]
                        "
                            >
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    fill
                                    className="absolute inset-0 object-cover object-center brightness-60 transition-all duration-300 group-hover/card:brightness-110"
                                >
                                </Image>
                                <div className="relative z-10 text-lg flex flex-col gap-4 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                                    <div>
                                        <h2 className="text-white">{project.title}</h2>
                                        <span className="text-[#F74518]">{project.type}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 items-center justify-center">

                                        {project.items.map((tech, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-1.5 border border-white/10 py-1 px-2.5 rounded-full bg-black/40 backdrop-blur-sm text-white"
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
                        ) : (
                            <div
                                key={i}
                                className="
                            relative group/card flex flex-col items-center justify-center overflow-hidden text-sm text-white h-[200px] rounded-lg  transition-all duration-300 ease-in-out ring-0 w-full max-w-[450px] md:max-w-[350px] lg:max-w-[400px]  hover:ring-2 hover:ring-[#2C3E50] ring-inset   hover:scale-105  hover:shadow-[0_0_10px_#2C3E50,0_0_20px_rgba(44,62,80,0.5),0_0_40px_rgba(44,62,80,0.3)]
                        "
                            >
                                <Image
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-60"
                                    src={project.img}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    fill
                                    alt={project.title}
                                >
                                </Image>
                                <div className="relative z-10 text-lg font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                                    <div>
                                        <h2 className="text-white">{project.title}</h2>
                                        <span className="text-[#F74518]">{project.type}</span>
                                        <br />
                                        <span className="text-base">En cours de développement 💻</span>
                                    </div>
                                </div>

                            </div>
                        )
                ))}
            </motion.div>
        </section>
    )
}