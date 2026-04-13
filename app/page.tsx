import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import AppShowcase from '@/components/AppShowcase';
import Segments from '@/components/Segments';
import JeddahStrip from '@/components/JeddahStrip';
import HowItWorks from '@/components/HowItWorks';
import Download from '@/components/Download';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <AppShowcase />
      <Segments />
      <JeddahStrip />
      <HowItWorks />
      <Download />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
