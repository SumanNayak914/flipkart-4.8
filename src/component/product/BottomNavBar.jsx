import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function BottomNavBar({ product }) {
  const navigate = useNavigate();
  const [inCart, setInCart] = useState(false);

  // ✅ Check if product is already in cart on component mount
  useEffect(() => {
    const checkCart = async () => {
      const userData = localStorage.getItem("user");
      if (!userData) return;

      try {
        const response = await axios.get(
          "http://localhost/ecom-backend/cart/get-cart.php",
          { headers: { Authorization: userData } }
        );

        if (response.data.status === 200 && Array.isArray(response.data.data)) {
          const found = response.data.data.some(
            (item) => item.product.id === product.id
          );
          setInCart(found);
        }
      } catch (error) {
        console.error("Check cart error:", error);
      }
    };

    checkCart();
  }, [product.id]);

  // ✅ Handle Add to Cart
  const handleAddToCart = async () => {
    try {
      const userData = localStorage.getItem("user");
      if (!userData) {
        toast.error("⚠️ Please login first!");
        return;
      }

      const formData = new FormData();
      formData.append("product_id", product.id);
      formData.append("quantity", 1);

      const response = await axios.post(
        "http://localhost/ecom-backend/cart/add-to-cart.php",
        formData,
        {
          headers: {
            Authorization: userData,
          },
        }
      );

      if (response.data.status === 201) {
        toast.success(`🛒 ${response.data.message}`);
        setInCart(true); // ✅ abhi hi update kar do
      } else if (response.data.status === 200) {
        toast.info(response.data.message);
        setInCart(true);
      } else {
        toast.error(response.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Add to Cart Error:", error);
      toast.error("❌ Failed to add item to cart.");
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="flex w-full max-w-3xl mx-auto">
        {!inCart ? (
          <button
            onClick={handleAddToCart}
            className="flex-1 py-3 text-lg font-semibold bg-white border border-gray-300 transition hover:bg-gray-100"
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={() => navigate("/cart")}
            className="flex-1 py-3 text-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition"
          >
            Go to Cart
          </button>
        )}

        <button className="flex-1 py-3 text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}
