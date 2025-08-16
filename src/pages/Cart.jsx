import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Star, ChevronDown, Bookmark, ShoppingBag } from 'lucide-react';

const cartItems = [
  {
    id: 1,
    name: "TRIPR Solid Men Mandarin Collar Dar...",
    size: "S",
    rating: 3.8,
    reviews: 45646,
    originalPrice: 1999,
    salePrice: 223,
    discount: 88,
    payLaterPrice: 211,
    deliveryDate: "Aug 23, Sat",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=120&fit=crop&crop=face",
    quantity: 1
  }
];

export default function Cart() {
  const [items, setItems] = useState(cartItems);
  const [quantity, setQuantity] = useState(1);
  const [isSaved, setIsSaved] = useState(false);

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
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Hot Deal Badge */}
          <div className="bg-red-500 text-white text-xs font-medium px-2 py-1 inline-block m-3 rounded">
            Hot Deal
          </div>

          {/* Product Section */}
          <div className="px-3 pb-3">
            <div className="flex gap-3 mb-3">
              {/* Product Image */}
              <div className="w-16 h-20 bg-green-800 rounded flex-shrink-0 overflow-hidden">
                <img 
                  src={items[0].image}
                  alt="TRIPR Shirt"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Product Details */}
              <div className="flex-1">
                <h3 className="text-sm font-normal text-gray-900 mb-1 leading-tight">
                  {items[0].name}
                </h3>
                <p className="text-xs text-gray-500 mb-2">Size: {items[0].size}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-green-500 text-green-500" />
                    ))}
                    <Star className="w-3 h-3 text-gray-300" />
                  </div>
                  <span className="text-xs text-gray-600 ml-1">{items[0].rating}</span>
                  <span className="text-xs text-gray-400">• ({items[0].reviews.toLocaleString()})</span>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">Qty:</span>
                  <div className="relative">
                    <select 
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="appearance-none border border-gray-300 rounded px-2 py-1 pr-6 text-sm bg-white focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-green-600 text-white text-xs font-bold px-1 py-0.5 rounded">
                  ↓{items[0].discount}%
                </span>
                <span className="text-gray-400 line-through text-sm">₹{items[0].originalPrice}</span>
                <span className="text-xl font-bold text-black">₹{items[0].salePrice}</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="text-gray-600">Or Pay</span>
                <span className="text-orange-500 font-medium">₹{items[0].payLaterPrice}</span>
                <span className="text-orange-400">+ ● 12</span>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="mb-4">
              <p className="text-xs text-gray-600">
                Delivery by <span className="font-medium text-black">{items[0].deliveryDate}</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 text-sm">
              <button
                onClick={() => setIsSaved(!isSaved)}
                className="flex items-center justify-center gap-1 px-3 py-2 border border-gray-300 rounded text-gray-700 bg-white flex-1"
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-gray-700' : ''}`} />
                <span className="text-xs">Save for later</span>
              </button>
              
              <button 
                onClick={() => setItems([])}
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

          {/* Price Details Section */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-900">Price Details</h3>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 flex items-center gap-1">
                  Price (1 item)
                  <div className="w-3 h-3 rounded-full border border-gray-400 flex items-center justify-center text-xs text-gray-500">i</div>
                </span>
                <span className="text-gray-900">₹1,999</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Discount</span>
                <span className="text-green-600">-₹1,756</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 flex items-center gap-1">
                  Coupons for you
                  <div className="w-3 h-3 rounded-full border border-gray-400 flex items-center justify-center text-xs text-gray-500">i</div>
                </span>
                <span className="text-gray-600">-₹20</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 flex items-center gap-1">
                  Platform Fee
                  <div className="w-3 h-3 rounded-full border border-gray-400 flex items-center justify-center text-xs text-gray-500">i</div>
                </span>
                <span className="text-gray-900">₹5</span>
              </div>
              
              <hr className="border-gray-200 my-3" />
              
              <div className="flex justify-between font-medium">
                <span className="text-gray-900">Total Amount</span>
                <span className="text-gray-900">₹228</span>
              </div>
            </div>
            
            {/* Savings Banner */}
            <div className="bg-green-50 border border-green-200 rounded-md p-3 mt-3 flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-green-700 text-sm font-medium">You'll save ₹1,771 on this order!</span>
            </div>
          </div>

          {/* Security Info and Place Order */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-4 text-gray-600 text-xs">
              <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <div>
                <div>Safe and secure payments. Easy returns.</div>
                <div>100% Authentic products.</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400 line-through">₹1,999</div>
                <div className="text-lg font-bold text-gray-900">₹228</div>
              </div>
              <button className="bg-yellow-400 text-black font-medium px-8 py-3 rounded-md text-sm">
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}