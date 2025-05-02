
import React from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocumentUploadButtonProps {
  onClick: () => void;
  variant?: "default" | "outline";
  fullWidth?: boolean;
}

const DocumentUploadButton = ({ 
  onClick, 
  variant = "default",
  fullWidth = false 
}: DocumentUploadButtonProps) => {
  return (
    <Button 
      onClick={onClick} 
      variant={variant} 
      className={`gap-2 ${fullWidth ? 'w-full' : ''}`}
    >
      <Upload className="h-4 w-4" />
      {variant === "outline" ? "Add New Document" : "Upload Document"}
    </Button>
  );
};

export default DocumentUploadButton;
