import Image from "next/image"
import React from 'react'

export default function HomePage() {

    return (
        <section>

            {/* LEFT SIDE CONTENT */}

            <h1>Bienvenue sur le portfolio d'un développeur passionné ! </h1>
            <div>
                <div>
                    <p>Je m’appelle Mathieu Bourasseau.</p>
                    <p>
                        Je suis actuellement en formation de concepteur et développeur d'application pour devenir développeur full stack et en recherche
                        <span>d'une alternance pour l'année 2026</span>
                    </p>
                    <p>Ce site web a pour objectif de vous présenter mon parcours, mes compétences, ainsi que les projets que j’ai pu réalisés.</p>
                    <p>En espérant pouvoir se rencontrer prochainement, je vous souhaite une très bonne découverte de mon portfolio.</p>
                </div>
                <div>
                    <Image
                        src={ }
                        width={ }
                        height={ }
                        className=""
                    />

                    <div>
                        <p>Mathieu Bourasseau</p>
                        <span>Recherche une alternance de concepteur et développeur d'application</span>
                        <p>"Test, fail, learn and repeat !"</p>
                    </div>

                    {/* LIST OF LINKS */}
                    <ul>
                        <Link
                            href={ }
                            className=""
                        >
                            <div className="">
                                <p></p>
                                <span className=""></span>
                            </div>
                        </Link>
                    </ul>
                </div>
            </div>
        </section>
    )
}
