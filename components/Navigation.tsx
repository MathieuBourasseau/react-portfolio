'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

interface blocLogo {
    icon: string;
    title: string;
}

export default function Navigation() {

    const [isOpen, setIsOpen] = useState(false);

    const handleBurgerNav = () => {
        setIsOpen(!isOpen);
    }

    const blocLogo = {
        icon: "/header/logo.png",
        title: "Mathieu Bourasseau"
    }

    const navLinks = [
        {
            label: "projets",
            link: "projects"
        },
        {
            label: "compétences",
            link: "skills"
        },
        {
            label: "parcours",
            link: "background"
        },
        {
            label: "contact",
            link: "contact"
        }

    ]
    return (
        <header className="relative bg-[url(/header/background.jpg)] p-6">

            <nav className="text-white flex items-center justify-between">

                {/* BLOC LOGO */}

                <div className="flex items-center gap-6">
                    <Image
                        src={blocLogo.icon}
                        alt="logo du portfolio de Mathieu Bourasseau"
                        width={45}
                        height={36}
                        className="lg:w-[65px]"
                    />
                    <a
                        href="#"
                        className="text-md font-bold lg:text-2xl"
                    >Mathieu Bourasseau
                    </a>
                </div>

                {/* BLOC NAVIGATION MOBILE */}

                <div className="flex flex-col items-center w-full absolute left-0 p-2 opacity-[50%] bottom-[-160px] bg-black justify-between gap-4 text-md font-bold w-[40%] uppercase">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.link}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* BLOC NAVIGATION DESKTOP */}

                <div className="hidden flex justify-between gap-4 text-md font-bold w-[40%] uppercase">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.link}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* BLOC BURGER ICONS */}

                <GiHamburgerMenu
                    onClick={handleBurgerNav}
                    className={
                        isOpen ? "hidden"
                        : "cursor-pointer transition-transform duration-270 hover:scale-115 text-[30px] lg:hidden"}
                />
                <RxCross2 
                    onClick={handleBurgerNav} 
                    className={
                        isOpen ? "transition-transform duration-270 hover:scale-115 cursor-pointer text-[30px] lg:hidden" 
                        : "hidden"} 
                />
            </nav>

        </header>
    );
}