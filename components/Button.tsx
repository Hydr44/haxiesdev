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
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full transition-all duration-300 relative overflow-hidden group";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-neon border border-primary/50 shadow-lg hover:shadow-xl",
    secondary: "glass-strong text-foreground border-2 border-primary/50 hover:border-primary hover:bg-primary/10",
    ghost: "text-primary hover:text-secondary border border-transparent hover:border-primary/30 hover:bg-primary/5",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={href} target={target} rel={rel} className={classes}>
          <span className="relative z-10">{children}</span>
          {variant === "primary" && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          )}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={classes}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      )}
    </motion.button>
  );
}
