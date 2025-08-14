import React from 'react';
import categories from '../utils/categories.js';

const CategoryNavigation = () => {

  return (
    <>
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="w-full bg-white py-4 px-4 overflow-x-auto scrollbar-hide">
        {/* Adjusted spacing to space-x-4 */}
        <div className="flex space-x-4 min-w-max justify-evenly">
          {categories.map((category) => {
            return (
              <div
                key={category.id}
                className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity min-w-[60px]" // Min-width adjusted
              >
                {/* Adjusted size to w-12 h-12 and padding on inner elements */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-1 shadow-sm overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                {/* Adjusted text size to text-xs and reduced line-height */}
                <span className="text-xs text-gray-700 font-medium text-center whitespace-nowrap leading-tight">
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryNavigation;