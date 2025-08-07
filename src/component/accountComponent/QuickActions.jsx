// src/component/accountComponent/QuickActions.jsx
import { motion } from "framer-motion";
import { FaBoxOpen, FaHeart, FaTag, FaQuestionCircle } from "react-icons/fa";

const actions = [
  { label: "Orders", icon: <FaBoxOpen className="text-blue-600" /> },
  { label: "Wishlist", icon: <FaHeart className="text-pink-500" /> },
  { label: "Coupons", icon: <FaTag className="text-green-500" /> },
  { label: "Help Center", icon: <FaQuestionCircle className="text-purple-500" /> },
];

export default function QuickActions() {
  return (
    <div className="max-w-md mx-auto mt-2 px-4 py-3 bg-white"> {/* container wrapper */}
      <motion.div
        className="grid grid-cols-2 gap-3 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {actions.map((action, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm"
            whileTap={{ scale: 0.97 }}
          >
            <div className="text-xl">{action.icon}</div>
            <div className="text-sm font-medium">{action.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
