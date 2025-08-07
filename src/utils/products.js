  const products = [
    {
      id: 1,
      name: "15 Kg Tirupati Cottonseed Oil",
      price: 349.89,
      originalPrice: 2425,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
      discount: 85.6,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 2,
      name: "boAt Aavante Bar 1700D",
      price: 389.49,
      originalPrice: 2299,
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop",
      discount: 98.3,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 3,
      name: "Convertible 5 in 1 Laptop Stand",
      price: 1299.99,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      discount: 67.5,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 4,
      name: "Premium Gas Stove 2 Burner",
      price: 2199.89,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      discount: 56.0,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 5,
      name: "Wireless Bluetooth Headphones",
      price: 899.99,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      discount: 70.0,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 6,
      name: "Smart Fitness Watch Pro",
      price: 1599.49,
      originalPrice: 5999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      discount: 73.3,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 7,
      name: "Premium Water Purifier 10L",
      price: 3299.89,
      originalPrice: 8999,
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop",
      discount: 63.3,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 8,
      name: "Electric Rice Cooker 1.8L",
      price: 1899.99,
      originalPrice: 3499,
      image: "https://images.unsplash.com/photo-1556909114-4f5c10b5f6da?w=400&h=400&fit=crop",
      discount: 45.7,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 9,
      name: "LED Table Lamp with USB",
      price: 649.89,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
      discount: 50.0,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 10,
      name: "Stainless Steel Water Bottle",
      price: 299.99,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      discount: 62.5,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 11,
      name: "Wooden Phone Stand Holder",
      price: 199.89,
      originalPrice: 599,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      discount: 66.6,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 12,
      name: "Fast Wireless Charger 15W",
      price: 799.49,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
      discount: 60.0,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 13,
      name: "Premium Tablet Cover Case",
      price: 499.99,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      discount: 61.5,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 14,
      name: "20000mAh Power Bank Fast",
      price: 1199.89,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1609592827615-72edd3de52b8?w=400&h=400&fit=crop",
      discount: 60.0,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 15,
      name: "True Wireless Earbuds Pro",
      price: 999.49,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
      discount: 75.0,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 16,
      name: "Adjustable Monitor Stand Riser",
      price: 1599.99,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
      discount: 46.7,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 17,
      name: "Cable Management Box Set",
      price: 399.89,
      originalPrice: 899,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
      discount: 55.5,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 18,
      name: "Screen Cleaning Kit Pro",
      price: 249.99,
      originalPrice: 599,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
      discount: 58.3,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 19,
      name: "HD Webcam 1080p Auto Focus",
      price: 1899.49,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop",
      discount: 52.5,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    },
    {
      id: 20,
      name: "Ergonomic Laptop Stand Pro",
      price: 1299.89,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      discount: 48.0,
      assured: true,
      freeDelivery: "Free Delivery in Two Days"
    }
  ];

  export default products;