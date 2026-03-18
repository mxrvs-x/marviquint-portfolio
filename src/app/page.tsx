"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="overflow-hidden relative min-h-screen flex flex-col items-center justify-center px-4">
      {/* Hello text */}
      <motion.h5
        className="text-sm sm:text-xl md:text-xxl text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Hello, I&apos;m
      </motion.h5>
      
      {/* Name */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Marviquint Bahio
      </motion.h1>

      {/* Position */}
      <motion.h2
        className="text-md sm:text-xl md:text-2xl lg:mt-2 md:mt-1 text-center"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Software Engineer | Software Developer
      </motion.h2>
      
      {/* Profile Image */}
      <motion.div
        className="lg:mt-8 md:mt-4 w-72 h-72 sm:w-[600px] sm:h-[600px] md:w-[540px] md:h-[540px] lg:w-80 lg:h-80 xl:w-[540px] xl:h-[540px] rounded-full overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
      >
        <Image
          src="/assets/profile.jpg"
          alt="Profile Picture"
          width={540}
          height={540}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </main>
  );
}