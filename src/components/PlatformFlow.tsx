export default function PlatformFlow() {
  const outputs = [
    { title: "Documentation Gaps", description: "Missing specificity, severity, and medical necessity" },
    { title: "Coding Opportunities", description: "ICD-10, CPT, and modifier suggestions" },
    { title: "HCC Capture", description: "Risk adjustment and chronic condition insights" },
    { title: "Evidence + Explanation", description: "Clinical rationale supporting every output" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Input */}
          <div className="bg-hero-background border border-gray-200 rounded-xl px-8 py-4 text-center">
            <p className="text-lg font-semibold text-nuvii-text">Clinical Note</p>
          </div>

          {/* Arrow */}
          <div className="text-nuvii-blue text-3xl leading-none py-2" aria-hidden="true">
            &#8595;
          </div>

          {/* Platform */}
          <div className="bg-nuvii-gradient text-white rounded-xl px-8 py-4 text-center shadow-md">
            <p className="text-lg font-semibold">Nuvii Clinical Intelligence Platform</p>
          </div>

          {/* Arrow */}
          <div className="text-nuvii-blue text-3xl leading-none py-2" aria-hidden="true">
            &#8595;
          </div>

          {/* Output cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {outputs.map((item, index) => (
              <div
                key={index}
                className="bg-hero-background border border-gray-200 rounded-xl p-4 text-center"
              >
                <p className="font-semibold text-nuvii-text mb-1">{item.title}</p>
                <p className="text-sm text-foreground-accent">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
