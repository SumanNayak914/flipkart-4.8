import React from 'react';
import { Search, Bell, MoreHorizontal, TrendingUp, Users, Eye, ShoppingCart } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex justify-between items-center border-b">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search stock, order, etc." 
              className="pl-10 pr-4 py-2 border rounded-lg bg-gray-50 text-sm w-64"
            />
          </div>
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
          </div>
          <div className="flex items-center gap-2">
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

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Total Sales</span>
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-orange-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">$983,410</div>
            <div className="text-green-600 text-sm">+3.34% vs last week</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Total Orders</span>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-blue-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">58,375</div>
            <div className="text-red-600 text-sm">-2.8% vs last week</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Total Visitors</span>
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <Eye className="w-4 h-4 text-gray-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">237,782</div>
            <div className="text-green-600 text-sm">+8.02% vs last week</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Revenue Analytics */}
          <div className="col-span-8 bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Revenue Analytics</h3>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm">Last 6 Days</button>
            </div>
            <div className="h-64 flex items-end justify-between px-4">
              {/* Simple chart representation */}
              <div className="flex items-end space-x-4 h-full w-full">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-32 bg-orange-200 rounded-t mb-2"></div>
                  <span className="text-xs text-gray-500">12 Aug</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-40 bg-orange-300 rounded-t mb-2"></div>
                  <span className="text-xs text-gray-500">13 Aug</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-48 bg-orange-400 rounded-t mb-2"></div>
                  <span className="text-xs text-gray-500">14 Aug</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-36 bg-orange-200 rounded-t mb-2"></div>
                  <span className="text-xs text-gray-500">15 Aug</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-44 bg-orange-300 rounded-t mb-2"></div>
                  <span className="text-xs text-gray-500">16 Aug</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-52 bg-orange-500 rounded-t mb-2"></div>
                  <span className="text-xs text-gray-500">17 Aug</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-40 bg-orange-200 rounded-t mb-2"></div>
                  <span className="text-xs text-gray-500">18 Aug</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-46 bg-orange-300 rounded-t mb-2"></div>
                  <span className="text-xs text-gray-500">19 Aug</span>
                </div>
              </div>
            </div>
            <div className="text-right mt-2">
              <span className="text-sm font-medium">$14,521</span>
            </div>
          </div>

          {/* Top Categories */}
          <div className="col-span-4 bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Top Categories</h3>
              <button className="text-blue-600 text-sm">See All</button>
            </div>
            
            {/* Donut Chart */}
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32">
                <div className="w-32 h-32 rounded-full" style={{
                  background: `conic-gradient(#fb923c 0% 40%, #fdba74 40% 70%, #fed7aa 70% 85%, #fef3e2 85% 100%)`
                }}>
                  <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl font-bold">$3,400,000</div>
                    </div>
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
                <span className="text-sm font-medium">$1,200,000</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
                  <span className="text-sm">Fashion</span>
                </div>
                <span className="text-sm font-medium">$950,000</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
                  <span className="text-sm">Home & Kitchen</span>
                </div>
                <span className="text-sm font-medium">$750,000</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-100 rounded-full"></div>
                  <span className="text-sm">Beauty & Personal Care</span>
                </div>
                <span className="text-sm font-medium">$500,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-12 gap-6 mt-6">
          {/* Monthly Target */}
          <div className="col-span-3 bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Monthly Target</h3>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex justify-center mb-4">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="#fed7aa" strokeWidth="8" fill="none" />
                  <circle cx="48" cy="48" r="40" stroke="#fb923c" strokeWidth="8" fill="none"
                    strokeDasharray={`${85 * 2.51} 251`} />
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
                <span>$900,000</span>
                <span>$910,000</span>
              </div>
            </div>
          </div>

          {/* Active User */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm border">
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
          <div className="col-span-3 bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Conversion Rate</h3>
            <div className="grid grid-cols-4 gap-4 text-center">
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
              <button className="w-full bg-orange-500 text-white py-2 rounded-lg text-sm">This Week</button>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="col-span-4 bg-white p-6 rounded-lg shadow-sm border">
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
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Organic Search</span>
                <span className="text-sm font-medium">30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Social Media</span>
                <span className="text-sm font-medium">15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-300 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Referral Traffic</span>
                <span className="text-sm font-medium">10%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-200 h-2 rounded-full" style={{ width: '10%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Email Campaigns</span>
                <span className="text-sm font-medium">5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-100 h-2 rounded-full" style={{ width: '5%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Recent Orders */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent Orders</h3>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm">All Categories</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="pb-2">No</th>
                    <th className="pb-2">Order ID</th>
                    <th className="pb-2">Customer</th>
                    <th className="pb-2">Product</th>
                    <th className="pb-2">Qty</th>
                    <th className="pb-2">Total</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3">1</td>
                    <td className="py-3">#10234</td>
                    <td className="py-3">Amaya Weiler</td>
                    <td className="py-3">Wireless Headphones</td>
                    <td className="py-3">2</td>
                    <td className="py-3">$100</td>
                    <td className="py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Shipped</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">2</td>
                    <td className="py-3">#10235</td>
                    <td className="py-3">Sebastian Adams</td>
                    <td className="py-3">Running Shoes</td>
                    <td className="py-3">1</td>
                    <td className="py-3">$75</td>
                    <td className="py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Processing</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">3</td>
                    <td className="py-3">#10236</td>
                    <td className="py-3">Suzanne Bright</td>
                    <td className="py-3">Smartwatch</td>
                    <td className="py-3">1</td>
                    <td className="py-3">$150</td>
                    <td className="py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Delivered</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">4</td>
                    <td className="py-3">#10237</td>
                    <td className="py-3">Peter Hovel</td>
                    <td className="py-3">Coffee Maker</td>
                    <td className="py-3">1</td>
                    <td className="py-3">$60</td>
                    <td className="py-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Pending</span></td>
                  </tr>
                  <tr>
                    <td className="py-3">5</td>
                    <td className="py-3">#10238</td>
                    <td className="py-3">Anita Singh</td>
                    <td className="py-3">Bluetooth Speaker</td>
                    <td className="py-3">3</td>
                    <td className="py-3">$90</td>
                    <td className="py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Shipped</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                  M
                </div>
                <div className="flex-1">
                  <p className="text-sm">Miaunten Steel purchased 2 items totaling $100.</p>
                  <p className="text-xs text-gray-500">10:35 AM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                  T
                </div>
                <div className="flex-1">
                  <p className="text-sm">The price of "Smart TV" was updated from $500 to $450.</p>
                  <p className="text-xs text-gray-500">09:45 AM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                  V
                </div>
                <div className="flex-1">
                  <p className="text-sm">Vincent Laurent left a 5-star review for "Wireless Headphones".</p>
                  <p className="text-xs text-gray-500">09:30 AM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                  R
                </div>
                <div className="flex-1">
                  <p className="text-sm">"Running Shoes" stock is below 10 units.</p>
                  <p className="text-xs text-gray-500">09:15 AM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
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