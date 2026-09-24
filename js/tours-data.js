/**
 * Indian Wonders & Columbus Travels & Services Pvt. Ltd.
 * Master Catalogue of Authentic Verified Journeys & Services
 * Established 1984 | Approved by Dept. of Tourism, Govt. of India | IATA Accredited
 */

const SUBCATEGORIES = {
  tour: {
    id: "tour",
    name: "Tour Packages",
    tagline: "Curated Cultural, Culinary & Wildlife Expeditions Across India & Beyond",
    icon: "fa-earth-asia"
  },
  customised: {
    id: "customised",
    name: "Customised Packages",
    tagline: "Handcrafted Bespoke Journeys Tailored to Your Schedule & Preferences",
    icon: "fa-sliders"
  },
  homestay: {
    id: "homestay",
    name: "Home Stay Packages",
    tagline: "Ancestral Havelis, Plantation Bungalows & Authentic Living Heritage",
    icon: "fa-house-chimney-window"
  },
  cruise: {
    id: "cruise",
    name: "Cruise Packages",
    tagline: "Ultra-Luxury Ocean Liners, Coastal Charters & Private Backwater Houseboats",
    icon: "fa-ship"
  }
};

const TOURS_DATA = [
  // ==========================================
  // 1. TOUR PACKAGES
  // ==========================================
  {
    id: "north-india-culinary",
    slug: "north-india-culinary-spiritual-trail",
    title: "North India Culinary & Spiritual Trail",
    subtitle: "Masterclasses with Chef Curators, Sunrise at Taj Mahal & Himalayan Yoga",
    category: "tour",
    subCategory: "tour",
    subCategoryName: "Tour Packages",
    destination: "North India",
    durationDays: 14,
    durationNights: 13,
    basePriceINR: 185000,
    rating: 4.95,
    reviewsCount: 38,
    badge: "Signature Epicurean",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=80"
    ],
    route: ["Mumbai", "Old & New Delhi", "Agra", "Rishikesh & Haridwar"],
    routeSummary: "Mumbai → Delhi → Agra → Rishikesh → Haridwar → Delhi",
    overview: "A journey designed for those who experience cultures through food, heritage, and wellness. From Mumbai's coastal street-food secrets and spice markets to Old Delhi's royal Mughlai kitchens, the marble splendor of the Taj Mahal at dawn, and private meditation retreats overlooking the sacred Ganges in the foothills of the Himalayas.",
    highlights: [
      "Private chef-led spice market walk in Khari Baoli, Asia's largest spice market",
      "Exclusive sunrise viewing of the Taj Mahal with an architectural historian",
      "Royal Awadhi and Mughlai culinary masterclass in a private heritage residence",
      "VIP boat transfer to Elephanta Caves UNESCO site in Mumbai Harbour",
      "Private Ganga Aarti prayer ceremony in Rishikesh with Vedic chants",
      "Ayurvedic wellness consultation and daily yoga beside the holy Ganges"
    ],
    inclusions: [
      "13 Nights in handpicked 5-Star Luxury & Heritage Palaces",
      "Private Chauffeur-driven luxury AC Mercedes/Innova Crysta throughout",
      "Daily gourmet breakfasts and 8 curated heritage dining experiences",
      "English-speaking private historian guides in all cities",
      "All domestic flight tickets (Mumbai - Delhi - Dehradun - Delhi)",
      "All monument entrance permits with VIP skip-the-line access",
      "24/7 Dedicated Columbus Travels Mumbai On-Ground Concierge"
    ],
    exclusions: [
      "International flights to/from India",
      "Personal expenses, laundry, and alcoholic beverages",
      "Travel insurance (can be arranged via our IATA desk)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Mumbai — The Gateway to India",
        description: "Arrive at Mumbai Chhatrapati Shivaji Maharaj International Airport. VIP airport assistance and private chauffeur transfer to The Taj Mahal Palace, Mumbai overlooking the Gateway of India. Evening welcome dinner featuring coastal Malvani seafood pairings.",
        stay: "The Taj Mahal Palace, Mumbai (5★ Luxury Sea-Facing)",
        meals: "Dinner Included",
        transit: "Private Luxury AC Transfer (45 mins)",
        tip: "Enjoy sunset high tea at the Sea Lounge overlooking the Arabian Sea."
      },
      {
        day: 2,
        title: "Elephanta Island & Coastal Street Gastronomy",
        description: "Private morning motor launch to UNESCO Elephanta Island to marvel at the 6th-century rock-cut Shiva sculptures. Afternoon exploration of Mumbai's bustling heritage quarters followed by a curated coastal street-food safari guided by a local food anthropologist.",
        stay: "The Taj Mahal Palace, Mumbai",
        meals: "Breakfast & Curated Food Trail",
        transit: "Private Boat & Luxury Sedan",
        tip: "Try the iconic Bombay duck fish fry and artisanal Irani chai with bun maska."
      },
      {
        day: 3,
        title: "Flight to Delhi — Daryaganj & Chandni Chowk Culinary Heritage",
        description: "Morning flight to New Delhi. Check into The Imperial New Delhi. In the afternoon, embark on an immersive cycle-rickshaw journey through Old Delhi's labyrinthine spice bazaars and historic paranthe wali gali with private chef tastings.",
        stay: "The Imperial, New Delhi (Heritage Luxury)",
        meals: "Breakfast & Heritage Dinner",
        transit: "Domestic Flight (2 hrs) + Private Chauffeur",
        tip: "Smell freshly ground royal cardamom and saffron in the 17th-century spice trading lanes."
      },
      {
        day: 4,
        title: "Lutyens' Delhi & Private Mughlai Masterclass",
        description: "Discover Humayun's Tomb, Qutub Minar, and India Gate. In the evening, enter a private heritage haveli for an interactive masterclass on dum-pukht (slow-braising) culinary techniques with a master chef, followed by an elaborate feast.",
        stay: "The Imperial, New Delhi",
        meals: "Breakfast & Interactive Cooking Dinner",
        transit: "Private Chauffeur",
        tip: "Learn the alchemy behind true Awadhi biryani fragrance and secret whole spices."
      },
      {
        day: 5,
        title: "Express to Agra — Sunrise Taj & Mehtab Bagh Sunset",
        description: "Drive to Agra via the expressway. Check into The Oberoi Amarvilas with uninterrupted views of the Taj Mahal from every room. Late afternoon private visit to Mehtab Bagh gardens to watch the sunset paint the Taj Mahal in blush and gold.",
        stay: "The Oberoi Amarvilas, Agra (5★ Palace View)",
        meals: "Breakfast & Royal Dinner",
        transit: "Private Luxury Sedan (3.5 hrs)",
        tip: "Balcony viewing at night under moonlight is breathtaking."
      },
      {
        day: 6,
        title: "Dawn at the Taj Mahal & Agra Fort Grandeur",
        description: "Enter the Taj Mahal at first light before the crowds arrive. Guided by an architectural historian, unravel the love story and intricate pietra dura marble inlays. Afternoon visit to the massive sandstone ramparts of Agra Fort.",
        stay: "The Oberoi Amarvilas, Agra",
        meals: "Breakfast & Lunch",
        transit: "Battery-operated Eco Shuttles & Private Sedan",
        tip: "Early dawn light provides the softest tones for photography."
      },
      {
        day: 7,
        title: "Journey to Rishikesh — Foothills of the Garhwal Himalayas",
        description: "Morning express train or flight transfer to Dehradun, driving onward into the pine-scented foothills of Rishikesh. Check into an eco-luxury riverside retreat perched high above the emerald waters of the Ganges.",
        stay: "Ananda in the Himalayas / Aloha on the Ganges",
        meals: "Breakfast & Organic Farm Dinner",
        transit: "Flight/Train + Mountain Chauffeur (4 hrs)",
        tip: "Breathe in the pure mountain air scented with wild cedar and pine."
      },
      {
        day: 8,
        title: "Ayurveda, Yoga & Sacred Ganga Aarti",
        description: "Sunrise yoga and pranayama meditation session with a Himalayan yogi master. Personal Ayurvedic doctor consultation and customized herbal therapy. At dusk, participate in the mesmerizing Ganga Aarti ceremony at Parmarth Niketan.",
        stay: "Ananda in the Himalayas / Aloha on the Ganges",
        meals: "Full Sattvic Ayurvedic Board",
        transit: "Private Escort",
        tip: "Float your personal leaf diya (lamp) down the holy river with an evening wish."
      }
    ]
  },
  {
    id: "golden-triangle-luxury",
    slug: "golden-triangle-royal-splendour",
    title: "Golden Triangle Royal Splendour",
    subtitle: "Delhi Citadels, Taj Mahal Wonder & Pink City Palaces with Private Historian",
    category: "tour",
    subCategory: "tour",
    subCategoryName: "Tour Packages",
    destination: "North India",
    durationDays: 7,
    durationNights: 6,
    basePriceINR: 110000,
    rating: 4.96,
    reviewsCount: 64,
    badge: "Most Popular Classical",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80"
    ],
    route: ["Delhi", "Agra", "Fatehpur Sikri", "Jaipur"],
    routeSummary: "New Delhi → Agra (Taj Mahal) → Fatehpur Sikri → Jaipur (Pink City) → Delhi",
    overview: "The definitive introduction to India's imperial majesty. Travel in chauffeur-driven comfort between three legendary capitals: the historic seats of the Mughal Emperors in Delhi and Agra, and the pink-hued royal courts of the Kachwaha Rajputs in Jaipur.",
    highlights: [
      "VIP sunrise entry into the Taj Mahal avoiding all general queue lines",
      "Elephant or 4x4 Jeep ascent to the ramparts of Amber Fort in Jaipur",
      "Private champagne high tea overlooking the Jal Mahal water palace",
      "Tour of Jaipur's City Palace private royal residential quarters",
      "Explore UNESCO deserted Mughal red sandstone city of Fatehpur Sikri"
    ],
    inclusions: [
      "6 Nights in Oberoi / Taj 5-Star Heritage Palaces",
      "Private Mercedes-Benz sedan or Toyota Innova Crysta throughout",
      "Daily breakfast & 4 bespoke regional royal banquets",
      "Dedicated government-licensed national tourist guides",
      "All monument fees, toll taxes, and parking clearances"
    ],
    exclusions: ["International airfare", "Personal discretionary gratuities"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Capital Delhi",
        description: "Welcome at Indira Gandhi International Airport. Private escort to The Taj Mahal Hotel, New Delhi. Relax and evening briefing with your personal Columbus Travels concierge.",
        stay: "The Taj Mahal Hotel, New Delhi",
        meals: "Welcome Cocktail & Dinner",
        transit: "Private Chauffeur (45 mins)",
        tip: "Stroll through the manicured Mughal gardens of Lutyens' Delhi."
      },
      {
        day: 2,
        title: "Monuments of Delhi — Mughals to Modernity",
        description: "Visit the massive Jama Masjid, ride through Old Delhi by cycle-rickshaw, see Humayun's Tomb and Qutub Minar. Drive past the President's House and Parliament.",
        stay: "The Taj Mahal Hotel, New Delhi",
        meals: "Breakfast & Lunch",
        transit: "Private Sedan",
        tip: "Photograph the intricate brick minaret of Qutub Minar in afternoon light."
      },
      {
        day: 3,
        title: "Drive to Agra & Sunset at Mehtab Bagh",
        description: "Comfortable morning drive via the Yamuna Expressway to Agra. Check in to ITC Mughal / Oberoi Amarvilas. Sunset view of the Taj Mahal from across the river Yamuna.",
        stay: "ITC Mughal, Agra",
        meals: "Breakfast & Dinner",
        transit: "Private Sedan (3.5 hrs)",
        tip: "Mehtab Bagh offers reflection views of the marble dome without any crowds."
      },
      {
        day: 4,
        title: "Dawn at the Taj Mahal & Fatehpur Sikri onward to Jaipur",
        description: "Marvel at the Taj Mahal at dawn. Visit Agra Fort before driving to Jaipur with an en-route stop at the ghost city of Fatehpur Sikri.",
        stay: "Rambagh Palace / Jai Mahal Palace, Jaipur",
        meals: "Breakfast & Royal Rajput Dinner",
        transit: "Private Drive (5 hrs including tour)",
        tip: "Rambagh Palace was the former residence of the Maharaja of Jaipur."
      },
      {
        day: 5,
        title: "Amber Fort & The Pink City Treasures",
        description: "Ascend to Amber Fort, visit the Hall of Mirrors (Sheesh Mahal), City Palace, and photograph Hawa Mahal (Palace of Winds).",
        stay: "Rambagh Palace / Jai Mahal Palace, Jaipur",
        meals: "Breakfast & Lunch",
        transit: "Private Chauffeur",
        tip: "Try precious gemstone shopping with vetted royal jewelers."
      }
    ]
  },
  {
    id: "karnataka-coffee-wildlife",
    slug: "karnataka-splendours-coffee-highlands",
    title: "Karnataka Splendours & Coffee Highlands",
    subtitle: "Mysore Palace Illumination, Coorg Coffee Plantations & Dubare Elephant Sanctuary",
    category: "tour",
    subCategory: "tour",
    subCategoryName: "Tour Packages",
    destination: "South India",
    durationDays: 6,
    durationNights: 5,
    basePriceINR: 76000,
    rating: 4.92,
    reviewsCount: 29,
    badge: "Nature & Heritage",
    image: "https://images.unsplash.com/photo-1596405835955-467dbb120e06?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596405835955-467dbb120e06?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1200&q=80"
    ],
    route: ["Bangalore", "Mysore", "Coorg", "Mangalore"],
    routeSummary: "Bangalore (Garden City) → Mysore (Royal Heritage) → Coorg (Coffee Hills) → Mangalore Coast",
    overview: "Explore Southern India's opulent royal history and misty Western Ghats biodiversity. Witness the breathtaking illumination of Mysore Palace by nearly 100,000 light bulbs, sleep inside aromatic coffee & cardamom plantations in Coorg, bathe gentle Asian elephants at Dubare, and descend to the coastal temples of Mangalore.",
    highlights: [
      "VIP evening access to the dazzling Mysore Palace illumination and royal gardens",
      "Stay in a secluded luxury plantation villa in the misty Western Ghats of Coorg",
      "Ethical Asian elephant interaction and river bath at Dubare Elephant Camp",
      "Guided walk through aromatic Robusta & Arabica coffee estates with fresh cupping",
      "Visit Namdroling Golden Temple, Southern India's premier Tibetan Buddhist monastery",
      "Trek to the roaring Abbey Waterfalls surrounded by lush spice hills"
    ],
    inclusions: [
      "5 Nights in luxury heritage & plantation eco-resorts",
      "Dedicated air-conditioned vehicle with seasoned mountain chauffeur",
      "All breakfasts and special Kodava traditional dinner",
      "Plantation estate tour and coffee tasting session",
      "Elephant camp interaction fees and monument entries"
    ],
    exclusions: ["Airfare to Bangalore / from Mangalore", "Discretionary tips", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        title: "Bangalore to the Royal City of Mysore",
        description: "Pickup from Bangalore. Drive through scenic countryside to historic Mysore. Visit Srirangapatna, fortress of Tipu Sultan. Check into your heritage hotel. In the evening, witness the breathtaking sight of Mysore Palace illuminated by 97,000 bulbs.",
        stay: "Lalitha Mahal Palace / Radisson Blu Mysore",
        meals: "Welcome Dinner",
        transit: "Private AC SUV (3.5 hrs)",
        tip: "Don't miss tasting warm, melt-in-the-mouth Mysore Pak sweet at an authentic sweetmaker."
      },
      {
        day: 2,
        title: "Mysore Palace Grandeur & Brindavan Gardens",
        description: "Marvel at the stained glass, carved mahogany ceilings, and silver doors of the Mysore Palace interior. Afternoon visit to the sacred Chamundeshwari Temple atop Chamundi Hills and the musical fountains of Brindavan Gardens.",
        stay: "Lalitha Mahal Palace, Mysore",
        meals: "Breakfast & Lunch",
        transit: "Private Chauffeur",
        tip: "Look for the giant monolithic Nandi bull statue on the Chamundi hill trail."
      },
      {
        day: 3,
        title: "Journey to the Scotland of India — Coorg Highlands",
        description: "Wind upward into the Western Ghats into Coorg (Kodagu). Stop at the serene Bylakuppe Tibetan Settlement to visit the magnificent Namdroling Monastery (Golden Temple). Check into your secluded coffee estate resort.",
        stay: "The Tamara Coorg / Evolve Back Kuruba Safari Lodge",
        meals: "Breakfast & Kodava Dinner",
        transit: "Scenic Mountain Drive (3 hrs)",
        tip: "Listen to the deep harmonic resonance of the Tibetan monks during their afternoon prayer chants."
      },
      {
        day: 4,
        title: "Dubare Elephant Camp & Abbey Waterfalls",
        description: "Early morning visit to Dubare Elephant Camp on the banks of the Cauvery River. Learn about elephant conservation, observe their morning scrub and feeding. Later, explore Abbey Falls plunging down green basalt cliffs.",
        stay: "The Tamara Coorg",
        meals: "Breakfast & Estate High Tea",
        transit: "Private 4x4 & AC SUV",
        tip: "Wear comfortable walking shoes for the spice trail walk."
      }
    ]
  },
  {
    id: "jordan-desert-petra",
    slug: "wonders-of-jordan-petra-dead-sea",
    title: "Wonders of Jordan, Petra & The Dead Sea",
    subtitle: "Amman Citadel, Umayyad Desert Castles, Rose-Red Petra & Starlit Wadi Rum",
    category: "tour",
    subCategory: "tour",
    subCategoryName: "Tour Packages",
    destination: "International",
    durationDays: 7,
    durationNights: 6,
    basePriceINR: 165000,
    rating: 4.96,
    reviewsCount: 31,
    badge: "Middle East Antiquities",
    image: "https://images.unsplash.com/photo-1579606032834-d40f86a203b9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579606032834-d40f86a203b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
    ],
    route: ["Amman", "Desert Castles", "Petra", "Wadi Rum", "Dead Sea"],
    routeSummary: "Amman → Desert Castles (Al Kharraneh & Amra) → Petra (7th Wonder) → Wadi Rum Mars Desert → Dead Sea",
    overview: "Walk through biblical landscapes, 8th-century Umayyad hunting lodges, and the world-famous Treasury carved directly into rose-red sandstone cliffs. Conclude by floating weightlessly on the mineral-rich waters of the Dead Sea.",
    highlights: [
      "Full-day exploration of the ancient Nabataean capital of Petra including Petra by Night",
      "Off-road 4x4 dune safari across the Martian red sandscapes of Wadi Rum",
      "Stay in a luxury Martian Dome camp beneath the Arabian starry desert sky",
      "Float effortlessly in the hyper-saline waters of the Dead Sea at a 5-star spa resort",
      "Visit the 8th-century Umayyad Desert Castles of Qasr Al-Kharraneh and Qusayr Amra"
    ],
    inclusions: [
      "6 Nights in premium 5★ hotels and Martian Bubble Domes in Wadi Rum",
      "Private modern AC vehicle with licensed English-speaking Jordanian guide",
      "Daily breakfast and traditional Bedouin zarb feast under the desert stars",
      "Jordan Pass & monument entry permits included",
      "Private 2-hour 4x4 Bedouin jeep tour in Wadi Rum"
    ],
    exclusions: ["International airfare", "Travel insurance", "Personal tips"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Amman — Ancient Philadelphia",
        description: "Arrive at Queen Alia International Airport. Fast-track VIP immigration and private transfer to The St. Regis Amman. Evening panoramic drive through modern Amman and dinner at a traditional Levantine restaurant.",
        stay: "The St. Regis Amman (5★ Luxury)",
        meals: "Welcome Dinner",
        transit: "Private Sedan (40 mins)",
        tip: "Enjoy authentic mezze, fresh warm khubz bread, and mint tea."
      },
      {
        day: 2,
        title: "Desert Castles & Amman Roman Citadel",
        description: "Explore the 8th-century desert castles of Qasr Al-Kharraneh and the fresco-adorned bathhouses of Qusayr Amra (UNESCO). Return to Amman to explore the towering Temple of Hercules at the Roman Citadel.",
        stay: "The St. Regis Amman",
        meals: "Breakfast & Lunch",
        transit: "Private AC Vehicle (Full Day)",
        tip: "Examine the remarkable early Islamic wall frescoes inside Qusayr Amra."
      },
      {
        day: 3,
        title: "The Rose-Red City of Petra",
        description: "Drive down the Kings' Highway to Petra. Walk through the narrow mile-long Siq gorge until the iconic Al-Khazneh (The Treasury) dramatically reveals itself. Continue to the Royal Tombs and Roman Theater.",
        stay: "Mövenpick Resort Petra (Direct Gate Access)",
        meals: "Breakfast & Dinner",
        transit: "Private Vehicle (3 hrs)",
        tip: "Wear comfortable walking shoes; the walking terrain is ancient stone."
      },
      {
        day: 4,
        title: "Wadi Rum Martian Desert & Bedouin Camp",
        description: "Depart for Wadi Rum, the valley of the moon made famous by Lawrence of Arabia. Board open 4x4 trucks to traverse Lawrence's spring and dramatic red rock bridges. Settle into your glass-ceiling Martian geodesic dome.",
        stay: "Wadi Rum Luxury Martian Geodesic Camp",
        meals: "Breakfast & Zarb Underground Roast Dinner",
        transit: "Private SUV & Desert 4x4 (2 hrs)",
        tip: "Stargazing at night in the pitch-black desert is unlike anywhere else on earth."
      }
    ]
  },

  // ==========================================
  // 2. CUSTOMISED PACKAGES
  // ==========================================
  {
    id: "custom-rajasthan-grandeur",
    slug: "customised-rajasthan-royal-grandeur",
    title: "Customised Royal Rajasthan & Thar Desert Expedition",
    subtitle: "Private Dune Camps, Vintage Car Processions & Maharaja Palace Suites",
    category: "customised",
    subCategory: "customised",
    subCategoryName: "Customised Packages",
    destination: "Rajasthan",
    durationDays: 10,
    durationNights: 9,
    basePriceINR: 215000,
    rating: 4.99,
    reviewsCount: 47,
    badge: "100% Tailor-Made",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80"
    ],
    route: ["Jaipur", "Bikaner", "Jaisalmer", "Jodhpur", "Udaipur"],
    routeSummary: "Jaipur (Pink City) → Bikaner → Jaisalmer (Golden Fort) → Jodhpur (Blue City) → Udaipur (Lakes)",
    overview: "A completely customizable royal odyssey curated for your family or private group. Tailor every evening: from private dining on the Sam sand dunes under desert constellations to champagne sunset cruises on Lake Pichola and meetings with local Rajasthani royal archivists.",
    highlights: [
      "Full itinerary flexibility: adjust stays, pacing, and private excursions at will",
      "Stay in authentic Maharaja suites at Umaid Bhawan, Rambagh, and Lake Palace",
      "Private desert sundowner with Manganiyar folk singers on private Thar dunes",
      "Exclusive access to royal armor vaults and private vintage car collections",
      "24/7 Dedicated on-call travel architect coordinating personal requests"
    ],
    inclusions: [
      "9 Nights in bespoke palace suites and luxury tented dune camps",
      "Private Mercedes-Benz SUV throughout with certified personal chauffeur",
      "All royal breakfasts, 4 bespoke private dinners, and high teas",
      "VIP private monument passes with leading art historians",
      "Camel safari and desert 4x4 dune bashing in Jaisalmer"
    ],
    exclusions: ["Domestic/international flights", "Discretionary tips", "Personal shopping"],
    itinerary: [
      {
        day: 1,
        title: "Jaipur — Royal Welcome at the Palace",
        description: "Arrive in Jaipur. Traditional Rajput floral welcome and turban ceremony. Check in to your palace suite. Afternoon private orientation with your custom journey curator.",
        stay: "Rambagh Palace, Jaipur",
        meals: "Royal Welcome Dinner",
        transit: "Private AC SUV",
        tip: "Enjoy a twilight stroll through the peacock gardens of the palace."
      },
      {
        day: 2,
        title: "Jaipur — Amber Fort & Royal Astronomy",
        description: "Ascend to Amber Fort followed by an exclusive private walkthrough of Jantar Mantar observatory with an astronomer, and City Palace private wing.",
        stay: "Rambagh Palace, Jaipur",
        meals: "Breakfast & Heritage Lunch",
        transit: "Private Chauffeur",
        tip: "Look at the giant silver vessels (Gangajalis) in the City Palace."
      },
      {
        day: 3,
        title: "Bikaner — Junagarh Fortress & Desert Mansions",
        description: "Drive to Bikaner. Tour the unconquered Junagarh Fort with its gold-leaf Anup Mahal and red sandstone courtyards.",
        stay: "Narendra Bhawan / Gajner Palace, Bikaner",
        meals: "Breakfast & Desert Dinner",
        transit: "Private AC SUV (5 hrs)",
        tip: "Sample legendary Bikaneri bhujia and sweets at ancient halwai shops."
      },
      {
        day: 4,
        title: "Jaisalmer — Golden City of the Thar",
        description: "Drive deep into the golden Thar desert to Jaisalmer. In the afternoon, transfer to a secluded private luxury camp on the dunes for sunset camel treks and live sufi music.",
        stay: "Sujan The Serai / Luxury Tented Pavilion",
        meals: "Breakfast & Starlit Dune Banquet",
        transit: "Private SUV (5.5 hrs)",
        tip: "Watch the dunes change color from amber to violet as the sun sinks."
      }
    ]
  },
  {
    id: "custom-himalayan-wellness",
    slug: "bespoke-himalayan-meditation-wellness",
    title: "Bespoke Himalayan Meditation & High-Altitude Passes",
    subtitle: "Customized Ayurvedic Retreats, Monastery Chants & Scenic Mountain Stays",
    category: "customised",
    subCategory: "customised",
    subCategoryName: "Customised Packages",
    destination: "Himalayas",
    durationDays: 9,
    durationNights: 8,
    basePriceINR: 190000,
    rating: 4.97,
    reviewsCount: 33,
    badge: "Custom Wellness",
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
    ],
    route: ["Delhi", "Dehradun", "Rishikesh", "Shimla", "Dharamshala"],
    routeSummary: "Delhi → Rishikesh (Ganges) → Shimla (Colonial Ridge) → Dharamshala (Tibetan Monasteries)",
    overview: "Crafted for rejuvenation and spiritual elevation. Tailor your balance between deep restorative Ayurvedic panchakarma therapies, private yoga sessions with Himalayan masters, and scenic mountain drives past deodar forests and snow-capped peaks.",
    highlights: [
      "Customized Ayurvedic treatment plan formulated by certified Vaidyas",
      "Private morning meditation overlooking cedar valleys and Himalayan snow peaks",
      "Visit the Dalai Lama's temple and Tibetan Medicine Institute in McLeod Ganj",
      "Scenic heritage mountain toy-train journey through pine-clad hills",
      "Flexible pacing tailored to your wellness and fitness preferences"
    ],
    inclusions: [
      "8 Nights in eco-luxury wellness resorts & mountain heritage chalets",
      "Dedicated mountain-certified 4x4 AC vehicle throughout",
      "Personalized sattvic organic meal plan and high-mountain herbal teas",
      "Private yoga masters and Ayurvedic doctor consultations",
      "All domestic mountain flights and transfers"
    ],
    exclusions: ["Personal medications", "International flights", "Spa treatments outside program"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Rishikesh — Sacred River Sanctuary",
        description: "Fly to Dehradun and transfer to your luxury cliffside retreat over the Ganges. Welcome Ayurvedic pulse diagnosis and customized detox diet plan.",
        stay: "Ananda in the Himalayas",
        meals: "Organic Sattvic Welcome Dinner",
        transit: "Flight + Mountain Transfer",
        tip: "Disconnect digital devices to begin your mountain mindfulness journey."
      },
      {
        day: 2,
        title: "Yoga, Hydrotherapy & Sunset Aarti",
        description: "Dawn pranayama meditation followed by customized herbal body wrap. Afternoon private boat crossing for Rishikesh Ganga Aarti.",
        stay: "Ananda in the Himalayas",
        meals: "Full Wellness Board",
        transit: "Private Escort",
        tip: "Experience the soothing vibration of Tibetan singing bowls during meditation."
      }
    ]
  },

  // ==========================================
  // 3. HOME STAY PACKAGES
  // ==========================================
  {
    id: "rajasthan-heritage-haveli",
    slug: "royal-rajasthan-heritage-haveli-homestay",
    title: "Royal Haveli & Living History of Rajasthan",
    subtitle: "Stay in a 472-Year-Old Royal Ancestral Haveli & Explore Desert Fortresses",
    category: "homestay",
    subCategory: "homestay",
    subCategoryName: "Home Stay Packages",
    destination: "Rajasthan",
    durationDays: 6,
    durationNights: 5,
    basePriceINR: 98000,
    rating: 4.98,
    reviewsCount: 52,
    badge: "472-Year Haveli Exclusive",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80"
    ],
    route: ["Jodhpur", "Ranakpur", "Udaipur", "Jaipur"],
    routeSummary: "Jodhpur (Blue City) → Ranakpur Marble Temples → Udaipur (Lake City)",
    overview: "A rare window into Rajput noble life. Columbus Travels & Indian Wonders arranges exclusive accommodation inside a preserved 472-year-old heritage haveli in Jodhpur belonging to descendants of the royal priest lineage. Experience royal courtyard hospitality, folk music under the stars, and the towering Mehrangarh Fort.",
    highlights: [
      "Stay in an authentic 472-year-old royal haveli with boutique antique-furnished suites",
      "Private dinner hosted by the haveli's noble family with Marwari family recipes",
      "Private guided rampart walk of Mehrangarh Fort with panoramic blue city vistas",
      "Explore the 1,444 intricately carved marble pillars of Ranakpur Jain Temple",
      "Sunset private boat charter on Lake Pichola in Udaipur with palace views"
    ],
    inclusions: [
      "5 Nights in Heritage Suites (2 Nights Haveli Homestay + 3 Nights Luxury Palace)",
      "Chauffeur-driven AC SUV throughout the journey",
      "Daily royal breakfast and 2 curated ancestral family dinners",
      "Heritage walking guides & monument passes",
      "Lake Pichola private boat cruise"
    ],
    exclusions: ["Airfare to Jodhpur / from Udaipur", "Personal expenses", "Camera fees at monuments"],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Jodhpur & 472-Year Haveli Check-In",
        description: "Arrival at Jodhpur Airport or Railway Station. Meet your Indian Wonders host and transfer into the historic walled city to your 472-year-old ancestral haveli. Welcome with traditional dhol beats, marigold garlands, and saffron sherbet.",
        stay: "Ancestral Heritage Haveli Suite, Jodhpur",
        meals: "Welcome Royal Dinner",
        transit: "Private AC SUV (30 mins)",
        tip: "Climb up to the rooftop terrace for an unforgettable sunset view of Mehrangarh Fort."
      },
      {
        day: 2,
        title: "Mehrangarh Citadel & Blue City Heritage Walk",
        description: "Ascend to Mehrangarh Fort, towering 400 feet above the skyline. Walk through the Moti Mahal, Phool Mahal, and armory. Later, stroll through the vibrant indigo-painted lanes of Navchokiya with a local historian.",
        stay: "Ancestral Heritage Haveli Suite, Jodhpur",
        meals: "Breakfast & Family Courtyard Dinner",
        transit: "Private Sedan",
        tip: "Sample local mawa kachori and sweet lassi at the Clock Tower market."
      },
      {
        day: 3,
        title: "Across the Aravallis: Ranakpur to Udaipur",
        description: "Scenic drive through the rugged Aravalli hills to Ranakpur, home to the 15th-century marble temple where no two pillars share the same design. Continue onward to the romantic lake city of Udaipur.",
        stay: "Taj Lake Palace / Fateh Garh Heritage Hotel, Udaipur",
        meals: "Breakfast & Lunch",
        transit: "Private AC SUV (5 hrs including temple stop)",
        tip: "Look out for langur monkeys and desert peacocks along the mountain passes."
      },
      {
        day: 4,
        title: "Udaipur City Palace & Lake Pichola Sunset Cruise",
        description: "Tour the largest palace complex in Rajasthan—Udaipur's City Palace with its peacock mosaics and mirror galleries. In the golden hour, board a private wooden canopy boat on Lake Pichola.",
        stay: "Taj Lake Palace / Fateh Garh Heritage Hotel, Udaipur",
        meals: "Breakfast & Candlelight Lakeview Dinner",
        transit: "Private Chauffeur & Private Boat",
        tip: "The palace lit up at twilight reflected in the dark water is pure magic."
      }
    ]
  },
  {
    id: "coorg-plantation-homestay",
    slug: "coorg-coffee-plantation-bungalow-homestay",
    title: "Coorg Coffee Estate Colonial Bungalow Homestay",
    subtitle: "Stay with 4th-Generation Planters, Bean-to-Cup Tours & Kodava Culinary Secrets",
    category: "homestay",
    subCategory: "homestay",
    subCategoryName: "Home Stay Packages",
    destination: "South India",
    durationDays: 5,
    durationNights: 4,
    basePriceINR: 65000,
    rating: 4.94,
    reviewsCount: 36,
    badge: "Planter Heritage Homestay",
    image: "https://images.unsplash.com/photo-1596405835955-467dbb120e06?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596405835955-467dbb120e06?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80"
    ],
    route: ["Bangalore", "Madikeri", "Virajpet", "Coorg"],
    routeSummary: "Bangalore → Coorg Highland Plantation Estate → Nagarhole Boundary → Bangalore",
    overview: "Live the idyllic planter's lifestyle. Hosted by a prominent Kodava family in their 110-year-old heritage plantation bungalow amidst 250 acres of aromatic coffee, pepper, and cardamom groves. Wake up to bird choruses, homemade filter coffee, and fireplace dinners.",
    highlights: [
      "Stay in an authentic 110-year colonial planter bungalow with Rosewood four-poster beds",
      "Private estate walk with the planter host explaining coffee harvesting and processing",
      "Kodava culinary workshop featuring authentic pandi curry, kadambuttu, and akki rotti",
      "Night safari along the plantation border to spot flying squirrels and civet cats",
      "Bonfire evenings with storytelling of Kodagu warrior clans"
    ],
    inclusions: [
      "4 Nights in private heritage plantation suites",
      "All home-cooked gourmet meals prepared with organic farm ingredients",
      "Private AC vehicle transfers from/to Bangalore or Mangalore",
      "Daily coffee cupping, spice trails, and birdwatching walks",
      "Complimentary basket of single-origin roast coffee & fresh spices"
    ],
    exclusions: ["Airfare", "Personal telephone/laundry"],
    itinerary: [
      {
        day: 1,
        title: "Bangalore to Coorg Coffee Highlands",
        description: "Chauffeur pickup from Bangalore. Ascend into the Western Ghats. Arrive at the plantation bungalow. Welcome with warm spiced cardamom brew. Evening fireplace gathering with your host family.",
        stay: "Colonial Planter Bungalow, Coorg",
        meals: "Traditional Kodava Welcome Feast",
        transit: "Private AC SUV (5 hrs)",
        tip: "Listen to the resident hornbills roosting in the silver oak trees."
      },
      {
        day: 2,
        title: "Bean-to-Cup Coffee Trail & River Picnic",
        description: "Morning guided trek through coffee bushes. Learn harvesting of Arabica and Robusta cherries. Afternoon private riverside picnic by Cauvery tributary.",
        stay: "Colonial Planter Bungalow, Coorg",
        meals: "Farm Breakfast, Picnic Lunch & Dinner",
        transit: "Private Estate 4x4",
        tip: "Freshly brewed hand-ground filter coffee on the verandah at sunrise is sublime."
      }
    ]
  },
  {
    id: "kerala-tharavadu-homestay",
    slug: "kerala-backwater-tharavadu-homestay",
    title: "Heritage Backwater Tharavadu Homestay",
    subtitle: "Century-Old Teakwood Manor, Village Canoe Drifts & Authentic Sadya Feasts",
    category: "homestay",
    subCategory: "homestay",
    subCategoryName: "Home Stay Packages",
    destination: "South India",
    durationDays: 5,
    durationNights: 4,
    basePriceINR: 72000,
    rating: 4.96,
    reviewsCount: 40,
    badge: "Waterfront Living Heritage",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80"
    ],
    route: ["Cochin", "Alleppey", "Kumarakom"],
    routeSummary: "Cochin → Alleppey Lagoon Village → Kumarakom Backwaters → Cochin",
    overview: "Step back in time to the tranquil rhythms of old Kerala. Hosted in a restored 120-year-old carved teakwood Tharavadu homestead right on the emerald canals of Alleppey. Eat meals off banana leaves, drift on country boats, and learn organic toddy and coconut farming.",
    highlights: [
      "Stay in a 120-year-old carved teakwood Tharavadu overlooking backwater canals",
      "Traditional Kerala Sadya feast served on banana leaf with 22 festive dishes",
      "Morning country-canoe paddle through village waterways inaccessible to houseboats",
      "Personal Ayurvedic herbal oil massage by a local lineage practitioner",
      "Evening Kathakali makeup and dance demonstration in the courtyard"
    ],
    inclusions: [
      "4 Nights in Heritage Teakwood Suites",
      "All meals home-cooked with freshly caught backwater fish and farm produce",
      "Private AC vehicle transfers from/to Cochin International Airport",
      "Daily guided village canoe tours and fishing excursions"
    ],
    exclusions: ["Airfare", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cochin & Transfer to Tharavadu Homestay",
        description: "Pickup from Cochin. Transfer to the quiet village canals of Alleppey. Boat transfer across the lotus pond to the Tharavadu. Welcome tender coconut drink.",
        stay: "Heritage Tharavadu Homestead, Alleppey",
        meals: "Traditional Coastal Dinner",
        transit: "Private AC Vehicle + Country Boat",
        tip: "Sit on the verandah steps watching kingfishers dive into the canal."
      }
    ]
  },

  // ==========================================
  // 4. CRUISE PACKAGES
  // ==========================================
  {
    id: "alaska-glacier-discovery",
    slug: "glacier-discovery-alaska-luxury-cruise",
    title: "Glacier Discovery Alaska Luxury Cruise",
    subtitle: "Vancouver to Seward (Anchorage) via Glacier Bay National Park & Balcony Staterooms",
    category: "cruise",
    subCategory: "cruise",
    subCategoryName: "Cruise Packages",
    destination: "International Expeditions",
    durationDays: 8,
    durationNights: 7,
    basePriceINR: 245000,
    rating: 4.97,
    reviewsCount: 44,
    badge: "International Ocean Cruise",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80"
    ],
    route: ["Vancouver", "Ketchikan", "Juneau", "Skagway", "Glacier Bay", "Seward"],
    routeSummary: "Vancouver (Canada) → Inside Passage → Ketchikan → Juneau → Skagway → Glacier Bay → Seward (Alaska)",
    overview: "Sail the legendary Inside Passage in complete ultra-luxury. Experience colossal calving tidewater glaciers, humpback whales breaching beside your private balcony, totem poles of Ketchikan, and Gold Rush saloon history in Skagway. Handled with Columbus Travels' seamless IATA visa and flight assistance.",
    highlights: [
      "Guaranteed Oceanview Private Balcony Stateroom with personalized steward service",
      "Full cruising day inside UNESCO World Heritage Glacier Bay National Park",
      "Whale watching expedition in Auke Bay, Juneau (guaranteed humpback sightings)",
      "Ride the historic White Pass & Yukon Route narrow-gauge mountain railroad in Skagway",
      "Flightseeing floatplane landing over misty Misty Fjords National Monument in Ketchikan"
    ],
    inclusions: [
      "7 Nights onboard luxury 5-star cruise liner in Verandah/Balcony stateroom",
      "All gourmet meals across specialty restaurants, midnight buffets & 24hr room service",
      "Glacier Bay National Park naturalist lectures and park ranger escort onboard",
      "Port charges, maritime taxes, and onboard live entertainment",
      "Assistance with US and Canadian transit visas via our Mumbai IATA consulate team"
    ],
    exclusions: ["International flights from India to Vancouver / from Anchorage", "Optional shore excursions", "Onboard gratuities"],
    itinerary: [
      {
        day: 1,
        title: "Embarkation in Vancouver, British Columbia",
        description: "Arrive at Canada Place cruise terminal. Board your luxury liner, settle into your private Verandah stateroom, and celebrate sailaway as the ship glides under the iconic Lions Gate Bridge.",
        stay: "Oceanview Balcony Stateroom Onboard Luxury Liner",
        meals: "Full Board / Welcome Gala Dinner",
        transit: "Ocean Liner Sailaway",
        tip: "Stand on the top deck at sunset as Vancouver's glass skyline fades behind the coastal mountains."
      },
      {
        day: 2,
        title: "Cruising the Dramatic Inside Passage",
        description: "A full day of scenic cruising through calm protected waters lined with virgin temperate rainforest, emerald fjords, and snow-capped coastal peaks. Spot bald eagles soaring overhead and porpoises riding the bow wave.",
        stay: "Oceanview Balcony Stateroom",
        meals: "Full Board Onboard",
        transit: "Scenic Ocean Cruising",
        tip: "Bring high-powered binoculars out onto your private balcony."
      },
      {
        day: 3,
        title: "Ketchikan — Salmon Capital & Tlingit Heritage",
        description: "Dock in picturesque Ketchikan. Explore historic Creek Street built on wooden stilts over the river. Visit Saxman Native Village to admire the world's largest collection of standing hand-carved totem poles.",
        stay: "Oceanview Balcony Stateroom",
        meals: "Full Board",
        transit: "Port Call (7:00 AM - 3:00 PM)",
        tip: "Taste wild Alaskan smoked King Salmon from local smokehouses."
      },
      {
        day: 4,
        title: "Juneau — Mendenhall Glacier & Whale Watching",
        description: "Arrive in Alaska's remote capital, accessible only by sea or air. Board a high-speed catamaran for an intimate whale-watching excursion in pristine bays before visiting the ice caves of Mendenhall Glacier.",
        stay: "Oceanview Balcony Stateroom",
        meals: "Full Board",
        transit: "Port Call (7:00 AM - 9:30 PM)",
        tip: "Listen for the resounding whoosh of humpback whale blows across the silent water."
      }
    ]
  },
  {
    id: "kerala-backwaters-ayurveda",
    slug: "kerala-backwaters-spice-plantations",
    title: "Kerala Backwaters & Spice Plantations Cruise",
    subtitle: "Private Tharavadu Houseboat, Munnar Tea Valleys & Authentic Ayurvedic Healing",
    category: "cruise",
    subCategory: "cruise",
    subCategoryName: "Cruise Packages",
    destination: "South India",
    durationDays: 6,
    durationNights: 5,
    basePriceINR: 82000,
    rating: 4.94,
    reviewsCount: 41,
    badge: "Private Houseboat Charter",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80"
    ],
    route: ["Cochin", "Munnar", "Thekkady", "Alleppey"],
    routeSummary: "Cochin Colonial Heritage → Munnar Misty Tea Valleys → Thekkady Spice Hills → Alleppey Backwaters",
    overview: "Unwind in tropical luxury. Breathe the cool mist of Munnar's rolling emerald tea gardens, walk through organic pepper and cardamom plantations in Thekkady, and board your private air-conditioned traditional Kettuvallam houseboat drifting across tranquil lagoons.",
    highlights: [
      "Exclusive private chartered air-conditioned houseboat with personal chef and captain",
      "Curated spice plantation walk in Thekkady discovering vanilla, cardamom and cinnamon",
      "Scenic drive through 5,000-feet altitude tea estates with high-mountain tea tasting",
      "Authentic Kathakali classical dance and Kalaripayattu martial arts performance in Cochin",
      "Daily herbal Ayurvedic Abhyanga massage with medicinal botanical oils"
    ],
    inclusions: [
      "4 Nights in boutique tea estate & spice garden resorts + 1 Night luxury private houseboat",
      "Private air-conditioned Toyota Innova Crysta throughout with dedicated chauffeur",
      "All meals onboard the houseboat freshly caught and prepared by private chef",
      "Daily breakfast at all resorts, Kathakali show tickets, and spice estate entry"
    ],
    exclusions: ["Airfare to/from Cochin", "Personal laundry & telephone charges"],
    itinerary: [
      {
        day: 1,
        title: "Colonial Fort Cochin & Chinese Fishing Nets",
        description: "Arrive at Cochin International Airport. Transfer to historic Fort Kochi. Marvel at the cantileverd 14th-century Chinese fishing nets against the sunset, followed by a visit to St. Francis Church and Mattancherry Dutch Palace.",
        stay: "Brunton Boatyard / Eighth Bastion, Fort Kochi",
        meals: "Fresh Coastal Welcome Dinner",
        transit: "Private Sedan (1 hr)",
        tip: "Take a walking stroll along Jew Town to see century-old antique stores."
      },
      {
        day: 2,
        title: "Into the Emerald Mist: Munnar High Ranges",
        description: "Ascend past tumbling waterfalls into Munnar's manicured sea of green tea carpet. Visit the Lockhart Tea Factory for a hands-on tea plucking and leaf processing workshop.",
        stay: "Spice Tree Munnar / Windermere Estate",
        meals: "Breakfast & Mountain Dinner",
        transit: "Private Scenic Drive (4 hrs)",
        tip: "Try the fresh first-flush silver needle white tea."
      },
      {
        day: 3,
        title: "Thekkady Spice Gardens & Periyar Wildlife Sanctuary",
        description: "Drive south to Thekkady. Embark on an informative spice walk with an expert botanist through aromatic gardens of green cardamom, cloves, and nutmeg. Afternoon boat safari on Periyar Lake.",
        stay: "Spice Village (CGH Earth), Thekkady",
        meals: "Breakfast & Organic Farm Dinner",
        transit: "Private Drive (3 hrs)",
        tip: "Spot wild elephant herds drinking on the banks of Periyar Lake."
      },
      {
        day: 4,
        title: "Boarding the Private Alleppey Houseboat",
        description: "Transfer to Alleppey. Step aboard your private wooden houseboat crafted without a single nail. Drift past swaying palms, Chinese fishing nets, and village hamlets while your private chef prepares traditional Karimeen Pollichathu (pearl spot fish wrapped in banana leaf).",
        stay: "Private Luxury AC Houseboat (Exclusive Charter)",
        meals: "Breakfast, Lunch, High Tea & Dinner",
        transit: "Backwater Cruise",
        tip: "Sleep with gentle water lapping against the hull under starry Kerala skies."
      }
    ]
  },
  {
    id: "ganges-river-heritage-cruise",
    slug: "ganges-river-heritage-luxury-cruise",
    title: "Sacred Ganges & Bengal Heritage Luxury River Cruise",
    subtitle: "Kolkata to Murshidabad via French, Danish & Nawabi Palaces on Boutique River Vessel",
    category: "cruise",
    subCategory: "cruise",
    subCategoryName: "Cruise Packages",
    destination: "East India",
    durationDays: 8,
    durationNights: 7,
    basePriceINR: 195000,
    rating: 4.98,
    reviewsCount: 27,
    badge: "Boutique River Expedition",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80"
    ],
    route: ["Kolkata", "Kalna", "Matiari", "Murshidabad", "Mayapur"],
    routeSummary: "Kolkata → Kalna Terracotta Temples → Matiari Brass Artisans → Murshidabad Hazarduari Palace → Kolkata",
    overview: "Sail along the sacred Hooghly (Lower Ganges) aboard a handcrafted luxury river vessel. Discover 18th-century terracotta temples, Danish colonial outposts in Serampore, French settlements in Chandannagar, and the opulent 1000-door palace of the Nawabs of Bengal in Murshidabad.",
    highlights: [
      "7 Nights onboard intimate 24-cabin luxury river boutique ship with private French balconies",
      "Explore 108 Shiva temples in Kalna arranged in concentric cosmic circles",
      "Watch brass craftsmen in Matiari beating gleaming metal by ancient riverbank techniques",
      "VIP tour of the grand Hazarduari Palace (Palace with 1,000 Doors) in Murshidabad",
      "Daily lectures by onboard cultural historians and classical Baul folk music concerts"
    ],
    inclusions: [
      "7 Nights in luxury outside-facing river cabin",
      "All gourmet meals, afternoon high teas, and regional Bengali degustations",
      "All shore excursions with English-speaking heritage guides and entry permits",
      "Transfers between Kolkata airport / hotel and the river embarkation pier"
    ],
    exclusions: ["Airfare to/from Kolkata", "Premium spirits & personal spa services"],
    itinerary: [
      {
        day: 1,
        title: "Embarkation in Kolkata — The City of Joy",
        description: "Board your vessel at Millenium Park Jetty. Settle into your cabin. Sail upstream as twilight covers the iconic Howrah Bridge and riverside ghats.",
        stay: "Luxury Boutique Ganges Vessel Cabin",
        meals: "Bengali Welcome Dinner",
        transit: "River Cruise Sailaway",
        tip: "The view of Howrah Bridge illuminated against the night sky is unforgettable."
      }
    ]
  }
];

