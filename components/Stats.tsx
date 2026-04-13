'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';

export default function Stats() {
  const { t } = useLang();

  const stats = [
    { num: '30', unit: t('stat_delivery'), label: t('stat_delivery_label') },
    { num: t('stat_restaurants'), unit: '', label: t('stat_restaurants_label') },
    { num: t('stat_drivers'), unit: '', label: t('stat_drivers_label') },
    { num: t('stat_rating'), unit: '', label: t('stat_rating_label') },
  ];

  return (
    <section className="bg-gradient-to-r from-[#FF5A00] to-[#FF8C42] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-black leading-none mb-1">
                {s.num}<span className="text-2xl">{s.unit}</span>
              </div>
              <div className="text-sm font-medium opacity-85">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
