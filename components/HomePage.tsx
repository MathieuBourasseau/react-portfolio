import Image from "next/image"
import React from 'react'
import { FaComputer } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPlane } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";

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

                {/* RIGHT SIDE CONTENT */}

                <div className=" flex flex-col items-center gap-4 rounded-xl py-4 px-5 bg-[url(/header/background.jpg)]">
                    <Image
                        src={`/intro/logo-avatar-mathieu.png`}
                        width={60}
                        height={60}
                        alt="Avatar de Mathieu Bourasseau"
                    />

                    <div className="">
                        <p className="text-sm text-white font-bold text-center">Mathieu Bourasseau</p>
                        <span className="text-sm font-bold text-[#F74518] text-center">Recherche une alternance de concepteur et développeur d'application</span>
                        <p className="text-sm text-center text-white">"Test, fail, learn and repeat !"</p>
                    </div>

                    {/* LIST OF LINKS */}

                        <ul className="w-full flex flex-col gap-2">

                            {cardLinks.map((link, index) => (
                                <li className="flex w-full justify-center" key={index}>
                                    {link.options ? (
                                        <div className="w-full relative flex items-center justify-center rounded-lg bg-white py-2 hover:bg-[#f74518] transition-transform duration-300">
                                            <select
                                                defaultValue=""
                                                className="absolute text-base uppercase appearance-none  w-full bg-transparent text-center cursor-pointer focus:outline-none inset-0 opacity-0 z-10"
                                            >
                                                <option value="" disabled hidden>{link.label}</option>
                                                {link.options.map((option, i) => (
                                                    <option key={i} value={option} className="text-black bg-white ">
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className="flex items-center justify-center bg-white gap-2 pointer-events-none">
                                                <span className="text-base uppercase text-[#003C57] font-bold">{link.label}</span>
                                                <IoMdArrowDropdown className="text-[32px] text-[#003C57]" />
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.url}
                                            className="w-full flex justify-center items-center text-[#003C57] rounded-lg bg-white text-base py-2 hover:bg-[#f74518] transition-transform duration-300  hover:text-white"
                                        >
                                            <div className="flex items-center justify-center gap-2 ">
                                                <p className="uppercase font-bold">{link.label}</p>
                                                <span className="text-[20px]">{link.icon}</span>
                                            </div>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                </div>
            </div>
        </section>
    )
}
