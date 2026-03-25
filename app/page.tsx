'use client'

import Navigation from "@/app/components/Navigation";
import HomePage from "@/app/components/pages/home/HomePage";
import Projects from "@/app/components/pages/projects/Projects";
import Skills from "@/app/components/pages/skills/Skills";
import Career from "@/app/components/pages/career/Career";
import { Background } from "./types/background";
import { useState } from "react";
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
            <main className="relative z-10 flex flex-col flex-1 bg-[#0a0a0a] bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:16px_16px]">
                {activePage === 'home' && <HomePage onActivePage={setActivePage} onActiveBackground={setActiveBackground} />}
                {activePage === 'projects' && <Projects />}
                {activePage === 'skills' && <Skills /> }
                {activePage === 'career' && <Career activeBackground={activeBackground} />}
                {activePage === 'contact' && <Contact/>}
            </main>
        </>
    );
}