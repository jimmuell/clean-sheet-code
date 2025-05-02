
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, MessageSquare, Info } from "lucide-react";

const QuickHelpCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center space-x-2">
          <BookOpen className="h-5 w-5" />
          <div>
            <CardTitle>Documentation</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-4">
            Browse detailed guides and documentation for all features
          </CardDescription>
          <Button variant="outline" size="sm" className="w-full">
            View Documentation
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center space-x-2">
          <MessageSquare className="h-5 w-5" />
          <div>
            <CardTitle>Community Forum</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-4">
            Connect with other users and get help from the community
          </CardDescription>
          <Button variant="outline" size="sm" className="w-full">
            Visit Forum
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center space-x-2">
          <Info className="h-5 w-5" />
          <div>
            <CardTitle>Contact Support</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-4">
            Can't find what you need? Contact our support team directly
          </CardDescription>
          <Button variant="outline" size="sm" className="w-full">
            Contact Us
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickHelpCards;
