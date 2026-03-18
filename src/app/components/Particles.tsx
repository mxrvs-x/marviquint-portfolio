"use client";

import { useCallback, useEffect, useState } from "react";
import { loadSlim } from "tsparticles-slim"; // ✅ Load slim version for performance
import { Engine, Container } from "tsparticles-engine";
import { Particles } from "react-tsparticles";

const Particle: React.FC = () => {
  const [particleCount, setParticleCount] = useState(100);

  useEffect(() => {
    const updateParticleCount = () => {
      setParticleCount(window.innerWidth < 768 ? 30 : 100);
    };
    
    updateParticleCount(); // Set initial value
    window.addEventListener("resize", updateParticleCount);
    return () => window.removeEventListener("resize", updateParticleCount);
  }, []);

  // Initialize particles
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Particles Engine:", engine);
    await loadSlim(engine); // Load slim version
  }, []);

  // Log when particles are loaded
  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log("Particles container loaded:", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit} // ✅ Corrected init prop
      loaded={particlesLoaded} // ✅ Corrected loaded prop
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        autoPlay: true,
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#808080" }, // ✅ White particles
          links: {
            color: "#808080",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            outModes: { default: "bounce" },
          },
          number: { value: particleCount },
          opacity: { value: 0.8 },
          shape: { type: "circle" },
          size: { value: { min: 2, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;