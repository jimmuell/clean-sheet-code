
import { SubmissionFormData } from "./useSubmissionForm";

interface ReviewStepProps {
  formData: SubmissionFormData;
}

export const ReviewStep = ({ formData }: ReviewStepProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-lg">Review Your Information</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Full Name</p>
          <p>{formData.fullName}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-muted-foreground">Email</p>
          <p>{formData.email}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-muted-foreground">Phone</p>
          <p>{formData.phone}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-muted-foreground">Case Type</p>
          <p>{formData.caseType.replace('_', ' ')}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-muted-foreground">Urgency</p>
          <p>{formData.urgency}</p>
        </div>
      </div>
      
      <div>
        <p className="text-sm font-medium text-muted-foreground">Case Description</p>
        <p>{formData.description}</p>
      </div>
    </div>
  );
};
