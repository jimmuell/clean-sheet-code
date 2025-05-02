
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  handleGetStarted: () => void;
}

export const Hero = ({ handleGetStarted }: HeroProps) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Connect With Legal Professionals
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Get expert legal advice and representation for your specific needs.
          Our platform connects you with experienced attorneys specialized in
          your case type.
        </p>
        <Button
          onClick={handleGetStarted}
          size="lg"
          className="text-lg px-6 py-6"
        >
          Get Started <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};
