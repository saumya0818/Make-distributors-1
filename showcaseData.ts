// Showcase items matching professional distributor marketplace format
// Multi-image items for brands, distributor leads, and brand requirements

import beverageCansImg from '../assets/images/brand_beverage_cans_1790340737307.jpg';
import foodBevDistImg from '../assets/images/food_beverage_distribution_1790222660145.jpg';
import retailShelvesImg from '../assets/images/retail_supermarket_shelves_1790339497565.jpg';
import organicStaplesImg from '../assets/images/brand_organic_staples_1790340721824.jpg';
import dermalCosmeticsImg from '../assets/images/brand_dermal_cosmetics_1790340752374.jpg';
import healthPersonalCareImg from '../assets/images/health_personal_care_1790222672319.jpg';
import herbalWellnessImg from '../assets/images/brand_herbal_wellness_1790340766133.jpg';
import ayurvedicExtractsImg from '../assets/images/ayurvedic_herbal_extracts_1790339378976.jpg';
import cleaningBottlesImg from '../assets/images/brand_cleaning_bottles_1790340782248.jpg';
import packagingBoxesImg from '../assets/images/packaging_cartons_boxes_1790339472300.jpg';
import agroNutrientsImg from '../assets/images/brand_agro_nutrients_1790340798284.jpg';
import agricultureSuppliesImg from '../assets/images/agriculture_farming_supplies_1790339394212.jpg';
import technicalWearImg from '../assets/images/brand_technical_wear_1790340814949.jpg';
import apparelGarmentsImg from '../assets/images/apparel_textile_garments_1790339409658.jpg';
import autoLubeImg from '../assets/images/auto_parts_lubricants_1790339426919.jpg';
import syntheticLubeImg from '../assets/images/brand_synthetic_lube_1790340835479.jpg';
import electronicsImg from '../assets/images/electronics_appliances_boxes_1790339456248.jpg';
import warehouseImg from '../assets/images/modern_smart_warehouse_1790222685582.jpg';
import routeMapImg from '../assets/images/distributor_route_map_1790339512931.jpg';
import contractImg from '../assets/images/business_documents_contract_1790339483742.jpg';

export interface ShowcaseImage {
  url: string;
  alt: string;
  imageFit?: 'cover' | 'contain';
  objectPosition?: string;
  bgColor?: string;
}

