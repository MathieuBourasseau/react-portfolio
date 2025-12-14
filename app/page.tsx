import Image from "next/image";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";

export default function Home() {
    return (
        <>
            <Navigation />
            <main className="flex flex-col flex-1">
                <HomePage />
            </main>
        </>
    );
}
