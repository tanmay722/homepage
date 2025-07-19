import { useState } from "react";
import { motion } from "framer-motion";

// Custom components
import { PlanCard } from "./plan-card";

export default function GrowthTracker() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  // Plan data with monthly and annual pricing
  const plans = [
    {
      id: "starter",
      name: "Starter Plan",
      category: "Equity, F&O",
      status: "Consistent",
      statusColor: "teal",
      chartColor: "teal",
      growth: "12%",
      rebalance: billingCycle === "monthly" ? "Monthly" : "Annually",
      price: billingCycle === "monthly" ? "499" : "349",
      chartData: [10, 15, 12, 18, 22, 19, 25, 30, 28, 35, 40, 38, 42],
      cta: "Join Finaquity Club",
    },
    {
      id: "trader",
      name: "Trader Plan",
      category: "Equity, F&O, Commodity",
      status: "Popular",
      statusColor: "cyan",
      chartColor: "pink",
      growth: "21%",
      rebalance: billingCycle === "monthly" ? "Monthly" : "Annually",
      price: billingCycle === "monthly" ? "1449" : "1199",
      chartData: [15, 20, 18, 25, 30, 28, 35, 45, 50, 48, 55, 60, 65],
      cta: "Join Finaquity Club",
    },
    {
      id: "pro",
      name: "Pro Plan",
      category: "Equity, F&O, Commodity, Crypto",
      status: "New",
      statusColor: "cyan",
      chartColor: "green",
      growth: "33%",
      rebalance: billingCycle === "monthly" ? "Monthly" : "Annually",
      price: billingCycle === "monthly" ? "2499" : "2099",
      chartData: [20, 25, 30, 28, 35, 40, 45, 50, 55, 60, 70, 75, 80],
      cta: "Join Finaquity Club",
    },
  ];

  return (
    <div className="text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-3xl lg:text-4xl pt-4 px-4 pb-2 md:pb-6 font-bold tracking-wide animate__animated animate__fadeInDown">
            Select your experience level and{" "}
            <span className="bg-gradient-to-r from-[#25DB72] to-green-700 font-normal text-transparent bg-clip-text">
              start your trading journey
            </span>
          </h2>
        </motion.div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900 p-1 rounded-full inline-flex">
            <div className="relative flex items-center">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  billingCycle === "monthly" ? "text-gray-200" : "text-gray-400"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annually")}
                className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  billingCycle === "annually"
                    ? "text-gray-200"
                    : "text-gray-400"
                }`}
              >
                Annually
              </button>
              <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-r from-[#24B224] to-green-700 rounded-full"
                animate={{
                  x: billingCycle === "monthly" ? 0 : "100%",
                  width: "50%",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ x: 0, width: "50%" }}
              />
            </div>
          </div>
        </div>

        {/* Plan Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              billingCycle={billingCycle}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
