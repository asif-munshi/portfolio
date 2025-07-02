import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { Code, Mail, Github, Linkedin } from "lucide-react";

export default function HomePage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
    },
    {
      title: "Task Management App",
      description: "Collaborative task board with real-time updates",
      tags: ["React", "Firebase", "Material UI"],
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application",
      tags: ["TypeScript", "Chart.js", "Geolocation API"],
    },
  ];

  return (
    <>
      <Hero />

      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} delay={index * 0.1} />
          ))}
        </div>
      </Section>

      <Section id="about" title="About Me">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="h-64 w-64 rounded-xl border-2 border-dashed bg-gray-200" />

            <div className="flex-1">
              <h3 className="mb-4 text-xl font-bold">
                Frontend Developer & UI Designer
              </h3>
              <p className="mb-4 dark:text-gray-300" style={{ color: "#fff" }}>
                I create performant, accessible web applications with modern
                technologies. With 5+ years of experience, I specialize in React
                ecosystems and design systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "Figma",
                  "Node.js",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Get In Touch">
        <div className="mx-auto max-w-md text-center">
          <p className="mb-8 text-gray-600 dark:text-gray-300">
            Have a project in mind or want to discuss opportunities?
          </p>

          <div className="mb-8 flex justify-center gap-6">
            <a
              href="mailto:you@example.com"
              className="rounded-full bg-gray-100 p-3 text-gray-200 transition-all hover:bg-cyan-500 hover:text-white dark:bg-gray-800"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="rounded-full bg-gray-100 p-3 text-gray-200 transition-all hover:bg-gray-800 hover:text-white dark:bg-gray-800"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="rounded-full bg-gray-100 p-3 text-gray-200 transition-all hover:bg-blue-600 hover:text-white dark:bg-gray-800"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 flex items-center justify-center gap-3">
              <Code className="text-cyan-500" />
              <span className="font-mono text-sm text-gray-200">
                Currently open to new opportunities
              </span>
            </div>
            <a
              href="mailto:you@example.com"
              className="inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
            >
              Send Message
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
