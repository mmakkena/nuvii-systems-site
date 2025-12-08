export default function WhoItsFor() {
  const audiences = [
    "Primary Care Groups (Medicare-focused)",
    "CDI Specialists & Coding Teams",
    "Revenue Cycle & Compliance Leaders",
    "Health Systems with strict PHI controls"
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-lg md:text-xl text-foreground-accent font-medium">
            Trusted by teams responsible for compliant documentation and revenue integrity:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 bg-hero-background px-6 py-4 rounded-xl border border-gray-100"
            >
              <span className="text-nuvii-blue text-2xl flex-shrink-0">✓</span>
              <span className="text-nuvii-text font-semibold text-center">
                {audience}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-nuvii-text font-semibold">
            Supporting teams accountable for clinical accuracy, compliant reimbursement, and audit readiness.
          </p>
        </div>
      </div>
    </section>
  );
}
