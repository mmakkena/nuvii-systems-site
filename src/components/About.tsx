export default function About() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nuvii-text mb-6">
            About Nuvii Systems
          </h2>
          <p className="text-xl text-foreground-accent mb-4">
            Nuvii Systems builds AI platforms that bring clinical intelligence to healthcare documentation, coding, and revenue workflows.
          </p>
          <p className="text-xl text-foreground-accent mb-4">
            The <strong className="text-nuvii-blue">Nuvii Clinical Intelligence Platform</strong> analyzes clinical documentation to detect documentation gaps, coding opportunities, and risk capture insights — helping healthcare organizations improve coding accuracy and compliant reimbursement.
          </p>
          <p className="text-xl text-nuvii-text font-semibold">
            Designed for regulated healthcare environments, Nuvii delivers explainable AI that operates within secure healthcare infrastructure while keeping PHI protected.
          </p>
        </div>
      </div>
    </section>
  );
}
