import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  index?: number;
}

export const TeamCard = ({ image, name, role, bio, index = 0 }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 flex gap-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Twitter size={18} />
          </a>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-primary font-medium text-sm mb-3">{role}</p>
      <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
    </motion.div>
  );
};
