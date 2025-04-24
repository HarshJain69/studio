
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

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
            className="relative overflow-hidden bg-background px-8 py-24 sm:px-12 sm:py-32 lg:px-16 lg:py-48 dark:bg-black" // Dark mode bg
            variants={fadeInAnimationVariants}
        >
            <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative z-10 text-center">
                <motion.h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl dark:text-white" variants={fadeInAnimationVariants}>
                    Hey, I&apos;m Ram Maheshwari
                </motion.h1>
                <motion.p className="mt-6 text-lg text-muted-foreground sm:text-xl lg:text-2xl dark:text-gray-400" variants={fadeInAnimationVariants}>
                    A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
                </motion.p>
                <motion.div className="mt-8 flex justify-center" variants={fadeInAnimationVariants}>
                    <Button className="bg-purple-600 text-white">Projects</Button>
                </motion.div>
            </div>
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                    <path d="M12 5V19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 12L12 19L19 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
              <div className="fixed bottom-5 right-5">
             <Button >Chat with me 
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="m3 11 2.83 2.83a2 2 0 0 0 2.83.59 2 2 0 0 1 2.83.59L21 11"/><path d="M21.44 11.05A9.5 9.5 0 0 0 3.08 11.06"/><path d="M8.5 6.5A9 9 0 0 1 15.5 6.5"/><path d="M8.5 17.5A9 9 0 0 0 15.5 17.5"/></svg>
             </Button>
             </div>
        </motion.section>
    );
};
