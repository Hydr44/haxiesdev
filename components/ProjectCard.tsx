"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  tag: string;
  description: string;
  href: string;
  image?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  tag,
  description,
  href,
  image,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="group"
    >
      <Link href={href}>
        <div className="glass-strong rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 group-hover:shadow-glow relative">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-accent/10 transition-all duration-500 z-0" />
          
          {/* Image Placeholder */}
          <div className="relative h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl opacity-50 group-hover:opacity-100 transition-opacity">
                  📱
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 relative z-10">
            <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/20 border border-primary/30 rounded-full mb-3">
              {tag}
            </span>
            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
