import { useEffect, useState } from "react";
import axios from "axios";
import { ShoppingCart, Bookmark, ShoppingBag, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [items, setItems] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  // ✅ Fetch Cart Data
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userData = localStorage.getItem("user");
        if (!userData) return;

        const response = await axios.get(
          "http://localhost/ecom-backend/cart/get-cart.php",
          { headers: { Authorization: userData } }
        );

        if (response.data.status === 200) {
          setItems(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  // ✅ Update Quantity API Call
  const updateQuantity = async (cartItemId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      const userData = localStorage.getItem("user");
      const formData = new FormData();
      formData.append("cart_item_id", cartItemId);
      formData.append("quantity", newQuantity);

      const response = await axios.post(
        "http://localhost/ecom-backend/cart/update-quantity.php",
        formData,
        { headers: { Authorization: userData } }
      );

      if (response.data.status === 200) {
        setItems((prev) =>
          prev.map((item) =>
            item.cart_item_id === cartItemId
              ? { ...item, quantity: response.data.data.quantity }
              : item
          )
        );
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // ✅ Remove Cart Item API Call
  const removeItem = async (cartItemId) => {
    try {
      const userData = localStorage.getItem("user");
      const formData = new FormData();
      formData.append("cart_item_id", cartItemId);

      const response = await axios.post(
        "http://localhost/ecom-backend/cart/remove-cart-item.php",
        formData,
        { headers: { Authorization: userData } }
      );

      if (response.data.status === 200) {
        setItems((prev) =>
          prev.filter((item) => item.cart_item_id !== cartItemId)
        );
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  // ✅ Total Price Calculation
  const totalPrice = items.reduce(
    (acc, item) => acc + parseFloat(item.product.price) * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <ShoppingCart size={128} className="text-gray-400 mx-auto" />
        <p className="text-xl font-medium mt-4">Your cart is empty!</p>
        <p className="text-gray-600">Add items to it now.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          Shop now
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-6">
      {/* 🔙 Back Button */}
     <div
        className="flex items-center mb-4 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="w-6 h-6 text-gray-700" />
        <span className="ml-2 text-gray-700 font-medium">Back</span>
      </div>

      {items.map((item) => (
        <div
          key={item.cart_item_id}
          className="max-w-sm mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6"
        >
          {/* Product Section */}
          <div className="px-3 pb-3">
            <div className="flex gap-3 mb-3">
              {/* Product Image */}
              <div className="w-16 h-20 rounded overflow-hidden">
                <img
                  src={item.product.image1}
                  alt={item.product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900 mb-1 leading-tight">
                  {item.product.title}
                </h3>
                <p className="text-xs text-gray-500 mb-2">
                  {item.product.description}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      updateQuantity(item.cart_item_id, item.quantity - 1)
                    }
                    className="px-2 py-1 border rounded bg-gray-100"
                  >
                    -
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.cart_item_id, item.quantity + 1)
                    }
                    className="px-2 py-1 border rounded bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-3">
              <span className="text-xl font-bold text-black">
                ₹{(item.product.price * item.quantity).toFixed(2)}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 text-sm">
              <button
                onClick={() => setIsSaved(!isSaved)}
                className="flex items-center justify-center gap-1 px-3 py-2 border border-gray-300 rounded text-gray-700 bg-white flex-1"
              >
                <Bookmark
                  className={`w-4 h-4 ${isSaved ? "fill-gray-700" : ""}`}
                />
                <span className="text-xs">Save for later</span>
              </button>

              <button
                onClick={() => removeItem(item.cart_item_id)}
                className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded text-gray-700 bg-white"
              >
                <span className="text-xs">Remove</span>
              </button>

              <button className="flex items-center justify-center gap-1 px-3 py-2 bg-orange-500 text-white rounded font-medium">
                <ShoppingBag className="w-4 h-4" />
                <span className="text-xs">Buy this now</span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* ✅ Order Summary Section */}
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Total Items:</span>
          <span>{items.length}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Total Price:</span>
          <span className="font-semibold">₹{totalPrice.toFixed(2)}</span>
        </div>
        <button className="w-full mt-3 bg-green-600 text-white py-2 rounded-md font-medium">
          Place Order
        </button>
      </div>
    </div>
  );
}
