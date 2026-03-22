import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, User, ArrowRight, BookOpen } from "lucide-react";
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";
import { FloatingOrbs } from "@/components/ui/floating-orbs";

const CATEGORIES = ["all", "design", "development", "strategy", "trends"];

const ARTICLES = [
  {
    id: 1,
    title: "The Future of UI/UX Design in 2026",
    excerpt: "Exploring emerging trends that will shape the future of digital design, from AI-powered interfaces to immersive 3D experiences.",
    category: "design",
    author: "Alex Rivera",
    date: "Jan 25, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable Design Systems",
    excerpt: "A comprehensive guide to creating design systems that grow with your organization and maintain consistency across products.",
    category: "design",
    author: "Sarah Chen",
    date: "Jan 22, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Web Performance Optimization Techniques",
    excerpt: "Proven strategies to improve your website's loading speed and deliver exceptional user experiences.",
    category: "development",
    author: "Marcus Johnson",
    date: "Jan 20, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Crafting Compelling Brand Stories",
    excerpt: "Learn how to tell your brand's story in a way that resonates with your audience and builds lasting connections.",
    category: "strategy",
    author: "Emma Wilson",
    date: "Jan 18, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Micro-interactions: Small Details, Big Impact",
    excerpt: "Discover how subtle animations and interactions can dramatically improve user engagement and satisfaction.",
    category: "design",
    author: "Alex Rivera",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "The Rise of AI in Design Tools",
    excerpt: "How artificial intelligence is transforming the design workflow and what it means for creative professionals.",
    category: "trends",
    author: "Sarah Chen",
    date: "Jan 12, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    featured: false,
  },
  {
    id: 7,
    title: "Accessibility in Modern Web Design",
    excerpt: "Best practices for creating inclusive digital experiences that work for everyone, regardless of ability.",
    category: "development",
    author: "Marcus Johnson",
    date: "Jan 10, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    featured: false,
  },
  {
    id: 8,
    title: "Color Psychology in Digital Design",
    excerpt: "Understanding how colors influence user behavior and emotions in digital interfaces.",
    category: "design",
    author: "Emma Wilson",
    date: "Jan 8, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&q=80",
    featured: false,
  },
  {
    id: 9,
    title: "Building a Strong Digital Brand Presence",
    excerpt: "Strategies for establishing and maintaining a cohesive brand identity across all digital touchpoints.",
    category: "strategy",
    author: "Alex Rivera",
    date: "Jan 5, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    featured: false,
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === activeCategory);

  const featured = ARTICLES.find((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured);
  const showFeatured = activeCategory === "all" && featured;

  return (
    <div className="w-full bg-[#0B0D10] min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]"
            style={{ background: "rgba(31,162,255,0.25)" }} />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full blur-[100px]"
            style={{ background: "rgba(225,0,255,0.2)" }} />
        </div>
        <AnimatedText className="max-w-7xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Blog & Insights</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
            Ideas &{" "}
            <span className="text-gradient-primary">Insights</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Insights, trends, and stories from the world of design, development, and digital innovation.
          </p>
        </AnimatedText>
      </section>

      {/* Filter */}
      <section className="px-6 lg:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-2xl font-medium capitalize transition-all duration-300 text-sm ${
                  activeCategory === cat
                    ? "text-white"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/20 hover:text-white"
                }`}
                style={activeCategory === cat ? {
                  background: "linear-gradient(135deg, #1FA2FF, #E100FF)",
                  boxShadow: "0 0 20px rgba(31,162,255,0.3)"
                } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {showFeatured && (
        <section className="px-6 lg:px-12 pb-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <motion.div
                className="group cursor-pointer rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 grid grid-cols-1 lg:grid-cols-2"
                style={{ background: "rgba(255,255,255,0.03)" }}
                whileHover={{ y: -4 }}
              >
                <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
                  <img
                    src={featured!.image}
                    alt={featured!.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0D10]/60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                      style={{ background: "linear-gradient(135deg, #1FA2FF, #E100FF)" }}>
                      Featured Article
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5 capitalize"><BookOpen className="w-4 h-4 text-primary" />{featured!.category}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" />{featured!.readTime}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 group-hover:text-gradient-primary transition-all">
                    {featured!.title}
                  </h2>
                  <p className="text-lg text-gray-400 mb-6 leading-relaxed">{featured!.excerpt}</p>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
                      style={{ background: "linear-gradient(135deg, #1FA2FF, #E100FF)" }}>
                      {featured!.author[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{featured!.author}</p>
                      <p className="text-xs text-gray-400">{featured!.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-4 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group cursor-pointer rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500"
                style={{ background: "rgba(255,255,255,0.03)" }}
                whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } }}
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/80 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold capitalize text-primary border border-primary/20"
                      style={{ background: "rgba(31,162,255,0.1)" }}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2 leading-snug">{article.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: "linear-gradient(135deg, #1FA2FF, #E100FF)" }}>
                        {article.author[0]}
                      </div>
                      <span className="text-xs text-gray-400">{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full blur-[100px]"
            style={{ background: "linear-gradient(90deg, rgba(31,162,255,0.1), rgba(225,0,255,0.1))" }} />
        </div>
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Stay <span className="text-gradient-primary">Updated</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10">Get the latest design insights delivered straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors text-base"
            />
            <button type="submit" className="px-8 py-4 rounded-full font-semibold text-white whitespace-nowrap btn-gradient">
              Subscribe
            </button>
          </form>
        </AnimatedSection>
      </section>
    </div>
  );
}
