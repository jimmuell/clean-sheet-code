
export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-6 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-heading-gradient bg-clip-text text-transparent">LinkToLawyers</h3>
            <p className="text-gray-600 text-sm">
              Connecting clients with experienced legal professionals for their unique needs.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-brand-purple transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Legal Resources</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-brand-purple transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
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
