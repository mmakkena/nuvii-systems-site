import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://nuviisystems.com'),
  title: "Clinical Intelligence Platform for Documentation, Coding, and Revenue Integrity | Nuvii Systems",
  description: "AI clinical intelligence platform that analyzes documentation to improve coding accuracy, risk capture, and compliant reimbursement. On-prem and VPC deployment with zero PHI egress.",
  keywords: "clinical intelligence platform, healthcare AI, CDI, clinical documentation improvement, medical coding, revenue integrity, risk capture, HCC, zero PHI egress, on-prem deployment, VPC deployment, Medicare, primary care, HIPAA compliant",
  openGraph: {
    title: "Clinical Intelligence Platform for Documentation, Coding, and Revenue Integrity | Nuvii Systems",
    description: "AI clinical intelligence platform that analyzes documentation to improve coding accuracy, risk capture, and compliant reimbursement. On-prem and VPC deployment with zero PHI egress.",
    url: "https://nuviisystems.com",
    siteName: "Nuvii Systems",
    type: "website",
    images: [
      {
        url: "/nuvii_logo.png",
        width: 1200,
        height: 630,
        alt: "Nuvii Systems - Clinical Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical Intelligence Platform for Documentation, Coding, and Revenue Integrity | Nuvii Systems",
    description: "AI clinical intelligence platform that analyzes documentation to improve coding accuracy, risk capture, and compliant reimbursement. On-prem and VPC deployment with zero PHI egress.",
    images: ["/nuvii_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nuvii Systems",
    "url": "https://nuviisystems.com",
    "logo": "https://nuviisystems.com/nuvii_logo.png",
    "description": "AI clinical intelligence platform for documentation, coding, and revenue integrity in healthcare",
    "industry": "Healthcare Technology",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "url": "https://nuviisystems.com/demo"
    },
    "sameAs": [
      "https://nuvii.ai"
    ]
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Nuvii Clinical Intelligence Platform",
    "applicationCategory": "HealthcareApplication",
    "operatingSystem": "Linux, Cloud",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Enterprise pricing based on deployment model and usage"
    },
    "description": "AI clinical intelligence platform that analyzes documentation to improve coding accuracy, risk capture, and compliant reimbursement with zero PHI egress",
    "featureList": [
      "Clinical Documentation Gap Detection",
      "Medical Coding Assistance (ICD-10, CPT)",
      "HCC and Risk Capture Insights",
      "Zero PHI Egress Deployment",
      "Explainable AI Outputs",
      "EHR and CDI Workflow Integration"
    ],
    "screenshot": "https://nuviisystems.com/nuvii_logo.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "1"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Nuvii Clinical Intelligence Platform",
    "description": "AI clinical intelligence platform that analyzes documentation to improve coding accuracy, risk capture, and compliant reimbursement with zero PHI egress",
    "brand": {
      "@type": "Organization",
      "name": "Nuvii Systems"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://nuviisystems.com/demo",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "Contact for pricing",
        "priceCurrency": "USD"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Healthcare Organizations, Primary Care Groups, CDI Specialists, Revenue Cycle Leaders"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TLKPZDVZ');`
          }}
        />
        {/* End Google Tag Manager */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLKPZDVZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
