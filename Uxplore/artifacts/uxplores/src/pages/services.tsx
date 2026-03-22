import { Link } from "wouter";
import { motion } from "framer-motion";
import { LayoutTemplate, Monitor, PenTool, TrendingUp, Smartphone, Search, ArrowRight, Zap, Globe, HeartHandshake, Search as SearchIcon, Palette, Code, Rocket, Target } from "lucide-react";
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";
import { FloatingOrbs } from "@/components/ui/floating-orbs";

const SERVICES = [
  {
    icon: LayoutTemplate,
    title: "UI/UX Design",
    desc: "Crafting intuitive and beautiful interfaces that delight users and drive business results. Our user-centered approach ensures every interaction is meaningful.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Code,
    title: "Web Development",
    desc: "Building fast, responsive, and scalable web applications with modern technologies and best practices. We focus on performance, scalability, and maintainability.",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    desc: "Creating cohesive brand identities that resonate with your audience and differentiate you from competitors. From logo to full brand guidelines.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy",
    desc: "Planning and executing data-driven digital transformations. We help you navigate the digital landscape with strategies that drive measurable growth.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Creating engaging mobile applications for iOS and Android that deliver seamless experiences across devices. Cross-platform solutions that feel native.",
    color: "from-orange-500 to-pink-500",
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    desc: "Comprehensive SEO and digital marketing services to boost your online presence and convert visitors into customers. Data-driven strategies that deliver ROI.",
    color: "from-green-500 to-cyan-500",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your vision and goals",
    detail: "We dive deep into your business, your users, and your competition to build a complete picture of the opportunity.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Planning the perfect approach",
    detail: "Armed with insights, we create a clear roadmap that aligns your business goals with user needs and technical possibilities.",
  },
  {
    number: "03",
    title: "Design",
    description: "Creating stunning visuals",
    detail: "Our designers craft pixel-perfect interfaces that look beautiful and feel intuitive, guided by our research and strategy phase.",
  },
  {
    number: "04",
    title: "Development",
    description: "Building with precision",
    detail: "Our engineers bring the designs to life with clean, modular code built for performance, scalability, and long-term maintainability.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Delivering excellence",
    detail: "We deploy, test, and refine until everything is perfect — then we stay by your side for ongoing support and continuous improvement.",
  },
];

const FEATURES = [
  { icon: HeartHandshake, title: "Client-Focused", desc: "We treat your business as our own, ensuring alignment at every step." },
  { icon: Zap, title: "Fast Delivery", desc: "Agile methodologies allow us to deliver high-quality work rapidly." },
  { icon: Globe, title: "Global Reach", desc: "Working with clients worldwide to create universally appealing designs." },
];

export default function Services() {
  return (
    <div className="w-full bg-[#0B0D10]">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0"><FloatingOrbs /></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedText>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Our Services</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Comprehensive <br />
              <span className="text-gradient-primary">Digital Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              From strategy to execution, we provide end-to-end services to help your business thrive in the digital world.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                className="relative rounded-3xl p-8 h-full flex flex-col border border-white/10 transition-all duration-500 group overflow-hidden"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}
                whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed flex-grow mb-6">{service.desc}</p>
                <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors group/link mt-auto">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 30px rgba(31,162,255,0.08)" }} />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* How We Work - Our Process */}
      <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-[120px]"
            style={{ background: "rgba(31,162,255,0.1)" }} />
          <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-[120px]"
            style={{ background: "rgba(225,0,255,0.1)" }} />
        </div>
        <div className="max-w-7xl mx-auto relative">
          {/* Section header */}
          <AnimatedSection className="text-center mb-20">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Our Process</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              How We{" "}
              <span className="text-gradient-primary">Work</span>
            </h2>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical center line */}
            <div
              className="absolute top-0 left-1/2 w-0.5 h-full hidden md:block"
              style={{
                background: "linear-gradient(to bottom, #1FA2FF, #9333ea, #E100FF)",
                transform: "translateX(-50%)",
              }}
            />

            <div className="space-y-24">
              {PROCESS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <motion.div
                      className="relative rounded-3xl p-8 border border-white/10 transition-all duration-500"
                      style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}
                      whileHover={{
                        y: -8,
                        boxShadow: "0 0 30px rgba(31,162,255,0.2)",
                        borderColor: "rgba(255,255,255,0.2)",
                      }}
                    >
                      <h3 className="text-3xl font-display font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-400 text-lg mb-3">{step.description}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.detail}</p>
                    </motion.div>
                  </div>

                  {/* Center circle */}
                  <div className="relative flex items-center justify-center flex-shrink-0 z-10">
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center font-display font-bold text-white text-xl"
                      style={{
                        background: "linear-gradient(135deg, #1FA2FF, #E100FF)",
                        boxShadow: "0 0 40px rgba(31,162,255,0.5)",
                      }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Opposite side placeholder */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 border-t border-white/5" style={{ background: "rgba(255,255,255,0.01)" }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              What sets us <span className="text-gradient-primary">apart</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  className="text-center p-10 rounded-3xl border border-white/10 h-full"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                  whileHover={{ y: -8, boxShadow: "0 0 30px rgba(31,162,255,0.15)" }}
                >
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6"
                    style={{ background: "linear-gradient(135deg, rgba(31,162,255,0.2), rgba(225,0,255,0.2))", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <feat.icon size={32} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white mb-4">{feat.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{feat.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px]"
            style={{ background: "linear-gradient(90deg, rgba(31,162,255,0.12), rgba(225,0,255,0.12))" }} />
        </div>
        <AnimatedSection className="max-w-4xl mx-auto text-center rounded-[3rem] p-16 border border-white/10"
          style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(20px)" }}>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to transform your digital presence?
          </h2>
          <p className="text-xl text-gray-400 mb-10">Let's discuss how our services can help you achieve your goals.</p>
          <Link
            href="/contact"
            className="px-10 py-5 rounded-full font-semibold text-lg text-white inline-block btn-gradient"
          >
            Schedule a Call
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
