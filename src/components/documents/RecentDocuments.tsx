
import React from "react";
import DocumentCard from "./DocumentCard";
import { Document } from "./DocumentTable";

interface RecentDocumentsProps {
  documents: Document[];
}

const RecentDocuments = ({ documents }: RecentDocumentsProps) => {
  return (
    <>
      <h2 className="text-xl font-semibold mt-6 mb-4">Recent Documents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((doc) => (
          <DocumentCard key={doc.id} document={doc} />
        ))}
      </div>
    </>
  );
};

export default RecentDocuments;
