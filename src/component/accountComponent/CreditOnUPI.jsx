// src/component/accountComponent/CreditOnUPI.jsx
import { motion } from "framer-motion";
import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const upiOptions = [
  {
    title: "Flipkart Axis Bank SuperCard",
    subtitle: "Get ₹1,000 Flipkart voucher on activation",
    icon: <FaCreditCard className="text-indigo-600 text-lg" />,
  },
  {
    title: "Credit on UPI",
    subtitle: "Get up to 5% cashback with SuperPay",
    icon: <FaMoneyBillWave className="text-emerald-600 text-lg" />,
  },
];

export default function CreditOnUPI() {
  return (
    <motion.div
      className="bg-white rounded-lg p-4 mb-4 shadow-sm"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-sm font-semibold mb-3">Credit on UPI</h3>
      <div className="space-y-3">
        {upiOptions.map((option, index) => (
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
