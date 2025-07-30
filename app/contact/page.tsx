"use client";

import NavBar from "../../components/NavBar";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <NavBar />

      {/* Glowing orbs for visual flair */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-600 opacity-20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-500 opacity-20 rounded-full filter blur-3xl animate-pulse" />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 text-center relative z-10">
        <motion.h1 
          className="text-5xl font-bold font-mono mb-6 text-pink-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          📮 Let's Connect!
        </motion.h1>

        <p className="text-lg text-pink-200 mb-10 max-w-xl">
          I'm always open to chatting with fellow devs, creatives, recruiters, and collaborators. Choose your favorite platform to say hi!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Email */}
          <ContactCard
            icon={<Mail className="w-8 h-8" />}
            title="Email"
            link="mailto:deekshavemp@gmail.com"
          />

          {/* GitHub */}
          <ContactCard
            icon={<Github className="w-8 h-8" />}
            title="GitHub"
            link="https://github.com/DeekshaVempa"
          />

          {/* LinkedIn */}
          <ContactCard
            icon={<Linkedin className="w-8 h-8" />}
            title="LinkedIn"
            link="https://www.linkedin.com/in/deeksha-vempati/"
          />
        </div>
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  link: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black border border-pink-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform w-64 flex flex-col items-center text-center gap-3"
      whileHover={{ scale: 1.08 }}
    >
      <div className="text-pink-400">{icon}</div>
      <span className="text-base md:text-lg font-medium break-words">{title}</span>
    </motion.a>
  );
}

