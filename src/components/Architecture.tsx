export default function Architecture() {
  const principles = [
    {
      icon: "🔒",
      title: "Isolation",
      description: "PHI never leaves your network. All processing happens inside your VPC or on-prem infrastructure."
    },
    {
      icon: "📈",
      title: "Scalability",
      description: "Handles single queries or high-volume batch processing with enterprise-grade performance."
    },
    {
      icon: "📊",
      title: "Auditability",
      description: "Every AI output includes evidence, rationale, and source references for compliance reviews."
    },
    {
      icon: "👤",
      title: "Human-in-the-loop Design",
      description: "AI suggests, humans decide. Built for collaboration between AI and clinical teams."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nuvii-text mb-6">
            Healthcare AI Security, Compliance & Auditability
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-hero-background p-8 rounded-2xl border border-gray-100"
            >
              <div className="text-5xl mb-4">{principle.icon}</div>
              <h3 className="text-xl font-bold text-nuvii-text mb-3">
                {principle.title}
              </h3>
              <p className="text-foreground-accent text-lg">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
