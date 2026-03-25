"use client";
import {motion} from "framer-motion";

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
        <section id="projects" className="min-h-screen px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

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
        </section>
    );
}