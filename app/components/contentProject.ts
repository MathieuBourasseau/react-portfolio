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