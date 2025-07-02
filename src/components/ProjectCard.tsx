"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="h-48 w-full border-b border-gray-200 bg-gray-200 dark:border-gray-700" />

      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 flex-grow text-gray-600 dark:text-gray-300">
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <a
            href="#"
            className="flex items-center text-cyan-600 hover:underline dark:text-cyan-400"
          >
            View Project <ExternalLink className="ml-1" size={16} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
