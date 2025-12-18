import React from 'react'
import { FaGithub } from "react-icons/fa"
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const socialsIcons = [
    { label: "Github", icon: <FaGithub />, url: "https://github.com/MathieuBourasseau" },
    { label: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/mathieu-bourasseau/" },
    { label: "Contact", icon: <IoIosMail />, url: "#" }
]

export default function Footer() {
    return (
        <footer className="flex flex-col items-center bg-black border-t-2 border-[#F74518] p-6 text-white">
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:max-w-[1000px] lg:mx-auto lg:w-full">
                <div>
                    <p className="text-sm text-center md:text-base lg:text-xl">© 2025 Mathieu Bourasseau – Tous droits réservés</p>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="text-sm md:text-base lg:text-xl">Contact :</p>
                    {socialsIcons.map((social, i) => (
                        <Link
                            key={i}
                            href={social.url}
                            target={social.url.startsWith('http') ? "_blank" : undefined}
                        >
                            <span className="text-[20px] lg:text-3xl">{social.icon}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}
