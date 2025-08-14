
// import React, { useState, useEffect } from 'react';
// import { Search, Bell, MoreHorizontal, TrendingUp, Users, Eye, ShoppingCart, ChevronDown } from 'lucide-react';

// export default function Dashboard() {
//   const [salesCount, setSalesCount] = useState(0);
//   const [ordersCount, setOrdersCount] = useState(0);
//   const [visitorsCount, setVisitorsCount] = useState(0);
//   const [selectedPeriod, setSelectedPeriod] = useState('Last 6 Days');
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [chartData, setChartData] = useState([]);

//   const periods = ['1 Day', 'Last 6 Days', '1 Month', '6 Months', '1 Year'];
  
//   // Chart data for different periods
//   const chartDataSets = {
//     '1 Day': [
//       { date: '14 Aug', height: 48, value: 12000 }
//     ],
//     'Last 6 Days': [
//       { date: '12 Aug', height: 32, value: 8000 },
//       { date: '13 Aug', height: 40, value: 10000 },
//       { date: '14 Aug', height: 48, value: 12000 },
//       { date: '15 Aug', height: 36, value: 9000 },
//       { date: '16 Aug', height: 44, value: 11000 },
//       { date: '17 Aug', height: 52, value: 14521 }
//     ],
//     '1 Month': [
//       { date: 'Week 1', height: 35, value: 45000 },
//       { date: 'Week 2', height: 42, value: 52000 },
//       { date: 'Week 3', height: 38, value: 48000 },
//       { date: 'Week 4', height: 48, value: 58000 }
//     ],
//     '6 Months': [
//       { date: 'Mar', height: 30, value: 180000 },
//       { date: 'Apr', height: 35, value: 210000 },
//       { date: 'May', height: 40, value: 240000 },
//       { date: 'Jun', height: 45, value: 270000 },
//       { date: 'Jul', height: 42, value: 252000 },
//       { date: 'Aug', height: 50, value: 300000 }
//     ],
//     '1 Year': [
//       { date: '2023', height: 35, value: 2400000 },
//       { date: '2024', height: 48, value: 3410000 }
//     ]
//   };

//   // Animation for counting numbers
//   useEffect(() => {
//     const animateCount = (setter, target, duration = 2000) => {
//       let start = 0;
//       const increment = target / (duration / 16);
//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= target) {
//           setter(target);
//           clearInterval(timer);
//         } else {
//           setter(Math.floor(start));
//         }
//       }, 16);
//     };

//     animateCount(setSalesCount, 983410);
//     animateCount(setOrdersCount, 58375);
//     animateCount(setVisitorsCount, 237782);
//   }, []);

