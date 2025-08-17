import React, { useState } from "react";
import { ArrowLeft, Heart, Share2 } from "lucide-react";

const ProductPage = ({product}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-fit bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            <span className="font-medium">Back</span>
          </button>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-full ${
                isFavorite ? "text-red-500" : "text-gray-400"
              } hover:bg-gray-100`}
            >
              <Heart
                className={`w-6 h-6 ${isFavorite ? "fill-current" : ""}`}
              />
            </button>
            <button className="p-2 rounded-full text-gray-400 hover:bg-gray-100">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Product Images */}
          <div className="flex flex-col items-center">
            {/* Main Image Carousel */}
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg w-full max-w-md">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${selectedImage * 100}%)` }}
              >
                {product.images.map((image, index) => (
                  <div key={index} className="min-w-full h-full">
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-contain select-none"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                {selectedImage + 1} / {product.images.length}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-3">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    selectedImage === index
                      ? "bg-blue-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-3 justify-center mt-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-blue-500 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Placeholder for Product Details (right column) */}
          <div className="hidden lg:block">
            <h1 className="text-2xl font-semibold">{product.title}</h1>
            <p className="text-xl text-green-600 mt-2">{product.discount}</p>
            <div className="mt-2 flex items-center space-x-3">
              <span className="text-2xl font-bold">{product.price}</span>
              <span className="line-through text-gray-400">
                {product.originalPrice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
