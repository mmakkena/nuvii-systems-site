export default function WhyNuvii() {
  const reasons = [
    {
      icon: "🏥",
      title: "Built for Healthcare",
      description: "Deep clinical and RCM expertise combined with modern AI."
    },
    {
      icon: "🧠",
      title: "Hybrid AI, Not a Black Box",
      description: "Rules + AI + explainability built-in."
    },
    {
      icon: "🔒",
      title: "Secure & Compliant",
      description: "Zero PHI egress with VPC-native or on-prem deployments."
    },
    {
      icon: "🚀",
      title: "Flexible & Fast Deployment",
      description: "Deploy in managed environments, private VPC, or fully on-prem — and go live in days, not months."
    },
    {
      icon: "🧾",
      title: "Built for CMS, Auditors & Clinicians",
      description: "Outputs designed to stand up to scrutiny."
    },
    {
      icon: "🧩",
      title: "Modular & Extensible",
      description: "Use one module or the entire CDI intelligence platform."
    }
  ];

  return (
    <section className="py-12 bg-hero-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nuvii-text mb-6">
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
