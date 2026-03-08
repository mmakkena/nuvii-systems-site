export default function Hero() {
  return (
    <section className="pt-32 pb-12 bg-gradient-to-br from-hero-background via-white to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top right gradient circle */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-nuvii-blue/10 rounded-full blur-3xl"></div>
        {/* Bottom left gradient circle */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-nuvii-teal/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-nuvii-blue/30 mb-6 shadow-sm">
            <span className="text-sm font-semibold bg-nuvii-gradient bg-clip-text text-transparent">
              Nuvii Clinical Intelligence Platform
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nuvii-text mb-6 leading-tight">
            AI Clinical Intelligence for Documentation, Coding, and Risk Capture
          </h1>

          <p className="text-xl md:text-2xl text-foreground-accent mb-4 max-w-3xl mx-auto">
            AI that analyzes clinical documentation to improve coding accuracy, risk capture, and revenue integrity.
          </p>

          <p className="text-lg text-foreground-accent mb-8 max-w-3xl mx-auto">
            Explainable AI built for regulated healthcare environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="/demo" className="btn-primary w-full sm:w-auto shadow-lg hover:shadow-xl text-center">
              Request Enterprise Demo
            </a>
            <a href="https://nuvii.ai" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto shadow-md hover:shadow-lg text-center">
              Explore Interactive Evaluation
            </a>
          </div>

          <div className="text-sm font-semibold bg-nuvii-gradient bg-clip-text text-transparent">
            HIPAA-Ready • Zero PHI Egress • Explainable AI • Human-in-the-Loop
          </div>
        </div>
      </div>
    </section>
  );
}
