// Generated comprehensive pan-India territory intelligence dataset (ALL 36 STATES & UTs)
import {
  DistrictStockPoint,
  TerritoryNetwork,
  NetworkArc,
  ALL_INDIAN_TERRITORIES,
} from './territoryTypes';

export * from './territoryTypes';

const RAW_TERRITORY_NETWORKS: TerritoryNetwork[] = [
  {
    "id": "maharashtra",
    "name": "Maharashtra",
    "countryName": "India",
    "latitude": 19.076,
    "longitude": 72.8777,
    "verifiedStockCount": 4820,
    "districtCount": 14,
    "totalDistributors": "14,250 Registered Channel Distributors",
    "verifiedStockists": "4,820 Verified Stockists & Wholesalers",
    "readinessScore": "98/100 (Tier-1 Prime Hub)",
    "commercialStatus": "Premier Tier-1 Maritime Port, C&F Depots & High-Velocity Consumption Belt",
    "tradeCorridor": "JNPT Port to Mumbai-Pune-Nashik Industrial Golden Triangle",
    "keySectors": [
      "FMCG Snacks & Staples",
      "Clinical Skincare",
      "Packaged Beverages",
      "Auto Lubricants",
      "Electronics"
    ],
    "districts": [
      {
        "id": "mh-mumbai",
        "districtName": "Mumbai & MMR",
        "stateName": "Maharashtra",
        "countryName": "India",
        "latitude": 19.076,
        "longitude": 72.8777,
        "verified": true,
        "stockistCount": 1420,
        "opportunityCount": 48,
        "categories": [
          "FMCG Food",
          "Personal Care",
          "Cold Beverages",
          "Confectionery"
        ],
        "availability": "high",
        "primaryMandi": "Vashi APMC Navi Mumbai & Dana Bandar",
        "avgMargin": "24% - 32%",
        "famousFor": "Financial Capital of India, Mega Corporate HQ, Ports & Fast-Moving Consumer Goods (FMCG) Distribution",
        "famousBusinessType": "Commercial Port Logistics, FMCG Trade & Financial Services",
        "keySpecialities": [
          "FMCG Food Brands",
          "Imported Confectionery",
          "Cosmetics & Personal Care",
          "Maritime Cargo Logistics"
        ],
        "hubDescription": "Mumbai and Mumbai Metropolitan Region (MMR) form India’s largest consumer market and primary financial and FMCG distribution hub."
      },
      {
        "id": "mh-bhiwandi",
        "districtName": "Thane & Bhiwandi Warehousing Hub",
        "stateName": "Maharashtra",
        "countryName": "India",
        "latitude": 19.296,
        "longitude": 73.063,
        "verified": true,
        "stockistCount": 1180,
        "opportunityCount": 36,
        "categories": [
          "C&F Depots",
          "Food Staples",
          "Packaging",
          "Industrial Hardware"
        ],
        "availability": "high",
        "primaryMandi": "Bhiwandi Integrated Logistics Corridor",
        "avgMargin": "22% - 28%",
        "famousFor": "Powerloom Cloth Weaving & Asia’s Largest Integrated Warehousing / C&F Logistics Hub",
        "famousBusinessType": "Warehousing, 3PL Logistics & Powerloom Textiles",
        "keySpecialities": [
          "Central Warehousing",
          "E-commerce Fulfillment",
          "Grey Cloth & Powerlooms",
          "Carton Packaging"
        ],
        "hubDescription": "Bhiwandi is Asia’s premier supply chain logistics nexus, hosting central C&F depots for over 500 national brands."
      },
      {
        "id": "mh-pune",
        "districtName": "Pune Commercial Belt",
        "stateName": "Maharashtra",
        "countryName": "India",
        "latitude": 18.5204,
        "longitude": 73.8567,
        "verified": true,
        "stockistCount": 940,
        "opportunityCount": 31,
        "categories": [
          "Auto Spares",
          "Agro-Commodities",
          "Gourmet Beverages",
          "Derma Care"
        ],
        "availability": "high",
        "primaryMandi": "Market Yard Gultekdi Pune",
        "avgMargin": "22% - 30%",
        "famousFor": "Automotive Manufacturing (Tata, Bajaj), IT Software, Precision Engineering & Education",
        "famousBusinessType": "Automotive Ancillaries, Engineering & IT Products",
        "keySpecialities": [
          "Auto Spare Parts",
          "Forging & Castings",
          "Bakery & Confectionery",
          "Organic Agro Produce"
        ],
        "hubDescription": "Pune is a manufacturing and consumption powerhouse with strong auto-ancillary and modern trade distribution."
      },
      {
        "id": "mh-nagpur",
        "districtName": "Nagpur Multi-Modal Transit",
        "stateName": "Maharashtra",
        "countryName": "India",
        "latitude": 21.1458,
        "longitude": 79.0882,
        "verified": true,
        "stockistCount": 620,
        "opportunityCount": 22,
        "categories": [
          "Central Transit",
          "Packaged Snacks",
          "FMCG Groceries",
          "Steel"
        ],
        "availability": "available",
        "primaryMandi": "Kalamna APMC Market Nagpur",
        "avgMargin": "20% - 28%",
        "famousFor": "Nagpur Oranges (Santra), Zero Mile Central India Logistics & MIHAN Multi-Modal Cargo Hub",
        "famousBusinessType": "Central Transit Logistics, Citrus Processing & Agro Mandis",
        "keySpecialities": [
          "Citrus Fruits & Pulp",
          "Soybean Oil",
          "Central India Freight Transit",
          "Handloom Tussar Silk"
        ],
        "hubDescription": "Nagpur sits at India’s geographical center, making it the strategic redistribution hub for north-south and east-west trade."
      },
      {
        "id": "mh-nashik",
        "districtName": "Nashik Agro-Processing Hub",
        "stateName": "Maharashtra",
        "countryName": "India",
        "latitude": 19.9975,
        "longitude": 73.7898,
        "verified": true,
        "stockistCount": 480,
        "opportunityCount": 18,
        "categories": [
          "Agro-Nutrients",
          "Food Processing",
          "Spices & Sauces",
          "Wine"
        ],
        "availability": "available",
        "primaryMandi": "Nashik APMC & Lasalgaon Onion Yard",
        "avgMargin": "22% - 28%",
        "famousFor": "Wine Capital of India, Table Grapes, Lasalgaon Onion Market & Automobile Assembly (Mahindra)",
        "famousBusinessType": "Wine & Horticulture Processing, Auto Assembly & Onions",
        "keySpecialities": [
          "Wine & Table Grapes",
          "Onion Wholesale Mandi",
          "Auto Electricals",
          "Agro-Fertilizers"
        ],
        "hubDescription": "Nashik handles the highest volume of grapes, onions, and horticulture produce in western India."
      },
      {
        "id": "mh-aurangabad",
        "districtName": "Chhatrapati Sambhajinagar (Aurangabad)",
        "stateName": "Maharashtra",
        "countryName": "India",
        "latitude": 19.8762,
        "longitude": 75.3433,
        "verified": true,
        "stockistCount": 410,
        "opportunityCount": 16,
        "categories": [
          "Automotive Ancillaries",
          "Pharma",
          "Textiles",
          "Beverages"
        ],
        "availability": "available",
        "primaryMandi": "Jadhavwadi APMC Aurangabad",
        "avgMargin": "22% - 29%",
        "famousFor": "Automotive Ancillaries (Bajaj, Skoda), Pharmaceuticals, Paithani Silk Sarees & Tourism",
        "famousBusinessType": "Auto Components, Pharmaceuticals & Traditional Handloom",
        "keySpecialities": [
          "Auto Two-Wheeler Parts",
          "Bulk Drugs",
          "Paithani Sarees",
          "Brewery & Beverages"
        ],
        "hubDescription": "Chhatrapati Sambhajinagar is Marathwada’s premier industrial hub with large-scale pharma and engineering parks."
      },
      {
        "id": "mh-kolhapur",
        "districtName": "Kolhapur Foundry & Sugar Hub",
        "stateName": "Maharashtra",
        "countryName": "India",
        "latitude": 16.705,
        "longitude": 74.2433,
        "verified": true,
        "stockistCount": 390,
        "opportunityCount": 15,
        "categories": [
          "Footwear",
          "Jaggery & Sugar",
          "Castings",
          "Agro-Machinery"
        ],
        "availability": "available",
        "primaryMandi": "Kolhapur Market Yard (Shahupuri)",
        "avgMargin": "23% - 31%",
        "famousFor": "Kolhapuri Leather Chappals (GI Tag), Natural Jaggery (Gur), Sugar Mills & Heavy Iron Foundries",
        "famousBusinessType": "Leather Footwear, Sugar & Heavy Iron Castings",
        "keySpecialities": [
          "Kolhapuri Chappals",
          "Organic Jaggery Blocks",
          "Automotive Foundries",
          "Silver Ornaments (Hupari)"
        ],
        "hubDescription": "Kolhapur is famed worldwide for traditional handcrafted leather chappals and holds India’s second-largest jaggery market."
      },
      {
        "id": "mh-solapur",
        "districtName": "Solapur Textile & Chaddar Belt",
        "stateName": "Maharashtra",
        "countryName": "India",
        "latitude": 17.6599,
        "longitude": 75.9064,
        "verified": true,
        "stockistCount": 340,
        "opportunityCount": 14,
        "categories": [
          "Home Furnishings",
          "Towels",
          "Beedi",
          "Pulses"
        ],
        "availability": "available",
        "primaryMandi": "Siddheshwar APMC Yard Solapur",
        "avgMargin": "22% - 30%",
        "famousFor": "Solapuri Chaddars (Bedsheets), Terry Cotton Towels & Beedi Rolling Industry",
        "famousBusinessType": "Terry Towels, Jacquard Chaddars & Cotton Weaving",
        "keySpecialities": [
          "Solapuri Chaddar (GI Tag)",
          "Terry Cotton Towels",
          "Pomegranate (Anar) Trade",
          "Beedi Manufacturing"
        ],
        "hubDescription": "Solapur is a major textile cluster renowned across India and exported globally for jacquard chaddars and plush terry towels."
      },
      {
        "id": "mh-jalgaon",
        "districtName": "Jalgaon Banana & Gold City",
        "stateName": "Maharashtra",
        "countryName": "India",
        "latitude": 21.0077,
        "longitude": 75.5626,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 12,
        "categories": [
          "Bananas",
          "Gold Jewellery",
          "Micro-Irrigation",
          "Pulses"
        ],
        "availability": "available",
        "primaryMandi": "Jalgaon Krishi Utpanna Bajar Samiti",
        "avgMargin": "20% - 28%",
        "famousFor": "Banana City of India, Pure Gold Jewellery Markets & Micro-Irrigation Drip Systems (Jain Irrigation)",
        "famousBusinessType": "Banana Export, Drip Irrigation Pipes & Gold Bullion",
        "keySpecialities": [
          "Grand Naine Bananas",
          "Drip & Sprinkler Systems",
          "Hallmarked Gold Ornaments",
          "Dal Milling"
        ],
        "hubDescription": "Jalgaon produces nearly two-thirds of Maharashtra’s bananas and is celebrated for its bustling gold market."
      },
      {
        "id": "mh-amravati",
        "districtName": "Amravati Cotton & Agro Hub",
        "stateName": "Maharashtra",
        "countryName": "India",
        "latitude": 20.9374,
        "longitude": 77.7796,
        "verified": true,
        "stockistCount": 260,
        "opportunityCount": 11,
        "categories": [
          "Cotton Ginning",
          "Soybean",
          "Spices",
          "Textiles"
        ],
        "availability": "available",
        "primaryMandi": "Amravati APMC Cotton Yard",
        "avgMargin": "21% - 28%",
        "famousFor": "Raw Cotton Ginning, Soybean Processing & Vidarbha Textile Park",
        "famousBusinessType": "Cotton Ginning, Oil Extraction & Food Processing",
        "keySpecialities": [
          "Cotton Bales",
          "Soybean De-Oiled Cake",
          "Mandarin Oranges",
          "Tur Dal Wholesale"
        ],
        "hubDescription": "Amravati is the primary cotton and pulse trading hub connecting eastern Vidarbha to national textile mills."
      },
      {
        "id": "mh-sangli",
        "districtName": "Sangli Turmeric & Grape Capital",
        "stateName": "Maharashtra",
        "countryName": "India",
        "latitude": 16.8524,
        "longitude": 74.5815,
        "verified": true,
        "stockistCount": 290,
        "opportunityCount": 12,
        "categories": [
          "Turmeric",
          "Raisins & Grapes",
          "Sugar",
          "Dairy"
        ],
        "availability": "available",
        "primaryMandi": "Sangli Turmeric Market Yard",
        "avgMargin": "22% - 30%",
        "famousFor": "Turmeric City of Maharashtra (Haldi Mandi) & Premium Green Raisins (Bedana)",
        "famousBusinessType": "Turmeric Commodity Trading, Raisin Curing & Sugar",
        "keySpecialities": [
          "Sangli Turmeric Fingers & Powder",
          "Thompson Seedless Raisins",
          "Cooperative Sugar Mills",
          "Milk Dairy Processing"
        ],
        "hubDescription": "Sangli houses India’s largest inland turmeric trading market and accounts for the majority of the nation’s raisins."
      },
      {
        "id": "mh-satara",
        "districtName": "Satara Kandhi Pedha & Engineering",
        "stateName": "Maharashtra",
        "countryName": "India",
        "latitude": 17.6805,
        "longitude": 73.9997,
        "verified": true,
        "stockistCount": 220,
        "opportunityCount": 9,
        "categories": [
          "Sweets & Dairy",
          "Forging",
          "Food Processing",
          "Strawberry"
        ],
        "availability": "available",
        "primaryMandi": "Satara APMC & Mahabaleshwar Strawberry Yard",
        "avgMargin": "22% - 29%",
        "famousFor": "Satara Kandhi Pedha (GI Tag), Mahabaleshwar Strawberries & Automobile Forging",
        "famousBusinessType": "Dairy Confectionery, Strawberry Processing & Metal Forgings",
        "keySpecialities": [
          "Kandhi Pedha",
          "Fresh Strawberries & Jams",
          "Cooper Engineering Engines",
          "Turmeric"
        ],
        "hubDescription": "Satara is noted for its world-famous traditional dairy confectionery and strawberry plantations."
      },
      {
        "id": "mh-ahmednagar",
        "districtName": "Ahmednagar Sugar & Cooperative Belt",
        "stateName": "Maharashtra",
        "countryName": "India",
        "latitude": 19.0948,
        "longitude": 74.748,
        "verified": true,
        "stockistCount": 250,
        "opportunityCount": 10,
        "categories": [
          "Sugar",
          "Milk & Dairy",
          "Automotive Castings",
          "Onions"
        ],
        "availability": "available",
        "primaryMandi": "Nepti APMC Ahmednagar",
        "avgMargin": "20% - 27%",
        "famousFor": "Pioneer of India’s Cooperative Sugar Movement, Dairy Milk Processing & Armoured Vehicle Hub",
        "famousBusinessType": "Sugar Mills, Dairy Chilling & Automotive Machining",
        "keySpecialities": [
          "Refined White Sugar",
          "Cow Milk Dairy Products",
          "Heavy Automobile Machining",
          "Garlic & Onion Mandi"
        ],
        "hubDescription": "Ahmednagar has the highest density of cooperative sugar factories and dairy chilling plants in Maharashtra."
      },
      {
        "id": "mh-nanded",
        "districtName": "Nanded Agro & Cotton Gateway",
        "stateName": "Maharashtra",
        "countryName": "India",
        "latitude": 19.1383,
        "longitude": 77.321,
        "verified": true,
        "stockistCount": 200,
        "opportunityCount": 8,
        "categories": [
          "Cotton",
          "Bananas",
          "Soybean",
          "Pilgrim Supplies"
        ],
        "availability": "available",
        "primaryMandi": "Nanded APMC Market",
        "avgMargin": "20% - 27%",
        "famousFor": "Hazur Sahib Gurudwara Tourism, Cotton Ginning & Marathwada Trade Gateway",
        "famousBusinessType": "Religious Hospitality, Cotton Ginning & Agro Trading",
        "keySpecialities": [
          "Cotton Bales",
          "Soybean Seeds",
          "Agro Fertilizer Distribution",
          "Pilgrimage Retail Goods"
        ],
        "hubDescription": "Nanded bridges Marathwada and Telangana trade, driving high volumes of agro commodities and visitor trade."
      }
    ]
  },
  {
    "id": "delhi-ncr",
    "name": "Delhi NCR",
    "countryName": "India",
    "latitude": 28.6139,
    "longitude": 77.209,
    "verifiedStockCount": 3950,
    "districtCount": 8,
    "totalDistributors": "18,500 Channel Wholesale Partners",
    "verifiedStockists": "3,950 Audited Stockists",
    "readinessScore": "99/100 (National Prime Capital)",
    "commercialStatus": "National Capital Territory, High-Density Retail & Inter-State Trade Exchange",
    "tradeCorridor": "Delhi-Mumbai Industrial Corridor & Grand Trunk Corridor",
    "keySectors": [
      "FMCG",
      "Electronics",
      "Garments",
      "Pharma",
      "Auto Components",
      "Packaging"
    ],
    "districts": [
      {
        "id": "dl-central-old",
        "districtName": "Central & Old Delhi (Chandni Chowk / Sadar Bazar)",
        "stateName": "Delhi NCR",
        "countryName": "India",
        "latitude": 28.6506,
        "longitude": 77.2303,
        "verified": true,
        "stockistCount": 1680,
        "opportunityCount": 52,
        "categories": [
          "Spices",
          "Dry Fruits",
          "FMCG Toys & Gifts",
          "Hardware & Cosmetics"
        ],
        "availability": "high",
        "primaryMandi": "Khari Baoli (Asia’s Largest Spice Market) & Sadar Bazar",
        "avgMargin": "20% - 30%",
        "famousFor": "Khari Baoli (Asia’s Largest Spice Market), Sadar Bazar Wholesale Mart & Chandni Chowk Apparel",
        "famousBusinessType": "Wholesale Spices, Dry Fruits, Cosmetics & Consumer Goods",
        "keySpecialities": [
          "Pure Spices & Herbs",
          "Imported Dry Fruits",
          "Sadar Bazar Toys & Sundries",
          "Bridal Lehengas & Zari"
        ],
        "hubDescription": "Old Delhi houses the largest wholesale bazaars in Asia, dictating prices for spices, dry fruits, and FMCG sundries across North India."
      },
      {
        "id": "dl-south-okhla",
        "districtName": "South Delhi & Okhla Industrial Area",
        "stateName": "Delhi NCR",
        "countryName": "India",
        "latitude": 28.5293,
        "longitude": 77.2796,
        "verified": true,
        "stockistCount": 650,
        "opportunityCount": 28,
        "categories": [
          "Garment Exports",
          "Packaging",
          "Medical Devices",
          "IT Hardware"
        ],
        "availability": "high",
        "primaryMandi": "Okhla Phase I, II & III Industrial Complex",
        "avgMargin": "22% - 32%",
        "famousFor": "Garment Export Houses, Commercial Printing, Corrugated Packaging & Luxury Retail Distribution",
        "famousBusinessType": "Ready-Made Garment Manufacturing & Commercial Printing",
        "keySpecialities": [
          "Export Apparel",
          "Offset & Digital Packaging",
          "Pharma Formulations",
          "Luxury Consumer Goods"
        ],
        "hubDescription": "Okhla is the premier industrial manufacturing and packaging zone inside Delhi proper."
      },
      {
        "id": "dl-west-mayapuri",
        "districtName": "West Delhi & Mayapuri Industrial Area",
        "stateName": "Delhi NCR",
        "countryName": "India",
        "latitude": 28.6367,
        "longitude": 77.1352,
        "verified": true,
        "stockistCount": 480,
        "opportunityCount": 22,
        "categories": [
          "Auto Spares",
          "Metal Fabrication",
          "Plastics",
          "Machinery"
        ],
        "availability": "high",
        "primaryMandi": "Mayapuri Industrial & Kirti Nagar Timber Market",
        "avgMargin": "24% - 32%",
        "famousFor": "Asia’s Largest Automotive Scrap & Spares Market & Kirti Nagar (Asia’s Largest Furniture Market)",
        "famousBusinessType": "Automotive Spares & Wooden Furniture Manufacturing",
        "keySpecialities": [
          "Automotive Replacement Parts",
          "Solid Wood Furniture & Modular Kitchens",
          "Metal Scrap Sorting",
          "Industrial Heavy Machinery"
        ],
        "hubDescription": "West Delhi anchors India’s premier furniture manufacturing cluster at Kirti Nagar and massive automotive distribution at Mayapuri."
      },
      {
        "id": "dl-north-narela",
        "districtName": "North Delhi & Narela / Bawana Hub",
        "stateName": "Delhi NCR",
        "countryName": "India",
        "latitude": 28.8529,
        "longitude": 77.0935,
        "verified": true,
        "stockistCount": 520,
        "opportunityCount": 24,
        "categories": [
          "Food Grains",
          "Plastic Goods",
          "Footwear",
          "Utensils"
        ],
        "availability": "high",
        "primaryMandi": "Narela Food Grain Mandi & Bawana Industrial Area",
        "avgMargin": "20% - 28%",
        "famousFor": "Narela Anaj Mandi (One of Asia’s Largest Grain Markets) & Bawana Plastics & Footwear Manufacturing",
        "famousBusinessType": "Grain Wholesale Logistics, Plastic Moulding & EVA Footwear",
        "keySpecialities": [
          "Basmati Rice Wholesale",
          "Plastic Housewares & Buckets",
          "EVA Slippers & Footwear",
          "Stainless Steel Utensils"
        ],
        "hubDescription": "Narela and Bawana host thousands of small and medium enterprises manufacturing everyday household goods and trading North Indian grain."
      },
      {
        "id": "dl-east-patparganj",
        "districtName": "East Delhi & Patparganj Industrial Estate",
        "stateName": "Delhi NCR",
        "countryName": "India",
        "latitude": 28.6277,
        "longitude": 77.3072,
        "verified": true,
        "stockistCount": 380,
        "opportunityCount": 19,
        "categories": [
          "Publishing",
          "Pharma Formulations",
          "Electronics",
          "Stationery"
        ],
        "availability": "available",
        "primaryMandi": "Patparganj Functional Industrial Estate & Ghazipur APMC",
        "avgMargin": "22% - 29%",
        "famousFor": "Book Publishing, Printing Presses, Ghazipur Wholesale Flower Mandi & Poultry Mart",
        "famousBusinessType": "Educational Publishing, Commercial Printing & Fresh Flowers",
        "keySpecialities": [
          "School & College Textbooks",
          "Commercial Offset Printing",
          "Fresh Cut Flowers Mandi",
          "Livestock & Poultry Wholesale"
        ],
        "hubDescription": "Patparganj is the printing and publishing capital of Delhi, backed by the enormous Ghazipur perishable terminal."
      },
      {
        "id": "dl-rohini",
        "districtName": "Rohini & Outer Delhi Logistics Belt",
        "stateName": "Delhi NCR",
        "countryName": "India",
        "latitude": 28.7159,
        "longitude": 77.1172,
        "verified": true,
        "stockistCount": 320,
        "opportunityCount": 15,
        "categories": [
          "FMCG Distribution",
          "Consumer Durables",
          "Packaging",
          "Cold Storage"
        ],
        "availability": "available",
        "primaryMandi": "Badli Industrial Area & Azadpur Sub-Yard",
        "avgMargin": "20% - 27%",
        "famousFor": "High-Density Residential FMCG Distribution & Proximity to Azadpur (Asia’s Largest Fruit & Veg Market)",
        "famousBusinessType": "Fresh Produce Trading, Cold Storage & Retail FMCG Distribution",
        "keySpecialities": [
          "Fresh Fruits & Apples",
          "Cold Chain Warehousing",
          "Packaged Snacks Distribution",
          "Electrical Switches"
        ],
        "hubDescription": "Outer Delhi feeds retail stores across the capital and manages colossal cold-chain consignments from Azadpur."
      },
      {
        "id": "dl-gurugram-ncr",
        "districtName": "Gurugram NCR Corporate & Auto Corridor",
        "stateName": "Delhi NCR",
        "countryName": "India",
        "latitude": 28.4595,
        "longitude": 77.0266,
        "verified": true,
        "stockistCount": 510,
        "opportunityCount": 32,
        "categories": [
          "Automobile",
          "IT Hardware",
          "Beverages",
          "Premium FMCG"
        ],
        "availability": "high",
        "primaryMandi": "Udyog Vihar & Manesar Industrial Corridor",
        "avgMargin": "22% - 32%",
        "famousFor": "Maruti Suzuki Auto Manufacturing, Fortune 500 Corporate HQs & Premium Consumer Goods",
        "famousBusinessType": "Automobile Assembly, Corporate Retail Strategy & IT Hardware",
        "keySpecialities": [
          "Maruti & Hero Auto Components",
          "MNC Beverage Brands",
          "High-End Consumer Electronics",
          "Corporate Supplies"
        ],
        "hubDescription": "Gurugram is the millennium city corporate nerve center where nationwide distribution deals and contracts are signed."
      },
      {
        "id": "dl-noida-ncr",
        "districtName": "Noida & Greater Noida NCR Electronics Hub",
        "stateName": "Delhi NCR",
        "countryName": "India",
        "latitude": 28.5355,
        "longitude": 77.391,
        "verified": true,
        "stockistCount": 460,
        "opportunityCount": 26,
        "categories": [
          "Mobile Assembly",
          "Consumer Electronics",
          "Software",
          "Packaging"
        ],
        "availability": "high",
        "primaryMandi": "Noida Phase II Industrial Area & Greater Noida Ecotech",
        "avgMargin": "22% - 30%",
        "famousFor": "Smartphone Assembly Capital (Samsung, Dixon), Consumer Electronics & IT Parks",
        "famousBusinessType": "Electronics Hardware Manufacturing (ESDM) & Mobile Assembly",
        "keySpecialities": [
          "Smartphones & Tablets",
          "LED TVs & Home Appliances",
          "Corrugated Boxes & Foam",
          "Software Tech Distribution"
        ],
        "hubDescription": "Noida and Greater Noida manufacture more than 60% of all mobile smartphones and televisions sold in India."
      }
    ]
  },
  {
    "id": "gujarat",
    "name": "Gujarat",
    "countryName": "India",
    "latitude": 22.2587,
    "longitude": 71.1924,
    "verifiedStockCount": 4210,
    "districtCount": 13,
    "totalDistributors": "13,800 Active Stockists",
    "verifiedStockists": "4,210 Audited Wholesalers",
    "readinessScore": "97/100 (Maritime Industrial Leader)",
    "commercialStatus": "Maritime Coastline, Chemical Belt, World Ceramics & Diamond Processing Capital",
    "tradeCorridor": "Mundra & Kandla Ports to Ahmedabad-Vadodara Industrial Expressway",
    "keySectors": [
      "Ceramics",
      "Diamonds & Textiles",
      "Chemicals & Dyes",
      "Pharmaceuticals",
      "Agro-Castor"
    ],
    "districts": [
      {
        "id": "gj-morbi",
        "districtName": "Morbi Ceramic & Wall Tiles Hub",
        "stateName": "Gujarat",
        "countryName": "India",
        "latitude": 22.812,
        "longitude": 70.8377,
        "verified": true,
        "stockistCount": 980,
        "opportunityCount": 42,
        "categories": [
          "Ceramic Tiles",
          "Sanitaryware",
          "Vitrified Slabs",
          "Wall Cladding"
        ],
        "availability": "high",
        "primaryMandi": "Morbi Ceramic Industrial Zone (NH-8A Corridor)",
        "avgMargin": "25% - 38%",
        "famousFor": "World’s 2nd Largest Ceramic Cluster (Produces over 90% of India’s Ceramic Tiles, Sanitaryware & Clocks)",
        "famousBusinessType": "Ceramic Floor Tiles, Vitrified Slabs & Sanitaryware",
        "keySpecialities": [
          "Glazed Vitrified Tiles (GVT/PGVT)",
          "Ceramic Wall Tiles",
          "Sanitaryware Toilets & Basins",
          "Quartz & Wall Clocks (Ajanta/Orpat)"
        ],
        "hubDescription": "Morbi is India’s ceramic tile superpower, home to over 1,000 automated tile plants exporting to 160+ countries globally."
      },
      {
        "id": "gj-surat",
        "districtName": "Surat Diamond & Textile Capital",
        "stateName": "Gujarat",
        "countryName": "India",
        "latitude": 21.1702,
        "longitude": 72.8311,
        "verified": true,
        "stockistCount": 1250,
        "opportunityCount": 46,
        "categories": [
          "Diamonds",
          "Synthetic Textiles",
          "Zari & Sarees",
          "Chemicals"
        ],
        "availability": "high",
        "primaryMandi": "Surat Diamond Bourse (SDB) & Ring Road Textile Market",
        "avgMargin": "22% - 32%",
        "famousFor": "Cuts & Polishes 90% of the World’s Rough Diamonds & Man-Made Fabric / Saree Capital of India",
        "famousBusinessType": "Diamond Polishing, Synthetic Silk & Man-Made Fabric Weaving",
        "keySpecialities": [
          "Polished Natural & Lab Diamonds",
          "Synthetic Crepe & Georgette Sarees",
          "Zari Metallic Embroidery Threads",
          "Textile Machinery & Weaving Looms"
        ],
        "hubDescription": "Surat is the global epicenter for diamond polishing (hosting the Surat Diamond Bourse) and India’s greatest synthetic fabric trading city."
      },
      {
        "id": "gj-ahmedabad",
        "districtName": "Ahmedabad Industrial & Textile Gateway",
        "stateName": "Gujarat",
        "countryName": "India",
        "latitude": 23.0225,
        "longitude": 72.5714,
        "verified": true,
        "stockistCount": 1100,
        "opportunityCount": 38,
        "categories": [
          "Denim & Cotton",
          "Chemicals & Dyes",
          "Pharmaceuticals",
          "Foundry"
        ],
        "availability": "high",
        "primaryMandi": "Kalupur Wholesale Market & Naroda / Vatva GIDC",
        "avgMargin": "22% - 30%",
        "famousFor": "Manchester of the East, India’s Largest Denim Producer (Arvind) & Major Chemical / Pharma Hub",
        "famousBusinessType": "Denim Fabrics, Specialty Chemicals, Dyes & Pharma Formulations",
        "keySpecialities": [
          "Premium Denim Fabric",
          "Reactive Dyes & Pigments",
          "Generic Pharma Tablets",
          "Cotton Yarn Spinning"
        ],
        "hubDescription": "Ahmedabad is Gujarat’s commercial metropolis, leading the nation in denim fabric manufacturing and chemical exports."
      },
      {
        "id": "gj-rajkot",
        "districtName": "Rajkot Engineering & Submersible Pumps",
        "stateName": "Gujarat",
        "countryName": "India",
        "latitude": 22.3039,
        "longitude": 70.8022,
        "verified": true,
        "stockistCount": 650,
        "opportunityCount": 26,
        "categories": [
          "Water Pumps",
          "Diesel Engines",
          "CNC Lathes",
          "Silver Ornaments"
        ],
        "availability": "high",
        "primaryMandi": "Aji GIDC & Dhebar Road Hardware Market",
        "avgMargin": "24% - 34%",
        "famousFor": "Submersible Agricultural Water Pumps, Diesel Engines, CNC Lathe Machines & Silver Jewellery (Patla)",
        "famousBusinessType": "Submersible Water Pumps, Foundry Castings & Silver Ornaments",
        "keySpecialities": [
          "Submersible Borewell Pumps",
          "Single-Cylinder Diesel Engines",
          "CNC Metal Working Machines",
          "Handcrafted Silver Ornaments"
        ],
        "hubDescription": "Rajkot manufactures over 60% of India’s agricultural submersible water pumps and diesel engines, with world-class foundries."
      },
      {
        "id": "gj-vadodara",
        "districtName": "Vadodara Chemical & Power Equipment Hub",
        "stateName": "Gujarat",
        "countryName": "India",
        "latitude": 22.3072,
        "longitude": 73.1812,
        "verified": true,
        "stockistCount": 520,
        "opportunityCount": 22,
        "categories": [
          "Electrical Switchgear",
          "Glass",
          "Biopharma",
          "Petrochemicals"
        ],
        "availability": "available",
        "primaryMandi": "Makarpura GIDC & Nandesari Chemical Belt",
        "avgMargin": "22% - 30%",
        "famousFor": "Heavy Electrical Equipment (Transformers, Switchgears), Petrochemicals & Architectural Glass",
        "famousBusinessType": "Heavy Electrical Equipment & Petrochemical Intermediates",
        "keySpecialities": [
          "Power Transformers (ABB, Siemens)",
          "Architectural Container Glass",
          "Active Pharma Ingredients (API)",
          "Engineering Valves"
        ],
        "hubDescription": "Vadodara is India’s electrical equipment capital and gateway to South Gujarat’s vast petrochemical infrastructure."
      },
      {
        "id": "gj-jamnagar",
        "districtName": "Jamnagar Brass & Oil Refining Mega-Hub",
        "stateName": "Gujarat",
        "countryName": "India",
        "latitude": 22.4707,
        "longitude": 70.0577,
        "verified": true,
        "stockistCount": 430,
        "opportunityCount": 18,
        "categories": [
          "Brass Components",
          "Bandhani",
          "Petroleum",
          "Ayurveda"
        ],
        "availability": "available",
        "primaryMandi": "Jamnagar Brass GIDC (Dared) & Chandi Bazar",
        "avgMargin": "24% - 35%",
        "famousFor": "Brass City of India (Produces 70% of India’s Brass Components) & World’s Largest Oil Refinery (Reliance)",
        "famousBusinessType": "Precision Brass Hardware, Turned Components & Bandhani Sarees",
        "keySpecialities": [
          "Brass Electrical Pins & Terminals",
          "Brass Sanitary Screws & Knurled Inserts",
          "Tie-and-Dye Bandhani Silk",
          "Ayurvedic Herbal Medicines"
        ],
        "hubDescription": "Jamnagar is renowned worldwide as Brass City for precision-turned brass fittings, alongside the colossal Reliance refinery."
      },
      {
        "id": "gj-bhavnagar",
        "districtName": "Bhavnagar Ship Recycling & Diamond Hub",
        "stateName": "Gujarat",
        "countryName": "India",
        "latitude": 21.7645,
        "longitude": 72.1519,
        "verified": true,
        "stockistCount": 380,
        "opportunityCount": 15,
        "categories": [
          "Ship Breaking Re-roll",
          "Diamonds",
          "Dehydrated Onions",
          "Ganthiya"
        ],
        "availability": "available",
        "primaryMandi": "Alang Ship Recycling Yard & Mahuva Dehydration APMC",
        "avgMargin": "22% - 30%",
        "famousFor": "Alang (World’s Largest Ship Breaking Yard), Re-rolled Steel, Dehydrated Onion/Garlic & Bhavnagari Ganthiya",
        "famousBusinessType": "Ship Breaking Re-rolled Steel, Dehydrated Vegetables & Small Diamonds",
        "keySpecialities": [
          "Ship Re-rolled Steel Plates & Billets",
          "Dehydrated White Onion Flakes",
          "Small Diamond Cutting",
          "Bhavnagari Ganthiya Snacks"
        ],
        "hubDescription": "Bhavnagar controls the global ship-recycling supply of heavy marine steel and India’s top onion dehydration factories in Mahuva."
      },
      {
        "id": "gj-kutch",
        "districtName": "Gandhidham & Kutch Port Corridor",
        "stateName": "Gujarat",
        "countryName": "India",
        "latitude": 23.0753,
        "longitude": 70.1337,
        "verified": true,
        "stockistCount": 390,
        "opportunityCount": 17,
        "categories": [
          "Port Cargo",
          "Edible Oils",
          "Timber",
          "Salt & Bentonite"
        ],
        "availability": "available",
        "primaryMandi": "Deendayal Port (Kandla) & Mundra Mega SEZ",
        "avgMargin": "20% - 28%",
        "famousFor": "Mundra & Kandla Mega Ports, Timber Import Mills, Edible Oil Refining & Kutch Hand Embroideries",
        "famousBusinessType": "Port Logistics, Edible Oil Refining & Saw Mill Timber",
        "keySpecialities": [
          "Imported Teak Timber Sawn Wood",
          "Refined Palm & Soya Oil",
          "Industrial Sea Salt & Bentonite",
          "Kutchi Rogan & Mirror Embroidery"
        ],
        "hubDescription": "Gandhidham and Mundra handle the largest volume of sea-freight containers, bulk timber, and edible oils in the Indian subcontinent."
      },
      {
        "id": "gj-ankleshwar",
        "districtName": "Bharuch & Ankleshwar Chemical Belt",
        "stateName": "Gujarat",
        "countryName": "India",
        "latitude": 21.6264,
        "longitude": 73.0152,
        "verified": true,
        "stockistCount": 340,
        "opportunityCount": 16,
        "categories": [
          "Agrochemicals",
          "Pesticides",
          "Bulk Drugs",
          "Fertilizers"
        ],
        "availability": "available",
        "primaryMandi": "Ankleshwar GIDC & Panoli Industrial Zone",
        "avgMargin": "22% - 30%",
        "famousFor": "Chemical City of Gujarat (Asia’s Largest Chemical Industrial Estate) & Agro-Pesticides",
        "famousBusinessType": "Specialty Agrochemicals, Insecticides & Pharmaceutical Intermediates",
        "keySpecialities": [
          "Technical Grade Agrochemicals",
          "Crop Protection Insecticides",
          "Dyes Intermediates",
          "Fertilizer Compounds"
        ],
        "hubDescription": "Ankleshwar is the beating heart of India’s chemical processing, manufacturing active crop protection formulations."
      },
      {
        "id": "gj-vapi",
        "districtName": "Vapi & Valsad Chemical & Paper Hub",
        "stateName": "Gujarat",
        "countryName": "India",
        "latitude": 20.3893,
        "longitude": 72.9106,
        "verified": true,
        "stockistCount": 330,
        "opportunityCount": 14,
        "categories": [
          "Kraft Paper",
          "Packaging",
          "Chemicals",
          "Mangoes"
        ],
        "availability": "available",
        "primaryMandi": "Vapi GIDC Industrial Area & Valsad APMC (Alphonso)",
        "avgMargin": "21% - 29%",
        "famousFor": "Industrial Paper Mills, Corrugated Packaging, Bulk Chemicals & Valsad Alphonso Mangoes",
        "famousBusinessType": "Paper Recycling & Corrugated Packaging Boxes",
        "keySpecialities": [
          "Duplex Board & Kraft Paper",
          "Corrugated Shipping Cartons",
          "Chemical Pigments",
          "Valsad Hapus Mango Pulp"
        ],
        "hubDescription": "Vapi is one of South Asia’s highest-volume packaging and kraft paper clusters, supplying packaging across Maharashtra and Gujarat."
      },
      {
        "id": "gj-anand",
        "districtName": "Anand Milk Capital of India",
        "stateName": "Gujarat",
        "countryName": "India",
        "latitude": 22.5645,
        "longitude": 72.9289,
        "verified": true,
        "stockistCount": 290,
        "opportunityCount": 12,
        "categories": [
          "Milk Products",
          "Tobacco",
          "Agro-Seeds",
          "Packaging"
        ],
        "availability": "available",
        "primaryMandi": "Amul Dairy Complex & Anand APMC Yard",
        "avgMargin": "20% - 28%",
        "famousFor": "Milk Capital of India (Birthplace of AMUL & White Revolution) & Bidi Tobacco Processing",
        "famousBusinessType": "Dairy Milk Processing, Butter, Ice Cream & Bidi Tobacco",
        "keySpecialities": [
          "Pasteurized Milk & Table Butter",
          "Milk Powder & Cheese",
          "Bidi Flake Tobacco",
          "Hybrid Vegetable Seeds"
        ],
        "hubDescription": "Anand is globally celebrated as the birthplace of India’s dairy cooperative revolution and the home of Amul."
      },
      {
        "id": "gj-mehsana",
        "districtName": "Mehsana Dairy & Oilseed Hub",
        "stateName": "Gujarat",
        "countryName": "India",
        "latitude": 23.588,
        "longitude": 72.3693,
        "verified": true,
        "stockistCount": 270,
        "opportunityCount": 11,
        "categories": [
          "Doodhsagar Milk",
          "Jeera & Saunf",
          "Castor Oil",
          "Solar"
        ],
        "availability": "available",
        "primaryMandi": "Unjha APMC (Asia’s Largest Cumin & Fennel Mandi)",
        "avgMargin": "20% - 28%",
        "famousFor": "Unjha Cumin (Jeera) & Fennel (Saunf) Market (Asia’s Largest Spice Seed Mandi) & Doodhsagar Dairy",
        "famousBusinessType": "Spice Seed Trading (Jeera, Saunf, Isabgol) & Dairy Products",
        "keySpecialities": [
          "Cumin Seeds (Jeera)",
          "Fennel Seeds (Saunf)",
          "Psyllium Husk (Isabgol)",
          "Castor Oil Derivatives"
        ],
        "hubDescription": "Mehsana district’s Unjha mandi determines global market prices for cumin, fennel, and isabgol husk."
      },
      {
        "id": "gj-junagadh",
        "districtName": "Junagadh Groundnut & Kesar Mango Hub",
        "stateName": "Gujarat",
        "countryName": "India",
        "latitude": 21.5222,
        "longitude": 70.4579,
        "verified": true,
        "stockistCount": 250,
        "opportunityCount": 10,
        "categories": [
          "Groundnut Oil",
          "Kesar Mango",
          "Sesame",
          "Agro-Minerals"
        ],
        "availability": "available",
        "primaryMandi": "Junagadh APMC & Talala Gir Mango Market",
        "avgMargin": "20% - 27%",
        "famousFor": "Gir Kesar Mangoes (GI Tag), Groundnut Oil Extraction & Saurashtra Agro Mandis",
        "famousBusinessType": "Groundnut Oil Milling & Kesar Mango Processing",
        "keySpecialities": [
          "Pure Filtered Groundnut Oil",
          "Gir Kesar Fresh Mangoes & Pulp",
          "Sesame Seeds (Til)",
          "Groundnut Oil Cake"
        ],
        "hubDescription": "Junagadh is the historic center for Saurashtra groundnut oil milling and the world-famous Gir Kesar mango crop."
      }
    ]
  },
  {
    "id": "uttar-pradesh",
    "name": "Uttar Pradesh",
    "countryName": "India",
    "latitude": 26.8467,
    "longitude": 80.9462,
    "verifiedStockCount": 5120,
    "districtCount": 18,
    "totalDistributors": "24,600 Registered Wholesalers & Dealers",
    "verifiedStockists": "5,120 Audited Stockists",
    "readinessScore": "97/100 (Highest Population Market)",
    "commercialStatus": "Vast Consumer Base, Leather, Carpets, Locks, Brassware & Agricultural Powerhouse",
    "tradeCorridor": "Eastern Dedicated Freight Corridor & Purvanchal / Yamuna Expressways",
    "keySectors": [
      "Leather & Footwear",
      "Brassware & Hardware",
      "Glass & Bangles",
      "Carpets",
      "Attar Perfumes",
      "Sugar"
    ],
    "districts": [
      {
        "id": "up-kanpur",
        "districtName": "Kanpur Leather & Industrial City",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 26.4499,
        "longitude": 80.3319,
        "verified": true,
        "stockistCount": 1280,
        "opportunityCount": 42,
        "categories": [
          "Leather Goods",
          "Footwear",
          "Spices & Detergents",
          "Pumps & Plastics"
        ],
        "availability": "high",
        "primaryMandi": "Jajmau Leather Zone & Collectorganj Wholesale Mandi",
        "avgMargin": "22% - 32%",
        "famousFor": "Leather City of the World (Industrial Footwear, Saddlery & Tannery), Spices (Goldiee) & Detergents (Ghadi)",
        "famousBusinessType": "Leather Footwear Manufacturing, Tannery & FMCG Detergents",
        "keySpecialities": [
          "Finished Leather Saddlery & Harness",
          "Industrial Safety Shoes",
          "Pan Masala & Spices",
          "Detergent Powder & Soaps"
        ],
        "hubDescription": "Kanpur is North India’s greatest industrial metropolis, exporting leather saddlery worldwide and producing household FMCG staples."
      },
      {
        "id": "up-agra",
        "districtName": "Agra Leather Footwear & Petha City",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 27.1767,
        "longitude": 78.0081,
        "verified": true,
        "stockistCount": 950,
        "opportunityCount": 38,
        "categories": [
          "Footwear",
          "Confectionery (Petha)",
          "Marble Inlay",
          "Auto Foundry"
        ],
        "availability": "high",
        "primaryMandi": "Hing Ki Mandi (Asia’s Largest Shoe Market) & Noori Darwaza Petha Mandi",
        "avgMargin": "25% - 38%",
        "famousFor": "Produces 65% of India’s Leather Shoes (Hing Ki Mandi), Famous Agra Petha Confectionery & Marble Inlay",
        "famousBusinessType": "Leather Footwear, Petha Sweet Manufacturing & Tourism Handicrafts",
        "keySpecialities": [
          "Formal & Casual Leather Shoes",
          "Agra Petha (Kesar, Angoori, Paan)",
          "Marble Pietra Dura Inlay Crafts",
          "Foundry Castings & Diesel Engines"
        ],
        "hubDescription": "Agra is India’s shoe capital; Hing Ki Mandi is Asia’s largest footwear bazaar, supplying shoes across the globe."
      },
      {
        "id": "up-varanasi",
        "districtName": "Varanasi Banarasi Silk & Tourism Capital",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 25.3176,
        "longitude": 82.9739,
        "verified": true,
        "stockistCount": 780,
        "opportunityCount": 34,
        "categories": [
          "Silk Sarees",
          "Brocades",
          "Diesel Locomotives",
          "Wooden Toys"
        ],
        "availability": "high",
        "primaryMandi": "Chowk Saree Mandi & Kashi Vishwanath Corridor Market",
        "avgMargin": "25% - 40%",
        "famousFor": "Banarasi Silk Sarees (GI Tag), Gold/Silver Zari Brocades, Handcrafted Wooden Toys & Diesel Locomotives (BLW)",
        "famousBusinessType": "Banarasi Silk Weaving, Handloom Brocades & Religious Tourism Retail",
        "keySpecialities": [
          "Pure Katan Silk Banarasi Sarees",
          "Gold Zari Brocades & Dupattas",
          "Lacquered Wooden Toys (GI Tag)",
          "Banarasi Paan & Zarda"
        ],
        "hubDescription": "Varanasi is world-renowned for its exquisite hand-woven Banarasi silk sarees and rich spiritual commerce."
      },
      {
        "id": "up-aligarh",
        "districtName": "Aligarh Lock & Hardware City (Tala Nagri)",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 27.8974,
        "longitude": 78.088,
        "verified": true,
        "stockistCount": 520,
        "opportunityCount": 24,
        "categories": [
          "Locks & Hardware",
          "Brass Fittings",
          "Zinc Die-Casting",
          "Electrical Enclosures"
        ],
        "availability": "high",
        "primaryMandi": "Tala Nagri Industrial Area & Railway Road Hardware Market",
        "avgMargin": "24% - 35%",
        "famousFor": "Tala Nagri (City of Locks - Produces over 75% of India’s Padlocks, Mortise Locks & Architectural Brass Hardware)",
        "famousBusinessType": "Padlocks, Security Hardware & Brass Architectural Fittings",
        "keySpecialities": [
          "Brass & Iron Padlocks",
          "Mortise Door Handles & Latches",
          "Zinc Pressure Die Castings",
          "Brass Artware & Sculptures"
        ],
        "hubDescription": "Aligarh’s century-old lock industry secures millions of Indian homes with premier mechanical and digital locks."
      },
      {
        "id": "up-moradabad",
        "districtName": "Moradabad Brassware & Metal City (Peetal Nagri)",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 28.8386,
        "longitude": 78.7733,
        "verified": true,
        "stockistCount": 680,
        "opportunityCount": 30,
        "categories": [
          "Brassware",
          "Metal Handicrafts",
          "EPNS Cutlery",
          "Home Decor"
        ],
        "availability": "high",
        "primaryMandi": "Peetal Basti & Moradabad SEZ Industrial Area",
        "avgMargin": "26% - 42%",
        "famousFor": "Peetal Nagri (Brass City of India - Exports Over ₹6,000 Crore of Handcrafted Brassware, Copper & Aluminum Decor)",
        "famousBusinessType": "Brass Handicrafts, Metal Home Decor & Electroplated Tableware",
        "keySpecialities": [
          "Etched Brass Vases & Lamps",
          "EPNS Silver-Plated Tableware",
          "Aluminium & Iron Modern Decor",
          "Traditional Metal Idols & Diyas"
        ],
        "hubDescription": "Moradabad is India’s brass handicraft capital, shipping metal decor to top retail chains across North America and Europe."
      },
      {
        "id": "up-firozabad",
        "districtName": "Firozabad Glass & Bangle City (Suhag Nagri)",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 27.1593,
        "longitude": 78.3957,
        "verified": true,
        "stockistCount": 480,
        "opportunityCount": 22,
        "categories": [
          "Glass Bangles",
          "Glassware",
          "Chandeliers",
          "Glass Containers"
        ],
        "availability": "high",
        "primaryMandi": "Gali Bohran Bangle Mandi & Industrial Glass Area",
        "avgMargin": "25% - 40%",
        "famousFor": "Glass City of India (Produces 80% of India’s Glass Bangles, Chandeliers, Glass Tableware & Laboratory Glass)",
        "famousBusinessType": "Glass Bangles, Decorative Chandeliers & Commercial Glassware",
        "keySpecialities": [
          "Coloured Glass Bangles (Choodiyan)",
          "Crystal Chandeliers & Lighting Glass",
          "Beverage Bottles & Jars",
          "Laboratory Glass Test Tubes"
        ],
        "hubDescription": "Firozabad is the colorful glassblowing capital of India, employing hundreds of thousands in glass craft."
      },
      {
        "id": "up-bhadohi",
        "districtName": "Bhadohi Carpet City of South Asia",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 25.4207,
        "longitude": 82.5683,
        "verified": true,
        "stockistCount": 420,
        "opportunityCount": 20,
        "categories": [
          "Hand-knotted Carpets",
          "Woollen Rugs",
          "Dhurries",
          "Yarn Dyeing"
        ],
        "availability": "high",
        "primaryMandi": "Bhadohi Carpet Expo Mart & Maryadpatti Mandi",
        "avgMargin": "28% - 45%",
        "famousFor": "Carpet City of India (Produces and Exports over 60% of South Asia’s Hand-Knotted Woollen Carpets & Rugs - GI Tag)",
        "famousBusinessType": "Hand-Knotted Woollen Carpets, Silk Rugs & Floor Coverings",
        "keySpecialities": [
          "Hand-Knotted Woollen Persian Carpets",
          "Tufted Contemporary Rugs",
          "Flatweave Cotton Dhurries",
          "Carpet Woollen Yarn Spinning"
        ],
        "hubDescription": "Bhadohi is Asia’s carpet capital, home to master weavers crafting heirloom floor rugs for international palaces and homes."
      },
      {
        "id": "up-kannauj",
        "districtName": "Kannauj Perfume Capital (Attar Nagri)",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 27.0547,
        "longitude": 79.9179,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 16,
        "categories": [
          "Natural Attar",
          "Essential Oils",
          "Rose Water",
          "Gulkand"
        ],
        "availability": "high",
        "primaryMandi": "Sarafa Bazar Attar Mandi & Kannauj Aroma Park",
        "avgMargin": "30% - 50%",
        "famousFor": "Perfume Capital of India (Hydro-Distilled Natural Attar, Mitti Attar (Petrichor), Ruh Gulab & Essential Oils - GI Tag)",
        "famousBusinessType": "Natural Attar Distillation, Essential Oils & Herbal Extracts",
        "keySpecialities": [
          "Mitti Attar (Scent of Baked Earth)",
          "Ruh Gulab (Pure Damask Rose Oil)",
          "Shamama & Majmua Blends",
          "Pure Gulkand & Sandalwood Oil"
        ],
        "hubDescription": "Kannauj distills ancient deg-bhapka natural perfumes, capturing the scent of fresh rain and pure rose for world luxury perfumers."
      },
      {
        "id": "up-meerut",
        "districtName": "Meerut Sports Goods & Scissors Hub",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 28.9845,
        "longitude": 77.7064,
        "verified": true,
        "stockistCount": 540,
        "opportunityCount": 25,
        "categories": [
          "Sports Goods",
          "Cricket Bats",
          "Scissors",
          "Musical Brass Instruments"
        ],
        "availability": "high",
        "primaryMandi": "Suraj Kund Sports Goods Market & Lisari Gate Scissor Market",
        "avgMargin": "24% - 35%",
        "famousFor": "Sports Capital of India (Kashmir Willow Cricket Bats - SG, SS), Handcrafted Brass Scissors (GI Tag) & Band Instruments",
        "famousBusinessType": "Cricket Equipment, Handcrafted Scissors & Brass Band Instruments",
        "keySpecialities": [
          "English & Kashmir Willow Cricket Bats",
          "Cricket Leather Balls & Protective Gear",
          "Hand-Forged Meerut Scissors (GI Tag)",
          "Brass Clarinet & Trumpet Instruments"
        ],
        "hubDescription": "Meerut equips world cricket champions with bats and pads, while crafting legendary cutting scissors used across India."
      },
      {
        "id": "up-bareilly",
        "districtName": "Bareilly Zari-Zardozi & Cane Furniture City",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 28.367,
        "longitude": 79.4304,
        "verified": true,
        "stockistCount": 460,
        "opportunityCount": 20,
        "categories": [
          "Zari Zardozi",
          "Cane Furniture",
          "Kite Manja",
          "Surma"
        ],
        "availability": "available",
        "primaryMandi": "Kutubkhana Wholesale Market & CB Ganj Industrial Zone",
        "avgMargin": "24% - 34%",
        "famousFor": "Zari-Zardozi Hand Embroidery (GI Tag), Bamboo & Cane Furniture, Bareilly Kite Flying String (Manja) & Surma",
        "famousBusinessType": "Zari-Zardozi Hand Embroidery, Cane Furniture & Rice Milling",
        "keySpecialities": [
          "Zardozi Gold-Thread Embroidery",
          "Hand-Bent Cane & Bamboo Chairs",
          "Traditional Herbal Eye Surma",
          "Fine Non-Basmati Rice Wholesale"
        ],
        "hubDescription": "Bareilly is the heart of royal zari-zardozi gold threadwork and handcrafted cane furniture design."
      },
      {
        "id": "up-lucknow",
        "districtName": "Lucknow Chikankari & Capital Hub",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 26.8467,
        "longitude": 80.9462,
        "verified": true,
        "stockistCount": 890,
        "opportunityCount": 36,
        "categories": [
          "Chikan Embroidery",
          "Awadhi Food",
          "Pharma",
          "IT Hardware"
        ],
        "availability": "high",
        "primaryMandi": "Aminabad & Chowk Wholesale Chikan Market",
        "avgMargin": "25% - 40%",
        "famousFor": "City of Nawabs, Lucknow Chikankari Shadow-Work Embroidery (GI Tag), Zari Work & Awadhi Culinary Brands",
        "famousBusinessType": "Chikankari Garments, Retail FMCG Hub & Biotechnology",
        "keySpecialities": [
          "Hand-Embroidered Chikan Kurtas",
          "Mukaish & Kamdani Stoles",
          "Awadhi Spices & Kebab Masala",
          "Generic Pharma Formulations"
        ],
        "hubDescription": "Lucknow combines heritage Chikan textile commerce with state administrative and pharmaceutical distribution."
      },
      {
        "id": "up-saharanpur",
        "districtName": "Saharanpur Wood Carving Capital",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 29.9679,
        "longitude": 77.551,
        "verified": true,
        "stockistCount": 390,
        "opportunityCount": 18,
        "categories": [
          "Carved Wood Furniture",
          "Paper & Pulp",
          "Basmati Rice",
          "Mangoes"
        ],
        "availability": "available",
        "primaryMandi": "Wood Carving Market (Ambala Road) & Saharanpur Anaj Mandi",
        "avgMargin": "26% - 42%",
        "famousFor": "Wooden Handicrafts Capital (Sheesham Hand-Carved Furniture - GI Tag), ITC Paper Mills & Chausa Mangoes",
        "famousBusinessType": "Hand-Carved Sheesham Wood Furniture & Agro Commodities",
        "keySpecialities": [
          "Carved Wooden Screens & Partitions",
          "Sheesham Dining & Bedroom Suites",
          "Specialty Writing Paper (ITC)",
          "Delectable Chausa Mangoes"
        ],
        "hubDescription": "Saharanpur’s master woodcarvers transform sheesham and teak timber into internationally exported carved furniture."
      },
      {
        "id": "up-gorakhpur",
        "districtName": "Gorakhpur Terracotta & Purvanchal Gateway",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 26.7606,
        "longitude": 83.3732,
        "verified": true,
        "stockistCount": 420,
        "opportunityCount": 19,
        "categories": [
          "Terracotta Craft",
          "Gita Press Books",
          "Sugar",
          "Agro-Seeds"
        ],
        "availability": "available",
        "primaryMandi": "GIDA Industrial Area & Golghar Wholesale Mart",
        "avgMargin": "22% - 30%",
        "famousFor": "Gorakhpur Terracotta Craft (GI Tag), Gita Press (World’s Largest Publisher of Hindu Religious Texts) & AIIMS Hub",
        "famousBusinessType": "Terracotta Pottery, Spiritual Publishing & East UP Distribution",
        "keySpecialities": [
          "Hand-Modelled Terracotta Elephants (GI)",
          "Gita Press Spiritual Books",
          "Fertilizer Urea (HURL)",
          "Wheat & Rice Grain Wholesaling"
        ],
        "hubDescription": "Gorakhpur is the administrative and commercial nerve center for Purvanchal and Nepal-border trade."
      },
      {
        "id": "up-prayagraj",
        "districtName": "Prayagraj Surkha Guava & Regional Trade",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 25.4358,
        "longitude": 81.8463,
        "verified": true,
        "stockistCount": 410,
        "opportunityCount": 18,
        "categories": [
          "Guavas",
          "Publishing",
          "Glass & Silica",
          "Food Grains"
        ],
        "availability": "available",
        "primaryMandi": "Naini Industrial Area & Muthiganj Wholesale Mandi",
        "avgMargin": "20% - 28%",
        "famousFor": "Allahabad Surkha Pink Guava (GI Tag), Maha Kumbh Pilgrim Services & Naini Industrial Glass/Electricals",
        "famousBusinessType": "Surkha Guava Processing, Educational Printing & Glass Sand",
        "keySpecialities": [
          "Red-Fleshed Surkha Guavas & Jellies",
          "Educational Competitive Exam Books",
          "High-Grade Silica Glass Sand",
          "Agro Fertilizer Distribution"
        ],
        "hubDescription": "Prayagraj anchors fertile agricultural plains and serves as Eastern UP’s judicial and education center."
      },
      {
        "id": "up-jhansi",
        "districtName": "Jhansi Bundelkhand Rail & Defense Hub",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 25.4484,
        "longitude": 78.5685,
        "verified": true,
        "stockistCount": 260,
        "opportunityCount": 12,
        "categories": [
          "Railway Spares",
          "Defense Hardware",
          "Stone Grit",
          "Pulses"
        ],
        "availability": "available",
        "primaryMandi": "Sipri Bazar & Bijauli Industrial Estate",
        "avgMargin": "21% - 28%",
        "famousFor": "Bundelkhand Defense Industrial Corridor, Railway Locomotive Workshops & Granite Stone Processing",
        "famousBusinessType": "Railway Spares, Granite Mining & Pulses Trading",
        "keySpecialities": [
          "Railway Rolling Stock Spares",
          "Red Granite Polished Slabs",
          "Bundelkhand Urad & Gram Dal",
          "Defense Ammunition Components"
        ],
        "hubDescription": "Jhansi is the strategic crossroads linking North and Central India, with massive railway junctions and defense corridors."
      },
      {
        "id": "up-muzaffarnagar",
        "districtName": "Muzaffarnagar Jaggery & Steel Re-Rolling",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 29.4727,
        "longitude": 77.7085,
        "verified": true,
        "stockistCount": 380,
        "opportunityCount": 16,
        "categories": [
          "Jaggery (Gur)",
          "Sugar",
          "TMT Steel Bars",
          "Paper"
        ],
        "availability": "available",
        "primaryMandi": "Muzaffarnagar Gur Mandi (Asia’s Largest Jaggery Market)",
        "avgMargin": "20% - 28%",
        "famousFor": "Asia’s Largest Jaggery (Gur) Trading Market, Massive Sugarcane Mills & Secondary Steel TMT Rolling Mills",
        "famousBusinessType": "Jaggery Wholesale Trading, Sugar & Steel Re-Rolling",
        "keySpecialities": [
          "Raw & Clarified Gur (Jaggery) Lumps",
          "Refined Crystal Sugar",
          "TMT Structural Steel Re-Rolled Bars",
          "Recycled Kraft Paper"
        ],
        "hubDescription": "Muzaffarnagar operates the largest jaggery market in Asia, dominating winter commodity prices nationwide."
      },
      {
        "id": "up-mathura",
        "districtName": "Mathura Peda & Oil Refining Belt",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 27.4924,
        "longitude": 77.6737,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 14,
        "categories": [
          "Mathura Peda",
          "Petrochemicals",
          "Silver Ornaments",
          "Sanitaryware"
        ],
        "availability": "available",
        "primaryMandi": "Holi Gate Market & Mathura IOCL Refinery Corridor",
        "avgMargin": "22% - 30%",
        "famousFor": "Mathura Peda Sweet (GI Tag), Indian Oil Mathura Refinery & Silver Payal (Anklet) Manufacturing",
        "famousBusinessType": "Dairy Sweets (Peda), Petroleum Refining & Silver Anklets",
        "keySpecialities": [
          "Traditional Roasted Khoya Mathura Peda",
          "Petroleum By-Products & Sulphur",
          "Silver Payal & Ornaments",
          "Pilgrim Religious Art"
        ],
        "hubDescription": "Mathura combines holy pilgrimage trade with India’s major inland petroleum refinery and silver craftsmanship."
      },
      {
        "id": "up-ayodhya",
        "districtName": "Ayodhya Sacred Tourism & Retail Mart",
        "stateName": "Uttar Pradesh",
        "countryName": "India",
        "latitude": 26.7922,
        "longitude": 82.1998,
        "verified": true,
        "stockistCount": 340,
        "opportunityCount": 18,
        "categories": [
          "Spiritual Retail",
          "Hospitality Supplies",
          "Jaggery",
          "Packaged Food"
        ],
        "availability": "available",
        "primaryMandi": "Naya Ghat Commercial Corridor & Faizabad APMC",
        "avgMargin": "24% - 35%",
        "famousFor": "Shri Ram Janmabhoomi Pilgrimage Boom, Spiritual Souvenirs, Sugarcane Jaggery & Rapid Hospitality Expansion",
        "famousBusinessType": "Religious Souvenirs, Hospitality Supplies & Fast-Moving Consumer Goods",
        "keySpecialities": [
          "Brass & Wooden Mandir Souvenirs",
          "Packaged Sweets & Prasadam",
          "Hotel Linen & Amenities",
          "Ayodhya Herbal Dhoop & Incense"
        ],
        "hubDescription": "Ayodhya is experiencing unprecedented commercial expansion with millions of pilgrims driving massive retail demand."
      }
    ]
  },
  {
    "id": "tamil-nadu",
    "name": "Tamil Nadu",
    "countryName": "India",
    "latitude": 11.1271,
    "longitude": 78.6569,
    "verifiedStockCount": 4650,
    "districtCount": 13,
    "totalDistributors": "15,600 Registered Distributors",
    "verifiedStockists": "4,650 Verified Channel Wholesalers",
    "readinessScore": "98/100 (Southern Manufacturing Titan)",
    "commercialStatus": "Automobile Detroit of South Asia, Textile Clusters, Fireworks & Maritime Ports",
    "tradeCorridor": "Chennai-Bengaluru Industrial Corridor & Tuticorin Port Coastal Arteries",
    "keySectors": [
      "Automobile",
      "Knitwear & Garments",
      "Wet Grinders & Pumps",
      "Fireworks & Printing",
      "Steel & Sago"
    ],
    "districts": [
      {
        "id": "tn-tirupur",
        "districtName": "Tirupur Knitwear Capital of India",
        "stateName": "Tamil Nadu",
        "countryName": "India",
        "latitude": 11.1085,
        "longitude": 77.3411,
        "verified": true,
        "stockistCount": 940,
        "opportunityCount": 40,
        "categories": [
          "Knitwear",
          "Cotton T-Shirts",
          "Innerwear",
          "Spinning Mills"
        ],
        "availability": "high",
        "primaryMandi": "Tirupur Cotton Market & Netaji Apparel Park",
        "avgMargin": "24% - 36%",
        "famousFor": "Knitwear Capital of India (Exports over ₹35,000 Crore of Cotton T-Shirts, Innerwear & Babywear)",
        "famousBusinessType": "Cotton Knitwear, Garment Dyeing & Export T-Shirts",
        "keySpecialities": [
          "100% Combed Cotton T-Shirts",
          "Men & Women Innerwear",
          "Organic Cotton Infant Wear",
          "Specialty Fabric Dyeing & Finishing"
        ],
        "hubDescription": "Tirupur is India’s undisputed knitwear giant, producing nearly 90% of the country’s cotton knitwear exports."
      },
      {
        "id": "tn-coimbatore",
        "districtName": "Coimbatore Pump, Wet Grinder & Textile Hub",
        "stateName": "Tamil Nadu",
        "countryName": "India",
        "latitude": 11.0168,
        "longitude": 76.9558,
        "verified": true,
        "stockistCount": 1120,
        "opportunityCount": 42,
        "categories": [
          "Submersible Pumps",
          "Table-top Wet Grinders",
          "Textile Machinery",
          "Foundry"
        ],
        "availability": "high",
        "primaryMandi": "Peelamedu Industrial Estate & R.S. Puram Wholesale Mart",
        "avgMargin": "22% - 32%",
        "famousFor": "Manchester of South India, Table-Top Wet Grinders (GI Tag), Motors/Pumps (Supplies 50% of India) & Precision Foundries",
        "famousBusinessType": "Submersible Pumps, Wet Grinders & Precision Castings",
        "keySpecialities": [
          "Table-Top Commercial Wet Grinders (GI)",
          "Agricultural Submersible Water Pumps",
          "Textile Spinning Ring Frames",
          "Automotive Grey Iron Foundries"
        ],
        "hubDescription": "Coimbatore is an engineering powerhouse, synonymous with domestic wet grinders, electric motors, and textile machines."
      },
      {
        "id": "tn-sivakasi",
        "districtName": "Sivakasi Fireworks, Matches & Printing Hub",
        "stateName": "Tamil Nadu",
        "countryName": "India",
        "latitude": 9.4533,
        "longitude": 77.7942,
        "verified": true,
        "stockistCount": 680,
        "opportunityCount": 28,
        "categories": [
          "Fireworks",
          "Safety Matches",
          "Offset Printing",
          "Packaging Boxes"
        ],
        "availability": "high",
        "primaryMandi": "Sivakasi Fireworks Industrial Zone & Coronation Market",
        "avgMargin": "26% - 42%",
        "famousFor": "Mini Japan of India (Produces 90% of India’s Fireworks, 80% of Safety Matches & World-Class Offset Printing / Calendars)",
        "famousBusinessType": "Commercial Fireworks, Safety Matches & High-End Offset Printing",
        "keySpecialities": [
          "Green Crackers & Sparklers",
          "Wax & Wooden Safety Matches",
          "Rigid Board Packaging Boxes",
          "Annual Diaries & Wall Calendars"
        ],
        "hubDescription": "Sivakasi illuminates India with festivals and matches, powered by unmatched precision offset printing presses."
      },
      {
        "id": "tn-chennai",
        "districtName": "Chennai Detroit of South Asia",
        "stateName": "Tamil Nadu",
        "countryName": "India",
        "latitude": 13.0827,
        "longitude": 80.2707,
        "verified": true,
        "stockistCount": 1450,
        "opportunityCount": 48,
        "categories": [
          "Automobiles",
          "Auto Ancillaries",
          "Leather Footwear",
          "SaaS & Hardware"
        ],
        "availability": "high",
        "primaryMandi": "Koyambedu Wholesale Market Complex & Ambattur Industrial Estate",
        "avgMargin": "22% - 30%",
        "famousFor": "Detroit of South Asia (Hyundai, Renault, Royal Enfield), Leather Footwear Exports & Koyambedu Market",
        "famousBusinessType": "Automobile Assembly, Auto Components & Finished Leather Goods",
        "keySpecialities": [
          "Passenger Cars & Two-Wheelers",
          "Auto Brake & Steering Assemblies",
          "Finished Leather Uppers & Shoes",
          "Commercial Software & Hardware"
        ],
        "hubDescription": "Chennai is India’s premier automobile and automotive component capital, backed by massive seaports and software parks."
      },
      {
        "id": "tn-salem",
        "districtName": "Salem Steel, Sago & Handloom Hub",
        "stateName": "Tamil Nadu",
        "countryName": "India",
        "latitude": 11.6643,
        "longitude": 78.146,
        "verified": true,
        "stockistCount": 480,
        "opportunityCount": 22,
        "categories": [
          "Stainless Steel",
          "Sago & Starch",
          "Silk Handlooms",
          "Magnesite"
        ],
        "availability": "available",
        "primaryMandi": "SagoServe Market & Shevapet Commercial Mart",
        "avgMargin": "22% - 30%",
        "famousFor": "Salem Stainless Steel (SAIL), Sago City (Produces 60% of India’s Sago / Sabudana) & Salem Venpattu Silk (GI Tag)",
        "famousBusinessType": "Sago / Sabudana Milling, Stainless Steel Fabrication & Silk Handlooms",
        "keySpecialities": [
          "Tapioca Sago (Sabudana)",
          "Salem Stainless Steel Utensils",
          "Pure White Silk Dhoti (Venpattu)",
          "Magnesite & Refractory Bricks"
        ],
        "hubDescription": "Salem dominates the national sabudana and tapioca starch trade through SagoServe, alongside heavy steel plants."
      },
      {
        "id": "tn-erode",
        "districtName": "Erode Turmeric & Textile Weaving City",
        "stateName": "Tamil Nadu",
        "countryName": "India",
        "latitude": 11.341,
        "longitude": 77.7172,
        "verified": true,
        "stockistCount": 510,
        "opportunityCount": 24,
        "categories": [
          "Turmeric",
          "Powerloom Bedsheets",
          "Carpets",
          "Oilseeds"
        ],
        "availability": "high",
        "primaryMandi": "Semmampalayam Turmeric Yard & Texvalley Market",
        "avgMargin": "22% - 30%",
        "famousFor": "Yellow City (One of India’s Largest Turmeric Trading Hubs - GI Tag) & Texvalley Powerloom Textile Hub",
        "famousBusinessType": "Turmeric Commodity Trading, Powerloom Bedsheets & Towels",
        "keySpecialities": [
          "Erode Turmeric Fingers & Powder",
          "Printed Cotton Bedsheets",
          "Terry Bath Towels",
          "Texvalley B2B Textile Mall Trade"
        ],
        "hubDescription": "Erode is South India’s prime turmeric market and powerloom textile trading nexus at Texvalley."
      },
      {
        "id": "tn-karur",
        "districtName": "Karur Home Textiles & Bus Body Building",
        "stateName": "Tamil Nadu",
        "countryName": "India",
        "latitude": 10.9601,
        "longitude": 78.0766,
        "verified": true,
        "stockistCount": 380,
        "opportunityCount": 18,
        "categories": [
          "Home Textiles",
          "Curtains & Kitchen Linen",
          "Bus Bodies",
          "Mosquito Nets"
        ],
        "availability": "available",
        "primaryMandi": "Karur Textile Export Complex & Thanthonimalai",
        "avgMargin": "24% - 35%",
        "famousFor": "Home Textile Capital of India (Curtains, Kitchen Towels, Bed Spreads Exports) & Bus Body Building Hub",
        "famousBusinessType": "Made-Up Home Textiles & Commercial Bus Body Fabrication",
        "keySpecialities": [
          "Woven Kitchen Towels & Table Mats",
          "Printed Curtains & Bedspreads",
          "Commercial Bus & Coach Body Work",
          "Polyethylene Mosquito Nets"
        ],
        "hubDescription": "Karur supplies bed and table linen to global retail giants (IKEA, Walmart) and builds buses for transit fleets."
      },
      {
        "id": "tn-madurai",
        "districtName": "Madurai Jasmine, Sungudi & Food Capital",
        "stateName": "Tamil Nadu",
        "countryName": "India",
        "latitude": 9.9252,
        "longitude": 78.1198,
        "verified": true,
        "stockistCount": 520,
        "opportunityCount": 22,
        "categories": [
          "Jasmine (Malligai)",
          "Sungudi Sarees",
          "Food Products",
          "Granite"
        ],
        "availability": "high",
        "primaryMandi": "Mattuthavani Flower Market & Vilakkuthoon Wholesale Mart",
        "avgMargin": "24% - 34%",
        "famousFor": "Madurai Malli (GI Tag Jasmine for Global Perfumes), Tie-and-Dye Sungudi Cotton Sarees & Culinary Brands",
        "famousBusinessType": "Jasmine Flower Perfumery Extraction, Sungudi Handlooms & Food Processing",
        "keySpecialities": [
          "Madurai Malli Sambac Jasmine Extracts",
          "Traditional Sungudi Cotton Sarees",
          "Kudiraivali (Millet) Processing",
          "Multi-Colour Polished Granite"
        ],
        "hubDescription": "Madurai’s GI-tagged jasmine blossoms scent perfumes in Paris and Grasse, alongside its lively retail food culture."
      },
      {
        "id": "tn-vellore",
        "districtName": "Vellore Finished Leather & Medical Hub",
        "stateName": "Tamil Nadu",
        "countryName": "India",
        "latitude": 12.9165,
        "longitude": 79.1325,
        "verified": true,
        "stockistCount": 390,
        "opportunityCount": 17,
        "categories": [
          "Finished Leather",
          "Shoes",
          "Hospital Supplies",
          "Jaggery"
        ],
        "availability": "available",
        "primaryMandi": "Ranipet & Ambur Leather Cluster",
        "avgMargin": "22% - 32%",
        "famousFor": "Ranipet/Ambur Leather Tanning (Supplies 35% of India’s Leather Footwear Exports) & CMC Medical Cluster",
        "famousBusinessType": "Finished Leather Tanning, Designer Shoe Uppers & Medical Goods",
        "keySpecialities": [
          "Finished Leather Hides & Skins",
          "Export Leather Shoe Uppers",
          "Hospitality & Patient Supplies",
          "Vellore Spiced Sweets"
        ],
        "hubDescription": "Vellore district’s Ranipet-Ambur belt is India’s foremost leather tanning and footwear export region."
      },
      {
        "id": "tn-thoothukudi",
        "districtName": "Thoothukudi (Tuticorin) Port & Sea Salt Hub",
        "stateName": "Tamil Nadu",
        "countryName": "India",
        "latitude": 8.7642,
        "longitude": 78.1348,
        "verified": true,
        "stockistCount": 340,
        "opportunityCount": 15,
        "categories": [
          "Sea Salt",
          "Seafood Exports",
          "Port Cargo",
          "Macaroons"
        ],
        "availability": "available",
        "primaryMandi": "V.O. Chidambaranar Port & Tuticorin Salt Pans",
        "avgMargin": "20% - 28%",
        "famousFor": "Pearl City, V.O.C. Deepwater Seaport, India’s 2nd Largest Salt Producer & Tuticorin Macaroon Confectionery",
        "famousBusinessType": "Sea Salt Manufacturing, Marine Seafood Processing & Port Freight",
        "keySpecialities": [
          "Industrial & Edible Sea Salt",
          "Frozen Shrimps & Squid Exports",
          "Cashew Macaroon Confectionery",
          "Thermal Heavy Power Logistics"
        ],
        "hubDescription": "Tuticorin powers southern maritime trade with deep-sea container terminals and massive coastal salt pans."
      },
      {
        "id": "tn-tiruchirappalli",
        "districtName": "Tiruchirappalli (Trichy) Heavy Fabrication Hub",
        "stateName": "Tamil Nadu",
        "countryName": "India",
        "latitude": 10.7905,
        "longitude": 78.7047,
        "verified": true,
        "stockistCount": 420,
        "opportunityCount": 18,
        "categories": [
          "Boilers & Fabrication",
          "Artificial Diamonds",
          "Bananas",
          "Cigar"
        ],
        "availability": "available",
        "primaryMandi": "Gandhi Market Trichy & BHEL Industrial Complex",
        "avgMargin": "22% - 30%",
        "famousFor": "BHEL High-Pressure Boiler Manufacturing, Heavy Boiler Fabrication, Synthetic Gem Cutting & Nendran Bananas",
        "famousBusinessType": "Thermal Boiler Fabrication, Engineering Ancillaries & Synthetic Gems",
        "keySpecialities": [
          "Industrial Boiler Piping & Pressure Vessels",
          "American Diamond (Synthetic) Cutting",
          "Monthan & Nendran Bananas",
          "Traditional Herbal Formulations"
        ],
        "hubDescription": "Trichy is South India’s heavy engineering core, fabricating industrial boilers and pressure vessels for power utilities."
      },
      {
        "id": "tn-thanjavur",
        "districtName": "Thanjavur Rice Bowl & Art Plate Hub",
        "stateName": "Tamil Nadu",
        "countryName": "India",
        "latitude": 10.787,
        "longitude": 79.1378,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 14,
        "categories": [
          "Paddy Rice",
          "Art Plates",
          "Paintings",
          "Musical Instruments"
        ],
        "availability": "available",
        "primaryMandi": "Kumbakonam & Thanjavur Grain Mandi",
        "avgMargin": "20% - 28%",
        "famousFor": "Rice Bowl of Tamil Nadu (Cauvery Delta), Thanjavur Art Plates (GI Tag), Tanjore Gold Foil Paintings & Veena Making",
        "famousBusinessType": "Paddy Rice Milling, Heritage Gold Foil Paintings & Traditional Metal Crafts",
        "keySpecialities": [
          "Ponni & Sona Masoori Rice",
          "Thanjavur Relief Art Plates (Silver/Brass)",
          "Tanjore 22K Gold Foil Paintings",
          "Handcrafted Jackwood Saraswati Veenas"
        ],
        "hubDescription": "Thanjavur feeds the state with Cauvery delta paddy while preserving centuries of gold-foil painting and metal art."
      },
      {
        "id": "tn-dindigul",
        "districtName": "Dindigul Iron Locks & Biryani Spices",
        "stateName": "Tamil Nadu",
        "countryName": "India",
        "latitude": 10.3673,
        "longitude": 77.9803,
        "verified": true,
        "stockistCount": 290,
        "opportunityCount": 13,
        "categories": [
          "Handmade Locks",
          "Leather Tanning",
          "Tobacco",
          "Thalappakatti Biryani"
        ],
        "availability": "available",
        "primaryMandi": "Dindigul Lock Artisans Society & Begambur Market",
        "avgMargin": "22% - 32%",
        "famousFor": "Dindigul Hand-Wrought Locks (GI Tag - Unpickable Lever Locks) & Thalappakatti Seeraga Samba Biryani Heritage",
        "famousBusinessType": "Handcrafted Mechanical Locks, Seeraga Samba Rice & Leather Processing",
        "keySpecialities": [
          "Hand-Wrought Brass & Steel Lever Locks",
          "Seeraga Samba Fragrant Rice",
          "Semi-Finished Vegetable Tanned Leather",
          "Natural Chewing Tobacco"
        ],
        "hubDescription": "Dindigul’s GI-tagged artisan locks are renowned for unpickable security levers, alongside fragrant biryani spices."
      }
    ]
  },
  {
    "id": "karnataka",
    "name": "Karnataka",
    "countryName": "India",
    "latitude": 15.3173,
    "longitude": 75.7139,
    "verifiedStockCount": 4320,
    "districtCount": 11,
    "totalDistributors": "14,900 Registered Distributors",
    "verifiedStockists": "4,320 Audited Stockists",
    "readinessScore": "98/100 (Silicon Valley & Precision Engineering)",
    "commercialStatus": "IT Software Capital of India, Aerospace, Coffee, Silk, Foundry & Precision Machine Tools",
    "tradeCorridor": "Bengaluru-Mumbai Expressway & Mangalore Port Maritime Freight",
    "keySectors": [
      "IT & Electronics",
      "Coffee & Spices",
      "Foundry & Hydraulics",
      "Silk Handlooms",
      "Denim Garments"
    ],
    "districts": [
      {
        "id": "ka-bengaluru-peenya",
        "districtName": "Bengaluru Urban & Peenya Industrial Estate",
        "stateName": "Karnataka",
        "countryName": "India",
        "latitude": 12.9716,
        "longitude": 77.5946,
        "verified": true,
        "stockistCount": 1580,
        "opportunityCount": 54,
        "categories": [
          "Electronics",
          "Machine Tools",
          "Aerospace Components",
          "FMCG"
        ],
        "availability": "high",
        "primaryMandi": "Peenya Industrial Area (One of Asia’s Largest) & Yeshwanthpur APMC",
        "avgMargin": "22% - 32%",
        "famousFor": "Silicon Valley of India, Peenya Industrial Estate (Over 5,000 Precision Engineering / Machine Tool Units) & Aerospace",
        "famousBusinessType": "Precision Engineering, CNC Machining & Electronic Hardware",
        "keySpecialities": [
          "CNC Lathes & Machine Tools",
          "Aerospace Precision Components",
          "Consumer Electronics Assembly",
          "Modern Trade FMCG Logistics"
        ],
        "hubDescription": "Bengaluru’s Peenya industrial cluster is among Asia’s largest, producing precision machinery and electronic hardware."
      },
      {
        "id": "ka-hubballi-dharwad",
        "districtName": "Hubballi-Dharwad Commercial Gateway",
        "stateName": "Karnataka",
        "countryName": "India",
        "latitude": 15.3647,
        "longitude": 75.124,
        "verified": true,
        "stockistCount": 580,
        "opportunityCount": 26,
        "categories": [
          "Valves & Pumps",
          "Dharwad Peda",
          "Agricultural Implements",
          "Textiles"
        ],
        "availability": "high",
        "primaryMandi": "Amargol APMC Hubballi (One of Asia’s Largest Chilli & Grain Mandis)",
        "avgMargin": "22% - 30%",
        "famousFor": "Commercial Capital of North Karnataka, Dharwad Peda Sweet (GI Tag), Valves/Engineering & Massive Cotton APMC",
        "famousBusinessType": "Industrial Valve Manufacturing, Dairy Confectionery & Agro Commodity Trade",
        "keySpecialities": [
          "Industrial Gate & Globe Valves",
          "Dharwad Milk Peda (GI)",
          "Agricultural Seed Processing",
          "Electrical Transformer Repairs"
        ],
        "hubDescription": "Hubballi-Dharwad is the commercial nexus of North Karnataka, with Asia’s vast Amargol grain and red chilli market."
      },
      {
        "id": "ka-belagavi",
        "districtName": "Belagavi Foundry & Machining Hub",
        "stateName": "Karnataka",
        "countryName": "India",
        "latitude": 15.8497,
        "longitude": 74.4977,
        "verified": true,
        "stockistCount": 490,
        "opportunityCount": 22,
        "categories": [
          "Hydraulic Castings",
          "Kunda Sweet",
          "Powerloom",
          "Crankshafts"
        ],
        "availability": "high",
        "primaryMandi": "Machhe & Udyambag Industrial Estate",
        "avgMargin": "24% - 34%",
        "famousFor": "Crankshaft & Hydraulic Valve Castings (Supplies Tata, Ashok Leyland), Belgaum Kunda Sweet & Powerloom Cotton",
        "famousBusinessType": "Heavy Foundry Castings, Crankshaft Machining & Dairy Sweets",
        "keySpecialities": [
          "Ductile & Grey Iron Automotive Castings",
          "Hydraulic Spool Valves",
          "Belgaum Kunda (Slow-Cooked Khoya Sweet)",
          "Powerloom Jacquard Sarees"
        ],
        "hubDescription": "Belagavi supplies heavy iron automotive castings and crankshafts across India, famed for its delicious Kunda sweet."
      },
      {
        "id": "ka-mysuru",
        "districtName": "Mysuru Sandalwood, Silk & Heritage Hub",
        "stateName": "Karnataka",
        "countryName": "India",
        "latitude": 12.2958,
        "longitude": 76.6394,
        "verified": true,
        "stockistCount": 460,
        "opportunityCount": 20,
        "categories": [
          "Sandalwood Oil",
          "Mysore Silk Sarees",
          "Mysore Pak",
          "Incense Sticks"
        ],
        "availability": "high",
        "primaryMandi": "Devaraja Market & Hebbal Industrial Area",
        "avgMargin": "25% - 40%",
        "famousFor": "Mysore Sandalwood Soap & Oil, Pure Mysore Silk Sarees (KSIC - GI Tag), Mysore Pak Sweets & Agarbatti Incense",
        "famousBusinessType": "Pure Sandalwood Oil Extraction, Zari Silk Handloom & Traditional Sweets",
        "keySpecialities": [
          "Mysore Silk Crepe Gold-Zari Sarees",
          "Mysore Sandalwood Essential Oil",
          "Ghee-Laden Mysore Pak Sweets",
          "Floral & Woody Agarbatti Sticks"
        ],
        "hubDescription": "Mysuru is Karnataka’s cultural capital, celebrated worldwide for royal Mysore silk, sandalwood aroma, and sweet Mysore Pak."
      },
      {
        "id": "ka-mangaluru",
        "districtName": "Mangaluru Port, Cashew & Petrochemical Hub",
        "stateName": "Karnataka",
        "countryName": "India",
        "latitude": 12.9141,
        "longitude": 74.856,
        "verified": true,
        "stockistCount": 440,
        "opportunityCount": 19,
        "categories": [
          "Seafood & Cashew",
          "Petrochemicals (MRPL)",
          "Coffee Exports",
          "Roofing Tiles"
        ],
        "availability": "high",
        "primaryMandi": "New Mangalore Port Authority & Bunder Wholesale Fish Market",
        "avgMargin": "20% - 28%",
        "famousFor": "New Mangalore All-Weather Port, Cashew Processing, MRPL Petroleum Refinery & Mangalore Terracotta Roofing Tiles",
        "famousBusinessType": "Port Logistics, Cashew Nut Roasting & Coastal Seafood Processing",
        "keySpecialities": [
          "Export Roasted Cashew Kernels",
          "Frozen Mackerel & Tuna Seafood",
          "Polypropylene Granules (MRPL)",
          "Red Clay Mangalore Roofing Tiles"
        ],
        "hubDescription": "Mangaluru is Karnataka’s only major sea gateway, shipping out 75% of India’s coffee and vast cashew nut volumes."
      },
      {
        "id": "ka-ballari",
        "districtName": "Ballari (Bellary) Jeans & Steel City",
        "stateName": "Karnataka",
        "countryName": "India",
        "latitude": 15.1394,
        "longitude": 76.9214,
        "verified": true,
        "stockistCount": 380,
        "opportunityCount": 18,
        "categories": [
          "Denim Jeans",
          "Iron Ore & Steel (JSW)",
          "Cotton Bales",
          "Pomegranate"
        ],
        "availability": "available",
        "primaryMandi": "Bellary Jeans Apparel Cluster & APMC Cotton Yard",
        "avgMargin": "24% - 36%",
        "famousFor": "Jeans Capital of India (Over 500 Jeans Stitching Units) & Toranagallu JSW Vijayanagar Integrated Steel Plant",
        "famousBusinessType": "Denim Jeans Manufacturing, Industrial Steel & Iron Ore Pelletizing",
        "keySpecialities": [
          "Branded & White-Label Denim Jeans",
          "JSW Hot-Rolled Steel Coils",
          "Raw Cotton Bales",
          "Bhagawa Pomegranate Exports"
        ],
        "hubDescription": "Ballari is famous across India for manufacturing affordable denim jeans, alongside the massive JSW Vijayanagar steel plant."
      },
      {
        "id": "ka-davanagere",
        "districtName": "Davanagere Cotton Ginning & Benne Dosa City",
        "stateName": "Karnataka",
        "countryName": "India",
        "latitude": 14.4644,
        "longitude": 75.9218,
        "verified": true,
        "stockistCount": 320,
        "opportunityCount": 15,
        "categories": [
          "Cotton Textiles",
          "Maize & Rice",
          "Benne Dosa Brands",
          "Sugar"
        ],
        "availability": "available",
        "primaryMandi": "Davanagere APMC Market Yard (Asia’s Major Maize Mandi)",
        "avgMargin": "20% - 28%",
        "famousFor": "Historic Manchester of Karnataka, Yellow Maize (Corn) Hub of India & World-Famous Davanagere Benne (Butter) Dosa",
        "famousBusinessType": "Maize Commodity Trading, Sugar Milling & Dairy Food Heritage",
        "keySpecialities": [
          "Feed & Starch Grade Yellow Maize",
          "Raw Cotton Ginning",
          "Refined Granulated Sugar",
          "Davanagere Benne Dosa Mixes"
        ],
        "hubDescription": "Davanagere anchors Central Karnataka’s maize and agro processing, legendary for its unique crispy butter dosas."
      },
      {
        "id": "ka-shivamogga",
        "districtName": "Shivamogga (Shimoga) Arecanut & Steel Hub",
        "stateName": "Karnataka",
        "countryName": "India",
        "latitude": 13.9299,
        "longitude": 75.5681,
        "verified": true,
        "stockistCount": 290,
        "opportunityCount": 14,
        "categories": [
          "Arecanut (Supari)",
          "Paddy Rice",
          "Foundry",
          "Spice Extracts"
        ],
        "availability": "available",
        "primaryMandi": "MAMCOS Arecanut Market Yard Shimoga",
        "avgMargin": "22% - 30%",
        "famousFor": "Arecanut (Betel Nut / Supari) Capital of South Asia (MAMCOS) & Bhadravati VISL Iron & Steel Works",
        "famousBusinessType": "Arecanut Processing & Commodity Auctions, Special Steel & Paper",
        "keySpecialities": [
          "Chali & Rashi Grade Arecanut",
          "Boiled Arecanut Slices",
          "Specialty Alloy Steel (Bhadravati)",
          "Fine Writing Paper (MPM)"
        ],
        "hubDescription": "Shivamogga is the headquarters of MAMCOS, running the largest arecanut (supari) auction operations in India."
      },
      {
        "id": "ka-kalaburagi",
        "districtName": "Kalaburagi (Gulbarga) Red Gram (Tur Dal) Capital",
        "stateName": "Karnataka",
        "countryName": "India",
        "latitude": 17.3297,
        "longitude": 76.8343,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 13,
        "categories": [
          "Tur Dal (Pigeon Pea)",
          "Limestone & Cement",
          "Shahabad Stones",
          "Cotton"
        ],
        "availability": "available",
        "primaryMandi": "Nehru Gunj APMC Yard Kalaburagi",
        "avgMargin": "20% - 28%",
        "famousFor": "Tur Dal Bowl of Karnataka (Gulbarga Red Gram - GI Tag) & Massive Cement Plants (Wadi/Sedam - Ultratech, ACC)",
        "famousBusinessType": "Pulse Processing (Tur Dal Mills) & Cement Manufacturing",
        "keySpecialities": [
          "Kalaburagi Tur Dal (Pigeon Pea - GI)",
          "Ordinary Portland Cement (OPC)",
          "Polished Shahabad Limestone Slabs",
          "Cotton Ginning Bales"
        ],
        "hubDescription": "Kalaburagi produces India’s highest quality protein-rich pigeon peas (Tur Dal) alongside massive limestone cement plants."
      },
      {
        "id": "ka-udupi",
        "districtName": "Udupi Culinary Heritage & Cashew Hub",
        "stateName": "Karnataka",
        "countryName": "India",
        "latitude": 13.3409,
        "longitude": 74.7421,
        "verified": true,
        "stockistCount": 270,
        "opportunityCount": 12,
        "categories": [
          "Udupi Cuisine Packaged",
          "Cashews",
          "Fisheries",
          "Sarees"
        ],
        "availability": "available",
        "primaryMandi": "Udupi City Market & Malpe Deep-Sea Fishing Port",
        "avgMargin": "22% - 32%",
        "famousFor": "Birthplace of World-Renowned Udupi Vegetarian Cuisine, Malpe Commercial Fishing Port & Udupi Cotton Sarees (GI Tag)",
        "famousBusinessType": "Ready-to-Cook Traditional Foods, Deep-Sea Marine Fisheries & Cashews",
        "keySpecialities": [
          "Ready Udupi Rasam & Sambar Masalas",
          "Malpe Frozen Marine Fish Exports",
          "W240 Roasted Cashew Nuts",
          "Fine Udupi Cotton Handloom Sarees"
        ],
        "hubDescription": "Udupi’s culinary tradition gave birth to South Indian restaurants globally, backed by Malpe’s deep-sea fisheries."
      },
      {
        "id": "ka-tumakuru",
        "districtName": "Tumakuru Coconut & Mega Food Park",
        "stateName": "Karnataka",
        "countryName": "India",
        "latitude": 13.3379,
        "longitude": 77.1173,
        "verified": true,
        "stockistCount": 330,
        "opportunityCount": 15,
        "categories": [
          "Copra & Coconuts",
          "Mega Food Park",
          "Ragi",
          "Automotive"
        ],
        "availability": "available",
        "primaryMandi": "Tiptur Copra APMC (India’s Premier Copra Yard)",
        "avgMargin": "20% - 28%",
        "famousFor": "Tiptur Dry Copra (India’s Most Famous Coconut Market), India Food Park (Vasanthanarasapura) & Industrial Nodes",
        "famousBusinessType": "Ball Copra Coconut Trade, Food Processing & Industrial Ancillaries",
        "keySpecialities": [
          "Tiptur Dry Ball Copra",
          "Virgin Coconut Oil & Desiccated Powder",
          "Finger Millet (Ragi) Flour",
          "Automotive Press Tools"
        ],
        "hubDescription": "Tumakuru’s Tiptur market sets national prices for ball copra, now hosting India’s premier central mega food park."
      }
    ]
  },
  {
    "id": "rajasthan",
    "name": "Rajasthan",
    "countryName": "India",
    "latitude": 27.0238,
    "longitude": 74.2179,
    "verifiedStockCount": 3820,
    "districtCount": 12,
    "totalDistributors": "12,400 Registered Wholesalers",
    "verifiedStockists": "3,820 Verified Stockists",
    "readinessScore": "96/100 (Mineral, Handicraft & Tourism Hub)",
    "commercialStatus": "Gemstone Cutting, Mineral Stones, Spices, Textiles & Traditional Confectionery",
    "tradeCorridor": "Delhi-Mumbai Freight Corridor & West Coast Dry Port Links",
    "keySectors": [
      "Gemstones & Jewellery",
      "Marble & Kota Stone",
      "Suiting & Denim",
      "Namkeen & Sweets",
      "Wooden Handicrafts"
    ],
    "districts": [
      {
        "id": "rj-jaipur",
        "districtName": "Jaipur Gemstone, Jewellery & Handblock Print Capital",
        "stateName": "Rajasthan",
        "countryName": "India",
        "latitude": 26.9124,
        "longitude": 75.7873,
        "verified": true,
        "stockistCount": 1150,
        "opportunityCount": 44,
        "categories": [
          "Gemstones & Kundan",
          "Handblock Textiles",
          "Blue Pottery",
          "Marble Statues"
        ],
        "availability": "high",
        "primaryMandi": "Johari Bazar & Sitapura Gem & Jewellery SEZ",
        "avgMargin": "26% - 45%",
        "famousFor": "World Capital of Colored Gemstone Cutting (Emeralds), Kundan-Meena Jewellery, Sanganeri Handblock Prints (GI) & Blue Pottery",
        "famousBusinessType": "Precious Gemstones, Heritage Kundan Jewellery & Sanganeri Handblock Textiles",
        "keySpecialities": [
          "Cut & Polished Emeralds & Tanzanite",
          "Handcrafted Kundan-Jadau Jewellery",
          "Sanganeri & Bagru Handblock Bedspreads",
          "Jaipur Blue Pottery Ceramic Decor"
        ],
        "hubDescription": "Jaipur is the gemstone cutting capital of the world and Rajasthan’s primary retail and wholesale commercial gateway."
      },
      {
        "id": "rj-jodhpur",
        "districtName": "Jodhpur Wooden Handicrafts & Spice Capital",
        "stateName": "Rajasthan",
        "countryName": "India",
        "latitude": 26.2389,
        "longitude": 73.0243,
        "verified": true,
        "stockistCount": 650,
        "opportunityCount": 26,
        "categories": [
          "Wooden Furniture",
          "Wrought Iron Decor",
          "Mathaniya Chillies",
          "Handicrafts"
        ],
        "availability": "high",
        "primaryMandi": "Boronada SEZ & Mandore Agro Mandi",
        "avgMargin": "28% - 46%",
        "famousFor": "Sun City, India’s Largest Wooden Handicrafts & Antique Furniture Exporter & Mathaniya Fiery Red Chillies",
        "famousBusinessType": "Handcrafted Sheesham & Reclaimed Wood Furniture, Iron Decor & Spices",
        "keySpecialities": [
          "Reclaimed Wood Industrial Furniture",
          "Wrought Iron Wall Art & Planters",
          "Mathaniya Pounded Red Chilli Powder",
          "Traditional Jodhpuri Bandhej Fabrics"
        ],
        "hubDescription": "Jodhpur is India’s foremost exporter of artisan wooden furniture, antiques, and architectural salvage."
      },
      {
        "id": "rj-bhilwara",
        "districtName": "Bhilwara Suiting & Synthetic Textile Capital",
        "stateName": "Rajasthan",
        "countryName": "India",
        "latitude": 25.3216,
        "longitude": 74.6416,
        "verified": true,
        "stockistCount": 520,
        "opportunityCount": 24,
        "categories": [
          "PV Suiting",
          "Denim Fabric",
          "Yarn Spinning",
          "Mica Mining"
        ],
        "availability": "high",
        "primaryMandi": "Bhilwara Textile Market (Bhopalganj)",
        "avgMargin": "22% - 30%",
        "famousFor": "Textile City of Rajasthan (Produces 70% of India’s Polyester-Viscose Blended Suiting - Mayur, BSL) & Denim",
        "famousBusinessType": "Polyester-Viscose Suiting, Denim Weaving & Synthetic Yarn",
        "keySpecialities": [
          "Polyester-Viscose Suiting Fabrics",
          "Cotton Denim Weaving",
          "Synthetic Blended Yarns",
          "Insulation Grade Mica Sheets"
        ],
        "hubDescription": "Bhilwara is India’s top suiting fabric cluster, weaving millions of meters of tailored suiting each month."
      },
      {
        "id": "rj-bikaner",
        "districtName": "Bikaner Bhujia, Namkeen & Wool Mart",
        "stateName": "Rajasthan",
        "countryName": "India",
        "latitude": 28.0229,
        "longitude": 73.3119,
        "verified": true,
        "stockistCount": 480,
        "opportunityCount": 22,
        "categories": [
          "Bikaneri Bhujia",
          "Rasgulla Sweets",
          "Carpet Wool",
          "Ceramic Clay"
        ],
        "availability": "high",
        "primaryMandi": "Kote Gate Wholesale Mart & Bikaner Wool Mandi",
        "avgMargin": "22% - 35%",
        "famousFor": "Bikaneri Bhujia (GI Tag - Moth Bean Crispy Snack), Bikaneri Rasgulla & Asia’s Largest Raw Wool Market",
        "famousBusinessType": "Bikaneri Bhujia & Namkeen Confectionery, Canned Sweets & Raw Carpet Wool",
        "keySpecialities": [
          "Bikaneri Moth-Flour Bhujia (GI)",
          "Canned Bikaneri Spongy Rasgullas",
          "Graded Raw Carpet Wool",
          "Ceramic China Clay & Ball Clay"
        ],
        "hubDescription": "Bikaner invented the globally loved crispy Bikaneri Bhujia, operating the largest raw carpet wool mandi in Asia."
      },
      {
        "id": "rj-kota",
        "districtName": "Kota Stone, Coaching & Doria Saree Hub",
        "stateName": "Rajasthan",
        "countryName": "India",
        "latitude": 25.2138,
        "longitude": 75.8648,
        "verified": true,
        "stockistCount": 410,
        "opportunityCount": 19,
        "categories": [
          "Kota Stone Flooring",
          "Kota Doria Sarees",
          "Fertilizers",
          "Coaching Supplies"
        ],
        "availability": "available",
        "primaryMandi": "Anantpura Kota Stone Industrial Zone & Kaithun Weaving Hub",
        "avgMargin": "22% - 32%",
        "famousFor": "Natural Green/Blue Kota Stone Flooring, Kota Doria Translucent Weave Sarees (GI Tag) & Chemical Fertilizers",
        "famousBusinessType": "Kota Stone Quarrying & Polishing, Handloom Doria Weaving & Agro Chemicals",
        "keySpecialities": [
          "Polished Natural Kota Stone Slabs",
          "Khat-Weave Kota Doria Silk Sarees",
          "Urea & Complex Fertilizers (CFCL)",
          "Student Hostel FMCG Supplies"
        ],
        "hubDescription": "Kota is synonymous with natural Kota limestone flooring and the world-famous translucent checkered Kota Doria saree."
      },
      {
        "id": "rj-udaipur",
        "districtName": "Udaipur White Marble & Zinc Mining Hub",
        "stateName": "Rajasthan",
        "countryName": "India",
        "latitude": 24.5854,
        "longitude": 73.7125,
        "verified": true,
        "stockistCount": 440,
        "opportunityCount": 20,
        "categories": [
          "Green & White Marble",
          "Zinc & Lead (HZL)",
          "Phosphate",
          "Luxury Tourism"
        ],
        "availability": "available",
        "primaryMandi": "Sukher Marble Industrial Area & Mewar APMC",
        "avgMargin": "24% - 36%",
        "famousFor": "City of Lakes, Green & White Marble Capital of India, Hindustan Zinc Mining HQs & Rock Phosphate",
        "famousBusinessType": "Marble Processing, Non-Ferrous Metals (Zinc/Lead) & Hospitality Retailing",
        "keySpecialities": [
          "Polished Green & Forest White Marble",
          "Refined Zinc & Lead Ingots",
          "Rock Phosphate Chemical Grade",
          "Heritage Hospitality Food Supplies"
        ],
        "hubDescription": "Udaipur is Asia’s marble hub at Sukher, mining and processing premium dimensional stone alongside global zinc giant HZL."
      },
      {
        "id": "rj-makrana-nagaur",
        "districtName": "Makrana Pure White Marble Capital",
        "stateName": "Rajasthan",
        "countryName": "India",
        "latitude": 27.0425,
        "longitude": 74.7247,
        "verified": true,
        "stockistCount": 360,
        "opportunityCount": 16,
        "categories": [
          "White Marble (Taj Mahal Stone)",
          "Methi (Fenugreek)",
          "Nagauri Cattle",
          "Tools"
        ],
        "availability": "available",
        "primaryMandi": "Makrana Marble Industrial Complex & Nagaur Krishi Mandi",
        "avgMargin": "25% - 42%",
        "famousFor": "World-Famous Makrana White Marble (Used to Build Taj Mahal & Victoria Memorial) & Nagauri Kasuri Methi (GI Tag)",
        "famousBusinessType": "Makrana Calcite Marble Quarrying & Polishing, Aromatic Fenugreek",
        "keySpecialities": [
          "Albeta & Dungri Makrana White Marble",
          "Pure Marble Sculptures & Mandirs",
          "Nagauri Dried Kasuri Methi (GI)",
          "Hand-Forged Agricultural Hand Tools"
        ],
        "hubDescription": "Makrana’s 98% calcite white marble built the Taj Mahal; it remains the world standard for royal architectural stone."
      },
      {
        "id": "rj-alwar",
        "districtName": "Alwar Milk Cake & Auto Corridor",
        "stateName": "Rajasthan",
        "countryName": "India",
        "latitude": 27.553,
        "longitude": 76.6346,
        "verified": true,
        "stockistCount": 380,
        "opportunityCount": 18,
        "categories": [
          "Milk Cake (Kalakand)",
          "Auto Components",
          "Mustard Seed & Oil",
          "Beer"
        ],
        "availability": "available",
        "primaryMandi": "MIA Industrial Area & Neemrana Japanese Investment Zone",
        "avgMargin": "22% - 30%",
        "famousFor": "Alwar Ka Mawa (Kalakand / Milk Cake Sweet), Neemrana Japanese Industrial Zone & High-Volume Mustard Oil",
        "famousBusinessType": "Dairy Kalakand Sweet, Auto Ancillaries & Mustard Seed Oil Extraction",
        "keySpecialities": [
          "Alwar Kalakand Milk Cake",
          "Japanese Auto Ancillary Electronics",
          "Kachi Ghani Mustard Oil",
          "Structural Steel Re-Rolling"
        ],
        "hubDescription": "Alwar bridges Delhi-Jaipur commerce with Neemrana’s multinational auto plants and famed dairy Kalakand sweets."
      },
      {
        "id": "rj-ajmer",
        "districtName": "Ajmer Dargah Tourism & Kishangarh Marble Mandi",
        "stateName": "Rajasthan",
        "countryName": "India",
        "latitude": 26.4499,
        "longitude": 74.6399,
        "verified": true,
        "stockistCount": 390,
        "opportunityCount": 17,
        "categories": [
          "Imported Italian Marble",
          "Granite",
          "Rose Products (Pushkar)",
          "Gotta Patti"
        ],
        "availability": "available",
        "primaryMandi": "Kishangarh Marble Mandi (Asia’s Largest) & Dargah Bazar",
        "avgMargin": "25% - 40%",
        "famousFor": "Kishangarh (Asia’s Largest Marble & Granite Trading Hub), Khwaja Gharib Nawaz Dargah & Pushkar Rose Gulkand",
        "famousBusinessType": "Imported Marble Slabs, Granite Polishing & Rose Extracts",
        "keySpecialities": [
          "Imported Italian Marble Slabs",
          "Indian Multi-Colour Granite",
          "Pushkar Pure Rose Water & Gulkand",
          "Gotta-Patti Traditional Embroidery"
        ],
        "hubDescription": "Ajmer’s satellite Kishangarh is Asia’s largest marble supermarket, displaying millions of tons of imported Italian marble."
      },
      {
        "id": "rj-pali",
        "districtName": "Pali Cotton Dyeing & Mehendi (Henna) Capital",
        "stateName": "Rajasthan",
        "countryName": "India",
        "latitude": 25.7711,
        "longitude": 73.3234,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 14,
        "categories": [
          "Sojat Mehendi",
          "Cotton Dyeing",
          "Synthetic Sarees",
          "Leather"
        ],
        "availability": "available",
        "primaryMandi": "Sojat Henna Krishi Mandi & Pali Punayata Industrial Area",
        "avgMargin": "24% - 35%",
        "famousFor": "Sojat City (Mehendi / Henna Capital of the World - GI Tag) & Cotton Textile Dyeing / Printing Mills",
        "famousBusinessType": "Natural Henna Powder Export, Cotton Fabric Dyeing & Processing",
        "keySpecialities": [
          "Sojat 100% Pure Natural Green Henna Powder",
          "Organic Herbal Hair Colors",
          "Printed Cotton Petticoat & Blouse Fabrics",
          "Synthetic Dyed Georgette"
        ],
        "hubDescription": "Pali’s Sojat region exports over 90% of India’s natural herbal henna (mehendi) across the globe."
      },
      {
        "id": "rj-sri-ganganagar",
        "districtName": "Sri Ganganagar Food Basket of Rajasthan",
        "stateName": "Rajasthan",
        "countryName": "India",
        "latitude": 29.9038,
        "longitude": 73.8772,
        "verified": true,
        "stockistCount": 290,
        "opportunityCount": 12,
        "categories": [
          "Kinnow Citrus",
          "Wheat & Mustard",
          "Cotton Ginning",
          "Barley"
        ],
        "availability": "available",
        "primaryMandi": "Sri Ganganagar Grain Mandi (Asia’s Large Grain Yard)",
        "avgMargin": "20% - 27%",
        "famousFor": "Food Basket of Rajasthan (Indira Gandhi Canal Greenery), Golden Kinnow Citrus Fruits & Massive Wheat Mandi",
        "famousBusinessType": "Kinnow Citrus Grading & Waxing, Grain Wholesale & Cotton Ginning",
        "keySpecialities": [
          "Juicy Kinnow Citrus Fruits",
          "Sharbati Wheat Grain",
          "Kachi Ghani Mustard Seeds",
          "Malt Grade Barley"
        ],
        "hubDescription": "Sri Ganganagar transforms desert sands into Punjab-like agro abundance, producing sweet Kinnow citrus fruits."
      },
      {
        "id": "rj-sikar",
        "districtName": "Sikar Shekhawati Frescoes & Onion Hub",
        "stateName": "Rajasthan",
        "countryName": "India",
        "latitude": 27.6094,
        "longitude": 75.1399,
        "verified": true,
        "stockistCount": 280,
        "opportunityCount": 12,
        "categories": [
          "Khatushyamji Souvenirs",
          "Red Onions",
          "Pulses",
          "Wooden Craft"
        ],
        "availability": "available",
        "primaryMandi": "Sikar Krishi Mandi & Khatushyamji Pilgrim Corridor",
        "avgMargin": "22% - 30%",
        "famousFor": "Shekhawati Painted Havelis, Khatushyamji Temple Pilgrimage Trade & High-Quality Red Onion Cultivation",
        "famousBusinessType": "Religious Pilgrim Goods, Red Onion Wholesale & Wooden Painted Craft",
        "keySpecialities": [
          "Pungent Red Onions",
          "Khatushyamji Ladoo & Souvenirs",
          "Painted Shekhawati Wooden Cabinets",
          "Moth Dal & Bajra Wholesale"
        ],
        "hubDescription": "Sikar is the gateway to Shekhawati’s painted havelis and holds huge spiritual retail traffic at Khatushyamji."
      }
    ]
  },
  {
    "id": "punjab",
    "name": "Punjab",
    "countryName": "India",
    "latitude": 31.1471,
    "longitude": 75.3412,
    "verifiedStockCount": 3650,
    "districtCount": 9,
    "totalDistributors": "11,800 Registered Stockists",
    "verifiedStockists": "3,650 Audited Wholesalers",
    "readinessScore": "97/100 (Agricultural & Woollen Powerhouse)",
    "commercialStatus": "Bicycle Capital of the World, Woollen Knitwear, Sports Goods, Tractors & Food Grains",
    "tradeCorridor": "Grand Trunk Road & Amritsar-Kolkata Industrial Corridor",
    "keySectors": [
      "Bicycles & Parts",
      "Woollen Knitwear",
      "Sports Goods",
      "Agricultural Machinery",
      "Wheat & Basmati Rice"
    ],
    "districts": [
      {
        "id": "pb-ludhiana",
        "districtName": "Ludhiana Manchester of India & Bicycle Capital",
        "stateName": "Punjab",
        "countryName": "India",
        "latitude": 30.901,
        "longitude": 75.8573,
        "verified": true,
        "stockistCount": 1350,
        "opportunityCount": 48,
        "categories": [
          "Bicycles & Parts",
          "Woollen Knitwear",
          "Sewing Machines",
          "Auto Parts"
        ],
        "availability": "high",
        "primaryMandi": "Focal Point Industrial Estate & Akal Market (Woollen)",
        "avgMargin": "24% - 36%",
        "famousFor": "Bicycle Capital of the World (Hero, Avon - 75% of India’s Bicycles), Woollen Knitwear (Oswal, Monte Carlo) & Sewing Machines",
        "famousBusinessType": "Bicycle Manufacturing, Woollen Hosiery & Auto Components",
        "keySpecialities": [
          "Complete Bicycles & Precision Components",
          "Woollen Sweaters, Cardigans & Thermal Wear",
          "Domestic & Industrial Sewing Machines",
          "Forged Hand Tools & Fasteners"
        ],
        "hubDescription": "Ludhiana is Punjab’s industrial locomotive, producing most of India’s bicycles and warm woollen sweaters."
      },
      {
        "id": "pb-jalandhar",
        "districtName": "Jalandhar Sports Goods & Hand Tools Capital",
        "stateName": "Punjab",
        "countryName": "India",
        "latitude": 31.326,
        "longitude": 75.5762,
        "verified": true,
        "stockistCount": 780,
        "opportunityCount": 32,
        "categories": [
          "Leather Sports Goods",
          "Forged Hand Tools",
          "Pipe Fittings",
          "Rubber"
        ],
        "availability": "high",
        "primaryMandi": "Basti Nau Sports Market & Leather Complex",
        "avgMargin": "24% - 38%",
        "famousFor": "Sports Goods Capital of India (FIFA World Cup Quality Footballs, Cricket Gear) & Forged Hand Tools / Pipe Fittings",
        "famousBusinessType": "Sports Gear Manufacturing, Drop-Forged Hand Tools & Sanitary Fittings",
        "keySpecialities": [
          "Hand-Stitched Leather Footballs & Rugby Balls",
          "Cricket Batting Gloves & Protective Equipment",
          "Drop-Forged Spanners & Pliers",
          "Malleable Iron Pipe Fittings (Leader)"
        ],
        "hubDescription": "Jalandhar supplies premier sports gear to global sports federations alongside forged industrial spanners and wrenches."
      },
      {
        "id": "pb-amritsar",
        "districtName": "Amritsar Golden City, Woollen Shawls & Papad Hub",
        "stateName": "Punjab",
        "countryName": "India",
        "latitude": 31.634,
        "longitude": 74.8723,
        "verified": true,
        "stockistCount": 820,
        "opportunityCount": 34,
        "categories": [
          "Woollen Shawls",
          "Papad & Warian",
          "Basmati Rice",
          "Gold Jewellery"
        ],
        "availability": "high",
        "primaryMandi": "Guru Bazar Wholesale Jewellery & Majith Mandi",
        "avgMargin": "25% - 40%",
        "famousFor": "Golden Temple Tourism, Amritsari Woollen Shawls & Stoles, Amritsari Papads/Warian & World-Class 1121 Basmati Rice",
        "famousBusinessType": "Woollen Shawls, Traditional Papad/Wari Confectionery & Premium Basmati Rice",
        "keySpecialities": [
          "Jacquard & Jamawar Woollen Shawls",
          "Spicy Black Pepper Amritsari Papads",
          "Amritsari Urad Dal Warian",
          "Aged 1121 Long-Grain Basmati Rice"
        ],
        "hubDescription": "Amritsar is Punjab’s spiritual and culinary capital, trading millions in fine woollen stoles, spicy papads, and basmati grain."
      },
      {
        "id": "pb-mohali",
        "districtName": "Mohali (SAS Nagar) IT & Biotech Hub",
        "stateName": "Punjab",
        "countryName": "India",
        "latitude": 30.7046,
        "longitude": 76.7179,
        "verified": true,
        "stockistCount": 420,
        "opportunityCount": 22,
        "categories": [
          "Pharmaceuticals",
          "IT Software",
          "Tractors (Swaraj)",
          "Electronics"
        ],
        "availability": "high",
        "primaryMandi": "Mohali Industrial Area Phases I-IX & Quark City",
        "avgMargin": "22% - 30%",
        "famousFor": "IT Software & Startup Hub of Punjab, Swaraj Tractors Manufacturing & Formulation Pharmaceuticals",
        "famousBusinessType": "Agricultural Tractors, Pharmaceutical Formulations & IT Technology",
        "keySpecialities": [
          "Swaraj Agricultural Tractors",
          "Bulk Generic Pharma Injections",
          "Enterprise Software Solutions",
          "Precision Electronic Meters"
        ],
        "hubDescription": "Mohali represents modern Punjab, manufacturing farm tractors alongside fast-growing biotech and IT parks."
      },
      {
        "id": "pb-patiala",
        "districtName": "Patiala Royal Shahi Heritage, Paranda & Salwar Hub",
        "stateName": "Punjab",
        "countryName": "India",
        "latitude": 30.3398,
        "longitude": 76.3869,
        "verified": true,
        "stockistCount": 360,
        "opportunityCount": 16,
        "categories": [
          "Patiala Salwar",
          "Tilla Juttis",
          "Paranda",
          "Agro Equipment"
        ],
        "availability": "available",
        "primaryMandi": "AC Market & Nabha Gate Wholesale Mart",
        "avgMargin": "25% - 40%",
        "famousFor": "Patiala Shahi Salwar Suits, Hand-Embroidered Tilla Juttis (GI Tag), Colorful Paranda Hair Tassels & Diesel Loco Spares",
        "famousBusinessType": "Traditional Punjabi Apparel, Embroidered Footwear & Combine Harvesters",
        "keySpecialities": [
          "Pleated Patiala Shahi Salwar Suits",
          "Pure Leather Gold-Thread Tilla Juttis",
          "Hand-Crafted Silk Parandas",
          "Combine Harvester Farm Equipment (Preet)"
        ],
        "hubDescription": "Patiala is the royal guardian of Punjabi ethnic fashion, crafting iconic leather juttis and flowing salwar suits."
      },
      {
        "id": "pb-bathinda",
        "districtName": "Bathinda Cotton Belt & Petrochemical Refinery",
        "stateName": "Punjab",
        "countryName": "India",
        "latitude": 30.211,
        "longitude": 74.9455,
        "verified": true,
        "stockistCount": 340,
        "opportunityCount": 15,
        "categories": [
          "Raw Cotton",
          "HMEL Petroleum",
          "Fertilizer Urea",
          "Thermal Power"
        ],
        "availability": "available",
        "primaryMandi": "Bathinda New Cotton Mandi & HMEL Industrial Zone",
        "avgMargin": "20% - 28%",
        "famousFor": "Heart of the Malwa Cotton Belt (White Gold), HMEL Guru Gobind Singh Oil Refinery & National Fertilizers (NFL)",
        "famousBusinessType": "Cotton Bales & Ginning, Petroleum Refining & Chemical Fertilizer",
        "keySpecialities": [
          "Raw Cotton Bales (Malwa White Gold)",
          "Polypropylene Polymers (HMEL)",
          "Neem-Coated Urea Fertilizer",
          "Wheat Grain Wholesaling"
        ],
        "hubDescription": "Bathinda anchors Punjab’s Malwa cotton basin, powering the north with the giant HMEL petrochemical refinery."
      },
      {
        "id": "pb-khanna",
        "districtName": "Khanna Asia’s Largest Grain Market",
        "stateName": "Punjab",
        "countryName": "India",
        "latitude": 30.7071,
        "longitude": 76.2167,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 14,
        "categories": [
          "Wheat Grain",
          "Paddy Rice",
          "Cattle Feed",
          "Agricultural Tools"
        ],
        "availability": "available",
        "primaryMandi": "Khanna Dana Mandi (Asia’s Largest Grain Market)",
        "avgMargin": "20% - 26%",
        "famousFor": "Asia’s Largest Grain Market (Dana Mandi - Procures Millions of Tons of Wheat and Paddy) & Cattle Feed Production",
        "famousBusinessType": "Grain Commission Trading, Rice Shelling & Compounded Cattle Feed",
        "keySpecialities": [
          "Certified Food-Corporation Grade Wheat",
          "Non-Basmati & Basmati Paddy Rice",
          "Balanced Cattle Feed Pellets",
          "Oilseed Mustard Cake"
        ],
        "hubDescription": "Khanna runs the largest grain market in Asia, channeling millions of metric tons of wheat into India’s public food system."
      },
      {
        "id": "pb-pathankot",
        "districtName": "Pathankot Transit Nexus & Stone Crusher Hub",
        "stateName": "Punjab",
        "countryName": "India",
        "latitude": 32.2643,
        "longitude": 75.552,
        "verified": true,
        "stockistCount": 260,
        "opportunityCount": 11,
        "categories": [
          "Riverbed Aggregate",
          "Timber",
          "Hill Tourism Supplies",
          "Litchi"
        ],
        "availability": "available",
        "primaryMandi": "Pathankot Chakki Riverbed Stone Yard & Fruit Mandi",
        "avgMargin": "20% - 28%",
        "famousFor": "Gateway to Jammu & Kashmir and Himachal Pradesh, Riverbed Stone Aggregates & Delicious Dehradun Litchis",
        "famousBusinessType": "Stone Crushing Construction Materials, Hill Transit Logistics & Fruit Mandis",
        "keySpecialities": [
          "Chakki Riverbed Grit & Stone Aggregates",
          "Fresh Summer Litchis",
          "Hill Route Commercial Supplies",
          "Plywood & Pine Timber Trading"
        ],
        "hubDescription": "Pathankot is the vital tripartite commercial gate connecting Punjab, Himachal Pradesh, and Jammu & Kashmir."
      },
      {
        "id": "pb-hoshiarpur",
        "districtName": "Hoshiarpur Wooden Inlay & Citrus Hub",
        "stateName": "Punjab",
        "countryName": "India",
        "latitude": 31.5273,
        "longitude": 75.9149,
        "verified": true,
        "stockistCount": 240,
        "opportunityCount": 10,
        "categories": [
          "Inlay Wooden Craft",
          "Kinnow",
          "Tractors (Sonalika)",
          "Pressure Cookers"
        ],
        "availability": "available",
        "primaryMandi": "Hoshiarpur Inlay Artisans Center & Sonalika City",
        "avgMargin": "22% - 32%",
        "famousFor": "Intricate Acrylic / Bone Inlay Woodcraft (GI Candidate), Sonalika International Tractors & Kinnow Orchards",
        "famousBusinessType": "Inlaid Wooden Furniture, Agricultural Tractor Assembly & Citrus Packing",
        "keySpecialities": [
          "Inlaid Wooden Boxes, Screens & Trays",
          "Sonalika Heavy Farm Tractors",
          "Fresh Waxed Kinnow Citrus",
          "Aluminum Pressure Cookers (Hawkins)"
        ],
        "hubDescription": "Hoshiarpur preserves master wooden inlay traditions while assembling Sonalika tractors exported worldwide."
      }
    ]
  },
  {
    "id": "haryana",
    "name": "Haryana",
    "countryName": "India",
    "latitude": 29.0588,
    "longitude": 76.0856,
    "verifiedStockCount": 3740,
    "districtCount": 10,
    "totalDistributors": "12,900 Registered Wholesalers",
    "verifiedStockists": "3,740 Audited Stockists",
    "readinessScore": "98/100 (Automotive, Scientific & Textile Titan)",
    "commercialStatus": "Automobile Capital, City of Weavers, Scientific Instruments, Plywood & Basmati Rice",
    "tradeCorridor": "Kundli-Manesar-Palwal (KMP) Expressway & Delhi-Chandigarh NH-44 Corridor",
    "keySectors": [
      "Automobiles & Tractors",
      "Home Textiles & Shoddy Yarn",
      "Scientific Instruments",
      "Plywood",
      "Sanitaryware"
    ],
    "districts": [
      {
        "id": "hr-panipat",
        "districtName": "Panipat City of Weavers & Shoddy Yarn Capital",
        "stateName": "Haryana",
        "countryName": "India",
        "latitude": 29.3909,
        "longitude": 76.9635,
        "verified": true,
        "stockistCount": 920,
        "opportunityCount": 38,
        "categories": [
          "Blankets",
          "Recycled Shoddy Yarn",
          "Bed Linen",
          "Carpets & Durries"
        ],
        "availability": "high",
        "primaryMandi": "Sector 25 & 29 Industrial Estate & Old Shoddy Mandi",
        "avgMargin": "24% - 38%",
        "famousFor": "Textile City of Weavers, World’s Cast-off Clothing Recycler (Shoddy Yarn), Mink Blankets (85% of India) & Handlooms",
        "famousBusinessType": "Recycled Shoddy Woollen Yarn, Mink Blankets & Export Home Furnishings",
        "keySpecialities": [
          "Mink & Polar Fleece Blankets",
          "Recycled Acrylic & Woollen Shoddy Yarn",
          "Jacquard Cotton Bedcovers",
          "Tufted Bath Mats & Floor Durries"
        ],
        "hubDescription": "Panipat is celebrated as the \"City of Weavers\", recycling the world’s discarded clothing into warm blankets and carpets."
      },
      {
        "id": "hr-ambala",
        "districtName": "Ambala Scientific City & Bridal Apparel Mart",
        "stateName": "Haryana",
        "countryName": "India",
        "latitude": 30.3782,
        "longitude": 76.7767,
        "verified": true,
        "stockistCount": 610,
        "opportunityCount": 26,
        "categories": [
          "Scientific Instruments",
          "Microscopes",
          "Bridal Sarees",
          "Mixer Grinders"
        ],
        "availability": "high",
        "primaryMandi": "Scientific Instruments Industrial Estate & Cloth Market Ambala City",
        "avgMargin": "26% - 42%",
        "famousFor": "Scientific City of India (Produces 40% of India’s Microscopes & Laboratory Equipment) & Massive Ambala Cloth Market",
        "famousBusinessType": "Scientific Laboratory Equipment, Educational Physics Apparatus & Bridal Textiles",
        "keySpecialities": [
          "Student & Research Optical Microscopes",
          "Glass Laboratory Pipettes & Flasks",
          "Electronic Physics Balances",
          "Wholesale Bridal Lehengas & Sarees"
        ],
        "hubDescription": "Ambala supplies school and university science laboratories across India and Africa with precision microscopes and apparatus."
      },
      {
        "id": "hr-yamunanagar",
        "districtName": "Yamunanagar Plywood & Sugar Capital",
        "stateName": "Haryana",
        "countryName": "India",
        "latitude": 30.129,
        "longitude": 77.2674,
        "verified": true,
        "stockistCount": 540,
        "opportunityCount": 24,
        "categories": [
          "Plywood & Blockboard",
          "Flush Doors",
          "Poplar Timber",
          "Paper (Ballarpur)"
        ],
        "availability": "high",
        "primaryMandi": "Yamunanagar Timber Market (Asia’s Largest Poplar Wood Mandi)",
        "avgMargin": "24% - 35%",
        "famousFor": "Plywood Capital of India (Supplies over 55% of India’s Plywood, Shuttering Ply & Flush Doors) & Saraswati Sugar Mills",
        "famousBusinessType": "Commercial & Marine Plywood, Shuttering Ply & Sugar Milling",
        "keySpecialities": [
          "Commercial & Marine Grade Plywood",
          "Calibrated Shuttering Plywood",
          "Solid Poplar Flush Doors",
          "BILT Specialty Paper Products"
        ],
        "hubDescription": "Yamunanagar operates the largest timber market in Asia, manufacturing over half of India’s architectural plywood."
      },
      {
        "id": "hr-faridabad",
        "districtName": "Faridabad Industrial Engine & Tractor Hub",
        "stateName": "Haryana",
        "countryName": "India",
        "latitude": 28.4089,
        "longitude": 77.3178,
        "verified": true,
        "stockistCount": 680,
        "opportunityCount": 28,
        "categories": [
          "Tractors (Escorts)",
          "Refrigerators (Whirlpool)",
          "Rubber",
          "Auto Components"
        ],
        "availability": "high",
        "primaryMandi": "Sector 6, 24 & 25 Industrial Area",
        "avgMargin": "22% - 30%",
        "famousFor": "Oldest Industrial City of Haryana, Escorts Kubota Tractors, Home Appliances (Whirlpool) & Henna/Rubber Products",
        "famousBusinessType": "Agricultural Tractors, Heavy Engineering & Consumer Appliances",
        "keySpecialities": [
          "Farmtrac & Powertrac Tractors",
          "Frost-Free Domestic Refrigerators",
          "Industrial Switchgear & Relays",
          "Automotive Rubber Belts & Hoses"
        ],
        "hubDescription": "Faridabad is a powerhouse of North Indian manufacturing, assembling tractors, refrigerators, and heavy machinery."
      },
      {
        "id": "hr-karnal",
        "districtName": "Karnal Rice City of India & Dairy Research",
        "stateName": "Haryana",
        "countryName": "India",
        "latitude": 29.6857,
        "longitude": 76.9905,
        "verified": true,
        "stockistCount": 420,
        "opportunityCount": 20,
        "categories": [
          "1121 Basmati Rice",
          "Dairy Culture (NDRI)",
          "Agricultural Implements",
          "Pharma"
        ],
        "availability": "high",
        "primaryMandi": "Karnal New Grain Market & Taraori Basmati Belt",
        "avgMargin": "20% - 28%",
        "famousFor": "Rice Bowl of India (World-Famous Taraori Basmati Rice), National Dairy Research Institute (NDRI) & Agricultural Implements",
        "famousBusinessType": "Basmati Rice Milling & Export, Dairy Science Technology & Farm Machinery",
        "keySpecialities": [
          "Traditional & 1121 Pusa Basmati Rice",
          "Parboiled Golden Sella Rice",
          "Dairy Probiotic Cultures & Ghee",
          "Rotavators & Laser Land Levellers"
        ],
        "hubDescription": "Karnal and adjoining Taraori mill the world’s most aromatic long-grain basmati rice, shipped directly to Middle East and Western ports."
      },
      {
        "id": "hr-rohtak",
        "districtName": "Rohtak Cloth Market & Footwear Mega-Park",
        "stateName": "Haryana",
        "countryName": "India",
        "latitude": 28.8955,
        "longitude": 76.6066,
        "verified": true,
        "stockistCount": 390,
        "opportunityCount": 18,
        "categories": [
          "Wholesale Textiles",
          "Footwear Mega-Park",
          "Rewari Sweets",
          "Dairy"
        ],
        "availability": "available",
        "primaryMandi": "Shori Cloth Market (Asia’s Largest Cloth Market) & IMT Rohtak",
        "avgMargin": "24% - 36%",
        "famousFor": "Shori Cloth Market (One of Asia’s Largest Wholesale Textile Markets), IMT Footwear Park & Famous Rohtak Rewari / Gajak",
        "famousBusinessType": "Wholesale Fabric Trading, Sport Footwear & Winter Sesame Sweets",
        "keySpecialities": [
          "Cotton Cambric & Voile Dress Materials",
          "Sports Shoes & PU Footwear",
          "Crispy Sesame Rewari & Khasta Gajak",
          "Commercial Dairy Ghee & Paneer"
        ],
        "hubDescription": "Rohtak’s Shori Cloth Market draws retail buyers from across North India, alongside modern shoe assembly at IMT."
      },
      {
        "id": "hr-sonipat",
        "districtName": "Sonipat Stainless Steel & Food Processing Corridor",
        "stateName": "Haryana",
        "countryName": "India",
        "latitude": 28.9931,
        "longitude": 77.0151,
        "verified": true,
        "stockistCount": 440,
        "opportunityCount": 21,
        "categories": [
          "Stainless Steel Utensils",
          "Cold Chain Food",
          "Yakult Probiotics",
          "Education"
        ],
        "availability": "high",
        "primaryMandi": "Kundli Industrial Area & Rai Food Park",
        "avgMargin": "22% - 30%",
        "famousFor": "Kundli Stainless Steel Utensils (Supplies 60% of North India), Rai Mega Food Park (Yakult) & Murthal Dhabas",
        "famousBusinessType": "Stainless Steel Kitchenware, Packaged Food Processing & Industrial Corridors",
        "keySpecialities": [
          "Stainless Steel Dinner Sets & Cookware",
          "Probiotic Health Drinks",
          "Frozen Potato Fries & Patties",
          "Automotive Cable Assemblies"
        ],
        "hubDescription": "Sonipat’s Kundli-Rai corridor feeds the capital with stainless steel kitchenware, packaged snacks, and logistics terminals."
      },
      {
        "id": "hr-hisar",
        "districtName": "Hisar Steel City & Agricultural University",
        "stateName": "Haryana",
        "countryName": "India",
        "latitude": 29.1492,
        "longitude": 75.7217,
        "verified": true,
        "stockistCount": 360,
        "opportunityCount": 16,
        "categories": [
          "Stainless Steel (Jindal)",
          "Pipes & Tubes",
          "Cotton",
          "Veterinary"
        ],
        "availability": "available",
        "primaryMandi": "Hisar Steel Industrial Estate & New Grain Market",
        "avgMargin": "20% - 28%",
        "famousFor": "Steel City of Haryana (Birthplace of Jindal Stainless Steel - JSL), Pipes/Tubes & Chaudhary Charan Singh HAU University",
        "famousBusinessType": "Stainless Steel Coils, ERW Steel Tubes & Cotton Ginning",
        "keySpecialities": [
          "Jindal Stainless Steel Coils & Slabs",
          "Galvanized ERW Steel Pipes",
          "Cotton Ginning Bales",
          "Certified Hybrid Mustard Seeds"
        ],
        "hubDescription": "Hisar is India’s stainless steel manufacturing center, founded by O.P. Jindal, producing specialized pipe and tube grades."
      },
      {
        "id": "hr-bahadurgarh",
        "districtName": "Bahadurgarh Gateway Footwear & Sanitaryware City",
        "stateName": "Haryana",
        "countryName": "India",
        "latitude": 28.6925,
        "longitude": 76.924,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 15,
        "categories": [
          "Footwear (Relaxo)",
          "Sanitaryware (Hindware)",
          "Glass",
          "Hardware"
        ],
        "availability": "available",
        "primaryMandi": "MIE Modern Industrial Estate & Footwear Park",
        "avgMargin": "22% - 32%",
        "famousFor": "Footwear Hub of North India (Relaxo, Action, Sparx), Hindware Ceramic Sanitaryware & Heavy Engineering",
        "famousBusinessType": "EVA/PU Footwear Manufacturing, Vitreous Sanitaryware & Glazing",
        "keySpecialities": [
          "Hawai Chappals & Running Shoes",
          "Ceramic Vitreous Sanitaryware Washbasins",
          "Architectural Glass Processing",
          "Industrial Springs & Fasteners"
        ],
        "hubDescription": "Bahadurgarh is known as the \"Gateway to Haryana\", crafting millions of pairs of everyday footwear and sanitary fixtures."
      },
      {
        "id": "hr-rewari",
        "districtName": "Rewari Brass Heritage & Bawal Auto SEZ",
        "stateName": "Haryana",
        "countryName": "India",
        "latitude": 28.1928,
        "longitude": 76.6239,
        "verified": true,
        "stockistCount": 280,
        "opportunityCount": 13,
        "categories": [
          "Brass Utensils",
          "Auto Ancillaries (Bawal)",
          "Tilor Footwear",
          "Electronics"
        ],
        "availability": "available",
        "primaryMandi": "Bawal Industrial Growth Centre & Rewari Brass Bazar",
        "avgMargin": "22% - 32%",
        "famousFor": "Pital Nagri of Haryana (Traditional Hand-Hammered Brass Utensils), Bawal Industrial Auto SEZ & Rewari Steam Loco Shed",
        "famousBusinessType": "Hand-Hammered Brass Utensils, High-Tech Auto Ancillaries & Electronics",
        "keySpecialities": [
          "Hand-Hammered Brass Kadas & Degs",
          "Automotive Shock Absorbers & Brakes",
          "Industrial Plastic Injection Moulds",
          "Crispy Tilor Footwear"
        ],
        "hubDescription": "Rewari harmonizes traditional hand-hammered brass vessels with cutting-edge Japanese automotive factories at Bawal."
      }
    ]
  },
  {
    "id": "jharkhand",
    "name": "Jharkhand",
    "countryName": "India",
    "latitude": 23.6102,
    "longitude": 85.2799,
    "verifiedStockCount": 2980,
    "districtCount": 6,
    "totalDistributors": "8,400 Registered Wholesalers",
    "verifiedStockists": "2,980 Verified Stockists",
    "readinessScore": "95/100 (Mineral & Heavy Industrial Powerhouse)",
    "commercialStatus": "Steel City, Coal Capital, Heavy Engineering & Mineral Wealth",
    "tradeCorridor": "Golden Quadrilateral NH-19 & Eastern Freight Artery",
    "keySectors": [
      "Tata Steel & Auto Parts",
      "Coking Coal Mining",
      "Heavy Engineering",
      "Mica & Minerals",
      "Silk"
    ],
    "districts": [
      {
        "id": "jh-jamshedpur",
        "districtName": "Jamshedpur Steel City of India",
        "stateName": "Jharkhand",
        "countryName": "India",
        "latitude": 22.8046,
        "longitude": 86.2029,
        "verified": true,
        "stockistCount": 920,
        "opportunityCount": 36,
        "categories": [
          "Tata Steel",
          "Tata Motors Commercial Vehicles",
          "Auto Ancillaries",
          "Wire Ropes"
        ],
        "availability": "high",
        "primaryMandi": "Adityapur Industrial Area (Asia’s Largest Auto Ancillary Cluster)",
        "avgMargin": "22% - 30%",
        "famousFor": "Steel City of India (First Planned Industrial City by Jamsetji Tata), Tata Steel, Tata Motors Trucks & Adityapur Industrial Zone",
        "famousBusinessType": "Integrated Steel Manufacturing, Medium & Heavy Commercial Vehicles & Auto Ancillaries",
        "keySpecialities": [
          "Automotive High-Tensile Steel Sheets",
          "Heavy Commercial Truck Chassis",
          "Wire Ropes & Fasteners",
          "Drop-Forged Automotive Components"
        ],
        "hubDescription": "Jamshedpur is the pioneer of modern Indian heavy industry, home to Tata Steel and the massive Adityapur auto-components cluster."
      },
      {
        "id": "jh-dhanbad",
        "districtName": "Dhanbad Coal Capital of India",
        "stateName": "Jharkhand",
        "countryName": "India",
        "latitude": 23.7957,
        "longitude": 86.4304,
        "verified": true,
        "stockistCount": 620,
        "opportunityCount": 24,
        "categories": [
          "Coking Coal",
          "Mining Machinery",
          "Explosives",
          "BCCL Power"
        ],
        "availability": "high",
        "primaryMandi": "BCCL Headquarters & Jharia Coalfields Commercial Hub",
        "avgMargin": "20% - 28%",
        "famousFor": "Coal Capital of India (BCCL / Jharia Coalfields - Major Source of India’s Metallurgical Coking Coal) & IIT ISM Dhanbad",
        "famousBusinessType": "Prime Coking Coal Extraction, Underground Mining Equipment & Heavy Explosives",
        "keySpecialities": [
          "Washed Coking Coal for Blast Furnaces",
          "Mining Drilling Machinery Spares",
          "Industrial Coal Briquettes",
          "Heavy Earthmoving Machinery (HEMM) Spares"
        ],
        "hubDescription": "Dhanbad fuels India’s steel furnaces with metallurgical coking coal from the storied Jharia basin."
      },
      {
        "id": "jh-ranchi",
        "districtName": "Ranchi Capital City & Heavy Machine Tools",
        "stateName": "Jharkhand",
        "countryName": "India",
        "latitude": 23.3441,
        "longitude": 85.3096,
        "verified": true,
        "stockistCount": 780,
        "opportunityCount": 28,
        "categories": [
          "Heavy Engineering (HEC)",
          "Lac Processing",
          "Tussar Silk",
          "Agro Vegetables"
        ],
        "availability": "high",
        "primaryMandi": "Tupudana Industrial Area & Daily Market Wholesale Mart",
        "avgMargin": "22% - 32%",
        "famousFor": "City of Waterfalls, Heavy Engineering Corporation (Mother of All Industries - HEC), Natural Lac Processing & Tussar Silk",
        "famousBusinessType": "Heavy Industrial Castings, Natural Lac Resins & Tribal Tussar Handlooms",
        "keySpecialities": [
          "Heavy Steel Plant Casting Equipment (HEC)",
          "Natural Shellac & Button Lac (60% of India)",
          "Kuchai Organic Tussar Silk Sarees (GI)",
          "Seasonal Off-Season Vegetables"
        ],
        "hubDescription": "Ranchi manufactures heavy foundry equipment for ISRO space launchers and steel plants, alongside world-famous natural shellac."
      },
      {
        "id": "jh-bokaro",
        "districtName": "Bokaro Steel City & Chemical Fertilizers",
        "stateName": "Jharkhand",
        "countryName": "India",
        "latitude": 23.6693,
        "longitude": 86.1511,
        "verified": true,
        "stockistCount": 480,
        "opportunityCount": 18,
        "categories": [
          "SAIL Bokaro Steel",
          "Cement",
          "Refractory Bricks",
          "Electro-Steel"
        ],
        "availability": "available",
        "primaryMandi": "Bokaro Industrial Area Development Authority (BIADA)",
        "avgMargin": "20% - 28%",
        "famousFor": "SAIL Bokaro Steel Plant (India’s 1st Indigenous Major Steel Plant producing Hot Rolled and Cold Rolled Coils)",
        "famousBusinessType": "Flat Steel Product Rolling, Refractory Materials & Portland Slag Cement",
        "keySpecialities": [
          "Hot Rolled & Cold Rolled Steel Coils",
          "Galvanized Corrugated Plain Sheets",
          "Blast Furnace Slag Cement (Dalmia)",
          "Coal Tar Pitch Chemicals"
        ],
        "hubDescription": "Bokaro supplies flat steel coils and galvanized metal sheets to national automotive, pipe, and container manufacturers."
      },
      {
        "id": "jh-deoghar",
        "districtName": "Deoghar Baidyanath Dham & Peda Sweet Hub",
        "stateName": "Jharkhand",
        "countryName": "India",
        "latitude": 24.4826,
        "longitude": 86.7029,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 14,
        "categories": [
          "Deoghar Peda",
          "Baidyanath Pilgrim Trade",
          "Lac Crafts",
          "Plastics"
        ],
        "availability": "available",
        "primaryMandi": "Tower Chowk Market & Baidyanath Dham Corridor",
        "avgMargin": "24% - 35%",
        "famousFor": "Baba Baidyanath Jyotirlinga (Shravani Mela Pilgrimage), World-Famous Deoghar Khoya Peda & Deoghar Plastic Park",
        "famousBusinessType": "Pilgrim Hospitality Services, Roasted Khoya Peda Sweets & Plastic Extrusions",
        "keySpecialities": [
          "Caramelized Khoya Deoghar Peda (GI Candidate)",
          "Brass Water Canisters (Kanwar Supplies)",
          "Plastic Household Mouldings",
          "Lac Bangles & Tribal Crafts"
        ],
        "hubDescription": "Deoghar draws millions of pilgrims during the sacred Shravani Mela, famous for its slow-caramelized roasted khoya pedas."
      },
      {
        "id": "jh-hazaribagh",
        "districtName": "Hazaribagh Sohrai Art & Mineral Belt",
        "stateName": "Jharkhand",
        "countryName": "India",
        "latitude": 23.9925,
        "longitude": 85.3637,
        "verified": true,
        "stockistCount": 260,
        "opportunityCount": 12,
        "categories": [
          "Sohrai Khovar Painting (GI)",
          "Coal Mines (NTPC)",
          "Mica",
          "Agro Grains"
        ],
        "availability": "available",
        "primaryMandi": "Kolkata-Ranchi Highway Mart & Demotand Industrial Area",
        "avgMargin": "22% - 32%",
        "famousFor": "Sohrai and Khovar Mural Painting (GI Tag - Indigenous Mud Wall Art) & NTPC Pakri Barwadih Captive Coal Mining",
        "famousBusinessType": "Indigenous Tribal Wall Art Products, Captive Coal Extraction & Agriculture",
        "keySpecialities": [
          "Authentic Sohrai-Khovar Art Prints & Canvas (GI)",
          "Thermal Grade Energy Coal",
          "Organic Paddy & Vegetables",
          "Handmade Earthen Pottery"
        ],
        "hubDescription": "Hazaribagh preserves ancient tribal mural art (Sohrai Khovar) alongside rich mineral coal and forest wealth."
      }
    ]
  },
  {
    "id": "chhattisgarh",
    "name": "Chhattisgarh",
    "countryName": "India",
    "latitude": 21.2787,
    "longitude": 81.8661,
    "verifiedStockCount": 3150,
    "districtCount": 6,
    "totalDistributors": "8,800 Registered Stockists",
    "verifiedStockists": "3,150 Audited Wholesalers",
    "readinessScore": "96/100 (Steel, Power & Rice Bowl)",
    "commercialStatus": "Rice Bowl of Central India, Bhilai Rail Steel, Sponge Iron & Power Capital",
    "tradeCorridor": "Mumbai-Howrah Railway Corridor & Raipur-Visakhapatnam Economic Corridor",
    "keySectors": [
      "Heavy Rail Steel",
      "Sponge Iron & Re-rolling",
      "Paddy & Poha Milling",
      "Aluminium (BALCO)",
      "Forest Kosa Silk"
    ],
    "districts": [
      {
        "id": "cg-raipur",
        "districtName": "Raipur Commercial Capital & Sponge Iron Hub",
        "stateName": "Chhattisgarh",
        "countryName": "India",
        "latitude": 21.2514,
        "longitude": 81.6296,
        "verified": true,
        "stockistCount": 1100,
        "opportunityCount": 38,
        "categories": [
          "Sponge Iron & Steel",
          "Rice & Poha Milling",
          "Gold Jewellery",
          "Plywood"
        ],
        "availability": "high",
        "primaryMandi": "Urla & Siltara Industrial Complexes & Pandri Wholesale Cloth Market",
        "avgMargin": "22% - 30%",
        "famousFor": "Sponge Iron Capital of India (Over 100 Secondary Steel Rolling Mills), Poha / Rice Milling & Pandri Wholesale Market",
        "famousBusinessType": "Sponge Iron Billets, Flattened Rice (Poha) Processing & Wholesale Cloth",
        "keySpecialities": [
          "Sponge Iron & TMT Steel Re-rolled Bars",
          "Flattened Rice (Poha) & Murmura",
          "Basmati & Non-Basmati Milled Rice",
          "Gold Bullion & Ornaments (Golbazar)"
        ],
        "hubDescription": "Raipur is Central India’s commercial dynamo, turning iron ore into steel rebars and feeding the nation with poha."
      },
      {
        "id": "cg-bhilai-durg",
        "districtName": "Bhilai Steel Capital of India",
        "stateName": "Chhattisgarh",
        "countryName": "India",
        "latitude": 21.1938,
        "longitude": 81.3509,
        "verified": true,
        "stockistCount": 780,
        "opportunityCount": 28,
        "categories": [
          "SAIL Bhilai Steel (Rails)",
          "Heavy Engineering",
          "Refractory Materials",
          "Cement (ACC)"
        ],
        "availability": "high",
        "primaryMandi": "Bhilai Steel Plant (SAIL) Complex & Borai Industrial Area",
        "avgMargin": "20% - 28%",
        "famousFor": "SAIL Bhilai Steel Plant (Eleven-Time Prime Minister’s Trophy Winner - Sole Supplier of World-Class Long Rails to Indian Railways)",
        "famousBusinessType": "Heavy Railway Steel Rails, Structural Steel Sections & Heavy Fabrication",
        "keySpecialities": [
          "260-Meter Long Welded Railway Steel Rails",
          "Heavy Channels, Angles & Joists",
          "Blast Furnace Refractory Linings",
          "Industrial Slag Cement (ACC Jamul)"
        ],
        "hubDescription": "Bhilai produces 100% of the heavy steel rails carrying trains across the Indian Railways network."
      },
      {
        "id": "cg-bilaspur",
        "districtName": "Bilaspur Railway Zone & Kosa Silk Hub",
        "stateName": "Chhattisgarh",
        "countryName": "India",
        "latitude": 22.0797,
        "longitude": 82.1409,
        "verified": true,
        "stockistCount": 460,
        "opportunityCount": 19,
        "categories": [
          "Kosa Silk (Tussar)",
          "SECL Coal HQs",
          "SECR Railway Freight",
          "Doobraj Rice"
        ],
        "availability": "available",
        "primaryMandi": "Sirgitti Industrial Area & Gol Bazar Bilaspur",
        "avgMargin": "22% - 32%",
        "famousFor": "SECL (South Eastern Coalfields - Highest Coal Producer), SECR Railway Freight Zone & Champa Kosa Silk Sarees (GI Tag)",
        "famousBusinessType": "Coalfield Management, Railway Freight Transit & Traditional Kosa Silk Weaving",
        "keySpecialities": [
          "Kosa Silk Sarees & Stoles (GI Tag)",
          "SECL Thermal Grade Coal Freight",
          "Aromatic Jeera Phool & Doobraj Rice",
          "Thermal Power Ancillaries"
        ],
        "hubDescription": "Bilaspur moves the highest freight revenues on Indian Railways, renowned for natural wild Kosa (Tussar) silk handlooms."
      },
      {
        "id": "cg-korba",
        "districtName": "Korba Power Capital of India & BALCO Aluminium",
        "stateName": "Chhattisgarh",
        "countryName": "India",
        "latitude": 22.3595,
        "longitude": 82.7501,
        "verified": true,
        "stockistCount": 390,
        "opportunityCount": 16,
        "categories": [
          "Thermal Power (NTPC)",
          "BALCO Aluminium",
          "Coal (Gevra Mega Mine)",
          "Forest Produce"
        ],
        "availability": "high",
        "primaryMandi": "NTPC Korba Super Thermal Power Plant & BALCO Smelter",
        "avgMargin": "20% - 28%",
        "famousFor": "Power Hub of India, Gevra Mega Open-Cast Coal Mine (Asia’s Largest Open-Cast Mine) & BALCO Bharat Aluminium Smelter",
        "famousBusinessType": "Mega Thermal Electricity Generation, Primary Aluminium Smelting & Coal Mining",
        "keySpecialities": [
          "Electric Power Transmission",
          "Aluminium Ingots & Wire Rods (BALCO)",
          "Crushed Thermal Grade Coal (Gevra)",
          "Mahua Flower & Tendu Leaf Collection"
        ],
        "hubDescription": "Korba generates massive power for the western national grid and operates Asia’s largest open-cast coal mine at Gevra."
      },
      {
        "id": "cg-jagdalpur-bastar",
        "districtName": "Bastar Tribal Dhokra Bell Metal & Iron Ore Hub",
        "stateName": "Chhattisgarh",
        "countryName": "India",
        "latitude": 19.074,
        "longitude": 82.0294,
        "verified": true,
        "stockistCount": 240,
        "opportunityCount": 12,
        "categories": [
          "Dhokra Bell Metal (GI)",
          "Bailadila Iron Ore (NMDC)",
          "Wrought Iron Craft",
          "Forest Honey"
        ],
        "availability": "available",
        "primaryMandi": "Sanjay Market Jagdalpur & NMDC Kirandul Iron Ore Complex",
        "avgMargin": "26% - 44%",
        "famousFor": "Bastar Dhokra Lost-Wax Bell Metal Crafts (GI Tag), Bailadila Iron Ore Mines (Highest Grade 66% Fe in World) & Bastar Dussehra",
        "famousBusinessType": "Dhokra Brass/Bronze Castings, World-Class Iron Ore Mining & Forest Organic Produce",
        "keySpecialities": [
          "Lost-Wax Cast Dhokra Figurines & Bells (GI)",
          "Bastar Wrought Iron Handcrafted Lamps (GI)",
          "High-Grade Calibrated Lump Iron Ore (NMDC)",
          "Pure Forest Wild Honey & Tamarind"
        ],
        "hubDescription": "Bastar mines the purest iron ore on earth at Bailadila while casting ancient tribal lost-wax Dhokra bronze sculptures."
      },
      {
        "id": "cg-raigarh",
        "districtName": "Raigarh Steel, Power & Dhokra Capital",
        "stateName": "Chhattisgarh",
        "countryName": "India",
        "latitude": 21.8974,
        "longitude": 83.395,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 14,
        "categories": [
          "Jindal Steel & Power (JSPL)",
          "Kosa Silk",
          "Sponge Iron",
          "Tendu Leaves"
        ],
        "availability": "available",
        "primaryMandi": "JSPL Industrial Complex & Ganj Mandi Raigarh",
        "avgMargin": "20% - 28%",
        "famousFor": "JSPL Mega Steel & Power Plant (World’s Longest 121-Metre Rail Facility), Kosa Silk Weaving & Raigarh Kathak Gharana",
        "famousBusinessType": "Special Heavy Rail Steel, Sponge Iron Rolling & Kosa Silk Fabrics",
        "keySpecialities": [
          "121-Metre Extra-Long Head-Hardened Rails",
          "Sponge Iron Billets & Wire Rods",
          "Natural Kosa Silk Sarees",
          "High-Grade Non-Coking Coal"
        ],
        "hubDescription": "Raigarh rolled the world’s longest single piece 121-meter steel rails at JSPL, celebrated for Kathak classical heritage."
      }
    ]
  },
  {
    "id": "uttarakhand",
    "name": "Uttarakhand",
    "countryName": "India",
    "latitude": 30.0668,
    "longitude": 79.0193,
    "verifiedStockCount": 2880,
    "districtCount": 5,
    "totalDistributors": "7,800 Registered Wholesalers",
    "verifiedStockists": "2,880 Verified Stockists",
    "readinessScore": "96/100 (Pharma, Auto & Spiritual Hub)",
    "commercialStatus": "Devbhoomi, SIIDCUL Industrial Hubs, Automobile Giants, Pharma Formulations & Herbs",
    "tradeCorridor": "Delhi-Dehradun Expressway & Haridwar-Kashipur Industrial Belt",
    "keySectors": [
      "Pharmaceuticals",
      "Automobile Assembly",
      "Ayurvedic Formulations",
      "Basmati Rice",
      "Pilgrim Services"
    ],
    "districts": [
      {
        "id": "uk-haridwar-roorkee",
        "districtName": "Haridwar & Roorkee SIIDCUL Industrial Corridor",
        "stateName": "Uttarakhand",
        "countryName": "India",
        "latitude": 29.9457,
        "longitude": 78.1642,
        "verified": true,
        "stockistCount": 980,
        "opportunityCount": 36,
        "categories": [
          "Ayurvedic Medicines (Patanjali)",
          "Automobiles (Hero MotoCorp)",
          "Pharma Formulations",
          "FMCG"
        ],
        "availability": "high",
        "primaryMandi": "SIIDCUL Haridwar Integrated Industrial Estate & Roorkee Hardware Mart",
        "avgMargin": "22% - 32%",
        "famousFor": "Gateway to Gods (Ganga Aarti), SIIDCUL Haridwar (Hero MotoCorp Mega Plant, Patanjali Ayurved Global HQs, ITC & HUL Plants)",
        "famousBusinessType": "Two-Wheeler Motorcycle Assembly, Ayurvedic Formulations & FMCG Personal Care",
        "keySpecialities": [
          "Hero Splendor & Passion Motorcycles",
          "Patanjali Ayurvedic Herbal Medicines & Ghee",
          "FMCG Soaps, Shampoos & Packaged Food",
          "Mathematical & Surveying Instruments (Roorkee)"
        ],
        "hubDescription": "Haridwar manufactures millions of motorcycles, packaged foods, and herbal medicines within the massive SIIDCUL industrial park."
      },
      {
        "id": "uk-dehradun",
        "districtName": "Dehradun Capital City, Basmati & Education Hub",
        "stateName": "Uttarakhand",
        "countryName": "India",
        "latitude": 30.3165,
        "longitude": 78.0322,
        "verified": true,
        "stockistCount": 750,
        "opportunityCount": 26,
        "categories": [
          "Dehraduni Type-3 Basmati",
          "Bakery Rusks",
          "Publishing",
          "Pharma Formulations"
        ],
        "availability": "high",
        "primaryMandi": "Paltan Bazar & Selaqui Industrial Area",
        "avgMargin": "22% - 34%",
        "famousFor": "Dehraduni Type-3 Basmati Rice (Legendary Aroma), Elite Residential Schools, Selaqui Pharma Hub & Dehradun Rusks/Stick Biscuits",
        "famousBusinessType": "Generic Pharma Injections/Tablets, Basmati Rice Trading & Artisanal Bakery",
        "keySpecialities": [
          "Type-3 Traditional Aromatic Basmati Rice",
          "Selaqui Generic Pharmaceutical Formulations",
          "Dehradun Crispy Butter Rusks & Pista Biscuits",
          "Forest Research Herbal Extracts"
        ],
        "hubDescription": "Dehradun combines elite boarding education, aromatic Type-3 basmati grain, and high-tech pharmaceutical factories at Selaqui."
      },
      {
        "id": "uk-rudrapur-usnagar",
        "districtName": "Rudrapur & Pantnagar Auto & Food Park",
        "stateName": "Uttarakhand",
        "countryName": "India",
        "latitude": 28.9804,
        "longitude": 79.4004,
        "verified": true,
        "stockistCount": 620,
        "opportunityCount": 24,
        "categories": [
          "Automobiles (Bajaj, Tata)",
          "Packaging",
          "Food Processing (Nestle)",
          "Electricals"
        ],
        "availability": "high",
        "primaryMandi": "SIIDCUL Pantnagar & Rudrapur Industrial Sector",
        "avgMargin": "22% - 30%",
        "famousFor": "Auto Hub of the Hills (Tata Motors Ace Trucks, Bajaj Auto Two-Wheelers, Ashok Leyland) & Nestle Maggi Food Plant",
        "famousBusinessType": "Commercial Vehicle Assembly, Two-Wheeler Manufacturing & Packaged Foods",
        "keySpecialities": [
          "Tata Ace Mini-Trucks",
          "Bajaj Pulsar Motorcycles",
          "Nestle Packaged Noodles & Dairy",
          "Corrugated Rigid Carton Packaging"
        ],
        "hubDescription": "Rudrapur and Pantnagar assemble hundreds of thousands of trucks and motorcycles while processing leading food brands."
      },
      {
        "id": "uk-kashipur",
        "districtName": "Kashipur Paper, Chemical & Packaging Hub",
        "stateName": "Uttarakhand",
        "countryName": "India",
        "latitude": 29.2104,
        "longitude": 78.9619,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 14,
        "categories": [
          "Kraft Paper & Duplex Board",
          "Industrial Chemicals",
          "Sugar",
          "Agro Grains"
        ],
        "availability": "available",
        "primaryMandi": "Kashipur Industrial Area & Bazpur Road Sugar Corridor",
        "avgMargin": "20% - 28%",
        "famousFor": "Paper Mills Cluster (Duplex Paper Board & Packaging), Chemical Processing & Bazpur Cooperative Sugar Factory (India’s 1st)",
        "famousBusinessType": "Recycled Kraft Paper Manufacturing, Industrial Chemicals & Granulated Sugar",
        "keySpecialities": [
          "Duplex Coated Paperboard for Packaging",
          "Specialty Industrial Chemicals & Resins",
          "Crystalline Cane Sugar",
          "Wheat & Paddy Processing"
        ],
        "hubDescription": "Kashipur feeds northern packaging converters with high-bursting-strength kraft paper and coated duplex boards."
      },
      {
        "id": "uk-haldwani",
        "districtName": "Haldwani Gateway to Kumaon Hills",
        "stateName": "Uttarakhand",
        "countryName": "India",
        "latitude": 29.2183,
        "longitude": 79.513,
        "verified": true,
        "stockistCount": 380,
        "opportunityCount": 16,
        "categories": [
          "Hill Fruits & Apples",
          "Transit Freight",
          "Timber",
          "Khoya Sweets"
        ],
        "availability": "high",
        "primaryMandi": "Haldwani Mandi (Largest Fruit & Vegetable Market in Uttarakhand)",
        "avgMargin": "22% - 30%",
        "famousFor": "Gateway to Kumaon (Nainital, Almora), Haldwani Subzi Mandi (Largest Perishable Produce Market in Uttarakhand) & Hill Timber",
        "famousBusinessType": "Mountain Fresh Fruits Wholesaling, Hill Logistics Redistribution & Milk Sweets",
        "keySpecialities": [
          "Fresh Kumaon Apples, Plums & Peaches",
          "Mountain Organic Kidney Beans (Rajma)",
          "Bal Mithai Brown Roasted Khoya Sweets",
          "Hill Route Consumer Goods Logistics"
        ],
        "hubDescription": "Haldwani funnels fresh hill apples and apricots to lowland markets while trucking groceries up steep Kumaon mountain roads."
      }
    ]
  },
  {
    "id": "himachal-pradesh",
    "name": "Himachal Pradesh",
    "countryName": "India",
    "latitude": 31.1048,
    "longitude": 77.1734,
    "verifiedStockCount": 2640,
    "districtCount": 5,
    "totalDistributors": "6,900 Registered Wholesalers",
    "verifiedStockists": "2,640 Audited Stockists",
    "readinessScore": "96/100 (Pharma Capital of Asia & Apple State)",
    "commercialStatus": "Asia’s Largest Pharmaceutical Hub (Baddi), Apple State, Hydro Power & Kullu Shawls",
    "tradeCorridor": "Pinjore-Baddi-Nalagarh Four-Lane Corridor & Chandigarh-Shimla Highway NH-5",
    "keySectors": [
      "Pharmaceutical Formulations",
      "Apples & Horticulture",
      "Woollen Shawls",
      "FMCG Cosmetics",
      "Clean Hydro Energy"
    ],
    "districts": [
      {
        "id": "hp-baddi-solan",
        "districtName": "Baddi & Solan Pharma Capital of Asia & Mushroom City",
        "stateName": "Himachal Pradesh",
        "countryName": "India",
        "latitude": 30.9578,
        "longitude": 76.7914,
        "verified": true,
        "stockistCount": 1150,
        "opportunityCount": 42,
        "categories": [
          "Pharmaceutical Formulations",
          "FMCG Toiletries",
          "Packaging",
          "Mushroom Cultivation"
        ],
        "availability": "high",
        "primaryMandi": "Baddi-Barotiwala-Nalagarh (BBN) Industrial Complex & Solan Sabzi Mandi",
        "avgMargin": "24% - 35%",
        "famousFor": "Pharma Capital of Asia (Produces 35% of Asia’s Formulations - Cipla, Dr. Reddy’s, Abbott, Sun Pharma), Solan Mushroom City & Mohan Meakin",
        "famousBusinessType": "Pharmaceutical Tablets, Injections, Syrup Manufacturing, Aerosols & Button Mushrooms",
        "keySpecialities": [
          "US-FDA Compliant Generic Pharma Formulations",
          "Eye Drops & Sterile Injections",
          "Aerosol Deodorants & Cosmetics",
          "Fresh Canned White Button Mushrooms"
        ],
        "hubDescription": "Baddi manufactures over one-third of all pharmaceutical medicines consumed in Asia, backed by Solan’s mushroom farms."
      },
      {
        "id": "hp-shimla",
        "districtName": "Shimla Apple State Capital & Tourism Crown",
        "stateName": "Himachal Pradesh",
        "countryName": "India",
        "latitude": 31.1048,
        "longitude": 77.1734,
        "verified": true,
        "stockistCount": 540,
        "opportunityCount": 20,
        "categories": [
          "Himachal Apples",
          "Apple Juice & Cider",
          "Handloom Woollens",
          "Hospitality"
        ],
        "availability": "high",
        "primaryMandi": "Dhalli Fruit Market (Largest Apple Mandi in Himachal) & The Mall Road",
        "avgMargin": "22% - 34%",
        "famousFor": "Queen of Hills, Royal Delicious Apples (Kotgarh - Cradle of Indian Apples), HPMC Pure Apple Juice Concentrate & Tourism",
        "famousBusinessType": "Apple Crop Harvesting & Cold-Chain Grading, Pure Fruit Concentrates & Hospitality",
        "keySpecialities": [
          "Royal Delicious & Red Gold Apples",
          "HPMC 100% Pure Natural Apple Juice",
          "Himachali Traditional Topis (Caps - GI)",
          "Ginger & Garlic from Giri Valley"
        ],
        "hubDescription": "Shimla rules India’s apple commerce from Dhalli market, yielding millions of cartons of crisp, sweet mountain apples."
      },
      {
        "id": "hp-kullu-manali",
        "districtName": "Kullu & Manali Woollen Shawl & Adventure Hub",
        "stateName": "Himachal Pradesh",
        "countryName": "India",
        "latitude": 31.9579,
        "longitude": 77.1095,
        "verified": true,
        "stockistCount": 380,
        "opportunityCount": 16,
        "categories": [
          "Kullu Shawls (GI)",
          "Trout Fish",
          "Apples",
          "Adventure Gear"
        ],
        "availability": "available",
        "primaryMandi": "Bhuttico Weavers Handloom Complex & Akhara Bazar",
        "avgMargin": "26% - 44%",
        "famousFor": "Kullu Handloom Shawls (GI Tag - Geometric Pattern Borders), Rainbow Trout Fish Farming & Rohtang/Atal Tunnel Tourism",
        "famousBusinessType": "Handloom Woollen Shawls & Stoles, Fresh Trout Cold-Chain & Adventure Tourism",
        "keySpecialities": [
          "Kullu Hand-Woven Woollen Shawls (GI)",
          "Pure Pashmina & Angora Stoles",
          "Fresh & Smoked Rainbow Trout Fish",
          "Kullu Red Fuji Apples"
        ],
        "hubDescription": "Kullu hand-weaves iconic geometric-patterned woollen shawls at Bhuttico, nestled amidst rushing trout rivers and apple valleys."
      },
      {
        "id": "hp-kangra-dharamshala",
        "districtName": "Kangra & Dharamshala Orthodox Tea & Painting Hub",
        "stateName": "Himachal Pradesh",
        "countryName": "India",
        "latitude": 32.0998,
        "longitude": 76.2691,
        "verified": true,
        "stockistCount": 360,
        "opportunityCount": 15,
        "categories": [
          "Kangra Green & Black Tea (GI)",
          "Kangra Miniature Paintings (GI)",
          "Tibetan Crafts (McLeodganj)",
          "Slate"
        ],
        "availability": "available",
        "primaryMandi": "Palampur Tea Cooperative & Dharamshala Kotwali Bazar",
        "avgMargin": "25% - 42%",
        "famousFor": "Kangra Orthodox Black & Green Tea (European Union GI Tag), Kangra Miniature Paintings (GI Tag) & Tibetan Spiritual Crafts",
        "famousBusinessType": "Orthodox Green & Black Tea Processing, Miniature Folk Art & Buddhist Spiritual Artifacts",
        "keySpecialities": [
          "Kangra Valley Orthodox Green Tea (GI)",
          "Kangra Natural Pigment Miniature Art (GI)",
          "Hand-Carved Singing Bowls & Thangkas",
          "Khanyara Natural Stone Roofing Slates"
        ],
        "hubDescription": "Kangra produces aromatic green tea carrying European Union GI registration, home to His Holiness the Dalai Lama in Dharamshala."
      },
      {
        "id": "hp-una",
        "districtName": "Una Industrial Gateway & Bulk Drug Park",
        "stateName": "Himachal Pradesh",
        "countryName": "India",
        "latitude": 31.4685,
        "longitude": 76.2708,
        "verified": true,
        "stockistCount": 290,
        "opportunityCount": 12,
        "categories": [
          "National Bulk Drug Park",
          "Wheat & Maize",
          "Pumps",
          "Auto Castings"
        ],
        "availability": "available",
        "primaryMandi": "Mehatpur & Tahliwal Industrial Estates",
        "avgMargin": "20% - 28%",
        "famousFor": "Gateway to Himachal Plains, India’s Mega Bulk Drug Park (Haroli), Tahliwal Food Processing & Sonalika Castings",
        "famousBusinessType": "Active Pharmaceutical Ingredients (Bulk Drugs), Heavy Machinery Castings & Food Products",
        "keySpecialities": [
          "Active Pharmaceutical Ingredients (APIs)",
          "Cast Iron Transmission Housings",
          "Commercial Poultry Feeds",
          "Food Grains Trading"
        ],
        "hubDescription": "Una connects the Punjab plains to hill valleys, hosting India’s strategic mega Bulk Drug Park at Haroli."
      }
    ]
  },
  {
    "id": "jammu-kashmir",
    "name": "Jammu and Kashmir",
    "countryName": "India",
    "latitude": 33.7782,
    "longitude": 76.5762,
    "verifiedStockCount": 2780,
    "districtCount": 6,
    "totalDistributors": "6,400 Registered Wholesalers",
    "verifiedStockists": "2,780 Audited Stockists",
    "readinessScore": "95/100 (Pashmina, Saffron & Walnut Woodcraft)",
    "commercialStatus": "Crown of India, Kashmiri Saffron (GI), Hand-Knotted Silk Carpets, Pashmina & Kashmir Willow Cricket Bats",
    "tradeCorridor": "Jammu-Srinagar Four-Lane Highway NH-44 & Udhampur-Baramulla Rail Link",
    "keySectors": [
      "Kashmiri Saffron (GI)",
      "Pashmina & Kani Shawls",
      "Walnut Wood Carving",
      "Kashmir Willow Bats",
      "Apples & Dry Fruits"
    ],
    "districts": [
      {
        "id": "jk-srinagar",
        "districtName": "Srinagar Summer Capital & Artisan Handicrafts",
        "stateName": "Jammu and Kashmir",
        "countryName": "India",
        "latitude": 34.0837,
        "longitude": 74.7973,
        "verified": true,
        "stockistCount": 1120,
        "opportunityCount": 38,
        "categories": [
          "Pashmina Shawls (GI)",
          "Silk Carpets",
          "Walnut Woodcraft (GI)",
          "Paper Machie"
        ],
        "availability": "high",
        "primaryMandi": "Lal Chowk Wholesale Mart & Zadibal Carpet Weaving Cluster",
        "avgMargin": "28% - 50%",
        "famousFor": "Summer Capital, Pure Changthangi Pashmina Shawls (GI Tag), Silk-on-Silk Hand-Knotted Carpets, Walnut Wood Carving & Paper Mâché",
        "famousBusinessType": "Artisanal Pashmina Weaving, Silk Rug Knotting, Hand-Carved Walnut Furniture & Saffron Trade",
        "keySpecialities": [
          "Pure Needle-Embroidered Pashmina Shawls",
          "Silk-on-Silk Oriental Knotted Carpets",
          "Hand-Carved Seasoned Walnut Wood Dining Sets",
          "Hand-Painted Floral Paper Mâché Vases & Boxes"
        ],
        "hubDescription": "Srinagar is the historic capital of Himalayan artisanal crafts, producing heirloom Pashmina and hand-knotted silk carpets."
      },
      {
        "id": "jk-jammu",
        "districtName": "Jammu Winter Capital & Dry Fruit Hub",
        "stateName": "Jammu and Kashmir",
        "countryName": "India",
        "latitude": 32.7266,
        "longitude": 74.857,
        "verified": true,
        "stockistCount": 780,
        "opportunityCount": 26,
        "categories": [
          "Kashmir Dry Fruits",
          "Basmati (R.S. Pura)",
          "Vaishno Devi Supplies",
          "Pharmaceuticals"
        ],
        "availability": "high",
        "primaryMandi": "Kanpur Fruit Mandi (Narwal) & Bari Brahmana Industrial Area",
        "avgMargin": "22% - 32%",
        "famousFor": "City of Temples, Narwal Mandi (One of India’s Largest Dry Fruit & Apple Trading Yards), R.S. Pura Fragrant Basmati Rice & Vaishno Devi Pilgrimage",
        "famousBusinessType": "Dry Fruits Wholesaling (Walnuts, Almonds, Saffron), Basmati Rice Milling & Pharma Formulations",
        "keySpecialities": [
          "Paper-Shell Kashmiri Walnuts (Giri)",
          "Mamra Almonds & Apricots",
          "R.S. Pura Traditional Aromatic Basmati Rice",
          "Katra Religious Pilgrim Offerings & Dry Fruit Packets"
        ],
        "hubDescription": "Jammu is the commercial winter headquarters and primary transshipment depot forwarding Kashmiri apples and dry fruits across India."
      },
      {
        "id": "jk-anantnag-pulwama",
        "districtName": "Anantnag & Pulwama Saffron & Cricket Bat Hub",
        "stateName": "Jammu and Kashmir",
        "countryName": "India",
        "latitude": 33.7311,
        "longitude": 75.1522,
        "verified": true,
        "stockistCount": 460,
        "opportunityCount": 20,
        "categories": [
          "Kashmiri Saffron (GI)",
          "Kashmir Willow Bats",
          "Red Delicious Apples",
          "Dairy"
        ],
        "availability": "high",
        "primaryMandi": "Pampore Saffron International Trading Centre & Sangam Bat Cluster",
        "avgMargin": "26% - 42%",
        "famousFor": "Saffron Town of Pampore (Purest Kashmiri Mongra Saffron - GI Tag) & Sangam Cricket Bat Industrial Cluster (Kashmir Willow)",
        "famousBusinessType": "GI Saffron Processing & Packaging, Kashmir Willow Cricket Bat Manufacturing & Apples",
        "keySpecialities": [
          "Pampore Dark Crimson Mongra Saffron (GI Tag)",
          "Grade-1 Kashmir Willow Cricket Bats (Sangam)",
          "Red Delicious & Kulu Delicious Apples",
          "Trout Fish Farming (Kokernag)"
        ],
        "hubDescription": "Pulwama’s Pampore plateaus cultivate India’s golden saffron, while Sangam crafts cricket bats played on pitches worldwide."
      },
      {
        "id": "jk-baramulla-sopore",
        "districtName": "Baramulla & Sopore Apple Town of Asia",
        "stateName": "Jammu and Kashmir",
        "countryName": "India",
        "latitude": 34.2989,
        "longitude": 74.469,
        "verified": true,
        "stockistCount": 420,
        "opportunityCount": 18,
        "categories": [
          "Sopore Apple Mandi",
          "Walnuts",
          "Freshwater Fish",
          "Timber"
        ],
        "availability": "high",
        "primaryMandi": "Sopore Apple Mandi (Asia’s 2nd Largest Fruit Market)",
        "avgMargin": "22% - 30%",
        "famousFor": "Apple Town of Asia (Sopore Fruit Mandi - Handles Millions of Apple Boxes), Delicious Apples & Wular Lake Freshwater Fisheries",
        "famousBusinessType": "Fresh Apple Grading, Cold Storage Logistics & Commercial Walnuts",
        "keySpecialities": [
          "A-Grade Delicious & American Apples",
          "Hard-Shell & Soft-Shell Raw Walnuts",
          "Freshwater Carp Fish from Wular Lake",
          "Pine & Deodar Timber Logistics"
        ],
        "hubDescription": "Sopore operates the second-largest fruit mandi in Asia, moving high volumes of crisp Kashmiri apples."
      },
      {
        "id": "jk-udhampur",
        "districtName": "Udhampur Northern Command Military Hub",
        "stateName": "Jammu and Kashmir",
        "countryName": "India",
        "latitude": 32.9254,
        "longitude": 75.1416,
        "verified": true,
        "stockistCount": 260,
        "opportunityCount": 11,
        "categories": [
          "Military Logistics",
          "Kalari Cheese (GI)",
          "Stone Aggregates",
          "Transit Freight"
        ],
        "availability": "available",
        "primaryMandi": "Gole Mela Commercial Market & Northern Command Depot",
        "avgMargin": "22% - 32%",
        "famousFor": "Headquarters of Indian Army Northern Command, World-Famous Udhampur Kalari Dense Mozzarella-Like Cheese (GI Tag)",
        "famousBusinessType": "Defense Supply Logistics, Artisan Kalari Cheese Production & Hill Transit",
        "keySpecialities": [
          "Traditional Pan-Fried Kalari Cheese Discs (GI)",
          "Defense Forward Supply Provisions",
          "Hill Road Aggregates & Stone Grit",
          "Handloom Woollen Blankets (Pattu)"
        ],
        "hubDescription": "Udhampur anchors defense logistics for Ladakh and Kashmir, renowned for its pan-fried stretchy Kalari artisan cheese."
      },
      {
        "id": "jk-kathua",
        "districtName": "Kathua Industrial Gateway of Jammu",
        "stateName": "Jammu and Kashmir",
        "countryName": "India",
        "latitude": 32.3865,
        "longitude": 75.5276,
        "verified": true,
        "stockistCount": 240,
        "opportunityCount": 10,
        "categories": [
          "Textile Spinning (Chenab)",
          "Cement (Chenab)",
          "Wheat & Rice",
          "Chemicals"
        ],
        "availability": "available",
        "primaryMandi": "SICOP Industrial Complex & Govindsar Industrial Area",
        "avgMargin": "20% - 28%",
        "famousFor": "Industrial Gateway to J&K, Chenab Textile Mills (One of India’s Largest Synthetic Spinning Plants) & Basohli Miniature Painting (GI)",
        "famousBusinessType": "Synthetic Textile Yarn Spinning, Portland Cement & Basohli Paintings",
        "keySpecialities": [
          "Blended Synthetic Staple Yarns (CTM)",
          "Basohli Miniature Folk Paintings (GI)",
          "Portland Pozzolana Cement",
          "Wheat Flour Shelling"
        ],
        "hubDescription": "Kathua welcomes freight into Jammu & Kashmir, running large textile spinning mills and preserving Basohli paintings."
      }
    ]
  },
  {
    "id": "goa",
    "name": "Goa",
    "countryName": "India",
    "latitude": 15.2993,
    "longitude": 74.124,
    "verifiedStockCount": 2150,
    "districtCount": 2,
    "totalDistributors": "4,800 Registered Channel Partners",
    "verifiedStockists": "2,150 Audited Stockists",
    "readinessScore": "96/100 (Coastal Tourism & Pharma Port)",
    "commercialStatus": "Beach Tourism Capital, Cashew Feni (GI), Deepwater Ore Port & Formulation Pharmaceuticals",
    "tradeCorridor": "Mormugao Deepwater Seaport & Coastal Highway NH-66",
    "keySectors": [
      "Cashew Feni & Nuts",
      "Pharmaceuticals",
      "Iron Ore Port Cargo",
      "Hospitality FMCG",
      "Marine Fisheries"
    ],
    "districts": [
      {
        "id": "ga-north-panaji",
        "districtName": "North Goa (Panaji & Mapusa)",
        "stateName": "Goa",
        "countryName": "India",
        "latitude": 15.4909,
        "longitude": 73.8278,
        "verified": true,
        "stockistCount": 1120,
        "opportunityCount": 34,
        "categories": [
          "Cashew Feni (GI)",
          "Hospitality Beverages",
          "Thivim Industrial Hub",
          "Spices"
        ],
        "availability": "high",
        "primaryMandi": "Mapusa Friday Traditional Market & Panaji Municipal Market",
        "avgMargin": "24% - 38%",
        "famousFor": "State Capital (Panaji), Mapusa Traditional Friday Market, Cashew Feni Liquor (GI Tag), Boutique Hospitality Supplies & Bakeries",
        "famousBusinessType": "Cashew Feni Distillation, Tourism Retail Distribution, Spices & Artisanal Baked Goods",
        "keySpecialities": [
          "Pure Pot-Distilled Cashew Feni (GI Tag)",
          "Goan Pork Sausages (Chorizo)",
          "Boutique Beverage & Wine Distribution",
          "Handmade Bebinca Multi-Layered Dessert"
        ],
        "hubDescription": "North Goa is the hospitality epicenter of India, famous for aromatic pot-distilled cashew Feni and bustling markets in Mapusa."
      },
      {
        "id": "ga-south-margao",
        "districtName": "South Goa (Margao & Vasco da Gama)",
        "stateName": "Goa",
        "countryName": "India",
        "latitude": 15.2736,
        "longitude": 73.958,
        "verified": true,
        "stockistCount": 1030,
        "opportunityCount": 32,
        "categories": [
          "Mormugao Port (MPT)",
          "Pharmaceuticals (Verna)",
          "Marine Fisheries",
          "Cashews"
        ],
        "availability": "high",
        "primaryMandi": "Verna Industrial Estate (Pharma Hub) & Mormugao Port Trust",
        "avgMargin": "22% - 32%",
        "famousFor": "Commercial Capital (Margao), Verna Industrial Estate (Global Pharma Hub - Cipla, Glenmark), Mormugao Deepwater Port & Goa Shipyard",
        "famousBusinessType": "Pharmaceutical Formulation Plants, Deepwater Marine Port Logistics & Shipbuilding",
        "keySpecialities": [
          "Generic Pharmaceutical Injections & Formulations",
          "Bulk Marine Iron Ore Stevedoring",
          "Frozen Deep-Sea Marine Seafood",
          "W180 Roasted King Cashews"
        ],
        "hubDescription": "South Goa handles India’s deepwater iron ore exports at Mormugao and manufactures pharmaceuticals at Verna."
      }
    ]
  },
  {
    "id": "chandigarh",
    "name": "Chandigarh",
    "countryName": "India",
    "latitude": 30.7333,
    "longitude": 76.7794,
    "verifiedStockCount": 1850,
    "districtCount": 1,
    "totalDistributors": "4,200 Channel Stockists",
    "verifiedStockists": "1,850 Audited Stockists",
    "readinessScore": "99/100 (Premier Planned Capital)",
    "commercialStatus": "Joint Capital of Punjab & Haryana, High Per-Capita Income, Corporate Headquarters & Healthcare",
    "tradeCorridor": "Delhi-Chandigarh National Highway NH-44 & Himalayan Expressway",
    "keySectors": [
      "Corporate Management",
      "Pharmaceuticals",
      "Automobile Dealers",
      "IT Technology",
      "Retail FMCG"
    ],
    "districts": [
      {
        "id": "ch-capital-hub",
        "districtName": "Chandigarh City & Industrial Area Phase I & II",
        "stateName": "Chandigarh",
        "countryName": "India",
        "latitude": 30.7333,
        "longitude": 76.7794,
        "verified": true,
        "stockistCount": 1850,
        "opportunityCount": 42,
        "categories": [
          "Corporate Trade",
          "Pharma Formulations",
          "Sanitary & Hardware",
          "High-End Retail"
        ],
        "availability": "high",
        "primaryMandi": "Industrial Area Phases I & II & Sector 26 Grain/Vegetable Market",
        "avgMargin": "22% - 32%",
        "famousFor": "The City Beautiful (Le Corbusier Architecture), Highest Per-Capita Retail Consumption, Corporate Trade Nexus for Punjab & Haryana",
        "famousBusinessType": "Zonal Corporate Headquarters, Pharmaceutical Marketing & Premium Retail FMCG Distribution",
        "keySpecialities": [
          "Regional FMCG Distribution Networks",
          "Pharmaceutical Sales Headquarters",
          "Sanitaryware & Architectural Fittings",
          "Luxury Automobile Flagship Dealerships"
        ],
        "hubDescription": "Chandigarh is the affluent nerve center governing commerce across Punjab and Haryana, with prime per-capita spending."
      }
    ]
  },
  {
    "id": "puducherry",
    "name": "Puducherry",
    "countryName": "India",
    "latitude": 11.9416,
    "longitude": 79.8083,
    "verifiedStockCount": 1420,
    "districtCount": 2,
    "totalDistributors": "3,100 Channel Stockists",
    "verifiedStockists": "1,420 Audited Stockists",
    "readinessScore": "96/100 (French Heritage & Coastal Port)",
    "commercialStatus": "French Heritage Architecture, Auroville Eco-Crafts, Leather Sandals & Deepwater Port",
    "tradeCorridor": "East Coast Road (ECR) to Chennai Port",
    "keySectors": [
      "French Heritage Tourism",
      "Auroville Handmade Paper & Incense",
      "Leather Sandals",
      "Deepwater Port Cargo"
    ],
    "districts": [
      {
        "id": "py-puducherry-main",
        "districtName": "Puducherry Main & Auroville Corridor",
        "stateName": "Puducherry",
        "countryName": "India",
        "latitude": 11.9416,
        "longitude": 79.8083,
        "verified": true,
        "stockistCount": 1120,
        "opportunityCount": 30,
        "categories": [
          "Auroville Handcrafted Goods",
          "Leather Footwear",
          "Handmade Paper (Sri Aurobindo)",
          "French Gourmet Foods"
        ],
        "availability": "high",
        "primaryMandi": "Mettupalayam Industrial Estate & Goubert Wholesale Market",
        "avgMargin": "25% - 40%",
        "famousFor": "French Colonial Quarters (White Town), Auroville Eco-Handicrafts, Sri Aurobindo Handmade Paper & Genuine Leather Sandals",
        "famousBusinessType": "Artisanal Handmade Paper, Eco-Friendly Fragrances, Leather Sandals & French Bakery",
        "keySpecialities": [
          "Natural Marbled Handmade Cotton Rag Paper",
          "Aromatherapy Incense & Essential Oils",
          "Handcrafted Genuine Leather Sandals & Bags",
          "Artisanal French Breads & Cheeses"
        ],
        "hubDescription": "Puducherry blends French lifestyle aesthetics with eco-crafts made at Auroville and Sri Aurobindo Ashram."
      },
      {
        "id": "py-karaikal-port",
        "districtName": "Karaikal Port & Coastal Terminal",
        "stateName": "Puducherry",
        "countryName": "India",
        "latitude": 10.9254,
        "longitude": 79.838,
        "verified": true,
        "stockistCount": 300,
        "opportunityCount": 12,
        "categories": [
          "Karaikal Deepwater Port",
          "Marine Fishing",
          "Petroleum Logistics",
          "Edible Oils"
        ],
        "availability": "available",
        "primaryMandi": "Karaikal Port All-Weather Terminal & Wholesale Fish Harbor",
        "avgMargin": "20% - 28%",
        "famousFor": "Karaikal All-Weather Deepwater Private Port, Deep-Sea Fish Landings & Cauvery Delta Commercial Gateway",
        "famousBusinessType": "Deepwater Port Stevedoring, Break-Bulk Coal Logistics & Marine Fisheries",
        "keySpecialities": [
          "Bulk Cargo Coal & Fertilizer Stevedoring",
          "Fresh Deep-Sea Marine Tuna & Prawns",
          "Petroleum Storage & Bunkering",
          "Agro Grains Shipping"
        ],
        "hubDescription": "Karaikal operates an all-weather private deepwater port handling bulk coal, petroleum, and fertilizers for Tamil Nadu."
      }
    ]
  },
  {
    "id": "tripura",
    "name": "Tripura",
    "countryName": "India",
    "latitude": 23.9408,
    "longitude": 91.9882,
    "verifiedStockCount": 1240,
    "districtCount": 2,
    "totalDistributors": "2,800 Registered Stockists",
    "verifiedStockists": "1,240 Audited Stockists",
    "readinessScore": "94/100 (Bamboo & Rubber Powerhouse)",
    "commercialStatus": "Natural Rubber Pioneer (2nd Largest in India), Bamboo Capital & Queen Pineapple (GI)",
    "tradeCorridor": "Agartala-Akhaura Bangladesh Rail Link & National Highway NH-8",
    "keySectors": [
      "Natural Rubber Sheets",
      "Bamboo Handicrafts",
      "Queen Pineapple (GI)",
      "Cross-Border Bangladesh Trade"
    ],
    "districts": [
      {
        "id": "tr-agartala",
        "districtName": "Agartala Capital & Cross-Border Hub",
        "stateName": "Tripura",
        "countryName": "India",
        "latitude": 23.8315,
        "longitude": 91.2868,
        "verified": true,
        "stockistCount": 950,
        "opportunityCount": 24,
        "categories": [
          "Natural Rubber",
          "Bamboo Screens",
          "Queen Pineapple (GI)",
          "Cross-Border Freight"
        ],
        "availability": "high",
        "primaryMandi": "Bodhjungnagar Industrial Growth Centre & Maharaj Ganj Bazar",
        "avgMargin": "24% - 36%",
        "famousFor": "2nd Largest Natural Rubber Producer in India, Agartala-Akhaura International Rail Link to Chittagong Port & Queen Pineapple (GI)",
        "famousBusinessType": "Natural Rubber Processing, Intricate Bamboo Cane Weaving & Fruit Processing",
        "keySpecialities": [
          "Centrifuged Natural Rubber Latex & Sheets",
          "Tripura Bamboo Screens & Cane Furniture",
          "Sweet Queen Pineapple Slices & Jam (GI)",
          "Cross-Border Transit Consumer Goods"
        ],
        "hubDescription": "Agartala is India’s fast-opening gateway to Bangladesh and Southeast Asia, producing natural rubber and sweet Queen pineapples."
      },
      {
        "id": "tr-udaipur-gomati",
        "districtName": "Udaipur & Gomati Temple City & Pera Sweet",
        "stateName": "Tripura",
        "countryName": "India",
        "latitude": 23.5337,
        "longitude": 91.484,
        "verified": true,
        "stockistCount": 290,
        "opportunityCount": 10,
        "categories": [
          "Tripura Sundari Pera",
          "Rubber Plantations",
          "Paddy",
          "Handloom"
        ],
        "availability": "available",
        "primaryMandi": "Tripureswari Temple Market & Matabari Corridor",
        "avgMargin": "22% - 32%",
        "famousFor": "Tripura Sundari Matabari 51 Shaktipeeth Temple, Famous Brown Khoya Matabari Pera Sweet & Vast Rubber Plantations",
        "famousBusinessType": "Religious Hospitality Trade, Traditional Khoya Pera Sweets & Plantation Rubber",
        "keySpecialities": [
          "Authentic Brown Matabari Khoya Pera",
          "Sheet Rubber from Family Plantations",
          "Tripuri Tribal Risa Handloom Weaving",
          "Freshwater Carp Fish"
        ],
        "hubDescription": "Udaipur is Tripura’s historic temple city, famous for the sacred Matabari shrine and dense rubber plantations."
      }
    ]
  },
  {
    "id": "meghalaya",
    "name": "Meghalaya",
    "countryName": "India",
    "latitude": 25.467,
    "longitude": 91.3662,
    "verifiedStockCount": 1180,
    "districtCount": 2,
    "totalDistributors": "2,600 Registered Wholesalers",
    "verifiedStockists": "1,180 Verified Stockists",
    "readinessScore": "94/100 (Abode of Clouds & Organic Spices)",
    "commercialStatus": "World’s Highest Curcumin Lakadong Turmeric, Khasi Mandarin, Broom Grass & Coal",
    "tradeCorridor": "Guwahati-Shillong Expressway NH-6 & Dawki International Land Port",
    "keySectors": [
      "Lakadong Turmeric (GI)",
      "Khasi Mandarin (GI)",
      "Broomgrass",
      "Organic Honey",
      "Ginger"
    ],
    "districts": [
      {
        "id": "ml-shillong-khasi",
        "districtName": "Shillong & East Khasi Hills Scotland of the East",
        "stateName": "Meghalaya",
        "countryName": "India",
        "latitude": 25.5788,
        "longitude": 91.8933,
        "verified": true,
        "stockistCount": 880,
        "opportunityCount": 22,
        "categories": [
          "Khasi Mandarin (GI)",
          "Organic Honey",
          "Dawki Border Freight",
          "Traditional Music"
        ],
        "availability": "high",
        "primaryMandi": "Iewduh (Bara Bazar - Asia’s Historic Traditional Indigenous Market) & Police Bazar",
        "avgMargin": "24% - 38%",
        "famousFor": "Scotland of the East, Iewduh Traditional Indigenous Market (Managed by Women), Khasi Mandarin Oranges (GI Tag) & Music Capital",
        "famousBusinessType": "Organic Hill Fruit Trading, Cross-Border Transit (Dawki Port) & Indigenous Handicrafts",
        "keySpecialities": [
          "GI-Tagged Sweet Khasi Mandarin Oranges",
          "Wild Forest Multifloral Honey",
          "Hand-Knitted Woollens & Shawls",
          "Khasi Traditional Black Pepper & Bay Leaf"
        ],
        "hubDescription": "Shillong’s ancient Iewduh market has been run by tribal Khasi women for centuries, moving mountain spices and citrus."
      },
      {
        "id": "ml-jaintia-lakadong",
        "districtName": "Jowai & Jaintia Hills Lakadong Turmeric Hub",
        "stateName": "Meghalaya",
        "countryName": "India",
        "latitude": 25.4526,
        "longitude": 92.2036,
        "verified": true,
        "stockistCount": 300,
        "opportunityCount": 11,
        "categories": [
          "Lakadong Turmeric (GI)",
          "Coal & Limestone",
          "Broomgrass",
          "Organic Ginger"
        ],
        "availability": "available",
        "primaryMandi": "Jowai Commercial Market & Lakadong Agro Cluster",
        "avgMargin": "28% - 50%",
        "famousFor": "World-Renowned Lakadong Turmeric (GI Tag - Highest Curcumin Content 7.5% - 9% globally), Coal & High-Grade Limestone",
        "famousBusinessType": "Ultra-High Curcumin Lakadong Turmeric Processing & High-Calcium Limestone Mining",
        "keySpecialities": [
          "High Curcumin Lakadong Pure Turmeric Powder",
          "Natural Organic Meghalaya Sliced Ginger",
          "Hill Broomgrass Bundles for Household Brooms",
          "High-Purity Industrial Limestone Slabs"
        ],
        "hubDescription": "Jaintia Hills grows Lakadong turmeric, tested as the world’s most potent therapeutic turmeric with over 7.5% curcumin."
      }
    ]
  },
  {
    "id": "manipur",
    "name": "Manipur",
    "countryName": "India",
    "latitude": 24.6637,
    "longitude": 93.9063,
    "verifiedStockCount": 980,
    "districtCount": 2,
    "totalDistributors": "2,200 Registered Wholesalers",
    "verifiedStockists": "980 Audited Stockists",
    "readinessScore": "94/100 (Jeweled Land & Black Rice)",
    "commercialStatus": "Chak-Hao Black Rice (GI), Sirarakhong Chilli, Women-Run Ima Keithel & Moreh Border Gate",
    "tradeCorridor": "Asian Highway 1 (AH-1) & Imphal-Moreh Trans-Asian Trade Corridor to Myanmar",
    "keySectors": [
      "Chak-Hao Black Rice (GI)",
      "Ima Keithel Handloom",
      "Bamboo Furniture",
      "Cross-Border ASEAN Trade"
    ],
    "districts": [
      {
        "id": "mn-imphal",
        "districtName": "Imphal Capital & Ima Keithel (Mother’s Market)",
        "stateName": "Manipur",
        "countryName": "India",
        "latitude": 24.817,
        "longitude": 93.9368,
        "verified": true,
        "stockistCount": 780,
        "opportunityCount": 20,
        "categories": [
          "Chak-Hao Black Rice (GI)",
          "Ima Keithel Handloom",
          "Manipuri Shawls",
          "ASEAN Goods"
        ],
        "availability": "high",
        "primaryMandi": "Ima Keithel (World’s Largest All-Women Run Market - 5,000+ Women Traders)",
        "avgMargin": "25% - 42%",
        "famousFor": "Ima Keithel (World’s Only 500-Year-Old Market Run Exclusively by 5,000+ Women), Chak-Hao Aromatic Black Rice (GI Tag) & Kauna Reed Craft",
        "famousBusinessType": "Aromatic Black Rice Export, All-Women Handloom Apparel & Wetland Reed Mats",
        "keySpecialities": [
          "Nutrient-Rich Purple Chak-Hao Black Rice (GI)",
          "Traditional Manipuri Phanek & Enaphi Stoles",
          "Eco-Friendly Kauna Wetland Reed Baskets & Mats",
          "Sirarakhong Hathei Fiery Chilli Powder (GI)"
        ],
        "hubDescription": "Imphal is home to the world’s only all-women marketplace (Ima Keithel) and the prized antioxidant superfood, Chak-Hao black rice."
      },
      {
        "id": "mn-churachandpur",
        "districtName": "Churachandpur Hill Handloom & Ginger Hub",
        "stateName": "Manipur",
        "countryName": "India",
        "latitude": 24.3315,
        "longitude": 93.6738,
        "verified": true,
        "stockistCount": 200,
        "opportunityCount": 8,
        "categories": [
          "Tribal Handlooms",
          "Hill Ginger",
          "Bamboo Shoot",
          "Passion Fruit"
        ],
        "availability": "available",
        "primaryMandi": "New Bazar Commercial Mart & Tedim Road Hub",
        "avgMargin": "22% - 35%",
        "famousFor": "Second Largest City of Manipur, Vibrant Tribal Handloom Weaving Traditions & Organic Hill Ginger Cultivation",
        "famousBusinessType": "Tribal Shawl Handloom Weaving & Organic Hill Horticulture",
        "keySpecialities": [
          "Geometric Tribal Woven Shawls & Scarves",
          "Sun-Dried Hill Ginger Flakes",
          "Fermented Bamboo Shoots (Soibum)",
          "Pure Passion Fruit Squash"
        ],
        "hubDescription": "Churachandpur is the cultural and commercial nexus of southern Manipur hills, weaving striking tribal shawls."
      }
    ]
  },
  {
    "id": "nagaland",
    "name": "Nagaland",
    "countryName": "India",
    "latitude": 26.1584,
    "longitude": 94.5624,
    "verifiedStockCount": 920,
    "districtCount": 2,
    "totalDistributors": "2,100 Channel Stockists",
    "verifiedStockists": "920 Audited Stockists",
    "readinessScore": "93/100 (Falcon Capital & Naga Mircha)",
    "commercialStatus": "Bhoot Jolokia / Naga Mircha (GI), Hornbill Festival Heritage, Handloom & Timber",
    "tradeCorridor": "Dimapur Commercial Railhead & Asian Highway AH-1 / NH-29",
    "keySectors": [
      "Naga King Chilli (GI)",
      "Naga Handloom Shawls (GI)",
      "Wood Carving",
      "Organic Honey",
      "Pork Processing"
    ],
    "districts": [
      {
        "id": "nl-dimapur",
        "districtName": "Dimapur Commercial Gateway of Nagaland",
        "stateName": "Nagaland",
        "countryName": "India",
        "latitude": 25.9095,
        "longitude": 93.7266,
        "verified": true,
        "stockistCount": 680,
        "opportunityCount": 18,
        "categories": [
          "Railhead Freight",
          "Naga Chilli (GI)",
          "Timber Sawn Wood",
          "FMCG Gateway"
        ],
        "availability": "high",
        "primaryMandi": "Hong Kong Market & New Market Dimapur Rail Terminal",
        "avgMargin": "24% - 36%",
        "famousFor": "Commercial Capital & Only Railhead of Nagaland, Hong Kong Wholesale Market, Naga King Chilli (Bhut Jolokia - GI Tag)",
        "famousBusinessType": "State Redistribution Logistics, Extremely Hot Bhut Jolokia Processing & Sawn Timber",
        "keySpecialities": [
          "Naga Mircha (Bhut Jolokia - Hot Chilli - GI)",
          "Hardwood Teak & Pine Sawn Timber",
          "Packaged FMCG Wholesaling for Hill Districts",
          "Bamboo Shoot & Pork Fermented Specialties"
        ],
        "hubDescription": "Dimapur is Nagaland’s only railhead and commercial lifeline, supplying every hill district with goods and machinery."
      },
      {
        "id": "nl-kohima",
        "districtName": "Kohima Capital & Hornbill Heritage",
        "stateName": "Nagaland",
        "countryName": "India",
        "latitude": 25.6751,
        "longitude": 94.1086,
        "verified": true,
        "stockistCount": 240,
        "opportunityCount": 9,
        "categories": [
          "Hornbill Cultural Crafts",
          "Naga Shawls (GI)",
          "Organic Honey",
          "Smoked Meats"
        ],
        "availability": "available",
        "primaryMandi": "BOC Market & Kisama Heritage Village Corridor",
        "avgMargin": "26% - 42%",
        "famousFor": "State Capital, World-Renowned Hornbill Festival (Festival of Festivals at Kisama), WWII Battle of Kohima & Naga Shawls (GI Tag)",
        "famousBusinessType": "Tribal Cultural Tourism Supplies, Traditional Backstrap Shawl Weaving & Wild Honey",
        "keySpecialities": [
          "Hand-Woven Naga Warrior Shawls (GI)",
          "Rock-Cliff Wild Stingless Bee Honey",
          "Traditional Smoked Pork & Beef Products",
          "Handmade Woodcarvings & Spear Crafts"
        ],
        "hubDescription": "Kohima perches in the high hills, hosting the global Hornbill Festival and weaving bold warrior shawls on backstrap looms."
      }
    ]
  },
  {
    "id": "mizoram",
    "name": "Mizoram",
    "countryName": "India",
    "latitude": 23.1645,
    "longitude": 92.9376,
    "verifiedStockCount": 780,
    "districtCount": 2,
    "totalDistributors": "1,800 Channel Stockists",
    "verifiedStockists": "780 Audited Stockists",
    "readinessScore": "93/100 (Highest Forest Cover & Bird’s Eye Chilli)",
    "commercialStatus": "Mizo Chilli (Bird’s Eye - GI), Bamboo Flowering, Anthurium Floriculture & Mizo Puan (GI)",
    "tradeCorridor": "Kaladan Multi-Modal Transit Transport Corridor to Myanmar & NH-306",
    "keySectors": [
      "Bird’s Eye Chilli (GI)",
      "Mizo Puan Textiles (GI)",
      "Anthurium Flowers",
      "Bamboo Craft",
      "Ginger"
    ],
    "districts": [
      {
        "id": "mz-aizawl",
        "districtName": "Aizawl High-Altitude Capital & Mizo Puan Hub",
        "stateName": "Mizoram",
        "countryName": "India",
        "latitude": 23.7271,
        "longitude": 92.7176,
        "verified": true,
        "stockistCount": 620,
        "opportunityCount": 16,
        "categories": [
          "Mizo Puan Handloom (GI)",
          "Bird’s Eye Chilli (GI)",
          "Anthurium Cut Flowers",
          "Bamboo"
        ],
        "availability": "high",
        "primaryMandi": "Bara Bazar Aizawl (Central Multi-Storey Market)",
        "avgMargin": "25% - 40%",
        "famousFor": "Scenic Mountain Capital, Mizo Puan Traditional Handloom Fabrics (5 Distinct GI Tags), Mizo Bird’s Eye Chilli (GI Tag) & Anthuriums",
        "famousBusinessType": "Intricate Puan Weaving, High-Heat Bird’s Eye Chilli Drying & Cut-Flower Floriculture",
        "keySpecialities": [
          "Mizo Puanchei & Ngotekherh Shawls (GI)",
          "Mizo Bird’s Eye Hot Chillies (GI)",
          "Export-Grade Fresh Red Anthurium Flowers",
          "Smoked Bamboo Shoots (Rawtuai)"
        ],
        "hubDescription": "Aizawl commands misty mountain ridges, celebrated for high-heat Bird’s Eye chillies and five GI-tagged Mizo Puan textiles."
      },
      {
        "id": "mz-lunglei",
        "districtName": "Lunglei Southern Commercial Nexus",
        "stateName": "Mizoram",
        "countryName": "India",
        "latitude": 22.8872,
        "longitude": 92.7424,
        "verified": true,
        "stockistCount": 160,
        "opportunityCount": 7,
        "categories": [
          "Hill Agriculture",
          "Bamboo Products",
          "Kaladan Corridor",
          "Forest Produce"
        ],
        "availability": "available",
        "primaryMandi": "Bazar Veng Wholesale Market",
        "avgMargin": "22% - 32%",
        "famousFor": "Bridge of Rock, Second Largest City of Mizoram & Kaladan Multi-Modal Transit Gateway to Sittwe Port in Myanmar",
        "famousBusinessType": "Transit Trade, Cross-Border Agro Logistics & Bamboo Processing",
        "keySpecialities": [
          "Bamboo Culms & Handcrafted Baskets",
          "Fresh Mountain Ginger & Turmeric",
          "Kaladan River Route Supplies",
          "Local Forest Honey"
        ],
        "hubDescription": "Lunglei serves southern Mizoram, set to boom as the Kaladan Multi-Modal river corridor opens to the Bay of Bengal."
      }
    ]
  },
  {
    "id": "arunachal-pradesh",
    "name": "Arunachal Pradesh",
    "countryName": "India",
    "latitude": 28.218,
    "longitude": 94.7278,
    "verifiedStockCount": 820,
    "districtCount": 2,
    "totalDistributors": "1,900 Registered Wholesalers",
    "verifiedStockists": "820 Audited Stockists",
    "readinessScore": "93/100 (Land of the Dawn-Lit Mountains)",
    "commercialStatus": "Land of Rising Sun, Kiwi Capital of India, Hydro Power Hub, Orange Orchards & Carpets",
    "tradeCorridor": "Trans-Arunachal Highway NH-13 & Bogibeel Bridge Link",
    "keySectors": [
      "Organic Kiwi (GI)",
      "Large Cardamom",
      "Tibetan Carpets (Tawang)",
      "Clean Hydro Energy",
      "Timber"
    ],
    "districts": [
      {
        "id": "ar-itanagar",
        "districtName": "Itanagar & Naharlagun Twin Capital Hub",
        "stateName": "Arunachal Pradesh",
        "countryName": "India",
        "latitude": 27.0844,
        "longitude": 93.6053,
        "verified": true,
        "stockistCount": 620,
        "opportunityCount": 16,
        "categories": [
          "State Administrative Supplies",
          "Organic Kiwi (GI)",
          "Bamboo Crafts",
          "Large Cardamom"
        ],
        "availability": "high",
        "primaryMandi": "Ganga Market Itanagar & Naharlagun Daily Market",
        "avgMargin": "24% - 38%",
        "famousFor": "State Capital, Ziro Valley Certified Organic Kiwi Fruit (India’s 1st Certified Organic Kiwi), Large Cardamom & Cane Crafts",
        "famousBusinessType": "Organic Kiwi Wine & Pulp Processing, Agro Commodity Trading & Cane Furniture",
        "keySpecialities": [
          "Organic Ziro Kiwi Fruit & Pure Kiwi Wine",
          "Large Black Cardamom Pods",
          "Intricate Cane & Bamboo Hanging Lamps",
          "Traditional Nyishi & Apatani Handlooms"
        ],
        "hubDescription": "Itanagar coordinates trade across sixteen border districts, proud of Ziro Valley’s certified organic kiwi orchards."
      },
      {
        "id": "ar-pasighat",
        "districtName": "Pasighat Oldest Town & Siang River Port",
        "stateName": "Arunachal Pradesh",
        "countryName": "India",
        "latitude": 28.0668,
        "longitude": 95.3265,
        "verified": true,
        "stockistCount": 200,
        "opportunityCount": 8,
        "categories": [
          "Mandarin Oranges",
          "Siang Hydro Projects",
          "Timber",
          "Ginger"
        ],
        "availability": "available",
        "primaryMandi": "Pasighat Main Market & Siang River Terminal",
        "avgMargin": "22% - 32%",
        "famousFor": "Oldest Town of Arunachal Pradesh, Juicy Pasighat Mandarin Oranges, Siang River Mega Hydro Projects & Timber",
        "famousBusinessType": "Mandarin Orange Wholesaling, Hydro Infrastructure Ancillaries & Ginger Trading",
        "keySpecialities": [
          "Sweet Pasighat Mandarin Oranges",
          "High-Fiber Mountain Ginger Roots",
          "Hardwood Pine & Sal Sawn Timber",
          "Siang River Fish Delicacies"
        ],
        "hubDescription": "Pasighat is the gateway along the mighty Siang (Brahmaputra) River, renowned for winter orange groves and hydro logistics."
      }
    ]
  },
  {
    "id": "sikkim",
    "name": "Sikkim",
    "countryName": "India",
    "latitude": 27.533,
    "longitude": 88.5122,
    "verifiedStockCount": 950,
    "districtCount": 2,
    "totalDistributors": "2,200 Channel Partners",
    "verifiedStockists": "950 Audited Stockists",
    "readinessScore": "95/100 (World’s First 100% Organic State)",
    "commercialStatus": "World’s 1st 100% Certified Organic State, Large Cardamom Capital, Temi Tea & Eco-Tourism",
    "tradeCorridor": "Siliguri-Gangtok Highway NH-10 & Nathu La Border Pass",
    "keySectors": [
      "Organic Large Cardamom (GI)",
      "Temi Orthodox Tea",
      "Ginger & Turmeric",
      "Pharma (Tax-Free Hub)",
      "Eco-Tourism"
    ],
    "districts": [
      {
        "id": "sk-gangtok",
        "districtName": "Gangtok Capital & Organic Trade Nexus",
        "stateName": "Sikkim",
        "countryName": "India",
        "latitude": 27.3314,
        "longitude": 88.6138,
        "verified": true,
        "stockistCount": 680,
        "opportunityCount": 18,
        "categories": [
          "Large Cardamom (GI)",
          "Temi Tea",
          "Pharma Formulations",
          "Nathu La Trade"
        ],
        "availability": "high",
        "primaryMandi": "Lall Market (Kanchenjunga Shopping Complex) & MG Marg",
        "avgMargin": "25% - 40%",
        "famousFor": "State Capital, World’s 1st 100% Organic Certified State (UN Future Policy Gold Award), Sikkim Large Cardamom (GI) & Temi Tea",
        "famousBusinessType": "Organic Cardamom Commodity Trading, Single-Estate Temi Black Tea & Clean Pharma",
        "keySpecialities": [
          "Large Brown Cardamom Pods (Elaichi - GI)",
          "Temi 100% Organic Orthodox Black Tea",
          "Dalle Khursani Extra-Hot Round Cherry Pepper (GI)",
          "Clean-Air Formulations Pharma Plants (Alkem, Cipla)"
        ],
        "hubDescription": "Gangtok represents the gold standard of 100% certified organic agriculture, harvesting the world’s largest cardamom crop."
      },
      {
        "id": "sk-namchi",
        "districtName": "Namchi & South Sikkim Temi Tea Garden Belt",
        "stateName": "Sikkim",
        "countryName": "India",
        "latitude": 27.1667,
        "longitude": 88.3667,
        "verified": true,
        "stockistCount": 270,
        "opportunityCount": 10,
        "categories": [
          "Temi Tea Gardens",
          "Pilgrim Statues (Char Dham)",
          "Organic Ginger",
          "Orchids"
        ],
        "availability": "available",
        "primaryMandi": "Namchi Central Market & Temi Tea Factory Complex",
        "avgMargin": "24% - 38%",
        "famousFor": "Temi Tea Estate (Sikkim’s Only Tea Garden producing World-Prized Organic Teas), Siddheshwar Dhaam (Char Dham) & Floriculture",
        "famousBusinessType": "Estate Organic Tea Processing, Spiritual Tourism Retail & Cymbidium Orchids",
        "keySpecialities": [
          "Temi First Flush Muscatel Organic Tea",
          "Cymbidium Cut Flower Orchids",
          "Fresh Organic Washed Ginger Roots",
          "Handcrafted Wooden Choktse Tables"
        ],
        "hubDescription": "Namchi’s slopes house the iconic Temi Tea Estate, producing single-garden organic teas fetching top bids internationally."
      }
    ]
  },
  {
    "id": "ladakh",
    "name": "Ladakh",
    "countryName": "India",
    "latitude": 34.1526,
    "longitude": 77.5771,
    "verifiedStockCount": 640,
    "districtCount": 2,
    "totalDistributors": "1,400 Channel Partners",
    "verifiedStockists": "640 Audited Stockists",
    "readinessScore": "92/100 (Roof of the World & Raw Pashmina)",
    "commercialStatus": "Land of High Passes, Raw Changthangi Pashmina Wool, Seabuckthorn Berry (GI), Apricots & Solar Power",
    "tradeCorridor": "Leh-Manali Highway & Zojila Tunnel Srinagar-Leh NH-1",
    "keySectors": [
      "Raw Pashmina Wool",
      "Raktsey Karpo Apricots (GI)",
      "Seabuckthorn (Leh Berry - GI)",
      "Defense High-Altitude Supplies"
    ],
    "districts": [
      {
        "id": "la-leh",
        "districtName": "Leh High-Altitude Capital & Seabuckthorn Hub",
        "stateName": "Ladakh",
        "countryName": "India",
        "latitude": 34.1526,
        "longitude": 77.5771,
        "verified": true,
        "stockistCount": 480,
        "opportunityCount": 14,
        "categories": [
          "Raw Pashmina Fibers",
          "Seabuckthorn (GI)",
          "Apricots (GI)",
          "Defense Logistics"
        ],
        "availability": "high",
        "primaryMandi": "Main Bazaar Leh & Skalzangling Industrial Area",
        "avgMargin": "26% - 45%",
        "famousFor": "Changthang Raw Pashmina Cashmere (Finest 12-14 Micron Wool), Ladakh Raktsey Karpo Apricot (GI Tag) & Seabuckthorn Superberry (GI Tag)",
        "famousBusinessType": "Fine Pashmina Fiber Processing, Seabuckthorn Juice & Defense High-Altitude Supplies",
        "keySpecialities": [
          "Grade-A Raw Changthangi Pashmina Wool",
          "Ladakh Seabuckthorn Juice & Cosmetics (GI)",
          "Sweet Raktsey Karpo Dried Apricots (GI)",
          "High-Altitude Cold-Weather Rations & Gear"
        ],
        "hubDescription": "Leh harvests the world’s finest cashmere wool on the Changthang plateau alongside golden Seabuckthorn berries."
      },
      {
        "id": "la-kargil",
        "districtName": "Kargil Transit Crossroads & Halman Apricot Valley",
        "stateName": "Ladakh",
        "countryName": "India",
        "latitude": 34.5539,
        "longitude": 76.1349,
        "verified": true,
        "stockistCount": 160,
        "opportunityCount": 7,
        "categories": [
          "Halman Apricots",
          "Zojila Freight Transit",
          "Pashmina",
          "Paddy (Suru Valley)"
        ],
        "availability": "available",
        "primaryMandi": "Kargil Main Bazaar & Dras Valley Transit Hub",
        "avgMargin": "24% - 38%",
        "famousFor": "Historic Silk Route Crossroads, Halman Sweet Soft Apricots, Zojila Tunnel Gateway & Kargil War Memorial (Dras)",
        "famousBusinessType": "Sweet Dried Apricot Wholesale, High-Altitude Road Freight & Pashtun Woolcraft",
        "keySpecialities": [
          "Halman Sweet Soft Sun-Dried Apricots",
          "Apricot Kernel Cold-Pressed Oil",
          "Pure Raw Pashmina Wool Bags",
          "Heavy Winter Woollen Socks & Caps"
        ],
        "hubDescription": "Kargil links Kashmir to Leh across the Zojila pass, known for the sweetest sun-dried Halman apricots in the Himalayas."
      }
    ]
  },
  {
    "id": "dadra-nagar-haveli-daman-diu",
    "name": "Dadra and Nagar Haveli and Daman and Diu",
    "countryName": "India",
    "latitude": 20.3974,
    "longitude": 72.8328,
    "verifiedStockCount": 1480,
    "districtCount": 3,
    "totalDistributors": "3,400 Registered Wholesalers",
    "verifiedStockists": "1,480 Audited Stockists",
    "readinessScore": "96/100 (Tax-Concession Industrial Powerhouse)",
    "commercialStatus": "High-Density Industrial Parks, Yarn Spinning, Plastics, Pharma & Coastal Tourism",
    "tradeCorridor": "Mumbai-Ahmedabad National Expressway NH-48 Corridor",
    "keySectors": [
      "Textile Yarn & Fabrics",
      "Plastic Moulding",
      "Pharmaceuticals",
      "Consumer Electronics",
      "Liquor & Tourism"
    ],
    "districts": [
      {
        "id": "dn-silvassa",
        "districtName": "Silvassa Industrial Powerhouse",
        "stateName": "Dadra and Nagar Haveli and Daman and Diu",
        "countryName": "India",
        "latitude": 20.2763,
        "longitude": 73.0083,
        "verified": true,
        "stockistCount": 780,
        "opportunityCount": 22,
        "categories": [
          "Polyester Yarn (Alok, Welspun)",
          "Plastic Tanks (Sintex)",
          "Consumer Electronics",
          "Pharma"
        ],
        "availability": "high",
        "primaryMandi": "Piparia Industrial Estate & Danudyog Industrial Belt",
        "avgMargin": "20% - 28%",
        "famousFor": "Major Tax-Exempt Manufacturing Cluster (Alok Industries, Welspun Towels, Sintex Plastics, Gulf Oil Lubricants)",
        "famousBusinessType": "Textile Synthetic Yarn Texturizing, Rotomoulded Water Tanks & Consumer Appliances",
        "keySpecialities": [
          "Fully Drawn Yarn (FDY) & Texturized Yarn",
          "Sintex Plastic Water Storage Tanks",
          "Terry Bath Towels & Bed Linen",
          "Automotive Lubricating Oils"
        ],
        "hubDescription": "Silvassa hosts state-of-the-art automated factories manufacturing synthetic yarn, plastic tanks, and home linen."
      },
      {
        "id": "dn-daman",
        "districtName": "Daman Coastal Plastic & Pharma Corridor",
        "stateName": "Dadra and Nagar Haveli and Daman and Diu",
        "countryName": "India",
        "latitude": 20.3974,
        "longitude": 72.8328,
        "verified": true,
        "stockistCount": 520,
        "opportunityCount": 16,
        "categories": [
          "Plastic Packaging",
          "Pharmaceuticals",
          "Liquor Distilleries",
          "Beach Tourism"
        ],
        "availability": "high",
        "primaryMandi": "Kachigam Industrial Estate & Dabhel Industrial Hub",
        "avgMargin": "22% - 30%",
        "famousFor": "Plastic Injection Moulding & Packaging Hub, Formulation Pharma Plants & Weekend Beach Tourism",
        "famousBusinessType": "Rigid Plastic Packaging Containers, Pharma Dosage Formulations & Distilled Spirits",
        "keySpecialities": [
          "Plastic Buckets, Crates & Containers",
          "Generic Pharma Tablets & Ointments",
          "Packaged Consumer Spirits",
          "Fresh Marine Prawns"
        ],
        "hubDescription": "Daman combines manufacturing of plastic bottles and containers with coastal tourism from Gujarat and Maharashtra."
      },
      {
        "id": "dn-diu",
        "districtName": "Diu Island Fort & Marine Fisheries",
        "stateName": "Dadra and Nagar Haveli and Daman and Diu",
        "countryName": "India",
        "latitude": 20.7144,
        "longitude": 70.9874,
        "verified": true,
        "stockistCount": 180,
        "opportunityCount": 8,
        "categories": [
          "Marine Fisheries",
          "Portuguese Fort Tourism",
          "Cashew Drinks",
          "Salt"
        ],
        "availability": "available",
        "primaryMandi": "Vanikpara Market & Diu Deep-Sea Fishing Jetty",
        "avgMargin": "22% - 32%",
        "famousFor": "Portuguese Island Fortress, Nagoa Beach Tourism & Deep-Sea Marine Fishing Harbor at Vanakbara",
        "famousBusinessType": "Deep-Sea Fish Trawler Operations, Coastal Hospitality & Solar Energy",
        "keySpecialities": [
          "Frozen Pomfret, Kingfish & Prawns",
          "Hospitality Beverage Distribution",
          "Sea Salt Extraction",
          "Hoka Tree Palm Beverages"
        ],
        "hubDescription": "Diu is an island haven off the Saurashtra coast, landing deep-sea marine catch at the bustling Vanakbara harbor."
      }
    ]
  },
  {
    "id": "andaman-nicobar",
    "name": "Andaman and Nicobar Islands",
    "countryName": "India",
    "latitude": 11.7401,
    "longitude": 92.6586,
    "verifiedStockCount": 720,
    "districtCount": 1,
    "totalDistributors": "1,600 Channel Partners",
    "verifiedStockists": "720 Audited Stockists",
    "readinessScore": "94/100 (Emerald Island Outpost & Maritime Port)",
    "commercialStatus": "Emerald Islands, Strategic Indo-Pacific Maritime Corridor, Deep-Sea Tuna Fisheries & Virgin Coconut Oil",
    "tradeCorridor": "Malacca Strait Oceanic Sea Lane & Port Blair Maritime Freight",
    "keySectors": [
      "Deep-Sea Tuna Fisheries",
      "Virgin Coconut Oil",
      "Island Eco-Tourism",
      "Maritime Port Cargo"
    ],
    "districts": [
      {
        "id": "an-port-blair",
        "districtName": "Port Blair & South Andaman Maritime Gateway",
        "stateName": "Andaman and Nicobar Islands",
        "countryName": "India",
        "latitude": 11.6234,
        "longitude": 92.7265,
        "verified": true,
        "stockistCount": 720,
        "opportunityCount": 22,
        "categories": [
          "Deep-Sea Yellowfin Tuna",
          "Virgin Coconut Oil",
          "Cellular Jail Heritage",
          "Port Freight"
        ],
        "availability": "high",
        "primaryMandi": "Aberdeen Bazaar Wholesale Mart & Haddo Deepwater Wharf",
        "avgMargin": "24% - 38%",
        "famousFor": "Capital City, Historic Cellular Jail, Strategic Maritime Outpost over Strait of Malacca, Sashimi-Grade Yellowfin Tuna & Virgin Coconut Oil",
        "famousBusinessType": "Deep-Sea Sashimi Tuna Processing, Cold-Pressed Coconut Oil & Island Maritime Logistics",
        "keySpecialities": [
          "Sashimi-Grade Chilled Yellowfin Tuna",
          "Cold-Pressed Virgin Coconut Oil",
          "Carved Coconut Shell & Pearl Shell Crafts",
          "Island Hospitality & Ship Chandler Supplies"
        ],
        "hubDescription": "Port Blair guards the entrance to the Strait of Malacca, exporting sashimi-grade yellowfin tuna and pure virgin coconut oil."
      }
    ]
  },
  {
    "id": "lakshadweep",
    "name": "Lakshadweep",
    "countryName": "India",
    "latitude": 10.5667,
    "longitude": 72.6417,
    "verifiedStockCount": 420,
    "districtCount": 1,
    "totalDistributors": "850 Channel Partners",
    "verifiedStockists": "420 Audited Stockists",
    "readinessScore": "92/100 (Coral Atolls & Pole-and-Line Tuna)",
    "commercialStatus": "Coral Atoll Archipelago, Pole-and-Line Skipjack Tuna (Masmin), Organic Coconut & Coral Island Eco-Tourism",
    "tradeCorridor": "Kochi-Lakshadweep Coastal Shipping Lane",
    "keySectors": [
      "Masmin Cured Tuna",
      "Desiccated Coconut",
      "Coir Yarn",
      "Eco-Tourism"
    ],
    "districts": [
      {
        "id": "ld-kavaratti",
        "districtName": "Kavaratti & Agatti Coral Atoll Hub",
        "stateName": "Lakshadweep",
        "countryName": "India",
        "latitude": 10.5667,
        "longitude": 72.6417,
        "verified": true,
        "stockistCount": 420,
        "opportunityCount": 12,
        "categories": [
          "Masmin Smoked Tuna",
          "Organic Coconut",
          "Coir Fiber",
          "Coral Tourism"
        ],
        "availability": "available",
        "primaryMandi": "Kavaratti Island Central Cooperative & Agatti Wharf",
        "avgMargin": "25% - 42%",
        "famousFor": "Union Territory Capital, 100% Sustainable Pole-and-Line Skipjack Tuna (Masmin - Hard Smoked Tuna Export) & Organic Coconut Palms",
        "famousBusinessType": "Smoked Masmin Tuna Processing, Organic Desiccated Coconut & Atoll Coir Twisting",
        "keySpecialities": [
          "Masmin (Traditional Hard-Smoked Tuna Sticks)",
          "Organic Micro-Climate Coconuts & Copra",
          "Hand-Twisted White Coir Fiber Yarn",
          "Eco-Lagoon Tourism Services"
        ],
        "hubDescription": "Kavaratti operates India’s only 100% dolphin-safe pole-and-line tuna fishery, exporting wood-smoked Masmin tuna to Japan and Sri Lanka."
      }
    ]
  },
  {
    "id": "west-bengal",
    "name": "West Bengal",
    "countryName": "India",
    "latitude": 22.9868,
    "longitude": 87.855,
    "verifiedStockCount": 3890,
    "districtCount": 9,
    "totalDistributors": "13,500 Registered Dealers",
    "verifiedStockists": "3,890 Verified Stockists",
    "readinessScore": "96/100 (Eastern Gateway & Trade Artery)",
    "commercialStatus": "Gateway to North-East India, Jute Mills, Tea Auctions, Heavy Engineering & Sweets",
    "tradeCorridor": "Haldia & Kolkata Ports to Eastern Dedicated Freight Corridor",
    "keySectors": [
      "Tea & Agro",
      "Jute & Packaging",
      "Steel & Foundry",
      "Leather Goods",
      "Sweets & Confectionery"
    ],
    "districts": [
      {
        "id": "wb-kolkata-howrah",
        "districtName": "Kolkata & Howrah Commercial Nexus",
        "stateName": "West Bengal",
        "countryName": "India",
        "latitude": 22.5726,
        "longitude": 88.3639,
        "verified": true,
        "stockistCount": 1450,
        "opportunityCount": 46,
        "categories": [
          "Jute & Textiles",
          "Foundry & Castings",
          "Leather Goods",
          "Confectionery"
        ],
        "availability": "high",
        "primaryMandi": "Burrabazar Wholesale Mart (Asia’s Vast Trading Nexus) & Posta Mandi",
        "avgMargin": "22% - 32%",
        "famousFor": "Burrabazar (Asia’s Great Wholesale Trading Hub), Howrah Foundry / Engineering Hub & Bengal Sweets (Rosogolla - GI)",
        "famousBusinessType": "Jute Packaging, Iron Foundry Castings, Finished Leather & Food Products",
        "keySpecialities": [
          "Jute Sacking Bags & Twine",
          "Sanitary Cast Iron Fittings",
          "Export Finished Leather Bags & Belts",
          "Traditional Rosogolla & Sandesh"
        ],
        "hubDescription": "Kolkata and Howrah form the historic commercial heart of East India, handling wholesale distribution across Bengal and neighboring states."
      },
      {
        "id": "wb-siliguri",
        "districtName": "Siliguri North-East Chicken’s Neck Gateway",
        "stateName": "West Bengal",
        "countryName": "India",
        "latitude": 26.7271,
        "longitude": 88.3953,
        "verified": true,
        "stockistCount": 680,
        "opportunityCount": 28,
        "categories": [
          "Tea Auctions",
          "Timber",
          "Cross-Border Freight",
          "FMCG Gateway"
        ],
        "availability": "high",
        "primaryMandi": "Siliguri Tea Auction Committee & Regulated Market Yard",
        "avgMargin": "24% - 35%",
        "famousFor": "Chicken’s Neck Trade Gateway to 8 North-East States, Siliguri Tea Auction Centre & Nepal/Bhutan Cross-Border Transit",
        "famousBusinessType": "Tea Auction Trading, Cross-Border Logistics & Northeast Distribution",
        "keySpecialities": [
          "CTC & Orthodox Tea Blends",
          "Pine & Sal Timber Sawn Wood",
          "Transit Cold-Storage Logistics",
          "Consumer Packaged Goods"
        ],
        "hubDescription": "Siliguri commands the vital geographic corridor linking mainland India to the seven North-Eastern states, Bhutan, and Nepal."
      },
      {
        "id": "wb-asansol-durgapur",
        "districtName": "Asansol & Durgapur Steel & Power Corridor",
        "stateName": "West Bengal",
        "countryName": "India",
        "latitude": 23.6889,
        "longitude": 86.9661,
        "verified": true,
        "stockistCount": 520,
        "opportunityCount": 22,
        "categories": [
          "Steel & Alloy",
          "Coal Mining",
          "Heavy Machinery",
          "Cement"
        ],
        "availability": "available",
        "primaryMandi": "Durgapur Steel Industrial Area & Raniganj Coal Belt",
        "avgMargin": "20% - 28%",
        "famousFor": "Ruhr of India, SAIL Durgapur Steel Plant, Alloy Steel & Raniganj Coalfields (India’s Oldest Coal Mine)",
        "famousBusinessType": "Structural Steel Rolling, Alloy Steels & Coal Mining",
        "keySpecialities": [
          "SAIL Structural Steel Sections & Rails",
          "Specialty Alloy Steel Billets",
          "Thermal Coal & Coke",
          "Heavy Mining Equipment Spares"
        ],
        "hubDescription": "Asansol and Durgapur anchor the heavy industrial belt of Bengal, supplying structural steel and coal power."
      },
      {
        "id": "wb-darjeeling",
        "districtName": "Darjeeling Champagne of Teas Hub",
        "stateName": "West Bengal",
        "countryName": "India",
        "latitude": 27.041,
        "longitude": 88.2663,
        "verified": true,
        "stockistCount": 280,
        "opportunityCount": 14,
        "categories": [
          "Darjeeling Tea (GI)",
          "Oranges",
          "Cardamom",
          "Woollens"
        ],
        "availability": "available",
        "primaryMandi": "Darjeeling Planters Association & Chowrasta Mart",
        "avgMargin": "28% - 48%",
        "famousFor": "Champagne of Teas (Darjeeling Tea - India’s 1st GI Tag), Large Black Cardamom & High-Altitude Tourism",
        "famousBusinessType": "Single-Estate Orthodox Tea Processing & Large Cardamom",
        "keySpecialities": [
          "First & Second Flush Muscatel Darjeeling Teas",
          "Large Black Cardamom (Alaichi)",
          "Mandarin Hill Oranges",
          "Handmade Tibetan Woollens"
        ],
        "hubDescription": "Darjeeling produces the most prized orthodox black teas in the world, savored in tea salons across London, Tokyo, and Paris."
      },
      {
        "id": "wb-malda",
        "districtName": "Malda Mango Capital & Mulberry Silk",
        "stateName": "West Bengal",
        "countryName": "India",
        "latitude": 25.0108,
        "longitude": 88.1411,
        "verified": true,
        "stockistCount": 340,
        "opportunityCount": 15,
        "categories": [
          "Fazli & Himsagar Mango",
          "Raw Silk Weaving",
          "Jute",
          "Honey"
        ],
        "availability": "available",
        "primaryMandi": "English Bazar Fruit Mandi & Sujapur Silk Mart",
        "avgMargin": "22% - 30%",
        "famousFor": "Mango Capital of Bengal (Fazli, Himsagar & Lakshmanbhog - GI Tags) & Mulberry Silk Cocoon Reeling",
        "famousBusinessType": "Mango Wholesale Trading & Mulberry Silk Reeling",
        "keySpecialities": [
          "GI-Tagged Himsagar & Fazli Mangoes",
          "Raw Mulberry Silk Yarn",
          "Pure Forest Honey",
          "Raw Jute Fibers"
        ],
        "hubDescription": "Malda produces Bengal’s prized GI-tagged mango varieties and is the premier center for mulberry silk cocoon farming."
      },
      {
        "id": "wb-kharagpur",
        "districtName": "Kharagpur Engineering & Logistics Junction",
        "stateName": "West Bengal",
        "countryName": "India",
        "latitude": 22.346,
        "longitude": 87.232,
        "verified": true,
        "stockistCount": 380,
        "opportunityCount": 16,
        "categories": [
          "Railway Spares",
          "Cement",
          "Chemicals",
          "Mat Handloom"
        ],
        "availability": "available",
        "primaryMandi": "Vidyasagar Industrial Park & Kharagpur Rail Yard",
        "avgMargin": "20% - 28%",
        "famousFor": "One of the World’s Longest Railway Platforms, IIT Kharagpur, Tata Hitachi Construction Equipment & Madur Kathi Mats",
        "famousBusinessType": "Heavy Construction Machinery Assembly & Railway Spares",
        "keySpecialities": [
          "Hydraulic Excavators & Backhoes (Hitachi)",
          "Railway Signaling & Track Equipment",
          "Madur Kathi Natural Grass Mats (GI)",
          "Portland Slag Cement"
        ],
        "hubDescription": "Kharagpur is the premier railway junction connecting eastern mineral lines with ports and industrial hubs."
      },
      {
        "id": "wb-haldia",
        "districtName": "Haldia Petrochemical & Port Gateway",
        "stateName": "West Bengal",
        "countryName": "India",
        "latitude": 22.0574,
        "longitude": 88.0725,
        "verified": true,
        "stockistCount": 320,
        "opportunityCount": 14,
        "categories": [
          "Petrochemicals",
          "Polymers",
          "Edible Oils",
          "Fertilizers"
        ],
        "availability": "available",
        "primaryMandi": "Haldia Dock Complex & Petrochemical SEZ",
        "avgMargin": "20% - 28%",
        "famousFor": "Haldia Deepwater Port, Haldia Petrochemicals (HPL Polymers), Edible Oil Refineries & Chemical Fertilizer",
        "famousBusinessType": "Petrochemical Polymers, Port Cargo Logistics & Edible Oils",
        "keySpecialities": [
          "High-Density Polyethylene (HDPE/LLDPE)",
          "Refined Edible Palm & Soybean Oil",
          "Marine Container Stevedoring",
          "Phosphatic Chemical Fertilizers"
        ],
        "hubDescription": "Haldia is East India’s premier downstream petrochemical manufacturing and coastal maritime port."
      },
      {
        "id": "wb-bardhaman",
        "districtName": "Bardhaman (Burdwan) Rice Bowl & Sitabhog Hub",
        "stateName": "West Bengal",
        "countryName": "India",
        "latitude": 23.2324,
        "longitude": 87.8615,
        "verified": true,
        "stockistCount": 360,
        "opportunityCount": 16,
        "categories": [
          "Gobindobhog Rice",
          "Sitabhog & Mihidana",
          "Rice Bran Oil",
          "Paddy"
        ],
        "availability": "available",
        "primaryMandi": "Burdwan Sadar Anaj Mandi & Memari Rice Mill Belt",
        "avgMargin": "20% - 28%",
        "famousFor": "Rice Bowl of Bengal (Gobindobhog Fragrant Rice - GI Tag) & Heritage Sweets Sitabhog and Mihidana (GI Tag)",
        "famousBusinessType": "Paddy Rice Milling, Rice Bran Oil Extraction & Heritage Sweets",
        "keySpecialities": [
          "Fragrant Gobindobhog Short-Grain Rice (GI)",
          "Authentic Sitabhog & Mihidana Sweets",
          "Refined Health Rice Bran Oil",
          "Parboiled Rice Shelling"
        ],
        "hubDescription": "Bardhaman is the agricultural food basket of Bengal, celebrated for aromatic Gobindobhog rice and royal sweets."
      },
      {
        "id": "wb-murshidabad",
        "districtName": "Murshidabad Silk Sarees & Brass Utensils Hub",
        "stateName": "West Bengal",
        "countryName": "India",
        "latitude": 24.1754,
        "longitude": 88.2802,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 13,
        "categories": [
          "Baluchari Silk",
          "Bell Metal Craft",
          "Beedi Rolling",
          "Jute"
        ],
        "availability": "available",
        "primaryMandi": "Berhampore Silk Market & Khagra Brass Mart",
        "avgMargin": "24% - 35%",
        "famousFor": "Historic Capital of Bengal Nawabs, Baluchari & Murshidabad Printed Silk Sarees & Khagra Bell-Metal Utensils",
        "famousBusinessType": "Pure Mulberry Silk Weaving, Bell-Metal (Kansa) Utensils & Beedi Rolling",
        "keySpecialities": [
          "Murshidabad Printed Pure Silk Sarees",
          "Baluchari Mythological Motif Sarees",
          "Khagra Hand-Forged Bell-Metal Plates",
          "Hand-Rolled Bidi Bundles"
        ],
        "hubDescription": "Murshidabad carries royal handloom pedigree, weaving fine mulberry silk and beating bell-metal vessels in Khagra."
      }
    ]
  },
  {
    "id": "madhya-pradesh",
    "name": "Madhya Pradesh",
    "countryName": "India",
    "latitude": 22.9734,
    "longitude": 78.6569,
    "verifiedStockCount": 4100,
    "districtCount": 10,
    "totalDistributors": "13,200 Channel Wholesalers",
    "verifiedStockists": "4,100 Verified Stockists",
    "readinessScore": "97/100 (Soybean, Pulses & Cleanest City Hub)",
    "commercialStatus": "Heart of India, Soy Capital, Cleanest City (Indore), Wheat Sharbati & Heavy Electricals",
    "tradeCorridor": "Delhi-Mumbai Freight Corridor & Agra-Bombay National Highway",
    "keySectors": [
      "Soybean & Oilseeds",
      "Namkeen & Confectionery",
      "Sharbati Wheat",
      "Pharmaceuticals",
      "Cement & Minerals"
    ],
    "districts": [
      {
        "id": "mp-indore",
        "districtName": "Indore Commercial Capital & Namkeen Hub",
        "stateName": "Madhya Pradesh",
        "countryName": "India",
        "latitude": 22.7196,
        "longitude": 75.8577,
        "verified": true,
        "stockistCount": 1320,
        "opportunityCount": 44,
        "categories": [
          "Indori Namkeen",
          "Soybean Oil",
          "Pharmaceuticals",
          "Textiles"
        ],
        "availability": "high",
        "primaryMandi": "Chhawani Grain & Oilseed Mandi & Sanwer Road Industrial Zone",
        "avgMargin": "24% - 36%",
        "famousFor": "Commercial Capital of MP, Cleanest City of India (7 Times Champion), Indori Sev/Namkeen (GI Tag) & Pithampur Auto Hub",
        "famousBusinessType": "Namkeen Snacks & Sev Manufacturing, Soybean Processing & Pharma Formulations",
        "keySpecialities": [
          "Indori Ujjaini & Laung Sev (GI Tag)",
          "Refined Soybean Cooking Oil",
          "Generic Pharma Tablets (Cipla, Lupin)",
          "Ready-to-Cook Poha & Spices"
        ],
        "hubDescription": "Indore is the commercial and gastronomic capital of Central India, producing legendary namkeen snacks and pharma formulations."
      },
      {
        "id": "mp-bhopal",
        "districtName": "Bhopal City of Lakes & Heavy Electricals",
        "stateName": "Madhya Pradesh",
        "countryName": "India",
        "latitude": 23.2599,
        "longitude": 77.4126,
        "verified": true,
        "stockistCount": 650,
        "opportunityCount": 26,
        "categories": [
          "Heavy Electricals (BHEL)",
          "Zari Zardozi",
          "Chemicals",
          "IT Parks"
        ],
        "availability": "high",
        "primaryMandi": "Govindpura Industrial Area & BHEL Manufacturing Complex",
        "avgMargin": "22% - 30%",
        "famousFor": "State Capital, BHEL Heavy Electrical Turbines & Transformers, Bhopal Zari-Zardozi Purses & Sharbati Wheat Trade",
        "famousBusinessType": "Heavy Electrical Machinery, Power Generation Turbines & Zari Purses",
        "keySpecialities": [
          "Hydro & Thermal Turbines (BHEL)",
          "Large Power Transformers",
          "Handcrafted Velvet Zari Batwas & Purses",
          "Premium Sehore Sharbati Wheat"
        ],
        "hubDescription": "Bhopal combines administrative governance with heavy industrial engineering at BHEL and heritage zari batwa craft."
      },
      {
        "id": "mp-gwalior",
        "districtName": "Gwalior Chanderi Handlooms & Suiting Hub",
        "stateName": "Madhya Pradesh",
        "countryName": "India",
        "latitude": 26.2183,
        "longitude": 78.1828,
        "verified": true,
        "stockistCount": 480,
        "opportunityCount": 20,
        "categories": [
          "Chanderi Silk",
          "Gwalior Suiting",
          "Stone Carving",
          "Dairy"
        ],
        "availability": "available",
        "primaryMandi": "Malanpur Industrial Area & Bada Wholesale Cloth Market",
        "avgMargin": "24% - 35%",
        "famousFor": "Historic Fort City, Famous Gwalior Suiting (Grasim), Chanderi Silk Sarees (GI Tag) & Malanpur Confectionery (Cadbury/Mondelez)",
        "famousBusinessType": "Chanderi Handloom Weaving, Worsted Suiting & Confectionery Chocolates",
        "keySpecialities": [
          "Chanderi Silk-Cotton Zari Sarees",
          "Worsted Woollen Blend Suiting",
          "Malanpur Chocolate Confectionery",
          "Gwalior Mint Carved Sandstone"
        ],
        "hubDescription": "Gwalior is the commercial crown of northern MP, famous for classic Gwalior suiting, Chanderi sarees, and chocolate plants."
      },
      {
        "id": "mp-jabalpur",
        "districtName": "Jabalpur Defense Ordinance & Marble Rocks Hub",
        "stateName": "Madhya Pradesh",
        "countryName": "India",
        "latitude": 23.1815,
        "longitude": 79.9864,
        "verified": true,
        "stockistCount": 460,
        "opportunityCount": 19,
        "categories": [
          "Defense Vehicles",
          "Garment Clusters",
          "Bhedaghat Marble",
          "Iron Ore"
        ],
        "availability": "available",
        "primaryMandi": "Richhai Industrial Area & Vehicle Factory Jabalpur (VFJ)",
        "avgMargin": "22% - 30%",
        "famousFor": "Vehicle Factory Jabalpur (VFJ - Shaktiman / Stallion Military Trucks), Ordinance Factories & Bhedaghat White Marble Crafts",
        "famousBusinessType": "Defense Military Vehicles, Ready-Made Garments & Marble Carving",
        "keySpecialities": [
          "Military Heavy Armored Vehicles",
          "Cotton Salwar Suits & Shirts",
          "Carved Soft White Marble Statues",
          "Paddy & Soybean Milling"
        ],
        "hubDescription": "Jabalpur equips India’s armed forces with defense vehicles while mining dazzling white marble along the Narmada River."
      },
      {
        "id": "mp-ujjain",
        "districtName": "Ujjain Mahakal Temple Pilgrimage & Soybean Hub",
        "stateName": "Madhya Pradesh",
        "countryName": "India",
        "latitude": 23.1765,
        "longitude": 75.7885,
        "verified": true,
        "stockistCount": 410,
        "opportunityCount": 18,
        "categories": [
          "Mahakal Souvenirs",
          "Batik Prints",
          "Soybean Crushing",
          "Wheat"
        ],
        "availability": "available",
        "primaryMandi": "Ujjain Krishi Upaj Mandi (One of India’s Largest Soybean Yards)",
        "avgMargin": "22% - 32%",
        "famousFor": "Shri Mahakaleshwar Jyotirlinga (Simhastha Kumbh), Massive Soybean Oil Extraction & Bherugarh Wax Batik Handprints (GI)",
        "famousBusinessType": "Soybean Oilseed Crushing, Pilgrim Hospitality Retail & Batik Handprints",
        "keySpecialities": [
          "Solvent-Extracted Soybean Meal (DOC)",
          "Wax Batik Handblock Bedcovers (GI)",
          "Prasadam Laddoo Confectionery",
          "Aromatic Malwa Wheat Grain"
        ],
        "hubDescription": "Ujjain witnesses huge religious tourism around Mahakal corridor, alongside one of India’s largest soybean commodity yards."
      },
      {
        "id": "mp-ratlam",
        "districtName": "Ratlam Sev Namkeen & Sona Mandi",
        "stateName": "Madhya Pradesh",
        "countryName": "India",
        "latitude": 23.3315,
        "longitude": 75.0367,
        "verified": true,
        "stockistCount": 380,
        "opportunityCount": 16,
        "categories": [
          "Ratlami Sev (GI)",
          "Gold Jewellery",
          "Wheat & Opium",
          "Chemicals"
        ],
        "availability": "available",
        "primaryMandi": "Manek Chowk Sarafa Mandi & Ratlam Grain Market",
        "avgMargin": "24% - 36%",
        "famousFor": "Ratlami Sev (GI Tag - Spicy Clove-Flavored Crispy Gram Flour Snack), Pure Gold Jewellery (Sarafa) & Western Rail Junction",
        "famousBusinessType": "Ratlami Sev & Namkeen Manufacturing, Hallmarked Gold Ornaments & Spices",
        "keySpecialities": [
          "Authentic Clove Ratlami Sev (GI)",
          "Pure 22K Hallmarked Gold Ornaments",
          "Malwa Sharbati Wheat Flour",
          "Active Pharma Ingredients (IPCA)"
        ],
        "hubDescription": "Ratlam is legendary throughout India for its spicy clove-infused Ratlami Sev and trusted pure gold bullion markets."
      },
      {
        "id": "mp-katni",
        "districtName": "Katni City of Lime & Marble Hub",
        "stateName": "Madhya Pradesh",
        "countryName": "India",
        "latitude": 23.8343,
        "longitude": 80.3957,
        "verified": true,
        "stockistCount": 320,
        "opportunityCount": 14,
        "categories": [
          "Quicklime & Hydrated Lime",
          "Katni Marble",
          "Bauxite",
          "Pulses"
        ],
        "availability": "available",
        "primaryMandi": "Katni Mineral Industrial Area & Dal Mill Cluster",
        "avgMargin": "22% - 30%",
        "famousFor": "City of Lime (Produces High-Grade Quicklime & Calcium Carbonate for Steel/Sugar Plants), Katni Yellow Marble & Dal Mills",
        "famousBusinessType": "Chemical Lime Manufacturing, Dimensional Marble & Pulse Processing",
        "keySpecialities": [
          "High-Purity Chemical Quicklime",
          "Katni Beige & Yellow Polished Marble",
          "Pigeon Pea (Tur Dal) Processing",
          "Bauxite & Refractory Fireclay"
        ],
        "hubDescription": "Katni supplies essential chemical lime to steel and sugar mills nationwide, backed by its yellow marble quarries."
      },
      {
        "id": "mp-dewas",
        "districtName": "Dewas Bank Note Press & Soybean Corridor",
        "stateName": "Madhya Pradesh",
        "countryName": "India",
        "latitude": 22.9676,
        "longitude": 76.0534,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 13,
        "categories": [
          "Currency Inks",
          "Soybean Extraction",
          "Leather Tanning (Tata)",
          "Pumps"
        ],
        "availability": "available",
        "primaryMandi": "Dewas Industrial Area Phases I-III & BNP Complex",
        "avgMargin": "20% - 28%",
        "famousFor": "Bank Note Press (BNP - Prints Indian Rupee Banknotes & Security Inks), Tata Finished Leather & Soya Refining",
        "famousBusinessType": "Security Currency Printing, Finished Leather Tanning & Soya Food Products",
        "keySpecialities": [
          "High-Security Security Inks & Currency Paper",
          "Finished Leather Shoes & Garments",
          "Defatted Soya Flour & Chunks",
          "Industrial Centrifugal Pumps"
        ],
        "hubDescription": "Dewas prints Indian currency banknotes and security inks, while processing vast volumes of soybean and leather goods."
      },
      {
        "id": "mp-satna",
        "districtName": "Satna Cement Capital of India",
        "stateName": "Madhya Pradesh",
        "countryName": "India",
        "latitude": 24.582,
        "longitude": 80.8322,
        "verified": true,
        "stockistCount": 340,
        "opportunityCount": 15,
        "categories": [
          "Portland Cement (Prism, Birla)",
          "Limestone",
          "Mustard",
          "Chitrakoot Craft"
        ],
        "availability": "available",
        "primaryMandi": "Satna Cement Industrial Belt & Maihar Temple Area",
        "avgMargin": "20% - 28%",
        "famousFor": "Cement Capital of India (Prism Johnson, Birla Corporation, UltraTech - High Limestone Reserves) & Maihar Sharda Devi Pilgrimage",
        "famousBusinessType": "Portland Cement Manufacturing, Limestone Quarrying & Brass Band Music",
        "keySpecialities": [
          "Portland Pozzolana Cement (PPC)",
          "High-Grade Industrial Limestone Slabs",
          "Mustard Oil Extraction",
          "Chitrakoot Wooden Lacquer Toys"
        ],
        "hubDescription": "Satna’s vast limestone reserves power many of India’s largest cement plants, shipping cement across north and central India."
      },
      {
        "id": "mp-rewa",
        "districtName": "Rewa White Tiger Land & Mega Solar Park",
        "stateName": "Madhya Pradesh",
        "countryName": "India",
        "latitude": 24.5362,
        "longitude": 81.3037,
        "verified": true,
        "stockistCount": 260,
        "opportunityCount": 11,
        "categories": [
          "Solar Energy (750 MW)",
          "Sunderja Mango",
          "Betel Nut Craft",
          "Cement"
        ],
        "availability": "available",
        "primaryMandi": "Rewa Ultra Mega Solar Park & Anaj Mandi",
        "avgMargin": "22% - 30%",
        "famousFor": "Land of White Tigers, Rewa Ultra Mega Solar Power Project (750 MW - Powers Delhi Metro), Sunderja Mangoes (GI) & Supari Toys",
        "famousBusinessType": "Solar Clean Energy, Sunderja Mango Cultivation & Arecanut Toys",
        "keySpecialities": [
          "Solar Power Generation",
          "Sugar-Free Sunderja Mangoes (GI)",
          "Carved Arecanut (Supari) Figurine Toys (GI)",
          "Limestone Crushing Aggregates"
        ],
        "hubDescription": "Rewa powers Delhi Metro with one of Asia’s largest single-site solar parks and preserves rare sugar-free Sunderja mangoes."
      }
    ]
  },
  {
    "id": "telangana",
    "name": "Telangana",
    "countryName": "India",
    "latitude": 18.1124,
    "longitude": 79.0193,
    "verifiedStockCount": 3880,
    "districtCount": 8,
    "totalDistributors": "12,500 Registered Distributors",
    "verifiedStockists": "3,880 Verified Stockists",
    "readinessScore": "98/100 (Genome Valley & Tech Corridor)",
    "commercialStatus": "Bulk Drug Capital of India, IT Cyberabad, Turmeric, Pembarthi Brass & Rice Mills",
    "tradeCorridor": "Hyderabad-Bengaluru & Hyderabad-Vijayawada Highway Corridors",
    "keySectors": [
      "Pharmaceuticals & Vaccines",
      "IT Hardware",
      "Turmeric",
      "Cotton Ginning",
      "Poultry & Feeds"
    ],
    "districts": [
      {
        "id": "tg-hyderabad",
        "districtName": "Hyderabad & Cyberabad Mega Metro Hub",
        "stateName": "Telangana",
        "countryName": "India",
        "latitude": 17.385,
        "longitude": 78.4867,
        "verified": true,
        "stockistCount": 1650,
        "opportunityCount": 52,
        "categories": [
          "Bulk Drugs & Vaccines",
          "IT Software",
          "Hyderabadi Pearls",
          "Biryani & Haleem"
        ],
        "availability": "high",
        "primaryMandi": "Genome Valley (Shameerpet) & Bowenpally Agricultural Yard",
        "avgMargin": "22% - 32%",
        "famousFor": "Vaccine Capital of the World (Bharat Biotech, Biological E), Cyberabad IT Hub, Natural Pearls & Hyderabadi Haleem (GI Tag)",
        "famousBusinessType": "Active Pharmaceutical Ingredients (API), Vaccines, IT Services & Pearl Jewellery",
        "keySpecialities": [
          "Injectable Vaccines & Bulk APIs",
          "Cultured & Natural Sea Pearls",
          "Hyderabadi Packaged Biryani Masala",
          "Electronic Hardware Assemblies"
        ],
        "hubDescription": "Hyderabad produces one-third of the global vaccine supply through Genome Valley, alongside booming tech corridors."
      },
      {
        "id": "tg-warangal",
        "districtName": "Warangal Cotton, Granite & Brass Craft Hub",
        "stateName": "Telangana",
        "countryName": "India",
        "latitude": 17.9689,
        "longitude": 79.5941,
        "verified": true,
        "stockistCount": 510,
        "opportunityCount": 22,
        "categories": [
          "Cotton Ginning",
          "Pembarthi Sheet Metal",
          "Black Granite",
          "Rice"
        ],
        "availability": "high",
        "primaryMandi": "Enumamula APMC Market (Asia’s 2nd Largest Grain & Cotton Yard)",
        "avgMargin": "20% - 28%",
        "famousFor": "Enumamula APMC Market (Asia’s Second Largest Grain/Chilli Mandi), Pembarthi Sheet Metal Brass Craft (GI Tag) & Kakatiya Textiles",
        "famousBusinessType": "Cotton Ginning & Baling, Brass Metal Artware & High-Grade Black Granite",
        "keySpecialities": [
          "Long Staple Cotton Bales",
          "Pembarthi Brass Idols & Plaques (GI)",
          "Polished Galaxy Black Granite",
          "Parboiled Sona Masoori Rice"
        ],
        "hubDescription": "Warangal operates Asia’s vast Enumamula agricultural yard, moving massive volumes of cotton, chillies, and brassware."
      },
      {
        "id": "tg-nizamabad",
        "districtName": "Nizamabad Turmeric & Sugar Capital",
        "stateName": "Telangana",
        "countryName": "India",
        "latitude": 18.6725,
        "longitude": 78.0941,
        "verified": true,
        "stockistCount": 420,
        "opportunityCount": 18,
        "categories": [
          "Turmeric",
          "Sugar & Ethanol",
          "Beedi Rolling",
          "Paddy"
        ],
        "availability": "high",
        "primaryMandi": "Nizamabad Turmeric Market Yard & Bodhan Sugar Belt",
        "avgMargin": "22% - 30%",
        "famousFor": "Turmeric Hub of Telangana (Supplies Huge Volumes of High-Curcumin Turmeric) & Bodhan Nizam Sugar Factory",
        "famousBusinessType": "Turmeric Processing & Export, Sugar Distilleries & Rice Milling",
        "keySpecialities": [
          "High Curcumin Nizamabad Turmeric Fingers",
          "Refined Crystal Sugar & Bio-Ethanol",
          "Silky Sona Masoori Rice",
          "Natural Beedi Bundles"
        ],
        "hubDescription": "Nizamabad is the premier turmeric auction platform in Telangana, yielding dark golden, high-curcumin rhizomes."
      },
      {
        "id": "tg-karimnagar",
        "districtName": "Karimnagar Silver Filigree & Granite City",
        "stateName": "Telangana",
        "countryName": "India",
        "latitude": 18.4386,
        "longitude": 79.1288,
        "verified": true,
        "stockistCount": 380,
        "opportunityCount": 17,
        "categories": [
          "Silver Filigree (GI)",
          "Tan Brown Granite",
          "Paddy Rice",
          "Poultry"
        ],
        "availability": "available",
        "primaryMandi": "Karimnagar Silver Craft Society & Keshoram Cement Hub",
        "avgMargin": "24% - 35%",
        "famousFor": "Karimnagar Silver Filigree (Tarkashi - GI Tag Fine Silver Wire Craft), Tan Brown Granite Slabs & Commercial Poultry Farms",
        "famousBusinessType": "Silver Filigree Jewellery, Granite Stone Export & Broiler Poultry",
        "keySpecialities": [
          "Hand-Spun Silver Filigree Trays & Brooches (GI)",
          "Tan Brown & Maple Red Granite Slabs",
          "Broiler Chickens & Table Eggs",
          "Sona Masoori Raw Rice"
        ],
        "hubDescription": "Karimnagar is famed for delicate silver filigree metal wirework and world-demanded Tan Brown granite quarries."
      },
      {
        "id": "tg-khammam",
        "districtName": "Khammam Red Chilli & Granite Hub",
        "stateName": "Telangana",
        "countryName": "India",
        "latitude": 17.2473,
        "longitude": 80.1514,
        "verified": true,
        "stockistCount": 360,
        "opportunityCount": 15,
        "categories": [
          "Teja Red Chilli",
          "Coal Mining (SCCL)",
          "Black Granite",
          "Mangoes"
        ],
        "availability": "available",
        "primaryMandi": "Khammam New Chilli Yard & Singareni Collieries Zone",
        "avgMargin": "20% - 28%",
        "famousFor": "Teja Pungent Hot Red Chilli (Major Export to China and SE Asia), Singareni Coalfields (SCCL) & Black Granite",
        "famousBusinessType": "Export Red Chilli Grading, Thermal Coal Mining & Granite Mining",
        "keySpecialities": [
          "Teja Super-Hot Red Dried Chillies",
          "Singareni Thermal Grade Coal",
          "Jet Black Polished Granite",
          "Banginapalli Sweet Mangoes"
        ],
        "hubDescription": "Khammam produces the fiery Teja red chilli variety prized for high oleoresin content and international hot sauces."
      },
      {
        "id": "tg-ramagundam",
        "districtName": "Ramagundam Power City & Fertilizer Complex",
        "stateName": "Telangana",
        "countryName": "India",
        "latitude": 18.8021,
        "longitude": 79.4583,
        "verified": true,
        "stockistCount": 290,
        "opportunityCount": 12,
        "categories": [
          "Thermal Power (NTPC)",
          "RFCL Fertilizer",
          "Coal",
          "Cement"
        ],
        "availability": "available",
        "primaryMandi": "NTPC Super Thermal Power Station & RFCL Complex",
        "avgMargin": "20% - 26%",
        "famousFor": "City of Energy, NTPC Ramagundam (2600 MW Thermal Power) & RFCL Ramagundam Mega Chemical Fertilizer Plant",
        "famousBusinessType": "Thermal Power Generation, Chemical Urea Fertilizer & Coal Supply",
        "keySpecialities": [
          "Neem-Coated Urea (RFCL Kisan Brand)",
          "Thermal Power Generation",
          "Fly Ash for Bricks & Cement",
          "Coal Mining Aggregates"
        ],
        "hubDescription": "Ramagundam lights up South India with massive NTPC thermal units and fertilizes crops via RFCL urea plants."
      },
      {
        "id": "tg-mahbubnagar",
        "districtName": "Mahbubnagar Cotton & Castor Oil Hub",
        "stateName": "Telangana",
        "countryName": "India",
        "latitude": 16.7488,
        "longitude": 78.0035,
        "verified": true,
        "stockistCount": 270,
        "opportunityCount": 11,
        "categories": [
          "Raw Cotton",
          "Castor Oil",
          "Gadwal Handloom Sarees",
          "Groundnut"
        ],
        "availability": "available",
        "primaryMandi": "Jadcherla Industrial Corridor & Gadwal Silk Center",
        "avgMargin": "22% - 30%",
        "famousFor": "Cotton Ginning, Castor Oil Extraction, Jadcherla SEZ Formulations & Gadwal Zari Handloom Sarees (GI Tag)",
        "famousBusinessType": "Cotton Baling, Castor Oil Refining & Zari Silk Weaving",
        "keySpecialities": [
          "Gadwal Pure Silk & Cotton Sarees (GI)",
          "Refined Industrial Castor Oil",
          "Raw Cotton Bales",
          "Pharma Packaging Formulations"
        ],
        "hubDescription": "Mahbubnagar connects Hyderabad to Bangalore, famous for Gadwal sarees woven with pure zari borders."
      },
      {
        "id": "tg-nalgonda",
        "districtName": "Nalgonda Cement & Citrus Sweet Lime Hub",
        "stateName": "Telangana",
        "countryName": "India",
        "latitude": 17.0577,
        "longitude": 79.2684,
        "verified": true,
        "stockistCount": 280,
        "opportunityCount": 12,
        "categories": [
          "Cement Clusters",
          "Sweet Lime (Mosambi)",
          "Paddy Rice",
          "Cotton"
        ],
        "availability": "available",
        "primaryMandi": "Nalgonda Mosambi Yard & Miryalaguda Rice Mill Belt",
        "avgMargin": "20% - 28%",
        "famousFor": "Miryalaguda Modern Rice Mill Cluster (Supplies FCI), High-Capacity Cement Plants & Juicy Mosambi (Sweet Lime)",
        "famousBusinessType": "Parboiled Rice Shelling, Portland Cement & Sweet Lime Trading",
        "keySpecialities": [
          "Parboiled Export Rice",
          "Green Fresh Mosambi (Sweet Lime)",
          "Pozzolana Portland Cement Slabs",
          "Cotton Ginning Seeds"
        ],
        "hubDescription": "Nalgonda’s Miryalaguda belt houses over 400 modern rice mills processing grains for domestic and overseas dining."
      }
    ]
  },
  {
    "id": "kerala",
    "name": "Kerala",
    "countryName": "India",
    "latitude": 10.8505,
    "longitude": 76.2711,
    "verifiedStockCount": 3720,
    "districtCount": 9,
    "totalDistributors": "11,400 Registered Wholesalers",
    "verifiedStockists": "3,720 Audited Stockists",
    "readinessScore": "97/100 (Spice Coast & Maritime Exports)",
    "commercialStatus": "God’s Own Country, Spice Board HQs, Cashew Capital, Rubber, Seafood & Ayurvedic Wellness",
    "tradeCorridor": "Cochin International Seaport & West Coast Coastal Corridor NH-66",
    "keySectors": [
      "Spices & Cardamom",
      "Seafood Exports",
      "Cashew Processing",
      "Natural Rubber",
      "Ayurvedic Wellness"
    ],
    "districts": [
      {
        "id": "kl-kochi",
        "districtName": "Kochi (Cochin) Queen of the Arabian Sea",
        "stateName": "Kerala",
        "countryName": "India",
        "latitude": 9.9312,
        "longitude": 76.2673,
        "verified": true,
        "stockistCount": 1280,
        "opportunityCount": 42,
        "categories": [
          "Spices Board",
          "Seafood Processing",
          "Shipyard",
          "Petrochemicals (BPCL)"
        ],
        "availability": "high",
        "primaryMandi": "International Pepper Exchange (Mattancherry) & Vallarpadam ICTT",
        "avgMargin": "22% - 32%",
        "famousFor": "Spices Capital of India (Indian Spices Board HQ, Mattancherry Black Pepper), Vallarpadam Transshipment Terminal & Cochin Shipyard",
        "famousBusinessType": "Spice Extraction & Commodity Trading, Marine Seafood Exports & Ship Repair",
        "keySpecialities": [
          "Tellicherry Garbled Black Pepper (TGSEB)",
          "Frozen Vannamei Shrimps & Squid",
          "Oleoresins & Essential Spice Oils",
          "Luxury Marine Yacht Repairs"
        ],
        "hubDescription": "Kochi is the historic spice port of India, running the International Pepper Exchange and modern Vallarpadam container port."
      },
      {
        "id": "kl-kollam",
        "districtName": "Kollam Cashew Capital of the World",
        "stateName": "Kerala",
        "countryName": "India",
        "latitude": 8.8932,
        "longitude": 76.6141,
        "verified": true,
        "stockistCount": 480,
        "opportunityCount": 22,
        "categories": [
          "Cashew Processing",
          "Coir Yarn",
          "Marine Fisheries",
          "Titanium"
        ],
        "availability": "high",
        "primaryMandi": "Kollam Cashew Export Council Complex & Neendakara Fishing Port",
        "avgMargin": "24% - 36%",
        "famousFor": "Cashew Capital of the World (Processes and Exports 75% of India’s Quality Cashew Kernels) & Neendakara Fisheries",
        "famousBusinessType": "Cashew Kernel Processing, Cashew Nut Shell Liquid (CNSL) & Marine Seafood",
        "keySpecialities": [
          "W180 & W240 Jumbo Cashew Kernels",
          "Cashew Nut Shell Liquid (CNSL Resin)",
          "Deep-Sea Fish & Prawn Catch",
          "Traditional Coir Mats & Ropes"
        ],
        "hubDescription": "Kollam is the undisputed global hub for cashew processing, roasting and grading the finest dessert cashew kernels."
      },
      {
        "id": "kl-kozhikode",
        "districtName": "Kozhikode (Calicut) Spices, Halwa & Timber Port",
        "stateName": "Kerala",
        "countryName": "India",
        "latitude": 11.2588,
        "longitude": 75.7804,
        "verified": true,
        "stockistCount": 520,
        "opportunityCount": 24,
        "categories": [
          "Kozhikodan Halwa",
          "Banana Chips",
          "Malabar Timber",
          "Footwear"
        ],
        "availability": "high",
        "primaryMandi": "S.M. Street (Sweet Meat Street) & Kallai Timber River Corridor",
        "avgMargin": "22% - 32%",
        "famousFor": "Historic Calicut Port, Legendary Kozhikodan Halwa (Ghee Sweet), Banana Chips in Coconut Oil & Kallai Timber Basin",
        "famousBusinessType": "Confectionery Sweets, Authentic Banana Chips & Non-Leather Footwear",
        "keySpecialities": [
          "Multi-Flavour Kozhikodan Halwa",
          "Crispy Kerala Banana Chips (Nendran)",
          "PU Foam & EVA Footwear (VKC)",
          "Teak & Rosewood Sawn Timber"
        ],
        "hubDescription": "Kozhikode welcomes visitors with vibrant sweet shops on S.M. Street, famous for authentic halwa and banana chips."
      },
      {
        "id": "kl-alappuzha",
        "districtName": "Alappuzha (Alleppey) Venice of the East & Coir Hub",
        "stateName": "Kerala",
        "countryName": "India",
        "latitude": 9.4981,
        "longitude": 76.3388,
        "verified": true,
        "stockistCount": 390,
        "opportunityCount": 18,
        "categories": [
          "Coir Mats & Geotextiles",
          "Houseboat Tourism",
          "Paddy (Kuttanad)",
          "Marine Products"
        ],
        "availability": "available",
        "primaryMandi": "National Coir Board Center & Alappuzha Port Area",
        "avgMargin": "24% - 38%",
        "famousFor": "Venice of the East, World Capital of Coir (Coir Mats, Rubberized Coir Mattresses & Geotextiles) & Houseboat Tourism",
        "famousBusinessType": "Coir Floor Coverings, Geo-Textiles, Marine Seafood & Tourism Hospitality",
        "keySpecialities": [
          "Hand-Tufted Coconut Coir Doormats",
          "Biodegradable Coir Geotextiles",
          "Rubberized Orthopedic Mattresses",
          "Kuttanad Below-Sea-Level Rice (GI)"
        ],
        "hubDescription": "Alappuzha weaves natural golden coconut husk into eco-friendly geotextiles and doormats for global households."
      },
      {
        "id": "kl-kottayam",
        "districtName": "Kottayam Natural Rubber & Print Capital",
        "stateName": "Kerala",
        "countryName": "India",
        "latitude": 9.5916,
        "longitude": 76.5222,
        "verified": true,
        "stockistCount": 360,
        "opportunityCount": 16,
        "categories": [
          "Natural Rubber Sheets",
          "Latex Concentrates",
          "Publishing",
          "Spices"
        ],
        "availability": "available",
        "primaryMandi": "Rubber Board Headquarters & Kottayam Commodity Mart",
        "avgMargin": "20% - 28%",
        "famousFor": "Rubber Capital of India (Headquarters of Indian Rubber Board, Supplies 80% of India’s Natural Rubber) & Publishing (Malayala Manorama)",
        "famousBusinessType": "Natural Rubber Sheet Trading, Latex Centrifuging & Print Media",
        "keySpecialities": [
          "Ribbed Smoked Rubber Sheets (RSS-4)",
          "Centrifuged Latex Concentrates (60%)",
          "Natural Rubber Crumb (ISNR)",
          "Literary Publishing & Educational Books"
        ],
        "hubDescription": "Kottayam is India’s natural rubber nerve center, supplying smoked sheets for vehicle tyres across the nation."
      },
      {
        "id": "kl-thrissur",
        "districtName": "Thrissur Cultural Capital & Gold Jewellery Hub",
        "stateName": "Kerala",
        "countryName": "India",
        "latitude": 10.5276,
        "longitude": 76.2144,
        "verified": true,
        "stockistCount": 460,
        "opportunityCount": 20,
        "categories": [
          "Gold Jewellery (Kalyan, Joyalukkas)",
          "Ayurvedic Formulations (Oushadhi)",
          "Thrissur Pooram",
          "Tiles"
        ],
        "availability": "high",
        "primaryMandi": "High Road Gold Market & Oushadhi Ayurvedic Complex",
        "avgMargin": "24% - 35%",
        "famousFor": "Gold Jewellery Capital of South India (Birthplace of Kalyan Jewellers, Joyalukkas), Authentic Ayurveda & Thrissur Pooram",
        "famousBusinessType": "Hallmarked Gold Jewellery Craftsmanship, Classical Ayurvedic Formulations",
        "keySpecialities": [
          "Traditional 22K Kerala Gold Ornaments",
          "Classical Ayurvedic Asavas & Arishtas",
          "Terracotta Mangalore Flooring Tiles",
          "Heritage Bell-Metal Lamps (Deepams)"
        ],
        "hubDescription": "Thrissur shapes India’s retail gold market with world-famous jewellery houses and authentic Ayurvedic medicine manufacturers."
      },
      {
        "id": "kl-thiruvananthapuram",
        "districtName": "Thiruvananthapuram Capital & Space Tech Hub",
        "stateName": "Kerala",
        "countryName": "India",
        "latitude": 8.5241,
        "longitude": 76.9366,
        "verified": true,
        "stockistCount": 480,
        "opportunityCount": 22,
        "categories": [
          "Space Tech (VSSC)",
          "Technopark IT",
          "Handloom Balaramapuram",
          "Vizhinjam Port"
        ],
        "availability": "high",
        "primaryMandi": "Chalai Wholesale Bazaar & Vizhinjam Transshipment Hub",
        "avgMargin": "22% - 32%",
        "famousFor": "State Capital, ISRO Vikram Sarabhai Space Centre (VSSC), Vizhinjam Mega Deepwater Port & Balaramapuram Gold Zari Handlooms",
        "famousBusinessType": "Aerospace Engineering, Deepwater Maritime Transshipment & Zari Handlooms",
        "keySpecialities": [
          "Deepwater Container Transshipment",
          "Balaramapuram Pure Cotton Kasavu Sarees (GI)",
          "IT Software & Animation Services",
          "Chalai Traditional Wholesale Trade"
        ],
        "hubDescription": "Thiruvananthapuram bridges ancient Kasavu handlooms with rocket engineering and the mega Vizhinjam transshipment port."
      },
      {
        "id": "kl-palakkad",
        "districtName": "Palakkad Granary of Kerala & Industrial Gap",
        "stateName": "Kerala",
        "countryName": "India",
        "latitude": 10.7867,
        "longitude": 76.6548,
        "verified": true,
        "stockistCount": 380,
        "opportunityCount": 16,
        "categories": [
          "Paddy (Matta Rice)",
          "Palakkad Gap Logistics",
          "Castings",
          "Wind Energy"
        ],
        "availability": "available",
        "primaryMandi": "Kanjikode Industrial Area & Big Bazaar Palakkad",
        "avgMargin": "20% - 28%",
        "famousFor": "Granary of Kerala (Nutrient-Rich Palakkadan Matta Rice - GI Tag) & Kanjikode (Kerala’s 2nd Largest Industrial Zone)",
        "famousBusinessType": "Matta Rice Milling, Steel Re-Rolling & Fluid Valves",
        "keySpecialities": [
          "Palakkadan Matta Red Rice (GI)",
          "Fluid Control Valves & Flowmeters",
          "Structural Steel Re-Rolling",
          "Cattle Feed Compounding"
        ],
        "hubDescription": "Palakkad sits on the Western Ghats gap, channeling interstate trade and nourishing Kerala with red parboiled Matta rice."
      },
      {
        "id": "kl-kannur",
        "districtName": "Kannur Land of Looms and Lores",
        "stateName": "Kerala",
        "countryName": "India",
        "latitude": 11.8745,
        "longitude": 75.3704,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 14,
        "categories": [
          "Handloom Home Textiles",
          "Theyyam Craft",
          "Plywood",
          "Spices"
        ],
        "availability": "available",
        "primaryMandi": "Kannur Handloom Weavers Complex & Payyanur Khadi",
        "avgMargin": "22% - 32%",
        "famousFor": "Land of Looms and Lores, Premium Handloom Home Furnishings, Kannur Khadi & Sacred Theyyam Ritual Art",
        "famousBusinessType": "Export Handloom Fabrics, Cotton Crepe Textiles & Marine Fish",
        "keySpecialities": [
          "Woven Cotton Kitchen Linen & Table Mats",
          "Pure Payyanur Khadi Dhotis",
          "Commercial Marine Plywood (Western India)",
          "Dried Spices & Pepper"
        ],
        "hubDescription": "Kannur’s skilled handloom cooperatives export natural cotton home furnishings to luxury departmental stores across Europe."
      }
    ]
  },
  {
    "id": "andhra-pradesh",
    "name": "Andhra Pradesh",
    "countryName": "India",
    "latitude": 15.9129,
    "longitude": 79.74,
    "verifiedStockCount": 4250,
    "districtCount": 10,
    "totalDistributors": "13,800 Registered Wholesalers",
    "verifiedStockists": "4,250 Verified Channel Stockists",
    "readinessScore": "97/100 (Maritime Port & Chilli/Aqua Titan)",
    "commercialStatus": "Longest Eastern Coastline, Dry Chilli Capital, Aquaculture Shrimps, Steel & Automotive",
    "tradeCorridor": "Visakhapatnam-Chennai Industrial Corridor & Eastern Coast Highway NH-16",
    "keySectors": [
      "Dry Red Chillies",
      "Shrimp Aquaculture",
      "Vizag Steel & Port",
      "Automotive (Kia Motors)",
      "Mangoes & Rice"
    ],
    "districts": [
      {
        "id": "ap-guntur",
        "districtName": "Guntur Dry Chilli Capital of Asia",
        "stateName": "Andhra Pradesh",
        "countryName": "India",
        "latitude": 16.3067,
        "longitude": 80.4365,
        "verified": true,
        "stockistCount": 980,
        "opportunityCount": 38,
        "categories": [
          "Guntur Sannam Chilli",
          "Cotton Bales",
          "Tobacco (Tobacco Board)",
          "Textiles"
        ],
        "availability": "high",
        "primaryMandi": "Guntur Mirchi Yard (Asia’s Largest Dry Red Chilli Market)",
        "avgMargin": "22% - 34%",
        "famousFor": "Asia’s Largest Dry Red Chilli Market (Guntur Mirchi Yard - Guntur Sannam Chilli - GI Tag) & Indian Tobacco Board HQs",
        "famousBusinessType": "Red Chilli Grading & Cold Storage, Virginia Tobacco & Cotton Ginning",
        "keySpecialities": [
          "Guntur Sannam S4 & Teja Red Chillies (GI)",
          "Flue-Cured Virginia (FCV) Tobacco",
          "Cotton Ginning Lint Bales",
          "Spices Oleoresin Extracts"
        ],
        "hubDescription": "Guntur’s Mirchi Yard is the largest red chilli market in Asia, trading thousands of lorry loads of fiery peppers every morning."
      },
      {
        "id": "ap-visakhapatnam",
        "districtName": "Visakhapatnam (Vizag) City of Destiny & Steel Port",
        "stateName": "Andhra Pradesh",
        "countryName": "India",
        "latitude": 17.6868,
        "longitude": 83.2185,
        "verified": true,
        "stockistCount": 1120,
        "opportunityCount": 40,
        "categories": [
          "Vizag Steel (RINL)",
          "Major Port Cargo",
          "Petroleum (HPCL)",
          "Pharma City"
        ],
        "availability": "high",
        "primaryMandi": "Visakhapatnam Port Authority & Jawaharlal Nehru Pharma City",
        "avgMargin": "22% - 30%",
        "famousFor": "City of Destiny, Rashtriya Ispat Nigam (Vizag Steel Plant), Eastern Naval Command & Visakhapatnam Deepwater Port",
        "famousBusinessType": "Integrated Steel Manufacturing, Active Pharma Ingredients (API) & Sea Freight",
        "keySpecialities": [
          "RINL Long Steel Wire Rods & Rebars",
          "Bulk Generic Active Pharma Compounds",
          "Oceanic Container Freight Logistics",
          "Frozen Marine Black Tiger Shrimps"
        ],
        "hubDescription": "Vizag is Andhra Pradesh’s industrial flagship, anchored by RINL Steel Plant, major ports, and the Jawaharlal Nehru Pharma City."
      },
      {
        "id": "ap-vijayawada",
        "districtName": "Vijayawada Commercial Heart & Automobile Hub",
        "stateName": "Andhra Pradesh",
        "countryName": "India",
        "latitude": 16.5062,
        "longitude": 80.648,
        "verified": true,
        "stockistCount": 890,
        "opportunityCount": 32,
        "categories": [
          "Automobile Spares & Body",
          "Banginapalli Mangoes",
          "Iron Hardware",
          "Rice Milling"
        ],
        "availability": "high",
        "primaryMandi": "Autonagar Industrial Estate (Asia’s Large Auto Hub) & Nunna Mango Yard",
        "avgMargin": "22% - 32%",
        "famousFor": "Jawaharlal Nehru Auto Nagar (One of Asia’s Largest Auto Body/Repair Hubs) & Nunna Wholesale Mango Market",
        "famousBusinessType": "Heavy Commercial Vehicle Body Building, Automotive Spares & Fruit Wholesale",
        "keySpecialities": [
          "Commercial Truck Body Fabrication",
          "Replacement Auto Spare Parts",
          "GI-Tagged Banginapalli Mangoes",
          "Sona Masoori Rice Wholesale"
        ],
        "hubDescription": "Vijayawada is Andhra’s bustling commercial crossway, featuring the legendary Autonagar industrial and logistics park."
      },
      {
        "id": "ap-tirupati",
        "districtName": "Tirupati Spiritual Capital & Electronics Hub",
        "stateName": "Andhra Pradesh",
        "countryName": "India",
        "latitude": 13.6288,
        "longitude": 79.4192,
        "verified": true,
        "stockistCount": 460,
        "opportunityCount": 22,
        "categories": [
          "Pilgrim Services",
          "Smartphones & ESDM",
          "Wood Carving",
          "Food Products"
        ],
        "availability": "high",
        "primaryMandi": "Tirupati EMC (Electronic Manufacturing Cluster) & Tirumala Pilgrim Trade",
        "avgMargin": "24% - 35%",
        "famousFor": "Tirumala Lord Venkateswara Temple Pilgrimage, EMC Electronics Cluster (Foxconn, Dixon) & Red Sanders Woodcraft",
        "famousBusinessType": "Consumer Electronics Assembly, Pilgrim Hospitality Trade & Traditional Woodcraft",
        "keySpecialities": [
          "Mobile Smartphone Assembly",
          "Tirupati Laddu Prasadam Heritage",
          "Carved Red Sanders Wooden Artifacts",
          "Brass Temple Religious Bells"
        ],
        "hubDescription": "Tirupati harmonizes the world’s most visited sacred pilgrimage shrine with cutting-edge electronics manufacturing clusters."
      },
      {
        "id": "ap-nellore",
        "districtName": "Nellore Aquaculture Shrimp & Krishnapatnam Port",
        "stateName": "Andhra Pradesh",
        "countryName": "India",
        "latitude": 14.4426,
        "longitude": 79.9865,
        "verified": true,
        "stockistCount": 420,
        "opportunityCount": 18,
        "categories": [
          "Aqua Vannamei Shrimps",
          "Krishnapatnam Port",
          "Mica",
          "Raw Rice"
        ],
        "availability": "high",
        "primaryMandi": "Krishnapatnam Deepwater Port & Nellore Shrimp Market",
        "avgMargin": "22% - 30%",
        "famousFor": "Aquaculture Capital of India (Vannamei White Shrimp Exports), Krishnapatnam Deep Sea Port & High-Grade Mica Mines",
        "famousBusinessType": "Commercial Shrimp Hatcheries, Deepwater Port Logistics & Fine Rice Shelling",
        "keySpecialities": [
          "Export Grade Frozen Vannamei Shrimps",
          "Krishnapatnam Bulk Coal & Container Freight",
          "Nellore Molagolukulu Sona Masoori Rice",
          "Insulation Mica Flakes"
        ],
        "hubDescription": "Nellore produces India’s highest volume of export-grade shrimp and operates the high-capacity Krishnapatnam private port."
      },
      {
        "id": "ap-rajahmundry",
        "districtName": "Rajahmundry & Kakinada Maritime & Agro Hub",
        "stateName": "Andhra Pradesh",
        "countryName": "India",
        "latitude": 17.0005,
        "longitude": 81.804,
        "verified": true,
        "stockistCount": 440,
        "opportunityCount": 18,
        "categories": [
          "Deepwater Seaport",
          "Natural Gas (KG Basin)",
          "Paper Mills",
          "Kakinada Kaja"
        ],
        "availability": "available",
        "primaryMandi": "Kakinada Deepwater Port & Rajahmundry Cloth Market",
        "avgMargin": "20% - 28%",
        "famousFor": "KG-D6 Natural Gas Offshore Basin, Kakinada Deepwater Port, Andhra Paper Mill & World-Famous Kakinada Khaja (GI Tag)",
        "famousBusinessType": "Offshore Energy Logistics, Deepwater Seaport Cargo & Paper Manufacturing",
        "keySpecialities": [
          "Offshore Gas Pipe & Support Logistics",
          "Non-Basmati White Rice Export Cargo",
          "Kakinada Gottam Khaja Sweets",
          "High-Brightness Writing Paper"
        ],
        "hubDescription": "Rajahmundry and Kakinada sit on the fertile Godavari delta, serving as offshore gas supply bases and rice export ports."
      },
      {
        "id": "ap-kurnool",
        "districtName": "Kurnool Tungabhadra Gateway & Cement Belt",
        "stateName": "Andhra Pradesh",
        "countryName": "India",
        "latitude": 15.8281,
        "longitude": 78.0373,
        "verified": true,
        "stockistCount": 340,
        "opportunityCount": 15,
        "categories": [
          "Limestone Cement",
          "Sona Masoori Rice",
          "Cotton Ginning",
          "Solar Park"
        ],
        "availability": "available",
        "primaryMandi": "Kurnool New Agricultural Market Yard & Orvakal Hub",
        "avgMargin": "20% - 28%",
        "famousFor": "Kurnool Sona Masoori Rice, Orvakal Industrial Hub & Kurnool Ultra Mega Solar Park (1000 MW)",
        "famousBusinessType": "Paddy Rice Shelling, Clean Solar Energy & Portland Cement",
        "keySpecialities": [
          "Fine Sona Masoori Polished Rice",
          "Solar Energy Generation",
          "Portland Pozzolana Cement",
          "Raw Cotton Lint Bales"
        ],
        "hubDescription": "Kurnool anchors the Rayalaseema agricultural plains, famous for Sona Masoori rice and clean solar energy at Orvakal."
      },
      {
        "id": "ap-anantapur",
        "districtName": "Anantapur Kia Automotive & Groundnut Hub",
        "stateName": "Andhra Pradesh",
        "countryName": "India",
        "latitude": 14.6819,
        "longitude": 77.6006,
        "verified": true,
        "stockistCount": 380,
        "opportunityCount": 17,
        "categories": [
          "Kia Automobile Assembly",
          "Groundnut Crop",
          "Silk Handlooms (Dharmavaram)",
          "Granite"
        ],
        "availability": "available",
        "primaryMandi": "Kia Motors Erramanchi Plant & Dharmavaram Handloom Center",
        "avgMargin": "24% - 35%",
        "famousFor": "Kia Motors India Mega Automobile Assembly Plant & Dharmavaram Traditional Zari Silk Sarees (GI Tag)",
        "famousBusinessType": "Automobile Assembly, Heavy Auto Components & Dharmavaram Pure Silk Weaving",
        "keySpecialities": [
          "Kia Seltos & Sonet Passenger Cars",
          "Dharmavaram Broad Zari Silk Sarees (GI)",
          "Pod Groundnut Seeds for Oil Extraction",
          "Multi-Colour Rough Granite Blocks"
        ],
        "hubDescription": "Anantapur has transformed from dry plains into a global automotive manufacturing center with Kia Motors and Dharmavaram silks."
      },
      {
        "id": "ap-kadapa",
        "districtName": "Kadapa Black Limestone & Mineral Corridor",
        "stateName": "Andhra Pradesh",
        "countryName": "India",
        "latitude": 14.4673,
        "longitude": 78.8242,
        "verified": true,
        "stockistCount": 290,
        "opportunityCount": 12,
        "categories": [
          "Black Kadapa Stone",
          "Barytes Mining",
          "Uranium",
          "Cement"
        ],
        "availability": "available",
        "primaryMandi": "Mangampet Barytes Mines & Kadapa Stone Yard",
        "avgMargin": "22% - 30%",
        "famousFor": "Black Kadapa Limestone Slabs (Famous Flooring Stone) & Mangampet Barytes Mines (World’s Largest Single Barytes Deposit)",
        "famousBusinessType": "Barytes Mineral Mining (for Oil Drilling), Kadapa Flooring Stone & Cement",
        "keySpecialities": [
          "Black Kadapa Calibrated Flooring Stone",
          "Drilling Grade Barytes Powder (API)",
          "Ordinary Portland Cement Slabs",
          "Banana & Papaya Horticulture"
        ],
        "hubDescription": "Kadapa operates the world’s largest barytes deposit at Mangampet, essential for international oil and gas drilling."
      },
      {
        "id": "ap-chittoor",
        "districtName": "Chittoor Mango Pulp & Dairy Capital",
        "stateName": "Andhra Pradesh",
        "countryName": "India",
        "latitude": 13.2172,
        "longitude": 79.1003,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 14,
        "categories": [
          "Totapuri Mango Pulp",
          "Milk & Dairy",
          "Jaggery",
          "Granite"
        ],
        "availability": "available",
        "primaryMandi": "Chittoor Industrial Estate & Bangarupalem Pulp Hub",
        "avgMargin": "20% - 28%",
        "famousFor": "Mango Pulp Capital of India (Exports 50% of India’s Totapuri Mango Pulp) & High-Yield Dairy Milk Cooperative Processing",
        "famousBusinessType": "Aseptic Totapuri Mango Pulp Processing & Commercial Dairy Products",
        "keySpecialities": [
          "Aseptic Totapuri Mango Puree & Concentrate",
          "Clarified Butter (Ghee) & Milk Powder",
          "Cane Jaggery (Gur) Lumps",
          "Black Granite Monument Slabs"
        ],
        "hubDescription": "Chittoor supplies aseptic Totapuri mango puree to international beverage giants (Frooti, Maaza, PepsiCo) worldwide."
      }
    ]
  },
  {
    "id": "bihar",
    "name": "Bihar",
    "countryName": "India",
    "latitude": 25.0961,
    "longitude": 85.3131,
    "verifiedStockCount": 3540,
    "districtCount": 8,
    "totalDistributors": "11,200 Registered Wholesalers",
    "verifiedStockists": "3,540 Verified Stockists",
    "readinessScore": "95/100 (High-Density Consumption Gateway)",
    "commercialStatus": "Vast Consumer Population, Shahi Litchi, Bhagalpur Silk, Makhana (Foxnuts) & Agro Mandis",
    "tradeCorridor": "Grand Trunk Road NH-19 & Ganga River Waterway National Waterway 1",
    "keySectors": [
      "Makhana (Foxnuts)",
      "Shahi Litchi",
      "Tussar Silk",
      "Food Grains",
      "Spiritual Tourism"
    ],
    "districts": [
      {
        "id": "br-patna",
        "districtName": "Patna State Capital & FMCG Redistribution Hub",
        "stateName": "Bihar",
        "countryName": "India",
        "latitude": 25.5941,
        "longitude": 85.1376,
        "verified": true,
        "stockistCount": 1180,
        "opportunityCount": 38,
        "categories": [
          "FMCG Distribution",
          "Publishing",
          "Consumer Electronics",
          "Agro Grains"
        ],
        "availability": "high",
        "primaryMandi": "Marufganj & Mansoorganj (Historic Grain Mandis) & Didarganj Industrial Area",
        "avgMargin": "20% - 28%",
        "famousFor": "Historic Pataliputra, Primary FMCG & Consumer Durables Distribution Gateway for 130M Population of Bihar",
        "famousBusinessType": "State-Level C&F Logistics, FMCG Redistribution & Wholesale Grains",
        "keySpecialities": [
          "Packaged Consumer FMCG Goods",
          "Educational Test Preparation Publishing",
          "Wheat, Mustard & Maize Trading",
          "Pharmaceutical Redistribution"
        ],
        "hubDescription": "Patna is Bihar’s commercial nerve center; goods arriving here distribute across thirty-eight districts."
      },
      {
        "id": "br-bhagalpur",
        "districtName": "Bhagalpur Silk City of Bihar",
        "stateName": "Bihar",
        "countryName": "India",
        "latitude": 25.2425,
        "longitude": 86.9842,
        "verified": true,
        "stockistCount": 460,
        "opportunityCount": 20,
        "categories": [
          "Bhagalpuri Tussar Silk",
          "Katarni Rice (GI)",
          "Jardalu Mango (GI)",
          "Handloom"
        ],
        "availability": "high",
        "primaryMandi": "Champanagar Silk Market & Nathnagar Weaving Center",
        "avgMargin": "25% - 40%",
        "famousFor": "Silk City of Bihar (Over a Century of Traditional Tussar & Matka Silk Handloom Weaving - GI Tag) & Katarni Fragrant Rice",
        "famousBusinessType": "Natural Tussar Silk Weaving, Organic Silk Yarns & GI Agro Crops",
        "keySpecialities": [
          "Natural Textured Bhagalpuri Tussar Silk Sarees",
          "Matka Silk Stoles & Fabrics",
          "Fragrant Katarni Chura & Rice (GI)",
          "Sweet Jardalu Mangoes (GI)"
        ],
        "hubDescription": "Bhagalpur is celebrated as the \"Silk City\", hand-spinning and weaving raw tussar cocoons into export textiles."
      },
      {
        "id": "br-muzaffarpur",
        "districtName": "Muzaffarpur Shahi Litchi Capital",
        "stateName": "Bihar",
        "countryName": "India",
        "latitude": 26.1209,
        "longitude": 85.3647,
        "verified": true,
        "stockistCount": 480,
        "opportunityCount": 22,
        "categories": [
          "Shahi Litchi (GI)",
          "Lac Bangles",
          "North Bihar Wholesale",
          "Railway Wagons"
        ],
        "availability": "high",
        "primaryMandi": "Muzaffarpur Fruit Yard & Sutapatti Wholesale Cloth Market",
        "avgMargin": "22% - 32%",
        "famousFor": "Shahi Litchi Capital of India (GI Tag Juicy Litchis), Traditional Lac Bangles & Sutapatti Cloth Market",
        "famousBusinessType": "Shahi Litchi Pulp Processing & Export, Lac Handicrafts & Textile Wholesale",
        "keySpecialities": [
          "Sweet Muzaffarpur Shahi Litchis (GI)",
          "Handmade Lac Glass-Beaded Bangles",
          "Sutapatti Cotton Saree Trading",
          "Bharat Wagon Railway Assemblies"
        ],
        "hubDescription": "Muzaffarpur produces the famed sweet Shahi Litchi and operates North Bihar’s biggest wholesale textile market."
      },
      {
        "id": "br-darbhanga",
        "districtName": "Darbhanga & Madhubani Makhana & Mithila Art Capital",
        "stateName": "Bihar",
        "countryName": "India",
        "latitude": 26.1542,
        "longitude": 85.8918,
        "verified": true,
        "stockistCount": 420,
        "opportunityCount": 19,
        "categories": [
          "Mithila Makhana (GI)",
          "Madhubani Painting (GI)",
          "Pond Fish",
          "Mangoes"
        ],
        "availability": "high",
        "primaryMandi": "National Research Centre for Makhana & Raj Darbhanga Market",
        "avgMargin": "26% - 45%",
        "famousFor": "Mithila Makhana (Produces 85% of India’s Superfood Popped Foxnuts - GI Tag) & Madhubani Mithila Folk Paintings",
        "famousBusinessType": "Popped Foxnut (Makhana) Processing & Export, GI Mithila Folk Paintings",
        "keySpecialities": [
          "Jumbo Graded Mithila Makhana (Foxnuts - GI)",
          "Flavoured Roasted Makhana Snacks",
          "Hand-Painted Madhubani Canvas & Wall Art (GI)",
          "Freshwater Rohu & Katla Fish"
        ],
        "hubDescription": "Darbhanga and Madhubani harvest over 85% of the world’s nutritious makhana (foxnut) superfood from wetland ponds."
      },
      {
        "id": "br-gaya",
        "districtName": "Gaya Spiritual Tourism & Tilkut Confectionery",
        "stateName": "Bihar",
        "countryName": "India",
        "latitude": 24.7914,
        "longitude": 85.0002,
        "verified": true,
        "stockistCount": 360,
        "opportunityCount": 16,
        "categories": [
          "Gaya Tilkut (Sesame)",
          "Bodh Gaya Pilgrim Supplies",
          "Stone Craft",
          "Agro Grains"
        ],
        "availability": "available",
        "primaryMandi": "Ramna Wholesale Market & Bodh Gaya International Tourist Zone",
        "avgMargin": "24% - 35%",
        "famousFor": "Bodh Gaya UNESCO World Heritage (Enlightenment of Lord Buddha), Pinda Daan Pilgrimage & World-Famous Crispy Gaya Tilkut",
        "famousBusinessType": "Spiritual Tourism Hospitality, Traditional Sesame Tilkut Confectionery & Black Stone Crafts",
        "keySpecialities": [
          "Hand-Beaten White Sesame Tilkut (Winter Specialty)",
          "Anarsa Rice Sweets",
          "Black Soft-Stone Buddha Sculptures",
          "Buddhist Monastic Hospitality Goods"
        ],
        "hubDescription": "Gaya welcomes pilgrims from Sri Lanka, Japan, Thailand, and worldwide, famous for hand-beaten winter sesame Tilkut."
      },
      {
        "id": "br-purnia",
        "districtName": "Purnia Yellow Maize Capital of Eastern India",
        "stateName": "Bihar",
        "countryName": "India",
        "latitude": 25.7771,
        "longitude": 87.4753,
        "verified": true,
        "stockistCount": 340,
        "opportunityCount": 15,
        "categories": [
          "Yellow Maize (Corn)",
          "Raw Jute",
          "Makhana",
          "Cold Storage"
        ],
        "availability": "available",
        "primaryMandi": "Gulabbagh Mandi (One of Asia’s Largest Maize Trading Yards)",
        "avgMargin": "20% - 28%",
        "famousFor": "Gulabbagh Mandi (Eastern India’s Largest Yellow Maize / Corn Trading Market - Supplies Starch & Poultry Mills)",
        "famousBusinessType": "Corn / Maize Commodity Trading, Grain Storage & Raw Jute Processing",
        "keySpecialities": [
          "High-Starch Yellow Maize Grain",
          "Raw Golden Jute Bales",
          "Compounded Poultry Feed Ingredients",
          "Pond Foxnuts (Makhana)"
        ],
        "hubDescription": "Purnia’s Gulabbagh market sets the corn and maize benchmark price across eastern India, supplying national feed mills."
      },
      {
        "id": "br-begusarai",
        "districtName": "Begusarai Industrial & Fertilizer City of Bihar",
        "stateName": "Bihar",
        "countryName": "India",
        "latitude": 25.4182,
        "longitude": 86.1272,
        "verified": true,
        "stockistCount": 310,
        "opportunityCount": 14,
        "categories": [
          "Barauni Oil Refinery",
          "HURL Urea Fertilizer",
          "Thermal Power",
          "Dairy"
        ],
        "availability": "available",
        "primaryMandi": "Barauni Industrial Growth Complex & Tilrath Mandi",
        "avgMargin": "20% - 26%",
        "famousFor": "Industrial Capital of Bihar, Indian Oil Barauni Refinery, HURL Mega Chemical Urea Plant & Barauni Dairy",
        "famousBusinessType": "Petroleum Refining, Chemical Fertilizer Urea & Thermal Energy",
        "keySpecialities": [
          "Petroleum Fuels & Industrial Bitumen",
          "Neem-Coated Urea Fertilizer (HURL)",
          "Thermal Electric Power",
          "Pasteurized Dairy Ghee & Milk"
        ],
        "hubDescription": "Begusarai is Bihar’s industrial anchor, housing the Barauni oil refinery and fertilizer mega-plants along the Ganga."
      },
      {
        "id": "br-bihar-sharif",
        "districtName": "Bihar Sharif Vegetables & Nalanda Heritage",
        "stateName": "Bihar",
        "countryName": "India",
        "latitude": 25.1982,
        "longitude": 85.5149,
        "verified": true,
        "stockistCount": 290,
        "opportunityCount": 12,
        "categories": [
          "Vegetable Farming",
          "Nalanda UNESCO Tourism",
          "Handloom Bawan Buti",
          "Beedi"
        ],
        "availability": "available",
        "primaryMandi": "Bihar Sharif Anaj & Sabzi Mandi (Large Vegetable Yard)",
        "avgMargin": "20% - 28%",
        "famousFor": "Vegetable Bowl of Central Bihar, Nalanda Ancient University UNESCO Ruins & Traditional Bawan Buti Handloom Weaving",
        "famousBusinessType": "Commercial Vegetable Wholesale, International Tourism Retail & Cotton Handlooms",
        "keySpecialities": [
          "Fresh Potatoes, Cauliflower & Pointed Gourd (Parwal)",
          "Bawan Buti Traditional Buddhist Handloom Sarees",
          "Heritage Pilgrim Souvenirs",
          "Cold Storage Logistics"
        ],
        "hubDescription": "Bihar Sharif feeds regional metros with vegetable harvests while hosting world travelers visiting Nalanda University."
      }
    ]
  },
  {
    "id": "odisha",
    "name": "Odisha",
    "countryName": "India",
    "latitude": 20.9517,
    "longitude": 85.0985,
    "verifiedStockCount": 3620,
    "districtCount": 8,
    "totalDistributors": "11,400 Registered Wholesalers",
    "verifiedStockists": "3,620 Verified Stockists",
    "readinessScore": "96/100 (Steel, Minerals & Coastal Maritime)",
    "commercialStatus": "Mineral Capital of India, High-Grade Iron Ore, Deepwater Ports, Handlooms & Marine Shrimps",
    "tradeCorridor": "Paradeep Port Maritime Highway & National Highway NH-16 Coastal Corridor",
    "keySectors": [
      "Iron Ore & Steel",
      "Aluminium (Nalco)",
      "Sambalpuri Silk",
      "Seafood Exports",
      "Temple Tourism"
    ],
    "districts": [
      {
        "id": "od-bhubaneswar",
        "districtName": "Bhubaneswar Temple City & Smart Capital Hub",
        "stateName": "Odisha",
        "countryName": "India",
        "latitude": 20.2961,
        "longitude": 85.8245,
        "verified": true,
        "stockistCount": 1100,
        "opportunityCount": 36,
        "categories": [
          "IT Software",
          "Temple Stone Carving",
          "Handlooms (Boyanika)",
          "FMCG Gateway"
        ],
        "availability": "high",
        "primaryMandi": "Mancheswar Industrial Estate & Unit-1 Daily Wholesale Market",
        "avgMargin": "22% - 30%",
        "famousFor": "Smart City & Temple Capital, IT Software Parks (Infocity), Stone Sculptures & State FMCG Distribution Gateway",
        "famousBusinessType": "State C&F Logistics, Enterprise Software & Sandstone Architectural Carving",
        "keySpecialities": [
          "Packaged FMCG Foods & Beverages",
          "Carved Sandstone Temple Sculptures",
          "Odisha Handloom Fabrics (Boyanika)",
          "Educational & Healthcare Institutional Supplies"
        ],
        "hubDescription": "Bhubaneswar is Odisha’s rapid-growth administrative and technology center, with modern retail infrastructure."
      },
      {
        "id": "od-cuttack",
        "districtName": "Cuttack Millennium City & Silver Filigree Capital",
        "stateName": "Odisha",
        "countryName": "India",
        "latitude": 20.4625,
        "longitude": 85.8828,
        "verified": true,
        "stockistCount": 750,
        "opportunityCount": 28,
        "categories": [
          "Silver Filigree (Tarakasi)",
          "Malgodown Food Wholesale",
          "Horn Crafts",
          "Textiles"
        ],
        "availability": "high",
        "primaryMandi": "Malgodown (Odisha’s Largest Wholesale Commodity Mart) & Choudwar Industrial Zone",
        "avgMargin": "22% - 35%",
        "famousFor": "Silver City of India (Cuttack Tarakasi - GI Tag Silver Filigree), Malgodown (Historic Wholesale Hub) & Bali Jatra Maritime Fair",
        "famousBusinessType": "Fine Silver Filigree Jewellery, Bulk Food Commodity Wholesale & Paper",
        "keySpecialities": [
          "Delicate Silver Filigree Ornaments & Durga Crowns (GI)",
          "Bulk Grains, Sugar & Edible Oil Trading (Malgodown)",
          "Handcrafted Buffalo Horn Crafts",
          "Dahibara Aloo Dum Packaged Spices"
        ],
        "hubDescription": "Cuttack’s ancient Malgodown feeds the state with grains and groceries, famed for breathtaking silver filigree jewelry."
      },
      {
        "id": "od-rourkela",
        "districtName": "Rourkela Steel City of Odisha",
        "stateName": "Odisha",
        "countryName": "India",
        "latitude": 22.2604,
        "longitude": 84.8536,
        "verified": true,
        "stockistCount": 520,
        "opportunityCount": 22,
        "categories": [
          "SAIL Rourkela Steel",
          "Heavy Engineering",
          "Refractories",
          "Iron Sponge"
        ],
        "availability": "high",
        "primaryMandi": "Rourkela Steel Plant (RSP) Complex & Kalunga Industrial Estate",
        "avgMargin": "20% - 28%",
        "famousFor": "Steel City, SAIL Rourkela Steel Plant (India’s 1st Public Sector Steel Plant built with German collaboration - Plates for Navy Warships)",
        "famousBusinessType": "Integrated Heavy Steel Manufacturing, Boiler Plates & Industrial Refractories",
        "keySpecialities": [
          "Heavy Steel Plates for Defense & Marine Navy Warships",
          "Hot-Rolled & Galvanized Steel Coils",
          "Refractory Bricks for Blast Furnaces",
          "Sponge Iron & Cast Billets"
        ],
        "hubDescription": "Rourkela rolled India’s first modern steel plates, continuing to forge specialized heavy steel for naval defense warships."
      },
      {
        "id": "od-sambalpur",
        "districtName": "Sambalpur Handloom Silk & Hirakud Power Hub",
        "stateName": "Odisha",
        "countryName": "India",
        "latitude": 21.4669,
        "longitude": 83.9812,
        "verified": true,
        "stockistCount": 380,
        "opportunityCount": 16,
        "categories": [
          "Sambalpuri Ikat Silk",
          "Hirakud Hydro & Aluminium",
          "Paddy",
          "Forest Produce"
        ],
        "availability": "available",
        "primaryMandi": "Golebazar Commercial Mart & Sambalpuri Bastralaya (Bargarh)",
        "avgMargin": "25% - 40%",
        "famousFor": "Sambalpuri Bandha Ikat Handloom Silk Sarees (GI Tag) & Hirakud Dam (One of the World’s Longest Earthen Dams)",
        "famousBusinessType": "Tie-and-Dye Ikat Silk Handloom Weaving, Aluminium Smelting (Hindalco) & Power",
        "keySpecialities": [
          "Sambalpuri Double-Ikat Silk Sarees (GI)",
          "Pure Cotton Sambalpuri Bedcovers",
          "Aluminium Extrusions & Ingots",
          "Forest Kendu Leaf (Bidi Wrapper)"
        ],
        "hubDescription": "Sambalpur weaves timeless Sambalpuri Ikat sarees with curved motifs, alongside the mighty Hirakud Dam."
      },
      {
        "id": "od-paradeep-jagatsinghpur",
        "districtName": "Paradeep Mega Maritime Deepwater Port",
        "stateName": "Odisha",
        "countryName": "India",
        "latitude": 20.3164,
        "longitude": 86.6114,
        "verified": true,
        "stockistCount": 340,
        "opportunityCount": 15,
        "categories": [
          "Port Cargo",
          "IOCL Refinery",
          "Phosphatic Fertilizer (IFFCO)",
          "Iron Ore Pellets"
        ],
        "availability": "high",
        "primaryMandi": "Paradeep Port Trust & IOCL Mega Refinery Complex",
        "avgMargin": "20% - 28%",
        "famousFor": "Paradeep Port (India’s Busiest Cargo Seaport Handling over 135 Million Tonnes), IOCL Oil Refinery & IFFCO Fertilizers",
        "famousBusinessType": "Deepwater Port Freight Logistics, Petroleum Refining & Chemical Fertilizer",
        "keySpecialities": [
          "Iron Ore & Thermal Coal Port Stevedoring",
          "Refined Petroleum Fuels & Polypropylene",
          "Diammonium Phosphate (DAP) Fertilizer",
          "Deep-Sea Marine Fish Exports"
        ],
        "hubDescription": "Paradeep is India’s highest-volume cargo seaport, loading millions of tons of iron ore and petroleum products."
      },
      {
        "id": "od-berhampur",
        "districtName": "Berhampur Silk City & Southern Commercial Gateway",
        "stateName": "Odisha",
        "countryName": "India",
        "latitude": 19.315,
        "longitude": 84.7941,
        "verified": true,
        "stockistCount": 390,
        "opportunityCount": 17,
        "categories": [
          "Berhampuri Pata Sarees",
          "Gopalpur Port & Beach",
          "Papad & Pickles",
          "Cashew"
        ],
        "availability": "available",
        "primaryMandi": "Bada Bazar Wholesale Cloth Market & Gopalpur Port Hub",
        "avgMargin": "24% - 36%",
        "famousFor": "Silk City of Odisha (Berhampuri Pata Sarees - GI Tag), Gopalpur-on-Sea Deepwater Port & Famous Spiced Papads",
        "famousBusinessType": "Heavy Pure Silk Weaving, Port Stevedoring & Cashew Nut Processing",
        "keySpecialities": [
          "Berhampuri Phoda Kumbha Silk Sarees (GI)",
          "Spiced Moong & Biri Papads & Pickles",
          "Roasted Grade Cashew Kernels",
          "Gopalpur Port Break-Bulk Freight"
        ],
        "hubDescription": "Berhampur is South Odisha’s trading capital, famed for pure Berhampuri Pata silk sarees and coastal Gopalpur port."
      },
      {
        "id": "od-balasore",
        "districtName": "Balasore Defense Missile Test & Marine Fisheries Hub",
        "stateName": "Odisha",
        "countryName": "India",
        "latitude": 21.4934,
        "longitude": 86.9135,
        "verified": true,
        "stockistCount": 320,
        "opportunityCount": 14,
        "categories": [
          "Integrated Missile Test",
          "Marine Shrimps",
          "Plastics (CIPET)",
          "Paper (Emami)"
        ],
        "availability": "available",
        "primaryMandi": "Chandipur Integrated Test Range Area & Balaramgadi Fish Port",
        "avgMargin": "22% - 30%",
        "famousFor": "DRDO Chandipur & Abdul Kalam Island Missile Test Ranges, Marine Shrimp Processing & Emami Paper Mills",
        "famousBusinessType": "Defense Testing Support Logistics, Marine Aquaculture Exports & Paperboard",
        "keySpecialities": [
          "Frozen Export Vannamei Shrimps",
          "Multilayer Paperboard & Newsprint (Emami)",
          "Plastic Pipe Extrusions & Tanks",
          "Paddy Rice Wholesaling"
        ],
        "hubDescription": "Balasore is India’s missile launching sanctuary, while dispatching container loads of marine shrimps overseas."
      },
      {
        "id": "od-angul",
        "districtName": "Angul Power & Aluminium Metal Valley",
        "stateName": "Odisha",
        "countryName": "India",
        "latitude": 20.8444,
        "longitude": 85.1511,
        "verified": true,
        "stockistCount": 280,
        "opportunityCount": 12,
        "categories": [
          "NALCO Aluminium",
          "JSP Steel Plant",
          "Coal (MCL)",
          "Heavy Fabrication"
        ],
        "availability": "available",
        "primaryMandi": "NALCO Smelter Complex & Talcher Coalfields",
        "avgMargin": "20% - 28%",
        "famousFor": "Aluminium City of India (NALCO Smelter), Jindal Steel & Power (JSPL Mega Steel Plant) & Talcher Coalfields",
        "famousBusinessType": "Primary Aluminium Smelting, Integrated Steel & Power Generation",
        "keySpecialities": [
          "Aluminium Wire Rods & Cast Slabs (NALCO)",
          "JSPL Heavy Steel Sections & Plates",
          "Talcher Thermal Power Coal",
          "Heavy Industrial Slag Aggregates"
        ],
        "hubDescription": "Angul powers national industry, smelting primary aluminium with NALCO alongside mega JSPL steel works."
      }
    ]
  },
  {
    "id": "assam",
    "name": "Assam",
    "countryName": "India",
    "latitude": 26.2006,
    "longitude": 92.9376,
    "verifiedStockCount": 3120,
    "districtCount": 6,
    "totalDistributors": "8,900 Registered Channel Partners",
    "verifiedStockists": "3,120 Verified Stockists",
    "readinessScore": "96/100 (North-East Strategic Gateway)",
    "commercialStatus": "Tea Capital of the World, One-Horned Rhino, Golden Muga Silk & Oil Refining",
    "tradeCorridor": "Brahmaputra River Corridor & Siliguri-Guwahati National Highway NH-27",
    "keySectors": [
      "Tea Cultivation",
      "Muga & Eri Silk",
      "Petroleum Refining",
      "Bamboo & Cane",
      "Agro Spices"
    ],
    "districts": [
      {
        "id": "as-guwahati",
        "districtName": "Guwahati Gateway to North-East India",
        "stateName": "Assam",
        "countryName": "India",
        "latitude": 26.1445,
        "longitude": 91.7362,
        "verified": true,
        "stockistCount": 1350,
        "opportunityCount": 42,
        "categories": [
          "Tea Auctions",
          "Muga Silk (GI)",
          "Oil Refinery",
          "FMCG Distribution"
        ],
        "availability": "high",
        "primaryMandi": "Guwahati Tea Auction Centre (GTAC - 2nd Largest in World) & Fancy Bazar",
        "avgMargin": "22% - 32%",
        "famousFor": "Guwahati Tea Auction Centre (GTAC - World’s 2nd Largest Tea Auction), Golden Muga Silk (GI Tag), Fancy Bazar & Kamakhya Temple",
        "famousBusinessType": "Tea Auction Broking, Golden Muga Silk Weaving & North-East Redistribution",
        "keySpecialities": [
          "Assam Orthodox & CTC Black Teas",
          "Golden Lustre Muga Silk Mekhela Sador (GI)",
          "Petroleum Products (Noonmati Refinery)",
          "Fast-Moving Consumer Goods Redistribution"
        ],
        "hubDescription": "Guwahati is the metropolis of the North-East; Fancy Bazar and GTAC dictate prices and goods distribution across seven states."
      },
      {
        "id": "as-dibrugarh",
        "districtName": "Dibrugarh Tea City of India",
        "stateName": "Assam",
        "countryName": "India",
        "latitude": 27.4728,
        "longitude": 94.912,
        "verified": true,
        "stockistCount": 450,
        "opportunityCount": 20,
        "categories": [
          "Tea Estates",
          "Oil & Gas (Oil India)",
          "Bogibeel Rail Freight",
          "Plywood"
        ],
        "availability": "high",
        "primaryMandi": "Chowkidinghee Commercial Mart & Duliajan Oil India Corridor",
        "avgMargin": "22% - 30%",
        "famousFor": "Tea City of India (Surrounded by Lush Tea Gardens producing Premium Orthodox Tea), Oil India HQs (Duliajan) & Bogibeel Bridge",
        "famousBusinessType": "Estate Tea Production, Crude Oil & Natural Gas Extraction",
        "keySpecialities": [
          "Malty Flavor Assam CTC & Orthodox Teas",
          "Crude Oil & LPG Natural Gas",
          "Commercial Hardwood Plywood",
          "Ginger & Turmeric Horticulture"
        ],
        "hubDescription": "Dibrugarh produces the world’s most recognizable bold and malty morning breakfast teas, amidst historic tea estates."
      },
      {
        "id": "as-silchar",
        "districtName": "Silchar Barak Valley Gateway",
        "stateName": "Assam",
        "countryName": "India",
        "latitude": 24.8333,
        "longitude": 92.7789,
        "verified": true,
        "stockistCount": 360,
        "opportunityCount": 16,
        "categories": [
          "Barak Tea",
          "Bamboo Products",
          "Tripura & Mizoram Gateway",
          "Rice"
        ],
        "availability": "available",
        "primaryMandi": "Fatack Bazar Wholesale Mart & Silchar Station Area",
        "avgMargin": "22% - 32%",
        "famousFor": "Commercial Capital of Barak Valley, Sitalpati Cool Mats (GI Tag), Bamboo Crafts & Transit Gate to Mizoram, Manipur and Tripura",
        "famousBusinessType": "Cane & Bamboo Crafts, Transit Freight Logistics & Tea Trading",
        "keySpecialities": [
          "Hand-Woven Sitalpati Water-Grass Mats (GI)",
          "Barak Valley CTC Teas",
          "Structural Bamboo & Cane Furniture",
          "Wholesale Groceries for Hill States"
        ],
        "hubDescription": "Silchar serves as the vital lifeline and trading post feeding Tripura, Mizoram, and southern Assam."
      },
      {
        "id": "as-jorhat",
        "districtName": "Jorhat Cultural Capital & Tocklai Tea Research",
        "stateName": "Assam",
        "countryName": "India",
        "latitude": 26.7509,
        "longitude": 94.2037,
        "verified": true,
        "stockistCount": 340,
        "opportunityCount": 15,
        "categories": [
          "Tea Research (Tocklai)",
          "Majuli Mask Crafts",
          "Eri & Muga Silk",
          "Rice"
        ],
        "availability": "available",
        "primaryMandi": "Jorhat Gar-Ali Commercial Market & Tocklai Research Center",
        "avgMargin": "24% - 35%",
        "famousFor": "Tocklai Tea Research Association (World’s Oldest Tea Research Station), Gateway to Majuli (World’s Largest River Island - Mask Making) & Muga Silk",
        "famousBusinessType": "Tea Clonal Science, River Island Traditional Handicrafts & Organic Silk",
        "keySpecialities": [
          "Specialty White & Green Organic Teas",
          "Majuli Island Traditional Clay Masks",
          "Eri Peace-Silk Handloom Stoles",
          "Bhogali Jalpan Traditional Snacks"
        ],
        "hubDescription": "Jorhat is the intellectual capital of tea science at Tocklai, gatekeeping heritage Vaishnavite arts on Majuli Island."
      },
      {
        "id": "as-tinsukia",
        "districtName": "Tinsukia Commercial & Industrial Engine",
        "stateName": "Assam",
        "countryName": "India",
        "latitude": 27.4922,
        "longitude": 95.3468,
        "verified": true,
        "stockistCount": 320,
        "opportunityCount": 14,
        "categories": [
          "Coal Mining (Margherita)",
          "Plywood & Timber",
          "Digboi Refinery",
          "Tea"
        ],
        "availability": "available",
        "primaryMandi": "Daily Bazar Tinsukia & Digboi Oil Town Corridor",
        "avgMargin": "20% - 28%",
        "famousFor": "Commercial Capital of Upper Assam, Digboi (Asia’s 1st Oil Well & Oldest Operating Refinery) & Margherita Coal and Plywood",
        "famousBusinessType": "Petroleum Products, Plywood Manufacturing & Tea Wholesale",
        "keySpecialities": [
          "Digboi Paraffin Wax & Fuels",
          "Plywood Packaging & Sawn Timber",
          "High-Grade Assam CTC Teas",
          "Margherita Low-Ash Coal"
        ],
        "hubDescription": "Tinsukia and adjoining Digboi drilled Asia’s first oil well in 1889, continuing active petroleum and plywood trade."
      },
      {
        "id": "as-tezpur",
        "districtName": "Tezpur City of Eternal Romance & Litchi Hub",
        "stateName": "Assam",
        "countryName": "India",
        "latitude": 26.6528,
        "longitude": 92.7926,
        "verified": true,
        "stockistCount": 300,
        "opportunityCount": 13,
        "categories": [
          "Tezpur Litchi (GI)",
          "Military Logistics",
          "Orthodox Tea",
          "Tourism"
        ],
        "availability": "available",
        "primaryMandi": "Chowk Bazar Tezpur & Porowa Fruit Hub",
        "avgMargin": "22% - 32%",
        "famousFor": "Tezpur Litchi (GI Tag - Distinct Sweet Aroma and Bright Red Skin), Defense Northern Command Transit & Beautiful Tea Estates",
        "famousBusinessType": "Horticulture Litchi Processing, Defense Supply Logistics & Estate Tea",
        "keySpecialities": [
          "Juicy Tezpur Litchis (GI)",
          "Single-Garden Assam CTC Teas",
          "Defense Army Forward Supplies",
          "Orange Orchards of Kameng Foothills"
        ],
        "hubDescription": "Tezpur grows luscious GI-tagged litchis on the banks of the Brahmaputra, acting as a northern defense and transit gate."
      }
    ]
  }
];

// Strictly the 28 Official States of the Republic of India
const OFFICIAL_28_SET = new Set([
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
]);

export const TERRITORY_NETWORKS: TerritoryNetwork[] = RAW_TERRITORY_NETWORKS.filter((t) =>
  OFFICIAL_28_SET.has(t.name)
);

// Find nearest territory by coordinates
export const findNearestTerritory = (lat: number, lng: number): TerritoryNetwork => {
  let closest = TERRITORY_NETWORKS[0];
  let minDistance = Infinity;

  for (const territory of TERRITORY_NETWORKS) {
    const dLat = territory.latitude - lat;
    const dLng = territory.longitude - lng;
    const dist = Math.hypot(dLat, dLng);
    if (dist < minDistance) {
      minDistance = dist;
      closest = territory;
    }
  }

  return closest;
};

// Generate animated network connection chains / great-circle arcs
export const generateNetworkArcsForTerritory = (
  selected: TerritoryNetwork,
  activeDistrictId?: string
): NetworkArc[] => {
  const arcs: NetworkArc[] = [];

  let originLat = selected.latitude;
  let originLng = selected.longitude;
  let originLabel = selected.name;

  if (activeDistrictId) {
    const dist = selected.districts.find((d) => d.id === activeDistrictId);
    if (dist) {
      originLat = dist.latitude;
      originLng = dist.longitude;
      originLabel = dist.districtName;
    }
  }

  selected.districts.forEach((d) => {
    if (d.id !== activeDistrictId) {
      arcs.push({
        id: `arc-internal-${selected.id}-${d.id}`,
        startLat: originLat,
        startLng: originLng,
        endLat: d.latitude,
        endLng: d.longitude,
        status: 'primary',
        label: `${d.districtName} (${d.famousBusinessType})`,
        fromName: originLabel,
        toName: d.districtName,
      });
    }
  });

  const otherHubs = TERRITORY_NETWORKS.filter((t) => t.id !== selected.id).slice(0, 3);
  otherHubs.forEach((hub) => {
    arcs.push({
      id: `arc-external-${selected.id}-${hub.id}`,
      startLat: originLat,
      startLng: originLng,
      endLat: hub.latitude,
      endLng: hub.longitude,
      status: 'secondary',
      label: `Inter-State Artery: ${selected.name} ➔ ${hub.name}`,
      fromName: selected.name,
      toName: hub.name,
    });
  });

  return arcs.slice(0, 8);
};
