"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { headingFont } from "@/app/layout";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    )
      .then(
        () => {
          alert("Message sent successfully");
        },
        (error) => {
          alert("Failed to send");
          console.log(error);
        }
      );
  };
  return (
    <section id="contact" className="min-h-screen px-6 py-20 bg-[#0a0a0a]">

      {/* HEADING */}
      <h2 className={`${headingFont} py-10 text-4xl font-bold text-center text-white mb-50`}> Get in touch </h2>

      <p className="text-center text-gray-400 mb-12">
        Let's build something amazing together
      </p>

      {/* GRID */}
      <div className={`${headingFont} grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch`}>

        {/* LEFT SIDE (cards) */}
        <div className="flex flex-col gap-6 h-full">

        <a href="mailto:intideenasreshta@gmail.com">
          <motion.div 
          whileHover={{ scale: 1.03, y:-5 }}
          data-aos="fade-up" className="bg-gray-900 text-white p-6 mt-2 mb-2 rounded-2xl border border-gray-800
          hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <div className="flex items-center gap-3 mb-5">
            <FaEnvelope className="text-purple-500 text-2xl" />
            <h3 className={`${headingFont} text-lg font-semibold`}>Email</h3>
            </div>
            <p className="text-gray-400">intideenasreshta@gmail.com</p>
          </motion.div>
        </a>

        <a href="https://www.linkedin.com/in/deena-sreshta/" target="_blank" rel="noopener noreferrer">
          <motion.div data-aos="fade-up" 
          whileHover={{ scale: 1.03, y:-5 }}
          className="bg-gray-900 text-white p-6 mt-2 mb-2 rounded-2xl border border-gray-800
          hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <div className="flex items-center gap-3 mb-5">
            <FaLinkedin className="text-purple-500 text-2xl" />
            <h3 className={`${headingFont} text-lg font-semibold`}>LinkedIn</h3>
            </div>
            <p className="text-gray-400">linkedin.com/in/deena-sreshta</p>
          </motion.div>
        </a>

        <a href="https://github.com/dot-Deena" target="_blank" rel="noopener noreferrer">
          <motion.div 
          data-aos="fade-up" className="bg-gray-900 text-white mt-2 p-6 mb-2 rounded-2xl border border-gray-800
          hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
          <div className="flex items-center gap-3 mb-5">
          <FaGithub className="text-purple-500 text-2xl" />
            <h3 className={`${headingFont} text-lg font-semibold`}>GitHub</h3>
          </div>
            <p className="text-gray-400">github.com/dot-Deena</p>
          </motion.div>
        </a>

        </div>

        {/* RIGHT SIDE (form card) */}
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">

          <form 
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="p-3 text-white bg-gray-800 rounded-lg border border-gray-700 outline-none" required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="p-3 text-white bg-gray-800 rounded-lg border border-gray-700 outline-none" required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="10"
              className="p-3 text-white bg-gray-800 rounded-lg border border-gray-700 outline-none" required
            />

            <button className="text-white mt-4 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition" type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}