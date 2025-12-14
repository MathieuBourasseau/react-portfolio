'use client'

import Image from "next/image";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Projects";
import { useState } from "react";

export default function Home() {

    const [activePage, setActivePage] = useState('home');

    return (
        <>
            <Navigation onActivePage={setActivePage} activePage={activePage} />
            <main className="flex flex-col flex-1">
                {activePage === 'home' && <HomePage />}
                {activePage === 'projects' && <Projects />}
            </main>
        </>
    );
}
