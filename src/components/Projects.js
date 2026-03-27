"use client";
import {motion} from "framer-motion";
import { headingFont } from "@/app/layout";
import { FaJava, FaJs, FaSwift, FaGithub, FaNodeJs, FaTerminal } from "react-icons/fa";
import { SiPandas, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Projects(){
    const projects =[
        {
            title: "Portfolio Website",
            desc: "A minimal-style portfolio website that showcases skills and projects. It serves as a central place to learn more about me, explore what I'm working on, and get in touch.",
            tech: ["JavaScript", "Tailwind CSS", "Next.js"],
            image: "/portfolio.png",
            code: "https://github.com/dot-Deena/Portfolio2",
            live: "#"
        },
        {
            title: "Indian Sign language detection",
            desc: "A deep learning model to detect Indian Sign Language executed using a CNN architecture for training the model",
            tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
            image: "/cnn.webp",
            code: "https://github.com/dot-Deena/Sign-language",
            live: "#"
        },
        {
            title: "Mental Health Wellness App",
            desc: "Cordis, an iOS app for mental health tracking with insightful charts. It includes meditation, journaling, and mood-tracking features.",
            tech: ["Swift", "SwiftUI", "Xcode"],
            image: "/app.jpeg",
            code: "#",
            live: "#"
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
                className="absolute top-[160px] left-[160px] text-purple-400 text-4xl hidden md:block"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                >
                <FaJava/>
                </motion.div>

                <motion.div
                className="absolute top-[420px] right-[30px] text-purple-400 text-4xl hidden md:block"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                >
                <FaSwift/>
                </motion.div>

                <motion.div
                className="absolute bottom-[140px] right-20 text-purple-400 text-4xl hidden md:block"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay:0.5 }}
                >
                <SiMongodb/>
                </motion.div>

                <motion.div className="absolute bottom-30 right-20 text-purple-400 text-4xl hidden md:block"
                animate={{y: [0, -20, 0] }}
                transition={{duration:4, repeat:Infinity, delay:2}}>
                <FaGithub/>
                </motion.div>

                <motion.div className="absolute top-30 left-[620px] text-purple-400 text-4xl hidden md:block"
                animate={{y: [0, -20, 0] }}
                transition={{duration:4, repeat:Infinity, delay:2}}>
                <SiPandas/>
                </motion.div>

                <motion.div className="absolute top-[420px] right-30 text-purple-400 text-4xl hidden md:block"
                animate={{y: [0, -20, 0] }}
                transition={{duration:4, repeat:Infinity, delay:1}}>
                <FaNodeJs/>
                </motion.div>

                <motion.div className="absolute bottom-10 right-[800px] text-purple-400 text-4xl hidden md:block"
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
                        {/* image is oevr hereeee */}
                        <img src={project.image} className="h-40 w-full object-cover rounded-lg mb-4"   /> 

                    <h3 className="text-xl text-white font-semibold mb-6"> {project.title}</h3>

                    <p className="text-gray-400 mb-9"> {project.desc} </p>
                    {/* tags below */}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 text-white bg-gray-800 rounded-full text-sm hover:bg-purple-600 transition"> {t} </span>
                        ))}
                    </div>
                    {/* buttons below */}
                    <div className="flex gap-4 mt-6">
                        <a href={project.code} target="_blank" rel="noopener norreferrer" className="px-4 py-2 border text-white border-gray-700 rounded-lg hover:border-purple-500 transition"> Code </a>
                        <a href={project.live} target="_blank" rel="noopener norreferrer" className="px-4 py-2 bg-purple-600 rounded-lg text-bold text-white"> Live </a>
                    </div>
                </motion.div>
                ))}
            </div>
        </motion.div>
        </section>
    );
}