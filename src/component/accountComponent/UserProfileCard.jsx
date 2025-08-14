// src/component/accountComponent/UserProfileCard.jsx
import { motion } from 'framer-motion';

export default function UserProfileCard() {
  return (
    <motion.div
      className="w-full flex justify-center mt-2"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-sky-100 rounded-[10px] p-4 w-11/12 min-h-[120px] shadow-sm flex justify-between items-center mx-auto">
        {/* Left Section */}
        <div className="flex flex-col justify-between h-full">
          {/* Name */}
          <p className="text-base font-semibold">Suman Nayak</p>

          {/* Explore Plus Silver + Arrow */}
          <div className="flex items-center text-xs text-gray-600 mt-1">
            <span>Explore </span>
            <span className="text-blue-700 font-semibold ml-1">Plus Silver</span>
            <span className="text-gray-700 text-base font-semibold ml-2">&gt;</span>
          </div>
        </div>

        {/* Right Section: Coin */}
        <div className="bg-yellow-100 px-2 py-1 rounded-md text-xs font-semibold text-yellow-700 ml-4 shrink-0">
          💰 0
        </div>
      </div>
    </motion.div>
  );
}
