import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-nuvii-dark-bg text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/nuvii_logo.png"
                alt="Nuvii Systems Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <h3 className="text-2xl font-bold">
                <span className="bg-nuvii-gradient bg-clip-text text-transparent">Nuvii Systems</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-2">
              AI platforms for clinical documentation, medical coding, and revenue integrity
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-nuvii-blue transition-colors">Nuvii CDI Agent</a></li>
              <li>
                <a href="https://nuvii.ai" target="_blank" rel="noopener noreferrer"
                  className="hover:text-nuvii-blue transition-colors inline-flex items-center gap-1">
                  APIs & Demo
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://nuvii.ai/docs" target="_blank" rel="noopener noreferrer"
                  className="hover:text-nuvii-blue transition-colors">
                  Documentation
                </a>
              </li>
              <li><a href="#how-it-works" className="hover:text-nuvii-blue transition-colors">How It Works</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://nuviipartners.com" target="_blank" rel="noopener noreferrer"
                  className="hover:text-nuvii-blue transition-colors inline-flex items-center gap-1">
                  Fractional CTO & Advisory
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://nuviipartners.com" target="_blank" rel="noopener noreferrer"
                  className="hover:text-nuvii-blue transition-colors">
                  Implementation Support
                </a>
              </li>
              <li>
                <a href="https://nuviipartners.com" target="_blank" rel="noopener noreferrer"
                  className="hover:text-nuvii-blue transition-colors">
                  Platform Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-nuvii-blue transition-colors">About Nuvii Systems</a></li>
              <li><a href="#security" className="hover:text-nuvii-blue transition-colors">Security & Compliance</a></li>
              <li><a href="#" className="hover:text-nuvii-blue transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-nuvii-blue transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nuvii Systems. All rights reserved.</p>
          <p className="mt-2">
            <a href="https://nuviisystems.com" className="text-nuvii-blue hover:underline">
              nuviisystems.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
