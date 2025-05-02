
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SubmissionFormData } from "./useSubmissionForm";

interface CaseDetailsStepProps {
  formData: SubmissionFormData;
  updateFormData: (field: keyof SubmissionFormData, value: string) => void;
}

export const CaseDetailsStep = ({ formData, updateFormData }: CaseDetailsStepProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="caseType">Case Type</Label>
        <Select 
          value={formData.caseType}
          onValueChange={(value) => updateFormData("caseType", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select case type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="family">Family Law</SelectItem>
            <SelectItem value="criminal">Criminal Defense</SelectItem>
            <SelectItem value="personal_injury">Personal Injury</SelectItem>
            <SelectItem value="estate">Estate Planning</SelectItem>
            <SelectItem value="business">Business Law</SelectItem>
            <SelectItem value="immigration">Immigration</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Case Description</Label>
        <Textarea
          id="description"
          placeholder="Please describe your legal issue"
          rows={4}
          value={formData.description}
          onChange={(e) => updateFormData("description", e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="urgency">Urgency Level</Label>
        <Select 
          value={formData.urgency}
          onValueChange={(value) => updateFormData("urgency", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select urgency level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low - No immediate deadline</SelectItem>
            <SelectItem value="medium">Medium - Needed within weeks</SelectItem>
            <SelectItem value="high">High - Needed within days</SelectItem>
            <SelectItem value="urgent">Urgent - Immediate assistance required</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
