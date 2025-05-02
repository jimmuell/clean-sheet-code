
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "./FileUpload";
import { Badge } from "@/components/ui/badge";
import { Check, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AttorneyVerificationFormProps {
  onSubmit: () => void;
  onCancel: () => void;
}

export const AttorneyVerificationForm = ({ onSubmit, onCancel }: AttorneyVerificationFormProps) => {
  const [barNumber, setBarNumber] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [yearsOfPractice, setYearsOfPractice] = useState("");
  const [specialties, setSpecialties] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we'd normally validate and submit data, but for now we just call the onSubmit callback
    onSubmit();
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
          <ShieldCheck className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-xl font-semibold">Attorney Verification</h2>
        <p className="text-muted-foreground mt-1">
          Please provide additional information to verify your credentials
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">Professional Information</CardTitle>
          <CardDescription>
            This information will be verified by our team
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="barNumber">Bar Number / License ID</Label>
                <Input
                  id="barNumber"
                  value={barNumber}
                  onChange={(e) => setBarNumber(e.target.value)}
                  placeholder="Enter your bar number"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="jurisdiction">Jurisdiction</Label>
                <Input
                  id="jurisdiction"
                  value={jurisdiction}
                  onChange={(e) => setJurisdiction(e.target.value)}
                  placeholder="State/Province"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="yearsOfPractice">Years of Practice</Label>
                <Input
                  id="yearsOfPractice"
                  type="number"
                  min="0"
                  value={yearsOfPractice}
                  onChange={(e) => setYearsOfPractice(e.target.value)}
                  placeholder="Years of legal practice"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="specialties">Areas of Specialty</Label>
                <Input
                  id="specialties"
                  value={specialties}
                  onChange={(e) => setSpecialties(e.target.value)}
                  placeholder="e.g., Family Law, Corporate Law"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Required Documents</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FileUpload 
                  label="Bar Card / License" 
                  description="Upload a clear image of your license" 
                  onChange={() => {}} 
                />
                <FileUpload 
                  label="Photo ID" 
                  description="Government-issued ID for verification" 
                  onChange={() => {}} 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                placeholder="Please provide any additional information that might help with verification"
                className="min-h-[100px]"
              />
            </div>
            
            <div className="mt-4 pt-4 border-t flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                  Verification Required
                </Badge>
                <span className="text-sm text-muted-foreground">Your account will require approval</span>
              </div>
              <div className="flex space-x-2">
                <Button onClick={onCancel} variant="outline" type="button">Cancel</Button>
                <Button type="submit">Submit for Verification</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
