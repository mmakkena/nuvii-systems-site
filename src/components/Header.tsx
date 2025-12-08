'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [productOpen, setProductOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-3">
              <Image
                src="/nuvii_logo.png"
                alt="Nuvii Systems Logo"
                width={40}
                height={40}
                priority
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold bg-nuvii-gradient bg-clip-text text-transparent">
                Nuvii Systems
              </span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Product Dropdown */}
            <div className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button className="text-nuvii-text hover:text-nuvii-blue transition-colors flex items-center gap-1 py-2">
                Product
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {productOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                    <a href="#features" className="block px-4 py-2 text-nuvii-text hover:bg-hero-background transition-colors">
                      Nuvii CDI Agent
                    </a>
                    <a href="https://nuvii.ai" target="_blank" rel="noopener noreferrer"
                      className="block px-4 py-2 text-nuvii-text hover:bg-hero-background transition-colors flex items-center justify-between">
                      <span>APIs & Demo</span>
                      <svg className="w-4 h-4 text-nuvii-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a href="https://nuvii.ai/docs" target="_blank" rel="noopener noreferrer"
                      className="block px-4 py-2 text-nuvii-text hover:bg-hero-background transition-colors">
                      Developer Access
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#how-it-works" className="text-nuvii-text hover:text-nuvii-blue transition-colors">How It Works</a>
            <a href="#security" className="text-nuvii-text hover:text-nuvii-blue transition-colors">Security</a>
            <a href="#pricing" className="text-nuvii-text hover:text-nuvii-blue transition-colors">Pricing</a>

            {/* Resources Dropdown */}
            <div className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="text-nuvii-text hover:text-nuvii-blue transition-colors flex items-center gap-1 py-2">
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {resourcesOpen && (
                <div className="absolute top-full right-0 pt-2 w-64">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                    <a href="#about" className="block px-4 py-2 text-nuvii-text hover:bg-hero-background transition-colors">
                      About Nuvii Systems
                    </a>
                    <a href="https://nuviipartners.com" target="_blank" rel="noopener noreferrer"
                      className="block px-4 py-2 text-nuvii-text hover:bg-hero-background transition-colors flex items-center justify-between">
                      <span>Advisory & Fractional CTO</span>
                      <svg className="w-4 h-4 text-nuvii-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a href="/demo" className="btn-primary text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
              Get a Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
