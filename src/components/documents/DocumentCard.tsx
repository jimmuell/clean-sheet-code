
import React from "react";
import { Download, Trash2, FileText } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Document } from "./DocumentTable";

interface DocumentCardProps {
  document: Document;
}

const DocumentCard = ({ document }: DocumentCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <FileText className="h-5 w-5 text-blue-500" />
          {document.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground">
          {document.type} · {document.size}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Uploaded on {document.uploadDate}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="flex justify-between w-full">
          <Button variant="ghost" size="sm" className="text-sm">
            <Download className="h-3 w-3 mr-1" />
            Download
          </Button>
          <Button variant="ghost" size="sm" className="text-sm text-red-500">
            <Trash2 className="h-3 w-3 mr-1" />
            Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DocumentCard;
