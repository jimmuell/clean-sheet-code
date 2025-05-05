
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthContainerProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const AuthContainer = ({ title, description, children }: AuthContainerProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 p-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-brand-purple opacity-10 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-brand-blue opacity-10 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-brand-purple/20 opacity-10 blur-3xl"></div>
      
      <Card className="w-full max-w-md shadow-xl border border-gray-100 relative z-10">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold bg-heading-gradient bg-clip-text text-transparent drop-shadow-sm">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};
