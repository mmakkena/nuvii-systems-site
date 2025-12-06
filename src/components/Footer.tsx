export default function Footer() {
  return (
    <footer className="bg-nuvii-dark-bg text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-nuvii-gradient bg-clip-text text-transparent">Nuvii Systems</span>
            </h3>
            <p className="text-gray-400">
              AI-Powered Healthcare Automation
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-nuvii-blue transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-nuvii-blue transition-colors">Pricing</a></li>
              <li><a href="#integrations" className="hover:text-nuvii-blue transition-colors">Integrations</a></li>
              <li><a href="#how-it-works" className="hover:text-nuvii-blue transition-colors">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-nuvii-blue transition-colors">About</a></li>
              <li><a href="#" className="hover:text-nuvii-blue transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-nuvii-blue transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-nuvii-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-nuvii-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-nuvii-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-nuvii-blue transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-nuvii-blue transition-colors">HIPAA Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nuvii Systems. All rights reserved.</p>
          <p className="mt-2">
            <a href="https://nuviisystems.com" className="text-nuvii-blue hover:underline">
              nuviisystems.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
