// src/component/accountComponent/CustomerSupport.jsx
import { motion } from "framer-motion";
import { FaHeadset, FaQuestion, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const supportItems = [
  { label: "Help Center", icon: <FaHeadset className="text-red-500" /> },
  { label: "FAQs", icon: <FaQuestion className="text-yellow-500" /> },
  { label: "Contact Us", icon: <FaPhoneAlt className="text-blue-500" /> },
];

export default function CustomerSupport() {
  return (
    <motion.div
      className="bg-white rounded-lg p-4 mb-4 shadow-sm"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-sm font-semibold mb-3">Customer Support</h3>
      <div className="space-y-3">
        {supportItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-between items-center p-2 rounded-md hover:bg-gray-50 active:bg-gray-100 transition"
            whileTap={{ scale: 0.97 }}
          >
            <div className="flex items-center gap-3">
              <div className="text-lg">{item.icon}</div>
              <p className="text-sm">{item.label}</p>
            </div>
            <IoIosArrowForward className="text-gray-400" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
