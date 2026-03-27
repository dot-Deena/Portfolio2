"use client";
import { headingFont } from "@/app/layout";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";

export default function About(){
    return (
        <section id="about" className="min-h-screen px-6 py-20 bg-[#0a0a0a]">

            <h2 className={` ${headingFont.className} text-white py-10 text-4xl font-bold text-center`}> About Me </h2>
            <p className="text-white py-50 text-center mb-20 "> Ambitious Information Technology student passionate about crafting immersive digital experiences. </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

    {/* Journey 1st card */}
    <div data-aos="fade-up-right" className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
      <h3 className={` ${headingFont.className} text-white text-xl font-semibold mb-3` }>My Journey</h3>
      <p className="text-gray-400 mb-6">
        Started coding with curiosity, now exploring full-stack development and machine learning.
      </p>

      {/* stats */}
      <div className="flex gap-10">
        <div>
          <p className={` ${headingFont.className} text-purple-500 text-2xl font-bold`}>2+</p>
          <p className="text-gray-500 text-sm">Years Coding</p>
        </div>

        <div>
          <p className={` ${headingFont.className} text-purple-500 text-2xl font-bold`}>10+</p>
          <p className="text-gray-500 text-sm">Projects</p>
        </div>

        <div>
          <p className={` ${headingFont.className} text-purple-500 text-2xl font-semibold`}>VNR VJIET</p>
          <p className="text-gray-500 text-sm">College</p>
        </div>
      </div>
    </div>

    {/* Education  2nd */}
    <div data-aos="fade-up-right" data-aos-delay="200" className="bg-gray-900 p-6 rounded-2xl border border-gray-700">

        <div className="flex items-center gap-3">
        <h3 className={`${headingFont.className} text-white text-lg font-semibold mb-2`}>Education</h3>
        <FaGraduationCap className="text-purple-500 text-4xl relative top-[-5px]"/>
        </div>
      
      <p className="text-gray-400 mb-5"> 3rd year Information Technology undergrad </p>
      <p className="text-gray-500 text-sm">2023-present</p>
    </div>
    
    {/* Passion 3rd  */}
    <div data-aos="fade-up-right" data-aos-delay="400" className="bg-gray-900 p-6 rounded-2xl border border-gray-700">
        <div className="flex items-center gap-3">
            <h3 className={` ${headingFont.className} text-white text-lg font-semibold mb-3`}>Passion</h3>
            <IoCodeSlash className="text-purple-500 text-4xl relative top-[-5px]"/>
        </div>


      <div className="flex flex-wrap gap-2 text-white">
        <span className=" px-3 py-1 bg-purple-600 rounded-full text-sm">Full stack development</span>
        <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">AI & ML</span>
        <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">DSA</span>
      </div>
    </div>

    {/* Tech Stack 4th */}
    <div data-aos="fade-up-right" data-aos-delay="500" className="md:col-span-2 bg-gray-900 p-6 rounded-2xl border border-gray-700">
      <h3 className={` ${headingFont.className} text-white text-lg font-semibold mb-4`}>Tech Stack</h3>

      <div className="flex flex-wrap gap-3 text-white">
        <motion.span whileHover={{ scale: 1.03, y:-5 }} className="px-3 py-1 border border-gray-600 rounded-lg text-sm hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]" >HTML</motion.span>
        <motion.span whileHover={{ scale: 1.03, y:-5 }} className="px-3 py-1 border border-gray-600 rounded-lg text-sm hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">CSS</motion.span>
        <motion.span whileHover={{ scale: 1.03, y:-5 }} className="px-3 py-1 border border-gray-600 rounded-lg text-sm hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">JavaScript</motion.span>
        <motion.span whileHover={{ scale: 1.03, y:-5 }} className="px-3 py-1 border border-gray-600 rounded-lg text-sm hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">Python</motion.span>
        <motion.span whileHover={{ scale: 1.03, y:-5 }} className="px-3 py-1 border border-gray-600 rounded-lg text-sm hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">Java</motion.span>
        <motion.span whileHover={{ scale: 1.03, y:-5 }} className="px-3 py-1 border border-gray-600 rounded-lg text-sm hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">Git</motion.span>
        <motion.span whileHover={{ scale: 1.03, y:-5 }} className="px-3 py-1 border border-gray-600 rounded-lg text-sm hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">React</motion.span>
        <motion.span whileHover={{ scale: 1.03, y:-5 }} className="px-3 py-1 border border-gray-600 rounded-lg text-sm hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">Swift</motion.span>

      </div>
    </div>

  </div>
        </section>
    );

}