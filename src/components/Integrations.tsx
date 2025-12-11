export default function Integrations() {
  const integrationGroups = [
    {
      category: "Collaboration",
      items: ["Slack", "Microsoft Teams"]
    },
    {
      category: "EHRs",
      items: ["Epic, Cerner, athenaHealth (FHIR or workflow hooks)"]
    },
    {
      category: "Data Ingestion",
      items: ["FHIR", "S3", "Document folders"]
    },
    {
      category: "Workflow Tools",
      items: ["Jira", "ServiceNow", "Internal queues"]
    }
  ];

  return (
    <section id="integrations" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nuvii-text mb-4">
            Integrations with EHRs and CDI Workflows
          </h2>
          <p className="text-lg text-nuvii-text font-semibold mb-2">
            Designed to complement existing workflows — not replace them.
          </p>
          <p className="text-base text-foreground-accent max-w-3xl mx-auto">
            Nuvii CDI Agent fits into existing CDI, coding, and RCM workflows — no rip-and-replace.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {integrationGroups.map((group, index) => (
            <div
              key={index}
              className="bg-hero-background p-5 rounded-xl border border-gray-100"
            >
              <h3 className="text-lg font-bold text-nuvii-blue mb-3">
                {group.category}
              </h3>
              <ul className="space-y-1.5">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-nuvii-blue mt-1 text-sm">•</span>
                    <span className="text-foreground-accent text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
