export default function ApiPlayground() {
  return (
    <section id="api-playground" className="py-12 bg-gradient-to-br from-nuvii-blue/5 to-nuvii-teal/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nuvii-text mb-6">
              Evaluate the Platform with Interactive Demos
            </h2>
            <p className="text-xl text-nuvii-text font-semibold mb-4">
              Hands-on evaluation available in a controlled environment
            </p>
            <p className="text-lg text-foreground-accent max-w-3xl mx-auto">
              Explore Nuvii CDI Agent through interactive demos and APIs in our evaluation environment. All evaluations use sample data only and are isolated from production deployments.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div className="text-foreground-accent">
                  Test CDI, coding, and HCC workflows
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div className="text-foreground-accent">
                  Explore semantic search and documentation intelligence
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div className="text-foreground-accent">
                  Review structured, explainable outputs
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div className="text-foreground-accent">
                  No PHI • Evaluation-only environment
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://nuvii.ai" target="_blank" rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2">
                Try the Interactive Evaluation (Evaluation Environment)
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="https://nuvii.ai/docs" target="_blank" rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2">
                View Developer Documentation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

            <div className="text-center text-sm text-foreground-accent mt-6 italic">
              Live demos and APIs are hosted on <strong className="text-nuvii-blue">nuvii.ai</strong> — the evaluation environment for Nuvii Systems products.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
