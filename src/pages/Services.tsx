import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Palette, Image, FileText, Play, Box, Sparkles, 
  Monitor, Smartphone, Layout, Globe, ShoppingBag, 
  Code, Layers, ArrowRight 
} from "lucide-react";
import { Layout as PageLayout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/common/SectionTitle";

const serviceCategories = [
  {
    id: "branding",
    title: "Graphic Design",
    description: "Visual identities that make lasting impressions",
    services: [
      {
        icon: Palette,
        title: "Logo Design & Branding",
        description: "Create a distinctive brand identity with custom logos, color palettes, and comprehensive brand guidelines that reflect your values and resonate with your audience.",
      },
      {
        icon: Image,
        title: "Social Media Graphics",
        description: "Eye-catching visuals optimized for every platform—Instagram, LinkedIn, Twitter, Facebook—designed to boost engagement and maintain brand consistency.",
      },
      {
        icon: FileText,
        title: "Marketing Collateral",
        description: "From business cards to brochures, presentations to packaging—professional print and digital materials that elevate your brand presence.",
      },
    ],
  },
  {
    id: "motion",
    title: "Animation & Motion",
    description: "Bring your stories to life with movement",
    services: [
      {
        icon: Play,
        title: "2D Animation",
        description: "Character animations, explainer videos, and animated illustrations that communicate complex ideas in an engaging, memorable way.",
      },
      {
        icon: Box,
        title: "3D Animation",
        description: "Stunning three-dimensional visuals for product showcases, architectural visualization, and immersive brand experiences.",
      },
      {
        icon: Sparkles,
        title: "Motion Graphics",
        description: "Dynamic visual effects, kinetic typography, and animated infographics that add energy and polish to your video content.",
      },
    ],
  },
  {
    id: "web",
    title: "UI/UX Design",
    description: "Digital experiences that convert and delight",
    services: [
      {
        icon: Monitor,
        title: "Website UI/UX Design",
        description: "User-centered website designs that balance aesthetics with functionality, ensuring seamless navigation and optimal conversion rates.",
      },
      {
        icon: Smartphone,
        title: "Mobile App UI/UX Design",
        description: "Intuitive mobile experiences for iOS and Android that keep users engaged with thoughtful interactions and beautiful interfaces.",
      },
      {
        icon: Layout,
        title: "Landing Page & Conversion-Focused UI",
        description: "High-converting landing pages designed to capture leads, drive sales, and achieve your specific marketing objectives.",
      },
    ],
  },
  {
    id: "development",
    title: "Web Development",
    description: "Robust solutions built for performance",
    services: [
      {
        icon: Globe,
        title: "WordPress Website",
        description: "Custom WordPress solutions with intuitive content management, optimized for speed, security, and search engine visibility.",
      },
      {
        icon: ShoppingBag,
        title: "Shopify Store",
        description: "E-commerce stores that sell—beautiful Shopify themes customized to showcase your products and streamline the checkout experience.",
      },
      {
        icon: Code,
        title: "Custom Website",
        description: "Bespoke web applications built with modern technologies—React, Next.js, Node.js—tailored to your unique business requirements.",
      },
      {
        icon: Layers,
        title: "UI Kits & Web Components",
        description: "Reusable design systems and component libraries that ensure consistency and accelerate your development workflow.",
      },
    ],
  },
];

const Services = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive <span className="text-gradient">Creative Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From initial concept to final delivery, we provide end-to-end creative services 
              that help brands stand out, connect, and grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-24 ${categoryIndex % 2 === 1 ? "bg-secondary/30" : ""}`}
        >
          <div className="container mx-auto px-4">
            <SectionTitle
              subtitle={category.title}
              title={category.description}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group bg-card p-8 rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Process"
            title={<>How We <span className="text-gradient">Work Together</span></>}
            description="A transparent, collaborative approach that ensures your project's success."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your goals, audience, and vision through in-depth consultation." },
              { step: "02", title: "Strategy", description: "Developing a comprehensive plan with timelines, deliverables, and milestones." },
              { step: "03", title: "Creation", description: "Designing and iterating with your feedback to perfect every detail." },
              { step: "04", title: "Delivery", description: "Launching your project with ongoing support and optimization." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <span className="text-7xl font-bold text-primary/10">{item.step}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-16 text-center"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Have a Project in Mind?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help bring your vision to life.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
