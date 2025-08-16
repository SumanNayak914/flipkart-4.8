import React from "react";

export default function BottomNavBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white z-50">
      <div className="flex w-full max-w-3xl mx-auto">
        
        {/* Add to Cart */}
        <button className="flex-1 py-3 text-lg font-semibold bg-white transition">
          Add to Cart
        </button>

        {/* Buy Now */}
        <button className="flex-1 py-3 text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}
