'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaComputer } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPlane } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";


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
            link: "projects",
            icon: <FaComputer />
        },
        {
            label: "compétences",
            link: "skills",
            icon: <MdWork />
        },
        {
            label: "parcours",
            link: "background",
            icon: <FaPlane />,
            options: [
                { label: "professionnel" },
                { label: "académique" },
            ]
        },
        {
            label: "contact",
            link: "contact",
            icon: <IoIosMail />
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

                <div
                    className={
                        `flex flex-col items-center w-full absolute left-0  top-full bg-black justify-between text-sm font-bold uppercase bg-[url(/header/background.jpg)] transition-all duration-500 ease-in-out 
                        ${isOpen
                            ? "top-full opacity-90 translate-y-0 "
                            : "top-full opacity-0 translate-y-[-40px]"
                        }

                        lg:hidden
                        `
                    }>
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.link}
                            className="w-full flex justify-center items-center border-b-2 py-2 hover:bg-[#f74518] transition-transform duration-300 hover:scale-115 "
                        >
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-[20px]">{link.icon}</span>
                                <p>{link.label}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* BLOC NAVIGATION DESKTOP */}

                <div className="hidden lg:block lg:flex gap-8 items-center justify-between text-sm font-bold uppercase bg- transition-all duration-500 ease-in-out max-w-2/3">
                    {navLinks.map((link, index) => (
                        <div className="flex">

                            {link.options ? (
                                <div className="relative flex items-center justify-between bg-[#f74518] rounded-full">
                                    <select
                                        defaultValue=""
                                        className="text-base uppercase appearance-none w-full py-3 pl-5 pr-10 cursor-pointer focus:outline-none"
                                    >
                                        <option value="" disabled hidden >{link.label}</option>
                                        {link.options.map((option, i) => (
                                            <option value={option.label} className="bg-[#f74518]" >{option.label}</option>
                                        ))}
                                    </select>
                                    <IoMdArrowDropdown className="absolute right-0 text-[32px] pointer-events-none"/>
                                </div>
                            ) : (
                                <Link
                                    key={index}
                                    href={link.link}
                                    className="w-full flex justify-center items-center text-base py-2 hover:text-[#f74518] transition-transform duration-300"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <p>{link.label}</p>
                                    </div>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* BLOC BURGER ICONS */}

                <GiHamburgerMenu
                    onClick={handleBurgerNav}
                    className={
                        isOpen
                            ? "hidden"
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