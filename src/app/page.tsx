'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Users, BarChart3, Shield, Camera, Zap, CheckCircle, ChevronDown, Menu, X, LucideIcon } from 'lucide-react';

// Types
interface CounterProps {
  end: number;
  duration?: number;
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  href?: string;
  className?: string;
  onClick?: () => void;
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

interface StatPillProps {
  label: string;
  value: string;
  delay?: number;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ScreenPreview {
  title: string;
  description: string;
  gradient: string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

// Animated Counter Component
const Counter: React.FC<CounterProps> = ({ end, duration = 2 }) => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

// Reusable Components
const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', href, className = '', onClick }) => {
  const baseStyles = 'px-4 py-2 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2';
  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-50',
    accent: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-xl',
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
    {subtitle && <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
  >
    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-7 h-7 text-emerald-600" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const StatPill: React.FC<StatPillProps> = ({ label, value, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white rounded-full px-8 py-4 shadow-lg"
  >
    <div className="text-center">
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  </motion.div>
);

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-emerald-600 transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="pb-6 text-gray-600 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </motion.div>
  );
};

// Main Landing Page
const TajaLanding: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: string[] = ['Features', 'How It Works', 'Screens', 'Pricing', 'FAQ', 'Contact'];

  const howItWorksSteps: HowItWorksStep[] = [
    {
      step: '01',
      title: 'Agents Sign In',
      description: 'Agents land on the portal with their personalized views and access controls.',
      icon: Users,
    },
    {
      step: '02',
      title: 'Capture Shop Details',
      description: 'Name, address, phone, state/LGA, photos, precise latitude/longitude, and description.',
      icon: Camera,
    },
    {
      step: '03',
      title: 'Review & Analyze',
      description: 'Admins see counts, maps, and top regions in real-time dashboards.',
      icon: BarChart3,
    },
  ];

  const screenPreviews: ScreenPreview[] = [
    {
      title: 'Agent Dashboard',
      description: 'Daily activity tracking and profile completion at a glance',
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      title: 'Shops Management',
      description: 'Powerful filters with map and table views for complete control',
      gradient: 'from-indigo-500 to-indigo-600',
    },
    {
      title: 'Admin Overview',
      description: 'Real-time metrics and analytics panels for data-driven decisions',
      gradient: 'from-gray-700 to-gray-900',
    },
  ];

