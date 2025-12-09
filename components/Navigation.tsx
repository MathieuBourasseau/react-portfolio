import Image from "next/image";
import Link from "next/link";

interface blocLogo {
    icon: string;
    title: string;
}

export default function Navigation() {

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
        <header className="bg-[url(/header/background.jpg)] p-6">

            <nav className="text-white flex items-center justify-between">

                {/* BLOC LOGO */}
                <div className="flex items-center gap-6">
                    <Image
                        src={blocLogo.icon}
                        alt="logo du portfolio de Mathieu Bourasseau"
                        width={65}
                        height={36}
                        className=""
                    />
                    <a 
                        href="#"
                        className="font-bold text-xl"
                    >Mathieu Bourasseau
                    </a>
                </div>

                {/* BLOC Navigation */}
                <div className="flex justify-between gap-4 text-md font-bold max-w-[40%] uppercase">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.link}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </nav>

        </header>
    );
}