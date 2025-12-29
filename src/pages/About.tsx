import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Lightbulb, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/common/SectionTitle";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We push creative boundaries and embrace new technologies to deliver solutions that stand out.",
  },
  {
    icon: Heart,
    title: "Passion Driven",
    description: "Every project is fueled by our genuine love for design and our commitment to excellence.",
  },
  {
    icon: Target,
    title: "Results Focused",
    description: "Beautiful design is meaningful only when it achieves your business objectives.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "We obsess over every pixel, every interaction, and every user touchpoint.",
  },
];

const timeline = [
  { year: "2014", title: "The Beginning", description: "Founded in a small studio with a big vision: to create design that matters." },
  { year: "2016", title: "Growing Team", description: "Expanded to 10 talented creatives and moved into our first real office." },
  { year: "2018", title: "Going Global", description: "Started working with international clients and opened remote operations." },
  { year: "2020", title: "Award Recognition", description: "Won multiple industry awards and reached 200+ completed projects." },
  { year: "2022", title: "Full Service", description: "Launched comprehensive development services to offer end-to-end solutions." },
  { year: "2024", title: "New Heights", description: "Celebrating 10 years with 500+ projects and a world-class team." },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We're <span className="text-gradient">Lovalable</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A passionate team of designers, developers, and strategists dedicated to 
              crafting digital experiences that inspire and deliver results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                align="left"
                subtitle="Our Story"
                title={<>From Vision to <span className="text-gradient">Reality</span></>}
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Lovalable was born from a simple belief: great design has the power to transform businesses 
                  and connect people. What started as a small team with big dreams has grown into a 
                  full-service creative agency trusted by brands worldwide.
                </p>
                <p>
                  Over the past decade, we've had the privilege of working with startups, Fortune 500 
                  companies, and everything in between. Each project has taught us something new and 
                  reinforced our commitment to pushing creative boundaries.
                </p>
                <p>
                  Today, we're proud to be at the forefront of digital design and development, helping 
                  brands tell their stories in meaningful, memorable ways.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=500&fit=crop"
                alt="Our creative workspace"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
                <p className="text-3xl font-bold text-gradient">10+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower brands with exceptional design and technology, creating digital experiences 
                that not only look stunning but drive measurable business results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the creative partner of choice for ambitious brands seeking to make a lasting 
                impact in the digital landscape and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Values"
            title={<>What <span className="text-gradient">Drives Us</span></>}
            description="The principles that guide every decision we make and every project we undertake."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Journey"
            title={<>A Decade of <span className="text-gradient">Growth</span></>}
          />
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="text-lg font-bold text-primary">{item.year}</span>
                </div>
                <div className="relative flex-grow pl-6 border-l-2 border-border">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
                Ready to Work Together?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help bring your vision to life.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
