import { useState } from "react";
import { ShoppingCart } from "lucide-react";

// Sample cart items data
const cartItems = [];

export default function Cart() {
  const [items, setItems] = useState(cartItems);

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-6">
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          {/* Beautiful Lucide Shopping Cart Icon */}
          <div className="mb-6">
            <ShoppingCart size={128} className="text-gray-400 mx-auto" />
          </div>
          
          <p className="text-xl font-medium mt-4">Your cart is empty!</p>
          <p className="text-gray-600">Add items to it now.</p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md">
            Shop now
          </button>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">
          {items.map((item) => (
            <div key={item.id} className="flex border-b py-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover"
              />
              <div className="ml-6 flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500">{item.ram}</p>
                <p className="text-sm text-gray-600">Seller: {item.seller}</p>

                <div className="flex items-center mt-2 space-x-2">
                  <span className="text-xl font-bold text-black">
                    ₹{item.discountedPrice}
                  </span>
                  <span className="line-through text-gray-500 text-sm">
                    ₹{item.price}
                  </span>
                  <span className="text-green-600 text-sm">
                    {item.discount}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <button className="px-2 py-1 border rounded">-</button>
                  <span>1</span>
                  <button className="px-2 py-1 border rounded">+</button>
                  <button className="ml-4 text-blue-600 font-medium">
                    SAVE FOR LATER
                  </button>
                  <button className="ml-4 text-blue-600 font-medium">
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded">
              PLACE ORDER
            </button>
          </div>
        </div>
      )}
    </div>
  );
}