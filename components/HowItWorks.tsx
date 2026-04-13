'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';

const steps = [
  { num: '01', icon: '📱', titleKey: 'step1_title' as const, descKey: 'step1_desc' as const },
  { num: '02', icon: '🍽️', titleKey: 'step2_title' as const, descKey: 'step2_desc' as const },
  { num: '03', icon: '🛵', titleKey: 'step3_title' as const, descKey: 'step3_desc' as const },
];

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1A2A3A] mb-4">{t('how_title')}</h2>
          <p className="text-xl text-gray-500">{t('how_sub')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 start-1/6 end-1/6 h-0.5 bg-gradient-to-r from-[#FF5A00]/30 via-[#FF5A00] to-[#FF5A00]/30" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-white rounded-3xl p-8 text-center shadow-lg border border-orange-50 hover:shadow-xl transition-shadow"
            >
              {/* Step number badge */}
              <div className="absolute -top-4 start-1/2 -translate-x-1/2 w-8 h-8 bg-[#FF5A00] text-white text-xs font-black rounded-full flex items-center justify-center shadow-md">
                {step.num}
              </div>
              <div className="text-5xl mb-5 mt-2">{step.icon}</div>
              <h3 className="text-xl font-black text-[#1A2A3A] mb-3">{t(step.titleKey)}</h3>
              <p className="text-gray-500 leading-relaxed">{t(step.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
