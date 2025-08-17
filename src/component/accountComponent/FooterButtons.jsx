// src/component/accountComponent/FooterButtons.jsx
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function FooterButtons() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage से user हटाओ
    localStorage.removeItem("user");

    // redirect to login page
    navigate("/userLogin");
  };

  return (
    <motion.div
      className="bg-white rounded-lg p-4 mb-2 shadow-sm"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-red-600 font-medium px-4 py-2 border border-red-200 rounded-md w-[48%] justify-center"
        >
          <FiLogOut className="text-lg" />
          Logout
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-sm text-gray-700 font-medium px-4 py-2 border border-gray-200 rounded-md w-[48%] justify-center"
          onClick={() => navigate('/userLogin')}
        >
          <LogIn  className="text-lg"  />
          Login
        </motion.button>
      </div>
    </motion.div>
  );
}
