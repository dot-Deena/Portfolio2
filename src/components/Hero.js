"use client";
import { motion } from "framer-motion";

export default function Hero(){
    return (
        <section className="h-screen flex flex-col items-center justify-center pt-20">
            <motion.h1 initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{duration:1}}
            className="font-bold text-5xl">Deena Inti</motion.h1>

            <motion.p initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.4}}
            className="mt-3 text-lg text-gray-500">Full Stack developer | ML enthusiast</motion.p>

            <motion.a href="#projects" initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.8}}
            className="mt-6 px-6 py-2 border rounded-full hover:bg-white hover:text-black transition" > View my work</motion.a>
        </section>
    );
}