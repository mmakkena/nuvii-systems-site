export default function Features() {
  const layers = [
    {
      title: "Understand the Clinical Note",
      icon: "🔹",
      features: [
        {
          name: "ICD-10/CPT Semantic Search",
          description: "Search using natural language, symptoms, or synonyms with pgvector-powered semantic matching."
        },
        {
          name: "Real-time Document Analysis",
          description: "Process clinical documentation in real-time to provide immediate insights and recommendations."
        }
      ]
    },
    {
      title: "Improve Documentation Quality",
      icon: "🔹",
      features: [
        {
          name: "Clinical Documentation Gap Detection",
          description: "Detect missing specificity, acuity, comorbidities, medical necessity elements, and documentation required for accurate reimbursement."
        },
        {
          name: "CDI Query Generation",
          description: "Automatically generate compliant, physician-friendly clarification queries that improve documentation quality and reduce denials."
        }
      ]
    },
    {
      title: "Optimize Compliant Revenue",
      icon: "🔹",
      features: [
        {
          name: "Medical Coding Helper",
          description: "Accurate ICD-10/CPT suggestions, code validation, and coding completeness checks powered by semantic search and clinical LLM reasoning."
        },
        {
          name: "Revenue Optimization & HCC Insights",
          description: "Identify under-coded conditions, missed severity, HCC opportunities, and documentation improvements to maximize compliant reimbursement."
        }
      ]
    }
  ];

  return (
    <section id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nuvii-text mb-6">
            AI for Clinical Documentation, Coding & HCC
          </h2>
          <p className="text-xl text-nuvii-text font-semibold mb-4">
            A single AI platform designed to understand clinical intent, improve documentation, and optimize compliant revenue.
          </p>
        </div>

        <div className="space-y-12">
          {layers.map((layer, index) => (
            <div key={index} className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{layer.icon}</span>
                <h3 className="text-3xl font-bold text-nuvii-text">
                  {layer.title}
                </h3>
              </div>

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
