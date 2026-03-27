"use client";
import { headingFont } from "@/app/layout";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Navbar(){
    return (
        <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-7 z-50 bg-black/80 backdrop-blur-md text-white">
            <div className={`${headingFont.className} text-2xl px-9`}>
                Deena Inti
            </div>
            <div className={`${headingFont.className} text-1xl px-9`}>
            <div className="flex gap-6">
            <a
            href="/Resume_Deena.pdf"
            download
            className={`${headingFont.className} ml-6 px-5 py-2 relative top-[-8px] bg-purple-600 rounded-xl text-bold text-white radius-9 flex items-center gap-2 hover:bg-purple-400 transition`}
            >
            Resume <IoDocumentTextOutline/>
            </a>
            <a href="#about" className="hover:text-gray-400 transition">About</a>
            <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
            <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
            </div>
            </div>
        </nav>
    );
}