
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchBar from "@/components/help-center/SearchBar";
import QuickHelpCards from "@/components/help-center/QuickHelpCards";
import FAQAccordion from "@/components/help-center/FAQAccordion";
import GuidesGrid from "@/components/help-center/GuidesGrid";
import ContactInformation from "@/components/help-center/ContactInformation";
import SupportTicketForm from "@/components/help-center/SupportTicketForm";
import { faqs, guides, contactOptions } from "@/components/help-center/data/help-center-data";

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Help Center</h1>
        <p className="text-muted-foreground">
          Find answers, guides, and support resources
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Quick Help Cards */}
      <QuickHelpCards />

      {/* Main Content Tabs */}
      <Tabs defaultValue="faqs" className="w-full">
        <TabsList className="w-full max-w-md grid grid-cols-3 mx-auto mb-8">
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>

        {/* FAQs Tab */}
        <TabsContent value="faqs">
          <FAQAccordion 
            faqs={faqs}
            searchQuery={searchQuery}
            onClearSearch={() => setSearchQuery("")}
          />
        </TabsContent>

        {/* Guides Tab */}
        <TabsContent value="guides">
          <GuidesGrid guides={guides} />
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact">
          <ContactInformation contactOptions={contactOptions} />
          <SupportTicketForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HelpCenterPage;
