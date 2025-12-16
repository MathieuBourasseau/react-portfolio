import React from 'react'

type ProjectsConfig = {
    title: string;
    type: string;
    link: string;
    img: string;
}

export default function Projects() {

    const projects: ProjectsConfig[] = [
        {
            title: "Heros League",
            type: "Front-end",
            img: "/projects/heros.jpg",
            link: "https://projet-heros.vercel.app/"
        },
        {
            title: "Gaming Campus",
            type: "Front-end",
            img: "/projects/gaming-campus.jpg",
            link: "#"
        },
        {
            title: "Booking app",
            type: "Full stack - SSR",
            img: "/projects/landscape.jpg",
            link: "#"
        },
        {
            title: "Carambar",
            type: "Full stack - API REST",
            img: "/projects/bonbons.jpg",
            link: "#"
        },
        {
            title: "Coffee-shop",
            type: "Full stack - SSR",
            img: "",
            link: "#"
        },
        {
            title: "Chat LLM",
            type: "Full stack - SSR",
            img: "/projects/ia.jpg",
            link: "#"
        },

    ]

    return (
        <section className="relative z-10 py-6 flex flex-col text-center">
            <h1 className="text-2xl text-white font-bold lg:text-3xl">Mes projets</h1>

            {/* PROJECTS PART */}

            <div className="group grid grid-cols-1 gap-6 py-8 px-[5%]">

                {/* EACH PROJECT */}

                {projects.map((project, i) => (
                    <a
                        key={i}
                        href={project.link}
                        target="_blank"
                        className="
                            relative group/card flex flex-col items-center justify-center overflow-hidden text-sm text-white cursor-pointer  h-[200px] rounded-lg  transition-all duration-300 ease-in-out ring-0  hover:ring-2 hover:ring-[#2C3E50] ring-inset   hover:scale-105  hover:shadow-[0_0_10px_#2C3E50,0_0_20px_rgba(44,62,80,0.5),0_0_40px_rgba(44,62,80,0.3)]
                        "
                    >
                        {/* BACKGROUND OF EACH PROJECT */}
                        <div
                            className="absolute inset-0  bg-cover bg-center bg-no-repeat brightness-60 
                           group-hover/card:!blur-none group-hover:blur-[2px] hover:!blur-none hover:brightness-110 "
                            style={{ backgroundImage: `url(${project.img})` }}
                        >

                        {/* TEXTS */}

                        </div>
                        <div className="relative z-10 text-lg font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            <h2 className="text-white">{project.title}</h2>
                            <span className="text-[#F74518]">{project.type}</span>
                        </div>

                    </a>
                ))}
            </div>
        </section>
    )
}
