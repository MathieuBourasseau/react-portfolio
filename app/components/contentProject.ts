type ProjectsConfig = {
    title: string;
    type: string;
    link: string;
    img: string;
    items: TechConfig[],
    available: boolean;
}

type TechConfig = {
    icon: string;
    tech: string;
    invert?: boolean;
}

// Content for Projects.tsx

export const projects: ProjectsConfig[] = [
        {
            title: "Heros League",
            type: "Front-end",
            img: "/projects/heros.jpg",
            link: "https://projet-heros.vercel.app/",
            items: [
                { icon: "/skills/html.svg", tech: "html" },
                { icon: "/skills/css.svg", tech: "css" }
            ],
            available: true,
        },
        {
            title: "Gaming Campus",
            type: "Front-end",
            img: "/projects/gaming-campus.jpg",
            link: "https://gaming-campus-eight.vercel.app/",
            items: [
                { icon: "/skills/html.svg", tech: "html" },
                { icon: "/skills/css.svg", tech: "css" }
            ],
            available: true,
        },
        {
            title: "Stage Younivibe",
            type: "Front-end",
            img: "/projects/logo-younivibe.png",
            link: "https://younivibe-stage.vercel.app/",
            items: [
                { icon: "/skills/react.svg", tech: "react js" },
                { icon: "/skills/tailwind.svg", tech: "tailwind" },
                { icon: "/skills/css.svg", tech: "css" },
                { icon: "/skills/nodejs.svg", tech: "node js", invert: true },
                { icon: "/skills/nextjs.svg", tech: "next js", invert: true },
                { icon: "/skills/typescript.svg", tech: "typescript" },
            ],
            available: true,

        },
        {
            title: "Carambar",
            type: "Full stack - API REST",
            img: "/projects/bonbons.jpg",
            link: "https://carambar-front-psi.vercel.app/",
            items: [
                { icon: "/skills/html.svg", tech: "html" },
                { icon: "/skills/css.svg", tech: "css" },
                { icon: "/skills/nodejs.svg", tech: "node js", invert: true },
                { icon: "/skills/express-js.png", tech: "express", invert: true },
            ],
            available: true,
        },
        {
            title: "Booking app",
            type: "Full stack - SSR",
            img: "/projects/landscape.jpg",
            link: "https://booking-app-production-f97c.up.railway.app/",
            items: [
                { icon: "/skills/html.svg", tech: "ejs" },
                { icon: "/skills/tailwind.svg", tech: "tailwind" },
                { icon: "/skills/nodejs.svg", tech: "node js", invert: true },
                { icon: "/skills/express-js.png", tech: "express", invert: true },
            ],
            available: true,

        },
        {
            title: "Coffee-shop",
            type: "Full stack - SSR",
            img: "/projects/coffee.jpg",
            link: "#",
            items: [
                { icon: "/skills/html.svg", tech: "html" },
                { icon: "/skills/css.svg", tech: "css" }
            ],
            available: false,
        },
        {
            title: "Chat LLM",
            type: "Full stack - SSR",
            img: "/projects/ia.jpg",
            link: "#",
            items: [
                { icon: "/skills/html.svg", tech: "html" },
                { icon: "/skills/css.svg", tech: "css" }
            ],
            available: false,
        },

    ]
