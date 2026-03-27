"use client";
import {motion} from "framer-motion";
import { headingFont } from "@/app/layout";
import { FaJava, FaJs, FaSwift, FaGithub, FaNodeJs, FaTerminal } from "react-icons/fa";
import { SiPandas, SiMongodb, SiScikitlearn } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Projects(){
    const projects=[
        {
            title: "Project 1",
            desc: "desc",
            tech: ["react", "css"]
        },
        {
            title: "Project 2",
            desc: "desc",
            tech: ["html", "css"]
        },
        {
            title: "Project 3",
            desc: "desc",
            tech: ["js", "css"]
        }
    ];

    return(
        <section id="projects" className="relative z-0 min-h-screen px-6 py-20 bg-black">
            {/* MOVING GRIDDD */}
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
                {/* MOVING ICONSSSS */}

                <motion.div
                className="absolute top-[160px] left-[160px] text-purple-400 text-4xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                >
                <FaJava/>
                </motion.div>

                <motion.div
                className="absolute top-[420px] right-[30px] text-purple-400 text-4xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                >
                <FaSwift/>
                </motion.div>

                <motion.div
                className="absolute bottom-[140px] left-60 text-purple-400 text-4xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay:0.5 }}
                >
                <SiMongodb/>
                </motion.div>

                <motion.div className="absolute bottom-40 right-60 text-purple-400 text-4xl"
                animate={{y: [0, -20, 0] }}
                transition={{duration:4, repeat:Infinity, delay:0.5}}>
                <SiScikitlearn/>
                </motion.div>

                <motion.div className="absolute bottom-30 right-20 text-purple-400 text-4xl"
                animate={{y: [0, -20, 0] }}
                transition={{duration:4, repeat:Infinity, delay:2}}>
                <FaGithub/>
                </motion.div>

                <motion.div className="absolute top-30 left-[620px] text-purple-400 text-4xl"
                animate={{y: [0, -20, 0] }}
                transition={{duration:4, repeat:Infinity, delay:2}}>
                <SiPandas/>
                </motion.div>

                <motion.div className="absolute top-[420px] right-30 text-purple-400 text-4xl"
                animate={{y: [0, -20, 0] }}
                transition={{duration:4, repeat:Infinity, delay:1}}>
                <FaNodeJs/>
                </motion.div>

                <motion.div className="absolute bottom-20 right-[800px] text-purple-400 text-4xl"
                animate={{y: [0, -20, 0] }}
                transition={{duration:4, repeat:Infinity, delay:1}}>
                <VscVscode/>
                </motion.div>
            <h2 className={` ${headingFont} py-10 text-3xl font-bold text-center mb-10 text-white `}>Projects</h2>
            <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                >
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                {projects.map((project, index) => (

                <motion.div
                    key={index}
                    whileHover={{ scale: 1.03, y:-5 }}
                    className="bg-gray-900 p-6 rounded-2xl border border-gray-800 transition duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                        {/* image below */}
                        <div className="h-40 bg-gray-800 rounded-lg mb-4"></div> 

                    <h3 className="text-xl text-white font-semibold mb-2"> {project.title}</h3>

                    <p className="text-gray-400 mb-4"> {project.desc} </p>
                    {/* tags below */}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 text-white bg-gray-800 rounded-full text-sm hover:bg-purple-600 transition"> {t} </span>
                        ))}
                    </div>
                    {/* buttons below */}
                    <div className="flex gap-4 mt-6">
                        <button className="px-4 py-2 border text-white border-gray-700 rounded-lg hover:border-purple-500 transition"> Code </button>
                        <button className="px-4 py-2 bg-purple-600 rounded-lg "> Live </button>
                    </div>
                </motion.div>
                ))}
            </div>
        </motion.div>
        </section>
    );
}