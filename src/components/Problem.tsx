export default function Problem() {
  return (
    <section className="py-12 bg-hero-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nuvii-text mb-4 text-center">
            Documentation, Coding, and Revenue Integrity Gaps
          </h2>

          <p className="text-xl text-foreground-accent mb-8 text-center max-w-3xl mx-auto">
            Healthcare organizations face persistent gaps between clinical documentation, coding accuracy, and compliant reimbursement.
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-nuvii-text mb-2">Revenue Leakage and Missed HCC Capture</h3>
              <p className="text-sm text-foreground-accent">
                Incomplete or non-specific documentation leads to under-coded encounters and lost Medicare revenue.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="text-lg font-bold text-nuvii-text mb-2">Inconsistent CDI Reviews</h3>
              <p className="text-sm text-foreground-accent">
                Manual CDI review workflows are time-consuming and vary widely between reviewers, limiting scalability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="text-lg font-bold text-nuvii-text mb-2">Coding Errors and Rework</h3>
              <p className="text-sm text-foreground-accent">
                Coders often work without full clinical context, increasing coding errors, denials, and rework.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg font-bold text-nuvii-text mb-2">Clinical Notes Are Difficult to Interpret</h3>
              <p className="text-sm text-foreground-accent">
                EHR systems capture documentation, but they do not interpret clinical intent, severity, or coding implications.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-nuvii-text font-semibold">
              These are not workflow problems — they are documentation intelligence gaps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
