# Nuvii Systems Website

AI-Powered CDI & Medical Coding Agent marketing website built with Next.js and Tailwind CSS.

## Features

This website showcases the **Nuvii CDI Agent** product with comprehensive sections:

- **Hero Section** - Main value proposition with CTAs
- **About Nuvii Systems** - Company introduction
- **Problem Statement** - Pain points in healthcare documentation
- **Key Product Modules** - 6 core features including:
  - Medical Coding Helper
  - Clinical Documentation Gap Detection
  - CDI Query Generation
  - Revenue Optimization & HCC Insights
  - ICD-10/CPT Semantic Search
  - Real-time Document Analysis
- **How It Works** - Two deployment modes (API Services & MCP Agent)
- **Integrations** - Slack, Teams, EHR systems, FHIR
- **Security & Deployment** - HIPAA-ready, on-prem support
- **Architecture Overview** - Technical infrastructure details
- **Pricing** - 3 tiers (Starter, Professional, Enterprise)
- **Why Nuvii Systems** - Key differentiators
- **CTA & Footer** - Contact and navigation

## Design

### Color Scheme
Aligned with Nuvii Systems brand:
- **Primary Blue**: `#0BA6E2`
- **Primary Teal**: `#0061C2`
- **Text**: `#1F2A36`
- **Background**: `#FFFFFF`
- **Hero Background**: `#F3F7FB`
- **Gradient**: `linear-gradient(135deg, #0BA6E2, #0061C2)`

### Tech Stack
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## Project Structure

```
nuvii-systems-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles and Tailwind
│   └── components/
│       ├── Header.tsx       # Fixed navigation header
│       ├── Hero.tsx         # Hero section
│       ├── About.tsx        # About Nuvii Systems
│       ├── Problem.tsx      # Problem statement
│       ├── Features.tsx     # Key product modules
│       ├── HowItWorks.tsx   # Two deployment modes
│       ├── Integrations.tsx # Integration partners
│       ├── Security.tsx     # Security & deployment
│       ├── Architecture.tsx # Technical architecture
│       ├── Pricing.tsx      # Pricing tiers
│       ├── WhyNuvii.tsx     # Why choose Nuvii
│       ├── CTA.tsx          # Call-to-action section
│       └── Footer.tsx       # Footer with links
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
└── package.json             # Dependencies
```

## Content Source

All content is based on `content.MD` which provides the marketing copy for the Nuvii CDI Agent product.

## Deployment

This Next.js application can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Docker** (self-hosted)

## License

Copyright © 2024 Nuvii Systems. All rights reserved.
