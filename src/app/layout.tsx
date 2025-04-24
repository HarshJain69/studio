'use client';

import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import { motion } from 'framer-motion';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// export const metadata: Metadata = {
//   title: 'DevFolio X',
//   description: 'A modern portfolio website for a web developer',
// };

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          animate="animate"
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </motion.div>
      </body>
    </html>
  );
}