//   // Update chart data when period changes
//   useEffect(() => {
//     setChartData(chartDataSets[selectedPeriod] || chartDataSets['Last 6 Days']);
//   }, [selectedPeriod]);

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       maximumFractionDigits: 0,
//     }).format(amount);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center border-b gap-4">
//         <h1 className="text-xl md:text-2xl font-bold text-gray-800">Dashboard</h1>
//         <div className="flex items-center gap-4 w-full md:w-auto">
//           <div className="relative flex-1 md:flex-none">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input 
//               type="text" 
//               placeholder="Search stock, order, etc." 
//               className="pl-10 pr-4 py-2 border rounded-lg bg-gray-50 text-sm w-full md:w-64"
//             />
//           </div>
//           <div className="relative">
//             <Bell className="w-6 h-6 text-gray-600" />
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
//           </div>
//           <div className="hidden md:flex items-center gap-2">
//             <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-medium">
//               M
//             </div>
//             <div className="text-sm">
//               <div className="font-medium">Marcus George</div>
//               <div className="text-gray-500">Admin</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="p-4 md:p-6">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
//           <div className="bg-white p-6 rounded-lg shadow-sm border">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-gray-600 text-sm">Total Sales</span>
//               <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
//                 <TrendingUp className="w-4 h-4 text-orange-500" />
//               </div>
//             </div>
//             <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
//               {formatCurrency(salesCount)}
//             </div>
//             <div className="text-green-600 text-sm">+3.34% vs last week</div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-sm border">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-gray-600 text-sm">Total Orders</span>
//               <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
//                 <ShoppingCart className="w-4 h-4 text-blue-500" />
//               </div>
//             </div>
//             <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
//               {ordersCount.toLocaleString('en-IN')}
//             </div>
//             <div className="text-red-600 text-sm">-2.8% vs last week</div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-sm border">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-gray-600 text-sm">Total Visitors</span>
//               <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
//                 <Eye className="w-4 h-4 text-gray-500" />
//               </div>
//             </div>
//             <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
//               {visitorsCount.toLocaleString('en-IN')}
//             </div>
//             <div className="text-green-600 text-sm">+8.02% vs last week</div>
//           </div>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//           {/* Revenue Analytics */}
//           <div className="lg:col-span-8 bg-white p-6 rounded-lg shadow-sm border">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
//               <h3 className="text-lg font-semibold">Revenue Analytics</h3>
//               <div className="relative">
//                 <button 
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2"
//                 >
//                   {selectedPeriod}
//                   <ChevronDown className="w-4 h-4" />
//                 </button>
//                 {dropdownOpen && (
//                   <div className="absolute right-0 top-full mt-1 bg-white border rounded-lg shadow-lg z-10 min-w-[150px]">
//                     {periods.map((period) => (
//                       <button
//                         key={period}
//                         onClick={() => {
//                           setSelectedPeriod(period);
//                           setDropdownOpen(false);
//                         }}
//                         className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
//                       >
//                         {period}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="h-64 relative">
//               {/* Grid Lines */}
//               <div className="absolute inset-0 flex flex-col justify-between">
//                 {[0, 1, 2, 3, 4].map((line) => (
//                   <div key={line} className="border-b border-gray-100"></div>
//                 ))}
//               </div>
              
//               {/* Y-axis Labels */}
//               <div className="absolute -left-4 h-full flex flex-col justify-between text-xs text-gray-500 py-2">
//                 <span>20K</span>
//                 <span>15K</span>
//                 <span>10K</span>
//                 <span>5K</span>
//                 <span>0</span>
//               </div>
              
//               {/* Chart Bars */}
//               <div className="h-full flex items-end justify-between px-8 relative">
//                 {chartData.map((item, index) => (
//                   <div key={index} className="flex flex-col items-center group">
//                     {/* Tooltip */}
//                     <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -top-12 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
//                       {formatCurrency(item.value)}
//                     </div>
                    
//                     {/* Bar */}
//                     <div className="relative">
//                       <div 
//                         className="w-8 md:w-12 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t-lg mb-3 transition-all duration-1000 ease-out hover:scale-110 hover:shadow-lg cursor-pointer"
//                         style={{ 
//                           height: `${Math.max(item.height * 4, 12)}px`,
//                           minHeight: '12px'
//                         }}
//                       ></div>
                      
//                       {/* Glow effect */}
//                       <div 
//                         className="absolute bottom-3 left-0 w-8 md:w-12 bg-orange-200 rounded-t-lg opacity-50 -z-10"
//                         style={{ 
//                           height: `${Math.max(item.height * 4, 12) + 4}px`,
//                           minHeight: '16px'
//                         }}
//                       ></div>
//                     </div>
                    
//                     {/* Date Label */}
//                     <span className="text-xs text-gray-600 font-medium">{item.date}</span>
//                   </div>
//                 ))}
//               </div>
              
//               {/* Trend Line */}
//               <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
//                 <defs>
//                   <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#fb923c" stopOpacity="0.8"/>
//                     <stop offset="100%" stopColor="#fdba74" stopOpacity="0.4"/>
//                   </linearGradient>
//                 </defs>
//                 <polyline
//                   fill="none"
//                   stroke="url(#trendGradient)"
//                   strokeWidth="3"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   points={chartData.map((item, index) => {
//                     const x = (index + 0.5) * (100 / chartData.length);
//                     const y = 100 - (item.height / 60 * 100);
//                     return `${x}%,${y}%`;
//                   }).join(' ')}
//                   className="animate-pulse"
//                 />
//               </svg>
//             </div>
//             <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
//                   <span>Revenue</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
//                   <span>Target</span>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <div className="font-semibold text-gray-800">
//                   {formatCurrency(chartData.length > 0 ? chartData[chartData.length - 1]?.value || 14521 : 14521)}
//                 </div>
//                 <div className="text-xs">Current Period</div>
//               </div>
//             </div>
//           </div>

