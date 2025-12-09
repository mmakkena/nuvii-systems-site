import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://nuviisystems.com'),
  title: "Deployable Healthcare AI Platform for CDI & Coding | Nuvii Systems",
  description: "Deployable healthcare AI platform for clinical documentation, medical coding, and revenue integrity. On-prem and VPC deployment with zero PHI egress.",
  keywords: "deployable healthcare AI, CDI, clinical documentation improvement, medical coding, revenue integrity, zero PHI egress, on-prem deployment, VPC deployment, Medicare, primary care, HIPAA compliant, healthcare automation",
  openGraph: {
    title: "Deployable Healthcare AI Platform for CDI & Coding | Nuvii Systems",
    description: "Deployable healthcare AI platform for clinical documentation, medical coding, and revenue integrity. On-prem and VPC deployment with zero PHI egress.",
    url: "https://nuviisystems.com",
    siteName: "Nuvii Systems",
    type: "website",
    images: [
      {
        url: "/nuvii_logo.png",
        width: 1200,
        height: 630,
        alt: "Nuvii Systems - Deployable Healthcare AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deployable Healthcare AI Platform for CDI & Coding | Nuvii Systems",
    description: "Deployable healthcare AI platform for clinical documentation, medical coding, and revenue integrity. On-prem and VPC deployment with zero PHI egress.",
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
    "description": "Deployable healthcare AI platform for clinical documentation, medical coding, and revenue integrity",
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
    "name": "Nuvii CDI Agent",
    "applicationCategory": "HealthcareApplication",
    "operatingSystem": "Linux, Cloud",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Enterprise pricing based on deployment model and usage"
    },
    "description": "AI-powered clinical documentation improvement and medical coding platform with zero PHI egress, deployable on-prem, VPC, or air-gapped environments",
    "featureList": [
      "Clinical Documentation Improvement (CDI)",
      "Medical Coding (ICD-10, CPT)",
      "Revenue Integrity & HCC Optimization",
      "Zero PHI Egress Deployment",
      "Explainable AI Outputs",
      "EHR Integration"
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
    "name": "Nuvii CDI Agent",
    "description": "Deployable healthcare AI platform for clinical documentation, medical coding, and revenue integrity with zero PHI egress",
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
