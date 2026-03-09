import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PlatformFlow from '@/components/PlatformFlow';
import WhoItsFor from '@/components/WhoItsFor';
import About from '@/components/About';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import ApiPlayground from '@/components/ApiPlayground';

import Integrations from '@/components/Integrations';

import WhyNuvii from '@/components/WhyNuvii';
import PartnersSection from '@/components/PartnersSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PlatformFlow />
      <WhoItsFor />
      <About />
      <Problem />
      <Features />
      <ApiPlayground />

      <Integrations />

      <WhyNuvii />
      <PartnersSection />
      <CTA />
      <Footer />
    </main>
  );
}
