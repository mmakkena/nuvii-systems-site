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
    <section id="integrations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nuvii-text mb-6">
            Integrations
          </h2>
          <p className="text-xl text-nuvii-text font-semibold mb-3">
            Designed to complement existing workflows — not replace them.
          </p>
          <p className="text-lg text-foreground-accent max-w-3xl mx-auto">
            Nuvii CDI Agent fits into existing CDI, coding, and RCM workflows — no rip-and-replace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {integrationGroups.map((group, index) => (
            <div
              key={index}
              className="bg-hero-background p-6 rounded-xl border border-gray-100"
            >
              <h3 className="text-xl font-bold text-nuvii-blue mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-nuvii-blue mt-1">•</span>
                    <span className="text-foreground-accent">{item}</span>
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
