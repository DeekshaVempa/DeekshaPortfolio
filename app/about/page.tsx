
"use client";

import dynamic from "next/dynamic";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

export default function AboutPage() {
  const images = [
    {
      src: "/travel-pic.png",
      alt: "Travel Adventures",
      label: "Wanderlust 🌍",
      delay: 0,
    },
    {
      src: "/food-pic.png",
      alt: "Cooking Experiments",
      label: "Chef Mode 🍜",
      delay: 0.2,
    },
    {
      src: "/gym-pic.png",
      alt: "Fitness Grind",
      label: "Gym Flow 💪",
      delay: 0.4,
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <NavBar />

      {/* Floating glowing blobs */}
      <div className="absolute top-0 left-10 w-64 h-64 bg-pink-400 opacity-10 rounded-full filter blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-400 opacity-10 rounded-full filter blur-3xl animate-pulse z-0" />

      <div className="relative z-10 max-w-6xl mx-auto py-24 px-6 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Sparkles className="w-8 h-8 text-pink-400 mx-auto mb-4 animate-bounce" />
          <h1 className="text-5xl md:text-6xl font-bold font-mono text-pink-300 mb-6">
            Hello, I&apos;m Deeksha!
          </h1>
          <p className="text-xl font-sans mb-12 text-white">
            I craft engaging web experiences and love blending creativity with code. When I&apos;m not programming, you&apos;ll find me exploring the world, cooking new recipes, or lifting weights.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {images.map((img) => (
            <MotionDiv
              key={img.src}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: img.delay }}
            >
              <Image
              src={img.src}
              alt={img.alt}
              width={300}
              height={400}
              loading="lazy"
              className="w-[300px] h-[400px] object-cover rounded-2xl shadow-lg"
            />

              <p className="mt-4 text-pink-200 font-mono text-lg">{img.label}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
