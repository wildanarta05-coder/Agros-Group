"use client";

import React, { useState, useId } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Headphones,
  Menu,
  X,
  MessageSquare,
  Package,
  BadgeCheck,
  Zap,
  Globe2,
  Truck,
  Store,
  Heart,
  ScanLine,
  Clock,
  BarChart3,
  Warehouse,
  Boxes,
  RefreshCw,
  Banknote,
  Camera,
  Bike,
  Lock,
  QrCode,
  Wallet,
  Mail,
  Network,
  Handshake,
  Shirt,
  Sparkles,
  Utensils,
  Palette,
  Send,
  CheckCircle2,
} from "lucide-react";

type ProductCategory = "fashion" | "skincare" | "food" | "accessories";

interface CategoryOption {
  id: ProductCategory;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  adjustment: number;
}

const CATEGORIES: CategoryOption[] = [
  { id: "fashion", label: "Fashion / Hijab", icon: Shirt, adjustment: -300 },
  { id: "skincare", label: "Skincare / Kosmetik", icon: Sparkles, adjustment: 400 },
  { id: "food", label: "Makanan / Snack", icon: Utensils, adjustment: 200 },
  { id: "accessories", label: "Aksesoris / Kriya", icon: Palette, adjustment: -200 },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [volume, setVolume] = useState<number>(350);
  const [category, setCategory] = useState<ProductCategory>("fashion");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    storeName: "",
    phone: "",
    email: "",
    platform: "shopee",
  });

  const volumeSliderId = useId();
  const storeNameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const platformId = useId();

  // Rate calculation formula based on PRD
  const calculateRate = () => {
    let base = 3200;
    const cat = CATEGORIES.find((c) => c.id === category);
    if (cat) {
      base += cat.adjustment;
    }

    if (volume >= 1000) {
      base -= 700;
    } else if (volume >= 500) {
      base -= 450;
    } else if (volume >= 200) {
      base -= 250;
    }

    return Math.max(2500, base);
  };

  const calculateSavings = () => {
    if (volume >= 1000) return "38%";
    if (volume >= 500) return "32%";
    if (volume >= 200) return "26%";
    return "20%";
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      const text = encodeURIComponent(
        `Halo Agros Group, saya ${formData.storeName || "Seller"} tertarik konsultasi fulfillment. Estimasi volume: ${volume} paket/bln, Kategori: ${category}, Platform: ${formData.platform}.`
      );
      window.open(`https://wa.me/6282124886861?text=${text}`, "_blank");
    }, 1200);
  };

  const currentRate = calculateRate();
  const currentSavings = calculateSavings();

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faff] text-[#0b1c30]">
      {/* =========================================================================
          NAVBAR (Sticky Glassmorphic)
          ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl border-b border-[#e2eaf5] shadow-sm transition-all duration-300">
        <div className="h-20 w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between max-w-7xl mx-auto">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0f2744] to-[#006398] flex items-center justify-center shadow-md text-white group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zm-8 7.36v7.28L11 21v-7.27L4 9.36zm16 0L13 13.73V21l7-4.36V9.36z"
                  opacity="0.95"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-extrabold tracking-tight text-[#0f2744] leading-tight">
                Agros Group
              </span>
              <span className="text-[10px] uppercase font-bold text-[#006398] tracking-widest leading-none">
                Fulfillment & Logistics
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 font-sans text-sm font-semibold text-[#45464d]">
            <a
              href="#home"
              className="px-3.5 py-2 rounded-lg hover:text-[#006398] hover:bg-[#eff4ff] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-3.5 py-2 rounded-lg hover:text-[#006398] hover:bg-[#eff4ff] transition-colors"
            >
              About Us
            </a>
            <a
              href="#services"
              className="px-3.5 py-2 rounded-lg hover:text-[#006398] hover:bg-[#eff4ff] transition-colors"
            >
              Services
            </a>
            <a
              href="#shipping-payment"
              className="px-3.5 py-2 rounded-lg hover:text-[#006398] hover:bg-[#eff4ff] transition-colors"
            >
              Shipping & Payment
            </a>
            <a
              href="#contact"
              className="px-3.5 py-2 rounded-lg hover:text-[#006398] hover:bg-[#eff4ff] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0f2744] hover:bg-[#006398] text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md transition-all duration-200 group"
            >
              <span>Konsultasi Gratis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://wa.me/6282124886861"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0f2744] flex items-center justify-center border border-[#d3e4fe] transition-colors"
              title="WhatsApp CS"
            >
              <Headphones className="w-5 h-5 text-[#006398]" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#0f2744] hover:bg-[#eff4ff] transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#e2eaf5] px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0b1c30] hover:bg-[#eff4ff] hover:text-[#006398]"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0b1c30] hover:bg-[#eff4ff] hover:text-[#006398]"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0b1c30] hover:bg-[#eff4ff] hover:text-[#006398]"
            >
              Services
            </a>
            <a
              href="#shipping-payment"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0b1c30] hover:bg-[#eff4ff] hover:text-[#006398]"
            >
              Shipping & Payment
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0b1c30] hover:bg-[#eff4ff] hover:text-[#006398]"
            >
              Contact & Hitung Biaya
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-[#0f2744] hover:bg-[#006398] text-white text-center rounded-xl font-bold text-sm shadow-md"
              >
                Konsultasi Gratis
              </a>
              <a
                href="https://wa.me/6282124886861"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#25d366] text-white text-center rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Chat CS via WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          MAIN CONTENT
          ========================================================================= */}
      <main className="w-full pt-20">
        {/* =========================================================================
            HERO SECTION (#home)
            ========================================================================= */}
        <section
          id="home"
          className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8faff] via-[#eff4ff] to-[#f8faff] py-16 lg:py-24"
        >
          {/* Ambient logistic glow circles */}
          <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#cce5ff]/50 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 -right-12 h-[32rem] w-[32rem] rounded-full bg-[#5bb8fe]/15 blur-[120px]" />

          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Value Prop & CTAs */}
              <div className="lg:col-span-6 flex flex-col items-start gap-6 z-10">
                {/* Live UMKM Status Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#dce9ff] shadow-sm">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#009668] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#009668]" />
                  </span>
                  <span className="text-xs text-[#45464d] font-semibold">
                    Mitra Fulfillment Resmi Indonesia
                  </span>
                  <span className="text-xs text-[#006398] font-bold">
                    • Siap Pick Up Tiap Hari
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f2744] leading-[1.18]">
                  Fulfillment & Pengiriman untuk Bisnis yang{" "}
                  <span className="text-[#006398] underline decoration-[#5bb8fe] decoration-wavy underline-offset-8">
                    Siap Berkembang
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg text-[#45464d] max-w-xl leading-relaxed">
                  Dari penyimpanan stok, packing rapi, hingga serah terima multi-ekspedisi ke
                  seluruh Indonesia. Agros Group bantu bisnis online Anda scale up tanpa pusing
                  lembur packing tiap malam.
                </p>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-1 w-full sm:w-auto">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 bg-[#0f2744] hover:bg-[#006398] text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <span>Mulai Sekarang</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#0f2744] font-bold text-base px-6 py-3.5 rounded-xl border border-[#c6c6cd] hover:border-[#006398] hover:text-[#006398] shadow-sm transition-all duration-200"
                  >
                    <Package className="w-4 h-4 text-[#006398]" />
                    <span>Layanan Kami</span>
                  </a>
                </div>

                {/* Integrated Platforms Badges */}
                <div className="pt-4 flex flex-col gap-2 w-full">
                  <span className="text-xs text-[#76777d] uppercase tracking-wider font-bold">
                    Terhubung Otomatis dengan Ekosistem Toko:
                  </span>
                  <div className="flex items-center gap-2.5 flex-wrap pt-1">
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-[#e2eaf5] text-xs font-bold text-[#0b1c30] flex items-center gap-2 shadow-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ee4d2d]" /> Shopee
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-[#e2eaf5] text-xs font-bold text-[#0b1c30] flex items-center gap-2 shadow-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#03ac0e]" /> Tokopedia
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-[#e2eaf5] text-xs font-bold text-[#0b1c30] flex items-center gap-2 shadow-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#000000]" /> TikTok Shop
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-[#e2eaf5] text-xs font-bold text-[#0b1c30] flex items-center gap-2 shadow-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0f146d]" /> Lazada
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-[#e2eaf5] text-xs font-bold text-[#0b1c30] flex items-center gap-2 shadow-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#25d366]" /> WhatsApp Order
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-[#e2eaf5] text-xs font-bold text-[#0b1c30] flex items-center gap-2 shadow-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#96588a]" /> WooCommerce
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual & Floating Stat Cards (Clean Vector Badges) */}
              <div className="lg:col-span-6 relative mt-8 lg:mt-0">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-[#eff4ff] border border-[#dce9ff]">
                  <Image
                    src="https://lh3.googleusercontent.com/aida/AEtjO1W2WQzRTBs7jOOpIMHmCDU6Omb_BzEaOGTms44IMgB6iE40NOqKhlyApUVFzSLqAmR-d13lHBDpcJo-BMylqoiZcqNIqvmbsWYSP9kPmfRjlkPblv_lo6tNNHSTwC65V7mxz4VgBjJxfNAv_07cRaWwdDSt2EmJM5AQZG7w5namyOdlRRyp43A4nte7sRlOeNxzPZUKY-77Jz3PyLghsM3hv-FaK3NCbNZkIKqEvFlQbx8sM-OqroMA"
                    alt="Pusat packing dan fulfillment pesanan e-commerce Indonesia"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2744]/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Stat Card 1: 99.8% Order Accuracy */}
                <div className="absolute -top-4 -left-2 sm:left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-[#dce9ff] flex items-center gap-3 max-w-[230px] hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 rounded-xl bg-[#e5eeff] flex items-center justify-center text-[#009668] shrink-0">
                    <BadgeCheck className="w-6 h-6 text-[#009668]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-lg text-[#0f2744] font-extrabold leading-tight">
                      99.8%
                    </span>
                    <span className="text-[11px] text-[#45464d] font-semibold leading-snug">
                      Akurasi Barcode Scan
                    </span>
                  </div>
                </div>

                {/* Floating Stat Card 2: Same-Day Processing */}
                <div className="absolute top-1/3 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-[#dce9ff] flex items-center gap-3 max-w-[220px] hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 rounded-xl bg-[#cce5ff] flex items-center justify-center text-[#006398] shrink-0">
                    <Zap className="w-6 h-6 text-[#006398] fill-[#006398]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-base text-[#0f2744] font-extrabold leading-tight">
                      Same-Day
                    </span>
                    <span className="text-[11px] text-[#45464d] font-semibold leading-snug">
                      Cut-off 15:00 WIB
                    </span>
                  </div>
                </div>

                {/* Floating Stat Card 3: 38 Provinsi */}
                <div className="absolute -bottom-5 -left-2 sm:left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-[#dce9ff] flex items-center gap-3 max-w-[240px] hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 rounded-xl bg-[#d3e4fe] flex items-center justify-center text-[#006398] shrink-0">
                    <Globe2 className="w-6 h-6 text-[#006398]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-base text-[#0f2744] font-extrabold leading-tight">
                      38 Provinsi
                    </span>
                    <span className="text-[11px] text-[#45464d] font-semibold leading-snug">
                      Jangkauan Nasional
                    </span>
                  </div>
                </div>

                {/* Floating Stat Card 4: 500K+ Paket */}
                <div className="absolute -bottom-5 right-2 sm:right-4 z-20 bg-[#0f2744] text-white rounded-2xl p-3.5 shadow-xl flex items-center gap-3 max-w-[230px] hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-base text-white font-extrabold leading-tight">
                      500K+ Paket
                    </span>
                    <span className="text-[11px] text-[#bec6e0] font-medium leading-snug">
                      Terkirim Tiap Bulan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            ABOUT US SECTION (#about)
            ========================================================================= */}
        <section id="about" className="w-full py-20 lg:py-28 bg-[#f0f4fc]">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-14">
            {/* Header */}
            <div className="flex flex-col items-start gap-2 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#006398] font-bold px-3 py-1 rounded-full bg-[#cce5ff]">
                TENTANG AGROS GROUP
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#0f2744] font-extrabold leading-tight">
                Partner Pertumbuhan Bisnis & Seller Online Indonesia
              </h2>
            </div>

            {/* Split Story Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Image */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white aspect-[4/3] border border-[#dce9ff]">
                  <Image
                    src="https://lh3.googleusercontent.com/aida/AEtjO1WgvDxog23m2j8NSM-L0lVmRBTAZGk28fXH97CWWIx6qIMvZlEP-fOqkI26mohoXL7cBSNJRrenFd-ipQItis62rWrHzuwn4uyuDWjwyUeW0BQVzRpTJw5IT9xKABxxNhE91bzEDDvIaqFXAW3htvdZYGkD7rD3JmhzIESH_zvzfhhD9zhxQRdSyMJT1YVoGhrjPVs8g8iwSo42ChasAjQqV9gBoT2DoBt8eAsTNsRqJp00dIEd3Uws"
                    alt="Seller online dan tim workshop UMKM"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2744]/50 via-transparent to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-5 left-6 bg-[#0f2744] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#006398] flex items-center justify-center text-white shrink-0">
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-sm text-white font-bold leading-none">
                      Partner Fulfillment Terpercaya
                    </span>
                    <span className="text-[11px] text-[#bec6e0] mt-1">
                      Solusi Bebas Ribet Packing & Kirim
                    </span>
                  </div>
                </div>

                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-sm border border-[#dce9ff] flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#006398] fill-[#006398]" />
                  <span className="text-xs text-[#0b1c30] font-bold">
                    Tumbuh Bersama Seller
                  </span>
                </div>
              </div>

              {/* Right Narrative & Stats */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <p className="text-lg text-[#0f2744] font-semibold leading-relaxed">
                  Agros Group lahir dari pemahaman mendalam atas perjuangan bisnis rumahan dan seller
                  online Indonesia yang sering kewalahan mengurus packing hingga larut malam.
                </p>
                <p className="text-base text-[#45464d] leading-relaxed">
                  Kami hadir menjadi partner fulfillment terpercaya agar pemilik usaha dapat
                  mengalihkan 100% energi dan fokus untuk riset produk, strategi promosi digital,
                  dan melipatgandakan omset penjualan tanpa terbebani operasional logistik fisik.
                </p>

                {/* 4 Metric Counter Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#e2eaf5] flex flex-col">
                    <span className="font-heading text-2xl lg:text-3xl text-[#0f2744] font-extrabold">
                      10+ Thn
                    </span>
                    <span className="text-xs text-[#76777d] font-medium mt-1">Dukung Seller</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#e2eaf5] flex flex-col">
                    <span className="font-heading text-2xl lg:text-3xl text-[#006398] font-extrabold">
                      1.500+
                    </span>
                    <span className="text-xs text-[#76777d] font-medium mt-1">Seller Aktif</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#e2eaf5] flex flex-col">
                    <span className="font-heading text-2xl lg:text-3xl text-[#0f2744] font-extrabold">
                      Hub Depok
                    </span>
                    <span className="text-xs text-[#76777d] font-medium mt-1">Pusat Strategis</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#e2eaf5] flex flex-col">
                    <span className="font-heading text-2xl lg:text-3xl text-[#006398] font-extrabold">
                      2.5 Jt+
                    </span>
                    <span className="text-xs text-[#76777d] font-medium mt-1">Paket / Tahun</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Value Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2eaf5] hover:shadow-md transition-shadow flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] flex items-center justify-center text-[#006398]">
                  <ScanLine className="w-6 h-6 text-[#006398]" />
                </div>
                <h3 className="font-heading text-lg text-[#0f2744] font-bold">
                  Keandalan & Ketelitian
                </h3>
                <p className="text-sm text-[#45464d] leading-relaxed">
                  Barcode scanning ganda di tiap meja packing, garansi 99.8% akurasi order, dan
                  proteksi bubble wrap tebal berlapis untuk menjaga produk aman sampai di tangan pembeli.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2eaf5] hover:shadow-md transition-shadow flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#cce5ff] flex items-center justify-center text-[#004b73]">
                  <Clock className="w-6 h-6 text-[#004b73]" />
                </div>
                <h3 className="font-heading text-lg text-[#0f2744] font-bold">
                  Pengiriman Ekstra Cepat
                </h3>
                <p className="text-sm text-[#45464d] leading-relaxed">
                  Pick up kurir terjadwal tepat waktu setiap hari. Paket langsung masuk sistem drop
                  point ekspedisi tanpa menunggu antrean lama, mempercepat status resi terupdate.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2eaf5] hover:shadow-md transition-shadow flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#d3e4fe] flex items-center justify-center text-[#006398]">
                  <BarChart3 className="w-6 h-6 text-[#006398]" />
                </div>
                <h3 className="font-heading text-lg text-[#0f2744] font-bold">
                  Transparansi & Fleksibilitas
                </h3>
                <p className="text-sm text-[#45464d] leading-relaxed">
                  Tanpa minimum kuota order harian. Pantau sisa stok dan status pengiriman real-time
                  melalui dashboard intuitif tanpa biaya tersembunyi ataupun denda pinalti.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SERVICES SECTION (#services)
            ========================================================================= */}
        <section id="services" className="w-full py-20 lg:py-28 bg-[#f8faff]">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-14">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col items-start gap-2 max-w-2xl">
                <span className="text-xs uppercase tracking-widest text-[#006398] font-bold px-3 py-1 rounded-full bg-[#cce5ff]">
                  LAYANAN KAMI
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#0f2744] font-extrabold">
                  Layanan Lengkap untuk Toko Online Anda
                </h2>
              </div>
              <p className="text-sm text-[#45464d] max-w-md">
                Ekosistem fulfillment terpadu yang dirancang praktis, hemat, dan fleksibel untuk toko
                rumahan skala mikro, kecil, hingga menengah.
              </p>
            </div>

            {/* 6 Modular Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service 1 */}
              <div className="group bg-white rounded-3xl p-7 shadow-sm border border-[#e2eaf5] hover:border-[#5bb8fe] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] flex items-center justify-center text-[#0f2744] group-hover:bg-[#006398] group-hover:text-white transition-colors">
                      <Warehouse className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-[#76777d] font-mono font-semibold">
                      01 / STORAGE
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0f2744]">
                    Pergudangan Fleksibel
                  </h3>
                  <p className="text-sm text-[#45464d] leading-relaxed">
                    Simpan stok mulai dari 1 rak atau box kecil tanpa perlu menyewa ruko mahal. Area
                    gudang bersih, aman dengan CCTV 24 jam, dan opsi ruang ber-AC untuk produk
                    kosmetik.
                  </p>
                </div>
                <div className="pt-6 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#004b73] text-xs font-semibold">
                    Tanpa Minimal Sewa
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#004b73] text-xs font-semibold">
                    Ruang Ber-AC
                  </span>
                </div>
              </div>

              {/* Service 2 */}
              <div className="group bg-white rounded-3xl p-7 shadow-sm border border-[#e2eaf5] hover:border-[#5bb8fe] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] flex items-center justify-center text-[#0f2744] group-hover:bg-[#006398] group-hover:text-white transition-colors">
                      <Boxes className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-[#76777d] font-mono font-semibold">
                      02 / PACKING
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0f2744]">
                    Packing Standar & Kustom
                  </h3>
                  <p className="text-sm text-[#45464d] leading-relaxed">
                    Standarisasi packing rapi dengan bubble wrap tebal, polymailer tahan air, kardus
                    kokoh, stiker fragile, serta penyisipan thank you card atau free gift tokomu.
                  </p>
                </div>
                <div className="pt-6 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#004b73] text-xs font-semibold">
                    Custom Branding
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#004b73] text-xs font-semibold">
                    Bubble Wrap Gratis
                  </span>
                </div>
              </div>

              {/* Service 3 */}
              <div className="group bg-white rounded-3xl p-7 shadow-sm border border-[#e2eaf5] hover:border-[#5bb8fe] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] flex items-center justify-center text-[#0f2744] group-hover:bg-[#006398] group-hover:text-white transition-colors">
                      <RefreshCw className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-[#76777d] font-mono font-semibold">
                      03 / OMS SYSTEM
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0f2744]">
                    Manajemen Pesanan Terpadu
                  </h3>
                  <p className="text-sm text-[#45464d] leading-relaxed">
                    Sinkronisasi otomatis dan real-time dengan Shopee, TikTok Shop, Tokopedia, dan Toko
                    Online pribadi agar tidak terjadi overselling atau selisih stok.
                  </p>
                </div>
                <div className="pt-6 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#004b73] text-xs font-semibold">
                    Multi-Channel Sync
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#004b73] text-xs font-semibold">
                    Otomatis Cetak Resi
                  </span>
                </div>
              </div>

              {/* Service 4 */}
              <div className="group bg-white rounded-3xl p-7 shadow-sm border border-[#e2eaf5] hover:border-[#5bb8fe] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] flex items-center justify-center text-[#0f2744] group-hover:bg-[#006398] group-hover:text-white transition-colors">
                      <Banknote className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-[#76777d] font-mono font-semibold">
                      04 / COD & RETURN
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0f2744]">
                    Layanan COD & Retur Cepat
                  </h3>
                  <p className="text-sm text-[#45464d] leading-relaxed">
                    Solusi penanganan COD se-Indonesia dengan pencairan transparan. Verifikasi retur
                    kilat dalam 24 jam disertai dokumentasi foto kondisi barang sebelum dire-stock.
                  </p>
                </div>
                <div className="pt-6 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#004b73] text-xs font-semibold">
                    COD Aman H+1
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#004b73] text-xs font-semibold">
                    QC Retur 24 Jam
                  </span>
                </div>
              </div>

              {/* Service 5 */}
              <div className="group bg-white rounded-3xl p-7 shadow-sm border border-[#e2eaf5] hover:border-[#5bb8fe] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] flex items-center justify-center text-[#0f2744] group-hover:bg-[#006398] group-hover:text-white transition-colors">
                      <Truck className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-[#76777d] font-mono font-semibold">
                      05 / LOGISTICS
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0f2744]">
                    Ekspedisi Multi-Kurir Terintegrasi
                  </h3>
                  <p className="text-sm text-[#45464d] leading-relaxed">
                    Bebas pilih kurir termurah dan tercepat sesuai rute tujuan. Nikmati potongan diskon
                    ongkir eksklusif hingga 35% tanpa harus capai target ribuan paket.
                  </p>
                </div>
                <div className="pt-6 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#004b73] text-xs font-semibold">
                    Diskon s.d. 35%
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#004b73] text-xs font-semibold">
                    Pick Up Gratis
                  </span>
                </div>
              </div>

              {/* Service 6 */}
              <div className="group bg-white rounded-3xl p-7 shadow-sm border border-[#e2eaf5] hover:border-[#5bb8fe] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] flex items-center justify-center text-[#0f2744] group-hover:bg-[#006398] group-hover:text-white transition-colors">
                      <Camera className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-[#76777d] font-mono font-semibold">
                      06 / QC & AUDIT
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0f2744]">
                    Integrasi Foto & Quality Control
                  </h3>
                  <p className="text-sm text-[#45464d] leading-relaxed">
                    Pengecekan kualitas menyeluruh saat barang inbound masuk gudang. Dokumentasi foto
                    fisik produk terunggah otomatis sebelum paket dikirim ke pembeli.
                  </p>
                </div>
                <div className="pt-6 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#004b73] text-xs font-semibold">
                    Foto Bukti Inbound
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#004b73] text-xs font-semibold">
                    Cek Cacat Produk
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SHIPPING & PAYMENT SECTION (#shipping-payment)
            ========================================================================= */}
        <section id="shipping-payment" className="w-full py-20 lg:py-28 bg-[#f0f4fc]">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-12">
            {/* Header */}
            <div className="flex flex-col items-start gap-2 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#006398] font-bold px-3 py-1 rounded-full bg-[#cce5ff]">
                EKSPEDISI & PEMBAYARAN
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#0f2744] font-extrabold">
                Partner Ekspedisi & Pembayaran Digital Lengkap
              </h2>
              <p className="text-base text-[#45464d]">
                Didukung jaringan armada kurir terluas di Indonesia dan metode transaksi yang
                disukai pelanggan online.
              </p>
            </div>

            {/* Courier Pickup Banner */}
            <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-[#dce9ff] bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 h-72 sm:h-96 w-full relative overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5uMi7C5XYslzq5MAr_L-Pq1pnSKIjNgdeJFyai-rrqPe0hiDlINSRP7pXi5e8HPWjV4wO77FVGdhwANZ2Iil-kzOF68NxyjnzBsK46oFf2TE-74H8_AgT40ea-kk8zne4dI5sKNrzGbS0ccgFtYAU5XiX_feKYv3DJcWsfwTJ_E4UOrVqJ82eea8KQrLKaPMRi5VhbCT0_N9-27HdbFkQWCgndzCK7duWFfEOajJyZT8nij8KrA"
                    alt="Kurir ekspedisi ramah menjemput paket pesanan online seller"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col gap-4 bg-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] text-[#006398] text-xs font-bold w-fit">
                    <Bike className="w-4 h-4 text-[#006398]" />
                    Pick Up Gratis di Depan Pintu Setiap Hari
                  </div>
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-[#0f2744]">
                    Kurir Jemput Paket Tepat Waktu, Resi Otomatis Terbit
                  </h3>
                  <p className="text-sm text-[#45464d] leading-relaxed">
                    Anda tidak perlu repot kepanasan mengantar karung paket ke agen ekspedisi. Tim
                    kurir kami mengambil paket terjadwal langsung dari hub fulfillment atau depan pintu
                    rumah Anda.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold text-[#009668] bg-[#e6f7f0] px-3.5 py-1.5 rounded-lg flex items-center gap-1.5">
                      <BadgeCheck className="w-4 h-4 text-[#009668]" />
                      Diskon Ongkir s.d. 35%
                    </span>
                    <span className="text-xs font-bold text-[#006398] bg-[#eff4ff] px-3.5 py-1.5 rounded-lg flex items-center gap-1.5">
                      <Banknote className="w-4 h-4 text-[#006398]" />
                      Layanan COD Nasional
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Courier Grid */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-heading text-lg font-bold text-[#0f2744]">
                  Pilihan Ekspedisi Terintegrasi:
                </h3>
                <span className="text-xs text-[#76777d] font-medium">
                  Bebas pilih atau aktifkan opsi kurir termurah otomatis
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                <div className="bg-white rounded-2xl p-3.5 flex flex-col items-center justify-center text-center shadow-xs border border-[#e2eaf5] hover:border-[#006398] hover:shadow-md transition-all">
                  <span className="font-heading text-sm font-extrabold text-[#e21b23]">
                    J&T Express
                  </span>
                  <span className="text-[10px] text-[#76777d] font-medium mt-1">COD & Drop Point</span>
                </div>
                <div className="bg-white rounded-2xl p-3.5 flex flex-col items-center justify-center text-center shadow-xs border border-[#e2eaf5] hover:border-[#006398] hover:shadow-md transition-all">
                  <span className="font-heading text-sm font-extrabold text-[#ee2e24]">
                    SiCepat
                  </span>
                  <span className="text-[10px] text-[#76777d] font-medium mt-1">Kilat & Cargo</span>
                </div>
                <div className="bg-white rounded-2xl p-3.5 flex flex-col items-center justify-center text-center shadow-xs border border-[#e2eaf5] hover:border-[#006398] hover:shadow-md transition-all">
                  <span className="font-heading text-sm font-extrabold text-[#002f6c]">
                    JNE Express
                  </span>
                  <span className="text-[10px] text-[#76777d] font-medium mt-1">Reguler & YES</span>
                </div>
                <div className="bg-white rounded-2xl p-3.5 flex flex-col items-center justify-center text-center shadow-xs border border-[#e2eaf5] hover:border-[#006398] hover:shadow-md transition-all">
                  <span className="font-heading text-sm font-extrabold text-[#ee4d2d]">
                    Shopee Xpress
                  </span>
                  <span className="text-[10px] text-[#76777d] font-medium mt-1">Standard / Hemat</span>
                </div>
                <div className="bg-white rounded-2xl p-3.5 flex flex-col items-center justify-center text-center shadow-xs border border-[#e2eaf5] hover:border-[#006398] hover:shadow-md transition-all">
                  <span className="font-heading text-sm font-extrabold text-[#cc0000]">
                    Ninja Xpress
                  </span>
                  <span className="text-[10px] text-[#76777d] font-medium mt-1">COD Handal</span>
                </div>
                <div className="bg-white rounded-2xl p-3.5 flex flex-col items-center justify-center text-center shadow-xs border border-[#e2eaf5] hover:border-[#006398] hover:shadow-md transition-all">
                  <span className="font-heading text-sm font-extrabold text-[#00897b]">
                    Anteraja
                  </span>
                  <span className="text-[10px] text-[#76777d] font-medium mt-1">Same-Day / Next</span>
                </div>
                <div className="bg-white rounded-2xl p-3.5 flex flex-col items-center justify-center text-center shadow-xs border border-[#e2eaf5] hover:border-[#006398] hover:shadow-md transition-all">
                  <span className="font-heading text-sm font-extrabold text-[#00aa13]">
                    GoSend
                  </span>
                  <span className="text-[10px] text-[#76777d] font-medium mt-1">Instant Kurir</span>
                </div>
                <div className="bg-white rounded-2xl p-3.5 flex flex-col items-center justify-center text-center shadow-xs border border-[#e2eaf5] hover:border-[#006398] hover:shadow-md transition-all">
                  <span className="font-heading text-sm font-extrabold text-[#00b14f]">
                    GrabExpress
                  </span>
                  <span className="text-[10px] text-[#76777d] font-medium mt-1">Instant Sameday</span>
                </div>
              </div>
            </div>

            {/* Payment Methods Supported */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#e2eaf5] flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e2eaf5] pb-4">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0f2744]">
                    Metode Pembayaran Digital & Kas Lengkap
                  </h3>
                  <p className="text-xs text-[#76777d]">
                    Memudahkan pelanggan Anda berbelanja dengan berbagai opsi pembayaran favorit
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[#006398] text-xs font-semibold">
                  <Lock className="w-4 h-4 text-[#006398]" />
                  Aman Berlisensi Bank Indonesia
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Opsi Populer */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-[#76777d] uppercase font-bold tracking-wider">
                    Opsi Paling Populer
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-3 py-1.5 rounded-xl bg-[#eff4ff] text-xs font-bold text-[#0f2744] flex items-center gap-1.5">
                      <QrCode className="w-4 h-4 text-[#006398]" />
                      QRIS Nasional
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-[#eff4ff] text-xs font-bold text-[#0f2744] flex items-center gap-1.5">
                      <Banknote className="w-4 h-4 text-[#009668]" />
                      COD (Bayar di Tempat)
                    </span>
                  </div>
                </div>

                {/* Transfer Bank */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-[#76777d] uppercase font-bold tracking-wider">
                    Transfer Bank (Virtual Account)
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-3 py-1 rounded-lg bg-[#eff4ff] text-xs font-bold text-[#0f2744]">
                      BCA
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#eff4ff] text-xs font-bold text-[#0f2744]">
                      Mandiri
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#eff4ff] text-xs font-bold text-[#0f2744]">
                      BRI
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#eff4ff] text-xs font-bold text-[#0f2744]">
                      BNI
                    </span>
                  </div>
                </div>

                {/* E-Wallets */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-[#76777d] uppercase font-bold tracking-wider">
                    E-Wallet Instant
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-3 py-1 rounded-lg bg-[#eff4ff] text-xs font-bold text-[#0f2744]">
                      GoPay
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#eff4ff] text-xs font-bold text-[#0f2744]">
                      OVO
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#eff4ff] text-xs font-bold text-[#0f2744]">
                      DANA
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#eff4ff] text-xs font-bold text-[#0f2744]">
                      ShopeePay
                    </span>
                  </div>
                </div>

                {/* Settlement */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-[#76777d] uppercase font-bold tracking-wider">
                    Pencairan Dana (Settlement)
                  </span>
                  <div className="flex items-center gap-2 pt-1 text-[#0f2744] text-xs font-semibold">
                    <Wallet className="w-5 h-5 text-[#006398]" />
                    <span>Settlement H+1 Langsung ke Rekening Seller</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            INTERACTIVE RATE ESTIMATOR & CONTACT SECTION (#contact)
            ========================================================================= */}
        <section id="contact" className="w-full py-20 lg:py-28 bg-[#f8faff]">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Contact Channels & Hubs */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#006398] font-bold px-3 py-1 rounded-full bg-[#cce5ff] w-fit">
                    HUBUNGI KAMI
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#0f2744] font-extrabold">
                    Mulai Konsultasi & Scale Up Bisnis Anda
                  </h2>
                  <p className="text-base text-[#45464d] leading-relaxed">
                    Tim konsultan logistik kami siap membantu menghitung simulasi efisiensi pengemasan
                    dan biaya fulfillment toko Anda.
                  </p>
                </div>

                {/* Contact Channels */}
                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/6282124886861"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-[#e2eaf5] hover:border-[#25d366] transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[#25d366]/15 flex items-center justify-center text-[#25d366] shrink-0 group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-6 h-6 text-[#25d366]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase text-[#76777d] font-bold">
                        WhatsApp Business Support
                      </span>
                      <span className="text-base font-extrabold text-[#0f2744]">
                        +62 82124886861
                      </span>
                      <span className="text-xs text-[#76777d] mt-0.5">
                        Respon kilat setiap hari (08.00 - 22.00 WIB)
                      </span>
                    </div>
                  </a>

                  <a
                    href="mailto:wildan.arta05@gmail.com"
                    className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-[#e2eaf5] hover:border-[#006398] transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[#eff4ff] flex items-center justify-center text-[#006398] shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-6 h-6 text-[#006398]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase text-[#76777d] font-bold">
                        Email Resmi Onboarding
                      </span>
                      <span className="text-base font-extrabold text-[#0f2744] group-hover:text-[#006398] transition-colors">
                        wildan.arta05@gmail.com
                      </span>
                      <span className="text-xs text-[#76777d] mt-0.5">
                        Kirim daftar katalog & proposal kerjasama
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-[#e2eaf5]">
                    <div className="w-11 h-11 rounded-2xl bg-[#eff4ff] flex items-center justify-center text-[#006398] shrink-0">
                      <Network className="w-6 h-6 text-[#006398]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase text-[#76777d] font-bold">
                        Hub Operasional Utama
                      </span>
                      <span className="text-sm font-bold text-[#0f2744]">
                        Depok, Jawa Barat
                      </span>
                      <span className="text-xs text-[#76777d] mt-0.5">
                        Tersedia drop point seller & gudang penampungan lokal
                      </span>
                    </div>
                  </div>
                </div>

                {/* Free Trial Banner */}
                <div className="p-5 rounded-2xl bg-[#eff4ff] border border-[#dce9ff] flex items-center gap-4">
                  <Handshake className="w-7 h-7 text-[#006398] shrink-0" />
                  <p className="text-xs text-[#0f2744] leading-relaxed">
                    <strong className="font-bold text-[#006398]">Gratis Trial 14 Hari:</strong> Coba
                    sistem manajemen pesanan dan penyimpanan hingga 100 paket pertama tanpa kontrak
                    mengikat.
                  </p>
                </div>
              </div>

              {/* Right Column: Rate Calculator & Lead Capture Form */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-[#e2eaf5]">
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1 border-b border-[#e2eaf5] pb-4">
                    <h3 className="font-heading text-xl font-extrabold text-[#0f2744]">
                      Hitung Estimasi Biaya Fulfillment Toko Anda
                    </h3>
                    <p className="text-xs sm:text-sm text-[#45464d]">
                      Geser perkiraan volume paket tokomu untuk melihat estimasi biaya hemat mulai Rp
                      2.500/paket.
                    </p>
                  </div>

                  {/* Volume Slider */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor={volumeSliderId}
                        className="text-sm font-bold text-[#0f2744]"
                      >
                        Estimasi Pesanan per Bulan
                      </label>
                      <div className="flex items-baseline gap-1">
                        <span className="font-heading text-2xl font-extrabold text-[#006398]">
                          {volume.toLocaleString("id-ID")}
                        </span>
                        <span className="text-xs text-[#76777d] font-semibold">paket/bln</span>
                      </div>
                    </div>
                    <input
                      id={volumeSliderId}
                      type="range"
                      min={10}
                      max={2000}
                      step={10}
                      value={volume}
                      onChange={(e) => setVolume(parseInt(e.target.value, 10))}
                      className="w-full h-2.5 bg-[#e5eeff] rounded-lg appearance-none cursor-pointer accent-[#006398]"
                    />
                    <div className="flex justify-between text-xs text-[#76777d]">
                      <span>10 paket (Seller Pemula)</span>
                      <span>1.000 paket</span>
                      <span>2.000+ paket (Scale-Up)</span>
                    </div>
                  </div>

                  {/* Product Category Selector */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0f2744]">
                      Kategori Produk Toko Anda
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {CATEGORIES.map((cat) => {
                        const isSelected = category === cat.id;
                        const CategoryIcon = cat.icon;
                        return (
                          <button
                            type="button"
                            key={cat.id}
                            onClick={() => setCategory(cat.id)}
                            className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all text-center ${isSelected
                              ? "border-[#006398] bg-[#eff4ff] shadow-sm text-[#006398]"
                              : "border-[#e2eaf5] bg-white text-[#45464d] hover:border-[#006398]"
                              }`}
                          >
                            <CategoryIcon
                              className={`w-6 h-6 ${isSelected ? "text-[#006398]" : "text-[#76777d]"
                                }`}
                            />
                            <span className="text-xs font-bold mt-1.5 leading-tight">
                              {cat.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dynamic Rate Calculation Result Box */}
                  <div className="bg-[#eff4ff] p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-[#dce9ff]">
                    <div className="flex flex-col">
                      <span className="text-xs text-[#76777d] uppercase font-bold">
                        Estimasi Biaya Mulai
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0f2744]">
                          Rp {currentRate.toLocaleString("id-ID")}
                        </span>
                        <span className="text-xs text-[#45464d] font-semibold">
                          / paket selesai kirim
                        </span>
                      </div>
                      <span className="text-[11px] text-[#76777d] mt-1">
                        Sudah termasuk bubble wrap + barcode scan + serah terima kurir
                      </span>
                    </div>

                    <div className="bg-white px-4 py-2.5 rounded-xl shadow-xs border border-[#dce9ff] text-left sm:text-right shrink-0">
                      <span className="text-[11px] text-[#76777d] uppercase font-bold block">
                        Hemat Biaya Operasional
                      </span>
                      <span className="font-heading text-lg font-extrabold text-[#009668]">
                        Hingga {currentSavings}
                      </span>
                    </div>
                  </div>

                  {/* Seller Intake Form Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor={storeNameId} className="text-xs font-bold text-[#0f2744]">
                        Nama Toko / Brand
                      </label>
                      <input
                        id={storeNameId}
                        type="text"
                        required
                        value={formData.storeName}
                        onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                        placeholder="Contoh: Hijab Cantik Official"
                        className="h-11 px-3.5 bg-white text-[#0f2744] text-sm rounded-xl border border-[#c6c6cd] focus:outline-none focus:ring-2 focus:ring-[#006398] focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor={phoneId} className="text-xs font-bold text-[#0f2744]">
                        No. WhatsApp / HP Aktif
                      </label>
                      <input
                        id={phoneId}
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0812-xxxx-xxxx"
                        className="h-11 px-3.5 bg-white text-[#0f2744] text-sm rounded-xl border border-[#c6c6cd] focus:outline-none focus:ring-2 focus:ring-[#006398] focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor={emailId} className="text-xs font-bold text-[#0f2744]">
                        Email Toko
                      </label>
                      <input
                        id={emailId}
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="wildan.arta05@gmail.com"
                        className="h-11 px-3.5 bg-white text-[#0f2744] text-sm rounded-xl border border-[#c6c6cd] focus:outline-none focus:ring-2 focus:ring-[#006398] focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor={platformId} className="text-xs font-bold text-[#0f2744]">
                        Platform Jualan Utama
                      </label>
                      <select
                        id={platformId}
                        value={formData.platform}
                        onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                        className="h-11 px-3.5 bg-white text-[#0f2744] text-sm rounded-xl border border-[#c6c6cd] focus:outline-none focus:ring-2 focus:ring-[#006398] focus:border-transparent transition-all"
                      >
                        <option value="shopee">Shopee</option>
                        <option value="tiktok">TikTok Shop</option>
                        <option value="tokopedia">Tokopedia</option>
                        <option value="whatsapp">WhatsApp Order / Reseller</option>
                        <option value="multi">Omnichannel (Semua Marketplace)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Action */}
                  <button
                    type="submit"
                    className={`w-full h-12 rounded-xl font-heading text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 ${formSubmitted
                      ? "bg-[#009668] text-white"
                      : "bg-[#0f2744] hover:bg-[#006398] text-white"
                      }`}
                  >
                    {formSubmitted ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    <span>
                      {formSubmitted
                        ? "Permintaan Terkirim! Mengalihkan ke WhatsApp..."
                        : "Dapatkan Simulasi Biaya & Konsultasi Gratis"}
                    </span>
                  </button>

                  <p className="text-xs text-center text-[#76777d]">
                    Data Anda 100% aman. Tim konsultan Agros Group akan menghubungi Anda via
                    WhatsApp dalam 15 menit.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <footer className="w-full bg-[#f0f4fc] border-t border-[#e2eaf5]">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand & Tagline */}
            <div className="flex flex-col gap-4 md:col-span-1">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0f2744] flex items-center justify-center text-white shadow-xs">
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5zm-8 7.36v7.28L11 21v-7.27L4 9.36zm16 0L13 13.73V21l7-4.36V9.36z"
                      opacity="0.95"
                    />
                  </svg>
                </div>
                <span className="font-heading text-lg text-[#0f2744] font-extrabold tracking-tight">
                  Agros Group
                </span>
              </div>
              <p className="text-xs text-[#45464d] leading-relaxed">
                Mitra Fulfillment & Logistik Terpercaya untuk Seller & Toko Online Indonesia. Membantu
                seller online mengurus gudang, packing rapi, dan pengiriman multi-ekspedisi dengan
                hemat dan transparan.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase font-bold text-[#0f2744] tracking-wider">
                Navigasi Halaman
              </span>
              <div className="flex flex-col gap-2 text-xs text-[#45464d]">
                <a href="#home" className="hover:text-[#006398] transition-colors">
                  Home Utama
                </a>
                <a href="#about" className="hover:text-[#006398] transition-colors">
                  Tentang Kami
                </a>
                <a href="#services" className="hover:text-[#006398] transition-colors">
                  Layanan Fulfillment
                </a>
                <a href="#shipping-payment" className="hover:text-[#006398] transition-colors">
                  Ekspedisi & Pembayaran
                </a>
                <a href="#contact" className="hover:text-[#006398] transition-colors">
                  Hitung Biaya & Kontak
                </a>
              </div>
            </div>

            {/* Operational Hubs */}
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase font-bold text-[#0f2744] tracking-wider">
                Hub Operasional
              </span>
              <div className="flex flex-col gap-2 text-xs text-[#45464d]">
                <span className="font-semibold text-[#006398]">
                  • Hub Utama Depok (Jawa Barat)
                </span>
                <span>• Drop Point & Layanan Pick Up Seller</span>
                <span>• Jangkauan Pengiriman Seluruh Indonesia</span>
              </div>
            </div>

            {/* Seller Support CTA */}
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase font-bold text-[#0f2744] tracking-wider">
                Konsultasi Cepat
              </span>
              <p className="text-xs text-[#45464d] leading-relaxed">
                Daftarkan tokomu sekarang dan nikmati gratis konsultasi optimasi sistem pengiriman.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-10 px-4 bg-[#006398] hover:bg-[#004b73] text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
              >
                <Headphones className="w-4 h-4" />
                <span>Hubungi Tim Agros</span>
              </a>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 pt-6 border-t border-[#e2eaf5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#76777d]">
            <p>© 2025 Agros Group Indonesia. Seluruh hak cipta dilindungi.</p>
            <div className="flex gap-4">
              <a href="#home" className="hover:text-[#0f2744] transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#home" className="hover:text-[#0f2744] transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#home" className="hover:text-[#0f2744] transition-colors">
                Panduan Seller
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/6282124886861?text=Halo%20Agros%20Group,%20saya%20tertarik%20tanya%20fulfillment"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25d366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-transform hover:scale-105"
        title="Chat WhatsApp Sekarang"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.41a8.17 8.17 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.02.79.81-2.95-.19-.3a8.15 8.15 0 0 1-1.25-4.34c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.49-1.4-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32z" />
        </svg>
        <span className="hidden sm:inline font-bold text-xs pr-1">Tanya CS</span>
      </a>
    </div>
  );
}
