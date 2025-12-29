import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  index?: number;
  onClick?: () => void;
}

export const PortfolioCard = ({
  image,
  title,
  category,
  index = 0,
  onClick,
}: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-[4/3]"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-sm text-primary font-medium">{category}</span>
        <div className="flex items-center justify-between mt-2">
          <h3 className="text-xl font-semibold text-background">{title}</h3>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
