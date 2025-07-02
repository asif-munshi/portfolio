"use client";

import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="relative mb-4 inline-block text-3xl font-bold md:text-4xl">
            {title}
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-blue-500"></span>
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
