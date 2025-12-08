export default function PartnersSection() {
  return (
    <section id="partners" className="py-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nuvii-text mb-4">
              Need Implementation Support?
            </h2>
            <p className="text-xl text-nuvii-blue font-semibold">
              Work with our healthcare AI experts
            </p>
          </div>

          <div className="bg-hero-background rounded-2xl p-8 md:p-10 border border-gray-200">
            <p className="text-lg text-foreground-accent mb-6 leading-relaxed">
              <strong className="text-nuvii-text">Nuvii Partners</strong> provides fractional CTO and advisory
              services to help teams adopt Nuvii Systems and modern healthcare AI platforms.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold text-nuvii-text mb-1">Strategic Guidance</div>
                <div className="text-sm text-foreground-accent">AI adoption roadmaps and platform architecture</div>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-2">⚙️</div>
                <div className="font-semibold text-nuvii-text mb-1">Implementation</div>
                <div className="text-sm text-foreground-accent">Hands-on deployment and integration support</div>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="font-semibold text-nuvii-text mb-1">Fractional CTO</div>
                <div className="text-sm text-foreground-accent">Technical leadership for healthcare AI initiatives</div>
              </div>
            </div>

            <div className="text-center">
              <a href="https://nuviipartners.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-nuvii-teal text-white rounded-xl font-semibold hover:brightness-110 transition-all">
                Work with Nuvii Partners
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="text-center text-sm text-foreground-accent mt-6 italic">
              Fractional CTO and advisory services for healthcare AI and data platforms
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
