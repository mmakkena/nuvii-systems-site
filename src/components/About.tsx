export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-nuvii-text mb-6">
            About Nuvii Systems
          </h2>
          <p className="text-xl text-foreground-accent mb-4">
            Nuvii Systems builds secure, AI-powered healthcare automation products for regulated clinical and revenue workflows that improve
            documentation accuracy, coding quality, and revenue integrity — without compromising PHI privacy.
          </p>
          <p className="text-xl text-foreground-accent mb-4">
            Our flagship product, <strong className="text-nuvii-blue">Nuvii CDI Agent</strong>, brings intelligent
            automation to documentation and coding teams through a deployable agent platform.
          </p>
          <p className="text-xl text-nuvii-text font-semibold">
            We believe healthcare AI should be explainable, auditable, and deployed where your data already lives — not locked inside external SaaS platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
