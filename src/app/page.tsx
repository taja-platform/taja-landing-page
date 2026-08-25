"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Layers,
  ShoppingBag,
  Building2,
  Users,
  Store,
  Compass,
  Truck,
  FileText,
  BadgeCheck,
  Lock,
  ChevronRight,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RajaLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activePersona, setActivePersona] = useState<"brands" | "distributors" | "agents" | "retailers">("brands");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Capabilities", href: "#capabilities" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Who It's For", href: "#solutions" },
    { name: "FAQ", href: "#faq" },
  ];

  const distributionSectors = [
    "FMCG & Packaged Foods",
    "Beverages & Cold Chain",
    "Personal & Beauty Care",
    "Household & Cleaning Essentials",
    "Pharmaceuticals & Healthcare",
    "Confectionery & Baked Snacks",
    "Agro-Allied Commodities",
    "Building & Hardware Retail",
  ];

  const personas = [
    {
      id: "brands",
      label: "Brand Principals & FMCG",
      icon: Building2,
      headline: "Full Visibility into Last-Mile Retail Pull",
      description:
        "Understand real demand at the kiosk counter. Track store-level brand share, monitor price compliance across informal markets, and eliminate distributor blind spots.",
      benefits: [
        "Territory heatmaps of retail coverage and market penetration",
        "Granular SKU sales velocity by market zone and store category",
        "Direct trade promotion verification and pricing audits",
        "Data-backed territorial expansion planning",
      ],
    },
    {
      id: "distributors",
      label: "Distributors & Wholesalers",
      icon: Truck,
      headline: "Optimized Routes & Faster Inventory Turns",
      description:
        "Equip field teams with turn-by-turn route itineraries, automate B2B wholesale orders, and eliminate credit leakage with digital proof.",
      benefits: [
        "Geo-fenced route planning with minimum transit waste",
        "Direct mobile order dispatch to warehouse fulfillment",
        "Real-time payment and freight tracking with digital receipts",
        "Strict corporate tenant isolation and data privacy",
      ],
    },
    {
      id: "agents",
      label: "Field Sales Reps",
      icon: Users,
      headline: "Fast Mobile Ordering & Zero Paperwork",
      description:
        "An offline-first mobile assistant for field agents. Geo-tag new kiosks in 15 seconds, showcase live digital catalogs, and capture verified orders on the go.",
      benefits: [
        "Offline-first mobile order capture with automatic sync",
        "Automated GPS check-in validation (no manual logbooks)",
        "Instant access to customer history and wholesale discount tiers",
        "Real-time daily sales and target tracking",
      ],
    },
    {
      id: "retailers",
      label: "Retailers & Store Owners",
      icon: Store,
      headline: "Direct Wholesale Access & Reliable Delivery",
      description:
        "Connect informal kiosks directly to verified distributors and manufacturers. Enjoy transparent wholesale pricing, predictable delivery, and digital receipts.",
      benefits: [
        "Direct wholesale pricing without unauthorized markups",
        "Predictable delivery schedules and SMS/WhatsApp updates",
        "Digital transaction records for micro-credit qualification",
        "Volume discounts and trade loyalty incentives",
      ],
    },
  ];

  const faqs = [
    {
      q: "How does RAJA map retail outlets in areas without formal street addresses?",
      a: "RAJA captures accurate GPS coordinates (latitude and longitude) paired with storefront photo audits, merchant contact details, and market zone classifications (e.g., Adebayo Market Bariga, Trade Fair Plazas). This builds a clean, permanent digital pin for every informal kiosk, stall, or supermarket.",
    },
    {
      q: "Can field agents use RAJA in areas with weak or no internet connectivity?",
      a: "Yes. The RAJA mobile agent interface is engineered offline-first. Field sales reps can capture new store profiles, record photo audits, and log full sales orders completely offline. All records are securely stored and automatically synced as soon as a network connection is available.",
    },
    {
      q: "How does RAJA prevent ghost visits and false reporting by sales reps?",
      a: "RAJA uses GPS geo-fencing and location timestamping. An agent cannot log a store visit or order unless their device is physically within the verified radius of the mapped outlet, ensuring genuine visit compliance.",
    },
    {
      q: "How is corporate data isolation maintained between competing agencies?",
      a: "Every corporate agency operates in an isolated tenant partition. Outlets, product SKUs, pricing catalogs, and sales orders are permanently stamped with tenant foreign keys. One distributor can never view or access another company's catalog, routes, or sales data.",
    },
    {
      q: "How quickly can our distribution team get started on RAJA?",
      a: "Onboarding takes less than 5 minutes. You can register your agency, invite field agents via a secure invite code, upload your product catalog, and deploy mobile agents to the field immediately with zero IT infrastructure required.",
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      {/* ========================================================================= */}
      {/* 1. APPLE HIG / FLUENT FLOATING NAVBAR */}
      {/* ========================================================================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3 bg-white/85 backdrop-blur-2xl border-b border-slate-200/80 shadow-sm" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official RAJA Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative h-9 w-9 rounded-xl overflow-hidden shadow-sm flex items-center justify-center bg-white border border-slate-200/80">
                <Image
                  src="/raja-logo.png"
                  alt="RAJA Logo"
                  width={36}
                  height={36}
                  className="object-contain p-0.5 group-hover:scale-105 transition-transform"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none">RAJA</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mt-0.5">
                  Distribution Intelligence
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-white/70 p-1.5 rounded-full border border-slate-200/80 shadow-sm backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="https://app.raja.ng/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all"
              >
                Sign In
              </Link>
              <Link
                href="https://app.raja.ng/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all flex items-center gap-1.5 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden mt-3 p-5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-xl flex flex-col gap-3"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                  <Link
                    href="https://app.raja.ng/login"
                    target="_blank"
                    className="w-full py-2.5 text-center text-sm font-bold text-slate-700 bg-slate-100 rounded-xl"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="https://app.raja.ng/signup"
                    target="_blank"
                    className="w-full py-2.5 text-center text-sm font-bold text-white bg-emerald-600 rounded-xl shadow-md"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION (CONCISE, LIVELY, INFORMATIVE & MODEST) */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden subtle-grid-pattern">
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-400/15 via-teal-300/10 to-indigo-400/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            {/* Tagline Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Location-Based FMCG Distribution Intelligence</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
            >
              Reach Retailers. Track Demand.{" "}
              <span className="apple-gradient-emerald">Scale FMCG Distribution.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
            >
              RAJA connects FMCG brands, distributors, and field agencies with the informal retail market.
              Geo-tag kiosks with GPS precision, verify field sales visits, and capture direct-to-store orders in real time.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
            >
              <Link
                href="https://app.raja.ng/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all flex items-center gap-2 group"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#how-it-works"
                className="px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
              >
                See How It Works
              </a>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-3 pt-3 text-xs font-semibold text-slate-600"
            >
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>GPS Outlet Mapping</span>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct-to-Store Orders</span>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Route Visits</span>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>Territory Demand Intelligence</span>
              </span>
            </motion.div>
          </div>

          {/* Clean Modest Product Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 max-w-5xl mx-auto rounded-3xl p-3 bg-gradient-to-b from-slate-200/70 via-slate-100/50 to-transparent border border-slate-200/80 shadow-xl"
          >
            <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Visual Highlight 1 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
                    <MapPin className="w-4 h-4" />
                    <span>Geo-Tagged Outlets</span>
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900 font-mono">100% GPS Verified</div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Storefront photos, exact coordinates, and merchant KYC permanently cataloged.
                  </p>
                </div>

                {/* Visual Highlight 2 */}
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Direct-to-Store Capture</span>
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900 font-mono">Real-Time Orders</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated wholesale volume discounts, freight routing, and instant digital receipts.
                  </p>
                </div>

                {/* Visual Highlight 3 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Fraud-Proof Radar</span>
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900 font-mono">Zero Ghost Visits</div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Geo-fenced check-in beacons ensure sales reps are physically at the retail counter.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTOR MARQUEE TICKER */}
      {/* ========================================================================= */}
      <section className="py-7 bg-white border-y border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-2.5 text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Powering Distribution Across Core Emerging Market Verticals
          </span>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-6 py-1.5">
            {[...distributionSectors, ...distributionSectors].map((sector, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY RAJA / CORE VALUE PILLARS (CONCISE & INFORMATIVE) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-600">The Distribution Advantage</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Turn Fragmented Retail Into Structured Intelligence.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              85% of emerging market retail happens in unnamed neighborhood stalls. RAJA provides the tools to manage it cleanly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Eliminate Territory Blind Spots</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Build clean coverage maps of informal kiosks and open-market wholesalers with GPS coordinates, storefront photos, and merchant KYC.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Fraud-Proof Field Execution</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Geofenced check-in validation ensures sales reps visit assigned outlets physically. Eliminate ghost visits, fake logs, and paper receipts.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Accelerated Direct Reorders</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mobile Direct-to-Store (DTS) order entry with real-time SKU pricing, tiered volume discounts, and instant dispatch to warehouse fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CORE CAPABILITIES (BENTO GRID) */}
      {/* ========================================================================= */}
      <section id="capabilities" className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-600">Platform Engines</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything You Need to Scale Distribution.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Four purpose-built technology layers designed for speed, accuracy, and enterprise multi-tenancy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-4">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Geo-Tagged Outlet Profiles & KYC</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Map every informal kiosk with exact coordinates, storefront photo galleries, and 4-tier category classifications (Wholesaler, Distributor, Sub-Distributor, Retailer).
                </p>
              </div>
              <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Millimeter GPS Pinning & Photo Audits</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-4">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Fraud-Proof Field Route Radar</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Geofenced visit check-in beacons guarantee rep presence. Works offline in low-connectivity markets with automatic background synchronization.
                </p>
              </div>
              <div className="pt-2 text-xs font-bold text-indigo-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>Offline-First Sync & Geofence Verification</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-4">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Direct-to-Store (DTS) Mobile Ordering</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Live digital SKU catalogs with dynamic wholesale discount tiers, freight mode assignment (Market Activation, Freighted, Self Pickup), and instant invoicing.
                </p>
              </div>
              <div className="pt-2 text-xs font-bold text-cyan-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>Instant B2B Digital Invoicing</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-4">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Multi-Tenant Corporate Isolation</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Complete corporate tenant isolation guarantees zero data leakage between competing agencies. Track real-time gross revenue (₦) and regional demand heatmaps.
                </p>
              </div>
              <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Strict Database Multi-Tenant Partitions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. HOW IT WORKS (3 CLEAR STEPS) */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="py-20 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-600">3-Step Process</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How Distribution Flows Through RAJA.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              A simple, reliable workflow that turns informal field activity into actionable commercial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Map & Geo-Tag Outlets",
                desc: "Field agents record kiosk coordinates, storefront photos, and merchant details in seconds.",
                icon: MapPin,
              },
              {
                step: "02",
                title: "Capture & Fulfill Orders",
                desc: "Reps log direct orders from digital catalogs with tiered pricing and automated dispatch.",
                icon: ShoppingBag,
              },
              {
                step: "03",
                title: "Analyze Demand & Grow",
                desc: "HQ leadership tracks real-time sales heatmaps, agent productivity, and stock replenishment.",
                icon: TrendingUp,
              },
            ].map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={i} className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-slate-200 font-mono">{st.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. WHO IT'S FOR (SOLUTIONS MATRIX) */}
      {/* ========================================================================= */}
      <section id="solutions" className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-600">Solutions for Every Role</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered for Every Link in the Chain.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Select your role to see how RAJA streamlines your operations.
            </p>
          </div>

          {/* Persona Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-4xl mx-auto">
            {personas.map((p) => {
              const Icon = p.icon;
              const isActive = activePersona === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePersona(p.id as any)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-emerald-400" : "text-slate-500"}`} />
                  <span>{p.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Persona Details */}
          <div className="max-w-3xl mx-auto">
            {personas
              .filter((p) => p.id === activePersona)
              .map((persona) => (
                <motion.div
                  key={persona.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-md space-y-4"
                >
                  <h3 className="text-2xl font-extrabold text-slate-900">{persona.headline}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{persona.description}</p>
                  <div className="space-y-2 pt-2">
                    {persona.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAQ SECTION (COLLAPSIBLE ACCORDION) */}
      {/* ========================================================================= */}
      <section id="faq" className="py-20 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-600">FAQ</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear answers regarding deployment, offline capabilities, and data security.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. BOTTOM MASTER CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-5 shadow-2xl border border-slate-800 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                Start Deploying in Minutes
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Ready to Bring Data-Driven Intelligence to Your Distribution Network?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                Join FMCG brands, distributors, and field agencies achieving verified retail coverage and accelerated orders.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
                <Link
                  href="https://app.raja.ng/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-2xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://app.raja.ng/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
                >
                  Sign In to Web Console
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. EXECUTIVE FOOTER */}
      {/* ========================================================================= */}
      <footer className="bg-slate-950 text-slate-400 py-14 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Brand Column */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="relative h-8 w-8 rounded-lg overflow-hidden flex items-center justify-center bg-white p-0.5">
                  <Image src="/raja-logo.png" alt="RAJA Logo" width={30} height={30} className="object-contain" />
                </div>
                <span className="font-extrabold text-xl tracking-tight text-white">RAJA</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Location-based distribution intelligence & field force execution for emerging markets.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-white">Capabilities</div>
              <ul className="space-y-1.5 text-xs">
                <li><a href="#capabilities" className="hover:text-white transition-colors">GPS Outlet Mapping</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">Direct-to-Store Orders</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">Route Radar & Check-ins</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">Multi-Tenant Isolation</a></li>
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-white">Solutions</div>
              <ul className="space-y-1.5 text-xs">
                <li><a href="#solutions" className="hover:text-white transition-colors">Brand Principals & FMCG</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Distributors & Wholesalers</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Field Sales Reps</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Retailers & Store Owners</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-white">Contact</div>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <a href="mailto:support@raja.ng" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-emerald-500" />
                    <span>support@raja.ng</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/2348129901643" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-500" />
                    <span>WhatsApp: +234 812 990 1643</span>
                  </a>
                </li>
                <li className="pt-1 text-slate-500 font-mono text-[11px]">
                  HQ: Lagos, Nigeria
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <div>&copy; {new Date().getFullYear()} RAJA Distribution Intelligence. All rights reserved.</div>
            <div className="text-slate-500">
              Retail Access. Powered by Analytics.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
