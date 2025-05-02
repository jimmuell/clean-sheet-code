
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SettingsSectionCard } from "@/pages/dashboard/settings";

interface Guide {
  title: string;
  description: string;
  url: string;
}

interface GuidesGridProps {
  guides: Guide[];
}

const GuidesGrid = ({ guides }: GuidesGridProps) => {
  return (
    <SettingsSectionCard title="User Guides">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {guides.map((guide, index) => (
          <Card key={index} className="border">
            <CardHeader>
              <CardTitle className="text-xl">{guide.title}</CardTitle>
              <CardDescription>{guide.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <a href={guide.url}>Read Guide</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </SettingsSectionCard>
  );
};

export default GuidesGrid;
