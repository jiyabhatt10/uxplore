import { motion } from "framer-motion";
import { Target, Rocket, Award, Heart, Zap, Shield, Users } from "lucide-react";
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";
import { FloatingOrbs } from "@/components/ui/floating-orbs";
import { AnimatedCounter } from "@/components/ui/counter";

const TEAM = [
  {
    name: "Alex Rivera",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    desc: "Visionary designer with 12+ years crafting transformative digital experiences for global brands.",
  },
  {
    name: "Sarah Chen",
    role: "Lead UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    desc: "Specializes in research-driven design that puts users at the heart of every decision.",
  },
  {
    name: "Marcus Johnson",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    desc: "Full-stack engineer who bridges the gap between beautiful design and technical excellence.",
  },
  {
    name: "Emma Wilson",
    role: "Brand Strategist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    desc: "Helps brands find their authentic voice and connect with audiences on a deeper level.",
  },
];

const VALUES = [
  {
    icon: Zap,
    title: "Innovation",
    desc: "Pushing boundaries and exploring new frontiers in design and technology. We embrace change and lead the way forward.",
  },
  {
    icon: Shield,
    title: "Excellence",
    desc: "Committed to delivering nothing short of exceptional results. Every pixel, every line of code reflects our dedication.",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "We build honest, transparent relationships with our clients. Trust is the foundation of everything we create.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Great work is never done alone. We work closely with our clients, treating their goals as our own.",
  },
];

export default function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 -z-10"><FloatingOrbs /></div>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedText>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-white/90">About Us</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] tracking-tight mb-6">
                We Are <span className="text-gradient-primary">UXplores</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                A team of passionate designers, developers, and strategists dedicated to creating digital experiences that inspire, engage, and transform businesses.
              </p>
            </AnimatedText>
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div
                  className="w-full aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden border border-white/10"
                  style={{ background: "linear-gradient(135deg, rgba(31,162,255,0.15), rgba(225,0,255,0.1))" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                    alt="Our team at work"
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-card border border-white/10 rounded-2xl p-4 backdrop-blur-md">
                  <div className="text-3xl font-display font-bold text-gradient-primary">8+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Years of Excellence</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Founded in 2018, Built on Passion
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                UXplores Design Studio emerged from a simple belief: great design has the power to transform businesses and delight users.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                What started as a small team of three passionate designers has grown into a full-service digital agency, but our core values remain unchanged. We believe in thinking before coding, designing before building, and always putting the user experience first.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we've had the privilege of working with startups, enterprises, and everything in between, helping them create digital products that users love and businesses thrive on.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "25+", label: "Industry Awards", icon: Award },
                  { value: "150+", label: "Projects Launched", icon: Rocket },
                  { value: "98%", label: "Success Rate", icon: Target },
                  { value: "50+", label: "Team Members", icon: Users },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-colors text-center"
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-display font-bold text-white mb-1">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-24 px-6 bg-card border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-4">Our Values</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What We <span className="text-gradient-primary">Stand For</span>
            </h3>
            <p className="text-lg text-muted-foreground">The principles that guide every decision we make and every project we take on.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl h-full border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                  style={{ background: "linear-gradient(135deg, rgba(31,162,255,0.04), rgba(225,0,255,0.03))" }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ background: "linear-gradient(135deg, rgba(31,162,255,0.2), rgba(225,0,255,0.2))" }}
                  >
                    <val.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-3">{val.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{val.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="h-full p-10 rounded-3xl border border-white/5 hover:border-primary/40 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ background: "#1FA2FF" }} />
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">Our Mission</div>
                <h2 className="text-3xl font-display font-bold text-white mb-6">What Drives Us</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses through exceptional design and technology, creating digital experiences that drive growth, inspire users, and set new standards of excellence in the digital landscape.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="h-full p-10 rounded-3xl border border-white/5 hover:border-accent/40 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ background: "#E100FF" }} />
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">Our Vision</div>
                <h2 className="text-3xl font-display font-bold text-white mb-6">Where We're Going</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be recognized globally as the creative force that transforms bold ideas into remarkable digital realities, pushing the boundaries of what's possible in design and user experience.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-card border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-4">Our Team</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Meet the <span className="text-gradient-primary">People</span>
            </h3>
            <p className="text-lg text-muted-foreground">Talented individuals united by a passion for exceptional design</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group">
                  <div className="relative rounded-3xl overflow-hidden aspect-[3/4] mb-6 border border-white/5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-sm text-white/80 leading-relaxed">{member.desc}</p>
                    </div>
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-sm font-medium" style={{ color: "#1FA2FF" }}>{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px]"
            style={{ background: "linear-gradient(90deg, rgba(31,162,255,0.15), rgba(225,0,255,0.15))" }} />
        </div>
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Let's create something <span className="text-gradient-primary">extraordinary</span> together
          </h2>
          <p className="text-xl text-muted-foreground mb-10">Your success story starts now.</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full font-semibold text-lg text-white hover:scale-105 transition-all"
            style={{ background: "linear-gradient(90deg, #1FA2FF, #E100FF)", boxShadow: "0 0 40px rgba(31,162,255,0.3)" }}
          >
            Contact Us Today
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
}
