import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Dribbble, Twitter, Linkedin, Instagram } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Global abstract glow background elements */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-2xl tracking-wider text-white hover:opacity-80 transition-opacity">
            UXPLORES<span className="text-primary">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  location === link.href ? "text-white" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-white/90 h-10 px-6 py-2 group"
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 pb-6 flex flex-col transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-6 text-center mt-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-3xl font-display font-medium transition-colors ${
                location === link.href ? "text-primary" : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pb-10 flex flex-col items-center gap-6">
          <Link
            href="/contact"
            className="w-full max-w-sm inline-flex items-center justify-center rounded-full text-lg font-semibold bg-primary text-white h-14 px-8"
          >
            Start a Project
          </Link>
          <div className="flex gap-6 text-white/50">
            <Twitter className="w-6 h-6 hover:text-white transition-colors" />
            <Linkedin className="w-6 h-6 hover:text-white transition-colors" />
            <Instagram className="w-6 h-6 hover:text-white transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col pt-24">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-white/5 pt-20 pb-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <Link href="/" className="font-display font-bold text-3xl tracking-wider text-white mb-6 block">
                UXPLORES<span className="text-primary">.</span>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We craft exceptional digital experiences that blend innovation, design excellence, and cutting-edge technology.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all">
                  <Dribbble size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-semibold text-lg text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-lg text-white mb-6">Services</h4>
              <ul className="space-y-4">
                <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">UI/UX Design</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Brand Identity</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Digital Strategy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-lg text-white mb-6">Get in Touch</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li>123 Innovation Drive,<br />Tech District, SF 94105</li>
                <li>
                  <a href="mailto:hello@uxplores.studio" className="hover:text-primary transition-colors">
                    hello@uxplores.studio
                  </a>
                </li>
                <li>
                  <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                    +1 (555) 123-4567
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2026 UXplores Design Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
