
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Resume } from "@/components/sections/resume";
import { Hero } from "@/components/sections/hero";
import { AboutMe } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <motion.div
      className="container mx-auto py-16"
      variants={fadeInAnimationVariants}
      initial="initial"
      animate="animate"
    >
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Achievements />
      <Resume />
       <Contact />
    </motion.div>
  );
}

