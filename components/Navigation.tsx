import Image from "next/image";
import Link from "next/link";

interface blocLogo {
    icon: string;
    title: string;
}

export default function Navigation() {

    const blocLogo = {
        icon: "/header-navigation/logo.png",
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
        <header className="">

            <nav>

                {/* BLOC LOGO */}
                <div>
                    <Image
                        src={blocLogo.icon}
                        alt="logo du portfolio de Mathieu Bourasseau"
                        width={36}
                        height={36}
                        className=""
                    />
                    <a href="#">Mathieu Bourasseau</a>
                </div>

                {/* BLOC Navigation */}
                <div>
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