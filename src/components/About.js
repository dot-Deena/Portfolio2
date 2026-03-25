"use client";

export default function About(){
    return (
        <section id="about" className="min-h-screen px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-10"> About Me </h2>

            <div data-aos="fade-right" className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"> 
            {/* JOURNEY CARD!! */}
                <div className="bg-gray-900 p-6 rounded-2xl col-span-1 ">
                    <h3 className="text-xl text-white font-semibold mb-2">My Journey</h3>
                        <p className="text-gray-400"> Aspiring SDE currently studying </p>
                </div>

            {/* education */}
                 <div className="bg-gray-900 p-6 rounded-2xl col-span-1 ">
                     <h3 className="text-xl text-white font-semibold mb-2">Education</h3>
                     <p className="text-gray-400"> VNRVJIET</p>
                </div>

             {/* passion */}
                 <div className="bg-gray-900 p-6 rounded-2xl col-span-1 ">
                    <h3 className="text-xl text-white font-semibold mb-2">Passion</h3>
                    <p className="text-gray-400"> AI, ML, Development</p>
                </div>

             {/* Techstack */}
                 <div className="bg-gray-900 p-6 rounded-2xl col-span-1 ">
                     <h3 className="text-xl text-white font-semibold mb-2">Tech Stack</h3>
                      <p className="text-gray-400">HTML, CSS, JS, Python</p>
                </div>
            </div>
        </section>
    );

}