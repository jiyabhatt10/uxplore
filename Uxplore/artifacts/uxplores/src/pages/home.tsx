import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, LayoutTemplate, PenTool, TrendingUp, Smartphone, Search, CheckCircle2 } from "lucide-react";
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";
import { FloatingOrbs } from "@/components/ui/floating-orbs";
import { AnimatedCounter } from "@/components/ui/counter";
import { MarqueeBand } from "@/components/ui/marquee-band";

const STATS = [
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "15+", label: "Awards Won" },
  { value: "99%", label: "Client Satisfaction" },
];

const SERVICES = [
  { icon: LayoutTemplate, title: "UI/UX Design", desc: "Crafting intuitive and beautiful interfaces that users love" },
  { icon: Monitor, title: "Web Development", desc: "Building fast, responsive, and scalable web applications" },
  { icon: PenTool, title: "Brand Identity", desc: "Creating memorable brands that stand out in the market" },
  { icon: TrendingUp, title: "Digital Strategy", desc: "Planning and executing data-driven digital transformations" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile experiences" },
  { icon: Search, title: "SEO & Marketing", desc: "Driving traffic and converting visitors into loyal customers" },
];

const PROCESS = [
  { title: "Discovery", desc: "Understanding your vision and goals" },
  { title: "Strategy", desc: "Planning the perfect approach" },
  { title: "Design", desc: "Creating stunning visuals" },
  { title: "Development", desc: "Building with precision" },
  { title: "Delivery", desc: "Delivering excellence" },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-32">
        {/* Floating orbs canvas */}
        <div className="absolute inset-0 -z-10">
          <FloatingOrbs />
        </div>
        {/* Background Image - Absolute */}
        <div className="absolute inset-0 -z-10 opacity-30 mix-blend-screen">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Hero background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-white/90">Award-Winning Design Studio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.1] tracking-tight mb-6">
              <span style={{ background: "linear-gradient(to right, white, white, #d1d5db)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Think Before You Code.</span>
              <br />
              <span
                className="animate-gradient"
                style={{
                  background: "linear-gradient(to right, #1FA2FF, #9333ea, #E100FF, #9333ea, #1FA2FF)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Design Before You Build.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              We transform ideas into exceptional digital experiences through innovative design, cutting-edge technology, and strategic thinking.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-white/90 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
              >
                Start a Project
              </Link>
              <Link 
                href="/work"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Band */}
      <MarqueeBand />

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/5">
            {STATS.map((stat, i) => (
              <AnimatedText key={i} delay={i * 0.1} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Comprehensive digital solutions tailored to your unique needs</h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-panel p-8 rounded-3xl h-full hover:-translate-y-2 transition-transform duration-300 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <service.icon size={28} />
                  </div>
                  <h4 className="text-2xl font-display font-semibold mb-4 text-white group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-card relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-4">Our Process</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                How we bring your ideas to life
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                A streamlined, transparent approach that ensures we deliver exceptional results on time and beyond expectations.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center text-white font-semibold hover:text-primary transition-colors group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <div className="space-y-6">
              {PROCESS.map((step, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="flex gap-6 items-start p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-bold text-primary">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-semibold text-white mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview — 3 exact featured projects from Figma */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Featured <span className="text-gradient-primary">Projects</span>
              </h2>
              <p className="text-lg text-muted-foreground">Our most impactful work, delivering measurable results.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Link
                href="/portfolio"
                className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all font-medium inline-flex items-center"
              >
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "FinTech Revolution",
                category: "Mobile App Design",
                stat: "+150% User Growth",
                img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
                gradient: "from-blue-600/80 to-cyan-500/40",
              },
              {
                title: "AI Dashboard Pro",
                category: "SaaS Platform",
                stat: "99.9% Uptime",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
                gradient: "from-purple-600/80 to-pink-500/40",
              },
              {
                title: "EcoMarket",
                category: "E-commerce Platform",
                stat: "$2M+ Revenue",
                img: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
                gradient: "from-green-600/80 to-teal-500/40",
              },
            ].map((project, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Link href="/portfolio" className="block group">
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10`} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} z-[5] opacity-60`} />
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white mb-3 inline-block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-display font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-primary text-sm font-semibold">{project.stat}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote/Values */}
      <section className="py-32 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight mb-12">
              "Every pixel, every interaction, crafted with meticulous attention to detail. We love what we do, and it shows in everything we create."
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center gap-12 text-left">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="text-primary" />
                  <h4 className="text-xl font-bold text-white">Innovation</h4>
                </div>
                <p className="text-muted-foreground">Pushing boundaries and exploring new frontiers in design and technology.</p>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="text-primary" />
                  <h4 className="text-xl font-bold text-white">Excellence</h4>
                </div>
                <p className="text-muted-foreground">Committed to delivering nothing short of exceptional results.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
