import { Background } from "../types/background"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
    content: TimelineContent[]
}

type CareerProps = {
    activeBackground: Background
}

export default function Career({ activeBackground }: CareerProps) {

    const background: Record<Background, (ProfessionalItem | AcademicItem)[]> = {

        PROFESSIONAL: [
            {
                title: 'Stagiaire développeur web',
                company: 'Younivibe',
                city: 'Paris (75) à distance',
                contract: 'CDD',
                year: '2 mois',
                duration: '2 ans et 5 mois',
                logo: "/projects/logo-younivibe.png",
                missions: [
                    {
                        categorie: 'Intégration de maquettes',
                        details: [
                            'Intégration d\' interfaces web statiques et dynamique à partir de maquettes (desktop et mobile) en REACT js',
                            'Finalisation du style et du responsive design de plusieurs pages de l’application développé en amont par le CTO',
                            'Participation à l’évolution du produit via le développement de nouvelles pages du site vitrine : Home, Comment ça marche ?, Missions',
                            'Réflexion sur la mise en place d\'une API externe pour se connecter à un CRM.'
                        ]
                    },
                ]
            },
            {
                title: 'Chargé de communication & Web',
                company: 'Valor3e',
                city: 'La Séguinière (49)',
                contract: 'CDD',
                year: '2021 – 2024',
                duration: '2 ans et 5 mois',
                logo: "/projects/logo-younivibe.png",
                missions: [
                    {
                        categorie: 'Gestion de projet Web',
                        details: [
                            'Pilotage de la refonte totale du site web (interface avec l\'agence de communication',
                            'Administration du site et mises à jour via CMS',
                            'Optimisation du référencement naturel (SEO) et analyse de trafic'
                        ]
                    },
                    {
                        categorie: 'Création de contenu & Design',
                        details: [
                            'Création de supports visuels et vidéo (Maîtrise suite Adobe)',
                            'Gestion de la stratégie social media et community management'
                        ]
                    }
                ]
            },

            {
                title: 'Chargé de projet contenu digital',
                company: 'Kelio',
                city: 'Cholet (49)',
                contract: 'CDI',
                year: '2024 – 2025',
                logo: "/projects/logo-younivibe.png",
                duration: '8 mois',
                missions: [
                    {
                        categorie: 'SEO & Intégration',
                        details: [
                            'Optimisation technique des articles (Structuration Hn, métadonnées, maillage interne)',
                            'Intégration de contenus sur le site web d\'entreprise',
                            'Collaboration sur la stratégie de mots-clés et backlinking'
                        ]
                    },
                    {
                        categorie: 'Marketing Digital',
                        details: [
                            'Gestion de projet éditorial et création de lead magnets',
                            'Montage vidéo et gestion de la chaîne YouTube'
                        ]
                    }
                ]
            },
        ],

        ACADEMIC: [
            {
                title: 'Ecole de commerce',
                University: 'Esiame',
                degree: 'Bachelor 1',
                year: '2013 - 2014',
                city: 'Cholet (49)',
                description: [
                    'Principes généraux du commerce (management, marketing, offre et demande...)'
                ]
            },

            {
                title: 'Langues Etrangères Appliquées : anglais, espagnol, portugais',
                University: 'Université Catholique de l\'Ouest',
                degree: 'BAC +3',
                year: '2014 - 2017',
                city: 'Angers (49)',
                description: [
                    'Apprentissage et pratique de l\'anglais (niveau B2) : traduction, version...',
                    'Apprentissage et pratique de l\'espagnol : traduction, version...',
                    'Apprentissage et pratique du portugais : niveau débutant'
                ]
            },

            {
                title: 'Langues Appliquées, Relations Internationales et Stratégies Politiques',
                University: 'Université Catholique de l\'Ouest',
                degree: 'BAC +5',
                year: '2017 - 2019',
                city: 'Angers (49)',
                description: [
                    'Apprentissage et pratique de l\'anglais et de l\'espagnol',
                    'Concevoir des projets communication (relations presse, événementiel, digital, interne, externe...)',
                    'Développement stratégique au sein d\'entreprises ou d\'organisations internationales.'
                ]
            },

            {
                title: 'Communication numérique et conception multimédia',
                University: 'Université Catholique de l\'Ouest',
                degree: 'BAC +5',
                year: '2019 - 2021',
                city: 'Angers (49)',
                description: [
                    'Base du développement informatique (HTML, Javascript, CSS, Bootstrap, web design et responsive design)',
                    'Marketing digital',
                    'Outils audiovisuels numériques (iMovie, finalcut pro X, photoshop, indesign, illustrator, audacity)',
                    'CMS (Wordpress)',
                    'Community Management'
                ]
            },
            {
                title: 'Développeur web et Web Mobile',
                University: 'Ecole O\'Clock labellisée grande école du numérique ',
                degree: 'BAC +2',
                year: '2025',
                city: 'En full remote',
                description: [
                    'Apprentissage front-end : HTML, CSS, Javascript, framework Svelte',
                    'Apprentissage back-end : node js, Express, SQL, Sequelize',
                    'Conception et intégration d\'interface web responsive',
                    'Consommation d\'API REST',
                    'Utilisation de git et github',
                    'Docker'
                ]
            },
        ]

    }

    const currentBackground = background[activeBackground];

    return (
        <section className="relative z-20 flex flex-col gap-6 px-[5%] py-6">
            <h1 className="text-2xl font-bold text-white">Mon parcours</h1>

            {/* EXPERIENCES BLOC OR  ACADEMIC BACKGROUND */}

            <VerticalTimeline className="grid grid-col-1 gap-6">
                {currentBackground.map((background, index) => (
                    <VerticalTimelineElement 
                        key={index}
                        icon={background.}
                    >
                        {/* BACKGROUND TITLES */}
                        <div className="text-sm">
                            <h2>{background.title}</h2>
                            <p>{background.city}</p>
                            <p>{background.year}</p>
                        </div>
                        {'company' in background ? (
                            <div className="text-sm">
                                <p>Entreprise : {background.company}</p>
                                {/* MISSIONS */}
                
                                <div className="text-sm">
                                    {background.missions.map((mission, index) => (
                                        <div key={index}>
                                            <span>{mission.categorie}</span>
                                            <div>
                                                <p>{mission.details}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            t
                        )}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    )
}
