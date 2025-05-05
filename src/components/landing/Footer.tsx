
export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 px-6 border-t relative">
      <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-brand-blue opacity-5 blur-3xl"></div>
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-brand-purple opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-heading-gradient bg-clip-text text-transparent">LinkToLawyers</h3>
            <p className="text-gray-700 text-sm">
              Connecting clients with experienced legal professionals for their unique needs.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-gray-800">Resources</h4>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li><a href="#" className="hover:text-brand-purple transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Legal Resources</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-gray-800">Company</h4>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li><a href="#" className="hover:text-brand-purple transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-gray-800">Legal</h4>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
          <p>© 2025 LinkToLawyers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
