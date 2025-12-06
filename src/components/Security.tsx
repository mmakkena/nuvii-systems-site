export default function Security() {
  return (
    <section className="py-20 bg-hero-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nuvii-text mb-6">
            Security & Deployment
          </h2>
          <p className="text-xl text-foreground-accent max-w-3xl mx-auto">
            Security-first, HIPAA-ready architecture designed by Nuvii Systems
          </p>
        </div>

        {/* Key Security Principles */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-nuvii-blue">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-2xl">✓</span>
                <div className="text-lg text-nuvii-text">
                  <strong>Zero PHI egress</strong> — data never leaves your environment
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-2xl">✓</span>
                <div className="text-lg text-nuvii-text">
                  <strong>On-prem, VPC, or air-gapped deployment</strong>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-2xl">✓</span>
                <div className="text-lg text-nuvii-text">
                  <strong>Explainable AI with audit-friendly outputs</strong>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-2xl">✓</span>
                <div className="text-lg text-nuvii-text">
                  <strong>Customer-controlled models & data</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 my-12"></div>

        {/* Deployment Environments & AWS Infrastructure */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Deployment Environments */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-nuvii-text mb-6">
              Supported Environments
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">☁️</span>
                <div>
                  <div className="font-semibold text-nuvii-text">Customer VPC</div>
                  <div className="text-foreground-accent text-sm">AWS, Azure, GCP</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">🏢</span>
                <div>
                  <div className="font-semibold text-nuvii-text">Hospital On-Premise</div>
                  <div className="text-foreground-accent text-sm">Data centers</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">🔒</span>
                <div>
                  <div className="font-semibold text-nuvii-text">Air-gapped Networks</div>
                  <div className="text-foreground-accent text-sm">Maximum security</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nuvii-blue text-xl">💻</span>
                <div>
                  <div className="font-semibold text-nuvii-text">Local Workstation</div>
                  <div className="text-foreground-accent text-sm">MCP agent mode</div>
                </div>
              </li>
            </ul>
          </div>

          {/* AWS Infrastructure */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-nuvii-text mb-4">
              AWS Infrastructure
            </h3>
            <p className="text-sm text-foreground-accent mb-4">(Optional Technical Details)</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-nuvii-blue text-xs">✓</span>
                <span className="text-foreground-accent">RDS PostgreSQL</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-nuvii-blue text-xs">✓</span>
                <span className="text-foreground-accent">ElastiCache Redis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-nuvii-blue text-xs">✓</span>
                <span className="text-foreground-accent">ECS Fargate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-nuvii-blue text-xs">✓</span>
                <span className="text-foreground-accent">Amazon ECR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-nuvii-blue text-xs">✓</span>
                <span className="text-foreground-accent">Route53</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-nuvii-blue text-xs">✓</span>
                <span className="text-foreground-accent">ACM for SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-nuvii-blue text-xs">✓</span>
                <span className="text-foreground-accent">Secrets Manager</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-nuvii-blue text-xs">✓</span>
                <span className="text-foreground-accent">VPC isolation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
