const tickets = [
  {
    id: 1,
    name: "Bronze",
    price: "R150",
    likes: 68,
    favourited: false,
    description: "Perfect for first-time attendees looking to enjoy the festival.",
    benefits: [
      "Access to all food stalls",
      "Festival map & guide",
      "1 free drink voucher"
    ],
    featured: false,
    color: "#CD7F32",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Silver",
    price: "R300",
    favourited: false,
    likes: 142,
    description: "Enjoy more perks and priority access with the Silver ticket.",
    benefits: [
      "Access to all food stalls",
      "Priority queue at select vendors",
      "2 free drink vouchers",
      "Festival map & guide"
    ],
    featured: true,
    color: "#C0C0C0",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Gold",
    price: "R500",
    favourited: false,
    likes: 251,
    description: "The ultimate festival experience with VIP treatment and extra goodies.",
    benefits: [
      "Access to all food stalls",
      "VIP seating areas",
      "Unlimited drink vouchers",
      "Meet & greet with select chefs",
      "Festival map & guide"
    ],
    featured: true,
    color: "#FFD700",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80" 
  }
];

export default tickets