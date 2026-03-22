import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";
import { FloatingOrbs } from "@/components/ui/floating-orbs";

const CATEGORIES = ["all", "web", "mobile", "branding", "saas"];

const PROJECTS = [
  {
    id: 1,
    title: "FinTech Revolution",
    category: "mobile",
    description: "A revolutionary mobile banking app that simplifies personal finance",
    fullDescription: "FinTech Revolution is a comprehensive mobile banking solution designed to make personal finance management intuitive and accessible. We created a seamless user experience that combines powerful features with a beautiful, modern interface.",
    tags: ["Mobile App", "FinTech", "UI/UX"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    stats: [
      { label: "User Growth", value: "+150%" },
      { label: "App Rating", value: "4.8/5" },
      { label: "Active Users", value: "50K+" },
    ],
    challenge: "Creating a banking app that feels approachable while maintaining security and trust.",
    solution: "We implemented biometric authentication, real-time notifications, and an intuitive dashboard that gives users complete control over their finances.",
    results: "The app saw 150% user growth in the first 6 months and maintains a 4.8/5 rating.",
  },
  {
    id: 2,
    title: "AI Dashboard Pro",
    category: "saas",
    description: "Next-gen analytics platform powered by artificial intelligence",
    fullDescription: "AI Dashboard Pro transforms complex data into actionable insights using advanced AI algorithms. The platform provides real-time analytics, predictive modeling, and customizable visualizations.",
    tags: ["SaaS", "AI", "Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    stats: [
      { label: "Uptime", value: "99.9%" },
      { label: "Data Points", value: "10M+" },
      { label: "Enterprise Clients", value: "200+" },
    ],
    challenge: "Making complex AI-powered analytics accessible to non-technical users.",
    solution: "We designed an intuitive interface with drag-and-drop functionality and natural language queries.",
    results: "200+ enterprise clients adopted the platform with 99.9% uptime.",
  },
  {
    id: 3,
    title: "EcoMarket",
    category: "web",
    description: "Sustainable e-commerce platform for eco-conscious consumers",
    fullDescription: "EcoMarket is an e-commerce platform dedicated to sustainable and eco-friendly products. We created a marketplace that makes it easy for consumers to make environmentally responsible choices.",
    tags: ["E-commerce", "Sustainability", "Web"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    stats: [
      { label: "Revenue", value: "$2M+" },
      { label: "Products", value: "5K+" },
      { label: "Monthly Visitors", value: "100K+" },
    ],
    challenge: "Building trust in eco-friendly products and creating a seamless shopping experience.",
    solution: "We implemented detailed product sustainability scores, vendor verification, and a smooth checkout process.",
    results: "Generated over $2M in revenue with 100K+ monthly visitors.",
  },
  {
    id: 4,
    title: "Nexus Brand Identity",
    category: "branding",
    description: "Complete brand transformation for a tech startup",
    fullDescription: "Nexus needed a bold new identity that would position them as leaders in the tech industry. We created a comprehensive brand system that reflects their innovative spirit.",
    tags: ["Branding", "Identity", "Strategy"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    stats: [
      { label: "Brand Recognition", value: "+85%" },
      { label: "Market Position", value: "Top 10" },
      { label: "Assets Created", value: "200+" },
    ],
    challenge: "Differentiating Nexus in a crowded tech market.",
    solution: "We developed a unique visual language with bold colors, dynamic typography, and flexible brand assets.",
    results: "85% increase in brand recognition within 6 months.",
  },
  {
    id: 5,
    title: "MediCare Connect",
    category: "mobile",
    description: "Telemedicine app connecting patients with healthcare providers",
    fullDescription: "MediCare Connect revolutionizes healthcare access by providing instant virtual consultations, prescription management, and health records in one secure app.",
    tags: ["HealthTech", "Mobile", "UX"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    stats: [
      { label: "Consultations", value: "25K+" },
      { label: "Response Time", value: "< 5min" },
      { label: "Satisfaction", value: "96%" },
    ],
    challenge: "Ensuring HIPAA compliance while maintaining ease of use.",
    solution: "We implemented end-to-end encryption, secure video calls, and intuitive navigation.",
    results: "25K+ consultations completed with 96% patient satisfaction.",
  },
  {
    id: 6,
    title: "CloudSync Enterprise",
    category: "saas",
    description: "Enterprise file management and collaboration platform",
    fullDescription: "CloudSync Enterprise provides businesses with secure, scalable cloud storage and real-time collaboration tools designed for modern teams.",
    tags: ["SaaS", "Enterprise", "Collaboration"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    stats: [
      { label: "Storage", value: "1PB+" },
      { label: "Teams", value: "500+" },
      { label: "File Security", value: "256-bit" },
    ],
    challenge: "Balancing security with seamless collaboration.",
    solution: "We created granular permission controls, real-time sync, and audit trails.",
    results: "500+ enterprise teams trust CloudSync with their data.",
  },
  {
    id: 7,
    title: "Gourmet Delivery",
    category: "web",
    description: "Premium food delivery platform with real-time tracking",
    fullDescription: "Gourmet Delivery connects food lovers with the finest restaurants, offering real-time tracking, personalized recommendations, and seamless ordering.",
    tags: ["Food Tech", "Web App", "Mobile"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    stats: [
      { label: "Orders", value: "1M+" },
      { label: "Restaurants", value: "5K+" },
      { label: "Avg Delivery", value: "30min" },
    ],
    challenge: "Managing complex logistics while maintaining food quality.",
    solution: "We built an intelligent routing system with real-time updates and temperature monitoring.",
    results: "1M+ orders delivered with 30-minute average delivery time.",
  },
  {
    id: 8,
    title: "Vertex Fitness",
    category: "mobile",
    description: "AI-powered personal training and fitness tracking app",
    fullDescription: "Vertex Fitness uses AI to create personalized workout plans, track progress, and provide real-time form corrections through your smartphone camera.",
    tags: ["Fitness", "AI", "Mobile"],
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    stats: [
      { label: "Active Users", value: "75K+" },
      { label: "Workouts", value: "500K+" },
      { label: "Retention", value: "82%" },
    ],
    challenge: "Making professional fitness coaching accessible to everyone.",
    solution: "We integrated computer vision for form analysis and created adaptive AI workout plans.",
    results: "75K+ active users with 82% monthly retention rate.",
  },
  {
    id: 9,
    title: "Quantum Labs",
    category: "branding",
    description: "Scientific brand identity for quantum computing startup",
    fullDescription: "Quantum Labs needed a brand that conveyed cutting-edge technology while remaining approachable. We created a sophisticated identity system that bridges complexity and clarity.",
    tags: ["Branding", "Tech", "Identity"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    stats: [
      { label: "Investment Raised", value: "$50M" },
      { label: "Media Features", value: "100+" },
      { label: "Brand Value", value: "+300%" },
    ],
    challenge: "Conveying cutting-edge technology while remaining approachable.",
    solution: "We created a sophisticated identity system with quantum-inspired visual elements.",
    results: "Raised $50M following rebrand, featured in 100+ media outlets.",
  },
];

const STATS = [
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "15+", label: "Awards Won" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selected, setSelected] = useState<typeof PROJECTS[0] | null>(null);

  const filtered = activeCategory === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-[#0B0D10] min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]"
            style={{ background: "rgba(31,162,255,0.3)", animation: "orb1 20s ease-in-out infinite" }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]"
            style={{ background: "rgba(225,0,255,0.3)", animation: "orb2 25s ease-in-out infinite" }} />
          <div className="absolute top-20 right-20 w-32 h-32 border border-primary/30"
            style={{ animation: "spin 30s linear infinite" }} />
          <div className="absolute bottom-40 left-40 w-24 h-24 border border-accent/30 rounded-full"
            style={{ animation: "pulse 15s ease-in-out infinite" }} />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Our Work</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
              Our{" "}
              <span className="text-gradient-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Explore our curated collection of work — digital experiences crafted for ambitious brands and visionary founders.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 max-w-4xl mx-auto"
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-2">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter + Projects */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-2xl font-medium capitalize transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-white"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/20 hover:text-white"
                }`}
                style={activeCategory === cat ? {
                  background: "linear-gradient(135deg, #1FA2FF, #E100FF)",
                  boxShadow: "0 0 30px rgba(31,162,255,0.4)"
                } : {}}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelected(project)}
                className="group cursor-pointer rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}
                whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/90 via-[#0B0D10]/20 to-transparent" />
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-black/40 backdrop-blur-md text-white border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Stats on hover */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {project.stats.map((s) => (
                      <div key={s.label} className="text-xs font-semibold px-3 py-1.5 rounded-full text-white border border-primary/30"
                        style={{ background: "rgba(31,162,255,0.2)" }}>
                        {s.value} {s.label}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 capitalize">{project.category}</p>
                  <h3 className="text-xl font-display font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-4 transition-all">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 p-8"
            style={{ background: "#0B0D10" }}
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
            <img src={selected.image} alt={selected.title} className="w-full h-48 object-cover rounded-2xl mb-6" />
            <div className="flex gap-2 flex-wrap mb-4">
              {selected.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-primary/30 text-primary"
                  style={{ background: "rgba(31,162,255,0.1)" }}>{tag}</span>
              ))}
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-2">{selected.title}</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">{selected.fullDescription}</p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {selected.stats.map((s) => (
                <div key={s.label} className="text-center p-4 rounded-2xl border border-white/10" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="text-2xl font-bold text-gradient-primary">{s.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                { label: "The Challenge", text: selected.challenge },
                { label: "Our Solution", text: selected.solution },
                { label: "The Results", text: selected.results },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-2xl border border-white/10" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{item.label}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}

      <style>{`
        @keyframes orb1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(80px,-40px) scale(1.1)} 66%{transform:translate(-40px,60px) scale(0.95)} }
        @keyframes orb2 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-80px,50px) scale(1.15)} 66%{transform:translate(60px,-30px) scale(0.9)} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.5)} }
      `}</style>
    </div>
  );
}
