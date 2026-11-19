export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  location: {
    street: string;
    landmark: string;
    village: string;
    taluk: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
    mapQuery: string;
  };
  contact: {
    primaryPhone: string;
    secondaryPhone: string;
    whatsappNumber: string; // digits only for wa.me link
    displayWhatsapp: string;
    email: string;
    workingHours: string;
  };
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
    justdial: string;
  };
}

export const businessConfig: BusinessConfig = {
  name: "RK Catering & Events Management",
  legalName: "RK Catering & Events Management Devanurpudur",
  tagline: "Making Every Celebration Deliciously Memorable",
  shortDescription:
    "Exceptional catering and event experiences crafted with traditional taste, elegant presentation, and heartfelt hospitality in Udumalpet and beyond.",
  location: {
    street: "Main Road",
    landmark: "Near GKN Higher Secondary School",
    village: "Devanurpudur",
    taluk: "Udumalpet",
    city: "Udumalpet",
    district: "Tiruppur",
    state: "Tamil Nadu",
    pincode: "642207",
    country: "India",
    fullAddress:
      "Near GKN Higher Secondary School, Devanurpudur, Udumalpet, Tamil Nadu - 642207",
    mapQuery: "Devanurpudur, Udumalpet, Tamil Nadu 642207",
  },
  contact: {
    primaryPhone: "+91 98422 12345", // Editable placeholder
    secondaryPhone: "+91 94433 67890", // Editable placeholder
    whatsappNumber: "919842212345", // digits only for https://wa.me/
    displayWhatsapp: "+91 98422 12345",
    email: "rkcatering.udt@gmail.com", // Editable placeholder
    workingHours: "All Days: 7:00 AM - 10:00 PM",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    justdial:
      "https://www.justdial.com/Udumalpet/RK-CATERING-EVENTS-MANAGEMENT-Gkn-Higher-Secondary-School-Devanurpudur/9999P4252-4252-230619163105-S1Y8_BZDET",
  },
};

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  idealFor: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "wedding-catering",
    title: "Wedding Catering",
    subtitle: "Royal Banquets & Traditional Muhurtham Feasts",
    description:
      "Grand wedding feasts tailored for both traditional banana leaf service and modern royal buffets. We curate customized menus from breakfast to dinner with authentic Kongu and South Indian delicacies.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Traditional Muhurtham Virundhu (Full course banana leaf meal)",
      "Grand Reception Multi-Cuisine Buffet",
      "Live Dosa, Chat & Mocktail Counters",
      "Customized Welcome Drinks & Artisanal Sweets",
    ],
    idealFor: "Weddings, Receptions & Sangeet Ceremonies",
  },
  {
    id: "birthday-party-catering",
    title: "Birthday Party Catering",
    subtitle: "Vibrant Menus for Milestones & Kids Celebrations",
    description:
      "Exciting, delicious, and crowd-pleasing menus designed for birthdays of all ages. From fun finger foods and live snack counters to decadent desserts and celebratory dinners.",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Kids-favorite live counters (Popcorn, Cotton Candy, Chaat)",
      "Bespoke finger foods and cocktail snacks",
      "Dessert stations with ice creams and hot jalebis",
      "Flexible table layouts and energetic service staff",
    ],
    idealFor: "1st Birthdays, Milestone Anniversaries & Teen Parties",
  },
  {
    id: "engagement-catering",
    title: "Engagement Catering",
    subtitle: "Warm, Elegant & Memorable Family Gatherings",
    description:
      "An engagement marks the union of two families. We honor this special milestone with gracious hospitality, refined tastes, and intimate setups that leave lasting impressions on every guest.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Curated high-tea spreads and savory appetizers",
      "Traditional Seer sweet and savories boxes",
      "Buffet or seated dining service options",
      "Elegantly dressed service personnel",
    ],
    idealFor: "Nitchayathartham, Ring Ceremonies & Family Conclaves",
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    subtitle: "Punctual, Professional & Hygienic Business Dining",
    description:
      "Professional catering solutions for corporate meetings, conferences, annual days, and employee gatherings. Delivered with strict punctuality, impeccable hygiene, and executive finesse.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Executive packed meal trays or buffet counters",
      "Fresh morning coffee, tea & high-tea snacks",
      "Balanced, energizing multi-course luncheons",
      "Invoice transparency and corporate billing",
    ],
    idealFor: "Conferences, Seminars, Product Launches & Gala Dinners",
  },
  {
    id: "family-functions",
    title: "Family Functions",
    subtitle: "Cherished Celebrations in the Warmth of Home",
    description:
      "From housewarmings (Grahapravesam) to ear-piercing (Kaadhu Kuthu), baby showers (Valaikappu), and Sashtiabdapoorthi (60th birthday), we bring comforting festive food prepared with love.",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Traditional auspicious recipes and morning tiffin",
      "Authentic festive sambar, rasam, and payasam",
      "Hassle-free setup at home or community halls",
      "Complete post-event cleanup assistance",
    ],
    idealFor: "Housewarmings, Baby Showers, Ayushya Homam & Anniversaries",
  },
  {
    id: "traditional-south-indian",
    title: "Traditional South Indian Catering",
    subtitle: "Authentic Banana Leaf Sapphire Experience",
    description:
      "Experience the pinnacle of Tamil & Kongu culinary heritage. Served hot on fresh banana leaves with meticulous service etiquette, aromatic ghee, piping sambar, and traditional rasam varieties.",
    image: "/images/rk/wedding-hall-serving.jpg",
    features: [
      "Auspicious Ela Saapadu with 20+ authentic accompaniments",
      "Signature Kongu specials and traditional gravies",
      "Hot paruppu, pure ghee, vadai, and paruppu payasam",
      "Experienced servers trained in traditional feast sequences",
    ],
    idealFor: "Muhurtham Meals, Temple Functions & Cultural Gatherings",
  },
  {
    id: "buffet-catering",
    title: "Buffet Catering",
    subtitle: "Chic Multi-Cuisine Presentation & Live Service",
    description:
      "Modern buffet arrangements crafted with aesthetic food warmers, designer display stands, artistic fruit & vegetable carvings, and seamless guest flow to prevent crowding.",
    image: "/images/rk/carving-peacock.jpg",
    features: [
      "Signature fruit and vegetable decorative carvings",
      "Chafing dishes with maintained food temperatures",
      "Clearly labeled vegetarian and non-vegetarian sections",
      "Attentive replenishment staff to ensure zero shortages",
    ],
    idealFor: "Wedding Receptions, Cocktails & Grand Banquets",
  },
  {
    id: "event-management",
    title: "Event Management",
    subtitle: "End-to-End Coordination for Stress-Free Occasions",
    description:
      "Complete event orchestration under one roof. From stage backdrops and flower decorations to dining hall aesthetics, audio systems, and hospitality coordination.",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Stage decor, floral styling & entrance arch setups",
      "Dining area tables, chairs, and luxury linen",
      "Lighting, audio-visual and welcome team assistance",
      "Dedicated event coordinator on-site throughout",
    ],
    idealFor: "Comprehensive Wedding & Milestone Event Planning",
  },
];