export interface ShowcaseItem {
  id: string;
  slug: string;
  type: 'brand' | 'lead' | 'requirement';
  title: string;
  brandName?: string;
  companyName?: string;
  shortDescription: string;
  description: string;
  category: string;
  subCategory?: string;
  location: string;
  state?: string;
  city?: string;
  investmentRange: string;
  minInvestment?: string;
  marginExpected?: string;
  warehouseAreaSqft?: string;
  experienceYears?: string;
  preferredDistributorType?: string;
  imageFit?: 'cover' | 'contain';
  objectPosition?: string;
  bannerBgColor?: string;
  images: ShowcaseImage[];
  status: 'active' | 'paused' | 'closed';
  isFeatured?: boolean;
  isVerified?: boolean;
  sortOrder?: number;
  createdAt: string;
  contactPerson?: string;
  contactPhone?: string;
  contactEmail?: string;
  requirementsList: string[];
  benefitsList: string[];
  productSKUs?: string[];
  targetRegions?: string[];
  relatedSlugs?: string[];
}

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'sc-1',
    slug: 'mg-mineral-water',
    type: 'brand',
    title: 'MG Natural Mineral Water & Sparkling Hydration',
    brandName: 'MG Mineral Water',
    companyName: 'MG Pure Aquatics & Beverage Corp Ltd',
    shortDescription: 'Become an authorised regional stockist & route distributor',
    description:
      'MG Mineral Water provides 8-stage natural alkaline spring water, electrolyte-boosted sport bottles, and premium sparkling water in eco-friendly BPA-free bottles and sleek aluminum cans. We offer exclusive territorial distribution rights with healthy margins, high monthly turnover, and dedicated marketing POS display racks for retail chains, horeca, and modern supermarkets.',
    category: 'Food & Beverage',
    subCategory: 'Bottled Beverages & Mineral Water',
    location: 'Pan-India / Regional States',
    state: 'Maharashtra',
    city: 'Mumbai & Pune Hub',
    investmentRange: '₹1–2 Lakh',
    minInvestment: '₹1,50,000',
    marginExpected: '24% - 32%',
    warehouseAreaSqft: '600 - 1,200 sq.ft',
    experienceYears: '2+ Years in FMCG/Beverages',
    preferredDistributorType: 'City / District Super Stockist',
    imageFit: 'cover',
    objectPosition: 'center center',
    bannerBgColor: '#071A2B',
    images: [
      {
        url: beverageCansImg,
        alt: 'MG Mineral Water sleek cans & packaged bottled water lineup',
        imageFit: 'cover',
        objectPosition: 'center center',
      },
      {
        url: foodBevDistImg,
        alt: 'MG Mineral Water regional beverage warehouse & distribution crates',
        imageFit: 'cover',
        objectPosition: 'center center',
      },
      {
        url: retailShelvesImg,
        alt: 'MG Mineral Water supermarket retail display and customer counters',
        imageFit: 'cover',
        objectPosition: 'center center',
      },
      {
        url: packagingBoxesImg,
        alt: 'MG Mineral Water secondary corrugated transit packaging',
        imageFit: 'cover',
        objectPosition: 'center center',
      },
    ],
    status: 'active',
    isFeatured: true,
    isVerified: true,
    sortOrder: 1,
    createdAt: '2026-03-25T08:30:00Z',
    contactPerson: 'Vikram Malhotra (VP Channel Expansion)',
    contactPhone: '+91 9266861127',
    contactEmail: 'distribution@mgwater.in',
    requirementsList: [
      'Minimum warehouse storage capacity of 600 sq.ft with clean loading bay',
      'Active network covering 100+ grocery stores, convenience outlets, or Horeca',
      'Dedicated delivery van or light commercial vehicle (LCV)',
      'Commitment to maintain minimum rolling buffer stock of 15 days',
    ],
    benefitsList: [
      'Protected territorial exclusivity with zero cross-border distributor dumping',
      'Up to 30% gross profit margin on secondary sales turnover',
      '100% replacement guarantee for damaged transit stock within 48 hours',
      'High-impact branded POS merchandise, cooler branding & dealer signages',
    ],
    productSKUs: [
      'MG Alkaline Natural Spring Water (500ml & 1L)',
      'MG Sparkling Mineral Water Glass Bottle (330ml)',
      'MG Electrolyte Quencher Lemon-Mint Sleek Can (250ml)',
      'MG 20-Litre Home & Office Dispenser Jars',
    ],
    targetRegions: ['Maharashtra', 'Gujarat', 'Delhi NCR', 'Karnataka', 'Telangana'],
    relatedSlugs: ['verdant-organic-staples', 'dermal-glow-cosmetics'],
  },
  {
    id: 'sc-2',
    slug: 'verdant-organic-staples',
    type: 'brand',
    title: 'Verdant Harvest Certified Organic Staples & Spices',
    brandName: 'Verdant Harvest',
    companyName: 'Verdant Agro & Organics Pvt Ltd',
    shortDescription: 'Seeking State & District Wholesalers for 85+ Organic SKUs',
    description:
      'Verdant Harvest offers premium stone-ground whole wheat flours, unpolished heirloom pulses, cold-pressed mustard & sesame oils, and certified organic whole spices. Certified by NPOP, USDA Organic, and Jaivik Bharat. Fast-moving FMCG consumption portfolio with high repeat purchases across tier-1 and tier-2 urban family households.',
    category: 'Food & Beverage',
    subCategory: 'Organic Staples, Flours & Cold-Pressed Oils',
    location: 'North & West India',
    state: 'Delhi NCR',
    city: 'Delhi & Gurugram',
    investmentRange: '₹2–5 Lakh',
    minInvestment: '₹2,50,000',
    marginExpected: '18% - 25%',
    warehouseAreaSqft: '800 - 1,500 sq.ft',
    experienceYears: '3+ Years in Kirana/Modern Trade',
    preferredDistributorType: 'District Master Stockist',
    images: [
      {
        url: organicStaplesImg,
        alt: 'Verdant Harvest certified organic packaged grains, flours & cold-pressed oils',
      },
      {
        url: retailShelvesImg,
        alt: 'Verdant Harvest organic food products stacked on premium grocery shelves',
      },
      {
        url: packagingBoxesImg,
        alt: 'Verdant Harvest vacuum-sealed export-quality bulk packaging',
      },
      {
        url: foodBevDistImg,
        alt: 'Verdant Harvest central fulfillment depot and wholesale dispatch',
      },
    ],
    status: 'active',
    isFeatured: true,
    isVerified: true,
    sortOrder: 2,
    createdAt: '2026-03-24T10:15:00Z',
    contactPerson: 'Ananya Sharma (Head of Retail Partnerships)',
    contactPhone: '+91 9266861127',
    contactEmail: 'trade@verdantharvest.com',
    requirementsList: [
      'Clean, dry pest-free warehouse with moisture control',
      'GSTIN registered business with positive banker reference',
      'Capability to service 150+ retail counters on weekly beat schedule',
      'Investment capability of ₹3–5 Lakh for initial stock roll-out',
    ],
    benefitsList: [
      'NPOP and Jaivik Bharat certified brand with heavy digital consumer pull',
      '22% guaranteed retailer margin ensuring high counter push',
      'Free promotional samples, chef demonstration kits & sampling stalls',
      'Digital distributor portal for automated invoice generation & restocking',
    ],
    productSKUs: [
      'Stone-Ground Sharbati Wheat Atta (5kg & 10kg)',
      'Unpolished Toor & Moong Dal (1kg vacuum pack)',
      'Wood-Pressed Virgin Mustard & Groundnut Oil (1L)',
      'Organic Himalayan Pink Rock Salt & Whole Spices',
    ],
    targetRegions: ['Delhi NCR', 'Punjab', 'Haryana', 'Uttar Pradesh', 'Rajasthan'],
    relatedSlugs: ['mg-mineral-water', 'vedic-ayur-remedies'],
  },
  {
    id: 'sc-3',
    slug: 'dermal-glow-cosmetics',
    type: 'brand',
    title: 'DermalGlow Clinical Skin Science & Cosmetics',
    brandName: 'DermalGlow Lab',
    companyName: 'DermalGlow Cosmeceuticals India Pvt Ltd',
    shortDescription: 'Appointing Beauty Store & Pharmacy Channel Partners',
    description:
      'DermalGlow formulates dermatologist-tested peptide serums, niacinamide SPF 50 sunscreens, brightening night creams, and scalp therapy treatments. High gross margin category with strong re-order rates in cosmetic counters, pharmacy chains, beauty salons, and modern retail boutiques.',
    category: 'Health & Personal Care',
    subCategory: 'Derma-Cosmetics & Clinical Skincare',
    location: 'Western & Southern India',
    state: 'Karnataka',
    city: 'Bengaluru Hub',
    investmentRange: '₹3–5 Lakh',
    minInvestment: '₹3,00,000',
    marginExpected: '28% - 38%',
    warehouseAreaSqft: '500 - 800 sq.ft',
    experienceYears: '2+ Years in Pharma / Beauty Wholesale',
    preferredDistributorType: 'Exclusive Territory Distributor',
    images: [
      {
        url: dermalCosmeticsImg,
        alt: 'DermalGlow clinical skincare serums, sunscreens & derma lotions',
      },
      {
        url: healthPersonalCareImg,
        alt: 'DermalGlow pharmacy display counters and retail skincare shelves',
      },
      {
        url: packagingBoxesImg,
        alt: 'DermalGlow tamper-evident cosmetic packaging and shipping cartons',
      },
      {
        url: warehouseImg,
        alt: 'DermalGlow climate-controlled temperature-regulated cosmetics facility',
      },
    ],
    status: 'active',
    isFeatured: true,
    isVerified: true,
    sortOrder: 3,
    createdAt: '2026-03-22T14:00:00Z',
    contactPerson: 'Dr. Rajesh Deshmukh (Commercial Director)',
    contactPhone: '+91 9266861127',
    contactEmail: 'stockists@dermalglow.in',
    requirementsList: [
      'Climate-controlled storage space maintained below 25°C',
      'Existing distribution into beauty stores, pharmacies or salons',
      'Two dedicated sales promoters (BAs) funded 50% by brand',
      'Strict adherence to Maximum Retail Price (MRP) guidelines',
    ],
    benefitsList: [
      'High-margin category with 32% - 38% distributor spread',
      'Endorsed by leading cosmetic dermatologists & beauty influencers',
      'Complete acrylic illuminated counter tester stands provided free',
      '100% expiry replacement guarantee on all unsold inventory',
    ],
    productSKUs: [
      'Multi-Peptide Youth Recovery Elixir (30ml)',
      'Invisible Matte Sunscreen Gel SPF 50 PA++++ (50g)',
      '10% Niacinamide + Zinc Blemish Clearing Serum (30ml)',
      'Ceramide Barrier Repair Moisture Creme (50ml)',
    ],
    targetRegions: ['Karnataka', 'Tamil Nadu', 'Maharashtra', 'Telangana', 'Goa'],
    relatedSlugs: ['vedic-ayur-remedies', 'mg-mineral-water'],
  },
  {
    id: 'sc-4',
    slug: 'vedic-ayur-remedies',
    type: 'brand',
    title: 'VedicAyur Herbal Wellness & Immunity Formulations',
    brandName: 'VedicAyur Sanjeevani',
    companyName: 'VedicAyur Pharmaceuticals Ltd',
    shortDescription: 'Certified AYUSH GMP Manufacturer Appointing Distributors',
    description:
      'VedicAyur produces classical Ayurvedic rasayanas, herbal single-herb extracts, diabetic care powders, liver tonics, and cold-pressed botanical hair oils. Manufactured in certified GMP facilities following authentic classical pharmacopoeia guidelines. Rapidly growing demand in herbal dispensaries and retail stores.',
    category: 'Ayurvedic & Herbal Products',
    subCategory: 'Classical Herbal Formulations & Tonics',
    location: 'Pan-India',
    state: 'Gujarat',
    city: 'Ahmedabad & Surat',
    investmentRange: '₹1–3 Lakh',
    minInvestment: '₹1,50,000',
    marginExpected: '25% - 35%',
    warehouseAreaSqft: '400 - 900 sq.ft',
    experienceYears: '1+ Years in FMCG or Ayurvedic Trade',
    preferredDistributorType: 'Area Distributor / C&F Agent',
    images: [
      {
        url: herbalWellnessImg,
        alt: 'VedicAyur authentic ayurvedic extracts, herbal drops and immunity syrups',
      },
      {
        url: ayurvedicExtractsImg,
        alt: 'VedicAyur raw botanical ingredients, mortar pestle & herbal processing',
      },
      {
        url: packagingBoxesImg,
        alt: 'VedicAyur tamper-proof amber glass bottles and shipping cases',
      },
      {
        url: warehouseImg,
        alt: 'VedicAyur GMP compliant state-of-the-art warehouse facility',
      },
    ],
    status: 'active',
    isFeatured: true,
    isVerified: true,
    sortOrder: 4,
    createdAt: '2026-03-20T11:45:00Z',
    contactPerson: 'Acharya Suresh Patel',
    contactPhone: '+91 9266861127',
    contactEmail: 'ayur@vedicayur.org',
    requirementsList: [
      'Valid Wholesale Drug/Ayush license or commercial trade registration',
      'Coverage across Ayurvedic clinics, general stores, and wellness centers',
      'Clean dry storage area away from direct sunlight',
      'Ready capital for continuous monthly replenishment cycles',
    ],
    benefitsList: [
      'AYUSH GMP and ISO 9001:2015 certified formulations',
      'High consumer repeat rate of 68% within 45 days',
      'Doctor detailing material, free doctor sample packs & literature',
      'Generous quarterly sales achievement cash incentives and trips',
    ],
    productSKUs: [
      'Swarna Prashan Gold Bhasma Drops (15ml)',
      'Pure Shilajit Resin Gold Grade (20g)',
      'Ashwagandha & Gokshura Vitality Elixir (200ml)',
      'Triphala & Aloe Vera Detox Cleanser (500ml)',
    ],
    targetRegions: ['Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Maharashtra', 'Delhi NCR'],
    relatedSlugs: ['dermal-glow-cosmetics', 'verdant-organic-staples'],
  },
  {
    id: 'sc-5',
    slug: 'pureclean-hygiene-supplies',
    type: 'brand',
    title: 'PureClean Eco-Smart Home Care & Cleaning Solutions',
    brandName: 'PureClean Hygiene',
    companyName: 'PureClean Chemical Innovations Pvt Ltd',
    shortDescription: 'Commercial, Institutional & Domestic Cleaning Range',
    description:
      'PureClean formulates biodegradable surface cleaners, enzymatic floor disinfectants, concentrated liquid laundry detergents, and industrial kitchen degreasers. Fast turnover consumables delivering exceptional cost-per-liter efficiency for modern households, hotels, hospitals, and educational facilities.',
    category: 'Home Care & Cleaning Products',
    subCategory: 'Eco-Friendly Detergents & Disinfectants',
    location: 'Eastern & Central India',
    state: 'West Bengal',
    city: 'Kolkata Gateway',
    investmentRange: '₹1–2 Lakh',
    minInvestment: '₹1,00,000',
    marginExpected: '22% - 30%',
    warehouseAreaSqft: '600 - 1,000 sq.ft',
    experienceYears: '1+ Years in General Trade / Cleaning Supplies',
    preferredDistributorType: 'City Wholesale Stockist',
    images: [
      {
        url: cleaningBottlesImg,
        alt: 'PureClean biodegradable floor cleaners, detergents & spray bottles',
      },
      {
        url: packagingBoxesImg,
        alt: 'PureClean corrugated carton bulk packing and 5L industrial cans',
      },
      {
        url: warehouseImg,
        alt: 'PureClean chemical storage and automated bottling lines',
      },
      {
        url: retailShelvesImg,
        alt: 'PureClean products displayed in retail household supermarket aisle',
      },
    ],
    status: 'active',
    isFeatured: true,
    isVerified: true,
    sortOrder: 5,
    createdAt: '2026-03-18T16:20:00Z',
    contactPerson: 'Somenath Mukherjee (Channel Lead)',
    contactPhone: '+91 9266861127',
    contactEmail: 'dealer@purecleanhygiene.com',
    requirementsList: [
      'Chemical-compliant ventilated storage facility',
      'Sales outreach to both retail grocery stores and commercial institutions',
      'Own local delivery transport for prompt shop floor replenishments',
      'Initial purchase order of ₹1.2 Lakh with upfront credit verification',
    ],
    benefitsList: [
      '30% distributor margin with zero predatory discount pressure',
      'Dual demand channels: B2C retail shelves & B2B facility management',
      'High-concentration refill packs driving repeat weekly volume',
      'Free dealer display standees, promo samples & sprayer attachments',
    ],
    productSKUs: [
      'PureClean 10x Pine Floor Disinfectant (1L & 5L)',
      'Bio-Enzyme Liquid Laundry Detergent (1L & 2L)',
      'Anti-Bacterial Multi-Surface Spray (500ml trigger spray)',
      'Heavy-Duty Degreaser for Commercial Kitchens (5L)',
    ],
    targetRegions: ['West Bengal', 'Bihar', 'Odisha', 'Jharkhand', 'Assam'],
    relatedSlugs: ['mg-mineral-water', 'agro-terra-bio'],
  },
  {
    id: 'sc-6',
    slug: 'agro-terra-bio',
    type: 'brand',
    title: 'AgroTerra Bio-Active Crop Nutrients & Organic Yield Boosters',
    brandName: 'AgroTerra Bio',
    companyName: 'AgroTerra Biotech Solutions Ltd',
    shortDescription: 'Partnering with Mandi Wholesalers & Agri-Input Dealers',
    description:
      'AgroTerra manufactures bio-fertilizers, mycorrhiza root promoters, liquid seaweed bio-stimulants, and natural pest repellents. Approved by Ministry of Agriculture for commercial farming. Massive demand cycles during Kharif and Rabi sowing seasons with high seasonal turnover.',
    category: 'Agriculture & Farming',
    subCategory: 'Bio-Fertilizers & Organic Crop Nutrients',
    location: 'Agricultural Corridors (Pan-India)',
    state: 'Punjab',
    city: 'Ludhiana & Bathinda',
    investmentRange: '₹3–5 Lakh',
    minInvestment: '₹3,00,000',
    marginExpected: '20% - 28%',
    warehouseAreaSqft: '1,000 - 2,500 sq.ft',
    experienceYears: '3+ Years in Fertilizer / Seed Dealership',
    preferredDistributorType: 'District Agri-Input Stockist',
    images: [
      {
        url: agroNutrientsImg,
        alt: 'AgroTerra bio-stimulant liquid bottles, mycorrhiza bags and micronutrients',
      },
      {
        url: agricultureSuppliesImg,
        alt: 'AgroTerra farmer application in agricultural field with lush green crops',
      },
      {
        url: packagingBoxesImg,
        alt: 'AgroTerra heavy-duty bags and agricultural shipping crates',
      },
      {
        url: warehouseImg,
        alt: 'AgroTerra central agricultural warehouse depot and dispatch bay',
      },
    ],
    status: 'active',
    isFeatured: true,
    isVerified: true,
    sortOrder: 6,
    createdAt: '2026-03-15T09:00:00Z',
    contactPerson: 'Gurpreet Singh Brar (Agronomy Director)',
    contactPhone: '+91 9266861127',
    contactEmail: 'agri@agroterrabio.com',
    requirementsList: [
      'Valid Agriculture Input / Fertilizer dealer license from state dept',
      'Storage space protected from rainwater and moisture',
      'Established counter relationships with progressive farmer clusters',
      'Capacity to participate in farmer awareness village demonstration days',
    ],
    benefitsList: [
      'Certified organic input approved under FCO (Fertilizer Control Order)',
      'Dedicated field agronomist support provided to conduct village meetings',
      'Seasonal advance booking credit terms with bank guarantees',
      'High seasonal cash turnover with up to 26% dealer gross margins',
    ],
    productSKUs: [
      'AgroTerra Super-Myco Bio-Granules (4kg & 10kg)',
      'Seaweed Liquid Concentrate Bio-Stimulant (1L)',
      'Phosphate Solubilizing Bio-Culture (PSB) (1L)',
      'Organic Botanical Neem Pest Repellent EC (500ml)',
    ],
    targetRegions: ['Punjab', 'Haryana', 'Uttar Pradesh', 'Madhya Pradesh', 'Maharashtra'],
    relatedSlugs: ['verdant-organic-staples', 'pureclean-hygiene-supplies'],
  },
];

