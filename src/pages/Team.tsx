import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { TeamCard } from "@/components/common/TeamCard";
import { SectionTitle } from "@/components/common/SectionTitle";

const teamMembers = [
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    name: "Alex Rivera",
    role: "Founder & Creative Director",
    bio: "With over 15 years in the industry, Alex leads our creative vision and ensures every project exceeds expectations. Previously at Google and IDEO.",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    name: "Sarah Chen",
    role: "Lead Designer",
    bio: "Sarah brings brands to life with her exceptional eye for detail and innovative design thinking. Award-winning designer with expertise in branding.",
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    name: "Michael Ross",
    role: "Senior Developer",
    bio: "Michael crafts seamless digital experiences with clean, efficient code. Full-stack expert specializing in React, Node.js, and cloud architecture.",
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    name: "Emma Thompson",
    role: "UX Strategist",
    bio: "Emma ensures every touchpoint is intuitive and user-centered. Her research-driven approach has improved conversion rates for countless clients.",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    name: "David Kim",
    role: "Motion Designer",
    bio: "David creates captivating animations and motion graphics that tell stories. His work has been featured in major brand campaigns worldwide.",
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    name: "Olivia Martinez",
    role: "Brand Strategist",
    bio: "Olivia develops brand strategies that resonate. With a background in psychology, she understands what makes brands truly connect with audiences.",
  },
  {
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=500&fit=crop",
    name: "James Wilson",
    role: "3D Artist",
    bio: "James brings products and concepts to life in stunning 3D. His photorealistic renders and animations have transformed how brands showcase products.",
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop",
    name: "Lisa Park",
    role: "Project Manager",
    bio: "Lisa keeps projects running smoothly from concept to launch. Her organizational skills and client-first approach ensure on-time, on-budget delivery.",
  },
];

const Team = () => {
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
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet the <span className="text-gradient">Creatives</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A diverse team of designers, developers, and strategists united by our 
              passion for creating exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.name} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                align="left"
                subtitle="Our Culture"
                title={<>Where <span className="text-gradient">Creativity Thrives</span></>}
                description="We believe great work comes from a great environment. Our culture is built on collaboration, continuous learning, and celebrating wins together."
              />
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { number: "10+", label: "Years of Experience" },
                  { number: "500+", label: "Projects Completed" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "15+", label: "Industry Awards" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-6 rounded-xl border border-border"
                  >
                    <p className="text-3xl font-bold text-gradient">{stat.number}</p>
                    <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for creativity. 
              Check out our open positions or send us your portfolio.
            </p>
            <a
              href="mailto:careers@escalynx.com"
              className="inline-flex items-center justify-center gap-2 h-14 px-10 text-base font-semibold rounded-xl bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