//           {/* Top Categories */}
//           <div className="lg:col-span-4 bg-white p-6 rounded-lg shadow-sm border">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-semibold">Top Categories</h3>
//               <button className="text-blue-600 text-sm">See All</button>
//             </div>
            
//             {/* Enhanced Donut Chart */}
//             <div className="flex justify-center mb-6">
//               <div className="relative w-40 h-40 md:w-48 md:h-48">
//                 <div className="w-full h-full rounded-full" style={{
//                   background: `conic-gradient(#fb923c 0% 40%, #fdba74 40% 70%, #fed7aa 70% 85%, #fef3e2 85% 100%)`
//                 }}>
//                   <div className="absolute inset-6 bg-white rounded-full"></div>
//                 </div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="text-lg md:text-xl font-bold">₹3.4Cr</div>
//                     <div className="text-xs text-gray-500">Total</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-3">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
//                   <span className="text-sm">Electronics</span>
//                 </div>
//                 <span className="text-sm font-medium">₹1.2Cr</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
//                   <span className="text-sm">Fashion</span>
//                 </div>
//                 <span className="text-sm font-medium">₹95L</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
//                   <span className="text-sm">Home & Kitchen</span>
//                 </div>
//                 <span className="text-sm font-medium">₹75L</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-orange-100 rounded-full"></div>
//                   <span className="text-sm">Beauty & Personal Care</span>
//                 </div>
//                 <span className="text-sm font-medium">₹50L</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Second Row */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-6">
//           {/* Monthly Target */}
//           <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-sm border">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold">Monthly Target</h3>
//               <MoreHorizontal className="w-5 h-5 text-gray-400" />
//             </div>
//             <div className="flex justify-center mb-4">
//               <div className="relative w-24 h-24">
//                 <svg className="w-24 h-24 transform -rotate-90">
//                   <circle cx="48" cy="48" r="40" stroke="#fed7aa" strokeWidth="8" fill="none" />
//                   <circle 
//                     cx="48" cy="48" r="40" 
//                     stroke="#fb923c" 
//                     strokeWidth="8" 
//                     fill="none"
//                     strokeDasharray="213"
//                     strokeDashoffset="32"
//                     className="transition-all duration-[2000ms] ease-out"
//                   />
//                 </svg>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <span className="text-2xl font-bold">85%</span>
//                 </div>
//               </div>
//             </div>
//             <div className="text-center mb-4">
//               <div className="text-sm text-gray-600">Great Progress! 🎉</div>
//             </div>
//             <div className="space-y-2">
//               <div className="flex justify-between text-sm">
//                 <span>₹90L</span>
//                 <span>₹91L</span>
//               </div>
//             </div>
//           </div>

//           {/* Active User */}
//           <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border">
//             <h3 className="text-lg font-semibold mb-4">Active User</h3>
//             <div className="text-2xl font-bold mb-1">2,758</div>
//             <div className="text-green-600 text-sm mb-4">+8.03% from last month</div>
//             <div className="space-y-3">
//               <div className="flex justify-between text-sm">
//                 <span>United States</span>
//                 <span>36%</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span>United Kingdom</span>
//                 <span>24%</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span>Indonesia</span>
//                 <span>17.5%</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span>Russia</span>
//                 <span>15%</span>
//               </div>
//             </div>
//           </div>

