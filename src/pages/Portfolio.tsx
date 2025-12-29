import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const categories = ["All", "Branding", "Web Design", "Mobile App", "Motion Graphics"];

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    title: "Nova Brand Identity",
    category: "Branding",
    description: "Complete brand identity redesign for a tech startup, including logo, color palette, typography, and comprehensive brand guidelines.",
    client: "Nova Technologies",
    year: "2024",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    title: "Zenith Dashboard",
    category: "Web Design",
    description: "Modern analytics dashboard with intuitive data visualization, real-time updates, and seamless user experience.",
    client: "Zenith Analytics",
    year: "2024",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    title: "Pulse Fitness App",
    category: "Mobile App",
    description: "Health and fitness mobile application with workout tracking, nutrition planning, and social features.",
    client: "Pulse Health",
    year: "2024",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    title: "Vertex Product Launch",
    category: "Motion Graphics",
    description: "Animated product launch video featuring 3D product visualization and dynamic motion graphics.",
    client: "Vertex Electronics",
    year: "2023",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    title: "Horizon E-commerce",
    category: "Web Design",
    description: "Full e-commerce platform redesign with improved UX, mobile-first approach, and 40% increase in conversions.",
    client: "Horizon Retail",
    year: "2023",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    title: "Spark Creative Agency",
    category: "Branding",
    description: "Bold and creative brand identity for a boutique design agency, featuring custom illustrations and iconography.",
    client: "Spark Agency",
    year: "2023",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    title: "Fintech Banking App",
    category: "Mobile App",
    description: "Secure and user-friendly mobile banking application with biometric authentication and instant transfers.",
    client: "FinVault",
    year: "2023",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    title: "Brand Explainer Video",
    category: "Motion Graphics",
    description: "Engaging 2D animated explainer video that increased brand awareness and user engagement by 65%.",
    client: "CloudSync",
    year: "2023",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of successful projects that have helped brands 
              achieve their creative vision and business goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-[4/3]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                    <h3 className="text-xl font-semibold text-background mt-1">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <span className="text-sm text-primary font-medium">{selectedProject.category}</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{selectedProject.title}</h2>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-6 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Client</p>
                    <p className="font-medium">{selectedProject.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p className="font-medium">{selectedProject.year}</p>
                  </div>
                </div>
                <Button variant="default" className="gap-2">
                  View Live Project
                  <ExternalLink size={16} />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Like What You See?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. We're ready to bring your vision to life.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Start Your Project
                <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
