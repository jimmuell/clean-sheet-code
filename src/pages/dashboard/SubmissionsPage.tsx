
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const SubmissionsPage = () => {
  const [activeTab, setActiveTab] = useState("all-submissions");

  // Mock data for the submissions
  const mockSubmissions = [
    {
      id: 1,
      client: "Sarah Johnson",
      category: "Family Law",
      status: "Requested",
      urgency: "high",
      attorney: "James L Mueller"
    },
    {
      id: 2,
      client: "Sarah Johnson",
      category: "Family Law",
      status: "Quoted",
      urgency: "high",
      attorney: "James L Mueller"
    },
    {
      id: 3,
      client: "Sarah Johnson",
      category: "Family Law",
      status: "Matched",
      urgency: "high",
      attorney: "James L Mueller"
    },
    {
      id: 4,
      client: "Sarah Johnson",
      category: "Family Law",
      status: "Matched",
      urgency: "low",
      attorney: "James L Mueller"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Client Dashboard</h1>
        <p className="text-muted-foreground text-lg mt-1">
          Manage your case submissions and legal requests
        </p>
      </div>

      <Tabs 
        defaultValue="all-submissions" 
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="bg-background border-b w-full justify-start rounded-none h-auto p-0 mb-6">
          <TabsTrigger 
            value="all-submissions" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-3"
          >
            All Submissions <Badge className="ml-2 bg-gray-200 text-gray-700 hover:bg-gray-200">4</Badge>
          </TabsTrigger>
          <TabsTrigger 
            value="matched-attorneys" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-3"
          >
            Matched Attorneys <Badge className="ml-2 bg-gray-200 text-gray-700 hover:bg-gray-200">2</Badge>
          </TabsTrigger>
          <TabsTrigger 
            value="attorney-offers" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-3"
          >
            Attorney Offers <Badge className="ml-2 bg-gray-200 text-gray-700 hover:bg-gray-200">1</Badge>
          </TabsTrigger>
          <TabsTrigger 
            value="accepted-quotes" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-3"
          >
            Accepted Quotes <Badge className="ml-2 bg-gray-200 text-gray-700 hover:bg-gray-200">0</Badge>
          </TabsTrigger>
          <TabsTrigger 
            value="completed-cases" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-3"
          >
            Completed Cases <Badge className="ml-2 bg-gray-200 text-gray-700 hover:bg-gray-200">0</Badge>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all-submissions" className="mt-0">
          <Card className="shadow-sm border">
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl">All Submissions</CardTitle>
              <p className="text-muted-foreground">View all your legal submissions</p>
            </CardHeader>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="font-semibold text-gray-500">CLIENT</TableHead>
                    <TableHead className="font-semibold text-gray-500">CATEGORY</TableHead>
                    <TableHead className="font-semibold text-gray-500">STATUS</TableHead>
                    <TableHead className="font-semibold text-gray-500">URGENCY</TableHead>
                    <TableHead className="font-semibold text-gray-500">ATTORNEY</TableHead>
                    <TableHead className="font-semibold text-gray-500">ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockSubmissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell>{submission.client}</TableCell>
                      <TableCell>{submission.category}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {submission.status}
                          <ChevronDown size={16} className="ml-1" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={submission.urgency === "high" ? "destructive" : "outline"}
                          className={submission.urgency === "high" ? "bg-red-100 text-red-800 hover:bg-red-100" : "bg-green-100 text-green-800 hover:bg-green-100"}
                        >
                          {submission.urgency}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {submission.attorney}
                          <ChevronDown size={16} className="ml-1" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="secondary" className="bg-gray-900 text-white hover:bg-gray-800">
                          View Case
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="matched-attorneys" className="mt-0">
          <Card className="shadow-sm border">
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl">Matched Attorneys</CardTitle>
              <p className="text-muted-foreground">View your matched attorneys</p>
            </CardHeader>
            <CardContent className="pt-6">
              <Table>
                {/* Similar table structure as the all submissions tab */}
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="font-semibold text-gray-500">CLIENT</TableHead>
                    <TableHead className="font-semibold text-gray-500">CATEGORY</TableHead>
                    <TableHead className="font-semibold text-gray-500">STATUS</TableHead>
                    <TableHead className="font-semibold text-gray-500">URGENCY</TableHead>
                    <TableHead className="font-semibold text-gray-500">ATTORNEY</TableHead>
                    <TableHead className="font-semibold text-gray-500">ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockSubmissions.filter(s => s.status === "Matched").map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell>{submission.client}</TableCell>
                      <TableCell>{submission.category}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {submission.status}
                          <ChevronDown size={16} className="ml-1" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={submission.urgency === "high" ? "destructive" : "outline"}
                          className={submission.urgency === "high" ? "bg-red-100 text-red-800 hover:bg-red-100" : "bg-green-100 text-green-800 hover:bg-green-100"}
                        >
                          {submission.urgency}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {submission.attorney}
                          <ChevronDown size={16} className="ml-1" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="secondary" className="bg-gray-900 text-white hover:bg-gray-800">
                          View Case
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Add remaining tabs with similar structure */}
        <TabsContent value="attorney-offers" className="mt-0">
          <Card className="shadow-sm border">
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl">Attorney Offers</CardTitle>
              <p className="text-muted-foreground">View offers from attorneys</p>
            </CardHeader>
            <CardContent>
              <p>Attorney offers content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="accepted-quotes" className="mt-0">
          <Card className="shadow-sm border">
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl">Accepted Quotes</CardTitle>
              <p className="text-muted-foreground">View your accepted quotes</p>
            </CardHeader>
            <CardContent>
              <p>No accepted quotes available.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed-cases" className="mt-0">
          <Card className="shadow-sm border">
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl">Completed Cases</CardTitle>
              <p className="text-muted-foreground">View your completed cases</p>
            </CardHeader>
            <CardContent>
              <p>No completed cases available.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SubmissionsPage;
