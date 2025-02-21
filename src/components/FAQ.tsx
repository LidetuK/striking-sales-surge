
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does shipping cost?",
    answer: "Shipping is a flat rate of $9.95 to anywhere in the world. Your book will be shipped within 24 hours of ordering."
  },
  {
    question: "Is this really free?",
    answer: "Yes! The book is completely free. You just cover the shipping and handling costs."
  },
  {
    question: "How long will it take to receive my book?",
    answer: "Most orders arrive within 5-7 business days for domestic shipping, and 10-14 business days for international shipping."
  },
  {
    question: "What if I'm not satisfied with the book?",
    answer: "We offer a 100% satisfaction guarantee. If you're not completely satisfied, simply return the book and we'll refund your shipping costs."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
