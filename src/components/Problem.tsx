export default function Problem() {
  return (
    <section className="py-20 bg-hero-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-nuvii-text mb-8 text-center">
            Problem We Solve
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-nuvii-text mb-3">1️⃣ Revenue Leakage & Missed HCCs</h3>
              <p className="text-foreground-accent">
                Incomplete documentation leads to under-coding, missed severity, and lost Medicare revenue.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold text-nuvii-text mb-3">2️⃣ Inconsistent CDI Reviews</h3>
              <p className="text-foreground-accent">
                Manual review processes don&apos;t scale and vary widely between reviewers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold text-nuvii-text mb-3">3️⃣ Coding Errors & Rework</h3>
              <p className="text-foreground-accent">
                Coders operate without semantic context, increasing errors and denials.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-nuvii-text mb-3">4️⃣ Complex Clinical Notes</h3>
              <p className="text-foreground-accent">
                EHRs capture data, but they don&apos;t reason over clinical intent.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-nuvii-text font-semibold">
              These are not workflow problems — they are documentation intelligence gaps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
