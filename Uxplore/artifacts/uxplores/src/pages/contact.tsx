import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useToast } from "@/hooks/use-toast";
import { FloatingOrbs } from "@/components/ui/floating-orbs";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@uxplores.studio",
    link: "mailto:hello@uxplores.studio",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    link: "#",
  },
];

const OFFICE_HOURS = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const BUDGET_OPTIONS = [
  "< $10K",
  "$10K - $25K",
  "$25K - $50K",
  "$50K - $100K",
  "$100K+",
];

const FAQ = [
  {
    q: "What is your typical project timeline?",
    a: "Project timelines vary based on scope, but most projects take 6-12 weeks from kickoff to launch.",
  },
  {
    q: "Do you work with startups?",
    a: "Absolutely! We love working with startups and offer flexible engagement models to fit your needs.",
  },
  {
    q: "What is your design process?",
    a: "We follow a user-centered design process: Discovery, Strategy, Design, Development, and Launch.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes, we offer maintenance and support packages to ensure your product continues to perform optimally.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const inputCls =
    "w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/25 text-base";

  return (
    <div className="w-full bg-[#0B0D10]">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 -z-10"><FloatingOrbs /></div>
        <AnimatedSection className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Contact Us</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Let's Create{" "}
            <span
              className="animate-gradient"
              style={{
                background: "linear-gradient(to right, #1FA2FF, #9333ea, #E100FF, #9333ea, #1FA2FF)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Together
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear about it. Tell us about your vision, and let's turn it into reality.
          </p>
        </AnimatedSection>
      </section>

      {/* Main contact section */}
      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Contact info (2 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-bold mb-6 text-white">Contact Information</h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Ready to start your project? Reach out to us through any of the following channels.
                </p>
              </div>

              {/* Contact items */}
              <div className="space-y-4">
                {CONTACT_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="block group"
                  >
                    <div
                      className="flex items-center space-x-4 p-5 rounded-2xl border border-white/10 transition-all duration-500 group-hover:border-white/20"
                      style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}
                    >
                      <motion.div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "linear-gradient(135deg, rgba(31,162,255,0.2), rgba(225,0,255,0.2))",
                          border: "1px solid rgba(31,162,255,0.3)",
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                        <div className="text-lg font-medium text-white group-hover:text-primary transition-colors duration-500">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Office hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div
                  className="p-6 rounded-2xl border border-primary/30"
                  style={{ background: "linear-gradient(135deg, rgba(31,162,255,0.1), rgba(225,0,255,0.1))" }}
                >
                  <h3 className="text-xl font-display font-bold text-white mb-4">Office Hours</h3>
                  <div className="space-y-3">
                    {OFFICE_HOURS.map(({ day, time }) => (
                      <div key={day} className="flex justify-between text-sm">
                        <span className="text-gray-400">{day}</span>
                        <span className="text-white font-medium">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Address card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div
                  className="p-6 rounded-2xl border border-white/10"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #1FA2FF, #E100FF)" }}>
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white mb-2">Visit Our Studio</h3>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        123 Design Street, Creative District<br />
                        San Francisco, CA 94102<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Contact form (3 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div
                className="relative overflow-hidden rounded-3xl p-8 md:p-10 border border-white/10"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}
              >
                {/* Glow decorations */}
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[80px] pointer-events-none"
                  style={{ background: "rgba(31,162,255,0.12)" }} />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full blur-[80px] pointer-events-none"
                  style={{ background: "rgba(225,0,255,0.12)" }} />

                <h3 className="text-3xl font-display font-bold text-white mb-8 relative">Send us a message</h3>

                <form onSubmit={handleSubmit} className="space-y-5 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70">Full Name</label>
                      <input required className={inputCls} placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70">Email Address</label>
                      <input type="email" required className={inputCls} placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70">Company</label>
                      <input className={inputCls} placeholder="Your company name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70">Budget Range</label>
                      <div className="relative">
                        <select
                          className={inputCls + " appearance-none pr-10 bg-black/40"}
                          style={{ background: "rgba(0,0,0,0.4)" }}
                        >
                          <option value="" className="bg-gray-900">Select budget</option>
                          {BUDGET_OPTIONS.map(opt => (
                            <option key={opt} value={opt} className="bg-gray-900">{opt}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Project Type</label>
                    <input className={inputCls} placeholder="e.g. Mobile App, Website, Brand Identity" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Message</label>
                    <textarea
                      required
                      rows={5}
                      className={inputCls + " resize-none"}
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-70 btn-gradient"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? "Sending..." : (
                      <>Send Message <Send className="w-5 h-5" /></>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Frequently Asked{" "}
              <span className="text-gradient-primary">Questions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {FAQ.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 cursor-pointer group"
                style={{ background: "rgba(255,255,255,0.03)" }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                whileHover={{ borderColor: "rgba(31,162,255,0.3)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-lg font-display font-semibold text-white group-hover:text-primary transition-colors">
                    {item.q}
                  </h4>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </div>
                {openFaq === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-gray-400 mt-4 leading-relaxed text-sm"
                  >
                    {item.a}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
