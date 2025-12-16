import React from 'react'

type ProjectsConfig= {
  title: string;
  type: string;
  link: string;
}

export default function Projects() {

  const projects : ProjectsConfig = [
    {
      title: "Heros League",
      type: "Front-end",
      link: ""
    },
    {
      title: "Gaming Campus",
      type: "Front-end",
      link: ""
    },
    {
      title: "Booking app",
      type: "Full stack - SSR",
      link: ""
    },
    {
      title: "Carambar",
      type: "Full stack - API REST",
      link: ""
    },
    {
      title: "Coffee-shop",
      type: "Full stack - SSR",
      link: ""
    },
    {
      title: "Chat LLM",
      type: "Full stack - SSR",
      link: ""
    },
    
  ]

  return (
    <section className="relative z-10">
        <h1 className="text-white">Mes projets</h1>
    </section>
  )
}
