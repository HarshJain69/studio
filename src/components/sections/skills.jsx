
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

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

const skillsData = [
    { name: "Web Development", level: 90 },
    { name: "AI/ML", level: 75 },
    { name: "Android Development", level: 80 },
    { name: "React", level: 95 },
    { name: "Next.js", level: 85 },
];

export const Skills = () => {
    return (
        <motion.section
            id="skills"
            className="mt-16"
            variants={fadeInAnimationVariants}
        >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">Skills</h2>
            <p className="mt-4 text-muted-foreground">
                Here are some of my key skills and expertise.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skillsData.map((skill, index) => (
                    <Card key={index} className="bg-card shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-xl text-foreground">{skill.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Progress value={skill.level} />
                            <CardDescription className="mt-2 text-right text-muted-foreground">
                                {skill.level}%
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.section>
    );
};
