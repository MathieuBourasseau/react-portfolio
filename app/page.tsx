'use client'

import Navigation from "@/app/components/Navigation";
import HomePage from "@/app/components/HomePage";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Career from "@/app/components/Career";
import { Background } from "./types/background";
import { useState } from "react";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import Contact from "./components/Contact";

export default function Home() {

    // The page to display is initialized by default to "home"
    const [activePage, setActivePage] = useState('home');

    // The background to show by default is professional 
    const [activeBackground, setActiveBackground] = useState<Background>('PROFESSIONAL');

    return (
        <>
            <Navigation
                onActivePage={setActivePage} 
                activePage={activePage} 
                activeBackground={activeBackground} 
                onActiveBackground={setActiveBackground} 
            />
            <main className="relative bg-neutral-950 z-10 flex flex-col flex-1">
                {activePage === 'home' && <HomePage onActivePage={setActivePage} onActiveBackground={setActiveBackground} />}
                {activePage === 'projects' && <Projects />}
                {activePage === 'skills' && <Skills /> }
                {activePage === 'career' && <Career activeBackground={activeBackground} />}
                {activePage === 'contact' && <Contact />}
                <BackgroundBeams />
            </main>
        </>
    );
}
