"use client";
import { headingFont } from "@/app/layout";

export default function Navbar(){
    return (
        <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-7 z-50 bg-black/80 backdrop-blur-md text-white">
            <div className={`${headingFont.className} text-2xl px-9`}>
                Deena Inti
            </div>
            <div className={`${headingFont.className} text-1xl px-9`}>
            <div className="flex gap-6">
            <a href="#about" className="hover:text-gray-400 transition">About</a>
            <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
            <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
            </div>
            </div>
        </nav>
    );
}