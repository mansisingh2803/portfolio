"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";

const floatingSymbols = [
  { icon: <FaCode className="text-5xl" />, style: "left-10 top-10", delay: 0 },
  { icon: <FaLaptopCode className="text-4xl" />, style: "right-20 bottom-20", delay: 0.3 },
];

const blurredLetters = [
  { letter: "#", style: "left-0 top-1/2 text-[10rem] opacity-10" },
  { letter: "/", style: "right-0 bottom-0 text-[12rem] opacity-10" },
];

const experiences = [
  {
    icon: <FaBriefcase className="text-green-400 text-xl" />,
    title: "Software Engineer @ IBM",
    period: "September 2023 - Present",
    description: "Building modern, responsive UIs with React and Next.js. Led the migration to a new design system. Built scalable REST APIs and integrated Redis caching, reducing response times by 300ms and database load by 35%. •Developed real-time updates using WebSockets, increasing user engagement by 25%. Implemented and managed CI/CD deployment processes using AWS services.",
  },
  {
    icon: <FaBriefcase className="text-green-400 text-xl" />,
    title: "Software Developer @ Geeksforgeeks",
    period: "Feb 2023 - August 2023",
    description: "Enhanced the Suggestion Portal by designing responsive UIs using React.js, Next.js, and TypeScript, improving user experience and scalability. Improved database performance by 25% through MongoDB aggregation pipelines and efficient query optimization.",
  },
  {
    icon: <FaGraduationCap className="text-green-400 text-xl" />,
    title: "B.Tech in Electronics and Communication Engineering",
    period: "2019 - 2023",
    description: "Specialized in web technologies and software engineering. Currently mastering AI tools",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20 px-4 bg-gray-950 flex flex-col items-center relative overflow-hidden">
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
    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold mb-10 text-green-400 z-10">Experience Journey</motion.h2>
    <div className="relative max-w-2xl w-full z-10">
      {/* Vertical timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-green-700 to-green-900 rounded-full opacity-40" />
      <div className="flex flex-col gap-12 pl-16">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="relative backdrop-blur-lg bg-gray-900/80 rounded-xl shadow-lg p-6 flex flex-col gap-2 border-l-4 border-green-900/30"
          >
            <div className="absolute -left-12 top-6 flex items-center justify-center w-12 h-12 bg-gray-950 rounded-full shadow-lg border-2 border-green-400">
              {exp.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
            <span className="text-sm text-gray-400">{exp.period}</span>
            <p className="text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection; 