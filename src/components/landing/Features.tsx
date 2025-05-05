
import { ArrowRight } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-16 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 bg-heading-gradient bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Find, Compare & Negotiate Legal Fees
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center relative z-10">
            <div className="bg-brand-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-brand-purple">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Submit Your Case</h3>
            <p className="text-gray-600 mb-4">
              Fill out our simple form with details about your legal needs.
            </p>
            <a href="#" className="text-brand-purple flex items-center justify-center gap-1 hover:gap-2 transition-all font-medium">
              Learn more <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center relative z-10">
            <div className="bg-brand-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-brand-purple">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Get Matched</h3>
            <p className="text-gray-600 mb-4">
              Our system matches you with attorneys specialized in your case type.
            </p>
            <a href="#" className="text-brand-purple flex items-center justify-center gap-1 hover:gap-2 transition-all font-medium">
              Learn more <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center relative z-10">
            <div className="bg-brand-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-brand-purple">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Connect & Resolve</h3>
            <p className="text-gray-600 mb-4">
              Communicate securely and get the legal help you need.
            </p>
            <a href="#" className="text-brand-purple flex items-center justify-center gap-1 hover:gap-2 transition-all font-medium">
              Learn more <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decorative element */}
      <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-brand-blue opacity-5 blur-3xl"></div>
    </section>
  );
};
