"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";
import Particle from "./components/Particles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <html lang="en" className={isDarkMode ? "dark-mode" : ""}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Particle />
        <main className="flex flex-col flex-grow relative">
          <div className="flex-grow pb-20">{children}</div> {/* Padding for space */}
          <Nav toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          <Footer /> {/* Added Footer here */}
        </main>
      </body>
    </html>
  );
}
