/* ==========================================================================
   HOT WHEELS - SPEED SHOP
   File: products.js
   Description: Simple JavaScript file containing product data for toy cars.
   Author: First Year BCA Student Project
   ========================================================================== */

// Array of Hot Wheels toy car products
// Each product has an id, name, category, price in INR, rating, image, description, and specs
const products = [
  {
    id: 1,
    name: "Twin Mill III - Flame Red",
    category: "Supercars",
    price: 499,
    originalPrice: 649,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=800&q=80",
    description: "The iconic twin-engine Hot Wheels original racer. Features exposed dual supercharged engines and an aerodynamic racing chassis designed for high-speed orange tracks.",
    scale: "1:64 Scale",
    series: "HW Exotics",
    material: "Die-Cast Metal Body & Plastic Chassis",
    isFeatured: true,
    isPopular: true
  },
  {
    id: 2,
    name: "Bone Shaker - Matte Black",
    category: "Muscle Cars",
    price: 549,
    originalPrice: 699,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    description: "A legendary Hot Wheels skull-faced hot rod. Built with an open roof, chrome side pipes, aggressive stance, and a mean matte black finish with flame decals.",
    scale: "1:64 Scale",
    series: "HW Art Cars",
    material: "Die-Cast Metal Body",
    isFeatured: true,
    isPopular: true
  },
  {
    id: 3,
    name: "Nissan Skyline GT-R (R34)",
    category: "Sports Cars",
    price: 899,
    originalPrice: 1199,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    description: "The legendary Japanese tuner icon in signature Bayside Blue with twin racing stripes. Highly sought-after die-cast casting with realistic headlamps and sports spoiler.",
    scale: "1:64 Scale",
    series: "HW J-Imports",
    material: "Die-Cast Metal & Real Rubber Tires",
    isFeatured: true,
    isPopular: true
  },
  {
    id: 4,
    name: "1969 Dodge Charger R/T",
    category: "Muscle Cars",
    price: 599,
    originalPrice: 749,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1612544448445-b8232cfa3b6c?auto=format&fit=crop&w=800&q=80",
    description: "Classic American muscle power featuring a deep orange finish, black vinyl roof styling, hidden headlamps, and authentic bumblebee rear racing stripes.",
    scale: "1:64 Scale",
    series: "HW Muscle Mania",
    material: "Die-Cast Metal Body",
    isFeatured: false,
    isPopular: true
  },
  {
    id: 5,
    name: "Porsche 911 GT3 RS",
    category: "Sports Cars",
    price: 649,
    originalPrice: 799,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80",
    description: "Precision track-focused sports car in vibrant Lizard Green. Features a high-downforce rear swan-neck wing and aerodynamic front fender louvers.",
    scale: "1:64 Scale",
    series: "HW Speed Graphics",
    material: "Die-Cast Metal Body",
    isFeatured: true,
    isPopular: false
  },
  {
    id: 6,
    name: "Bugatti Bolide Hypercar",
    category: "Supercars",
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80",
    description: "An extreme track-only concept hypercar with X-shaped headlights, massive rear diffuser, and French racing blue paintwork with carbon fiber textures.",
    scale: "1:64 Scale",
    series: "HW Exotics",
    material: "Die-Cast Metal Alloy",
    isFeatured: true,
    isPopular: true
  },
  {
    id: 7,
    name: "Tiger Shark Monster Truck",
    category: "Monster Trucks",
    price: 899,
    originalPrice: 1099,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    description: "Crush the competition with giant oversized wheels! Modeled with tiger stripes and a vicious shark fin spoiler for extreme arena stunt action.",
    scale: "1:64 Oversized Scale",
    series: "HW Monster Trucks",
    material: "Heavy Die-Cast Cab & Giant Rubber Tires",
    isFeatured: true,
    isPopular: false
  },
  {
    id: 8,
    name: "Chevrolet Corvette C8.R",
    category: "Sports Cars",
    price: 599,
    originalPrice: 749,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?auto=format&fit=crop&w=800&q=80",
    description: "Modern mid-engine endurance racing beast in race-day yellow with grey accents. Built with competition front splitters and high-speed downforce wing.",
    scale: "1:64 Scale",
    series: "HW Race Day",
    material: "Die-Cast Metal Body",
    isFeatured: false,
    isPopular: false
  },
  {
    id: 9,
    name: "Rodger Dodger - Blown V8",
    category: "Muscle Cars",
    price: 529,
    originalPrice: 679,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    description: "Classic Hot Wheels casting with two huge chrome carburetors protruding out of the hood, side exhaust zoomie headers, and flame graphics on glossy black.",
    scale: "1:64 Scale",
    series: "HW Flames",
    material: "Die-Cast Metal Body",
    isFeatured: false,
    isPopular: true
  },
  {
    id: 10,
    name: "Lamborghini Sián FKP 37",
    category: "Supercars",
    price: 749,
    originalPrice: 949,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
    description: "First hybrid super sports car by Lamborghini. Sculpted in metallic olive green with golden rims and signature Y-shaped headlights.",
    scale: "1:64 Scale",
    series: "HW Exotics",
    material: "Die-Cast Metal Body",
    isFeatured: false,
    isPopular: true
  },
  {
    id: 11,
    name: "Mega-Wrex T-Rex Monster Truck",
    category: "Monster Trucks",
    price: 849,
    originalPrice: 1049,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    description: "A fearsome dinosaur-shaped monster truck with open predatory jaws, armored body panels, and massive monster tires designed to crush obstacles.",
    scale: "1:64 Oversized Scale",
    series: "HW Monster Trucks",
    material: "Heavy Die-Cast Body",
    isFeatured: false,
    isPopular: false
  },
  {
    id: 12,
    name: "McLaren Senna GTR",
    category: "Supercars",
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=800&q=80",
    description: "Track-special hypercar named after racing legend Ayrton Senna. Finished in fiery orange with an aggressive front splitter and enormous rear wing.",
    scale: "1:64 Scale",
    series: "HW Speed Graphics",
    material: "Die-Cast Metal Alloy",
    isFeatured: true,
    isPopular: true
  },
  {
    id: 13,
    name: "Bigfoot 4x4 Original Monster Truck",
    category: "Monster Trucks",
    price: 899,
    originalPrice: 1149,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    description: "The original 1974 truck that started the monster truck phenomenon. Classic Ford pickup cab in metallic blue with authentic sponsor decals.",
    scale: "1:64 Oversized Scale",
    series: "HW Monster Trucks Heritage",
    material: "Die-Cast Cab with Heavy Chassis",
    isFeatured: false,
    isPopular: true
  },
  {
    id: 14,
    name: "'71 Datsun 510 Pro Street Tuner",
    category: "Sports Cars",
    price: 679,
    originalPrice: 849,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    description: "Beloved vintage Japanese racing sedan with bolt-on fender flares, front-mounted oil cooler, chrome bumpers, and track racing stripes.",
    scale: "1:64 Scale",
    series: "HW J-Imports",
    material: "Die-Cast Metal Body",
    isFeatured: false,
    isPopular: false
  }
];

// Simple helper function to find a product by its ID
function getProductById(id) {
  // Convert id to a number so comparison is safe
  const numId = parseInt(id);
  return products.find(function(p) {
    return p.id === numId;
  });
}
