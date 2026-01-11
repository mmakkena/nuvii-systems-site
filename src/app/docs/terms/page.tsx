import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nuviisystems.com'),
  title: "Terms of Service | Nuvii Systems",
  description: "Terms of Service for Nuvii Systems healthcare AI platform and services.",
  openGraph: {
    title: "Terms of Service | Nuvii Systems",
    description: "Terms of Service for using Nuvii Systems platform",
    url: "https://nuviisystems.com/docs/terms",
    siteName: "Nuvii Systems",
    type: "website",
  },
};

export default function TermsPage() {
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
            <div className="p-3 bg-orange-50 rounded-lg">
              <FileCheck className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-nuvii-text">
              Terms of Service
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
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Agreement to Terms</h2>
              <p className="text-foreground-accent mb-4">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (whether personally or on behalf of an entity, &quot;you&quot; or &quot;Customer&quot;) and Nuvii Systems, Inc. (&quot;Nuvii Systems,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) concerning your access to and use of the Nuvii Systems healthcare AI platform and related services (collectively, the &quot;Services&quot;).
              </p>
              <p className="text-foreground-accent mb-4">
                By accessing or using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
                <p className="text-foreground-accent font-semibold">
                  IMPORTANT: These Terms include provisions that limit our liability and require disputes to be resolved through binding arbitration on an individual basis, not as class actions.
                </p>
              </div>
            </section>

            {/* Services Description */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Description of Services</h2>
              <p className="text-foreground-accent mb-4">
                Nuvii Systems provides a deployable healthcare AI platform that supports:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-4">
                <li>Clinical Documentation Improvement (CDI)</li>
                <li>Medical coding and revenue integrity analysis</li>
                <li>EHR integration via SMART on FHIR and other standards</li>
                <li>Deployment models including on-premises, VPC, and air-gapped environments</li>
              </ul>
              <p className="text-foreground-accent">
                The specific features and functionality available to you depend on your subscription plan and deployment configuration.
              </p>
            </section>

            {/* Account Registration */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Account Registration and Security</h2>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Account Creation</h3>
              <p className="text-foreground-accent mb-4">
                To use the Services, you must create an account and provide accurate, complete information. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>Provide truthful and current information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Authorized Users</h3>
              <p className="text-foreground-accent">
                You are responsible for ensuring that your authorized users comply with these Terms. You must maintain appropriate controls over user access and promptly revoke access for users who should no longer have it.
              </p>
            </section>

            {/* Acceptable Use */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Acceptable Use Policy</h2>
              <p className="text-foreground-accent mb-4">You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent">
                <li>Violate any applicable federal, state, local, or international law or regulation</li>
                <li>Infringe upon or violate the intellectual property rights of Nuvii Systems or any third party</li>
                <li>Transmit any material that is defamatory, obscene, or otherwise objectionable</li>
                <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Services</li>
                <li>Attempt to gain unauthorized access to any portion of the Services or any other systems or networks</li>
                <li>Reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code of the Services</li>
                <li>Use any automated means to access the Services for any purpose without our express written permission</li>
                <li>Remove, obscure, or alter any proprietary notices on the Services</li>
                <li>Use the Services to develop competing products or services</li>
                <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Intellectual Property Rights</h2>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Nuvii Systems IP</h3>
              <p className="text-foreground-accent mb-6">
                The Services, including all software, algorithms, models, designs, text, graphics, and other content, are owned by Nuvii Systems and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws. These Terms do not grant you any ownership rights in the Services.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">License to Use Services</h3>
              <p className="text-foreground-accent mb-6">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services solely for your internal business purposes during the term of your subscription.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Customer Data</h3>
              <p className="text-foreground-accent">
                You retain all rights to your data, including PHI, that you input into or process through the Services (&quot;Customer Data&quot;). You grant us a limited license to use Customer Data solely to provide the Services to you. We will not use Customer Data for any other purpose, including training AI models, without your explicit consent.
              </p>
            </section>

            {/* Data Protection and PHI */}
            <section className="bg-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Protected Health Information (PHI) and HIPAA</h2>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Business Associate Relationship</h3>
              <p className="text-foreground-accent mb-4">
                To the extent you are a Covered Entity or Business Associate under HIPAA and you use the Services to process PHI, we will enter into a Business Associate Agreement (BAA) with you. Our handling of PHI is governed by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>These Terms of Service</li>
                <li>Our Business Associate Agreement</li>
                <li>Our Privacy Policy</li>
                <li>Applicable provisions of HIPAA and the HITECH Act</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Your Responsibilities</h3>
              <p className="text-foreground-accent mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent">
                <li>Ensuring you have the right to disclose PHI to us for processing</li>
                <li>Obtaining all necessary authorizations and consents from patients</li>
                <li>Complying with HIPAA and other applicable privacy laws</li>
                <li>Configuring appropriate access controls and security settings</li>
                <li>Notifying us promptly of any security incidents involving PHI</li>
              </ul>
            </section>

            {/* Payment Terms */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Payment Terms</h2>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Fees</h3>
              <p className="text-foreground-accent mb-6">
                You agree to pay all fees associated with your subscription plan as set forth in your order form or subscription agreement. All fees are non-refundable except as expressly stated in these Terms or required by law.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Billing</h3>
              <p className="text-foreground-accent mb-6">
                Subscription fees are billed in advance on a recurring basis (monthly, annually, or as otherwise agreed). You authorize us to charge your designated payment method for all applicable fees.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Price Changes</h3>
              <p className="text-foreground-accent mb-6">
                We may change our pricing with 30 days&apos; notice. Price changes will apply to subsequent billing periods after the notice period.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Late Payment</h3>
              <p className="text-foreground-accent">
                If payment is not received when due, we may suspend access to the Services until payment is received. We reserve the right to charge interest on overdue amounts at the rate of 1.5% per month or the maximum rate permitted by law, whichever is less.
              </p>
            </section>

            {/* Term and Termination */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Term and Termination</h2>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Subscription Term</h3>
              <p className="text-foreground-accent mb-6">
                Your subscription begins on the date you first access the Services and continues for the initial term specified in your order form. Subscriptions automatically renew for successive periods of the same length unless either party provides notice of non-renewal at least 30 days before the end of the current term.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Termination for Convenience</h3>
              <p className="text-foreground-accent mb-6">
                You may terminate your subscription at any time by providing written notice, effective at the end of your current billing period. We may terminate your subscription with 30 days&apos; written notice.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Termination for Cause</h3>
              <p className="text-foreground-accent mb-6">
                Either party may terminate immediately if the other party materially breaches these Terms and fails to cure within 30 days of written notice. We may suspend or terminate your access immediately if you violate our Acceptable Use Policy or pose a security risk.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Effect of Termination</h3>
              <p className="text-foreground-accent mb-4">
                Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent">
                <li>Your right to access and use the Services immediately ceases</li>
                <li>You must pay all outstanding fees through the end of your billing period</li>
                <li>We will provide you access to export your Customer Data for 30 days (on-premises/VPC deployments retain data locally)</li>
                <li>After 30 days, we may delete your Customer Data in accordance with our data retention policies</li>
                <li>Provisions that by their nature should survive termination will continue to apply</li>
              </ul>
            </section>

            {/* Warranties and Disclaimers */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Warranties and Disclaimers</h2>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Our Warranty</h3>
              <p className="text-foreground-accent mb-6">
                We warrant that the Services will perform materially in accordance with our documentation during your subscription term. Your sole remedy for breach of this warranty is for us to use commercially reasonable efforts to correct the non-conformity or, if we cannot, you may terminate your subscription and receive a pro-rata refund of prepaid fees.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Disclaimer</h3>
              <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-lg">
                <p className="text-foreground-accent font-semibold mb-4">
                  EXCEPT AS EXPRESSLY PROVIDED ABOVE, THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
                <p className="text-foreground-accent mb-4">
                  WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-foreground-accent">
                  WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE. THE SERVICES ARE TOOLS TO ASSIST HEALTHCARE PROFESSIONALS; THEY DO NOT REPLACE PROFESSIONAL MEDICAL JUDGMENT. YOU ARE SOLELY RESPONSIBLE FOR CLINICAL DECISIONS AND PATIENT CARE.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Limitation of Liability</h2>
              <div className="bg-red-50 border-2 border-red-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-nuvii-text mb-3">Exclusion of Damages</h3>
                <p className="text-foreground-accent mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL NUVII SYSTEMS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE) AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>

                <h3 className="text-xl font-semibold text-nuvii-text mb-3">Cap on Liability</h3>
                <p className="text-foreground-accent mb-4">
                  OUR TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR $10,000, WHICHEVER IS GREATER.
                </p>

                <h3 className="text-xl font-semibold text-nuvii-text mb-3">Exceptions</h3>
                <p className="text-foreground-accent">
                  The limitations in this section do not apply to: (a) our indemnification obligations; (b) your payment obligations; (c) your breach of the Acceptable Use Policy; or (d) claims arising from gross negligence, willful misconduct, or fraud.
                </p>
              </div>
            </section>

            {/* Indemnification */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Indemnification</h2>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Our Indemnification</h3>
              <p className="text-foreground-accent mb-6">
                We will defend you against third-party claims that the Services infringe a U.S. patent, copyright, or trademark, and will indemnify you for resulting damages, provided you notify us promptly and cooperate with our defense.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Your Indemnification</h3>
              <p className="text-foreground-accent mb-4">
                You will defend us against third-party claims arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent">
                <li>Your use of the Services in violation of these Terms</li>
                <li>Your Customer Data (including claims of infringement or privacy violations)</li>
                <li>Your breach of applicable laws or regulations</li>
                <li>Negligence or willful misconduct by you or your users</li>
              </ul>
            </section>

            {/* Dispute Resolution */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Dispute Resolution</h2>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Informal Resolution</h3>
              <p className="text-foreground-accent mb-6">
                Before filing a claim, you agree to contact us and attempt to resolve the dispute informally by sending written notice to <a href="mailto:legal@nuviisystems.com" className="text-nuvii-blue hover:text-nuvii-teal font-semibold">legal@nuviisystems.com</a>. We will attempt to resolve the dispute informally by contacting you.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Binding Arbitration</h3>
              <p className="text-foreground-accent mb-4">
                If we cannot resolve the dispute informally within 60 days, any dispute arising out of or relating to these Terms or the Services will be resolved through binding arbitration under the Commercial Arbitration Rules of the American Arbitration Association.
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>The arbitration will be conducted in [location to be specified]</li>
                <li>Each party will bear its own costs and fees, unless the arbitrator awards them to the prevailing party</li>
                <li>The arbitrator&apos;s decision will be final and binding</li>
                <li>Judgment on the award may be entered in any court of competent jurisdiction</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Class Action Waiver</h3>
              <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
                <p className="text-foreground-accent font-semibold">
                  YOU AND NUVII SYSTEMS AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
                </p>
              </div>
            </section>

            {/* General Provisions */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">General Provisions</h2>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Governing Law</h3>
              <p className="text-foreground-accent mb-6">
                These Terms are governed by the laws of the State of Delaware, without regard to its conflict of laws principles.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Modifications</h3>
              <p className="text-foreground-accent mb-6">
                We may modify these Terms from time to time. We will provide notice of material changes by email or through the Services at least 30 days before they take effect. Your continued use of the Services after changes take effect constitutes acceptance of the modified Terms.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Assignment</h3>
              <p className="text-foreground-accent mb-6">
                You may not assign these Terms or any rights hereunder without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of substantially all our assets.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Severability</h3>
              <p className="text-foreground-accent mb-6">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Entire Agreement</h3>
              <p className="text-foreground-accent mb-6">
                These Terms, together with your order form, BAA (if applicable), and Privacy Policy, constitute the entire agreement between you and Nuvii Systems regarding the Services and supersede all prior agreements and understandings.
              </p>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Waiver</h3>
              <p className="text-foreground-accent">
                No waiver of any provision of these Terms will be deemed a further or continuing waiver of such provision or any other provision.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Contact Information</h2>
              <p className="text-foreground-accent mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="text-foreground-accent space-y-2">
                <p><strong>Nuvii Systems, Inc.</strong></p>
                <p>Legal Department</p>
                <p>Email: <a href="mailto:legal@nuviisystems.com" className="text-nuvii-blue hover:text-nuvii-teal font-semibold">legal@nuviisystems.com</a></p>
                <p>Support: <a href="mailto:support@nuviisystems.com" className="text-nuvii-blue hover:text-nuvii-teal font-semibold">support@nuviisystems.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
