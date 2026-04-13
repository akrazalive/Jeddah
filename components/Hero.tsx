'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import Image from 'next/image';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Jeddah corniche / Saudi city skyline at night
const HERO_BG = 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1600&q=80';

export default function Hero() {
  const { t, dir } = useLang();
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1A2A3A] pt-20">
      {/* Jeddah background */}
      <div className="absolute inset-0">
        <Image
          src={HERO_BG}
          alt="Jeddah city"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2A3A]/95 via-[#1A2A3A]/85 to-[#0d1f2d]" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 end-1/4 w-96 h-96 bg-[#FF5A00]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 start-1/4 w-64 h-64 bg-[#00D4AA]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="show"
            className="inline-flex items-center gap-2 bg-[#FF5A00]/20 border border-[#FF5A00]/40 text-[#FF8C42] text-sm font-semibold px-4 py-2 rounded-full mb-6"
          >
            {t('hero_badge')}
          </motion.div>

          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="show"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            {t('hero_title')}
          </motion.h1>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="show"
            className="text-xl text-white/70 mb-10 leading-relaxed"
          >
            {t('hero_sub')}
          </motion.p>

          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="show"
            className="flex flex-wrap gap-3 mb-10"
          >
            <a href="#download" className="flex items-center gap-2 bg-[#FF5A00] hover:bg-[#e04e00] text-white font-bold px-6 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5">
              {t('hero_cta_download')} <Arrow className="w-4 h-4" />
            </a>
            <a href="#drivers" className="flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-6 py-3.5 rounded-full transition-all hover:bg-white/10">
              {t('hero_cta_driver')}
            </a>
            <a href="#restaurants" className="flex items-center gap-2 border-2 border-[#00D4AA]/50 hover:border-[#00D4AA] text-[#00D4AA] font-bold px-6 py-3.5 rounded-full transition-all hover:bg-[#00D4AA]/10">
              {t('hero_cta_partner')}
            </a>
          </motion.div>

          {/* App Store Badges — real links */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show" className="flex gap-4 flex-wrap">
            <a
              href="https://play.google.com/store/apps/details?id=com.jeetk.client"
              target="_blank" rel="noopener noreferrer"
              className="hover:-translate-y-1 transition-transform"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12" />
            </a>
            <a href="#" className="hover:-translate-y-1 transition-transform">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12" />
            </a>
          </motion.div>
        </div>

        {/* Hero Image — Jeddah corniche / delivery visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: dir === 'rtl' ? -40 : 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="hidden lg:block relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
            {/* Jeddah street food / restaurant scene */}
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80"
              alt="Jeddah restaurant"
              width={600}
              height={500}
              className="object-cover w-full h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Floating delivery status card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute bottom-6 start-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-[#FF5A00] rounded-xl flex items-center justify-center text-2xl">🛵</div>
            <div>
              <p className="text-xs text-gray-500 font-medium">التوصيل في طريقه</p>
              <p className="text-sm font-black text-[#1A2A3A]">22 دقيقة</p>
            </div>
          </motion.div>

          {/* Floating rating card */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-6 end-6 bg-white rounded-2xl p-3 shadow-xl flex items-center gap-2"
          >
            <span className="text-xl">⭐</span>
            <div>
              <p className="text-xs font-black text-[#1A2A3A]">4.9 / 5</p>
              <p className="text-xs text-gray-400">+2000 تقييم</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#F8F9FC" />
        </svg>
      </div>
    </section>
  );
}
