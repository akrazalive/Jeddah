'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';
import Image from 'next/image';

const testimonials = [
  {
    textKey: 't1_text' as const,
    nameKey: 't1_name' as const,
    locKey: 't1_loc' as const,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
  },
  {
    textKey: 't2_text' as const,
    nameKey: 't2_name' as const,
    locKey: 't2_loc' as const,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
  },
  {
    textKey: 't3_text' as const,
    nameKey: 't3_name' as const,
    locKey: 't3_loc' as const,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
  },
];

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section className="py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1A2A3A]">{t('testimonials_title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-7 shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 text-base leading-relaxed mb-6 italic">{t(item.textKey)}</p>
              <div className="flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={t(item.nameKey)}
                  width={48}
                  height={48}
                  className="rounded-full object-cover w-12 h-12"
                />
                <div>
                  <p className="font-black text-[#1A2A3A] text-sm">{t(item.nameKey)}</p>
                  <p className="text-xs text-gray-400">{t(item.locKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
