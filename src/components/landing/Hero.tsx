
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  handleGetStarted: () => void;
}

export const Hero = ({ handleGetStarted }: HeroProps) => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-heading-gradient bg-clip-text text-transparent drop-shadow-sm">
          Connect With Legal Professionals
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Our platform simplifies the process of finding and connecting with experienced lawyers, 
          ensuring you receive the best legal support tailored to your unique situation, at an affordable price.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="text-lg px-8 py-6 bg-brand-purple hover:bg-brand-purple/90 shadow-xl transition-all duration-300 font-medium"
          >
            Get Started <ArrowRight className="ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 border-gray-300 hover:bg-gray-50 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Enhanced wave divider with deeper color */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0px] z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] relative block">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#ffffff" className="fill-white shadow-md"></path>
        </svg>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-brand-purple opacity-10 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-brand-blue opacity-10 blur-3xl"></div>
    </section>
  );
};
