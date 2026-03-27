"use client";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaJs, FaSwift, FaGithub, FaCss3, FaHtml5, FaTerminal } from "react-icons/fa";
import { headingFont } from "@/app/layout";

export default function Hero(){
    return (
        
        <section className="relative z-0 h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white pt-20 overflow-hidden">
                {/*  GRIDDDDD!!!! yipeeee moving btw */}
                <motion.div
                className="absolute inset-0 z-[-1]"
                style={{
                    backgroundImage: `
                    linear-gradient(rgba(120, 120, 255, 0.2) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(120, 120, 255, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px"
                }}
                animate={{
                    backgroundPosition: ["0px 0px", "40px 40px"]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                />
                {/* MOVING ICONS  */}
                <motion.div
                className="absolute top-40 left-60 text-purple-400 text-4xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                >
                <FaPython/>
                </motion.div>

                <motion.div
                className="absolute top-40 right-60 text-purple-400 text-4xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                >
                <FaSwift/>
                </motion.div>

                <motion.div
                className="absolute bottom-40 left-60 text-purple-400 text-4xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay:0.5 }}
                >
                <FaReact/>
                </motion.div>

                <motion.div className="absolute bottom-40 right-60 text-purple-400 text-4xl"
                animate={{y: [0, -20, 0] }}
                transition={{duration:4, repeat:Infinity, delay:0.5}}>
                <FaJs/>
                </motion.div>

                <motion.div className="absolute bottom-30 right-20 text-purple-400 text-4xl"
                animate={{y: [0, -20, 0] }}
                transition={{duration:4, repeat:Infinity, delay:2}}>
                <FaGithub/>
                </motion.div>

                <motion.div className="absolute bottom-30 left-20 text-purple-400 text-4xl"
                animate={{y: [0, -20, 0] }}
                transition={{duration:4, repeat:Infinity, delay:2}}>
                <FaHtml5/>
                </motion.div>

                <motion.div className="absolute top-20 right-30 text-purple-400 text-4xl"
                animate={{y: [0, -20, 0] }}
                transition={{duration:4, repeat:Infinity, delay:1}}>
                <FaCss3/>
                </motion.div>

                <motion.div className="absolute bottom-20 right-30 text-purple-400 text-4xl"
                animate={{y: [0, -20, 0] }}
                transition={{duration:4, repeat:Infinity, delay:1}}>
                <FaTerminal/>
                </motion.div>
        {/* cirular Pfp and my name and shiz */}
    <div className="flex items-center justify-between w-full max-w-5xl mx-auto">

        <div className="flex justify-center w-1/2">
            <img
                src="/your-image.jpg"
                alt="profile"
                className="w-80 h-80 rounded-full object-cover border-2 border-purple-500 shadow-[0_0_60px_rgba(168,85,247,0.6)]"
            />
        </div>
            {/* name and shitz */}
        <div className="w-1/2 flex flex-col justify-center">
            <motion.h1
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{duration:1}}
            className={`${headingFont.className} font-bold text-5xl text-center`}>
                Deena <span className="text-purple-500">Inti</span>
            </motion.h1>

            <motion.p
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.4}}
            className="mt-4 text-lg text-gray-400 text-center">
                Full Stack developer | ML enthusiast
            </motion.p>
            <div className="mt-6 flex justify-center"> 
                <motion.a
                href="#projects"
                initial={{opacity:0, y:30}}
                animate={{opacity:1, y:0}}
                transition={{delay:0.8}}
                className={`${headingFont.className} inline-block mt-6 px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-400 transition`}>
                    View my work
                </motion.a>
            </div>
            </div>
        </div>

        </section>
    );
}