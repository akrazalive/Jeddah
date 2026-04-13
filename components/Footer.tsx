'use client';

import { Zap } from 'lucide-react';
import { useLang } from '@/context/LangContext';

export default function Footer() {
  const { t, lang } = useLang();

  return (
    <footer className="bg-[#1A2A3A] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#FF5A00] rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-black text-white">
                Order <span className="text-[#FF5A00]">Up</span>
              </span>
            </a>
            <p className="text-sm mb-6 leading-relaxed">{t('footer_tagline')}</p>

            {/* App download links */}
            <div className="space-y-2 mb-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.jeetk.client"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white/60 hover:text-[#FF5A00] transition-colors"
              >
                📱 {lang === 'ar' ? 'تطبيق العميل – Google Play' : 'Client App – Google Play'}
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.jeetk.driver"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white/60 hover:text-[#00D4AA] transition-colors"
              >
                🛵 {lang === 'ar' ? 'تطبيق السائق – Google Play' : 'Driver App – Google Play'}
              </a>
            </div>

            <div className="flex gap-4 text-2xl">
              {['📸', '🐦', '👻', '🎵'].map((icon, i) => (
                <a key={i} href="#" className="hover:scale-125 transition-transform">{icon}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">{t('footer_company')}</h4>
            <div className="space-y-3">
              {(['footer_about', 'footer_careers', 'footer_press', 'footer_blog'] as const).map(key => (
                <a key={key} href="#" className="block text-sm hover:text-[#FF5A00] transition-colors">{t(key)}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">{t('footer_services')}</h4>
            <div className="space-y-3">
              <a href="#customers" className="block text-sm hover:text-[#FF5A00] transition-colors">{t('nav_customers')}</a>
              <a href="#restaurants" className="block text-sm hover:text-[#FF5A00] transition-colors">{t('nav_restaurants')}</a>
              <a href="#drivers" className="block text-sm hover:text-[#FF5A00] transition-colors">{t('nav_drivers')}</a>
              <a href="#apps" className="block text-sm hover:text-[#FF5A00] transition-colors">
                {lang === 'ar' ? 'تطبيقاتنا' : 'Our Apps'}
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">{t('footer_legal')}</h4>
            <div className="space-y-3">
              {(['footer_privacy', 'footer_terms'] as const).map(key => (
                <a key={key} href="#" className="block text-sm hover:text-[#FF5A00] transition-colors">{t(key)}</a>
              ))}
            </div>
            {/* Location badge */}
            <div className="mt-8 bg-white/5 rounded-xl p-3 border border-white/10">
              <p className="text-xs text-white/50 mb-1">📍 {lang === 'ar' ? 'مقرنا' : 'Based in'}</p>
              <p className="text-sm font-bold text-white">جدة، المملكة العربية السعودية</p>
              <p className="text-xs text-white/50">Jeddah, Saudi Arabia 🇸🇦</p>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-sm opacity-50">
          {t('footer_copy')}
        </div>
      </div>
    </footer>
  );
}
