'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';
import Image from 'next/image';

// Curated Jeddah / Saudi Arabia Unsplash images
const images = [
  { src: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=500&q=75', label: { ar: 'كورنيش جدة', en: 'Jeddah Corniche' } },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=75', label: { ar: 'مأكولات جدة', en: 'Jeddah Food' } },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=75', label: { ar: 'مطاعم فاخرة', en: 'Fine Dining' } },
  { src: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=500&q=75', label: { ar: 'توصيل سريع', en: 'Fast Delivery' } },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=75', label: { ar: 'أشهى الأطباق', en: 'Delicious Dishes' } },
];

export default function JeddahStrip() {
  const { lang } = useLang();

  return (
    <section className="py-16 bg-[#1A2A3A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 text-sm font-semibold uppercase tracking-widest"
        >
          {lang === 'ar' ? 'نخدم جدة من الشمال إلى الجنوب' : 'Serving Jeddah from North to South'}
        </motion.p>
      </div>

      {/* Scrolling image strip */}
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 scrollbar-hide snap-x snap-mandatory">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative flex-shrink-0 w-64 h-44 rounded-2xl overflow-hidden snap-start group"
          >
            <Image
              src={img.src}
              alt={img.label[lang]}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-3 start-3 text-white text-sm font-bold">{img.label[lang]}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
