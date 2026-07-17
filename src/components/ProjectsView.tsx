import React from "react";
import { motion } from "motion/react";
import Projects from "./Projects";
import TrustWall from "./TrustWall";

export default function ProjectsView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="py-12"
    >
      <Projects />
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <TrustWall />
      </div>
    </motion.div>
  );
}
