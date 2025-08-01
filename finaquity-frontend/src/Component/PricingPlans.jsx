import React, { useState } from "react";
import "./PricingPlans.css";
import Marquee from "react-fast-marquee";

const PricingComponent = () => {
  const [billingCycle, setBillingCycle] = useState({
    pro: "monthly",
    advanced: "monthly",
  });

  const toggleBilling = (plan) => {
    setBillingCycle((prev) => ({
      ...prev,
      [plan]: prev[plan] === "yearly" ? "monthly" : "yearly",
    }));
  };

  const getPrice = (planId, yearlyPrice, monthlyPrice) => {
    if (planId === "free") return 0;
    return billingCycle[planId] === "yearly" ? yearlyPrice : monthlyPrice;
  };

  const getBillingText = (planId) => {
    if (planId === "free") return "";
    return billingCycle[planId] === "yearly" ? "year" : "month";
  };

  const plans = [
    {
      id: "free",
      name: "Free Plan",
      yearlyPrice: 0,
      monthlyPrice: 0,
      billing: "per user / month",
      features: [
        { name: "Task Management", included: true },
        { name: "Data Encryption", included: true },
        { name: "Deadline Alerts", included: true },
        { name: "Collaboration Tools", included: false },
        { name: "Task Management", included: false },
        { name: "Custom Workflows", included: false },
        { name: "Real-Time Sync", included: false },
      ],
      popular: false,
      hasBillingToggle: false,
    },
    {
      id: "pro",
      name: "Pro Plan",
      yearlyPrice: 85,
      monthlyPrice: 15,
      billing: "per user / month",
      features: [
        { name: "Task Management", included: true },
        { name: "Data Encryption", included: true },
        { name: "Deadline Alerts", included: true },
        { name: "Collaboration Tools", included: true },
        { name: "Task Management", included: false },
        { name: "Custom Workflows", included: false },
        { name: "Real-Time Sync", included: false },
      ],
      popular: true,
      hasBillingToggle: true,
    },
    {
      id: "advanced",
      name: "Advanced Plan",
      yearlyPrice: 199,
      monthlyPrice: 25,
      billing: "per user / month",
      features: [
        { name: "Task Management", included: true },
        { name: "Data Encryption", included: true },
        { name: "Deadline Alerts", included: true },
        { name: "Collaboration Tools", included: true },
        { name: "Task Management", included: true },
        { name: "Custom Workflows", included: true },
        { name: "Real-Time Sync", included: true },
      ],
      popular: false,
      hasBillingToggle: true,
    },
  ];

  // const allPlansFeatures = [
  //   { name: "Custom Reports" },
  //   { name: "Collaboration Tools" },
  //   { name: "Mobile Access" },
  //   { name: "Data Security" },
  //   { name: "24/7 Support" },
  // ];

  const CheckIcon = () => (
    <div
      style={{
        backgroundColor: "#22C55E",
        borderRadius: "9999px",
        width: "24px",
        height: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  const XIcon = () => (
    <div
      style={{
        backgroundColor: "#2D2F33",
        borderRadius: "9999px",
        width: "24px",
        height: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  const InfoIcon = () => (
    <svg className="info-icon" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="pricing-container">
      <div className="pricing-wrapper">
        {/* Header */}
        <div className="pricing-header">
          <div className="pricing-badge">👑 Pricing</div>
          <h1 className="pricing-title">Affordable Community Plans</h1>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.id} className="pricing-card">
              <div className="card-header_">
                <div className="plan-header-top">
                  <h3 className="plan-name">{plan.name}</h3>
                  {plan.popular && (
                    <span className="popular-badge">Most Popular</span>
                  )}
                </div>

                <div className="price-container">
                  <span className="price">
                    ${getPrice(plan.id, plan.yearlyPrice, plan.monthlyPrice)}
                  </span>
                  {plan.id !== "free" && (
                    <span
                      className={`billing-period ${
                        billingCycle[plan.id] === "yearly"
                          ? "yearly"
                          : "monthly"
                      }`}
                    >
                      per user / {getBillingText(plan.id)}
                    </span>
                  )}
                </div>

                {plan.hasBillingToggle ? (
                  <div className="billing-toggle">
                    <button
                      onClick={() => toggleBilling(plan.id)}
                      className="toggle-switch"
                      aria-label={`Toggle billing cycle for ${plan.name}`}
                    >
                      <span
                        className={`toggle-slider ${
                          billingCycle[plan.id] === "yearly" ? "active" : ""
                        }`}
                      />
                    </button>
                    <span className="toggle-label">Billed yearly</span>
                  </div>
                ) : (
                  <div className="billing-toggle">
                    <span className="plan-description_">Free for everyone</span>
                  </div>
                )}

                <button
                  className="cta-button"
                  onClick={() => handleGetStarted(plan.name)}
                >
                  Get Started
                </button>
                <div className="trial-info">
                  <InfoIcon />
                  Get your free 7-day trial today!
                </div>
              </div>

              <div className="features-section">
                <h4>What's Included</h4>
                <ul className="features-list">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      {feature.included ? <CheckIcon /> : <XIcon />}
                      <span
                        className={`feature-text ${
                          feature.included ? "" : "not-included"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* All Plans Include Section */}
        <div className="all-plans-section">
          <h2 className="all-plans-title">All Plans Include</h2>

          <div className="marquee-wrapper_">
            <Marquee
              speed={70}
              gradient={true}
              direction={"right"}
              pauseOnHover
              gradientColor={[0, 0, 0]}
              gradientWidth={100}
            >
              ⚡ Fast. 🔐 Secure. 🤖 AI-Powered. 📊 Data-Driven. 🔍 Precise. 🧠
              Smart. 🔄 Adaptive. 💹 Profitable. 🕒 Real-Time. 🎯 Targeted. 💡
              Insightful. 🧱 Solid.🚀 Speed. 🌐 Global. 🧭 Guided. 💬 Informed.
              🔧 Tuned. 🎲 Risk-Controlled. 🛡️ Protected.
            </Marquee>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
