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