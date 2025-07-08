"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaLaptopCode, FaMousePointer, FaKeyboard } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHashtag, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const scrollToSection = (id: string) => {
  if (typeof window !== "undefined") {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

const typewriterWords = [
  "Full Stack Developer.",
  "Exploring AI and Modern Tooling",
  "React & Next.js Expert.",
  "Open Source Contributor.",
  "Freelancer",
];

function useTypewriter(words: string[], speed = 80, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  useEffect(() => {
    setText(words[index].substring(0, subIndex));
  }, [subIndex, index, words]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return text + (blink ? "|" : "");
}

const floatingSymbols = [
  { icon: <span className="text-7xl font-black">{'{'}</span>, style: "left-0 top-0", delay: 0 },
  { icon: <FaHashtag className="text-4xl" />, style: "right-32 top-24", delay: 0.2 },
  { icon: <FaChevronRight className="text-5xl rotate-90" />, style: "left-1/4 bottom-10", delay: 0.4 },
];

const blurredLetters = [
  { letter: "e", style: "left-0 top-1/3 text-[18rem] opacity-10" },
  { letter: "d", style: "right-0 bottom-0 text-[20rem] opacity-10" },
];

const HomeSection = () => {
  const typewriter = useTypewriter(typewriterWords);
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[90vh] text-center px-4 overflow-hidden bg-gray-950">
      {/* Green radial gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-radial from-green-700/40 via-transparent to-transparent" />
      {/* Large blurred code letters */}
      {blurredLetters.map((b, i) => (
        <span
          key={i}
          className={`pointer-events-none select-none absolute font-black text-white ${b.style}`}
          style={{ filter: "blur(4px)" }}
        >
          {b.letter}
        </span>
      ))}
      {/* Floating 3D code symbols */}
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
      {/* Section label */}
      <span className="uppercase tracking-widest text-xs text-gray-400 mb-2 z-10">Home</span>
      {/* Headline */}
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 z-10 text-white max-w-lg mx-auto leading-tight">
          Hi, I&apos;m <span className="text-green-400">Mansi</span>, a <span className="text-green-400">creative developer</span>
        </h1>
        {/* Subtitle */}
        <p className="text-gray-400 max-w-md mx-auto z-10 text-base md:text-lg mb-2">
          I bring value to web development projects by merging technical expertise with creativity and aesthetics.
        </p>
      </div>
      {/* Background image of laptop with code */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/laptop-bg.jpg" // or your actual background image path
          alt="Laptop with code"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 to-gray-900/80" />
      </div>
      {/* Floating developer icons */}
      <FaLaptopCode className="absolute left-10 top-20 text-blue-500 text-5xl opacity-30 animate-float-slow" />
      <FaMousePointer className="absolute right-16 top-1/2 text-pink-400 text-4xl opacity-30 animate-float" />
      <FaKeyboard className="absolute left-1/3 bottom-16 text-purple-400 text-5xl opacity-30 animate-float-rev" />
      {/* Social Icons */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="flex gap-4 justify-center mb-8">
        <motion.a whileHover={{ scale: 1.2, rotate: -10 }} href="https://github.com/mansisingh2803" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-2xl transition-transform text-white"><FaGithub /></motion.a>
        <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="https://www.linkedin.com/in/mansi-singh-0153351aa/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-2xl transition-transform text-white"><FaLinkedin /></motion.a>
        <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="mailto:mansisinghsengar28@gmail.com" className="hover:text-blue-400 text-2xl transition-transform text-white"><FaEnvelope /></motion.a>
      </motion.div>
      {/* Buttons */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }} className="flex flex-col sm:flex-row gap-4 justify-center">
        <button onClick={() => scrollToSection('projects')} className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition-colors">
          View My Work
        </button>
        <a href="http://bit.ly/3EX1p7Q" download className="bg-gray-800 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-700 transition-colors flex items-center justify-center">
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default HomeSection;
// Add this to your globals.css for floating icon animations:
// .animate-float { animation: float 4s ease-in-out infinite alternate; }
// .animate-float-rev { animation: float-rev 5s ease-in-out infinite alternate; }
// .animate-float-slow { animation: float 7s ease-in-out infinite alternate; }
// @keyframes float { 0% { transform: translateY(0); } 100% { transform: translateY(-20px); } }
// @keyframes float-rev { 0% { transform: translateY(0); } 100% { transform: translateY(20px); } }
// .bg-gradient-radial {
//   background: radial-gradient(circle at 60% 40%, #22c55e 0%, transparent 70%);
// } 