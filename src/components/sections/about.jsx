'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

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

export const AboutMe = () => {
    return (
        <motion.section
            id="about"
            className="mt-16"
            variants={fadeInAnimationVariants}
        >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">About Me</h2>
            <p className="mt-4 text-muted-foreground">
                A brief introduction about myself.
            </p>
            <Card className="mt-8">
                <CardHeader>
                    <CardTitle>John Doe</CardTitle>
                    <CardDescription>Web Developer, AI/ML Enthusiast, Android Developer</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="https://picsum.photos/200/200" alt="John Doe" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardDescription>
                                I am a passionate web developer with expertise in modern web technologies, AI/ML, and Android development. I love building innovative solutions to complex problems.
                            </CardDescription>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.section>
    );
};
