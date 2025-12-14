import React from 'react'

type logoConfig = {
    label: string;
    src: string;
    alt: string;
}

export default function Skills() {

    const logos = [
        { label: "HTML", src: "/skills/html.svg", alt: "logo html" },
        { label: "CSS", src: "/skills/css.svg", alt: "logo css" },
        { label: "Drupal", src: "/skills/drupal.svg", alt: "logo drupal" },
        { label: "Express js", src: "/skills/express.png", alt: "logo express" },
        { label: "Javascript", src: "javascript.svg", alt: "logo javascript" },
        { label: "Node js", src: "nodejs.svg", alt: "logo node" },
        { label: "PostgreSQL", src: "postgresql.svg", alt: "logo postgres" },
        { label: "React js", src: "react.svg", alt: "logo react" },
        { label: "Svelte", src: "svelte.svg", alt: "logo svelte" },
        { label: "Tailwind", src: "tailwind.svg", alt: "logo tailwind" },
        { label: "Typescript", src: "typescript.svg", alt: "logo typescript" },
        { label: "wordpress", src: "wordpress.svg", alt: "logo wordpress" },

    ]
    return (
        <>
            <h1 className="text-white font-bold">Mes compétences</h1>
        </>
    )
}
