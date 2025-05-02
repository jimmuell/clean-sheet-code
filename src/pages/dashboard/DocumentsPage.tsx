
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Download, Trash2, FilePlus } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Sample document data
interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadDate: string;
}

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
        <Button onClick={handleFileUpload} className="gap-2">
          <Upload className="h-4 w-4" />
          Upload Document
        </Button>
      </div>

      <div className="grid gap-6">
        {/* Document Overview Card */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle>Your Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground mb-4">
              Access and manage all your legal documents in one secure place.
            </div>
            
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
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="gap-2 w-full" onClick={handleFileUpload}>
              <FilePlus className="h-4 w-4" />
              Add New Document
            </Button>
          </CardFooter>
        </Card>

        {/* Recent Documents Grid */}
        <h2 className="text-xl font-semibold mt-6 mb-4">Recent Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc) => (
            <Card key={doc.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-500" />
                  {doc.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground">
                  {doc.type} · {doc.size}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Uploaded on {doc.uploadDate}
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
          ))}
        </div>
      </div>
    </>
  );
};

export default DocumentsPage;
