
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

const projectsData = [
    {
        title: "Project 1",
        description: "A brief description of Project 1.",
        imageUrl: "https://picsum.photos/400/300",
    },
    {
        title: "Project 2",
        description: "A brief description of Project 2.",
        imageUrl: "https://picsum.photos/400/300",
    },
    {
        title: "Project 3",
        description: "A brief description of Project 3.",
        imageUrl: "https://picsum.photos/400/300",
    },
];

export const Projects = () => {
    return (
        <motion.section
            id="projects"
            className="mt-16"
            variants={fadeInAnimationVariants}
        >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">Projects</h2>
            <p className="mt-4 text-muted-foreground">
                Check out some of my recent projects.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projectsData.map((project, index) => (
                    <Card key={index} className="bg-card shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="aspect-video rounded-md object-cover"
                            />
                            <CardDescription className="mt-2 text-muted-foreground">
                                {project.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.section>
    );
};
