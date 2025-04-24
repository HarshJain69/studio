'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Header = () => {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: -20,
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

    return (
        <motion.header
            className="bg-background border-b border-border py-4 sticky top-0 z-50"
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
        >
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-semibold text-foreground">
                    DevFolio X
                </Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="#skills" className="hover:text-primary transition-colors">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects" className="hover:text-primary transition-colors">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="#achievements" className="hover:text-primary transition-colors">
                                Achievements
                            </Link>
                        </li>
                        <li>
                            <Link href="#resume" className="hover:text-primary transition-colors">
                                Resume
                            </Link>
                        </li>
                         <li>
                            <Link href="#contact" className="hover:text-primary transition-colors">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Button>Contact</Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
