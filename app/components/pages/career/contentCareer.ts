import { Background } from "@/app/types/background";

// Types 

interface TimelineContent {
    category?: string;
    details: string[];
}

interface TimelineItem {
    title: string;
    organization: string; 
    logo: string;
    location: string;    
    period: string;       
    contract: string;    
    content: TimelineContent[]; // 
}

// Dynamic content displayed according to the background option selected

export const background: Record<Background, TimelineItem[]> = {

        PROFESSIONAL: [
            {
                title: 'Stagiaire développeur web',
                organization: 'Younivibe',
                location: 'Paris (75) à distance',
                contract: 'Stage',
                period: '2 mois (2025)', // 
                logo: "/projects/logo-younivibe.png",
                content: [
                    {
                        category: 'Intégration de maquettes',
                        details: [
                            'Intégration d\'interfaces web statiques et dynamique à partir de maquettes (desktop et mobile) en REACT js',
                            'Finalisation du style et du responsive design de plusieurs pages de l’application développé en amont par le CTO',
                            'Participation à l’évolution du produit via le développement de nouvelles pages du site vitrine : Home, Comment ça marche ?, Missions',
                            'Réflexion sur la mise en place d\'une API externe pour se connecter à un CRM.'
                        ]
                    },
                ]
            },
            {
                title: 'Chargé de projet contenu digital',
                organization: 'Kelio',
                location: 'Cholet (49)',
                contract: 'CDI',
                period: '2024 – 2025',
                logo: "/career/logo-kelio.png",
                content: [
                    {
                        category: 'SEO & Intégration',
                        details: [
                            'Optimisation technique des articles (Structuration Hn, métadonnées, maillage interne)',
                            'Intégration de contenus sur le site web d\'entreprise',
                            'Collaboration sur la stratégie de mots-clés et backlinking'
                        ]
                    },
                    {
                        category: 'Marketing Digital',
                        details: [
                            'Gestion de projet éditorial et création de lead magnets',
                            'Montage vidéo et gestion de la chaîne YouTube'
                        ]
                    }
                ]
            },
            {
                title: 'Chargé de communication & Web',
                organization: 'Valor3e',
                location: 'La Séguinière (49)',
                contract: 'CDD',
                period: '2021 – 2024',
                logo: "/career/logo-valor3e.png",
                content: [
                    {
                        category: 'Gestion de projet Web',
                        details: [
                            'Pilotage de la refonte totale du site web (interface avec l\'agence de communication)',
                            'Administration du site et mises à jour via CMS',
                            'Optimisation du référencement naturel (SEO) et analyse de trafic'
                        ]
                    },
                    {
                        category: 'Création de contenu & Design',
                        details: [
                            'Création de supports visuels et vidéo (Maîtrise suite Adobe)',
                            'Gestion de la stratégie social media et community management'
                        ]
                    }
                ]
            },
        ],

        ACADEMIC: [
            {
                title: 'Développeur web et Web Mobile',
                organization: 'Ecole O\'Clock',
                contract: 'BAC +2',
                period: '2025',
                location: 'En full remote',
                logo: "/career/logo-oclock.png",
                content: [
                    {
                        details: [
                            'Apprentissage front-end : HTML, CSS, Javascript, framework Svelte',
                            'Apprentissage back-end : node js, Express, SQL, Sequelize',
                            'Conception et intégration d\'interface web responsive',
                            'Consommation d\'API REST',
                            'Utilisation de git et github',
                            'Docker'
                        ]
                    }
                ]
            },
            {
                title: 'Com. numérique et multimédia',
                organization: 'Université Catholique de l\'Ouest',
                contract: 'BAC +5',
                period: '2019 - 2021',
                location: 'Angers (49)',
                logo: "/career/logo-uco2.png",
                content: [
                    {
                        details: [
                            'Base du développement informatique (HTML, Javascript, CSS, Bootstrap, web design et responsive design)',
                            'Marketing digital',
                            'Outils audiovisuels numériques (iMovie, finalcut pro X, photoshop, indesign, illustrator, audacity)',
                            'CMS (Wordpress)',
                            'Community Management'
                        ]
                    }
                ]
            },
            {
                title: 'Relations Internationales & Stratégies',
                organization: 'Université Catholique de l\'Ouest',
                contract: 'BAC +5',
                period: '2017 - 2019',
                location: 'Angers (49)',
                logo: "/career/logo-uco2.png",
                content: [
                    {
                        details: [
                            'Apprentissage et pratique de l\'anglais et de l\'espagnol',
                            'Concevoir des projets communication (relations presse, événementiel, digital, interne, externe...)',
                            'Développement stratégique au sein d\'entreprises ou d\'organisations internationales.'
                        ]
                    }
                ]
            },
            {
                title: 'Langues Etrangères Appliquées',
                organization: 'Université Catholique de l\'Ouest',
                contract: 'BAC +3',
                period: '2014 - 2017',
                location: 'Angers (49)',
                logo: "/career/logo-uco2.png",
                content: [
                    {
                        details: [
                            'Apprentissage et pratique de l\'anglais (niveau B2) : traduction, version...',
                            'Apprentissage et pratique de l\'espagnol : traduction, version...',
                            'Apprentissage et pratique du portugais : niveau débutant'
                        ]
                    }
                ]
            },
            {
                title: 'Ecole de commerce',
                organization: 'Esiame',
                contract: 'Bachelor 1',
                period: '2013 - 2014',
                location: 'Cholet (49)',
                logo: "/career/logo-esiame.png",
                content: [
                    {
                        details: ['Principes généraux du commerce (management, marketing, offre et demande...)']
                    }
                ]
            },
        ]
    };