  const pricingPlans: PricingPlan[] = [
    {
      name: 'Starter',
      price: '$49',
      description: 'Perfect for small teams getting started with capture',
      features: [
        'Up to 10 agents',
        'Basic analytics',
        'Map & table views',
        'Email support',
      ],
    },
    {
      name: 'Team',
      price: '$149',
      description: 'Advanced filters, exports, and priority support',
      features: [
        'Up to 50 agents',
        'Advanced analytics',
        'Data exports',
        'Priority support',
        'Custom filters',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'SSO, audit logs, custom analytics',
      features: [
        'Unlimited agents',
        'Custom analytics',
        'SSO & audit logs',
        '24/7 support',
        'Custom integrations',
      ],
    },
  ];

  const faqItems: FAQItemProps[] = [
    {
      question: "What's the difference between agent and admin roles?",
      answer: "Agents can add shops, update their profile, and view their activity. Admins have full access to manage all agents, shops, analytics, and system settings with role-aware controls.",
    },
    {
      question: "What data is captured for each shop?",
      answer: "Each shop includes name, address, phone number, state/LGA, photos, precise GPS coordinates (latitude/longitude), description, owner information, and status tracking.",
    },
    {
      question: "How do I manage agent statuses and permissions?",
      answer: "Admins can add, edit, activate, or deactivate agents through the Agents Management panel. All changes are logged and role-based permissions are automatically applied.",
    },
    {
      question: "Can I filter shops by region or LGA?",
      answer: "Yes! The Shops Management view includes powerful filters for state, LGA, agent, status, and date ranges. You can view results in both map and table formats.",
    },
    {
      question: "How accurate is the GPS capture?",
      answer: "TAJA uses device GPS for precise location capture. Agents can also adjust pins on the map to ensure accuracy before submitting shop data.",
    },
  ];

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
          }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">TAJA</div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replaceAll(' ', '')}`}
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                >
                  {link}
                </a>
              ))}
              <Button variant="accent" href="https://taja-platform.vercel.app/login">
                Launch App
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pt-4 pb-6 flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                >
                  {link}
                </a>
              ))}
              <Button variant="accent" href="https://taja-platform.vercel.app/login" className="w-full justify-center">
                Launch App
              </Button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Map. Capture. Manage shops at scale.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                TAJA helps teams register shops, track field activity, and view real-time analytics in one dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href="/login">
                  Get Started
                </Button>
                <Button variant="secondary" href="#screens">
                  See Live Dashboard
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Total Shops</div>
                    <div className="text-4xl font-bold text-gray-900">
                      <Counter end={12847} />
                    </div>
                  </div>
                  <MapPin className="w-12 h-12 text-emerald-600" />
                </div>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Total Agents</div>
                    <div className="text-4xl font-bold text-gray-900">
                      <Counter end={284} />
                    </div>
                  </div>
                  <Users className="w-12 h-12 text-indigo-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            <StatPill label="Agents Onboarded" value="284+" delay={0} />
            <StatPill label="Shops Captured" value="12.8K+" delay={0.1} />
            <StatPill label="States Covered" value="36" delay={0.2} />
            <StatPill label="Avg. Capture Time" value="< 3 min" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeader
            title="Everything you need to manage field operations"
            subtitle="Built for agents, optimized for admins"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Users}
              title="Agent Portal"
              description="Profile, password updates, daily activity feed, and shop submissions in one place."
              delay={0}
            />
            <FeatureCard
              icon={MapPin}
              title="Shops Management"
              description="Filter by state/LGA, view on map/table, manage status and owners."
              delay={0.1}
            />
            <FeatureCard
              icon={Shield}
              title="Agents Management"
              description="Add, edit, and activate agents with role-aware controls."
              delay={0.2}
            />
            <FeatureCard
              icon={BarChart3}
              title="Analytics Overview"
              description="Shop density by state, top regions, and performance snapshots."
              delay={0.3}
            />
            <FeatureCard
              icon={Zap}
              title="Fast Auth"
              description="Role-based login routes agents vs admins automatically."
              delay={0.4}
            />
            <FeatureCard
              icon={Camera}
              title="Media Capture"
              description="Attach photos and precise GPS pins when adding shops."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="howitworks" className="py-20 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeader
            title="How It Works"
            subtitle="Three simple steps to streamline your field operations"
          />
          <div className="grid md:grid-cols-3 gap-12">
            {howItWorksSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-emerald-600" />
                </div>
                <div className="text-5xl font-bold text-gray-200 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screen Previews */}
      <section id="screens" className="py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeader
            title="Built for the field, designed for efficiency"
            subtitle="See TAJA in action"
          />
          <div className="space-y-12">
            {screenPreviews.map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${screen.gradient} p-8 text-white`}>
                  <h3 className="text-3xl font-bold mb-2">{screen.title}</h3>
                  <p className="text-white/90">{screen.description}</p>
                </div>
                <div className="h-64 bg-gray-100 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Screen Preview</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeader
            title="Simple, transparent pricing"
            subtitle="Choose the plan that fits your team"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${plan.featured
                  ? 'bg-gray-900 text-white shadow-2xl scale-105'
                  : 'bg-white shadow-lg'
                  }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-4">
                  {plan.price}
                  {plan.price !== 'Custom' && <span className="text-lg font-normal">/mo</span>}
                </div>
                <p className={`mb-6 ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle
                        className={`w-5 h-5 ${plan.featured ? 'text-emerald-400' : 'text-emerald-600'}`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.featured ? 'accent' : 'primary'}
                  href="https://taja-platform.vercel.app/login"
                  className="w-full justify-center"
                >
                  Launch App
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="Frequently Asked Questions" />
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to capture your next 1,000 shops?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join teams already using TAJA to streamline field operations
            </p>
            <Button variant="accent" href="/login" className="text-xl px-12 py-5">
              Open TAJA
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">TAJA</div>
              <p className="text-gray-400 leading-relaxed">
                Field shop capture, analytics, and agent management — all in one dashboard.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TAJA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TajaLanding;