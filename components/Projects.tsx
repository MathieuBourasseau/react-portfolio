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
            img:"/projects/heros.jpg",
            link: ""
        },
        {
            title: "Gaming Campus",
            type: "Front-end",
            img:"/projects/gaming-campus.jpg",
            link: ""
        },
        {
            title: "Booking app",
            type: "Full stack - SSR",
            img:"/projects/landscape.jpg",
            link: ""
        },
        {
            title: "Carambar",
            type: "Full stack - API REST",
            img:"/projects/bonbons.jpg",
            link: ""
        },
        {
            title: "Coffee-shop",
            type: "Full stack - SSR",
            img:"",
            link: ""
        },
        {
            title: "Chat LLM",
            type: "Full stack - SSR",
            img:"/projects/ia.jpg",
            link: ""
        },

    ]

    return (
        <section className="relative z-10 py-6 flex flex-col text-center">
            <h1 className="text-2xl text-white font-bold lg:text-3xl">Mes projets</h1>

            {/* PROJECTS PART */}

            <div className="flex flex-col gap-6 py-8 px-[5%]">

                {/* EACH PROJECT */}

                {projects.map((project, i) => (
                    <article 
                        key={i}
                        className="flex flex-col text-sm text-white bg-[#E2E8F0]"
                        style={{ backgroundImage: `url(${project.img})`}}
                    >
                        <h2 className="text-black">{project.title}</h2>
                        <span className="text-[#F74518]">{project.type}</span>

                    </article>
                ))}
            </div>
        </section>
    )
}
