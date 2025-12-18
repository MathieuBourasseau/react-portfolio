'use client'

import Navigation from "@/app/components/Navigation";
import HomePage from "@/app/components/HomePage";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Career from "@/app/components/Career";
import { useState } from "react";
import { BackgroundBeams } from "@/app/components/ui/background-beams";

export default function Home() {

    const [activePage, setActivePage] = useState('home');

    return (
        <>
            <Navigation onActivePage={setActivePage} activePage={activePage} />
            <main className="relative bg-neutral-950 z-10 flex flex-col flex-1">
                {activePage === 'home' && <HomePage />}
                {activePage === 'projects' && <Projects />}
                {activePage === 'skills' && <Skills /> }
                <BackgroundBeams />
            </main>
        </>
    );
}
