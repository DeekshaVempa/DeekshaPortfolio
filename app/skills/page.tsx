'use client';

import NavBar from "../../components/NavBar";
import { motion } from "framer-motion";

const techCategories = [
  {
    title: "🧠 Languages",
    items: ["C#", "Java", "C++", "Python", "SQL", "JavaScript"]
  },
  {
    title: "🌐 Frameworks & Libraries",
    items: [".NET Core", "React.js", "Node.js", "Express", "Gherkin", "Swing"]
  },
  {
    title: "🗃️ Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    title: "☁️ DevOps & Tools",
    items: [
      "Terraform", "GitHub Actions", "Helm", "ArgoCD",
      "Packer", "Git", "CloudWatch", "MockServer"
    ]
  },
  {
    title: "📡 Distributed Systems",
    items: [
      "NATS", "Pub/Sub", "Kubernetes", "Docker",
      "Consistency Models", "Sharding", "Load Balancing"
    ]
  },
  {
    title: "🧰 Other Concepts",
    items: [
      "Object-Oriented Programming",
      "Algorithms",
      "System Design",
      "CI/CD",
      "Testing & Monitoring"
    ]
  }
];

const experienceLevels = [
  { skill: "Python", level: "Expert" },
  { skill: "React.js", level: "Expert" },
  { skill: "C#", level: "Advanced" },
  { skill: "Java", level: "Advanced" },
  { skill: "Terraform", level: "Advanced" },
  { skill: "GitHub Actions", level: "Advanced" },
  { skill: "Docker", level: "Advanced" },
  { skill: "SQL", level: "Advanced" },
  { skill: "Kubernetes", level: "Intermediate" },
  { skill: "Node.js", level: "Intermediate" },
  { skill: "MongoDB", level: "Intermediate" },
  { skill: "PostgreSQL", level: "Intermediate" },
  { skill: "Helm", level: "Learning" },
  { skill: "ArgoCD", level: "Learning" }
];

export default function SkillsPage() {
  return (
    <div className="relative py-20 px-4 md:px-8 max-w-5xl mx-auto text-white">
      <NavBar />
      <h1 className="text-4xl md:text-5xl text-center mb-10 font-mono text-pink-400">
        🛠️ My Skill Quest
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techCategories.map(({ title, items }) => (
          <div key={title} className="border border-pink-500 rounded-xl p-4 bg-black/30">
            <h2 className="text-xl font-bold mb-2 text-pink-300">{title}</h2>
            <div className="flex flex-wrap gap-2">
              {items.map((tech) => (
                <span key={tech} className="bg-pink-500/10 border border-pink-500 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl mt-12 mb-4 text-center font-mono text-pink-300">
        🎯 Experience Levels
      </h2>

      <div className="space-y-4 max-w-2xl mx-auto">
        {experienceLevels.map(({ skill, level }) => (
          <div key={skill}>
            <div className="flex justify-between text-sm mb-1">
              <span>{skill}</span>
              <span className="italic text-pink-300">{level}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3">
              <div
                className={`h-3 rounded-full ${
                  level === "Expert"
                    ? "bg-pink-500 w-[90%]"
                    : level === "Advanced"
                    ? "bg-pink-400 w-[70%]"
                    : level === "Intermediate"
                    ? "bg-pink-300 w-[50%]"
                    : "bg-pink-200 w-[30%]"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

