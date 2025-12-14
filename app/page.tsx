import Image from "next/image";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";
import { useState } from "react";

export default function Home() {

    const [activePage, setActivePage] = useState('home');

    return (
        <>
            <Navigation />
            <main className="flex flex-col flex-1">
                <HomePage />
            </main>
        </>
    );
}
