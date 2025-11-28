import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

export default function Faqs() {
  const faqs = [
    {
      question: "Q1. What will we discuss on the Strategy Call?",
      answer:
        "We’ll review your business goals, audit your current marketing, identify what’s not working, and give you a clear plan to improve your ads, funnels, and content.",
    },
    {
      question: "Q2. Is this call free?",
      answer:
        "Yes. The Strategy Call is completely free. It’s designed to give you clarity and show how we can help you grow.",
    },
    {
      question: "Q3. What industries do you work with?",
      answer:
        "We work with E-commerce, Service Businesses, Healthcare, Real Estate, Coaches, SaaS, Fitness, Interiors, Automotive, and EdTech.",
    },
    {
      question: "Q4. Do you only work with US clients?",
      answer:
        "We actively work with clients in the USA, India, Middle East, and multiple international markets.",
    },
    {
      question: "Q5. What happens after I book the call?",
      answer:
        "You’ll receive an email confirmation, reminders, and a short video to watch before the meeting so our session is productive.",
    },
    {
      question: "Q6. How long is the call?",
      answer:
        "The call typically lasts 15–30 minutes depending on your business needs.",
    },
    {
      question: "Q7. Is this a sales call?",
      answer:
        "No. This is a strategic session where we analyze your business and give you a clear growth plan. If you want us to help implement it, we discuss next steps.",
    },
    {
      question: "Q8. What makes BridgeKala different from other agencies?",
      answer:
        "We combine performance marketing, high-impact content, funnels, automation, and creative strategy under one system — not just ads. We fix your entire marketing engine, not just one part of it.",
    },
    {
      question: "Q9. What results can I expect?",
      answer:
        "Most businesses see improvement in their ad performance, cost per acquisition, and conversions within the first few weeks of implementing our systems.",
    },
    {
      question: "Q10. Do you work with small businesses?",
      answer:
        "Yes. We work with businesses of all sizes — from startups and local businesses to large enterprises.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  function toggleFAQ(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="text-center">
        <h1 className="font-bold text-[27px] leading-5">FAQ</h1>
        <h2 className="text-[#9000FF] text-[12px] font-medium">
          What Our Clients Say
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-[#ece9e9] rounded-lg p-3 pr-7 relative">
            <button
              onClick={() => toggleFAQ(i)}
              className="absolute right-2 top-2 transition-transform"
            >
              <ChevronDown
                className={`size-5 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div className="text-[11px] font-semibold">{faq.question}</div>

            {/* Smooth animation container */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === i
                  ? "max-h-40 opacity-100 mt-1"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-[#9000FF] text-[10px] py-1">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
