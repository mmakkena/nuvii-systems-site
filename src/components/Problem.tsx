export default function Problem() {
  return (
    <section className="py-12 bg-hero-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nuvii-text mb-8 text-center">
            Gaps in Documentation, Coding & Revenue Integrity
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-nuvii-text mb-2">Revenue Leakage & Missed HCCs</h3>
              <p className="text-sm text-foreground-accent">
                Incomplete documentation leads to under-coding and lost Medicare revenue.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="text-lg font-bold text-nuvii-text mb-2">Inconsistent CDI Reviews</h3>
              <p className="text-sm text-foreground-accent">
                Manual review processes don&apos;t scale and vary widely between reviewers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="text-lg font-bold text-nuvii-text mb-2">Coding Errors & Rework</h3>
              <p className="text-sm text-foreground-accent">
                Coders operate without semantic context, increasing errors and denials.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg font-bold text-nuvii-text mb-2">Complex Clinical Notes</h3>
              <p className="text-sm text-foreground-accent">
                EHRs capture data, but they don&apos;t reason over clinical intent.
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
