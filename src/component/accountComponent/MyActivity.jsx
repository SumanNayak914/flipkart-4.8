// src/component/accountComponent/MyActivity.jsx
import { motion } from "framer-motion";
import { FaPen, FaQuestionCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const activities = [
  { label: "Your Reviews", icon: <FaPen className="text-purple-500" /> },
  { label: "Questions & Answers", icon: <FaQuestionCircle className="text-orange-500" /> },
];

export default function MyActivity() {
  return (
    <motion.div
      className="bg-white rounded-lg p-4 mb-4 shadow-sm"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-sm font-semibold mb-3">My Activity</h3>
      <div className="space-y-3">
        {activities.map((item, index) => (
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
