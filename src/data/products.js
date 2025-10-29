const products = [
  // Best sellers
  { id: 'bs1', title: 'Noise Cancelling Earbuds', price: 99.99, category: 'best-sellers', image: 'https://images.unsplash.com/photo-1580894908361-5f0d0d8b7b0a?w=800&q=80&auto=format&fit=crop' },
  { id: 'bs2', title: 'Smart Home Speaker', price: 129.99, category: 'best-sellers', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80&auto=format&fit=crop' },
  { id: 'bs3', title: '4K Smart TV 55"', price: 499.99, category: 'best-sellers', image: 'https://images.unsplash.com/photo-1585386959984-a415522d3d6c?w=800&q=80&auto=format&fit=crop' },

  // Mobiles
  { id: 'm1', title: 'Flagship Phone Alpha', price: 799.99, category: 'mobiles', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80&auto=format&fit=crop' },
  { id: 'm2', title: 'Flagship Phone Beta', price: 699.99, category: 'mobiles', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&auto=format&fit=crop' },
  { id: 'm3', title: 'Smart Watch Pro', price: 199.99, category: 'mobiles', image: 'https://images.unsplash.com/photo-1518441902113-7a0d3f7e6dcb?w=800&q=80&auto=format&fit=crop' },
  { id: 'm4', title: 'Wireless Charger Stand', price: 29.99, category: 'mobiles', image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80&auto=format&fit=crop' },
  { id: 'm5', title: 'Protective Phone Case', price: 12.99, category: 'mobiles', image: 'https://images.unsplash.com/photo-1580910051074-1b1f1e1e6d9c?w=800&q=80&auto=format&fit=crop' },

  // Electronics
  { id: 'e1', title: 'Wireless Bluetooth Headphones', price: 59.99, category: 'electronics', image: 'https://images.unsplash.com/photo-1518441902113-7a0d3f7e6dcb?w=800&q=80&auto=format&fit=crop' },
  { id: 'e2', title: 'Portable Charger 10000mAh', price: 24.5, category: 'electronics', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3a3c8f3b?w=800&q=80&auto=format&fit=crop' },
  { id: 'e3', title: 'Bluetooth Speaker', price: 39.99, category: 'electronics', image: 'https://images.unsplash.com/photo-1518441902113-7a0d3f7e6dcb?w=800&q=80&auto=format&fit=crop' },
  { id: 'e4', title: 'Action Camera 4K', price: 199.99, category: 'electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80&auto=format&fit=crop' },

  // Fashion
  { id: 'f1', title: 'Men Casual Shirt', price: 29.99, category: 'fashion', image: 'https://images.unsplash.com/photo-1520975662167-6b6b7a3d2073?w=800&q=80&auto=format&fit=crop' },
  { id: 'f2', title: 'Women Summer Dress', price: 49.99, category: 'fashion', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80&auto=format&fit=crop' },
  { id: 'f3', title: 'Sneakers Sport', price: 59.99, category: 'fashion', image: 'https://images.unsplash.com/photo-1528701800489-476f60f5b3c8?w=800&q=80&auto=format&fit=crop' },

  // Home
  { id: 'h1', title: 'Non-stick Cookware Set', price: 89.99, category: 'home', image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80&auto=format&fit=crop' },
  { id: 'h2', title: 'Decorative Wall Art', price: 39.0, category: 'home', image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=800&q=80&auto=format&fit=crop' },
  { id: 'h3', title: 'Memory Foam Pillow', price: 24.99, category: 'home', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80&auto=format&fit=crop' },

  // Appliances
  { id: 'a1', title: 'Blender 700W', price: 59.99, category: 'appliances', image: 'https://images.unsplash.com/photo-1580910051074-1b1f1e1e6d9c?w=800&q=80&auto=format&fit=crop' },
  { id: 'a2', title: 'Air Fryer 5L', price: 129.99, category: 'appliances', image: 'https://images.unsplash.com/photo-1586201375759-6bdc5b7f9f5b?w=800&q=80&auto=format&fit=crop' },
  { id: 'a3', title: 'Electric Kettle 1.7L', price: 29.99, category: 'appliances', image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80&auto=format&fit=crop' },

  // Toys & Baby
  { id: 't1', title: 'Building Blocks Set', price: 19.99, category: 'toys-baby', image: 'https://images.unsplash.com/photo-1595016406874-9f1a99b9f1a1?w=800&q=80&auto=format&fit=crop' },
  { id: 't2', title: 'Soft Teddy Bear', price: 14.5, category: 'toys-baby', image: 'https://images.unsplash.com/photo-1542060745-06b58f9d0b09?w=800&q=80&auto=format&fit=crop' },
  { id: 't3', title: 'Educational Puzzle', price: 12.99, category: 'toys-baby', image: 'https://images.unsplash.com/photo-1606813902933-7f9f8b6a8f4a?w=800&q=80&auto=format&fit=crop' },

  // Grocery
  { id: 'g1', title: 'Premium Rice 5kg', price: 25.0, category: 'grocery', image: 'https://images.unsplash.com/photo-1582719478250-2a2c58a0c71a?w=800&q=80&auto=format&fit=crop' },
  { id: 'g2', title: 'Organic Honey 500g', price: 12.99, category: 'grocery', image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=800&q=80&auto=format&fit=crop' },
  { id: 'g3', title: 'Olive Oil 1L', price: 15.99, category: 'grocery', image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80&auto=format&fit=crop' }
];

export default products;
