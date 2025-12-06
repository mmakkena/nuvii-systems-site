export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="bg-nuvii-gradient bg-clip-text text-transparent">Nuvii Systems</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-nuvii-text hover:text-nuvii-blue transition-colors">Features</a>
            <a href="#how-it-works" className="text-nuvii-text hover:text-nuvii-blue transition-colors">How It Works</a>
            <a href="#pricing" className="text-nuvii-text hover:text-nuvii-blue transition-colors">Pricing</a>
            <a href="#integrations" className="text-nuvii-text hover:text-nuvii-blue transition-colors">Integrations</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="btn-secondary text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
              Get a Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