const SPECIALIZED_SERVICES = [
  {
    id: "iata-ticketing",
    title: "IATA Air Ticketing & Global Airline Routing",
    icon: "fa-plane-departure",
    tagline: "Direct Global Airline Consolidator Since 1984",
    description: "Full-service direct ticketing with access to published, corporate, and private NRI consolidator fares across Emirates, Qatar Airways, Singapore Airlines, Air India, and British Airways. Complete itinerary changes, premium seat selection, and emergency rerouting handled 24/7.",
    features: [
      "Official IATA Accredited Passenger Sales Agent",
      "Corporate & NRI Special Discounted Tariff Access",
      "Complex Multi-City & Round-The-World Custom Routing",
      "24/7 Human Emergency Travel Desk in Mumbai"
    ]
  },
  {
    id: "medical-tourism",
    title: "Medical Tourism & Holistic Healing",
    icon: "fa-heart-pulse",
    tagline: "World-Class Healthcare Combined with Rejuvenation",
    description: "For over two decades, Columbus Travels has coordinated end-to-end medical journeys for international and diaspora clients. We liaise directly with JCI-accredited hospitals in Mumbai, Delhi, and Bangalore for joint replacement, cardiac, dental, and cosmetic procedures, followed by serene Ayurvedic convalescence.",
    features: [
      "Direct Hospital & Senior Surgeon Liaison",
      "Medical Visa Assistance & Express Documentation",
      "Post-Operative Private Nursing & Luxury Stays",
      "Integrated Ayurvedic Rejuvenation in Kerala"
    ]
  },
  {
    id: "luxury-fleet",
    title: "Luxury Chauffeur & Coach Fleet",
    icon: "fa-car-side",
    tagline: "Punctual, Vetted & Impeccably Maintained Vehicles",
    description: "Travel with complete peace of mind across India. Our owned and partner fleet includes Mercedes-Benz E-Class, Toyota Innova Crysta, Fortuner SUVs, and luxury 18-35 seater air-conditioned coaches driven by uniformed, English-speaking chauffeurs trained in executive etiquette.",
    features: [
      "Uniformed, Background-Verified Senior Chauffeurs",
      "Complimentary Wi-Fi, Chilled Water & Daily Sanitization",
      "GPS Monitored with 24-Hour Central Fleet Tracking",
      "Pan-India Interstate Permits & All-Toll Clearance"
    ]
  },
  {
    id: "visa-insurance",
    title: "Visa Facilitation & Overseas Travel Insurance",
    icon: "fa-passport",
    tagline: "Seamless Documentation with Zero Hassle",
    description: "Expert guidance for USA, Schengen, UK, Canada, Japan, and Australia visas. We review biometrics scheduling, cover letters, and financial documentation to eliminate rejection risks, alongside comprehensive overseas medical and trip-cancellation insurance.",
    features: [
      "Authorized Embassy & Consulate Submission Assistance",
      "In-Depth Document Auditing & Cover Letter Drafting",
      "Overseas Travel & Medical Evacuation Insurance",
      "Urgent Visa Processing & Biometrics Appointment Booking"
    ]
  }
];

