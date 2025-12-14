import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoForm from '@/components/DemoForm';

export const metadata: Metadata = {
  metadataBase: new URL('https://nuviisystems.com'),
  title: "Request an Enterprise Demo of Nuvii CDI Agent | Nuvii Systems",
  description: "Request an enterprise demo of Nuvii CDI Agent to evaluate deployment, security, and clinical documentation workflows in customer-controlled environments.",
  keywords: "enterprise demo, Nuvii CDI Agent, healthcare AI demo, VPC deployment demo, on-premise healthcare AI, CDI deployment, healthcare AI evaluation, zero PHI egress",
  openGraph: {
    title: "Request an Enterprise Demo of Nuvii CDI Agent | Nuvii Systems",
    description: "Request an enterprise demo of Nuvii CDI Agent to evaluate deployment, security, and clinical documentation workflows in customer-controlled environments.",
    url: "https://nuviisystems.com/demo",
    siteName: "Nuvii Systems",
    type: "website",
    images: [
      {
        url: "/nuvii_logo.png",
        width: 1200,
        height: 630,
        alt: "Nuvii CDI Agent Enterprise Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request an Enterprise Demo of Nuvii CDI Agent | Nuvii Systems",
    description: "Request an enterprise demo of Nuvii CDI Agent to evaluate deployment, security, and clinical documentation workflows in customer-controlled environments.",
    images: ["/nuvii_logo.png"],
  },
};

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-hero-background via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-6">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-nuvii-text mb-4 leading-tight">
            Request an Enterprise Demo of Nuvii CDI Agent
          </h1>
          <p className="text-lg text-foreground-accent mb-4">
            See how Nuvii Systems deploys AI-powered CDI, coding, and revenue intelligence inside your own VPC or on-prem environment — with zero PHI egress.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-nuvii-blue/30 shadow-sm">
            <span className="text-sm font-semibold bg-nuvii-gradient bg-clip-text text-transparent">
              HIPAA-Ready • VPC / On-Prem Deployment • Audit-Friendly AI
            </span>
          </div>
        </div>
      </section>

      {/* What the Demo Covers */}
      <section className="py-6 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-nuvii-text mb-2">
              What the Demo Covers
            </h2>
            <p className="text-base text-foreground-accent mb-4">
              This demo is designed for healthcare organizations evaluating production deployment of Nuvii CDI Agent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-hero-background p-4 rounded-lg border border-gray-200">
              <svg className="w-6 h-6 text-nuvii-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <div className="font-semibold text-nuvii-text">End-to-end CDI & coding workflows</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-hero-background p-4 rounded-lg border border-gray-200">
              <svg className="w-6 h-6 text-nuvii-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <div className="font-semibold text-nuvii-text">HCC and revenue optimization logic</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-hero-background p-4 rounded-lg border border-gray-200">
              <svg className="w-6 h-6 text-nuvii-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <div className="font-semibold text-nuvii-text">Explainable outputs for compliance review</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-hero-background p-4 rounded-lg border border-gray-200">
              <svg className="w-6 h-6 text-nuvii-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <div className="font-semibold text-nuvii-text">Deployment options (VPC, on-prem, air-gapped)</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-hero-background p-4 rounded-lg border border-gray-200">
              <svg className="w-6 h-6 text-nuvii-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <div className="font-semibold text-nuvii-text">Integration with EHRs and CDI workflows</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-6 bg-hero-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-nuvii-text mb-3">
            Who This Is For
          </h2>
          <p className="text-base text-foreground-accent mb-4">
            This demo is ideal for:
          </p>

          <div className="grid md:grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-nuvii-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-nuvii-text">Primary care groups (Medicare-focused)</span>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-nuvii-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-nuvii-text">CDI and coding leadership</span>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-nuvii-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-nuvii-text">Revenue cycle and compliance leaders</span>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-nuvii-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-nuvii-text">Health systems with strict PHI controls</span>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-nuvii-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-nuvii-text">CTO / Security teams evaluating deployment</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-foreground-accent">
              For API evaluation or testing with sample data,{' '}
              <a href="https://nuvii.ai" target="_blank" rel="noopener noreferrer" className="text-nuvii-blue hover:underline font-semibold">
                visit nuvii.ai instead
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-8 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-nuvii-text mb-6 text-center">
            Request Your Demo
          </h2>
          <DemoForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
