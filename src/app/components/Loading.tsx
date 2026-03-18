"use client";

import { motion } from "framer-motion";

const squares = Array.from({ length: 16 });

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-green-400 z-50">
      <div className="grid grid-cols-4 grid-rows-4 gap-2">
        {squares.map((_, i) => (
          <motion.div
            key={i}
            className="w-6 h-6 bg-green-400 opacity-20"
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
      <div>
        <h2>Loading portfolio website...</h2>
      </div>
    </div>
  );
};

export default Loading;
