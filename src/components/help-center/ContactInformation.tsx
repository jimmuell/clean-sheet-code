
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { SettingsSectionCard } from "@/pages/dashboard/settings";

interface ContactOption {
  title: string;
  description: string;
  contact: string;
  phone: string;
}

interface ContactInformationProps {
  contactOptions: ContactOption[];
}

const ContactInformation = ({ contactOptions }: ContactInformationProps) => {
  return (
    <SettingsSectionCard title="Contact Information">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactOptions.map((option, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{option.title}</CardTitle>
              <CardDescription>{option.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <div className="font-medium">Email:</div>
                <div className="text-muted-foreground">{option.contact}</div>
              </div>
              <div>
                <div className="font-medium">Phone:</div>
                <div className="text-muted-foreground">{option.phone}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Alert className="mt-8 bg-muted">
        <Info className="h-4 w-4" />
        <AlertTitle>Business Hours</AlertTitle>
        <AlertDescription>
          Our support team is available Monday through Friday, 9AM to 5PM EST.
          Response times may vary during weekends and holidays.
        </AlertDescription>
      </Alert>
    </SettingsSectionCard>
  );
};

export default ContactInformation;
