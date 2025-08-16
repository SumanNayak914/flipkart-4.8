import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const ProductCards = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [assured, setAssured] = useState(true);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost/ecom-backend/products/get-all-products.php")
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          setProducts(data.data);
        } else {
          console.error("API Error:", data.message);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Featured Products</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 lg:gap-4">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
              onClick={() => handleClick(product.id)}
            >
              {/* Image Container */}
              <div className="relative flex justify-center bg-gray-50">
                <img 
                  src={product?.image1} 
                  alt={product.title}
                  className="w-full h-40 object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 pt-2">
                <h3 className="text-sm text-gray-700 mb-2 line-clamp-2 leading-tight">
                  {product.title}
                </h3>
                <div className="text-xs text-green-600 font-medium mb-1">
                  - 50% Off ₹{product?.price}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-semibold text-gray-900">
                    ₹{product?.price}
                  </span>
                </div>
                <div className="text-xs text-gray-600">
                  Delivery in 2 Days
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
