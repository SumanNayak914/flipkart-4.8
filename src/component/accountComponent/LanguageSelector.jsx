// src/component/accountComponent/LanguageSelector.jsx
import { motion } from "framer-motion";

const languages = ["Hindi", "Tamil", "Telugu", "Kannada", "Bengali", "Marathi"];

export default function LanguageSelector() {
  return (
    <motion.div
      className="bg-white rounded-lg p-4 mb-4 shadow-sm"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-sm font-semibold mb-3">Try Flipkart in your language</h3>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang, index) => (
          <button
            key={index}
            className="text-sm px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          >
            {lang}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