export interface FoodCategory {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  items: {
    name: string;
    description: string;
    isVeg: boolean;
    tag?: string;
  }[];
}

export const foodShowcaseCategories: FoodCategory[] = [
  {
    id: "south-indian-meals",
    name: "Traditional South Indian Meals",
    tagline: "Authentic Banana Leaf Feast (Elai Saapadu)",
    badge: "Heritage",
    items: [
      {
        name: "Royal Virundhu Saapadu",
        description:
          "Steaming Sona Masoori/Ponni rice, Ney Paruppu, Kongu style Drumstick Sambar, Thakkali Rasam, Mor Kuzhambu, Appalam & Vadai.",
        isVeg: true,
        tag: "Classic Feast",
      },
      {
        name: "Festive Poriyal & Kootu Selection",
        description:
          "Vazhaipoo Poriyal, Senai Kizhangu Roast, Keerai Kootu, and Pachadi prepared with freshly grated coconut and tempered mustard.",
        isVeg: true,
        tag: "Vegetarian",
      },
      {
        name: "Elai Tiffin Breakfast Spread",
        description:
          "Melt-in-mouth Mallipoo Idlis, Crispy Medu Vada, Ghee Roast Dosa, Poori Masala, Coconut Chutney trio & Filter Coffee.",
        isVeg: true,
        tag: "Morning Special",
      },
      {
        name: "Temple Style Curd Rice & Pickles",
        description:
          "Creamy tempered curd rice topped with pomegranates, grapes, seasoned ginger, green chillies, and home-style mango thokku.",
        isVeg: true,
        tag: "Comfort Classic",
      },
    ],
  },
  {
    id: "vegetarian-delights",
    name: "Vegetarian Delights",
    tagline: "Rich, aromatic North & South vegetarian specialties",
    badge: "Pure Veg",
    items: [
      {
        name: "Paneer Butter Masala & Kulcha",
        description:
          "Tender malai paneer cubes simmered in a velvety cashew and ripe tomato gravy, served alongside butter-brushed garlic kulchas.",
        isVeg: true,
        tag: "Chef Special",
      },
      {
        name: "Kongu Mushroom Chukka",
        description:
          "Button mushrooms pan-roasted with freshly crushed shallots, black pepper, and stone-ground spices in cold-pressed oil.",
        isVeg: true,
        tag: "Kongu Flavor",
      },
      {
        name: "Kashmiri Pulao & Veg Biryani",
        description:
          "Fragrant basmati rice slow-cooked with garden vegetables, saffron milk, toasted cashews, raisins, and aromatic whole spices.",
        isVeg: true,
        tag: "Aromatic",
      },
      {
        name: "Stuffed Baby Potato Gravy",
        description:
          "Crisp-fried baby potatoes cooked in a tangy rich curd and tomato gravy garnished with fresh coriander.",
        isVeg: true,
        tag: "Popular",
      },
    ],
  },
  {
    id: "non-veg-specials",
    name: "Non-Vegetarian Specials",
    tagline: "Authentic regional gravies and dum biryanis",
    badge: "Non-Veg",
    items: [
      {
        name: "Seeraga Samba Mutton Biryani",
        description:
          "Authentic Tamil Nadu style seeraga samba rice cooked with tender mutton cuts in ghee, whole spices, and rich broth.",
        isVeg: false,
        tag: "Signature",
      },
      {
        name: "Pallipalayam Chicken Fry",
        description:
          "Iconic Kongu Nadu chicken prepared with red whole chillies, shallots, and slivered fresh coconut without water.",
        isVeg: false,
        tag: "Kongu Heritage",
      },
      {
        name: "Nattu Kozhi Kulambu",
        description:
          "Free-range country chicken slow-simmered in a rustic freshly ground roasted spice curry bursting with intense regional aroma.",
        isVeg: false,
        tag: "Traditional",
      },
      {
        name: "Tawa Fish Fry (Nethili / Vanjaram)",
        description:
          "Fresh catch marinated with hand-ground spicy masala and pan-seared to golden crispy perfection with curry leaves.",
        isVeg: false,
        tag: "Coastal Crisp",
      },
    ],
  },
  {
    id: "starters",
    name: "Starters & Appetizers",
    tagline: "Crispy, savory crowd-pleasers to kickstart the feast",
    badge: "Starters",
    items: [
      {
        name: "Golden Corn & Cheese Balls",
        description:
          "Crisp-coated molten cheese bites loaded with sweet corn kernels and herbs, served with homemade dip.",
        isVeg: true,
        tag: "Kids Favorite",
      },
      {
        name: "Crispy Baby Corn Pepper Fry",
        description:
          "Tender baby corn spears batter-fried and tossed in cracked black pepper, bell peppers, and scallions.",
        isVeg: true,
        tag: "Crunchy",
      },
      {
        name: "Chicken 65 / Paneer 65",
        description:
          "Classic South Indian spiced morsels deep-fried with curry leaves, ginger, garlic, and fiery green chillies.",
        isVeg: false,
        tag: "All-Time Favorite",
      },
      {
        name: "Gobi Manchurian Dry",
        description:
          "Crisp cauliflower florets tossed in tangy oriental wok spices with capsicum, garlic, and spring onions.",
        isVeg: true,
        tag: "Indo-Chinese",
      },
    ],
  },
  {
    id: "main-course",
    name: "Main Course Breads & Rices",
    tagline: "Fluffy rotis, flaky parottas & flavored rice spreads",
    badge: "Mains",
    items: [
      {
        name: "Madurai Malabar Bun Parotta",
        description:
          "Multi-layered, flaky, golden brown parottas served with spicy salna and coconut-infused kurma.",
        isVeg: true,
        tag: "Street Classic",
      },
      {
        name: "Assorted Tandoori Breads",
        description:
          "Freshly baked butter naan, garlic naan, tandoori roti, and phulkas served piping hot straight from the clay oven.",
        isVeg: true,
        tag: "Tandoori Oven",
      },
      {
        name: "Jeera & Ghee Rice with Dal Makhani",
        description:
          "Long-grain basmati tempered with cumin and cow ghee, accompanied by slow-cooked black lentil dal makhani.",
        isVeg: true,
        tag: "Delight",
      },
      {
        name: "Bisibelebath with Boondi",
        description:
          "Authentic Karnataka-style spiced lentil and rice pot cooked with vegetables, tamarind, and topped with crunchy kara boondi.",
        isVeg: true,
        tag: "Traditional",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts & Sweets",
    tagline: "Divine traditional payasams and royal confections",
    badge: "Sweets",
    items: [
      {
        name: "Elaneer Payasam (Tender Coconut Kheer)",
        description:
          "A delicate heavenly dessert crafted with tender coconut pulp, condensed milk, cardamom, and coconut water.",
        isVeg: true,
        tag: "Royal Signature",
      },
      {
        name: "Ghee Mysore Pak & Badam Halwa",
        description:
          "Authentic melt-in-the-mouth gram flour fudge drenched in aromatic pure ghee and rich almond halwa.",
        isVeg: true,
        tag: "Auspicious",
      },
      {
        name: "Hot Gulab Jamun with Ice Cream",
        description:
          "Juicy rose-infused khoya dumplings served piping hot topped with a scoop of creamy vanilla ice cream.",
        isVeg: true,
        tag: "Fusion",
      },
      {
        name: "Fresh Fruit Salad with Custard",
        description:
          "Medley of seasonal fruits in chilled vanilla bean custard sauce garnished with roasted almonds.",
        isVeg: true,
        tag: "Refreshing",
      },
    ],
  },
  {
    id: "live-counters",
    name: "Live Food Counters",
    tagline: "Interactive theater-style cooking for guests to enjoy",
    badge: "Live Action",
    items: [
      {
        name: "Live Dosa Theatre (15+ Varieties)",
        description:
          "Made-to-order Podi Dosa, Cheese Burst Dosa, Ghee Roast, Mysore Masala, and Rava Dosa sizzling hot off the griddle.",
        isVeg: true,
        tag: "Interactive",
      },
      {
        name: "Delhi Chaat Bazaar",
        description:
          "Live Pani Puri fountain with spicy & sweet water, crisp Sev Puri, Dahi Papdi Chaat, and Aloo Tikki prepared fresh.",
        isVeg: true,
        tag: "Chaat Counter",
      },
      {
        name: "Fruit & Vegetable Carving Display",
        description:
          "Artistic centerpieces carved by skilled artisans featuring peacocks, floral tiers, and personalized couple names.",
        isVeg: true,
        tag: "Visual Grandeur",
      },
      {
        name: "Fresh Mocktail & Juice Bar",
        description:
          "Artisanal welcome coolers including Blue Lagoon, Virgin Mojito, Tender Coconut punch, and fresh seasonal fruit juices.",
        isVeg: true,
        tag: "Beverage Bar",
      },
    ],
  },
];

export interface WhyChoosePillar {
  title: string;
  description: string;
  iconName: string;
}

export const whyChooseUsData: WhyChoosePillar[] = [
  {
    title: "Quality Ingredients",
    description:
      "We source farm-fresh vegetables, cold-pressed oils, unadulterated spices, and 100% pure cow ghee to ensure authentic, uncompromised taste.",
    iconName: "Sparkles",
  },
  {
    title: "Delicious Food Experience",
    description:
      "Our recipes balance traditional South Indian culinary heritage with modern banqueting finesse, ensuring every bite delights your guests.",
    iconName: "UtensilsCrossed",
  },
  {
    title: "Elegant Food Presentation",
    description:
      "From bespoke fruit & vegetable carvings to spotless brassware and designer buffet layouts, our presentation creates a feast for the eyes.",
    iconName: "Palette",
  },
  {
    title: "Professional Service",
    description:
      "Our catering team arrives in neat uniforms, hairnets, and aprons, providing warm, respectful, and punctual hospitality throughout your event.",
    iconName: "UserCheck",
  },
  {
    title: "Memorable Celebrations",
    description:
      "We treat every occasion as our own family celebration, taking the stress off your shoulders so you can enjoy every precious moment.",
    iconName: "HeartHandshake",
  },
  {
    title: "Attention to Every Detail",
    description:
      "From custom dietary adjustments to spotless tableware, live temperature maintenance, and thorough post-event cleanup.",
    iconName: "CheckCircle2",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "weddings" | "banana-leaf" | "buffet" | "carvings" | "decor";
  categoryLabel: string;
  src: string;
  description: string;
  isRealLocal?: boolean;
}

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    title: "Artistic Fruit & Veg Peacock Carving",
    category: "carvings",
    categoryLabel: "Buffet Carving",
    src: "/images/rk/carving-peacock.jpg",
    description:
      "Handcrafted peacock sculpture with decorative watermelon carving highlighting RK Catering at a grand wedding buffet.",
    isRealLocal: true,
  },
  {
    id: "g2",
    title: "Traditional Banana Leaf Feast Serving",
    category: "banana-leaf",
    categoryLabel: "Banana Leaf Feast",
    src: "/images/rk/wedding-hall-serving.jpg",
    description:
      "Guests savoring the auspicious Virundhu Saapadu served by our uniformed catering staff in a traditional dining hall.",
    isRealLocal: true,
  },
  {
    id: "g3",
    title: "Authentic South Indian Breakfast Spread",
    category: "banana-leaf",
    categoryLabel: "Morning Tiffin",
    src: "/images/rk/team-breakfast.jpg",
    description:
      "Freshly prepared mallipoo idli, medu vada, assorted chutneys, and payasam with branded RK Catering service water bottles.",
    isRealLocal: true,
  },
  {
    id: "g4",
    title: "Grand Wedding Reception Banquet Setup",
    category: "weddings",
    categoryLabel: "Wedding Banquets",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    description:
      "Luminous wedding dining setup with floral table runners, warm chandeliers, and curated tableware.",
  },
  {
    id: "g5",
    title: "Multi-Cuisine Buffet Station",
    category: "buffet",
    categoryLabel: "Buffet Setup",
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sleek stainless steel chafing dishes and hot buffet counters prepared for a corporate gala dinner.",
  },
  {
    id: "g6",
    title: "Live Sizzling Dosa & Tawa Counter",
    category: "buffet",
    categoryLabel: "Live Counter",
    src: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80",
    description:
      "Live tawa station turning out crispy golden dosas and savory South Indian snacks for guests.",
  },
  {
    id: "g7",
    title: "Royal Seeraga Samba Biryani Handi",
    category: "weddings",
    categoryLabel: "Signature Biryani",
    src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80",
    description:
      "Slow-cooked dum biryani bursting with fragrant spices, fried onions, and fresh mint leaves.",
  },
  {
    id: "g8",
    title: "Elegant Mandap & Dining Floral Decor",
    category: "decor",
    categoryLabel: "Event Decor",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    description:
      "Traditional jasmine and marigold floral styling combined with modern fairy lights for an engagement evening.",
  },
  {
    id: "g9",
    title: "Artisanal Dessert & Sweet Counter",
    category: "buffet",
    categoryLabel: "Dessert Station",
    src: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80",
    description:
      "Decadent spread of warm jalebis, gulab jamuns, rasmalai, and tender coconut elaneer payasam cups.",
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  eventType: string;
  location: string;
  rating: number;
  comment: string;
  isPlaceholder: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    name: "S. Murugesan & Family",
    role: "Bride's Father",
    eventType: "Daughter's Wedding",
    location: "Udumalpet",
    rating: 5,
    comment:
      "RK Catering handled our daughter's wedding feast for over 1,200 guests with utmost dedication. The traditional banana leaf lunch and the evening reception buffet were praised by all our relatives. Authentic taste and polite servers!",
    isPlaceholder: true,
  },
  {
    id: "t2",
    name: "K. Revathi",
    role: "Host",
    eventType: "Housewarming Ceremony (Grahapravesam)",
    location: "Devanurpudur",
    rating: 5,
    comment:
      "The morning tiffin with hot idlis, sambar, and filter coffee was outstanding. The team arrived well in advance and maintained strict hygiene throughout. Highly recommended for family events in Udumalpet.",
    isPlaceholder: true,
  },
  {
    id: "t3",
    name: "R. Prakash Kumar",
    role: "Corporate Lead",
    eventType: "Annual Corporate Meet",
    location: "Pollachi - Udumalpet Highway",
    rating: 5,
    comment:
      "We booked RK Catering for our company's executive gathering. Punctual buffet setup, delicious vegetarian and non-vegetarian spread, and professional presentation. We will definitely engage them again.",
    isPlaceholder: true,
  },
  {
    id: "t4",
    name: "Anand & Divya",
    role: "Newlyweds",
    eventType: "Engagement & Sangeet",
    location: "Udumalpet Town",
    rating: 5,
    comment:
      "The fruit carving display was a showstopper at our engagement party! The live chaat counter and tender coconut payasam were huge hits among our friends. Wonderful coordination.",
    isPlaceholder: true,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    question: "Where does RK Catering & Events Management provide services?",
    answer:
      "We are based in Devanurpudur, Udumalpet and actively serve events across Udumalpet, Pollachi, Tiruppur, Dharapuram, Palani, and surrounding towns in the Kongu region of Tamil Nadu.",
  },
  {
    question: "Do you offer both Vegetarian and Non-Vegetarian catering?",
    answer:
      "Yes, absolutely. We provide 100% pure vegetarian catering for auspicious occasions (such as temple functions and muhurthams) as well as rich non-vegetarian menus for receptions, birthdays, and parties with completely segregated preparation.",
  },
  {
    question: "Can we customize the menu according to our personal preference and budget?",
    answer:
      "Yes! Every event is unique. You can pick and choose items across traditional South Indian meals, North Indian dishes, live counters, and desserts. We offer flexible packages tailored to your guest count.",
  },
  {
    question: "How far in advance should we book for weddings or grand celebrations?",
    answer:
      "For weddings and auspicious muhurtham dates, we recommend booking 1 to 3 months in advance to reserve your preferred date. For birthdays and smaller family functions, 1 to 2 weeks notice is generally sufficient.",
  },
  {
    question: "Do you also arrange stage decoration, dining tables, and event setup?",
    answer:
      "Yes. In addition to our core catering service, our Events Management division handles stage backdrops, floral decorations, dining hall arrangements, seating, and lighting for a complete stress-free celebration.",
  },
];
