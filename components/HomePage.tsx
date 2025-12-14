import Image from "next/image"
import React from 'react'
import { FaComputer } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPlane } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";


type itemsConfig = {
    icon: React.ReactNode;
    label: string;
    url: string;
    options?: string[];
}

type cardConfig = {
    list: itemsConfig[];
}

export default function HomePage() {

    const cardLinks = [
        { icon: <FaComputer />, label: "projets", url: "#" },
        { icon: <MdWork />, label: "compétences", url: "#" },
        { icon: <FaPlane />, label: "parcours", url: "#", options: ["professionnel", "académique"] },
        { icon: <IoIosMail />, label: "contact", url: "#" },
    ]

    return (
        <section className="relative w-full flex-1 flex flex-col items-center  antialiased overflow-hidden">

            <div className="relative z-10 flex flex-col gap-4 py-[5%] px-[10%] md:gap-8 lg:py-8 lg:items-center w-full max-w-7xl">

                {/* HEADER */}
                <h1 className="text-lg font-bold text-white md:text-2xl lg:text-center lg:text-3xl lg:mb-4">
                    Bienvenue sur le portfolio d'un développeur <span className="text-[#F74518]">passionné</span> !
                </h1>

                {/* MAIN CONTENT */}
                <div className="flex flex-col text-justify gap-8 lg:flex-row lg:gap-12 lg:border lg:border-[#2C3E50] lg:rounded-xl lg:p-8 lg:justify-between lg:items-center bg-neutral-900/50 backdrop-blur-sm">

                    {/* LEFT SIDE CONTENT */}
                    <div className="flex flex-col gap-4 text-sm w-full md:text-base lg:text-lg lg:max-w-1/2 text-neutral-300">
                        <p>Je m’appelle Mathieu Bourasseau.</p>
                        <p>
                            Je suis actuellement en formation de concepteur et développeur d'application pour devenir développeur full stack et en recherche {""}
                            <span className="font-bold text-[#F74518]">d'une alternance pour l'année 2026. 🔍</span>
                        </p>
                        <p>Ce site web a pour objectif de vous présenter mon parcours, mes compétences, ainsi que les projets que j’ai pu réalisés.</p>
                        <p>Passionné par le développement j'adore régulièrement apprendre de nouvelles manières de coder et de développer. 💻</p>
                        <p>En espérant pouvoir se rencontrer prochainement, je vous souhaite une très bonne découverte de mon portfolio. 👋</p>
                    </div>

                    {/* RIGHT SIDE CONTENT */}
                    <div className="flex flex-col items-center gap-4 rounded-xl py-4 px-5 bg-[#E2E8F0] max-w-[480px] md:max-w-[550px]">
                        <Image
                            src={`/intro/logo-avatar-mathieu.png`}
                            width={60}
                            height={60}
                            alt="Avatar de Mathieu Bourasseau"
                            className="bg-white rounded-full p-1"
                        />

                        <div className="flex flex-col gap-2 text-center black text-sm md:text-base lg:text-lg">
                            <p className="font-bold ">Mathieu Bourasseau</p>
                            <span className=" font-bold text-[#F74518] ">Recherche une alternance de concepteur et développeur d'application</span>
                            <p>"Test, fail, learn and repeat !"</p>
                        </div>

                        {/* LIST OF LINKS */}
                        <ul className="w-full flex flex-col gap-2 max-w-[350px] mx-auto md:max-w-[400px]">
                            {cardLinks.map((link, index) => (
                                <li className="flex w-full justify-center" key={index}>
                                    {link.options ? (
                                        <div className="w-full relative group flex items-center justify-center rounded-lg bg-black py-2 text-white hover:bg-[#f74518] transition-colors duration-300">
                                            <select
                                                defaultValue=""
                                                className="absolute text-base uppercase appearance-none w-full bg-transparent text-center cursor-pointer focus:outline-none inset-0 opacity-0 z-10"
                                            >
                                                <option value="" disabled hidden>{link.label}</option>
                                                {link.options.map((option, i) => (
                                                    <option key={i} value={option} className="text-black bg-white">
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className="flex items-center justify-center gap-2 pointer-events-none bg-transparent">
                                                <span className="text-base uppercase font-bold bg-transparent group-hover:text-white transition-colors duration-300">{link.label}</span>
                                                <IoMdArrowDropdown className="text-[32px] bg-transparent group-hover:text-white transition-colors duration-300" />
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.url}
                                            className="w-full flex justify-center items-center rounded-lg bg-black text-base py-2 text-white hover:bg-[#f74518] hover:text-white transition-all duration-300"
                                        >
                                            <div className="flex items-center justify-center gap-2 bg-transparent">
                                                <p className="uppercase font-bold bg-transparent">{link.label}</p>
                                                <span className="text-[20px] bg-transparent">{link.icon}</span>
                                            </div>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}