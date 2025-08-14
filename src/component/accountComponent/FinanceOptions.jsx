// src/component/accountComponent/FinanceOptions.jsx
import { motion } from "framer-motion";
import { FaCreditCard, FaUniversity } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const financeOptions = [
  {
    title: "Flipkart Personal Loan",
    subtitle: "Instant Cash upto ₹10,00,000",
    icon: <FaUniversity className="text-blue-600 text-lg" />,
  },
  {
    title: "Flipkart Axis Bank Credit Card",
    subtitle: "Get ₹1,000 voucher | ₹0 joining fee",
    icon: <FaCreditCard className="text-green-600 text-lg" />,
  },
];

export default function FinanceOptions() {
  return (
    <motion.div
      className="bg-white rounded-lg p-4 mb-2 shadow-sm mt-2"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-sm font-semibold mb-3">Finance Options</h3>
      <div className="space-y-3">
        {financeOptions.map((option, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between"
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">{option.icon}</div>
              <div>
                <p className="text-sm font-medium">{option.title}</p>
                <p className="text-xs text-gray-500">{option.subtitle}</p>
              </div>
            </div>
            <IoIosArrowForward className="text-gray-400 text-lg" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
