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

      {/* Demo Request Form */}
      <section className="py-8 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          {/* Interactive Evaluation Link */}
          <div className="mb-6 text-center">
            <p className="text-base text-foreground-accent mb-3">
              Want to try the platform before requesting a demo?
            </p>
            <a
              href="https://nuvii.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-nuvii-blue hover:text-nuvii-teal font-semibold transition-colors"
            >
              Try the Interactive Evaluation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-nuvii-text mb-6 text-center">
              Request Your Demo
            </h2>
            <DemoForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
