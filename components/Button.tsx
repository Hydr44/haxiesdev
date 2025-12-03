import Link from "next/link";
import { motion } from "framer-motion";

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

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
  const baseClasses = "inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-full transition-all duration-300 relative overflow-hidden group min-h-[44px] touch-manipulation";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-neon border border-primary/50 shadow-lg hover:shadow-xl",
    secondary: "glass-strong text-foreground border-2 border-primary/50 hover:border-primary hover:bg-primary/10",
    ghost: "text-primary hover:text-secondary border border-transparent hover:border-primary/30 hover:bg-primary/5",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const handleClick = () => {
    // Traccia click su WhatsApp
    if (href && href.includes("wa.me") && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "WhatsApp Button Click",
        value: 1,
      });
      console.log("WhatsApp click tracked from Button component");
    }
  };

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={href} target={target} rel={rel} className={classes} onClick={handleClick}>
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
