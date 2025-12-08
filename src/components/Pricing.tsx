export default function Pricing() {
  return (
    <section id="pricing" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nuvii-text mb-6">
            Enterprise Pricing & Deployment Options
          </h2>
          <p className="text-xl text-nuvii-text font-semibold mb-4">
            Pricing is based on deployment model, usage patterns, and compliance requirements.
          </p>
          <p className="text-lg text-foreground-accent max-w-3xl mx-auto">
            Enterprise deployments are customized and provisioned within customer-controlled environments.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-hero-background rounded-2xl p-10 border border-gray-200">
          <div className="text-center mb-8">
            <p className="text-lg text-foreground-accent leading-relaxed">
              Nuvii CDI Agent is deployed as a private instance tailored to your organization's needs — whether in your own VPC, on-premise infrastructure, or air-gapped environment. Pricing reflects deployment complexity, data volume, and integration requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demo" className="btn-primary text-center">
              Request Enterprise Demo
            </a>
            <a href="/demo" className="btn-secondary text-center">
              Discuss Deployment Options
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
