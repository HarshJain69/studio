
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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

export const Resume = () => {
    return (
        <motion.section
            id="resume"
            className="mt-16"
            variants={fadeInAnimationVariants}
        >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">Resume</h2>
            <p className="mt-4 text-muted-foreground">
                A quick look at my experience and qualifications.
            </p>
            <Card className="mt-8">
                <CardHeader>
                    <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        Detailed information about my work history.
                    </CardDescription>
                </CardContent>
            </Card>
        </motion.section>
    );
};
