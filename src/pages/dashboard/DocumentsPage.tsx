
import { useState } from "react";
import DocumentUploadButton from "@/components/documents/DocumentUploadButton";
import DocumentOverview from "@/components/documents/DocumentOverview";
import RecentDocuments from "@/components/documents/RecentDocuments";
import { Document } from "@/components/documents/DocumentTable";

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

  const handleFileUpload = () => {
    // In a real implementation, this would open a file picker
    // and handle the upload to a backend service
    console.log("File upload clicked");
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
    </>
  );
};

export default DocumentsPage;
