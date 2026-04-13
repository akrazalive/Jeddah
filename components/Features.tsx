'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';

const features = [
  { icon: '⚡', titleKey: 'feat1_title' as const, descKey: 'feat1_desc' as const, color: 'from-orange-50 to-amber-50', border: 'border-orange-100' },
  { icon: '🍔', titleKey: 'feat2_title' as const, descKey: 'feat2_desc' as const, color: 'from-red-50 to-orange-50', border: 'border-red-100' },
  { icon: '📍', titleKey: 'feat3_title' as const, descKey: 'feat3_desc' as const, color: 'from-blue-50 to-cyan-50', border: 'border-blue-100' },
  { icon: '💳', titleKey: 'feat4_title' as const, descKey: 'feat4_desc' as const, color: 'from-green-50 to-teal-50', border: 'border-green-100' },
  { icon: '🎁', titleKey: 'feat5_title' as const, descKey: 'feat5_desc' as const, color: 'from-purple-50 to-pink-50', border: 'border-purple-100' },
  { icon: '🌙', titleKey: 'feat6_title' as const, descKey: 'feat6_desc' as const, color: 'from-indigo-50 to-blue-50', border: 'border-indigo-100' },
];

export default function Features() {
  const { t } = useLang();

  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1A2A3A] mb-4">{t('features_title')}</h2>
          <p className="text-xl text-gray-500">{t('features_sub')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`bg-gradient-to-br ${f.color} border ${f.border} rounded-2xl p-7 cursor-default`}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-black text-[#1A2A3A] mb-3">{t(f.titleKey)}</h3>
              <p className="text-gray-600 leading-relaxed">{t(f.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
