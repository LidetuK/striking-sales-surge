
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is this for?",
    answer: "This book is for anyone looking to transform their life and achieve greater abundance in seven key areas: Spiritual, Wellness, Knowledge, Relationship, Actions, Financial, and Lifestyle. Whether you're just starting your personal development journey or looking to elevate your current success, this book provides actionable insights and strategies to help you reach your full potential."
  },
  {
    question: "Will this work for me?",
    answer: "Absolutely! The principles and tactics outlined in this book are designed to be universally applicable. They have been tested and proven to work for people from all walks of life. No matter your background or current situation, you can apply these strategies to see significant improvements in your life."
  },
  {
    question: "Is there a digital or audiobook version available?",
    answer: "Yes, there is! If you prefer to listen to the audiobook or read it on your Kindle, iBooks, or as a PDF, these digital versions are available for a small fee. Simply enter your details below to access these options and choose the format that best suits your lifestyle."
  },
  {
    question: "How is this different from other products?",
    answer: "This book stands out because it focuses on a holistic approach to personal development, covering seven crucial areas of life. Unlike other products that may only address one aspect, this book provides a comprehensive guide to achieving overall life improvement. The strategies are battle-tested and currently effective, ensuring you get the most relevant and practical advice."
  },
  {
    question: "What exactly am I getting?",
    answer: "When you claim your free copy of ELEVATE HIGH'ER: CHANGE YOUR LIFE. BE GR8R THAN. EARN MORE. you will receive a physical book packed with actionable strategies to enhance your life in seven key areas. Additionally, if you opt for the digital or audiobook versions, you'll get access to these formats for a small fee. The book is free; you only need to cover the shipping and handling costs."
  },
  {
    question: "Do you have any success stories?",
    answer: "Yes, we do! Many readers have shared their success stories after applying the principles from this book. They have experienced significant improvements in their spiritual well-being, health, knowledge, relationships, actions, financial status, and overall lifestyle. These testimonials highlight the transformative power of the strategies outlined in the book."
  },
  {
    question: "When will my book arrive?",
    answer: "Once you place your order and cover the shipping and handling costs, your book will be processed and shipped promptly. Delivery times may vary depending on your location, but you can typically expect to receive your book within 14-25 business days."
  },
  {
    question: "Is ELEVATE HIGH'ER covered by a 100% money-back guarantee?",
    answer: "Yes, it is! We are confident that you will find immense value in this book. However, if for any reason you are not satisfied, we offer a 100% money-back guarantee. Simply contact our customer service team, and we will process your refund, no questions asked."
  },
  {
    question: "How much does shipping and handling cost?",
    answer: "The cost of shipping and handling varies depending on your location. We strive to keep these costs as low as possible to ensure that everyone can access the book. You will see the exact amount during the checkout process before you finalize your order."
  },
  {
    question: "Can I get a bulk order for my team or organization?",
    answer: "Yes, bulk orders are available! If you're interested in ordering multiple copies for your team, organization, or event, please contact our customer service team for special pricing and arrangements. We're happy to help you spread the message of personal growth and development."
  },
  {
    question: "What if I have questions or need support after receiving the book?",
    answer: "We're here to help! If you have any questions or need support after receiving your book, please reach out to our customer service team. We're committed to ensuring you have a positive experience and can fully benefit from the content of the book."
  },
  {
    question: "Are there any additional resources or tools provided with the book?",
    answer: "Yes, along with the book, you'll get access to exclusive online resources, including worksheets, templates, and bonus content that complements the strategies discussed in the book. These additional tools are designed to help you implement the concepts effectively and achieve faster results."
  },
  {
    question: "How can I stay updated on new content and future releases?",
    answer: "To stay updated on new content, future releases, and special offers, you can subscribe to our newsletter. Simply enter your email address on our website, and you'll receive regular updates and valuable insights directly to your inbox."
  }
];

const FAQ = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight uppercase text-red-600 text-center mb-6 md:mb-8">
          FIND OUT WHY READERS EVERYWHERE <br className="hidden sm:block" /> ARE LOVING THIS BOOK
        </h2>
        <div className="flex justify-center mb-6 md:mb-10">
          <img
            src="/333.png"
            alt="ELEVATE HIGH'ER book reviews"
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight uppercase text-red-600 text-center mb-4 md:mb-6">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-base sm:text-lg font-medium py-4 px-1 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600 px-1 pb-4">
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
