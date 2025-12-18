'use client'

import Navigation from "@/app/components/Navigation";
import HomePage from "@/app/components/HomePage";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Career from "@/app/components/Career";
import { Background } from "./types/background";
import { use, useState } from "react";
import { BackgroundBeams } from "@/app/components/ui/background-beams";

export default function Home() {

    // The page to display is initialized by default to "home"
    const [activePage, setActivePage] = useState('home');

    // The background to show by default is professional 
    const [activeBackground, setActiveBackground] = useState<Background>('PROFESSIONAL');


    // Je veux qu'un de mes enfants affiche un contenu en fonction de la valeur du background : 
        // Si background = PROFESIONNAL on affiche le parcours professionnel
        // Si background = ACADEMIC on affiche le parcours académique

        //1. Créer une variable d'état qui stocke la valeur de background
        //2. Cette valeur est ensuite envoyer à l'enfant pour qu'il sache quoi afficher il récupère donc la props du parent
        //3. Depuis l'enfant on modifiera cette valeur en fonction du select.

    return (
        <>
            <Navigation onActivePage={setActivePage} activePage={activePage} activeBackground={activeBackground} onActiveBackground={setActiveBackground} />
            <main className="relative bg-neutral-950 z-10 flex flex-col flex-1">
                {activePage === 'home' && <HomePage />}
                {activePage === 'projects' && <Projects />}
                {activePage === 'skills' && <Skills /> }
                <BackgroundBeams />
            </main>
        </>
    );
}
