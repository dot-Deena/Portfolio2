"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-20">

      {/* HEADING */}
      <h2 className="text-3xl font-bold text-center mb-10">
        Let’s Connect
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Ready to start your next project? Let’s talk
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">

        {/* LEFT SIDE (cards) */}
        <div className="flex flex-col gap-6 h-full">

          <div data-aos="fade-up" className="bg-gray-900 text-white p-6 mt-2 mb-2 rounded-2xl border border-gray-800">
          <FaEnvelope className="text-purple-500 text-2xl" />
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-400">youremail@gmail.com</p>
          </div>

          <div data-aos="fade-up" className="bg-gray-900 text-white p-6 mt-2 mb-2 rounded-2xl border border-gray-800">
          <FaEnvelope className="text-purple-500 text-2xl" />
            <h3 className="text-lg font-semibold">LinkedIn</h3>
            <p className="text-gray-400">linkedin.com/in/yourname</p>
          </div>

          <div data-aos="fade-up" className="bg-gray-900 text-white mt-2 p-6 mb-2 rounded-2xl border border-gray-800">
          <FaGithub className="text-purple-500 text-2xl" />
            <h3 className="text-lg font-semibold">GitHub</h3>
            <p className="text-gray-400">github.com/yourname</p>
          </div>

        </div>

        {/* RIGHT SIDE (form card) */}
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 bg-gray-800 rounded-lg border border-gray-700 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 bg-gray-800 rounded-lg border border-gray-700 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="10"
              className="p-3 bg-gray-800 rounded-lg border border-gray-700 outline-none"
            />

            <button className="mt-4 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}