import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuvii CDI Agent - AI-Powered Clinical Documentation & Medical Coding",
  description: "Reduce coding errors, close documentation gaps, and optimize revenue with Nuvii CDI Agent. HIPAA-ready, on-prem support, secure AI automation for healthcare.",
  keywords: "CDI, clinical documentation improvement, medical coding, ICD-10, CPT, healthcare AI, HIPAA, revenue cycle management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
