'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import clsx from 'clsx';

const navLinks = [
  { key: 'nav_apps' as const, href: '#apps' },
  { key: 'nav_customers' as const, href: '#customers' },
  { key: 'nav_restaurants' as const, href: '#restaurants' },
  { key: 'nav_drivers' as const, href: '#drivers' },
  { key: 'nav_contact' as const, href: '#contact' },
];

export default function Navbar() {
  const { t, toggleLang, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-[#FF5A00] rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <span className="text-xl font-black text-[#1A2A3A]">
            Order <span className="text-[#FF5A00]">Up</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-[#FF5A00] transition-colors relative group"
            >
              {t(link.key)}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF5A00] scale-x-0 group-hover:scale-x-100 transition-transform origin-center rounded-full" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="hidden sm:flex items-center gap-1.5 bg-[#1A2A3A] text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-[#FF5A00] transition-colors"
          >
            {t('lang_switch')}
          </button>
          <a
            href="#download"
            className="hidden md:flex bg-[#FF5A00] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#e04e00] transition-all hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-0.5"
          >
            {t('hero_cta_download')}
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-semibold text-gray-700 hover:text-[#FF5A00] py-2 border-b border-gray-50 transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={toggleLang}
                  className="flex-1 bg-[#1A2A3A] text-white font-bold py-2.5 rounded-full text-sm"
                >
                  {t('lang_switch')}
                </button>
                <a
                  href="#download"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 bg-[#FF5A00] text-white font-bold py-2.5 rounded-full text-sm text-center"
                >
                  {t('hero_cta_download')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
