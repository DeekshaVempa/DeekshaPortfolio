"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import NavBar from "../../components/NavBar";
import { Briefcase } from "lucide-react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const experienceData = [
  {
    title: "Software Engineer Co‑op",
    company: "Philips North America",
    period: "Jan 2025 – Present",
    short: "Built .NET microservices, CI/CD pipelines, performance tests.",
    full: "Built C# .NET Core microservices handling 1,000+ real-time messages via NATS. Automated CI/CD pipelines using GitHub Actions, Docker, and Kubernetes (50% faster builds). Boosted audit test coverage by 35% using BDD tests (Gherkin + MockServer). Executed 5K+ msg/sec performance tests, reducing latency by 15%."
  },
  {
    title: "Software Engineer",
    company: "Science Utsav",
    period: "June 2022 — July 2023",
    short: "Built platform used by 1,000+ users/month, optimized backend.",
    full: "Built web platform used by 1,000+ users/month, improving UX and cutting registration time by 40%. Improved backend performance by 35% via SQL query & caching optimization. Reduced post-deployment bugs by 20% through testing and structured reviews."
  },
  {
    title: "Software Engineer Mentor",
    company: "OASIS",
    period: "July 2025",
    short: "Software Engineer mentor for Undergrad Students."
  },
  {
    title: "Web Development Instructor",
    company: "Science utsav",
    period: "June 2021 - September 2021",
    short: "Web development instructor for kids age 10+"
  }
];

export default function ExperiencePage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <NavBar />

      {/* Header */}
      <div className="max-w-6xl mx-auto py-20 px-6 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Briefcase className="w-10 h-10 text-pink-400 mx-auto mb-4 animate-pulse" />
          <h1 className="text-4xl font-bold font-mono text-pink-300 mb-12">
            My Journey
          </h1>
          {/* 👇 Add this button below the heading */}
          <a
            href="/VempatiDeekshaResume.pdf"
            download
            className="inline-block mb-10 px-6 py-2 border border-pink-500 rounded-full text-pink-300 font-mono text-sm hover:bg-pink-500/10 transition shadow-md hover:shadow-pink-500"
          >
            Download Resume
          </a>
        </MotionDiv>

        {/* Roadmap Container */}
        <div className="relative">
          {/* Vertical Line */}
          {/* Vertical Line (hidden on mobile) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-pink-300 to-purple-400 transform -translate-x-1/2 rounded-full hidden md:block"></div>


          <div className="space-y-16">
            {experienceData.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <MotionDiv
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Connector Dot */}
                  <div className="absolute left-1/2 w-6 h-6 bg-pink-400 border-4 border-black rounded-full transform -translate-x-1/2 z-10"></div>

                  {/* Card */}
                  <div
                    className={`bg-pink-900/20 border border-pink-500 shadow-lg rounded-2xl p-6 w-full md:w-5/12 ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <h3 className="text-2xl font-semibold text-pink-200">
                      {exp.title}
                    </h3>
                    <p className="text-pink-400">
                      {exp.company} — {exp.period}
                    </p>
                    <p className="mt-2 text-sm">{exp.short}</p>
                    {exp.full && (
                      <>
                        <button
                          onClick={() =>
                            setExpanded(expanded === i ? null : i)
                          }
                          className="mt-2 text-sm text-pink-300 hover:underline"
                        >
                          {expanded === i ? "Hide" : "More"}
                        </button>
                        {expanded === i && (
                          <p className="mt-2 text-sm text-white">{exp.full}</p>
                        )}
                      </>
                    )}
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
