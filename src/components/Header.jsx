

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter } from 'lucide-react'; // Import social icons
import { Sun, Moon } from 'lucide-react';


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

    const [theme, setTheme] = useState(() => {
        if (typeof localStorage !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        if (typeof document !== 'undefined') {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <motion.header
            className="bg-background border-b border-border py-4 sticky top-0 z-50 shadow-md dark:bg-black text-black dark:text-white" // Dark mode styles
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
        >
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Avatar className="mr-4">
                        <AvatarImage src="https://picsum.photos/id/225/50/50" alt="John Doe" />
                    </Avatar>
                    <Link href="/" className="text-2xl font-semibold text-foreground">
                        Ram Maheshwari
                    </Link>
                </div>
                <nav>
                    <ul className="flex space-x-6 items-center">
                        <li>
                            <Link href="/" className="hover:text-primary transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#about" className="hover:text-primary transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects" className="hover:text-primary transition-colors">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className="hover:text-primary transition-colors">
                                Contact
                            </Link>
                        </li>
                         <li>
                            <Button variant="outline">Resume</Button>
                        </li>
                        <li>
                            <Button onClick={toggleTheme} variant="ghost" size="icon">
                                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="fixed top-1/2 left-4 -translate-y-1/2 flex flex-col space-y-4">
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    <Github className="h-6 w-6" />
                </a>
            </div>
        </motion.header>
    );
};

export default Header;

