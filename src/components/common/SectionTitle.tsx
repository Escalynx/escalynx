import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  subtitle?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export const SectionTitle = ({
  subtitle,
  title,
  description,
  align = "center",
}: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-16`}
    >
      {subtitle && (
        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};
