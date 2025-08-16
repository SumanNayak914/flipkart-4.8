import React from "react";
import { Star, Truck, BadgePercent, ChevronRight, ShieldCheck, Heart, Bell, Grid } from "lucide-react";

/*
  Flipkart-Style Catalog Page - Improved Version
  --------------------------------------------------
  - Mobile-first UI with enhanced styling
  - Smooth horizontal slider for Recently Viewed
  - Better card designs with hover effects
  - Two-column product grid for Explore section
  - Bottom navigation bar
*/

const currency = (n) => `₹${n.toLocaleString("en-IN")}`;

const Rating = ({ value, count }) => (
  <div className="flex items-center gap-1 text-xs">
    <div className="flex items-center rounded px-1.5 py-0.5 bg-green-600 text-white font-semibold">
      <span className="mr-0.5">{value.toFixed(1)}</span>
      <Star className="h-3 w-3 fill-white" />
    </div>
    <span className="text-gray-500">({count.toLocaleString("en-IN")})</span>
  </div>
);

const Chip = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 text-[11px] text-gray-700 shadow-sm whitespace-nowrap">
    {Icon && <Icon className="h-3.5 w-3.5" />}
    {children}
  </span>
);

const Strike = ({ children }) => (
  <span className="text-gray-500 line-through text-sm">{children}</span>
);

const Pill = ({ children }) => (
  <span className="rounded-full bg-emerald-50 text-emerald-700 text-[11px] px-2 py-0.5 font-medium border border-emerald-200">
    {children}
  </span>
);

// Improved ProductThumb with better width for content
const ProductThumb = ({ p }) => (
  <div className="group relative w-[180px] shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer">
    <div className="h-36 w-full bg-gray-50 flex items-center justify-center overflow-hidden relative">
      <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200" />
      <button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="h-3.5 w-3.5 text-gray-600 hover:text-red-500" />
      </button>
    </div>
    <div className="p-3">
      <h3 className="line-clamp-1 text-[13px] font-medium text-gray-900 leading-tight h-[18px]">{p.title}</h3>
      {p.subtitle && (
        <p className="line-clamp-1 text-[11px] text-gray-500 mt-1 h-[15px]">{p.subtitle}</p>
      )}
      <div className="mt-2 flex items-center gap-1">
        <span className="text-sm font-bold text-gray-900">{currency(p.price)}</span>
        <Strike className="text-xs">{currency(p.mrp)}</Strike>
      </div>
      <div className="mt-1">
        <Pill>{p.off}% off</Pill>
      </div>
      {p.rating && <div className="mt-2"><Rating value={p.rating} count={p.reviews} /></div>}
      {p.badge && <div className="mt-1 text-[10px] text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded-md line-clamp-1">{p.badge}</div>}
    </div>
  </div>
);

// Improved ProductCard with better styling and hover effects  
const ProductCard = ({ p }) => (
  <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer group">
    <div className="h-48 w-full bg-gray-50 flex items-center justify-center relative overflow-hidden">
      <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200" />
      <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
      </button>
    </div>
    <div className="p-4">
      <h3 className="line-clamp-1 text-[14px] font-medium text-gray-900 leading-snug h-[20px]">{p.title}</h3>
      {p.spec && (
        <p className="mt-1 line-clamp-1 text-[11px] text-gray-600 leading-relaxed h-[16px]">{p.spec}</p>
      )}
      <div className="mt-2 flex items-center gap-1">
        <span className="text-base font-bold text-gray-900 whitespace-nowrap">{currency(p.price)}</span>
        <Strike className="text-xs whitespace-nowrap">{currency(p.mrp)}</Strike>
        <Pill>{p.off}% off</Pill>
      </div>
      <div className="mt-2 flex items-center justify-between gap-1">
        <Rating value={p.rating} count={p.reviews} />
        <Chip icon={Truck} className="text-[10px]">Delivery {p.delivery}</Chip>
      </div>
    </div>
  </div>
);

