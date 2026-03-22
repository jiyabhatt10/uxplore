import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";
import { FloatingOrbs } from "@/components/ui/floating-orbs";

const CATEGORIES = ["All", "Web App", "Mobile", "Branding"];

const PROJECTS = [
  {
    id: 1,
    title: "AI Dashboard Pro",
    client: "FinTech Revolution",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // tech dashboard
    desc: "Next-gen analytics platform powered by artificial intelligence",
    stats: ["200M+ Data Points", "50+ Enterprise Clients"]
  },
  {
    id: 2,
    title: "EcoShop Platform",
    client: "EcoShop",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // minimal web design
    desc: "Sustainable e-commerce platform for eco-conscious consumers",
    stats: ["2M Monthly Visitors", "45% Conversion Lift"]
  },
  {
    id: 3,
    title: "Nexus Identity",
    client: "Nexus Brand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80", // branding geometric
    desc: "Complete brand transformation for a tech startup",
    stats: ["150% Brand Recognition", "10+ Assets Created"]
  },
  {
    id: 4,
    title: "MediCare Connect",
    client: "HealthCorp",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80", // medical app concept
    desc: "Telemedicine app connecting patients with healthcare providers",
    stats: ["10K+ Consultations", "<2min Response Time"]
  },
  {
    id: 5,
    title: "CloudSync Enterprise",
    client: "CloudTech",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80", // data server network
    desc: "Enterprise file management and collaboration platform",
    stats: ["99.9% File Security", "Zero Downtime"]
  },
  {
    id: 6,
    title: "Gourmet Delivery",
    client: "FoodFast",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", // food app concept
    desc: "Premium food delivery platform with real-time tracking",
    stats: ["500+ Restaurants", "30min Avg Delivery"]
  }
];

export default function Work() {
  const [activeCat, setActiveCat] = useState("All");

  const filteredProjects = PROJECTS.filter(p => activeCat === "All" || p.category === activeCat);

  return (
    <div className="w-full min-h-screen">
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10"><FloatingOrbs /></div>
        <div className="max-w-7xl mx-auto">
          <AnimatedText>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Our <span className="text-gradient-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-12">
              Explore our recent projects and see how we've helped businesses achieve their digital goals through exceptional design.
            </p>
          </AnimatedText>

          {/* Filter Tabs */}
          <AnimatedSection delay={0.2} className="flex flex-wrap gap-4 mb-16">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCat === cat 
                    ? "bg-white text-black" 
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.1}>
                <div className="group relative rounded-[2.5rem] overflow-hidden bg-card border border-white/5 hover:border-primary/30 transition-colors">
                  {/* Image container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                    
                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm z-20">
                      <Link href={`#project-${project.id}`} className="px-8 py-4 rounded-full bg-primary text-white font-semibold flex items-center hover:scale-105 transition-transform">
                        View Case Study <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 relative z-10 bg-card">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-2 block">{project.client}</span>
                        <h3 className="text-3xl font-display font-bold text-white">{project.title}</h3>
                      </div>
                      <span className="px-4 py-1 rounded-full bg-white/10 text-xs font-medium text-white/80">{project.category}</span>
                    </div>
                    <p className="text-muted-foreground mb-6">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                      {project.stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center text-sm font-medium text-white/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {stat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
