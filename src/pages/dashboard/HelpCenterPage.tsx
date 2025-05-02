
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SettingsSectionCard } from "@/pages/dashboard/settings";
import { Info, BookOpen, MessageSquare, Search, ListCheck } from "lucide-react";

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // FAQ data
  const faqs = [
    {
      question: "How do I submit a document?",
      answer: "Navigate to the Documents page from the dashboard sidebar, click on 'Upload Document', select your file, add any required information, and click Submit."
    },
    {
      question: "How do I message my attorney?",
      answer: "Go to the Messages page from the dashboard sidebar, select your attorney from the conversation list or start a new conversation by clicking the 'New Message' button."
    },
    {
      question: "Can I change my account information?",
      answer: "Yes. Navigate to Profile or Settings in the sidebar, where you can update your personal information, contact details, and preferences."
    },
    {
      question: "What file types are supported for document uploads?",
      answer: "Our system supports PDF, DOC, DOCX, JPG, PNG, and TXT files for upload. Maximum file size is 25MB per document."
    },
    {
      question: "How do I change my notification preferences?",
      answer: "Go to Settings > Notifications tab, where you can toggle various notification types and select your preferred delivery methods."
    }
  ];

  // Guides data
  const guides = [
    {
      title: "Getting Started Guide",
      description: "A comprehensive walkthrough of the platform's basic features",
      url: "#getting-started"
    },
    {
      title: "Document Submission Tutorial",
      description: "Learn how to properly format and submit legal documents",
      url: "#document-submission"
    },
    {
      title: "Messaging Best Practices",
      description: "Tips for effective communication with your legal team",
      url: "#messaging"
    },
    {
      title: "Understanding Your Dashboard",
      description: "A detailed explanation of all dashboard elements and metrics",
      url: "#dashboard-guide"
    }
  ];

  // Contact options
  const contactOptions = [
    {
      title: "Technical Support",
      description: "For issues with the platform functionality",
      contact: "support@linktolawyers.com",
      phone: "1-800-555-0100"
    },
    {
      title: "Billing Inquiries",
      description: "For questions about your subscription or payments",
      contact: "billing@linktolawyers.com",
      phone: "1-800-555-0200"
    },
    {
      title: "General Questions",
      description: "For all other inquiries",
      contact: "info@linktolawyers.com",
      phone: "1-800-555-0300"
    }
  ];

  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Help Center</h1>
        <p className="text-muted-foreground">
          Find answers, guides, and support resources
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for help..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Quick Help Cards */}
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

      {/* Main Content Tabs */}
      <Tabs defaultValue="faqs" className="w-full">
        <TabsList className="w-full max-w-md grid grid-cols-3 mx-auto mb-8">
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>

        {/* FAQs Tab */}
        <TabsContent value="faqs">
          <SettingsSectionCard title="Frequently Asked Questions">
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-6">
                <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                <Button 
                  variant="link" 
                  onClick={() => setSearchQuery("")}
                  className="mt-2"
                >
                  Clear search
                </Button>
              </div>
            )}
          </SettingsSectionCard>
        </TabsContent>

        {/* Guides Tab */}
        <TabsContent value="guides">
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
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact">
          <SettingsSectionCard title="Contact Information">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactOptions.map((option, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <div className="font-medium">Email:</div>
                      <div className="text-muted-foreground">{option.contact}</div>
                    </div>
                    <div>
                      <div className="font-medium">Phone:</div>
                      <div className="text-muted-foreground">{option.phone}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert className="mt-8 bg-muted">
              <Info className="h-4 w-4" />
              <AlertTitle>Business Hours</AlertTitle>
              <AlertDescription>
                Our support team is available Monday through Friday, 9AM to 5PM EST.
                Response times may vary during weekends and holidays.
              </AlertDescription>
            </Alert>
          </SettingsSectionCard>

          <SettingsSectionCard title="Submit a Support Ticket">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Brief description of your issue" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="Describe your issue in detail"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Submit Ticket
              </Button>
            </form>
          </SettingsSectionCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HelpCenterPage;
