import React from 'react';
import { Star, Shield, Truck, Calendar, CreditCard, Award, ChevronRight, Info } from 'lucide-react';

export default function FlipkartProductPage() {
  return (
    <div className="bg-white min-h-fit font-sans text-sm max-w-md mx-auto">
      {/* Header */}
      <div className="p-3 sm:p-4"> 
        {/* Brand and Product */}
        <div className="mb-3">
          <div className="text-gray-900 font-semibold text-lg mb-1">OPPO</div>
          <div className="text-gray-800 text-base leading-tight">
            F27 Pro+ (Midnight Navy, 256 GB) (8 GB RAM)
          </div>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4].map((star) => (
              <Star key={star} className="w-3.5 h-3.5 fill-green-500 text-green-500" />
            ))}
            <div className="relative">
              <Star className="w-3.5 h-3.5 fill-gray-300 text-gray-300" />
              <div className="absolute inset-0 overflow-hidden w-2/3">
                <Star className="w-3.5 h-3.5 fill-green-500 text-green-500" />
              </div>
            </div>
          </div>
          <span className="text-green-600 font-medium text-sm">4.4</span>
          <span className="text-gray-400 text-xs">•</span>
          <span className="text-blue-600 text-sm">Very Good</span>
          <span className="text-gray-400 text-xs">•</span>
          <span className="text-gray-600 text-sm">7,809 ratings</span>
          <div className="flex items-center gap-1 ml-1">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs text-blue-600 font-medium">Assured</span>
          </div>
        </div>
        
        {/* Price Badge */}
        <div className="bg-purple-600 text-white px-2.5 py-1 rounded-sm inline-block mb-3 text-xs font-medium">
          Lowest Price in the year
        </div>
        
        {/* Price Section */}
        <div className="flex items-baseline gap-2 mb-4">
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 14l5-5 5 5z"/>
            </svg>
            <span className="text-green-600 text-sm font-medium">48%</span>
          </div>
          <span className="text-gray-400 line-through text-base">₹34,999</span>
          <span className="text-black text-2xl font-bold">₹17,999</span>
        </div>
        
        {/* Additional Costs */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700 text-sm">+ ₹69 Protect Promise Fee</span>
          <span className="text-blue-600 text-sm font-medium underline">Learn more</span>
        </div>
        
        <div className="text-gray-700 mb-4 text-sm">
          Secure delivery by 11 PM Tomorrow
        </div>
        
        {/* SuperCoins */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">⚡</span>
          </div>
          <span className="text-gray-800 text-sm">40 SuperCoins cashback for</span>
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">⚡</span>
            <span className="text-orange-500 font-semibold text-sm">Plus Gold</span>
          </div>
          <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
            <Info className="w-2.5 h-2.5 text-gray-500" />
          </div>
        </div>
        
        {/* EMI */}
        <div className="mb-6">
          <span className="text-gray-800 text-sm">EMI from </span>
          <span className="text-black font-semibold text-sm">₹869/month. </span>
          <span className="text-blue-600 font-medium text-sm underline">View Plans</span>
        </div>
        
        {/* Delivery Address */}
        <div className="border-t border-gray-200 pt-4 mb-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-gray-800 text-sm">Deliver to:</span>
                <span className="text-black font-medium text-sm">Alok Ku...</span>
                <span className="text-gray-600 text-sm">, 751012</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-medium">HOME</span>
              </div>
              <div className="text-gray-600 text-sm truncate">
                402, SUPRIT VILLA, Nuasahi, Nayapa...
              </div>
            </div>
            <button className="border border-gray-300 px-3 py-1.5 rounded text-blue-600 font-medium text-sm ml-2 whitespace-nowrap">
              Change
            </button>
          </div>
        </div>
        
        {/* Express Delivery */}
        <div className="flex items-center justify-between py-3 border-t border-gray-100 active:bg-gray-50 cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="p-1">
              <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20,8h-3V4H3C1.89,4 1,4.89 1,6v12c0,1.11 0.89,2 2,2h2c0,-1.66 1.34,-3 3,-3s3,1.34 3,3h6c0,-1.66 1.34,-3 3,-3s3,1.34 3,3h2c1.11,0 2,-0.89 2,-2V12L20,8zM8,18.5c-0.83,0 -1.5,-0.67 -1.5,-1.5s0.67,-1.5 1.5,-1.5s1.5,0.67 1.5,1.5S8.83,18.5 8,18.5zM20,18.5c-0.83,0 -1.5,-0.67 -1.5,-1.5s0.67,-1.5 1.5,-1.5s1.5,0.67 1.5,1.5S20.83,18.5 20,18.5zM17,12V9.5h2.5L21,12H17z"/>
              </svg>
            </div>
            <div>
              <span className="text-black font-semibold text-sm">EXPRESS</span>
              <span className="text-gray-700 text-sm"> Delivery by Tomorrow, 11 PM</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
        
        {/* Bottom Features */}
        <div className="flex justify-between items-start pt-6 border-t border-gray-100">
          <div className="text-center flex-1 px-2">
            <div className="mb-3">
              <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="4" width="18" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="7" y="2" width="10" height="4" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 14h8M8 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="text-xs text-gray-700 leading-tight">
              <div className="font-medium">7 Days Brand</div>
              <div>Support</div>
            </div>
          </div>
          
          <div className="text-center flex-1 px-2">
            <div className="mb-3">
              <div className="w-10 h-10 bg-green-500 rounded mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-lg">₹</span>
              </div>
            </div>
            <div className="text-xs text-gray-700 leading-tight">
              <div className="font-medium">Cash On Delivery</div>
              <div>available</div>
            </div>
          </div>
          
          <div className="text-center flex-1 px-2">
            <div className="mb-3">
              <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                <div className="relative">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-700">
              <div className="font-medium">F-Assured</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}