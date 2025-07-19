import React from "react";
import { motion } from "framer-motion";
import AlgoMindLeft from "../../assets/Home/AlgoMind-left.png";
import AlgoMindRight from "../../assets/Home/AlgoMind-right.png";
import { ShieldCheck } from "lucide-react";

const AlgoMind = () => {
  return (
    <div className="mt-4 sm:mt-12 md:mt-16 py-8  text-white p-6 flex flex-col items-center">
      {/* Header Section */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center h-16 sm:h-20 md:h-28 xl:h-16">
        Meet{" "}
        <span className="bg-gradient-to-r from-[#FF9100] to-[#25DB72] text-transparent bg-clip-text">
          AlgoMind
        </span>{" "}
        : Your AI Market Neurosurgeon
      </h1>
      <p className="text-gray-300 text-center mt-2">
        Ask questions. Get answers dissected across 142+ data dimensions.
      </p>

      {/* Main Content */}
      <div className="mt-8 flex flex-col lg:flex-row gap-6 w-full max-w-7xl">
        {/* Left Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 md:min-h-[300px] relative"
        >
          <div className="rounded-xl shadow-lg">
            <img
              src={AlgoMindLeft}
              alt="AlgoMind"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <p className="text-green-400 text-center mt-4">
            <ShieldCheck className="inline-block mr-2" />
            Our Proprietary AI Models
          </p>
        </motion.div>

        {/* Right Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 md:min-h-[300px] relative text-center"
        >
          <div className="rounded-xl shadow-lg">
            <img
              src={AlgoMindRight}
              alt="AlgoMind"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <p className="text-yellow-500 border border-[#FFD700] inline-block mx-auto px-2 py-1 rounded-md text-center mt-4">
            100% Zero Hallucination Guarantee
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AlgoMind;

// import { motion } from "framer-motion";

// const AlgoMind = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
//       {/* Header Section */}
//       <h1 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text">
//         Meet AlgoMind: Your AI Market Neurosurgeon
//       </h1>
//       <p className="text-gray-300 text-center mt-2">
//         Ask questions. Get answers dissected across 142+ data dimensions.
//       </p>

//       {/* Main Content */}
//       <div className="mt-8 flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
//         {/* Left Box */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-[#161616] p-6 rounded-xl shadow-lg flex-1 min-h-[300px] relative"
//         >
//           <p className="text-lg font-semibold">Nidhi</p>
//           <p className="text-xl mt-2">“Why did RELIANCE drop 4% today?”</p>
//           <div className="mt-4 flex items-center gap-4">
//             <img
//               src="/chart-placeholder.png"
//               alt="Pie Chart"
//               className="w-32 h-32"
//             />
//             <div>
//               <p className="text-yellow-400">Negative News (60%)</p>
//               <p className="text-green-400">Sector Trend (25%)</p>
//               <p className="text-gray-400 text-sm sm:text-base">FII Activity (15%)</p>
//             </div>
//           </div>
//           <p className="mt-4 text-yellow-300 font-bold">
//             “BPCL partnership <span className="text-red-400">delay</span> cited
//             as key factor”
//           </p>
//         </motion.div>

//         {/* Right Box */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-[#161616] p-6 rounded-xl shadow-lg flex-1 min-h-[300px] border border-yellow-400 relative"
//         >
//           <input
//             type="text"
//             placeholder="Ask AlgoMind about stocks, sectors, or global events..."
//             className="w-full p-3 rounded-md bg-gray-700 text-white"
//           />
//           <div className="mt-4 space-y-2">
//             <button className="w-full bg-gray-700 py-2 rounded-md">
//               Show me Tata Motors’ EV strategy vs. global competitors
//             </button>
//             <button className="w-full bg-gray-700 py-2 rounded-md">
//               Predict USD/INR volatility ahead of Fed meeting
//             </button>
//             <button className="w-full bg-gray-700 py-2 rounded-md">
//               Analyze IT sector PE ratios vs. 10-year average
//             </button>
//           </div>
//           <div className="mt-6 flex justify-center">
//             <img
//               src="/network-placeholder.png"
//               alt="Stock Network"
//               className="w-40 h-40"
//             />
//           </div>
//           <p className="text-gray-400 text-center mt-2">
//             Data updates every 15 seconds
//           </p>
//         </motion.div>
//       </div>

//       {/* Footer */}
//       <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
//         <p className="text-green-400">SEBI-Certified AI Models</p>
//         <p className="bg-yellow-500 text-black px-4 py-1 rounded-md">
//           100% Zero Hallucination Guarantee
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AlgoMind;
