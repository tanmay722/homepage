import React, { useState } from "react";
import "./FAQComponent.css";

const FAQComponent = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqData = [
    {
      id: 1,
      question: "What is Finaquity?",
      answer:
        "FINAQUITY is an AI-powered trading and investing platform that provides real-time market insights, trade signals, and risk management tools. It combines deep learning models, sentiment analysis, and SEBI-certified expert mentorship to help traders make smarter, data-driven decisions.",
    },
    {
      id: 2,
      question: "How accurate are FINAQUITY's trade signals?",
      answer:
        "FINAQUITY's trade signals leverage advanced AI algorithms and real-time market analysis to provide highly accurate predictions. Our system continuously learns from market patterns and incorporates multiple data sources to maximize signal reliability.",
    },
    {
      id: 3,
      question: "How does FINAQUITY generate trade signals?",
      answer:
        "Our platform uses sophisticated machine learning models that analyze market data, technical indicators, sentiment analysis, and historical patterns. The AI system processes vast amounts of information in real-time to identify profitable trading opportunities.",
    },
    {
      id: 4,
      question: "How does FINAQUITY's mentorship program work?",
      answer:
        "Our mentorship program connects you with SEBI-certified trading experts who provide personalized guidance, strategy development, and ongoing support. Mentors help you understand market dynamics and develop your trading skills through one-on-one sessions.",
    },
    {
      id: 5,
      question: "Can I execute trades directly from FINAQUITY?",
      answer:
        "Yes, FINAQUITY integrates with major brokers to enable seamless trade execution directly from our platform. You can set up automated trading or execute trades manually based on our AI-generated signals.",
    },
    {
      id: 6,
      question: "Do I need prior trading experience to use FINAQUITY?",
      answer:
        "No prior experience is required. FINAQUITY is designed for both beginners and experienced traders. Our educational resources, mentorship program, and intuitive interface help newcomers learn while providing advanced tools for seasoned traders.",
    },
    {
      id: 7,
      question: "How does the 7-layer risk management system work?",
      answer:
        "Our 7-layer risk management system includes portfolio diversification, position sizing, stop-loss mechanisms, volatility analysis, correlation checks, drawdown protection, and real-time risk monitoring to safeguard your investments across multiple dimensions.",
    },
    {
      id: 8,
      question: "How much does FINAQUITY cost?",
      answer:
        "FINAQUITY offers flexible pricing plans to suit different trading needs and budgets. Contact our team for detailed pricing information and to find the plan that best matches your trading goals and requirements.",
    },
    {
      id: 9,
      question:
        "Is FINAQUITY suitable for both short-term traders and long-term investors?",
      answer:
        "Absolutely! FINAQUITY caters to various trading styles and investment horizons. Whether you're a day trader, swing trader, or long-term investor, our platform provides relevant signals, analysis, and tools tailored to your preferred strategy.",
    },
    {
      id: 10,
      question: "Is my data and investment information secure?",
      answer:
        "Yes, we prioritize data security with bank-level encryption, secure servers, and strict privacy protocols. Your personal and financial information is protected with industry-standard security measures and compliance with data protection regulations.",
    },
  ];

  const toggleItem = (itemId) => {
    setOpenItems((prev) => {
      const newOpenItems = new Set(prev);
      if (newOpenItems.has(itemId)) {
        newOpenItems.delete(itemId);
      } else {
        newOpenItems.add(itemId);
      }
      return newOpenItems;
    });
  };

  const PlusIcon = () => (
    <svg className="faq-icon" viewBox="0 0 24 24">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );

  const MinusIcon = () => (
    <svg className="faq-icon" viewBox="0 0 24 24">
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );

  const HelpIcon = () => (
    <svg className="help-icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="m9,9a3,3 0 1,1 5.12,2.12l-1.12,1.88"></path>
      <circle cx="12" cy="17" r="1"></circle>
    </svg>
  );

  return (
    <div className="faq-container">
      {/* Header */}
      <div className="faq-header">
        <div className="faq-badge">
          <div className="faq-icon-wrapper">
            <HelpIcon />
          </div>
          <span className="faq-badge-text">FAQ's</span>
        </div>
        <h1 className="faq-title">Frequently Asked Questions</h1>
      </div>

      {/* FAQ Grid */}
      <div className="faq-grid">
        <div className="faq-column">
          {faqData
            .filter((_, index) => index % 2 === 0)
            .map((item) => (
              <div
                key={`faq-${item.id}`}
                className={`faq-item ${openItems.has(item.id) ? "open" : ""}`}
                data-faq-id={item.id}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="faq-question"
                  aria-expanded={openItems.has(item.id)}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <div className="faq-toggle-icon">
                    {openItems.has(item.id) ? <MinusIcon /> : <PlusIcon />}
                  </div>
                </button>

                <div
                  className="faq-answer"
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                >
                  <div className="faq-answer-content">
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="faq-column">
          {faqData
            .filter((_, index) => index % 2 === 1)
            .map((item) => (
              <div
                key={`faq-${item.id}`}
                className={`faq-item ${openItems.has(item.id) ? "open" : ""}`}
                data-faq-id={item.id}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="faq-question"
                  aria-expanded={openItems.has(item.id)}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <div className="faq-toggle-icon">
                    {openItems.has(item.id) ? <MinusIcon /> : <PlusIcon />}
                  </div>
                </button>

                <div
                  className="faq-answer"
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                >
                  <div className="faq-answer-content">
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