//           {/* Conversion Rate */}
//           <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-sm border">
//             <h3 className="text-lg font-semibold mb-4">Conversion Rate</h3>
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
//               <div>
//                 <div className="text-sm text-gray-600 mb-1">Pending to Clients</div>
//                 <div className="text-lg font-bold">25,000</div>
//                 <div className="text-green-600 text-xs">+5%</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-600 mb-1">Completed by Clients</div>
//                 <div className="text-lg font-bold">12,000</div>
//                 <div className="text-red-600 text-xs">-8%</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-600 mb-1">Completed by Admin</div>
//                 <div className="text-lg font-bold">8,500</div>
//                 <div className="text-green-600 text-xs">+3%</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-600 mb-1">New</div>
//                 <div className="text-lg font-bold">6,200</div>
//                 <div className="text-red-600 text-xs">-2%</div>
//               </div>
//             </div>
//             <div className="mt-4">
//               <button className="w-full bg-orange-500 text-white py-2 rounded-lg text-sm">This Week</button>
//             </div>
//           </div>

//           {/* Traffic Sources */}
//           <div className="lg:col-span-4 bg-white p-6 rounded-lg shadow-sm border">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold">Traffic Sources</h3>
//               <MoreHorizontal className="w-5 h-5 text-gray-400" />
//             </div>
//             <div className="space-y-3">
//               <div className="flex items-center justify-between">
//                 <span className="text-sm">Direct Traffic</span>
//                 <span className="text-sm font-medium">40%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div className="bg-orange-500 h-2 rounded-full transition-all duration-1000 ease-out animate-pulse" style={{ width: '40%' }}></div>
//               </div>
              
//               <div className="flex items-center justify-between">
//                 <span className="text-sm">Organic Search</span>
//                 <span className="text-sm font-medium">30%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div className="bg-orange-400 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '30%' }}></div>
//               </div>
              
//               <div className="flex items-center justify-between">
//                 <span className="text-sm">Social Media</span>
//                 <span className="text-sm font-medium">15%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div className="bg-orange-300 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '15%' }}></div>
//               </div>
              
//               <div className="flex items-center justify-between">
//                 <span className="text-sm">Referral Traffic</span>
//                 <span className="text-sm font-medium">10%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div className="bg-orange-200 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '10%' }}></div>
//               </div>
              
//               <div className="flex items-center justify-between">
//                 <span className="text-sm">Email Campaigns</span>
//                 <span className="text-sm font-medium">5%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div className="bg-orange-100 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '5%' }}></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Row */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
//           {/* Recent Orders */}
//           <div className="bg-white p-6 rounded-lg shadow-sm border">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
//               <h3 className="text-lg font-semibold">Recent Orders</h3>
//               <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm">All Categories</button>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm">
//                 <thead>
//                   <tr className="text-left text-gray-600 border-b">
//                     <th className="pb-2">No</th>
//                     <th className="pb-2">Order ID</th>
//                     <th className="pb-2">Customer</th>
//                     <th className="pb-2 hidden md:table-cell">Product</th>
//                     <th className="pb-2">Qty</th>
//                     <th className="pb-2">Total</th>
//                     <th className="pb-2">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-b">
//                     <td className="py-3">1</td>
//                     <td className="py-3">#10234</td>
//                     <td className="py-3">Amaya Weiler</td>
//                     <td className="py-3 hidden md:table-cell">Wireless Headphones</td>
//                     <td className="py-3">2</td>
//                     <td className="py-3">₹8,200</td>
//                     <td className="py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Shipped</span></td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-3">2</td>
//                     <td className="py-3">#10235</td>
//                     <td className="py-3">Sebastian Adams</td>
//                     <td className="py-3 hidden md:table-cell">Running Shoes</td>
//                     <td className="py-3">1</td>
//                     <td className="py-3">₹6,150</td>
//                     <td className="py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Processing</span></td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-3">3</td>
//                     <td className="py-3">#10236</td>
//                     <td className="py-3">Suzanne Bright</td>
//                     <td className="py-3 hidden md:table-cell">Smartwatch</td>
//                     <td className="py-3">1</td>
//                     <td className="py-3">₹12,300</td>
//                     <td className="py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Delivered</span></td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-3">4</td>
//                     <td className="py-3">#10237</td>
//                     <td className="py-3">Peter Hovel</td>
//                     <td className="py-3 hidden md:table-cell">Coffee Maker</td>
//                     <td className="py-3">1</td>
//                     <td className="py-3">₹4,920</td>
//                     <td className="py-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Pending</span></td>
//                   </tr>
//                   <tr>
//                     <td className="py-3">5</td>
//                     <td className="py-3">#10238</td>
//                     <td className="py-3">Anita Singh</td>
//                     <td className="py-3 hidden md:table-cell">Bluetooth Speaker</td>
//                     <td className="py-3">3</td>
//                     <td className="py-3">₹7,380</td>
//                     <td className="py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Shipped</span></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Recent Activity */}
//           <div className="bg-white p-6 rounded-lg shadow-sm border">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold">Recent Activity</h3>
//               <MoreHorizontal className="w-5 h-5 text-gray-400" />
//             </div>
//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
//                   M
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm">Miaunten Steel purchased 2 items totaling ₹8,200.</p>
//                   <p className="text-xs text-gray-500">10:35 AM</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-3">
//                 <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
//                   T
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm">The price of "Smart TV" was updated from ₹41,000 to ₹36,900.</p>
//                   <p className="text-xs text-gray-500">09:45 AM</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-3">
//                 <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
//                   V
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm">Vincent Laurent left a 5-star review for "Wireless Headphones".</p>
//                   <p className="text-xs text-gray-500">09:30 AM</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-3">
//                 <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
//                   R
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm">"Running Shoes" stock is below 10 units.</p>
//                   <p className="text-xs text-gray-500">09:15 AM</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-3">
//                 <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
//                   D
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm">Damian's order status changed from "Pending" to "Processing".</p>
//                   <p className="text-xs text-gray-500">08:57 AM</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Search, Bell, MoreHorizontal, TrendingUp, Users, Eye, ShoppingCart, ChevronDown } from 'lucide-react';

