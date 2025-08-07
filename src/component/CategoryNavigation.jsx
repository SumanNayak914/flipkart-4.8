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
        <div className="flex space-x-8 min-w-max justify-evenly">
          {categories.map((category) => {
            return (
              <div 
                key={category.id}
                className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity min-w-[80px]"
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-2 shadow-sm overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <span className="text-sm text-gray-700 font-medium text-center whitespace-nowrap">
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