import { motion } from "framer-motion";
import { AreaChart } from "./area-chart";
import { useNavigate } from "react-router-dom";

export function PlanCard({ plan, billingCycle, delay = 0 }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg sm:rounded-xl overflow-hidden"
    >
      <div className="p-3 sm:p-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold">{plan.name}</h3>
            <p className="text-gray-400 text-xs sm:text-sm">{plan.category}</p>
          </div>
          <div
            className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-${plan.statusColor}-900/30 text-${plan.statusColor}-400`}
          >
            {plan.status}
          </div>
        </div>

        {/* Chart */}
        <div className="h-12 sm:h-16 lg:h-20 xl:h-24 mb-4 sm:mb-6">
          <AreaChart data={plan.chartData} color={plan.chartColor} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-9 mb-4 sm:mb-6">
          <div className="col-span-2">
            <p className="text-gray-400 text-[10px] sm:text-xs mb-1">Growth</p>
            <p className="text-sm sm:text-base font-bold">{plan.growth}</p>
          </div>
          <div className="col-span-3">
            <p className="text-gray-400 text-[10px] sm:text-xs mb-1">
              Rebalance
            </p>
            <p className="text-sm sm:text-base font-bold">{plan.rebalance}</p>
          </div>
          <div className="col-span-4">
            <p className="text-gray-400 text-[10px] sm:text-xs mb-1">Pricing</p>
            <p className="text-sm sm:text-base font-bold">
              ₹&nbsp;{plan.price}/
              {billingCycle === "monthly" ? "month" : "year"}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/club")}
          className={`w-full py-2 sm:py-3 px-3 sm:px-4 rounded-md sm:rounded-lg bg-white text-gray-900 font-medium ${
            plan.cta === "Join Finaquity Club"
              ? ""
              : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
          }`}
        >
          {plan.cta}
        </motion.button>
      </div>
    </motion.div>
  );
}