export const CATEGORIES_LIST = [
  {
    id: 'cat-1',
    name: 'Food & Beverage',
    slug: 'food-beverage',
    icon: 'Utensils',
    count: '340+ Brands',
    subcategories: ['Mineral Water', 'Organic Staples', 'Beverages & Juices', 'Snacks & Confectionery', 'Dairy Products'],
  },
  {
    id: 'cat-2',
    name: 'Health & Personal Care',
    slug: 'health-personal-care',
    icon: 'HeartPulse',
    count: '280+ Brands',
    subcategories: ['Skincare & Serums', 'Hair Care', 'Cosmetics', 'OTC Health', 'Personal Hygiene'],
  },
  {
    id: 'cat-3',
    name: 'Ayurvedic & Herbal Products',
    slug: 'ayurvedic-herbal-products',
    icon: 'Leaf',
    count: '210+ Brands',
    subcategories: ['Classical Rasayanas', 'Herbal Tonics', 'Immunity Boosters', 'Pure Shilajit', 'Herbal Extracts'],
  },
  {
    id: 'cat-4',
    name: 'Home Care & Cleaning Products',
    slug: 'home-care-cleaning-products',
    icon: 'Sparkles',
    count: '190+ Brands',
    subcategories: ['Floor Cleaners', 'Liquid Detergents', 'Dishwashers', 'Industrial Degreasers', 'Air Fresheners'],
  },
  {
    id: 'cat-5',
    name: 'Agriculture & Farming',
    slug: 'agriculture-farming',
    icon: 'Sprout',
    count: '160+ Brands',
    subcategories: ['Bio-Fertilizers', 'Organic Nutrients', 'Seeds & Seedlings', 'Agro-Chemicals', 'Farm Implements'],
  },
  {
    id: 'cat-6',
    name: 'Apparel & Fashion',
    slug: 'apparel-fashion',
    icon: 'Shirt',
    count: '140+ Brands',
    subcategories: ['Menswear & Shirts', 'Ethnic Wear', 'Workwear Uniforms', 'Hosiery & Innerwear', 'Fashion Accessories'],
  },
  {
    id: 'cat-7',
    name: 'Automobile & Transportation',
    slug: 'automobile-transportation',
    icon: 'Car',
    count: '120+ Brands',
    subcategories: ['Synthetic Engine Oils', 'Lubricants & Grease', 'Auto Spare Parts', 'Battery & Electricals', 'Tyre Care'],
  },
  {
    id: 'cat-8',
    name: 'Housewares & Supplies',
    slug: 'housewares-supplies',
    icon: 'Home',
    count: '95+ Brands',
    subcategories: ['Kitchenware', 'Storage Containers', 'Cleaning Mops', 'Cookware', 'Plasticware'],
  },
  {
    id: 'cat-9',
    name: 'Chemicals & Minerals',
    slug: 'chemicals',
    icon: 'FlaskConical',
    count: '80+ Brands',
    subcategories: ['Industrial Solvents', 'Pigments & Dyes', 'Water Treatment', 'Specialty Resins', 'Construction Adhesives'],
  },
  {
    id: 'cat-10',
    name: 'Consumer Electronics',
    slug: 'consumer-electronics',
    icon: 'Tv',
    count: '75+ Brands',
    subcategories: ['Smart Accessories', 'Home Audio', 'Kitchen Appliances', 'LED Lighting', 'Mobile Accessories'],
  },
];