const CURRENCY_RATES = {
  INR: { symbol: "₹", rate: 1, label: "INR (₹)" },
  USD: { symbol: "$", rate: 0.012, label: "USD ($)" },
  EUR: { symbol: "€", rate: 0.011, label: "EUR (€)" },
  GBP: { symbol: "£", rate: 0.0095, label: "GBP (£)" }
};

const COMPANY_CREDENTIALS = {
  brandName: "Indian Wonders",
  parentCompany: "Columbus Travels & Services Pvt. Ltd.",
  approval: "Approved by Dept. of Tourism, Govt. of India",
  establishedYear: 1984,
  accreditation: "IATA Accredited Passenger Sales Agent",
  headOffice: "Rajni Kunj, M.G. Road, Kandivali (West), Mumbai - 400067, Maharashtra, India",
  email: "indianwonders@indianwonders.com",
  phoneNumbers: ["+91 22 2808 6789", "022-28052385", "022-265812163"],
  whatsapp: "+919820012345",
  founder: "Mrs. Bhavana Agashiwala",
  experienceYears: 42
};

// Export for Node.js Express server if available
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    SUBCATEGORIES,
    TOURS_DATA,
    SPECIALIZED_SERVICES,
    CURRENCY_RATES,
    COMPANY_CREDENTIALS
  };
}
