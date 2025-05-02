
import { SubmissionForm } from "@/components/submission";
import { Button } from "@/components/ui/button";

interface FormSectionProps {
  setShowForm: (show: boolean) => void;
}

export const FormSection = ({ setShowForm }: FormSectionProps) => {
  return (
    <section className="py-10 px-6 min-h-[calc(100vh-73px)] flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
        <Button 
          variant="outline" 
          onClick={() => setShowForm(false)}
          className="mb-6 self-start"
        >
          Back to Homepage
        </Button>
        <div className="flex-1 flex items-center justify-center">
          <SubmissionForm />
        </div>
      </div>
    </section>
  );
};
