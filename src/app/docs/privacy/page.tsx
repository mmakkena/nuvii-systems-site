import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nuviisystems.com'),
  title: "Privacy Policy | Nuvii Systems",
  description: "Nuvii Systems Privacy Policy - Learn how we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy | Nuvii Systems",
    description: "Privacy policy for Nuvii Systems healthcare AI platform",
    url: "https://nuviisystems.com/docs/privacy",
    siteName: "Nuvii Systems",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-hero-background via-white to-blue-50">
      <Header />

      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Link */}
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-nuvii-blue hover:text-nuvii-teal mb-8 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Documentation
          </Link>

          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-red-50 rounded-lg">
              <Lock className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-nuvii-text">
              Privacy Policy
            </h1>
          </div>
          <p className="text-lg text-foreground-accent mb-2">
            Effective Date: January 11, 2026
          </p>
          <p className="text-lg text-foreground-accent mb-8">
            Last Updated: January 11, 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Introduction */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Introduction</h2>
              <p className="text-foreground-accent mb-4">
                Nuvii Systems, Inc. ("Nuvii Systems," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our healthcare AI platform and services (collectively, the "Services").
              </p>
              <p className="text-foreground-accent">
                This Privacy Policy applies to information collected through our website (nuviisystems.com), our platform, and any related services, sales, marketing, or events.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Information You Provide</h3>
              <p className="text-foreground-accent mb-3">We collect information that you voluntarily provide to us, including:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li><strong>Account Information:</strong> Name, email address, phone number, job title, organization name, and credentials when you create an account or request a demo</li>
                <li><strong>Communication Data:</strong> Information you provide when contacting us for support or inquiries</li>
                <li><strong>Payment Information:</strong> Billing details processed through secure third-party payment processors (we do not store credit card numbers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Protected Health Information (PHI)</h3>
              <p className="text-foreground-accent mb-3">
                When you use our Services to process clinical data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>PHI is processed according to your deployment model (on-premises, VPC, or air-gapped)</li>
                <li>In customer-controlled deployments, all PHI remains within your infrastructure</li>
                <li>We process PHI only as a Business Associate under HIPAA and according to our Business Associate Agreement (BAA)</li>
                <li>We do not use PHI for any purpose other than providing Services to you</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Automatically Collected Information</h3>
              <p className="text-foreground-accent mb-3">When you access our website or Services, we automatically collect:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li><strong>Log Data:</strong> IP address, browser type, operating system, access times, and pages viewed</li>
                <li><strong>Device Information:</strong> Hardware model, unique device identifiers, and mobile network information</li>
                <li><strong>Usage Data:</strong> Features used, actions taken, and performance metrics (aggregated and anonymized)</li>
                <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies as described in our Cookie Policy</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">How We Use Your Information</h2>
              <p className="text-foreground-accent mb-4">We use collected information for:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our Services</li>
                <li><strong>Account Management:</strong> To create and manage your account, authenticate users, and provide customer support</li>
                <li><strong>Communication:</strong> To send administrative information, updates, security alerts, and support messages</li>
                <li><strong>Analytics:</strong> To understand how our Services are used and improve functionality (using aggregated, de-identified data)</li>
                <li><strong>Compliance:</strong> To comply with legal obligations, enforce our terms, and protect rights and safety</li>
                <li><strong>Marketing:</strong> To send promotional communications (with your consent where required; you may opt out at any time)</li>
                <li><strong>Research and Development:</strong> To develop new features and improve our AI models (using only de-identified data)</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">How We Share Your Information</h2>
              <p className="text-foreground-accent mb-4">
                We do not sell your personal information. We may share information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Service Providers</h3>
              <p className="text-foreground-accent mb-4">
                We may share information with third-party vendors who perform services on our behalf, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>Cloud infrastructure providers (for hosted deployments only)</li>
                <li>Payment processors</li>
                <li>Analytics providers</li>
                <li>Customer support tools</li>
              </ul>
              <p className="text-foreground-accent mb-6">
                All service providers are contractually obligated to protect your information and use it only for specified purposes.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Business Transfers</h3>
              <p className="text-foreground-accent mb-6">
                If we are involved in a merger, acquisition, or sale of assets, your information may be transferred. We will provide notice before your information is transferred and becomes subject to a different privacy policy.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Legal Requirements</h3>
              <p className="text-foreground-accent mb-6">
                We may disclose information if required by law, court order, or to protect rights, property, or safety of Nuvii Systems, our customers, or others.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">With Your Consent</h3>
              <p className="text-foreground-accent">
                We may share information with third parties when you have given us explicit consent to do so.
              </p>
            </section>

            {/* PHI Handling */}
            <section className="bg-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Protected Health Information (PHI)</h2>
              <p className="text-foreground-accent mb-4">
                Our handling of PHI is governed by HIPAA and our Business Associate Agreement:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent">
                <li><strong>Zero PHI Egress:</strong> In customer-controlled deployments, PHI never leaves your infrastructure</li>
                <li><strong>Limited Use:</strong> We use PHI only to provide Services and as permitted by our BAA</li>
                <li><strong>No AI Training:</strong> PHI is never used to train AI models or for any purpose outside service delivery</li>
                <li><strong>Security:</strong> PHI is protected with industry-standard encryption and access controls</li>
                <li><strong>Breach Notification:</strong> We will notify you of any breach involving PHI as required by HIPAA</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Data Security</h2>
              <p className="text-foreground-accent mb-4">
                We implement appropriate technical and organizational measures to protect your information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-4">
                <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Employee training on data protection and security</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="text-foreground-accent">
                However, no system is completely secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Data Retention</h2>
              <p className="text-foreground-accent mb-4">
                We retain information for as long as necessary to provide Services and fulfill the purposes described in this Privacy Policy:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent">
                <li><strong>Account Data:</strong> Retained while your account is active and for a reasonable period after termination</li>
                <li><strong>PHI:</strong> Retention is controlled by you and determined by your configured policies</li>
                <li><strong>Logs:</strong> Typically retained for 90 days to 1 year depending on type and purpose</li>
                <li><strong>Legal Holds:</strong> Information subject to legal obligations is retained as required</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Your Rights and Choices</h2>
              <p className="text-foreground-accent mb-4">Depending on your jurisdiction, you may have the following rights:</p>

              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li><strong>Access:</strong> Request access to personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time</li>
                <li><strong>Restrict Processing:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
              </ul>

              <p className="text-foreground-accent mb-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@nuviisystems.com" className="text-nuvii-blue hover:text-nuvii-teal font-semibold">privacy@nuviisystems.com</a>.
              </p>

              <p className="text-foreground-accent">
                <strong>HIPAA Rights:</strong> If you are a patient whose PHI is processed through our Services, your rights regarding that PHI are determined by the covered entity (your healthcare provider). Please contact them directly to exercise your HIPAA rights.
              </p>
            </section>

            {/* International Transfers */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">International Data Transfers</h2>
              <p className="text-foreground-accent mb-4">
                Our Services are provided from the United States. If you are located outside the U.S., your information may be transferred to, stored, and processed in the United States or other countries where we or our service providers operate.
              </p>
              <p className="text-foreground-accent">
                For customer-controlled deployments, data residency is determined by your chosen deployment location. PHI remains within your infrastructure and is not transferred internationally by Nuvii Systems.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Children's Privacy</h2>
              <p className="text-foreground-accent">
                Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us at <a href="mailto:privacy@nuviisystems.com" className="text-nuvii-blue hover:text-nuvii-teal font-semibold">privacy@nuviisystems.com</a>.
              </p>
            </section>

            {/* California Privacy Rights */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">California Privacy Rights</h2>
              <p className="text-foreground-accent mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-4">
                <li>Right to know what personal information we collect, use, and disclose</li>
                <li>Right to request deletion of your personal information</li>
                <li>Right to opt out of "sale" of personal information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="text-foreground-accent">
                To exercise these rights, contact us at <a href="mailto:privacy@nuviisystems.com" className="text-nuvii-blue hover:text-nuvii-teal font-semibold">privacy@nuviisystems.com</a> or call us at the number provided on our website.
              </p>
            </section>

            {/* Updates to Policy */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Changes to This Privacy Policy</h2>
              <p className="text-foreground-accent mb-4">
                We may update this Privacy Policy from time to time. We will notify you of material changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-4">
                <li>Posting the updated policy on our website with a new "Last Updated" date</li>
                <li>Sending an email notification to the address associated with your account</li>
                <li>Providing notice through our Services</li>
              </ul>
              <p className="text-foreground-accent">
                Your continued use of the Services after changes become effective constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Contact Us</h2>
              <p className="text-foreground-accent mb-4">
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="text-foreground-accent space-y-2">
                <p><strong>Nuvii Systems, Inc.</strong></p>
                <p>Email: <a href="mailto:privacy@nuviisystems.com" className="text-nuvii-blue hover:text-nuvii-teal font-semibold">privacy@nuviisystems.com</a></p>
                <p>Support: <a href="mailto:support@nuviisystems.com" className="text-nuvii-blue hover:text-nuvii-teal font-semibold">support@nuviisystems.com</a></p>
                <p className="mt-4">
                  For HIPAA-related inquiries, please contact our Privacy Officer at the email address above.
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
