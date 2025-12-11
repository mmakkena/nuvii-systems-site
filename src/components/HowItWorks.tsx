export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 bg-hero-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nuvii-text mb-6">
            Deployment Models for Healthcare AI
          </h2>
          <p className="text-xl text-foreground-accent max-w-3xl mx-auto mb-4">
            One AI platform. Two deployment models. Full control over where intelligence runs.
          </p>
          <p className="text-lg text-foreground-accent max-w-3xl mx-auto mb-3">
            The same AI logic, rules, and outputs power every deployment.<br/>
            What changes is how teams access it — never what it does or how it behaves.
          </p>
          <p className="text-xl text-nuvii-text font-bold">
            No data silos. No feature gaps. No security tradeoffs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Deployment Model 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
            <div className="inline-block px-4 py-2 bg-nuvii-gradient text-white rounded-lg font-semibold mb-6">
              Deployment Model 1
            </div>
            <h3 className="text-3xl font-bold text-nuvii-text mb-3">
              API Services
            </h3>
            <p className="text-lg text-foreground-accent mb-6">
              (Private VPC or Managed Private Environment)
            </p>
            <p className="text-base text-nuvii-text font-semibold mb-6 italic">
              Ideal for system-to-system integration and automated workflows.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">RESTful APIs for CDI, coding, and revenue intelligence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">Integrates with EHRs, RCM platforms, and billing systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">High-throughput processing with enterprise-grade SLAs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">Deployable in a customer-owned Private VPC</span>
              </li>
            </ul>
          </div>

          {/* Deployment Model 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
            <div className="inline-block px-4 py-2 bg-nuvii-gradient text-white rounded-lg font-semibold mb-6">
              Deployment Model 2
            </div>
            <h3 className="text-3xl font-bold text-nuvii-text mb-3">
              MCP Agent
            </h3>
            <p className="text-lg text-foreground-accent mb-6">
              (Local AI Access)
            </p>
            <p className="text-base text-nuvii-text font-semibold mb-6 italic">
              Designed for hands-on use by CDI specialists and clinical coding teams.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">Works within Claude Desktop, VS Code, or internal applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">Enables interactive, human-in-the-loop workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">Zero PHI egress — all processing stays inside your environment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">Deployable on ECS Fargate or fully on-prem</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
