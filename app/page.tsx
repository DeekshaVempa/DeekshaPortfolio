"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  return (
    <main className="relative flex flex-col items-center text-center px-4 pt-40 pb-12 md:pb-24 overflow-hidden min-h-screen bg-black text-white">
      {/* Intro overlay */}
      {!showContent && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 gap-6">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-400 border-t-transparent" />
          <button
            onClick={() => {
              setShowContent(true);
              const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
              const ctx = new AudioCtx();
              const osc = ctx.createOscillator();
              const gain = ctx.createGain();
              osc.connect(gain);
              gain.connect(ctx.destination);
              osc.frequency.value = 600;
              gain.gain.setValueAtTime(0.05, ctx.currentTime);
              osc.start();
              osc.stop(ctx.currentTime + 0.1);
            }}
            className="font-mono px-6 py-2 border-2 border-pink-500 bg-pink-400/30 text-white rounded shadow hover:scale-105 active:scale-95 transition"
          >
            Click here to know about me
          </button>
        </div>
      )}

      {/* Hero content */}
      {showContent && (
        <>
          <div className="max-w-3xl flex flex-col items-center gap-6 z-10">
            {/* Animated profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-40 h-40 md:w-52 md:h-52 relative"
            >
              <Image
                src="/profile.png"
                alt="Deeksha portrait"
                fill
                sizes="(max-width: 768px) 10rem, 13rem"
                className="object-cover rounded-full shadow-xl border-4 border-pink-300"
                priority
              />
            </motion.div>

            {/* Typewriter animated name */}
            <h1 className="text-4xl md:text-6xl text-pink-300 font-mono drop-shadow-sm">
              <Typewriter
                words={['Deeksha']}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>

            {/* Typewriter animated title */}
            <h2 className="text-xl md:text-3xl font-semibold font-mono text-white">
              <Typewriter
                words={['Software Engineer']}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2500}
              />
            </h2>

            {/* Animated CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link
                href="/about"
                className="font-mono text-sm md:text-base px-4 py-2 mt-2 rounded shadow-md bg-pink-500 text-white hover:bg-pink-600 active:scale-95 transition"
              >
                Learn More
              </Link>
            </motion.div>

            <NavBar />
          </div>

          {/* Floating clouds */}
          <div className="absolute top-8 right-4 w-24 h-12 bg-white/60 rounded-full blur-md animate-cloud-move"></div>
          <div className="absolute top-24 left-8 w-32 h-16 bg-white/60 rounded-full blur-md animate-cloud-move-slow"></div>

          {/* Scroll arrow */}
          <div className="absolute bottom-6 flex flex-col items-center gap-1 text-pink-400 animate-bounce-slow">
            <ArrowDown className="w-6 h-6" />
          </div>
        </>
      )}
    </main>
  );
}
