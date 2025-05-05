
import { SubmissionForm } from "@/components/submission";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface FormSectionProps {
  setShowForm: (show: boolean) => void;
}

export const FormSection = ({ setShowForm }: FormSectionProps) => {
  return (
    <section className="py-10 px-6 min-h-[calc(100vh-73px)] flex flex-col animate-fade-in">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
        <Button 
          variant="outline" 
          onClick={() => setShowForm(false)}
          className="mb-6 self-start border-gray-300 hover:bg-gray-100/50"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Homepage
        </Button>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 bg-heading-gradient bg-clip-text text-transparent">
              Tell Us About Your Legal Needs
            </h2>
            <SubmissionForm />
          </div>
        </div>
      </div>
    </section>
  );
};
