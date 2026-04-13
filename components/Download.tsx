'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';
import Image from 'next/image';

// Jeddah corniche at night — iconic Saudi landmark
const JEDDAH_CORNICHE = 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=700&q=80';

export default function Download() {
  const { t } = useLang();

  return (
    <section className="py-24 bg-gradient-to-br from-[#FF5A00] to-[#FF8C42] relative overflow-hidden" id="download">
      {/* Decorative circles */}
      <div className="absolute top-0 end-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 start-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              {t('download_title')}
            </h2>
            <p className="text-xl text-white/85 mb-10 leading-relaxed">{t('download_sub')}</p>

            {/* Two app download buttons */}
            <div className="space-y-4">
              {/* Client App */}
              <a
                href="https://play.google.com/store/apps/details?id=com.jeetk.client"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/15 hover:bg-white/25 border border-white/30 rounded-2xl px-5 py-4 transition-all hover:-translate-y-0.5 hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📱</div>
                <div className="flex-1">
                  <p className="text-white/70 text-xs font-medium">{t('customers_tag')}</p>
                  <p className="text-white font-black text-base">Order Up – {t('customers_tag')}</p>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Play" className="w-8 h-8 invert opacity-80 group-hover:opacity-100" />
              </a>

              {/* Driver App */}
              <a
                href="https://play.google.com/store/apps/details?id=com.jeetk.driver"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/15 hover:bg-white/25 border border-white/30 rounded-2xl px-5 py-4 transition-all hover:-translate-y-0.5 hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🛵</div>
                <div className="flex-1">
                  <p className="text-white/70 text-xs font-medium">{t('drivers_tag')}</p>
                  <p className="text-white font-black text-base">Order Up – {t('drivers_tag')}</p>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Play" className="w-8 h-8 invert opacity-80 group-hover:opacity-100" />
              </a>
            </div>
          </motion.div>

          {/* Jeddah corniche image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border-4 border-white/20">
              <Image
                src={JEDDAH_CORNICHE}
                alt="Jeddah Corniche"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-5 start-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                <p className="text-xs text-gray-500">📍 جدة، المملكة العربية السعودية</p>
                <p className="text-sm font-black text-[#1A2A3A]">Jeddah, Saudi Arabia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
