
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import DocumentTable from "./DocumentTable";
import DocumentUploadButton from "./DocumentUploadButton";
import { Document } from "./DocumentTable";

interface DocumentOverviewProps {
  documents: Document[];
  onUploadClick: () => void;
}

const DocumentOverview = ({ documents, onUploadClick }: DocumentOverviewProps) => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle>Your Documents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground mb-4">
          Access and manage all your legal documents in one secure place.
        </div>
        
        <DocumentTable documents={documents} />
      </CardContent>
      <CardFooter>
        <DocumentUploadButton 
          onClick={onUploadClick} 
          variant="outline" 
          fullWidth={true} 
        />
      </CardFooter>
    </Card>
  );
};

export default DocumentOverview;
