"use client"; // Required for Next.js App Router
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-[#F9F6EE] mt-10 h-[350px] flex flex-col justify-center">
      <div className="container mx-auto flex flex-col justify-center items-center px-4">
        <h2 className="text-4xl font-bold">Marviquint Bahio</h2>
        <div className="flex space-x-4 mt-12">
          {[ 
            { href: "https://www.linkedin.com/in/marviquint-bahio-16b22b265/", icon: <Linkedin size={24} />, key: "linkedin" },
            { href: "https://github.com/astromarvs", icon: <Github size={24} />, key: "github" },
            { href: "mailto:marviquintb@gmail.com", icon: <Mail size={24} />, key: "mail" }
          ].map(({ href, icon, key }) => (
            <motion.a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-transparent p-2 rounded-lg"
              whileHover={{ borderColor: "#F9F6EE", scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-4 mb-12">
        &copy; {new Date().getFullYear()} Marviquint Bahio. All rights reserved.
      </div>
    </footer>
  );
}