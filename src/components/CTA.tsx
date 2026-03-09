export default function CTA() {
  return (
    <section className="py-12 bg-nuvii-gradient">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Modernize Documentation, Coding, and Revenue Intelligence
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Improve coding accuracy, increase risk capture, and strengthen compliant reimbursement — without compromising security or control.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/demo" className="bg-white text-nuvii-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-2xl w-full sm:w-auto text-center">
            Request Enterprise Demo
          </a>
          <a href="/demo" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all w-full sm:w-auto text-center">
            Discuss Deployment Options
          </a>
        </div>
      </div>
    </section>
  );
}
