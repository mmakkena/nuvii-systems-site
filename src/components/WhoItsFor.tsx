export default function WhoItsFor() {
  const audiences = [
    {
      title: "Primary Care Groups",
      description: "Medicare-focused organizations managing risk-adjusted populations",
    },
    {
      title: "CDI Specialists and Coding Teams",
      description: "Improving documentation specificity and coding completeness",
    },
    {
      title: "Revenue Cycle Leaders",
      description: "Ensuring compliant reimbursement and audit readiness",
    },
    {
      title: "Health Systems",
      description: "Operating under strict PHI security and infrastructure requirements",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-lg md:text-xl text-foreground-accent font-medium">
            Built for Healthcare Teams Responsible for Documentation Accuracy and Revenue Integrity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 bg-hero-background px-6 py-4 rounded-xl border border-gray-100 text-center"
            >
              <span className="text-nuvii-text font-semibold">
                {audience.title}
              </span>
              <span className="text-sm text-foreground-accent">
                {audience.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
