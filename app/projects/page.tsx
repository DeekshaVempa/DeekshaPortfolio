"use client";

import { useState } from "react";
import NavBar from "../../components/NavBar";
import { Code2, Github, Cloud, Hospital, Waves } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: ReactNode;
  image: string;
  link?: string;
}

const cloudProject: Project = {
  title: "Cloud Native Application",
  description:
    "Optimized cloud infra by 20%, built event-driven systems with Python & Pub/Sub, and automated CI/CD with Terraform, Packer, and GitHub Actions.",
  tags: ["Terraform", "AWS", "GCP", "GitHub Actions", "Python", "Pub/Sub"],
  icon: <Cloud className="w-6 h-6 text-pink-300" />,
  image: "/project1.png",
  link: "https://github.com/CloudApplication"
};

const hospitalProject: Project = {
  title: "Hospital Management System",
  description:
    "Multi-threaded Java system with Swing UI, backend optimization, indexing & caching for speed and scale.",
  tags: ["Java", "Swing", "MySQL", "OOP"],
  icon: <Hospital className="w-6 h-6 text-pink-300" />,
  image: "/project2.png"
};

const audioProject: Project = {
  title: "Audio to Sign Language Translator",
  description:
    "Real-time translator using Python & NLP, 90% accuracy, and responsive front-end with React.js for accessibility.",
  tags: ["Python", "NLP", "React.js", "HTML", "CSS", "JavaScript"],
  icon: <Waves className="w-6 h-6 text-pink-300" />,
  image: "/project3.png",
  link: "https://github.com/DeekshaVempa/Audio-to-Sign-Language-Translator"
};

export default function ProjectsPage() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <NavBar />

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <Code2 className="w-8 h-8 text-pink-400 mx-auto mb-3" />
          <h1 className="text-5xl font-bold font-mono text-pink-300">Projects</h1>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* First two projects side by side */}
          {[cloudProject, hospitalProject].map((proj, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border border-pink-500 rounded-xl shadow-lg hover:shadow-pink-500/20 transition-all group p-5 flex flex-col"
            >
              {/* GitHub link */}
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
              )}
              <div className="flex items-center gap-3 mb-2">
                {proj.icon}
                <h3 className="text-xl font-semibold text-pink-200">{proj.title}</h3>
              </div>
              <div className="overflow-hidden rounded-lg border border-pink-300 mb-4">
                <Image
                  src={proj.image}
                  alt={`${proj.title} screenshot`}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-pink-100/80 mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-pink-800/40 text-white px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Centered third project */}
          <div className="md:col-span-2 md:w-1/2 md:mx-auto bg-[#1a1a1a] border border-pink-500 rounded-xl shadow-lg hover:shadow-pink-500/20 transition-all group p-5 flex flex-col">
            {/* GitHub link */}
            {audioProject.link && (
              <a
                href={audioProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            )}
            <div className="flex items-center gap-3 mb-2">
              {audioProject.icon}
              <h3 className="text-xl font-semibold text-pink-200">{audioProject.title}</h3>
            </div>
            <div className="overflow-hidden rounded-lg border border-pink-300 mb-4">
              <Image
                src={audioProject.image}
                alt={`${audioProject.title} screenshot`}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <p className="text-sm text-pink-100/80 mb-4">{audioProject.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {audioProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-pink-800/40 text-white px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Load More button (optional if you add more) */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm font-mono px-6 py-2 border border-pink-400 text-pink-200 rounded hover:bg-pink-500/10 transition"
          >
            {showAll ? "Show Less" : "Load More Projects"}
          </button>
        </div> 
      </div>
    </div>
  );
}
