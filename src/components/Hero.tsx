"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-[size:40px_40px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          opacity: 0.1,
        }}
        aria-hidden="true"
      />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Alex
              </span>
            </h1>

            <h2 className="mb-6 text-2xl md:text-3xl dark:text-gray-300">
              Frontend Developer & UI Designer
            </h2>

            <p className="mb-8 max-w-xl text-lg">
              I build modern web experiences with focus on performance,
              accessibility and clean design.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 font-medium text-white"
              >
                View Projects
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="rounded-full border border-gray-200 bg-gray-200 px-8 py-3 font-medium text-white dark:border-gray-700 dark:bg-gray-800"
              >
                Contact Me
              </motion.a>
            </div>

            <div className="mt-12 flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  target="_blank"
                  whileHover={{ y: -5 }}
                  className="rounded-full border border-gray-200 bg-white p-3 text-gray-200 dark:border-gray-700 dark:bg-gray-800"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 blur-3xl" />
              <div className="relative h-64 w-64 rounded-full border-2 border-dashed bg-gray-200 md:h-80 md:w-80" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
