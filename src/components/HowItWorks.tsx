export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-hero-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nuvii-text mb-6">
            How Nuvii CDI Agent Works
          </h2>
          <p className="text-xl text-foreground-accent max-w-3xl mx-auto mb-4">
            One AI platform with two deployment modes — so you choose how and where intelligence runs.
          </p>
          <p className="text-2xl text-nuvii-blue font-semibold mb-3">
            Same AI. Same rules. Same outputs.<br/>Different access patterns.
          </p>
          <p className="text-xl text-nuvii-text font-bold">
            No data silos. No feature differences. No security tradeoffs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* API Services Mode */}
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
            <div className="inline-block px-4 py-2 bg-nuvii-gradient text-white rounded-lg font-semibold mb-6">
              Mode 1
            </div>
            <h3 className="text-3xl font-bold text-nuvii-text mb-6">
              API Services
            </h3>
            <p className="text-lg text-foreground-accent mb-6">
              SaaS or Private VPC
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">RESTful endpoints</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">Automated workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">Integrates with EHRs, RCM tools, billing systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">High throughput with enterprise SLAs</span>
              </li>
            </ul>
          </div>

          {/* MCP Agent Mode */}
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
            <div className="inline-block px-4 py-2 bg-nuvii-gradient text-white rounded-lg font-semibold mb-6">
              Mode 2
            </div>
            <h3 className="text-3xl font-bold text-nuvii-text mb-6">
              MCP Agent
            </h3>
            <p className="text-lg text-foreground-accent mb-6">
              Local AI Assistant
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">Works in Claude Desktop, VS Code, or internal applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">Ideal for CDI specialists and coding teams</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">Zero PHI egress — processes data inside your environment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">✓</span>
                <span className="text-foreground-accent">Deployable on ECS Fargate or on-prem</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
