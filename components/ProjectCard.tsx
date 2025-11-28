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
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={href}>
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          {/* Image Placeholder */}
          <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl text-gray-300">📱</div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            <span className="inline-block px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full mb-3">
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

