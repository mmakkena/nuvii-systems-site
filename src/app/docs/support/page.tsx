import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, Clock, AlertTriangle, Headphones, FileText } from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nuviisystems.com'),
  title: "Support | Documentation | Nuvii Systems",
  description: "Access Nuvii Systems support resources, including contact information, service level agreements, and incident response procedures.",
  openGraph: {
    title: "Support | Nuvii Systems",
    description: "Support and service level information for Nuvii Systems customers",
    url: "https://nuviisystems.com/docs/support",
    siteName: "Nuvii Systems",
    type: "website",
  },
};

export default function SupportPage() {
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
            <div className="p-3 bg-purple-50 rounded-lg">
              <Headphones className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-nuvii-text">
              Support
            </h1>
          </div>
          <p className="text-xl text-foreground-accent mb-8">
            Get the help you need with comprehensive support services and resources.
          </p>

          <div className="space-y-8">
            {/* Contact Information */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-6">Contact Support</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Support */}
                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-nuvii-blue transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-50 rounded">
                      <Mail className="w-5 h-5 text-nuvii-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-nuvii-text">Email Support</h3>
                  </div>
                  <p className="text-foreground-accent mb-3">
                    For technical support, questions, or assistance:
                  </p>
                  <a
                    href="mailto:support@nuviisystems.com"
                    className="text-nuvii-blue hover:text-nuvii-teal font-semibold"
                  >
                    support@nuviisystems.com
                  </a>
                </div>

                {/* Emergency Support */}
                <div className="border-2 border-red-200 rounded-lg p-6 hover:border-red-400 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-red-50 rounded">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-nuvii-text">Critical Incidents</h3>
                  </div>
                  <p className="text-foreground-accent mb-3">
                    For production-impacting issues requiring immediate attention:
                  </p>
                  <a
                    href="mailto:urgent@nuviisystems.com"
                    className="text-red-600 hover:text-red-700 font-semibold"
                  >
                    urgent@nuviisystems.com
                  </a>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-nuvii-blue p-4 rounded">
                <p className="text-sm text-foreground-accent">
                  <strong>Note:</strong> Enterprise customers with dedicated support contracts should use the contact information provided in their service agreement for priority routing.
                </p>
              </div>
            </section>

            {/* Support Hours */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-nuvii-blue" />
                <h2 className="text-2xl font-bold text-nuvii-text">Support Hours</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-nuvii-text mb-3">Standard Support</h3>
                  <ul className="space-y-2 text-foreground-accent">
                    <li><strong>Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM ET</li>
                    <li><strong>Response Time:</strong> Within 24 business hours</li>
                    <li><strong>Channels:</strong> Email, support portal</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-nuvii-text mb-3">Enterprise Support</h3>
                  <ul className="space-y-2 text-foreground-accent">
                    <li><strong>Hours:</strong> 24/7/365 for critical issues</li>
                    <li><strong>Response Time:</strong> Based on severity level (see SLA)</li>
                    <li><strong>Channels:</strong> Email, phone, dedicated Slack channel</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Service Level Agreement */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-nuvii-blue" />
                <h2 className="text-2xl font-bold text-nuvii-text">Service Level Agreement (SLA)</h2>
              </div>

              <p className="text-foreground-accent mb-6">
                Our SLA defines response times based on issue severity. Times shown are for Enterprise Support customers.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-nuvii-text border-b">Severity</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-nuvii-text border-b">Description</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-nuvii-text border-b">Response Time</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-nuvii-text border-b">Update Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full">
                          Critical
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">
                        Production system down or severely degraded affecting multiple users
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground-accent">1 hour</td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">Every 2 hours</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 text-sm font-semibold rounded-full">
                          High
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">
                        Major functionality impaired or impacting significant number of users
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground-accent">4 hours</td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">Daily</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
                          Medium
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">
                        Limited functionality issue with workaround available
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground-accent">1 business day</td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">Every 2 business days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                          Low
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">
                        General questions, feature requests, or minor issues
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground-accent">2 business days</td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">Weekly</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-sm text-foreground-accent">
                <p><strong>Note:</strong> Standard Support customers receive best-effort support during business hours. Enterprise SLA is available with Enterprise Support plans.</p>
              </div>
            </section>

            {/* Incident Response */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-nuvii-blue" />
                <h2 className="text-2xl font-bold text-nuvii-text">Incident Response</h2>
              </div>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">When to Report an Incident</h3>
              <p className="text-foreground-accent mb-4">
                Contact support immediately for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>System outages or service unavailability</li>
                <li>Data integrity concerns</li>
                <li>Security incidents or suspected breaches</li>
                <li>Performance degradation affecting clinical workflows</li>
                <li>Integration failures with critical EHR systems</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Incident Response Process</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-nuvii-blue text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-nuvii-text mb-1">Initial Response</h4>
                    <p className="text-foreground-accent text-sm">
                      Support team acknowledges receipt and assigns severity level based on impact
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-nuvii-blue text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-nuvii-text mb-1">Investigation</h4>
                    <p className="text-foreground-accent text-sm">
                      Engineering team investigates root cause and develops remediation plan
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-nuvii-blue text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-nuvii-text mb-1">Resolution</h4>
                    <p className="text-foreground-accent text-sm">
                      Fix is implemented and tested; service is restored
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-nuvii-blue text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-nuvii-text mb-1">Post-Mortem</h4>
                    <p className="text-foreground-accent text-sm">
                      For critical incidents, we provide detailed post-mortem analysis and preventive measures
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Security Incidents */}
            <section className="bg-red-50 border-2 border-red-200 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Security Incident Reporting</h2>
              <p className="text-foreground-accent mb-4">
                If you suspect a security incident, data breach, or unauthorized access:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li><strong>Immediately email:</strong> <a href="mailto:security@nuviisystems.com" className="text-red-600 hover:text-red-700 font-semibold">security@nuviisystems.com</a></li>
                <li>Include "SECURITY INCIDENT" in the subject line</li>
                <li>Provide as much detail as possible about the suspected incident</li>
                <li>Do not include sensitive PHI in the initial report</li>
              </ul>
              <p className="text-foreground-accent text-sm">
                Our security team will respond immediately and coordinate with your security personnel to investigate and remediate.
              </p>
            </section>

            {/* Self-Service Resources */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-6">Self-Service Resources</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-nuvii-blue pl-4">
                  <h3 className="text-lg font-semibold text-nuvii-text mb-2">Documentation</h3>
                  <p className="text-foreground-accent mb-3">
                    Browse our comprehensive documentation for integration guides, API references, and troubleshooting tips.
                  </p>
                  <Link href="/docs" className="text-nuvii-blue hover:text-nuvii-teal font-semibold">
                    View Documentation →
                  </Link>
                </div>

                <div className="border-l-4 border-nuvii-blue pl-4">
                  <h3 className="text-lg font-semibold text-nuvii-text mb-2">API Documentation</h3>
                  <p className="text-foreground-accent mb-3">
                    Access detailed API documentation for developers integrating with Nuvii Systems.
                  </p>
                  <a
                    href="https://nuvii.ai/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nuvii-blue hover:text-nuvii-teal font-semibold"
                  >
                    View API Docs →
                  </a>
                </div>
              </div>
            </section>

            {/* Enterprise Support */}
            <section className="bg-gradient-to-br from-nuvii-blue to-nuvii-teal p-8 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-4">Enterprise Support</h2>
              <p className="mb-6">
                Upgrade to Enterprise Support for:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>24/7/365 support coverage for critical issues</li>
                <li>Dedicated technical account manager</li>
                <li>Priority response times based on severity</li>
                <li>Direct access to engineering team</li>
                <li>Quarterly business reviews</li>
                <li>Dedicated Slack channel for real-time communication</li>
              </ul>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-nuvii-blue rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Contact Sales
              </Link>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
