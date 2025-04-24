'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
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

    return (
        <motion.footer
            className="bg-background border-t border-border py-6"
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
        >
            <div className="container mx-auto text-center text-muted-foreground">
                &copy; {new Date().getFullYear()} DevFolio X. All rights reserved.
                <div className="mt-2">
                    {/* Add social links here */}
                    <a href="#" className="mx-2 hover:text-primary transition-colors">
                        LinkedIn
                    </a>
                    <a href="#" className="mx-2 hover:text-primary transition-colors">
                        GitHub
                    </a>
                    <a href="#" className="mx-2 hover:text-primary transition-colors">
                        Twitter
                    </a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
