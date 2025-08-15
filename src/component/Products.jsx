import React, { useState } from 'react';
import products from '../utils/products.js';
const ProductCards = () => {
  const [favorites, setFavorites] = useState(new Set());
 
  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Featured Products</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 lg:gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              {/* Image Container */}
              <div className="relative flex justify-center bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-40 object-contain"
                />
                
                {/* Heart Icon */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-2 right-2 p-1 hover:bg-gray-200 rounded"
                >
                  <svg 
                    className={`w-4 h-4 ${
                      favorites.has(product.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'fill-none text-gray-400'
                    }`}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                    />
                  </svg>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4 pt-2">
                {/* Product Name */}
                <h3 className="text-sm text-gray-700 mb-2 line-clamp-2 leading-tight">
                  {product.name}
                </h3>
                
                {/* Discount */}
                <div className="text-xs text-green-600 font-medium mb-1">
                  - {product.discount}% Off ₹{product.originalPrice}
                </div>

                {/* Price and Assured */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-semibold text-gray-900">
                    ₹{product.price}
                  </span>
                  {product.assured && (
                    <div className="flex items-center">
                      <div className="bg-blue-500 text-white text-xs px-1 py-0.5 rounded flex items-center">
                        <span className="text-xs">f</span>
                        <span className="ml-0.5 text-xs font-medium">Assured</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Free Delivery */}
                <div className="text-xs text-gray-600">
                  {product.freeDelivery}
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





// import React, { useState, useEffect } from 'react';

// const ProductCards = () => {
//   const [favorites, setFavorites] = useState(new Set());
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // API se products fetch
//   useEffect(() => {
//     fetch("http://localhost/ecom-backend/products/get-all-products.php")
//       .then(res => res.json())
//       .then(data => {
//         if (data.status === 200) {
//           setProducts(data.data);
//         } else {
//           console.error("API Error:", data.message);
//         }
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Fetch Error:", err);
//         setLoading(false);
//       });
//   }, []);

//   const toggleFavorite = (productId) => {
//     const newFavorites = new Set(favorites);
//     if (newFavorites.has(productId)) {
//       newFavorites.delete(productId);
//     } else {
//       newFavorites.add(productId);
//     }
//     setFavorites(newFavorites);
//   };

//   if (loading) {
//     return <div className="text-center py-10">Loading products...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-2xl font-semibold text-gray-800 mb-6">Featured Products</h1>
        
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 lg:gap-4">
//           {products.map((product) => (
//             <div key={product.id} className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              
//               {/* Image Container */}
//               <div className="relative flex justify-center bg-gray-50">
//                 <img 
//                   src={product.image1} 
//                   alt={product.title}
//                   className="w-full h-40 object-contain"
//                 />
                
//                 {/* Heart Icon */}
//                 <button
//                   onClick={() => toggleFavorite(product.id)}
//                   className="absolute top-2 right-2 p-1 hover:bg-gray-200 rounded"
//                 >
//                   <svg 
//                     className={`w-4 h-4 ${
//                       favorites.has(product.id) 
//                         ? 'fill-red-500 text-red-500' 
//                         : 'fill-none text-gray-400'
//                     }`}
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path 
//                       strokeLinecap="round" 
//                       strokeLinejoin="round" 
//                       strokeWidth={2} 
//                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
//                     />
//                   </svg>
//                 </button>
//               </div>

//               {/* Product Info */}
//               <div className="p-4 pt-2">
//                 {/* Product Name */}
//                 <h3 className="text-sm text-gray-700 mb-2 line-clamp-2 leading-tight">
//                   {product.title}
//                 </h3>
                
//                 {/* Price */}
//                 <div className="text-lg font-semibold text-gray-900 mb-2">
//                   ₹{product.price}
//                 </div>

//                 {/* Category */}
//                 <div className="text-xs text-gray-600">
//                   {product.category}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCards;