export default function Dashboard() {
  const [salesCount, setSalesCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [visitorsCount, setVisitorsCount] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState('Last 6 Days');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const periods = ['1 Day', 'Last 6 Days', '1 Month', '6 Months', '1 Year'];
  
  // Chart data for different periods
  const chartDataSets = {
    '1 Day': [
      { date: '14 Aug', height: 48, value: 12000 }
    ],
    'Last 6 Days': [
      { date: '12 Aug', height: 32, value: 8000 },
      { date: '13 Aug', height: 40, value: 10000 },
      { date: '14 Aug', height: 48, value: 12000 },
      { date: '15 Aug', height: 36, value: 9000 },
      { date: '16 Aug', height: 44, value: 11000 },
      { date: '17 Aug', height: 52, value: 14521 }
    ],
    '1 Month': [
      { date: 'Week 1', height: 35, value: 45000 },
      { date: 'Week 2', height: 42, value: 52000 },
      { date: 'Week 3', height: 38, value: 48000 },
      { date: 'Week 4', height: 48, value: 58000 }
    ],
    '6 Months': [
      { date: 'Mar', height: 30, value: 180000 },
      { date: 'Apr', height: 35, value: 210000 },
      { date: 'May', height: 40, value: 240000 },
      { date: 'Jun', height: 45, value: 270000 },
      { date: 'Jul', height: 42, value: 252000 },
      { date: 'Aug', height: 50, value: 300000 }
    ],
    '1 Year': [
      { date: '2023', height: 35, value: 2400000 },
      { date: '2024', height: 48, value: 3410000 }
    ]
  };

  // Animation for counting numbers and loading
  useEffect(() => {
    // Set loading animation
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const animateCount = (setter, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    const countTimer = setTimeout(() => {
      animateCount(setSalesCount, 983410);
      animateCount(setOrdersCount, 58375);
      animateCount(setVisitorsCount, 237782);
    }, 300);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(countTimer);
    };
  }, []);

  // Update chart data when period changes
  useEffect(() => {
    setChartData(chartDataSets[selectedPeriod] || chartDataSets['Last 6 Days']);
  }, [selectedPeriod]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

      {/* Header */}
      <div className="bg-white px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center border-b gap-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search stock, order, etc." 
              className="pl-10 pr-4 py-2 border rounded-lg bg-gray-50 text-sm w-full md:w-64"
            />
          </div>
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-medium">
              M
            </div>
            <div className="text-sm">
              <div className="font-medium">Marcus George</div>
              <div className="text-gray-500">Admin</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className={`bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-700 hover:shadow-md ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Total Sales</span>
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-orange-500" />
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
              {formatCurrency(salesCount)}
            </div>
            <div className="text-green-600 text-sm">+3.34% vs last week</div>
          </div>

          <div className={`bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-700 hover:shadow-md ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Total Orders</span>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-blue-500" />
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
              {ordersCount.toLocaleString('en-IN')}
            </div>
            <div className="text-red-600 text-sm">-2.8% vs last week</div>
          </div>

          <div className={`bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-700 hover:shadow-md ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Total Visitors</span>
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <Eye className="w-4 h-4 text-gray-500" />
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
              {visitorsCount.toLocaleString('en-IN')}
            </div>
            <div className="text-green-600 text-sm">+8.02% vs last week</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Revenue Analytics */}
          <div className={`lg:col-span-8 bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-700 hover:shadow-md ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h3 className="text-lg font-semibold">Revenue Analytics</h3>
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-orange-600 transition-colors duration-200"
                >
                  {selectedPeriod}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-white border rounded-lg shadow-lg z-10 min-w-[150px] animate-fadeIn">
                    {periods.map((period) => (
                      <button
                        key={period}
                        onClick={() => {
                          setSelectedPeriod(period);
                          setDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors duration-150"
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="h-64 relative">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3, 4].map((line) => (
                  <div key={line} className="border-b border-gray-100"></div>
                ))}
              </div>
              
              {/* Y-axis Labels */}
              <div className="absolute -left-4 h-full flex flex-col justify-between text-xs text-gray-500 py-2">
                <span>20K</span>
                <span>15K</span>
                <span>10K</span>
                <span>5K</span>
                <span>0</span>
              </div>
              
              {/* Chart Bars */}
              <div className="h-full flex items-end justify-between px-8 relative">
                {chartData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center group">
                    {/* Tooltip - Only on bars, not button */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -top-12 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-20">
                      {formatCurrency(item.value)}
                    </div>
                    
                    {/* Bar */}
                    <div className="relative">
                      <div 
                        className="w-8 md:w-12 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t-lg mb-3 transition-all duration-1000 ease-out hover:scale-110 hover:shadow-lg cursor-pointer"
                        style={{ 
                          height: `${Math.max(item.height * 4, 12)}px`,
                          minHeight: '12px'
                        }}
                      ></div>
                      
                      {/* Glow effect */}
                      <div 
                        className="absolute bottom-3 left-0 w-8 md:w-12 bg-orange-200 rounded-t-lg opacity-50 -z-10"
                        style={{ 
                          height: `${Math.max(item.height * 4, 12) + 4}px`,
                          minHeight: '16px'
                        }}
                      ></div>
                    </div>
                    
                    {/* Date Label */}
                    <span className="text-xs text-gray-600 font-medium">{item.date}</span>
                  </div>
                ))}
              </div>
              
              {/* Trend Line */}
              <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
                <defs>
                  <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fb923c" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#fdba74" stopOpacity="0.4"/>
                  </linearGradient>
                </defs>
                <polyline
                  fill="none"
                  stroke="url(#trendGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={chartData.map((item, index) => {
                    const x = (index + 0.5) * (100 / chartData.length);
                    const y = 100 - (item.height / 60 * 100);
                    return `${x}%,${y}%`;
                  }).join(' ')}
                  className="animate-pulse"
                />
              </svg>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
                  <span>Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
                  <span>Target</span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-800">
                  {formatCurrency(chartData.length > 0 ? chartData[chartData.length - 1]?.value || 14521 : 14521)}
                </div>
                <div className="text-xs">Current Period</div>
              </div>
            </div>
          </div>

          {/* Top Categories */}
          <div className={`lg:col-span-4 bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-700 hover:shadow-md ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Top Categories</h3>
              <button className="text-blue-600 text-sm hover:text-blue-700 transition-colors duration-200">See All</button>
            </div>
            
            {/* Enhanced Donut Chart */}
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40 md:w-48 md:h-48">
                <div className="w-full h-full rounded-full" style={{
                  background: `conic-gradient(#fb923c 0% 40%, #fdba74 40% 70%, #fed7aa 70% 85%, #fef3e2 85% 100%)`
                }}>
                  <div className="absolute inset-6 bg-white rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg md:text-xl font-bold">₹3.4Cr</div>
                    <div className="text-xs text-gray-500">Total</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Electronics</span>
                </div>
                <span className="text-sm font-medium">₹1.2Cr</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
                  <span className="text-sm">Fashion</span>
                </div>
                <span className="text-sm font-medium">₹95L</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
                  <span className="text-sm">Home & Kitchen</span>
                </div>
                <span className="text-sm font-medium">₹75L</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-100 rounded-full"></div>
                  <span className="text-sm">Beauty & Personal Care</span>
                </div>
                <span className="text-sm font-medium">₹50L</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-6">
          {/* Monthly Target */}
          <div className={`lg:col-span-3 bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-700 hover:shadow-md ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Monthly Target</h3>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex justify-center mb-4">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="#fed7aa" strokeWidth="8" fill="none" />
                  <circle 
                    cx="48" cy="48" r="40" 
                    stroke="#fb923c" 
                    strokeWidth="8" 
                    fill="none"
                    strokeDasharray="213"
                    strokeDashoffset="32"
                    className="transition-all duration-[2000ms] ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">85%</span>
                </div>
              </div>
            </div>
            <div className="text-center mb-4">
              <div className="text-sm text-gray-600">Great Progress! 🎉</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>₹90L</span>
                <span>₹91L</span>
              </div>
            </div>
          </div>

          {/* Active User */}
          <div className={`lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-700 hover:shadow-md ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
            <h3 className="text-lg font-semibold mb-4">Active User</h3>
            <div className="text-2xl font-bold mb-1">2,758</div>
            <div className="text-green-600 text-sm mb-4">+8.03% from last month</div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>United States</span>
                <span>36%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>United Kingdom</span>
                <span>24%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Indonesia</span>
                <span>17.5%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Russia</span>
                <span>15%</span>
              </div>
            </div>
          </div>

          {/* Conversion Rate */}
          <div className={`lg:col-span-3 bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-700 hover:shadow-md ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
            <h3 className="text-lg font-semibold mb-4">Conversion Rate</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-sm text-gray-600 mb-1">Pending to Clients</div>
                <div className="text-lg font-bold">25,000</div>
                <div className="text-green-600 text-xs">+5%</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Completed by Clients</div>
                <div className="text-lg font-bold">12,000</div>
                <div className="text-red-600 text-xs">-8%</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Completed by Admin</div>
                <div className="text-lg font-bold">8,500</div>
                <div className="text-green-600 text-xs">+3%</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">New</div>
                <div className="text-lg font-bold">6,200</div>
                <div className="text-red-600 text-xs">-2%</div>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full bg-orange-500 text-white py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors duration-200">This Week</button>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className={`lg:col-span-4 bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-700 hover:shadow-md ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '900ms' }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Traffic Sources</h3>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Direct Traffic</span>
                <span className="text-sm font-medium">40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`bg-orange-500 h-2 rounded-full transition-all duration-1000 ease-out ${isLoaded ? 'animate-pulse' : ''}`} style={{ width: isLoaded ? '40%' : '0%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Organic Search</span>
                <span className="text-sm font-medium">30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`bg-orange-400 h-2 rounded-full transition-all duration-1200 ease-out`} style={{ width: isLoaded ? '30%' : '0%', transitionDelay: '200ms' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Social Media</span>
                <span className="text-sm font-medium">15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`bg-orange-300 h-2 rounded-full transition-all duration-1400 ease-out`} style={{ width: isLoaded ? '15%' : '0%', transitionDelay: '400ms' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Referral Traffic</span>
                <span className="text-sm font-medium">10%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`bg-orange-200 h-2 rounded-full transition-all duration-1600 ease-out`} style={{ width: isLoaded ? '10%' : '0%', transitionDelay: '600ms' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Email Campaigns</span>
                <span className="text-sm font-medium">5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`bg-orange-100 h-2 rounded-full transition-all duration-1800 ease-out`} style={{ width: isLoaded ? '5%' : '0%', transitionDelay: '800ms' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Recent Orders */}
          <div className={`bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-700 hover:shadow-md ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
              <h3 className="text-lg font-semibold">Recent Orders</h3>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors duration-200">All Categories</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="pb-2">No</th>
                    <th className="pb-2">Order ID</th>
                    <th className="pb-2">Customer</th>
                    <th className="pb-2 hidden md:table-cell">Product</th>
                    <th className="pb-2">Qty</th>
                    <th className="pb-2">Total</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50 transition-colors duration-150">
                    <td className="py-3">1</td>
                    <td className="py-3">#10234</td>
                    <td className="py-3">Amaya Weiler</td>
                    <td className="py-3 hidden md:table-cell">Wireless Headphones</td>
                    <td className="py-3">2</td>
                    <td className="py-3">₹8,200</td>
                    <td className="py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Shipped</span></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors duration-150">
                    <td className="py-3">2</td>
                    <td className="py-3">#10235</td>
                    <td className="py-3">Sebastian Adams</td>
                    <td className="py-3 hidden md:table-cell">Running Shoes</td>
                    <td className="py-3">1</td>
                    <td className="py-3">₹6,150</td>
                    <td className="py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Processing</span></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors duration-150">
                    <td className="py-3">3</td>
                    <td className="py-3">#10236</td>
                    <td className="py-3">Suzanne Bright</td>
                    <td className="py-3 hidden md:table-cell">Smartwatch</td>
                    <td className="py-3">1</td>
                    <td className="py-3">₹12,300</td>
                    <td className="py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Delivered</span></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors duration-150">
                    <td className="py-3">4</td>
                    <td className="py-3">#10237</td>
                    <td className="py-3">Peter Hovel</td>
                    <td className="py-3 hidden md:table-cell">Coffee Maker</td>
                    <td className="py-3">1</td>
                    <td className="py-3">₹4,920</td>
                    <td className="py-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Pending</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="py-3">5</td>
                    <td className="py-3">#10238</td>
                    <td className="py-3">Anita Singh</td>
                    <td className="py-3 hidden md:table-cell">Bluetooth Speaker</td>
                    <td className="py-3">3</td>
                    <td className="py-3">₹7,380</td>
                    <td className="py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Shipped</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity */}
          <div className={`bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-700 hover:shadow-md ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '1100ms' }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-150">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                  M
                </div>
                <div className="flex-1">
                  <p className="text-sm">Miaunten Steel purchased 2 items totaling ₹8,200.</p>
                  <p className="text-xs text-gray-500">10:35 AM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-150">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                  T
                </div>
                <div className="flex-1">
                  <p className="text-sm">The price of "Smart TV" was updated from ₹41,000 to ₹36,900.</p>
                  <p className="text-xs text-gray-500">09:45 AM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-150">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                  V
                </div>
                <div className="flex-1">
                  <p className="text-sm">Vincent Laurent left a 5-star review for "Wireless Headphones".</p>
                  <p className="text-xs text-gray-500">09:30 AM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-150">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                  R
                </div>
                <div className="flex-1">
                  <p className="text-sm">"Running Shoes" stock is below 10 units.</p>
                  <p className="text-xs text-gray-500">09:15 AM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-150">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                  D
                </div>
                <div className="flex-1">
                  <p className="text-sm">Damian's order status changed from "Pending" to "Processing".</p>
                  <p className="text-xs text-gray-500">08:57 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}