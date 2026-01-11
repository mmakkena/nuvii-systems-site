import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Server, Database, FileText, Clock } from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nuviisystems.com'),
  title: "Security Documentation | Nuvii Systems",
  description: "Comprehensive security documentation for Nuvii Systems, including PHI handling, encryption standards, logging practices, and data retention policies.",
  openGraph: {
    title: "Security Documentation | Nuvii Systems",
    description: "Security and compliance documentation for Nuvii Systems healthcare AI platform",
    url: "https://nuviisystems.com/docs/security",
    siteName: "Nuvii Systems",
    type: "website",
  },
};

export default function SecurityPage() {
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
            <div className="p-3 bg-green-50 rounded-lg">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-nuvii-text">
              Security
            </h1>
          </div>
          <p className="text-xl text-foreground-accent mb-8">
            Our comprehensive approach to protecting protected health information (PHI) and ensuring HIPAA compliance.
          </p>

          <div className="space-y-8">
            {/* Overview */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Security Overview</h2>
              <p className="text-foreground-accent mb-4">
                Nuvii Systems is designed with security and compliance at its core. Our platform can be deployed entirely within your controlled environment—whether on-premises, in your VPC, or in air-gapped networks—ensuring zero PHI egress to external systems.
              </p>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                <p className="text-foreground-accent font-semibold">
                  Zero PHI Egress: All patient data remains within your infrastructure, giving you complete control over sensitive health information.
                </p>
              </div>
            </section>

            {/* PHI Handling */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-nuvii-blue" />
                <h2 className="text-2xl font-bold text-nuvii-text">PHI Handling</h2>
              </div>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Data Residency</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>All PHI is processed and stored within your designated environment</li>
                <li>No patient data is transmitted to external AI providers or cloud services</li>
                <li>AI models run locally within your infrastructure</li>
                <li>Customer maintains full custody and control of all PHI</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Access Controls</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>Role-based access control (RBAC) for all system functions</li>
                <li>Integration with your existing identity provider (SSO/SAML support)</li>
                <li>Multi-factor authentication (MFA) support</li>
                <li>Granular permissions for different user roles (clinicians, coders, administrators)</li>
                <li>Audit logging of all access to PHI</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Data Minimization</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent">
                <li>Only accesses FHIR resources necessary for CDI and coding functions</li>
                <li>Configurable data retention policies aligned with your requirements</li>
                <li>Support for de-identification workflows where appropriate</li>
              </ul>
            </section>

            {/* Encryption */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-nuvii-blue" />
                <h2 className="text-2xl font-bold text-nuvii-text">Encryption Standards</h2>
              </div>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Data in Transit</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>TLS 1.2+ encryption for all network communications</li>
                <li>Mutual TLS (mTLS) support for service-to-service communication</li>
                <li>Secure WebSocket connections for real-time features</li>
                <li>Certificate pinning for enhanced security</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Data at Rest</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>AES-256 encryption for all stored PHI</li>
                <li>Encrypted database volumes and file systems</li>
                <li>Hardware security module (HSM) support for key management</li>
                <li>Integration with your existing encryption key management systems</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Key Management</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent">
                <li>Customer-controlled encryption keys</li>
                <li>Automatic key rotation policies</li>
                <li>Secure key storage and access controls</li>
                <li>Support for bring-your-own-key (BYOK) configurations</li>
              </ul>
            </section>

            {/* Logging */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-nuvii-blue" />
                <h2 className="text-2xl font-bold text-nuvii-text">Logging & Monitoring</h2>
              </div>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Audit Logging</h3>
              <p className="text-foreground-accent mb-4">
                Comprehensive audit trails are maintained for all system activities involving PHI:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>User authentication and authorization events</li>
                <li>PHI access and modification events with user attribution</li>
                <li>System configuration changes</li>
                <li>Data export and transmission activities</li>
                <li>Failed access attempts and security events</li>
                <li>Administrative actions</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Log Management</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>Tamper-resistant log storage with cryptographic integrity verification</li>
                <li>Integration with your SIEM (Security Information and Event Management) systems</li>
                <li>Configurable log retention periods to meet regulatory requirements</li>
                <li>Real-time alerting for security events</li>
                <li>Log encryption and secure transmission</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Security Monitoring</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent">
                <li>Continuous monitoring for suspicious activity</li>
                <li>Automated anomaly detection</li>
                <li>Integration with intrusion detection systems (IDS)</li>
                <li>Regular security event reviews</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-nuvii-blue" />
                <h2 className="text-2xl font-bold text-nuvii-text">Data Retention</h2>
              </div>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Retention Policies</h3>
              <p className="text-foreground-accent mb-4">
                Data retention policies are fully configurable to align with your organizational requirements and regulatory obligations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>Configurable retention periods for clinical data, audit logs, and system logs</li>
                <li>Support for legal hold and litigation preservation requirements</li>
                <li>Automated data lifecycle management and archival</li>
                <li>Compliance with state and federal recordkeeping requirements</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Data Deletion</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>Secure deletion using industry-standard wiping techniques</li>
                <li>Automated purging based on retention policies</li>
                <li>Support for right-to-deletion requests</li>
                <li>Cryptographic erasure for encrypted data</li>
                <li>Certificate of destruction available upon request</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Backup & Recovery</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent">
                <li>Encrypted backups of all critical data</li>
                <li>Configurable backup frequency and retention</li>
                <li>Tested disaster recovery procedures</li>
                <li>Backup integrity verification</li>
                <li>Geographic redundancy options for high availability deployments</li>
              </ul>
            </section>

            {/* Compliance */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-nuvii-blue" />
                <h2 className="text-2xl font-bold text-nuvii-text">Compliance & Certifications</h2>
              </div>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">HIPAA Compliance</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>Designed to support HIPAA Privacy and Security Rule requirements</li>
                <li>Business Associate Agreement (BAA) available for all customers</li>
                <li>Administrative, physical, and technical safeguards implemented</li>
                <li>Regular security risk assessments and updates</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Security Standards</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>NIST Cybersecurity Framework alignment</li>
                <li>HITRUST Common Security Framework (CSF) considerations</li>
                <li>SOC 2 Type II examination (available on request)</li>
                <li>Regular third-party security assessments</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Vulnerability Management</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent">
                <li>Regular security scanning and penetration testing</li>
                <li>Coordinated vulnerability disclosure program</li>
                <li>Timely security patches and updates</li>
                <li>Proactive threat intelligence monitoring</li>
              </ul>
            </section>

            {/* Security in Deployment Models */}
            <section className="bg-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Security Across Deployment Models</h2>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">On-Premises Deployment</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>Deployed entirely within your data center</li>
                <li>Leverages your existing physical security controls</li>
                <li>Integrates with your network security infrastructure</li>
                <li>No external network connectivity required for AI processing</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">VPC Deployment</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent mb-6">
                <li>Isolated virtual private cloud environment</li>
                <li>Customer-controlled network segmentation</li>
                <li>Private endpoints for EHR integration</li>
                <li>No shared infrastructure with other customers</li>
              </ul>

              <h3 className="text-xl font-semibold text-nuvii-text mb-3">Air-Gapped Deployment</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-accent">
                <li>Complete network isolation for maximum security</li>
                <li>Suitable for highly sensitive environments</li>
                <li>Offline model updates and maintenance procedures</li>
                <li>Full functionality without internet connectivity</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-nuvii-text mb-4">Security Questions?</h2>
              <p className="text-foreground-accent mb-4">
                For security-related inquiries, vulnerability reports, or to request additional security documentation, please contact our security team.
              </p>
              <Link
                href="/docs/support"
                className="inline-flex items-center gap-2 px-6 py-3 bg-nuvii-blue text-white rounded-lg hover:bg-nuvii-teal transition-colors font-semibold"
              >
                Contact Support
              </Link>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
