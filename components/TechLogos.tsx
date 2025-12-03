"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", size: 40 },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", size: 40 },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", size: 40 },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", size: 40 },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", size: 40 },
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png", size: 35 },
];

export default function TechLogos() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {technologies.map((tech, index) => {
        const positions = [
          { top: "10%", left: "5%", delay: 0 },
          { top: "20%", right: "8%", delay: 0.2 },
          { top: "50%", left: "3%", delay: 0.4 },
          { top: "60%", right: "5%", delay: 0.6 },
          { top: "80%", left: "10%", delay: 0.8 },
          { top: "85%", right: "12%", delay: 1 },
        ];
        
        const position = positions[index % positions.length];
        
        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: position.delay,
              ease: "easeInOut",
            }}
            className="absolute hidden md:block"
            style={{
              top: position.top,
              left: position.left || "auto",
              right: position.right || "auto",
            }}
          >
            <div className="glass p-3 rounded-xl border border-primary/20 backdrop-blur-sm">
              <Image
                src={tech.logo}
                alt={tech.name}
                width={tech.size}
                height={tech.size}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

