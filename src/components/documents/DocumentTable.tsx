
import React from "react";
import { Download, Trash2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadDate: string;
}

interface DocumentTableProps {
  documents: Document[];
}

const DocumentTable = ({ documents }: DocumentTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Date Uploaded</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {documents.map((doc) => (
          <TableRow key={doc.id}>
            <TableCell className="font-medium flex items-center gap-2">
              <FileText className="h-4 w-4 text-blue-500" />
              {doc.name}
            </TableCell>
            <TableCell>{doc.type}</TableCell>
            <TableCell>{doc.size}</TableCell>
            <TableCell>{doc.uploadDate}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DocumentTable;
