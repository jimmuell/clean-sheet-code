
import React from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SettingsSectionCard } from "@/pages/dashboard/settings";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  searchQuery: string;
  onClearSearch: () => void;
}

const FAQAccordion = ({ faqs, searchQuery, onClearSearch }: FAQAccordionProps) => {
  const filteredFaqs = searchQuery
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  return (
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
            onClick={onClearSearch}
            className="mt-2"
          >
            Clear search
          </Button>
        </div>
      )}
    </SettingsSectionCard>
  );
};

export default FAQAccordion;
