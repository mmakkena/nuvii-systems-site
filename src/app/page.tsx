import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhoItsFor from '@/components/WhoItsFor';
import About from '@/components/About';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Integrations from '@/components/Integrations';
import Security from '@/components/Security';
import Architecture from '@/components/Architecture';
import Pricing from '@/components/Pricing';
import WhyNuvii from '@/components/WhyNuvii';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhoItsFor />
      <About />
      <Problem />
      <Features />
      <HowItWorks />
      <Integrations />
      <Security />
      <Architecture />
      <Pricing />
      <WhyNuvii />
      <CTA />
      <Footer />
    </main>
  );
}
