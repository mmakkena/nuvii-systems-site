export default function Integrations() {
  return (
    <section id="integrations" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nuvii-text mb-4">
            Integrations with EHR and CDI Workflows
          </h2>
          <p className="text-lg text-nuvii-text font-semibold mb-2">
            Designed to complement existing workflows — not replace them.
          </p>
          <p className="text-base text-foreground-accent max-w-3xl mx-auto">
            The Nuvii Clinical Intelligence Platform integrates with existing CDI, coding, and revenue cycle workflows without requiring system replacement.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-base text-foreground-accent font-semibold mb-4 text-center">
            Supported integrations include:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-foreground-accent">
            <li className="flex items-start gap-2">
              <span className="text-nuvii-blue mt-1">&#x2022;</span>
              EHR systems (Epic, Cerner, athenahealth via FHIR)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-nuvii-blue mt-1">&#x2022;</span>
              CDI workflows and chart review systems
            </li>
            <li className="flex items-start gap-2">
              <span className="text-nuvii-blue mt-1">&#x2022;</span>
              RCM and coding platforms
            </li>
            <li className="flex items-start gap-2">
              <span className="text-nuvii-blue mt-1">&#x2022;</span>
              Internal analytics and reporting pipelines
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
