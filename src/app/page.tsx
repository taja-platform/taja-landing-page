'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, TrendingUp, BarChart3, Target, Zap, Database, CheckCircle, ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Types
interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
}

interface UseCaseCard {
  title: string;
  description: string;
  gradient: string;
}

// Animated Counter Component
const Counter: React.FC<CounterProps> = ({ end, duration = 2, suffix = '' }) => {
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

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

// Reusable Components
const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', href, className = '', onClick }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2';
  const variants = {
    primary: 'bg-[#1f6b3a] text-white hover:bg-[#15512b] shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-gray-900 border-2 border-[#1f6b3a] hover:bg-gray-50',
    accent: 'bg-[#1f6b3a] text-white hover:bg-[#15512b] shadow-lg hover:shadow-xl',
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
    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-7 h-7 text-[#1f6b3a]" />
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
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#1f6b3a] transition-colors"
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
const RajaLanding: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: string[] = ['Features', 'How It Works', 'Who It\'s For', 'Contact'];

  const howItWorksSteps: HowItWorksStep[] = [
    {
      step: '01',
      title: 'Retailer Mapping',
      description: 'Register and geo-locate retailers with accurate latitude and longitude to build clean coverage maps for every territory.',
      icon: MapPin,
    },
    {
      step: '02',
      title: 'Purchase Pattern Tracking',
      description: 'Capture buying frequency, volumes, and product mix over time to understand what sells, where, and why.',
      icon: TrendingUp,
    },
    {
      step: '03',
      title: 'Sales Intelligence & Forecasting',
      description: 'Analyze demand clusters to estimate sales per zone and extrapolate potential for similar or untapped regions.',
      icon: BarChart3,
    },
  ];

  const useCases: UseCaseCard[] = [
    {
      title: 'FMCG Dealers',
      description: 'Track coverage, performance, and retailer loyalty by territory.',
      gradient: 'from-[#1f6b3a] to-[#15512b]',
    },
    {
      title: 'Distributors',
      description: 'Plan routes, allocate stock, and reduce under/over-serving of regions.',
      gradient: 'from-green-600 to-green-700',
    },
    {
      title: 'Consumer Goods Brands',
      description: 'Understand real market pull and plan smarter expansion.',
      gradient: 'from-emerald-600 to-emerald-700',
    },
    {
      title: 'Field & Strategy Teams',
      description: 'Use heatmaps and forecasts to guide sales execution.',
      gradient: 'from-teal-600 to-teal-700',
    },
  ];

  const faqItems: FAQItemProps[] = [
    {
      question: "How does RAJA capture retailer location data?",
      answer: "RAJA uses GPS coordinates (latitude/longitude) to precisely map each retailer's location. This enables accurate territory coverage visualization and helps identify demand clusters across regions.",
    },
    {
      question: "What purchase patterns does RAJA track?",
      answer: "RAJA captures buying frequency, order volumes, product mix preferences, and temporal patterns. This data reveals what products move in specific areas, helping optimize inventory allocation and distribution planning.",
    },
    {
      question: "Can RAJA predict sales in new territories?",
      answer: "Yes. RAJA analyzes demand clusters in existing territories and extrapolates potential for similar or untapped regions, helping you make data-driven expansion decisions.",
    },
    {
      question: "How does RAJA help reduce distribution inefficiency?",
      answer: "By mapping actual retailer purchase patterns and location data, RAJA reveals under-served and over-served areas, enabling better route planning, stock allocation, and resource deployment.",
    },
    {
      question: "Who can access RAJA's analytics?",
      answer: "RAJA provides role-specific dashboards for dealers, distributors, brands, and field teams. Each user sees relevant metrics and insights for their scope of operations.",
    },
  ];

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-white lg:bg-transparent'
          }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/raja-logo.png" alt="RAJA Logo" width={50} height={40} />
            </Link>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '').replace("'", '')}`}
                  className="text-gray-700 hover:text-[#1f6b3a] transition-colors font-medium"
                >
                  {link}
                </a>
              ))}
              <Link href="https://app.raja.ng/login" target="_blank" rel="noopener noreferrer">
                <Button variant="accent" className='cursor-pointer'>Login</Button>
              </Link>
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
                  href={`#${link.toLowerCase().replace(/\s+/g, '').replace("'", '')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[#1f6b3a] transition-colors font-medium"
                >
                  {link}
                </a>
              ))}
              <Link href="https://app.raja.ng/login" target="_blank" rel="noopener noreferrer">
                <Button variant="accent" className='cursor-pointer'>Login</Button>
              </Link>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-green-100 text-[#1f6b3a] px-4 py-2 rounded-full font-bold text-sm mb-6 border border-green-200">
                Retail Access. Powered by Analytics.
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Reach retailers. Predict demand. Grow smarter.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                RAJA is a location-based distribution intelligence platform that helps FMCG dealers, distributors, and brands understand where sales happen, how retailers buy, and where to expand next.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://app.raja.ng/login" target="_blank" rel="noopener noreferrer">
                  <Button variant="accent" className='cursor-pointer w-full'>Login</Button>
                </Link>
                <Button variant="secondary" href="#howitworks">
                  See How It Works
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
                  📍 Retailer mapping (GPS)
                </span>
                <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
                  📊 Purchase pattern tracking
                </span>
                <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
                  🗺️ Sales heatmaps
                </span>
                <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
                  ⚡ Demand forecasting
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="inline-block bg-green-100 text-[#15512b] px-3 py-1 rounded-full font-bold text-xs mb-4 border border-green-200">
                What RAJA does
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                RAJA connects the FMCG chain and captures real purchase + location data from the last mile. Each retailer interaction is geo-tagged and analyzed to reveal buying patterns, demand clusters, and sales potential across regions.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#1f6b3a] mt-0.5" />
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Retailer mapping</div>
                      <div className="text-sm text-gray-600">Latitude/Longitude captured per retailer</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Sales intelligence</div>
                      <div className="text-sm text-gray-600">Estimate sales per zone and territory</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Coverage planning</div>
                      <div className="text-sm text-gray-600">Find under-served growth areas</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-16 px-6 bg-white border-t border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            <StatPill label="Territories Mapped" value="150+" delay={0} />
            <StatPill label="Retailers Tracked" value="25K+" delay={0.1} />
            <StatPill label="Demand Clusters Identified" value="500+" delay={0.2} />
            <StatPill label="Distribution Efficiency Gain" value="32%" delay={0.3} />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="howitworks" className="py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeader
            title="How RAJA works"
            subtitle="Three simple steps to turn distribution activity into actionable intelligence"
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
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-[#1f6b3a]" />
                </div>
                <div className="text-5xl font-bold text-gray-200 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeader
            title="Key features"
            subtitle="Everything you need to see, measure, and scale your retail coverage"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={MapPin}
              title="Retailer Profiles"
              description="Location, purchase history, frequency, and product preferences for every retailer in your network."
              delay={0}
            />
            <FeatureCard
              icon={Target}
              title="Coverage Maps"
              description="Territory visualization with retailer clusters and density to identify gaps and opportunities."
              delay={0.1}
            />
            <FeatureCard
              icon={BarChart3}
              title="Sales Heatmaps"
              description="See high-performing zones and untapped opportunities at a glance across all regions."
              delay={0.2}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Demand Forecasting"
              description="Predict potential sales by region using pattern-based estimation and comparable zone analysis."
              delay={0.3}
            />
            <FeatureCard
              icon={Database}
              title="Data Quality Controls"
              description="Standardized retailer identification and anomaly flags ensure clean, reliable intelligence."
              delay={0.4}
            />
            <FeatureCard
              icon={Zap}
              title="Real-Time Dashboards"
              description="Dealer and distributor views for performance tracking and strategic planning."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section id="whoitsfor" className="py-20 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeader
            title="Who RAJA is for"
            subtitle="Built for teams that move fast-moving goods and need visibility at the last mile"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${useCase.gradient} rounded-xl mb-4`}></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why RAJA */}
      <section className="py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeader
            title="Why RAJA"
            subtitle="Turn fragmented retail activity into structured intelligence"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Know where your sales come from',
                description: 'See demand hotspots and weak zones clearly with GPS-tagged purchase data.',
              },
              {
                title: 'Identify under-served areas',
                description: 'Uncover growth pockets competitors ignore using coverage gap analysis.',
              },
              {
                title: 'Reduce guesswork',
                description: 'Plan distribution with real retailer purchase patterns, not assumptions.',
              },
              {
                title: 'Improve efficiency',
                description: 'Align routes and inventory allocation with actual demand clusters.',
              },
              {
                title: 'Expand smarter',
                description: 'Extrapolate potential in new regions using comparable zones and patterns.',
              },
              {
                title: 'Faster decisions',
                description: 'Move from guesswork to data-driven insights in minutes, not weeks.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#1f6b3a] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="Frequently Asked Questions" />
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1f6b3a] via-[#15512b] to-green-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to unlock data-driven distribution?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Request a walkthrough of RAJA{"'"}s analytics engine and retailer mapping system
            </p>
            <Button variant="secondary" href="#contact" className="text-xl px-12 py-5 bg-white hover:bg-gray-100">
              Contact RAJA
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Image src="/raja-logo.png" alt="RAJA Logo" width={60} height={48} className="mb-4" />
              <p className="text-gray-400 leading-relaxed">
                Retail Access. Powered by Analytics. Location-based distribution intelligence for FMCG.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:hello@raja.ng" className="text-gray-400 hover:text-white transition-colors">
                    hello@raja.ng
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/2348129901643" className="text-gray-400 hover:text-white transition-colors">
                    +234 812 990 1643
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '').replace("'", '')}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 RAJA. All rights reserved. — Retail Access. Powered by Analytics.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RajaLanding;