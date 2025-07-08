"use client";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const floatingSymbols = [
  { icon: <FaCode className="text-5xl" />, style: "left-10 top-10", delay: 0 },
  { icon: <FaEnvelope className="text-4xl" />, style: "right-20 bottom-20", delay: 0.3 },
];

const blurredLetters = [
  { letter: "@", style: "left-0 top-1/2 text-[10rem] opacity-10" },
  { letter: "?", style: "right-0 bottom-0 text-[12rem] opacity-10" },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgvyjkow"; // Replace with your real Formspree endpoint

const ContactSection = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
    };
    setStatus("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("Message sent! Thank you.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again later.");
      }
    } catch {
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-950 flex flex-col items-center relative overflow-hidden">
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
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold mb-6 text-green-400 z-10">Contact</motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="flex flex-col gap-4 w-full max-w-md backdrop-blur-lg bg-gray-900/80 p-8 rounded-xl shadow border border-green-900/30 z-10"
      >
        <div className="flex gap-2 items-center">
          <FaEnvelope className="text-green-400" />
          <input name="email" type="email" placeholder="Your Email" className="flex-1 px-3 py-2 rounded border border-gray-700 bg-transparent outline-none text-white" required />
        </div>
        <div className="flex gap-2 items-center">
          <FaPhone className="text-green-400" />
          <input name="phone" type="tel" placeholder="Your Phone" className="flex-1 px-3 py-2 rounded border border-gray-700 bg-transparent outline-none text-white" />
        </div>
        <textarea name="message" placeholder="Your Message" className="px-3 py-2 rounded border border-gray-700 bg-transparent outline-none resize-none min-h-[100px] text-white" required />
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-700 transition-colors">Send Message</button>
        {status && <p className="text-green-400 mt-2 text-center">{status}</p>}
      </motion.form>
      <div className="flex gap-6 mt-8 text-2xl z-10">
        <a href="mailto:dummy@email.com" className="hover:text-green-400 text-white"><FaEnvelope /></a>
        <a href="https://github.com/dummy" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 text-white"><FaGithub /></a>
        <a href="https://linkedin.com/in/dummy" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 text-white"><FaLinkedin /></a>
      </div>
    </section>
  );
};

export default ContactSection; 