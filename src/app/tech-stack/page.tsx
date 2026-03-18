"use client"; // Required for Next.js App Router
import React from "react";
import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <section id="experience" className="py-12 flex justify-center relative">
      <div className="container mx-auto px-6">
        <h5 className="text-center text-lg font-semibold">Experience</h5>
        <h2 className="text-center text-3xl font-bold">Technology Stack</h2>

        {/* Grid Layout */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
          {[
            { image: "/assets/html.png" },
            { image: "/assets/css.png" },
            { image: "/assets/javascript.png" },
            { image: "/assets/bootstrap.png" },
            { image: "/assets/react.png" },
            { image: "/assets/next.png" },
            { image: "/assets/tailwind.png" },
            { image: "/assets/materialui.png" },
            { image: "/assets/aspnet.png" },
            { image: "/assets/php.png" },
            { image: "/assets/mssql.png" },
            { image: "/assets/mysql.png" },
            { image: "/assets/node.png" },
            { image: "/assets/express.png" },
            { image: "/assets/mongodb.png" },
            { image: "/assets/django.png" },
            { image: "/assets/c.png" },
            { image: "/assets/java.png" },
            { image: "/assets/csharp.png" },
            { image: "/assets/python.png" },
          ].map((skill) => (
            <motion.div
              key={skill.image}
              className="tech-card p-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 flex items-center justify-center h-[8vw] w-[8vw] min-h-[100px] min-w-[100px] mx-auto backdrop-blur-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ y: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <img
                src={skill.image}
                alt="Technology Logo"
                className="h-[4vw] w-[4vw] min-h-[40px] min-w-[40px] object-contain drop-shadow-md"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
