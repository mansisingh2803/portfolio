"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCode, FaTerminal } from "react-icons/fa";

const floatingSymbols = [
  { icon: <FaLaptopCode className="text-5xl" />, style: "left-10 top-10", delay: 0 },
  { icon: <FaTerminal className="text-4xl" />, style: "right-20 bottom-20", delay: 0.3 },
];

const blurredLetters = [
  { letter: "<", style: "left-0 top-1/2 text-[10rem] opacity-10" },
  { letter: "/>", style: "right-0 bottom-0 text-[12rem] opacity-10" },
];

const projects = [
  { title: "Portfolio Website", desc: "A modern, animated portfolio built with Next.js and Tailwind CSS.", icon: <FaLaptopCode className="text-green-400 text-3xl" />, link: "https://github.com/yourusername/portfolio"  },
  { title: "Netflix Gemini – AI-Powered Movie Recommender Web App", desc: "Netflix Gemini is a smart movie streaming UI inspired by Netflix, enhanced with AI capabilities using Google Gemini", icon: <FaLaptopCode className="text-green-400 text-3xl" />,link: "https://netflixgemini-144c3.web.app/" },
  { title: "MoonBee Kitchen – Food Ordering Web App", desc: "A responsive food delivery web application inspired by platforms like Swiggy and Zomato. Built with a focus on seamless user experience, fast performance, and intuitive UI.", icon: <FaLaptopCode className="text-green-400 text-3xl" />, link: "https://moonbee-1db10.web.app/" },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 px-4 bg-gray-950 flex flex-col items-center relative overflow-hidden">
    {/* Green radial gradient background */}
    <div className="absolute inset-0 -z-20 bg-gradient-radial from-green-700/40 via-transparent to-transparent" />
    {/* Large blurred code symbols */}
    {blurredLetters.map((b, i) => (
      <span
        key={i}
        className={`pointer-events-none select-none absolute font-black text-white ${b.style}`}
        style={{ filter: "blur(4px)" }}
      >
        {b.letter}
      </span>
    ))}
    {/* Floating developer icons */}
    {floatingSymbols.map((s, i) => (
      <motion.div
        key={i}
        className={`absolute ${s.style} text-white drop-shadow-2xl opacity-40`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.4 }}
        transition={{ delay: s.delay, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        {s.icon}
      </motion.div>
    ))}
    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold mb-10 text-green-400 z-10">Projects</motion.h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full z-10">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="backdrop-blur-lg bg-gray-900/80 rounded-xl shadow-lg p-6 flex flex-col gap-4 border border-green-900/30 hover:scale-[1.03] transition-transform"
        >
          <div className="flex items-center gap-3 mb-2">
            {project.icon}
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          </div>
          <p className="text-gray-300">{project.desc}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline font-medium w-fit">View Project</a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProjectsSection; 