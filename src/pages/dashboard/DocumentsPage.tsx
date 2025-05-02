
import { useState } from "react";
import DocumentUploadButton from "@/components/documents/DocumentUploadButton";
import DocumentOverview from "@/components/documents/DocumentOverview";
import RecentDocuments from "@/components/documents/RecentDocuments";
import { Document } from "@/components/documents/DocumentTable";
import FileUploadDialog from "@/components/documents/FileUploadDialog";

const DocumentsPage = () => {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      name: "Contract_Agreement.pdf",
      type: "PDF",
      size: "2.4 MB",
      uploadDate: "May 1, 2025"
    },
    {
      id: "2",
      name: "Legal_Brief.docx",
      type: "DOCX",
      size: "1.8 MB",
      uploadDate: "April 28, 2025"
    },
    {
      id: "3",
      name: "Case_Summary_2025.pdf",
      type: "PDF",
      size: "3.2 MB",
      uploadDate: "April 15, 2025"
    }
  ]);

  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);

  const handleFileUpload = () => {
    setIsUploadDialogOpen(true);
  };

  const handleUploadComplete = (newDocument: Document) => {
    setDocuments(prev => [newDocument, ...prev]);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Documents</h1>
        <DocumentUploadButton onClick={handleFileUpload} />
      </div>

      <div className="grid gap-6">
        {/* Document Overview Card */}
        <DocumentOverview 
          documents={documents} 
          onUploadClick={handleFileUpload} 
        />

        {/* Recent Documents Grid */}
        <RecentDocuments documents={documents} />
      </div>

      {/* Upload Dialog */}
      <FileUploadDialog
        open={isUploadDialogOpen}
        onOpenChange={setIsUploadDialogOpen}
        onUploadComplete={handleUploadComplete}
      />
    </>
  );
};

export default DocumentsPage;
