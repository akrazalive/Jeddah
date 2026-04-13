'use client';

import { motion } from 'framer-motion';
import { Smartphone, Star, Download, Users } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import Image from 'next/image';

// Jeddah-relevant imagery
const CLIENT_IMG = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80'; // phone in hand
const DRIVER_IMG  = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80';  // delivery rider

const apps = [
  {
    type: 'client' as const,
    emoji: '📱',
    accentColor: '#FF5A00',
    bgGradient: 'from-orange-50 to-amber-50',
    borderColor: 'border-orange-200',
    badgeBg: 'bg-orange-100 text-[#FF5A00]',
    playUrl: 'https://play.google.com/store/apps/details?id=com.jeetk.client',
    image: CLIENT_IMG,
    stats: [
      { icon: Star, value: '4.9', label: { ar: 'تقييم', en: 'Rating' } },
      { icon: Download, value: '10K+', label: { ar: 'تحميل', en: 'Downloads' } },
      { icon: Users, value: '5K+', label: { ar: 'مستخدم', en: 'Users' } },
    ],
  },
  {
    type: 'driver' as const,
    emoji: '🛵',
    accentColor: '#00D4AA',
    bgGradient: 'from-teal-50 to-cyan-50',
    borderColor: 'border-teal-200',
    badgeBg: 'bg-teal-100 text-[#00897B]',
    playUrl: 'https://play.google.com/store/apps/details?id=com.jeetk.driver',
    image: DRIVER_IMG,
    stats: [
      { icon: Star, value: '4.8', label: { ar: 'تقييم', en: 'Rating' } },
      { icon: Download, value: '5K+', label: { ar: 'تحميل', en: 'Downloads' } },
      { icon: Users, value: '1K+', label: { ar: 'سائق', en: 'Drivers' } },
    ],
  },
];

const content = {
  ar: {
    section_tag: 'تطبيقاتنا',
    section_title: 'تطبيقان. منصة واحدة.',
    section_sub: 'حمّل التطبيق المناسب لك وابدأ الآن',
    client_tag: 'للعملاء',
    client_title: 'تطبيق Order Up للعملاء',
    client_desc: 'اطلب طعامك المفضل من أفضل مطاعم جدة، تتبع طلبك لحظة بلحظة، وادفع بالطريقة التي تناسبك.',
    client_features: ['مئات المطاعم في جدة', 'تتبع مباشر على الخريطة', 'Apple Pay & STC Pay', 'عروض وكوبونات يومية'],
    client_cta: 'حمّل تطبيق العميل',
    driver_tag: 'للسائقين',
    driver_title: 'تطبيق Order Up للسائقين',
    driver_desc: 'انضم لأسطول سائقي Order Up في جدة. اعمل بساعاتك، اكسب يومياً، وتمتع بدعم مستمر.',
    driver_features: ['قبول الطلبات بضغطة واحدة', 'خريطة ذكية للتوصيل', 'أرباح يومية فورية', 'دعم السائقين 24/7'],
    driver_cta: 'حمّل تطبيق السائق',
    available_on: 'متاح على Google Play',
  },
  en: {
    section_tag: 'Our Apps',
    section_title: 'Two Apps. One Platform.',
    section_sub: 'Download the right app and get started today',
    client_tag: 'For Customers',
    client_title: 'Order Up Customer App',
    client_desc: 'Order from the best restaurants in Jeddah, track your delivery live, and pay your way.',
    client_features: ['Hundreds of Jeddah restaurants', 'Live map tracking', 'Apple Pay & STC Pay', 'Daily deals & coupons'],
    client_cta: 'Download Customer App',
    driver_tag: 'For Drivers',
    driver_title: 'Order Up Driver App',
    driver_desc: 'Join the Order Up driver fleet in Jeddah. Work your hours, earn daily, get full support.',
    driver_features: ['One-tap order acceptance', 'Smart delivery routing', 'Instant daily payouts', '24/7 driver support'],
    driver_cta: 'Download Driver App',
    available_on: 'Available on Google Play',
  },
};

export default function AppShowcase() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <section className="py-24 bg-[#F8F9FC]" id="apps">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#FF5A00]/10 text-[#FF5A00] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <Smartphone className="inline w-4 h-4 me-1.5" />
            {c.section_tag}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A2A3A] mb-4">{c.section_title}</h2>
          <p className="text-xl text-gray-500">{c.section_sub}</p>
        </motion.div>

        {/* App Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {apps.map((app, i) => {
            const isClient = app.type === 'client';
            const title = isClient ? c.client_title : c.driver_title;
            const tag = isClient ? c.client_tag : c.driver_tag;
            const desc = isClient ? c.client_desc : c.driver_desc;
            const features = isClient ? c.client_features : c.driver_features;
            const cta = isClient ? c.client_cta : c.driver_cta;

            return (
              <motion.div
                key={app.type}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`bg-gradient-to-br ${app.bgGradient} border ${app.borderColor} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow`}
              >
                {/* Top image strip */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={app.image}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                  {/* Tag badge */}
                  <div className="absolute top-4 start-4">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${app.badgeBg}`}>
                      {app.emoji} {tag}
                    </span>
                  </div>
                  {/* Stats row */}
                  <div className="absolute bottom-4 start-4 end-4 flex gap-3">
                    {app.stats.map((stat, si) => (
                      <div key={si} className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-1.5 flex-1">
                        <stat.icon className="w-3.5 h-3.5" style={{ color: app.accentColor }} />
                        <span className="text-xs font-black text-[#1A2A3A]">{stat.value}</span>
                        <span className="text-xs text-gray-500">{stat.label[lang]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-2xl font-black text-[#1A2A3A] mb-3">{title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{desc}</p>

                  {/* Feature list */}
                  <ul className="space-y-2.5 mb-8">
                    {features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                          style={{ backgroundColor: app.accentColor }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={app.playUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-black text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ backgroundColor: app.accentColor }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                      alt="Play Store"
                      className="w-6 h-6 invert"
                    />
                    {cta}
                  </a>
                  <p className="text-center text-xs text-gray-400 mt-3">{c.available_on}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
