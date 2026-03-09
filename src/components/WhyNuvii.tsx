export default function WhyNuvii() {
  const reasons = [
    {
      icon: "🏥",
      title: "Built for Healthcare",
      description: "Deep clinical and revenue cycle expertise combined with modern AI designed for regulated environments."
    },
    {
      icon: "🧠",
      title: "Hybrid AI, Not a Black Box",
      description: "Combines rules, AI models, and explainability so every output can be understood and defended."
    },
    {
      icon: "🔒",
      title: "Secure and Compliant",
      description: "Zero PHI egress with VPC-native or on-prem deployments that meet the strictest security requirements."
    },
    {
      icon: "🚀",
      title: "Flexible and Fast Deployment",
      description: "Deploy in managed environments, private VPC, or fully on-prem and go live in days, not months."
    },
    {
      icon: "🧾",
      title: "Built for CMS, Auditors, and Clinicians",
      description: "Every output includes evidence and rationale designed to stand up to payer and regulatory scrutiny."
    },
    {
      icon: "🧩",
      title: "Modular and Extensible",
      description: "Use one capability or the entire clinical intelligence platform — adopt incrementally as needs grow."
    }
  ];

  return (
    <section className="py-12 bg-hero-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nuvii-text mb-6">
            Why Nuvii Systems
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg hover:border-nuvii-blue/30 transition-all"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-nuvii-text mb-3">
                {reason.title}
              </h3>
              <p className="text-foreground-accent">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
