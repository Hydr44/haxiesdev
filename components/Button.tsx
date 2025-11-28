import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  target,
  rel,
  type = "button",
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-primary/10",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} target={target} rel={rel} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      type={type}
      className={classes}
    >
      {children}
    </motion.button>
  );
}

