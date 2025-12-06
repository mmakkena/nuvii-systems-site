export default function CTA() {
  return (
    <section className="py-20 bg-nuvii-gradient">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Modernize CDI, coding, and revenue intelligence — without compromising security or control.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-nuvii-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-2xl w-full sm:w-auto">
            Schedule a Demo
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all w-full sm:w-auto">
            Discuss Deployment Options
          </button>
        </div>
      </div>
    </section>
  );
}
