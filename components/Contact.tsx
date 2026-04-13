'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';

export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1A2A3A] mb-4">{t('contact_title')}</h2>
          <p className="text-xl text-gray-500">{t('contact_sub')}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-[#F8F9FC] rounded-3xl p-8 shadow-sm border border-gray-100 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder={t('contact_name')}
              required
              className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#FF5A00] outline-none bg-white text-sm font-medium transition-colors"
            />
            <input
              type="email"
              placeholder={t('contact_email')}
              required
              className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#FF5A00] outline-none bg-white text-sm font-medium transition-colors"
            />
          </div>
          <select
            required
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#FF5A00] outline-none bg-white text-sm font-medium transition-colors text-gray-600"
          >
            <option value="">{t('contact_type')}</option>
            <option value="customer">{t('contact_customer')}</option>
            <option value="restaurant">{t('contact_restaurant')}</option>
            <option value="driver">{t('contact_driver')}</option>
          </select>
          <textarea
            rows={4}
            placeholder={t('contact_msg')}
            required
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#FF5A00] outline-none bg-white text-sm font-medium transition-colors resize-none"
          />
          <button
            type="submit"
            className={`w-full py-4 rounded-xl font-black text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-lg ${
              sent ? 'bg-[#00D4AA] hover:shadow-teal-200' : 'bg-[#FF5A00] hover:bg-[#e04e00] hover:shadow-orange-200'
            }`}
          >
            {sent ? t('contact_sent') : t('contact_send')}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
