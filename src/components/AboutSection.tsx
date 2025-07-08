"use client";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDownload, FaKeyboard, FaCode } from "react-icons/fa";
import { SiExpress, SiMongodb, SiOpenai } from 'react-icons/si';
import { motion } from "framer-motion";
import Image from "next/image";

const floatingSymbols = [
  { icon: <FaKeyboard className="text-5xl" />, style: "left-10 top-10", delay: 0 },
  { icon: <FaCode className="text-4xl" />, style: "right-20 bottom-20", delay: 0.3 },
];

const blurredLetters = [
  { letter: "{", style: "left-0 top-1/2 text-[10rem] opacity-10" },
  { letter: "e", style: "right-0 bottom-0 text-[12rem] opacity-10" },
];

const AboutSection = () => (
  <section id="about" className="py-20 px-4 bg-gray-950 flex flex-col items-center relative overflow-hidden">
    {/* Green radial gradient background */}
    <div className="absolute inset-0 -z-20 bg-gradient-radial from-green-700/40 via-transparent to-transparent" />
    {/* Large blurred code/keyboard letters */}
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
    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold mb-10 text-green-400 z-10">About Me</motion.h2>
    <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl w-full z-10">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex-shrink-0">
        <div className="backdrop-blur-lg bg-gray-900/60 rounded-2xl shadow-2xl p-4 border border-green-900/30">
          <Image
            src="/Mansi_profile.jpeg"
            alt="Mansi profile photo"
            width={180}
            height={270}
            className="border-4 border-green-400 shadow-lg object-cover"
          />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="flex-1 text-center md:text-left">
        <div className="backdrop-blur-lg bg-gray-900/80 rounded-2xl shadow-2xl p-8 border border-green-900/30">
          <p className="text-lg mb-4 text-white">
            I am a web developer with a passion for building beautiful and functional web applications. I love working with modern technologies and always strive to learn and grow.
          </p>
          <div className="flex gap-6 mt-4 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-2 text-green-400 text-xl"><FaReact /> React</span>
            <span className="flex items-center gap-2 text-yellow-400 text-xl"><FaJs /> JavaScript</span>
            <span className="flex items-center gap-2 text-green-400 text-xl"><FaNodeJs /> Node.js</span>
            <span className="flex items-center gap-2 text-orange-400 text-xl"><FaHtml5 /> HTML5</span>
            <span className="flex items-center gap-2 text-green-300 text-xl"><FaCss3Alt /> CSS3</span>
            <span className="flex items-center gap-2 text-green-500 text-xl"><SiMongodb /> MongoDB</span>
            <span className="flex items-center gap-2 text-gray-300 text-xl"><SiExpress /> Express.js</span>
            <span className="flex items-center gap-2 text-purple-400 text-xl"><SiOpenai /> AI Tools</span>
          </div>
          <a href="http://bit.ly/3EX1p7Q" download className="mt-8 inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-green-700 transition-colors">
            <FaDownload /> Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection; 