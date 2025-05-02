
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  label: string;
  description?: string;
  className?: string;
  onChange: (file: File | null) => void;
}

export const FileUpload = ({ label, description, className, onChange }: FileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    onChange(selectedFile);
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files?.length) {
      const selectedFile = e.dataTransfer.files[0];
      setFile(selectedFile);
      onChange(selectedFile);
    }
  };
  
  const removeFile = () => {
    setFile(null);
    onChange(null);
  };
  
  return (
    <div className={cn("space-y-2", className)}>
      <p className="text-sm font-medium">{label}</p>
      {file ? (
        <div className="flex items-center justify-between p-3 bg-background border rounded-md">
          <div className="flex items-center space-x-2">
            <Check className="h-4 w-4 text-green-500" />
            <span className="text-sm text-muted-foreground truncate max-w-[200px]">
              {file.name}
            </span>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0"
            onClick={removeFile}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      ) : (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "flex flex-col items-center justify-center border-2 border-dashed rounded-md p-4 transition-colors",
            isDragging 
              ? "border-primary/50 bg-primary/5" 
              : "border-muted-foreground/25 hover:border-primary/50 hover:bg-primary/5"
          )}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <Upload className="h-6 w-6 text-muted-foreground mb-1" />
            <p className="text-sm font-medium">
              Drop file here or{" "}
              <label 
                htmlFor={`file-upload-${label.replace(/\s+/g, '-').toLowerCase()}`}
                className="text-primary underline cursor-pointer"
              >
                browse
              </label>
            </p>
            {description && (
              <p className="text-xs text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
          <input
            id={`file-upload-${label.replace(/\s+/g, '-').toLowerCase()}`}
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
};
