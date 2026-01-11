import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nuviisystems.com'),
  title: "SMART on FHIR Integration | Documentation | Nuvii Systems",
  description: "Technical documentation for SMART on FHIR integration with Nuvii Systems, including launch flows, OAuth scopes, and FHIR endpoints.",
  openGraph: {
    title: "SMART on FHIR Integration | Nuvii Systems",
    description: "SMART on FHIR integration documentation for Nuvii Systems platform",
    url: "https://nuviisystems.com/docs/smart-on-fhir",
    siteName: "Nuvii Systems",
    type: "website",
  },
};

export default function SmartOnFhirPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-nuvii-text mb-4">
            SMART on FHIR Integration
          </h1>
          <p className="text-xl text-foreground-accent mb-8">
            Integrate Nuvii Systems with your EHR using the SMART on FHIR standard for secure, standards-based healthcare data access.
          </p>

          <div className="prose prose-lg max-w-none">
            {/* Overview */}
            <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Overview</h2>
              <p className="text-foreground-accent mb-4">
                Nuvii Systems supports SMART on FHIR (Substitutable Medical Applications and Reusable Technologies on Fast Healthcare Interoperability Resources) for seamless EHR integration. Our implementation follows the SMART App Launch Framework specification to enable secure, OAuth 2.0-based authentication and authorization.
              </p>
              <a
                href="https://nuvii.ai/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-nuvii-blue hover:text-nuvii-teal font-semibold"
              >
                View Full API Documentation
                <ExternalLink className="w-4 h-4" />
              </a>
            </section>

            {/* Launch Flow */}
            <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Launch & Redirect Flow</h2>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3 mt-6">EHR Launch</h3>
              <p className="text-foreground-accent mb-4">
                Nuvii Systems supports EHR launch, where the application is launched from within the EHR context:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-foreground-accent mb-6">
                <li>EHR redirects user to Nuvii Systems launch URL with launch parameters</li>
                <li>Nuvii Systems retrieves authorization endpoint from EHR&apos;s FHIR conformance statement</li>
                <li>User is redirected to EHR authorization server for authentication</li>
                <li>After approval, EHR redirects back to Nuvii Systems with authorization code</li>
                <li>Nuvii Systems exchanges authorization code for access token</li>
                <li>Application accesses FHIR resources using the access token</li>
              </ol>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Standalone Launch</h3>
              <p className="text-foreground-accent mb-4">
                Standalone launch is also supported for access outside the EHR context:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-foreground-accent">
                <li>User accesses Nuvii Systems directly</li>
                <li>Application discovers EHR&apos;s SMART configuration</li>
                <li>User selects patient/context and authenticates with EHR</li>
                <li>Authorization flow completes as described above</li>
              </ol>
            </section>

            {/* OAuth Scopes */}
            <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Required OAuth Scopes</h2>
              <p className="text-foreground-accent mb-4">
                Nuvii Systems requests the following SMART scopes to access necessary clinical data:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-nuvii-text border-b">Scope</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-nuvii-text border-b">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-foreground-accent">launch</td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">Permission to obtain launch context</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-foreground-accent">patient/*.read</td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">Read access to all patient resources</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-foreground-accent">patient/Encounter.read</td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">Read patient encounter information</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-foreground-accent">patient/Condition.read</td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">Read patient diagnoses and conditions</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-foreground-accent">patient/Procedure.read</td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">Read patient procedures</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-foreground-accent">patient/DocumentReference.read</td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">Read clinical documents and notes</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-foreground-accent">patient/Observation.read</td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">Read patient observations and vitals</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono text-foreground-accent">offline_access</td>
                      <td className="px-6 py-4 text-sm text-foreground-accent">Request refresh token for long-term access</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FHIR Endpoints */}
            <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">FHIR Endpoints</h2>
              <p className="text-foreground-accent mb-4">
                Nuvii Systems accesses the following FHIR R4 endpoints from your EHR:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-nuvii-blue pl-4">
                  <h3 className="text-lg font-semibold text-nuvii-text mb-2">Patient Resources</h3>
                  <p className="text-sm font-mono text-foreground-accent">GET [base]/Patient/[id]</p>
                  <p className="text-sm text-foreground-accent mt-1">Retrieve patient demographic information</p>
                </div>

                <div className="border-l-4 border-nuvii-blue pl-4">
                  <h3 className="text-lg font-semibold text-nuvii-text mb-2">Encounter Resources</h3>
                  <p className="text-sm font-mono text-foreground-accent">GET [base]/Encounter?patient=[id]</p>
                  <p className="text-sm text-foreground-accent mt-1">Query patient encounters for clinical context</p>
                </div>

                <div className="border-l-4 border-nuvii-blue pl-4">
                  <h3 className="text-lg font-semibold text-nuvii-text mb-2">Condition Resources</h3>
                  <p className="text-sm font-mono text-foreground-accent">GET [base]/Condition?patient=[id]</p>
                  <p className="text-sm text-foreground-accent mt-1">Retrieve patient diagnoses and conditions</p>
                </div>

                <div className="border-l-4 border-nuvii-blue pl-4">
                  <h3 className="text-lg font-semibold text-nuvii-text mb-2">Procedure Resources</h3>
                  <p className="text-sm font-mono text-foreground-accent">GET [base]/Procedure?patient=[id]</p>
                  <p className="text-sm text-foreground-accent mt-1">Access patient procedure history</p>
                </div>

                <div className="border-l-4 border-nuvii-blue pl-4">
                  <h3 className="text-lg font-semibold text-nuvii-text mb-2">DocumentReference Resources</h3>
                  <p className="text-sm font-mono text-foreground-accent">GET [base]/DocumentReference?patient=[id]</p>
                  <p className="text-sm text-foreground-accent mt-1">Retrieve clinical notes and documentation</p>
                </div>

                <div className="border-l-4 border-nuvii-blue pl-4">
                  <h3 className="text-lg font-semibold text-nuvii-text mb-2">Observation Resources</h3>
                  <p className="text-sm font-mono text-foreground-accent">GET [base]/Observation?patient=[id]</p>
                  <p className="text-sm text-foreground-accent mt-1">Query patient observations, vitals, and lab results</p>
                </div>
              </div>
            </section>

            {/* Implementation Notes */}
            <section className="mb-12 bg-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Implementation Notes</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent">
                <li>All FHIR interactions use secure HTTPS connections</li>
                <li>Access tokens are securely stored and managed according to OAuth 2.0 best practices</li>
                <li>Nuvii Systems supports token refresh for long-running sessions</li>
                <li>All PHI remains within your controlled environment when deployed on-premises or in your VPC</li>
                <li>FHIR version: R4 (4.0.1)</li>
              </ul>
            </section>

            {/* Support */}
            <section className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Need Help?</h2>
              <p className="text-foreground-accent mb-4">
                For technical support with SMART on FHIR integration, please contact our support team or view our support documentation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/docs/support"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-nuvii-blue text-white rounded-lg hover:bg-nuvii-teal transition-colors font-semibold"
                >
                  View Support Resources
                </Link>
                <a
                  href="https://nuvii.ai/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-nuvii-blue text-nuvii-blue rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                >
                  <ExternalLink className="w-4 h-4" />
                  Full API Documentation
                </a>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
