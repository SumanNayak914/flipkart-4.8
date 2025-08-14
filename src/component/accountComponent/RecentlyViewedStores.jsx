// src/component/accountComponent/RecentlyViewedStores.jsx
import { motion } from "framer-motion";

const categories = [
  { label: "Mobiles", emoji: "📱" },
  { label: "Watches", emoji: "⌚" },
  { label: "Grocery", emoji: "🛒" },
  { label: "Clothing", emoji: "👕" },
  { label: "Shoes", emoji: "👟" },
  { label: "Headphones", emoji: "🎧" },
];

export default function RecentlyViewedStores() {
  return (
    <motion.div
      className="bg-white rounded-lg p-4 mb-2 shadow-sm"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-sm font-semibold mb-3">Recently Viewed Stores</h3>
      <div className="flex space-x-3 overflow-x-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="min-w-[80px] bg-gray-100 rounded-lg px-3 py-2 flex flex-col items-center text-center"
          >
            <span className="text-2xl">{cat.emoji}</span>
            <span className="text-xs mt-1 font-medium">{cat.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