const recentlyViewed = [
  {
    title: "Apple iPhone 13",
    subtitle: "128 GB",
    price: 44999,
    mrp: 48900,
    off: 9,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
    rating: 4.6,
    reviews: 293282,
    badge: "Get at ₹42,749 with offers",
  },
  {
    title: "Veirdo Men Solid Polo T‑Shirt",
    subtitle: "Assured",
    price: 399,
    mrp: 1199,
    off: 66,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
    rating: 4.2,
    reviews: 359,
    badge: "Lowest Price since Launch",
  },
  {
    title: "XYXX Men Solid Polo",
    subtitle: "Hot Deal",
    price: 499,
    mrp: 699,
    off: 28,
    img: "https://images.unsplash.com/photo-1548883354-7622d03aca26?q=80&w=800&auto=format&fit=crop",
    rating: 4.3,
    reviews: 738,
    badge: "Hot Deal",
  },
  {
    title: "Samsung Galaxy S23",
    subtitle: "256 GB",
    price: 64999,
    mrp: 74999,
    off: 13,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
    rating: 4.5,
    reviews: 15643,
    badge: "Bank Offer",
  },
];

const products = [
  {
    title: "vivo T4x 5G (Pronto Purple, 6GB RAM, 128GB)",
    spec: "6500mAh BIG BATTERY • 44W FlashCharge • Dimensity 700 7nm • 7.8mm",
    price: 14999,
    mrp: 19499,
    off: 23,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    reviews: 12031,
    delivery: "Wed",
  },
  {
    title: "OPPO K13 5G with 7000mAh Battery",
    spec: "Snapdragon 6 Gen 4 • Vapour Cooling • 6.7\" AMOLED",
    price: 17999,
    mrp: 22990,
    off: 21,
    img: "https://images.unsplash.com/photo-1510552776732-01acc9a4c1c5?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviews: 8420,
    delivery: "Tomorrow",
  },
  {
    title: "OPPO K13x 5G 6000mAh + 45W SuperVOOC",
    spec: "50MP AI Dual Camera • 120Hz Ultra Smooth Display",
    price: 12999,
    mrp: 16990,
    off: 23,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
    rating: 4.3,
    reviews: 5230,
    delivery: "Tomorrow",
  },
  {
    title: "vivo T4 Lite 5G (Charger in the Box)",
    spec: "Dimensity 6300 • 120Hz • 5000mAh",
    price: 9999,
    mrp: 13999,
    off: 28,
    img: "https://images.unsplash.com/photo-1520901157469-507e9dc6c5cc?q=80&w=1000&auto=format&fit=crop",
    rating: 4.2,
    reviews: 4311,
    delivery: "Tomorrow",
  },
];

function SectionHeader({ title, action }) {
  return (
    <div className="flex items-center justify-between px-3 mt-2">
      <h2 className="text-[15px] font-semibold text-gray-900">{title}</h2>
      {action && (
        <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
          {action}
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

function Divider() {
  return <div className="my-3 h-px w-full bg-gray-100" />;
}

export default function FlipStyleCatalog() {
  return (
    <main className="mx-auto w-full max-w-screen-sm bg-gray-50 text-gray-900 min-h-screen">
      {/* Custom CSS for scrollbar hiding and line clamping */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    
      {/* Body */}
      <div className="pb-20">
        {/* Recently Viewed Section with Smooth Slider */}
        <Divider />
        <SectionHeader title="Recently Viewed" action="See all" />
        <div className="mt-3 relative">
          <div className="overflow-x-auto px-3 scrollbar-hide">
            <div className="flex gap-3 pb-2" style={{ width: 'max-content' }}>
              {recentlyViewed.map((p, i) => (
                <ProductThumb key={i} p={p} />
              ))}
            </div>
          </div>
          {/* Fade effect on right side */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>

        {/* Explore More Section */}
        <Divider />
        <SectionHeader title="Explore more like this" />
        <div className="mt-3 flex flex-wrap gap-2 px-3">
          <Chip icon={BadgePercent}>Offers</Chip>
          <Chip icon={Truck}>1 Day Delivery</Chip>
          <Chip>₹10k - ₹20k</Chip>
          <Chip>5G</Chip>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 px-3">
          {products.map((p, i) => (
            <ProductCard key={i} p={p} />
          ))}
        </div>

        <div className="h-6" />
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-screen-sm border-t border-gray-200 bg-white shadow-lg">
        <div className="grid grid-cols-4 text-center text-xs">
          {[
            { t: "Home", icon: Grid },
            { t: "Categories", icon: BadgePercent },
            { t: "Wishlist", icon: Heart },
            { t: "Account", icon: ShieldCheck },
          ].map(({ t, icon: Icon }, idx) => (
            <button key={t} className={`py-3 flex flex-col items-center gap-1 transition-colors ${idx === 0 ? "text-blue-600" : "text-gray-600 hover:text-gray-800"}`}>
              <Icon className="h-5 w-5" />
              <span className="text-[11px] font-medium">{t}</span>
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
}