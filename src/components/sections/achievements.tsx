
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

const achievementsData = [
    {
        title: "Achievement 1",
        description: "Description of Achievement 1.",
    },
    {
        title: "Achievement 2",
        description: "Description of Achievement 2.",
    },
    {
        title: "Achievement 3",
        description: "Description of Achievement 3.",
    },
];

export const Achievements = () => {
    return (
        <motion.section
            id="achievements"
            className="mt-16"
            variants={fadeInAnimationVariants}
        >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">Achievements</h2>
            <p className="mt-4 text-muted-foreground">
                Key milestones and accomplishments in my career.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {achievementsData.map((achievement, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{achievement.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{achievement.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.section>
    );
};
