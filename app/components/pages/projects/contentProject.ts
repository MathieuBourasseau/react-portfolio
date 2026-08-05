type ProjectsConfig = {
    title: string;
    type: string;
    link: string;
    img: string;
    items: TechConfig[],
    available: boolean;
    github?: GithubConfig[];
    inProgress?: boolean;
}

type TechConfig = {
    icon: string;
    tech: string;
    invert?: boolean;
}

type GithubConfig = {
    label: string;
    link: string;
}

// Content for Projects.tsx

export const projects: ProjectsConfig[] = [
     {
        title: "App de suivi de candidatures",
        type: "Full stack - API REST",
        img: "/projects/job-tracker.jpg",
        link: "https://github.com/MathieuBourasseau/backend-job-tracker",
        items: [
            { icon: "/skills/react.svg", tech: "react js" },
            { icon: "/skills/tailwind.svg", tech: "tailwind" },
            { icon: "/skills/typescript.svg", tech: "typescript" },
            { icon: "/skills/java.svg", tech: "java" },
            { icon: "/skills/spring-boot.svg", tech: "spring boot" },
            { icon: "/skills/postgresql.svg", tech: "postgresql" },
        ],
        available: true,
        inProgress: true,
        github: [
            { label: "Repo back", link: "https://github.com/MathieuBourasseau/backend-job-tracker" },
        ],
    },
    {
        title: "Backend CRUD Spring Boot",
        type: "Back-end - API REST",
        img: "/projects/CRUD.jpg",
        link: "https://github.com/MathieuBourasseau/backend-springboot-crud",
        items: [
            { icon: "/skills/java.svg", tech: "java" },
            { icon: "/skills/spring-boot.svg", tech: "spring boot" },
            { icon: "/skills/postgresql.svg", tech: "postgresql" },
        ],
        available: true,
        github: [
            { label: "Repo back", link: "https://github.com/MathieuBourasseau/backend-springboot-crud" },
        ],
    },
    {
        title: "Jeu du mot mystère",
        type: "Full stack - API REST",
        img: "/projects/mysterious-game.jpg",
        link: "https://front-mystery-word.vercel.app/",
        items: [
            { icon: "/skills/react.svg", tech: "react js" },
            { icon: "/skills/tailwind.svg", tech: "tailwind" },
            { icon: "/skills/typescript.svg", tech: "typescript" },
            { icon: "/skills/java.svg", tech: "java" },
            { icon: "/skills/spring-boot.svg", tech: "spring boot" },
            { icon: "/skills/postgresql.svg", tech: "postgresql" },
        ],
        available: true,
        github: [
            { label: "Repo front", link: "https://github.com/MathieuBourasseau/front-mystery-word" },
            { label: "Repo back", link: "https://github.com/MathieuBourasseau/backend-mystery-words" },
        ],
    },
    {
        title: "Chatbot IA avec api mistral",
        type: "Full stack - API REST",
        img: "/projects/ia.jpg",
        link: "https://chat-llm-j46y.vercel.app/login",
        items: [
            { icon: "/skills/react.svg", tech: "react js" },
            { icon: "/skills/tailwind.svg", tech: "tailwind" },
            { icon: "/skills/nodejs.svg", tech: "node js", invert: true },
            { icon: "/skills/express-js.png", tech: "express", invert: true },
            { icon: "/skills/mistral-color.svg", tech: "api mistral" }
        ],
        available: true,
        github: [
            { label: "Repo front", link: "https://github.com/MathieuBourasseau/Dynamic-Chat-Mistral-Api-Front" },
            { label: "Repo back", link: "https://github.com/MathieuBourasseau/Dynamic-Chat-Mistral-Api-Back" },
        ],
    },
    {
        title: "Gamer challenges",
        type: "Full stack - API REST",
        img: "/projects/neon-gaming-background.jpg",
        link: "https://gamerchallenges-front-v1.vercel.app/",
        items: [
            { icon: "/skills/react.svg", tech: "react js" },
            { icon: "/skills/tailwind.svg", tech: "tailwind" },
            { icon: "/skills/nodejs.svg", tech: "node js", invert: true },
            { icon: "/skills/express-js.png", tech: "express", invert: true },
            { icon: "/skills/typescript.svg", tech: "typescript" }
        ],
        available: true,
        github: [
            { label: "Repo front", link: "https://github.com/MathieuBourasseau/gamerchallenges-front-v1" },
            { label: "Repo back", link: "https://github.com/MathieuBourasseau/gamerchallenges-back-v1" },
        ],
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
        github: [
            { label: "Repo", link: "https://github.com/MathieuBourasseau/younivibe-stage" },
        ],

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
        github: [
            { label: "Repo front", link: "https://github.com/MathieuBourasseau/carambar-front" },
            { label: "Repo back", link: "https://github.com/MathieuBourasseau/carambar-api" },
        ],
    },
    {
        title: "Convertisseur de salaire brut / net",
        type: "Front-end",
        img: "/projects/calculatrice.jpg",
        link: "https://mathieubourasseau.github.io/salarium-brut-net-calculator/",
        items: [
            { icon: "/skills/html.svg", tech: "html" },
            { icon: "/skills/css.svg", tech: "css" },
            { icon: "/skills/javascript.svg", tech: "javascript"},
            { icon: "/skills/tailwind.svg", tech: "tailwind"}
        ],
        available: true,
        github: [
            { label: "Repo", link: "https://github.com/MathieuBourasseau/salarium-brut-net-calculator" },
        ],
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
        github: [
            { label: "Repo", link: "https://github.com/MathieuBourasseau/booking-app" },
        ],

    },
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
        github: [
            { label: "Repo", link: "https://github.com/MathieuBourasseau/projet-heros" },
        ],
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
        github: [
            { label: "Repo", link: "https://github.com/MathieuBourasseau/gaming-campus" },
        ],
    },
]
