import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FileText, Shield, HelpCircle, Lock, FileCheck, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nuviisystems.com'),
  title: "Documentation | Nuvii Systems",
  description: "Technical documentation for Nuvii Systems healthcare AI platform, including SMART on FHIR integration, security, support, and compliance information.",
  openGraph: {
    title: "Documentation | Nuvii Systems",
    description: "Technical documentation for Nuvii Systems healthcare AI platform",
    url: "https://nuviisystems.com/docs",
    siteName: "Nuvii Systems",
    type: "website",
  },
};

const docSections = [
  {
    title: "SMART on FHIR Integration",
    description: "Learn about our SMART on FHIR implementation, including launch/redirect flows, required scopes, and available endpoints.",
    href: "/docs/smart-on-fhir",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Security",
    description: "Comprehensive security documentation covering PHI handling, logging practices, encryption standards, and data retention policies.",
    href: "/docs/security",
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Support",
    description: "Access support resources, including contact information, SLA details, and incident response procedures.",
    href: "/docs/support",
    icon: HelpCircle,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Privacy Policy",
    description: "Review our privacy policy and data handling practices to understand how we protect your information.",
    href: "/docs/privacy",
    icon: Lock,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    title: "Terms of Service",
    description: "Read our terms of service to understand the agreement for using Nuvii Systems platform.",
    href: "/docs/terms",
    icon: FileCheck,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-hero-background via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-nuvii-text mb-4">
            Documentation
          </h1>
          <p className="text-xl text-foreground-accent mb-6 max-w-3xl">
            Comprehensive technical documentation for integrating and deploying Nuvii Systems healthcare AI platform.
          </p>

          {/* API Documentation Link */}
          <a
            href="https://nuvii.ai/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-nuvii-blue text-white rounded-lg hover:bg-nuvii-teal transition-colors font-semibold"
          >
            <ExternalLink className="w-5 h-5" />
            View API Documentation
          </a>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {docSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group block p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-nuvii-blue hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${section.bgColor} p-3 rounded-lg`}>
                      <IconComponent className={`w-6 h-6 ${section.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-nuvii-text mb-2 group-hover:text-nuvii-blue transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-foreground-accent">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
