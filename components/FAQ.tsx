'use client';

import { useState } from 'react';

// FAQ Accordion Component
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can you implement an AI chatbot for my business?',
      answer: 'Typically, we can have your AI chatbot up and running within 5-7 business days. This includes initial consultation, customization, integration, and training. For complex enterprise solutions, it may take 2-3 weeks.',
    },
    {
      question: 'Do I need technical knowledge to manage the chatbot?',
      answer: 'Not at all! Our platform is designed to be user-friendly. We provide comprehensive training and a simple dashboard where you can monitor conversations, update responses, and view analytics without any coding knowledge.',
    },
    {
      question: 'Can the chatbot integrate with my existing CRM or tools?',
      answer: 'Yes! We offer integrations with popular CRMs like Salesforce, HubSpot, Zoho, and many others. We can also create custom integrations for your specific tools and workflows.',
    },
    {
      question: 'What languages does the AI chatbot support?',
      answer: 'Our AI chatbots support multiple languages including English, Hindi, Marathi, and other Indian regional languages. We can customize language support based on your target audience.',
    },
    {
      question: 'How do you ensure data security and privacy?',
      answer: 'We take security seriously. All data is encrypted in transit and at rest. We comply with GDPR and Indian data protection laws. We can also provide on-premise deployment for enterprises with strict security requirements.',
    },
    {
      question: 'What kind of support do you provide after implementation?',
      answer: 'We offer 24/7 technical support for all our clients. Professional and Enterprise plans include priority support with dedicated account managers. We also provide regular updates, maintenance, and optimization.',
    },
    {
      question: 'Can I try before committing to a plan?',
      answer: 'Absolutely! We offer a free consultation and demo where we can show you exactly how our solution will work for your business. We also provide a 30-day money-back guarantee on all plans.',
    },
    {
      question: 'How does pricing work for custom enterprise solutions?',
      answer: 'Enterprise pricing is customized based on your specific needs, conversation volume, integrations, and features required. Contact us for a detailed quote tailored to your business requirements.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about our AI solutions
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-600"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
