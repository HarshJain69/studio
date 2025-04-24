"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"

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

export const Hero = () => {
    return (
        <motion.section
            id="hero"
            className="relative overflow-hidden rounded-lg bg-background px-8 py-24 sm:px-12 sm:py-32 lg:px-16 lg:py-48"
            variants={fadeInAnimationVariants}
        >
            <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative z-10">
                <motion.h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl" variants={fadeInAnimationVariants}>
                    Hi, I&apos;m John Doe
                </motion.h1>
                <motion.p className="mt-6 text-lg text-muted-foreground sm:text-xl lg:text-2xl" variants={fadeInAnimationVariants}>
                    I&apos;m a web developer specializing in modern web technologies, AI/ML, and Android development.
                </motion.p>
                <motion.div className="mt-8 flex gap-4" variants={fadeInAnimationVariants}>
                    <Button>View Projects</Button>
                    <Button variant="outline">Download Resume</Button>
                </motion.div>
            </div>
        </motion.section>
    );
};
