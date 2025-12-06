export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      subtitle: "Small Practices",
      guidance: "For small practices modernizing CDI and coding workflows.",
      features: [
        "Usage-based API",
        "MCP agent",
        "ICD search",
        "Basic CDI analysis",
        "Slack/Teams integration"
      ]
    },
    {
      name: "Professional",
      subtitle: "Mid-size Groups",
      guidance: "For growing groups managing revenue integrity and HCC optimization.",
      featured: true,
      features: [
        "All Starter features",
        "Revenue optimization",
        "CDI query generator",
        "Custom rules & workflows",
        "VPC deployment option"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "Hospitals & Health Systems",
      guidance: "For hospitals and health systems requiring full deployment control.",
      features: [
        "High-volume ingestion",
        "On-prem or air-gapped deployment",
        "EHR integrations",
        "Custom LLM models",
        "Dedicated support",
        "Enterprise SLAs"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nuvii-text mb-6">
            Pricing
          </h2>
          <p className="text-xl text-foreground-accent max-w-3xl mx-auto">
            Flexible pricing for practices of all sizes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.featured
                  ? 'bg-nuvii-gradient text-white shadow-2xl scale-105 border-4 border-nuvii-blue'
                  : 'bg-hero-background border border-gray-200'
              }`}
            >
              <div className="text-center mb-8">
                <h3 className={`text-3xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-nuvii-text'}`}>
                  {plan.name}
                </h3>
                <p className={`text-lg mb-3 ${plan.featured ? 'text-white/90' : 'text-foreground-accent'}`}>
                  {plan.subtitle}
                </p>
                <p className={`text-sm italic ${plan.featured ? 'text-white/80' : 'text-foreground-accent'}`}>
                  {plan.guidance}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`text-xl ${plan.featured ? 'text-white' : 'text-nuvii-blue'}`}>
                      ✓
                    </span>
                    <span className={plan.featured ? 'text-white' : 'text-foreground-accent'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all ${
                  plan.featured
                    ? 'bg-white text-nuvii-blue hover:bg-gray-100'
                    : 'bg-nuvii-gradient text-white hover:shadow-lg'
                }`}
              >
                Request Pricing
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
