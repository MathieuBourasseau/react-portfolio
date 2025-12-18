import React, { experimental_taintObjectReference } from 'react'
import { Background } from "../types/background"
import { div, h2 } from "framer-motion/client"


type CareerProps = {
    activeBackground: Background
}

export default function Career({ activeBackground }: CareerProps) {

    const background = {

        PROFESSIONAL: [
            {
                title: 'Chargé de communication',
                company: 'Valor3e',
                city: 'La Séguinière',
                department: '(49)',
                Contract: 'CDD',
                period: '2021 – 2024',
                duration: '2 ans et 5 mois',
                missions: [
                    {
                        categorie: 'Community management',
                        details: [
                            'Création, développement et animation des pages Facebook, Instagram, Linkedin, X (Twitter)',
                            '824 abonnés gagnés en 2 ans et demi sur Facebook et 300 sur Instagram',
                            'Gestion de campagnes publicitaires sur les réseaux sociaux',
                            'Création de plusieurs reels ayant dépassés les 10 000 vues',
                            '335 500 personnes touchées sur un territoire de 340 000 habitants'
                        ]
                    },
                    {
                        categorie: 'Gestion du site web',
                        details: [
                            'Refonte totale du site web en collaboration avec une agence de communication',
                            'Rédaction de plus d’une trentaine d’articles pour le SEO',
                            'Création et ajout de quiz sur les déchets',
                            'Optimisation du référencement naturel'
                        ]
                    },
                    {
                        categorie: 'Montage vidéo',
                        details: [
                            'Montage de la vidéo sur la centrale photovoltaïque',
                            'Conception et montage de reportages et interviews (associations)',
                            'Interviews et reportages internes'
                        ]
                    }
                ]
            },

            {
                title: 'Chargé de projet de contenu marketing',
                company: 'Kelio',
                city: 'Cholet',
                department: '(49)',
                contract: 'CDI',
                period: '2024 – 2025',
                duration: '8 mois',
                missions: [
                    {
                        categorie: 'Gestion du blog',
                        details: [
                            'Rédaction et optimisation SEO des articles de blog : balise title, structuration Hn, maillage interne, poids des images...',
                            'Gestion du calendrier éditorial et intégration des articles sur le site',
                            'Stratégie SEO réalisée en collaboration avec un partenaire externe : brief SEO, définition des mots-clés, backlinking...'
                        ]
                    },
                    {
                        categorie: 'Gestion et création de contenu marketing',
                        details: [
                            'Création, rédaction et élaboration de lead magnet : check-list, conseils et astuces, modèles téléchargeables, guides, livres blancs, calendriers...',
                            'Gestion de projets divers : sponsoring de livre blanc, partenariat avec un influenceur RH, organisation de webinars prospects',
                            'Captation et montage vidéo pour la chaîne YouTube'
                        ]
                    },
                    {
                        categorie: 'Community management',
                        details: [
                            'Gestion d’une page de 13 000 abonnés',
                            'Gestion du planning de publications',
                            'Conception, rédaction et publication des posts',
                            'Réponses aux commentaires et messages privés'
                        ]
                    },
                    {
                        categorie: 'Gestion des newsletters',
                        details: [
                            'Création, rédaction et envoi de la newsletter Talents (prospects / clients) et de la newsletter Paie (prospects)',
                            'Création de lead magnets pour les newsletters prospects afin de générer des leads'
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
                city: 'Cholet',
                department: '(49)',
                description: [
                    'Principes généraux du commerce (management, marketing, offre et demande...)'
                ]
            },

            {
                title: 'Langues Etrangères Appliquées : anglais, espagnol, portugais',
                University: 'Université Catholique de l\'Ouest',
                degree: 'BAC +3',
                year: '2014 - 2017',
                city: 'Angers',
                department: '(49)',
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
                city: 'Angers',
                department: '(49)',
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
                city: 'Angers',
                department: '(49)',
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
                city: 'en ligne',
                department: '',
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
        <section>
            <h1>Mon parcours</h1>

            {currentBackground.map((experience, index) => (
                <div key={index}>
                    <h2>{experience.title}</h2>
                </div>
            ))}       
        </section>
    )
}
