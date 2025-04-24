
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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

export const Contact = () => {
    return (
        <motion.section
            id="contact"
            className="mt-16"
            variants={fadeInAnimationVariants}
        >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">Contact Me</h2>
            <p className="mt-4 text-muted-foreground">
                Feel free to reach out!
            </p>
            <Card className="mt-8 bg-card shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl text-foreground">Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none text-foreground">Name</label>
                        <Input type="text" id="name" placeholder="Your Name" />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none text-foreground">Email</label>
                        <Input type="email" id="email" placeholder="Your Email" />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none text-foreground">Message</label>
                        <Textarea id="message" placeholder="Your Message" rows={4} />
                    </div>
                    <Button>Send Message</Button>
                </CardContent>
            </Card>
        </motion.section>
    );
};
