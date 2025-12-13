import Image from "next/image"
import React from 'react'
import { FaComputer } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPlane } from "react-icons/fa";
import { MdWork } from "react-icons/md";

type itemsConfig = {
    icon: string;
    label: string;
    url: string;
    options?: string[];
}

type cardConfig = {
    list: itemsConfig[];
}

export default function HomePage() {

    const cardLinks = [
        {
            icon: <FaComputer />,
            label: "projets",
            url: "#"
        },
        {
            icon: <MdWork />,
            label: "compétences",
            url: "#"
        },
        {
            icon: <FaPlane />,
            label: "parcours",
            url: "#",
            options: ["professionnel", "académique"]
        },
        {
            icon: <IoIosMail />,
            label: "contact",
            url: "#"
        },
    ]

    return (
        <section className="flex flex-col gap-4 py-[5%] px-[5%]">

            {/* LEFT SIDE CONTENT */}

            <h1 className="text-lg font-bold text-[#003C57]">Bienvenue sur le portfolio d'un développeur passionné ! </h1>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <p className="text-sm">Je m’appelle Mathieu Bourasseau.</p>
                    <p className="text-sm">
                        Je suis actuellement en formation de concepteur et développeur d'application pour devenir développeur full stack et en recherche
                        <span className="text-sm font-bold text-[#F74518]">d'une alternance pour l'année 2026.</span>
                    </p>
                    <p className="text-sm">Ce site web a pour objectif de vous présenter mon parcours, mes compétences, ainsi que les projets que j’ai pu réalisés.</p>
                    <p className="text-sm">En espérant pouvoir se rencontrer prochainement, je vous souhaite une très bonne découverte de mon portfolio.</p>
                </div>
                <div>
                    <Image
                        src={`/intro/logo-avatar-mathieu.png`}
                        width={35}
                        height={35}
                        alt="Avatar de Mathieu Bourasseau"
                    />

                    <div>
                        <p className="text-sm">Mathieu Bourasseau</p>
                        <span className="text-sm font-bold text-[#F74518]">Recherche une alternance de concepteur et développeur d'application</span>
                        <p className="text-sm">"Test, fail, learn and repeat !"</p>
                    </div>

                    {/* LIST OF LINKS */}
                    <ul>
                        {/* <Link
                            href={#}
                        >
                            <div className="">
                                <p></p>
                                <span className=""></span>
                            </div>
                        </Link> */}
                    </ul>
                </div>
            </div>
        </section>
    )
}
