'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import Image from 'next/image';
import { TranslationKey } from '@/lib/i18n';

// Jeddah & Saudi-specific Unsplash images
// Customers: Saudi/Arab family ordering food, warm restaurant scene
const CUSTOMERS_IMG = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=80';
// Restaurants: Middle Eastern restaurant kitchen / food spread
const RESTAURANTS_IMG = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80';
// Drivers: Delivery rider on city street
const DRIVERS_IMG = 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=700&q=80';

interface SegmentProps {
  tag: TranslationKey;
  title: TranslationKey;
  desc: TranslationKey;
  items: TranslationKey[];
  cta: TranslationKey;
  ctaHref: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  dark?: boolean;
  tagColor?: string;
  ctaBg?: string;
  id: string;
}

function Segment({ tag, title, desc, items, cta, ctaHref, image, imageAlt, reverse, dark, tagColor = 'bg-orange-100 text-[#FF5A00]', ctaBg = 'bg-[#FF5A00] hover:bg-[#e04e00] hover:shadow-orange-200', id }: SegmentProps) {
  const { t } = useLang();

  return (
    <section className={`py-24 ${dark ? 'bg-[#1A2A3A]' : reverse ? 'bg-white' : 'bg-[#F8F9FC]'}`} id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl group"
          >
            <Image
              src={image}
              alt={imageAlt}
              width={600}
              height={450}
              className="object-cover w-full h-[420px] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className={`inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-4 ${tagColor}`}>
              {t(tag)}
            </span>
            <h2 className={`text-3xl md:text-4xl font-black mb-5 leading-tight ${dark ? 'text-white' : 'text-[#1A2A3A]'}`}>
              {t(title)}
            </h2>
            <p className={`text-lg mb-8 leading-relaxed ${dark ? 'text-white/70' : 'text-gray-500'}`}>
              {t(desc)}
            </p>
            <ul className="space-y-3 mb-10">
              {items.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${dark ? 'text-[#00D4AA]' : 'text-[#FF5A00]'}`} />
                  <span className={`font-medium ${dark ? 'text-white/85' : 'text-gray-700'}`}>{t(item)}</span>
                </li>
              ))}
            </ul>
            <a
              href={ctaHref}
              className={`inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full text-white transition-all hover:-translate-y-0.5 hover:shadow-lg ${ctaBg}`}
            >
              {t(cta)}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Segments() {
  return (
    <>
      <Segment
        id="customers"
        tag="customers_tag"
        title="customers_title"
        desc="customers_desc"
        items={['customers_li1', 'customers_li2', 'customers_li3', 'customers_li4']}
        cta="customers_cta"
        ctaHref="https://play.google.com/store/apps/details?id=com.jeetk.client"
        image={CUSTOMERS_IMG}
        imageAlt="Order food in Jeddah"
      />
      <Segment
        id="restaurants"
        tag="restaurants_tag"
        title="restaurants_title"
        desc="restaurants_desc"
        items={['restaurants_li1', 'restaurants_li2', 'restaurants_li3', 'restaurants_li4']}
        cta="restaurants_cta"
        ctaHref="#contact"
        image={RESTAURANTS_IMG}
        imageAlt="Restaurant partner Jeddah"
        reverse
      />
      <Segment
        id="drivers"
        tag="drivers_tag"
        title="drivers_title"
        desc="drivers_desc"
        items={['drivers_li1', 'drivers_li2', 'drivers_li3', 'drivers_li4']}
        cta="drivers_cta"
        ctaHref="https://play.google.com/store/apps/details?id=com.jeetk.driver"
        image={DRIVERS_IMG}
        imageAlt="Delivery driver Jeddah"
        dark
        tagColor="bg-teal-900/50 text-[#00D4AA]"
        ctaBg="bg-[#00D4AA] hover:bg-[#00b894] hover:shadow-teal-500/30"
      />
    </>
  );
}
