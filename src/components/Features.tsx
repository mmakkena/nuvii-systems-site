export default function Features() {
  const layers = [
    {
      title: "Understand Clinical Documentation",
      subtitle: "AI analyzes clinical notes to extract diagnoses, symptoms, severity, and relevant coding context.",
      icon: "🔹",
      features: [
        {
          name: "ICD-10 and CPT semantic search",
          description: "Find relevant codes using natural language, symptoms, or clinical terminology."
        },
        {
          name: "Real-time documentation analysis",
          description: "Evaluate clinical documentation and surface insights during documentation or review."
        }
      ]
    },
    {
      title: "Improve Documentation Quality",
      subtitle: "Identify documentation gaps that impact coding accuracy and reimbursement.",
      icon: "🔹",
      features: [
        {
          name: "Clinical documentation gap detection",
          description: "Detect missing specificity, severity, comorbidities, and medical necessity elements."
        },
        {
          name: "CDI query generation",
          description: "Automatically generate compliant clarification queries to improve documentation quality."
        }
      ]
    },
    {
      title: "Optimize Coding and Revenue Integrity",
      subtitle: "Support coding teams with clinically grounded coding insights.",
      icon: "🔹",
      features: [
        {
          name: "Medical coding assistance",
          description: "Suggest ICD-10 and CPT codes and validate coding completeness."
        },
        {
          name: "Risk capture and HCC insights",
          description: "Identify under-documented conditions, missed severity, and potential HCC opportunities."
        }
      ]
    }
  ];

  return (
    <section id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nuvii-text mb-6">
            AI Clinical Intelligence for Documentation, Coding, and Risk Capture
          </h2>
          <p className="text-xl text-foreground-accent mb-4 max-w-3xl mx-auto">
            The Nuvii Clinical Intelligence Platform analyzes clinical documentation to identify documentation gaps, coding opportunities, and risk capture insights.
          </p>
          <p className="text-xl text-nuvii-text font-semibold mb-4 max-w-3xl mx-auto">
            It acts as an intelligence layer that helps clinical, CDI, and coding teams understand documentation more accurately and improve compliant reimbursement.
          </p>
        </div>

        <div className="space-y-12">
          {layers.map((layer, index) => (
            <div key={index} className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{layer.icon}</span>
                <h3 className="text-3xl font-bold text-nuvii-text">
                  {layer.title}
                </h3>
              </div>

              <p className="text-foreground-accent mb-3 ml-12">{layer.subtitle}</p>

              <p className="text-sm font-semibold text-nuvii-blue uppercase tracking-wide mb-4 ml-12">Capabilities</p>

              <div className="grid md:grid-cols-2 gap-6">
                {layer.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-hero-background p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-nuvii-blue/30 transition-all"
                  >
                    <h4 className="text-xl font-bold text-nuvii-text mb-3">
                      {feature.name}
                    </h4>
                    <p className="text-foreground-accent">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
