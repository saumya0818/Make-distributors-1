/**
 * INTERNAL IMAGE MANIFEST
 * Tracks all imagery across Make Distributors to enforce the STRICT NO REPEATED IMAGES RULE.
 * Every image ID, path, purpose, section, and alt_text is recorded and validated.
 */

export interface ImageManifestEntry {
  image_id: string;
  file_path: string;
  purpose: 'hero_showcase' | 'carousel' | 'brand_card' | 'supplier_card' | 'category_card' | 'globe_texture';
  section: string;
  alt_text: string;
}

export const IMAGE_MANIFEST: ImageManifestEntry[] = [
  // ==========================================
  // 1. HERO CENTRAL SHOWCASE (6 Images)
  // ==========================================
  {
    image_id: 'hero-showcase-factory',
    file_path: '/src/assets/images/hero_manufacturer_factory_1790224040673.jpg',
    purpose: 'hero_showcase',
    section: 'HeroSection - Centre Showcase (Factory)',
    alt_text: 'High-speed modern manufacturing plant with automated assembly and packaging lines',
  },
  {
    image_id: 'hero-showcase-package',
    file_path: '/src/assets/images/hero_brand_product_package_1790224052078.jpg',
    purpose: 'hero_showcase',
    section: 'HeroSection - Centre Showcase (Package)',
    alt_text: 'Consumer brand packaged products and branded FMCG goods ready for market distribution',
  },
  {
    image_id: 'hero-showcase-warehouse',
    file_path: '/src/assets/images/hero_wholesaler_warehouse_1790224068006.jpg',
    purpose: 'hero_showcase',
    section: 'HeroSection - Centre Showcase (Warehouse)',
    alt_text: 'Wholesale pallet inventory storage hub with industrial high-bay racking systems',
  },
  {
    image_id: 'hero-showcase-delivery',
    file_path: '/src/assets/images/hero_distributor_delivery_1790224094988.jpg',
    purpose: 'hero_showcase',
    section: 'HeroSection - Centre Showcase (Delivery)',
    alt_text: 'Direct store delivery fleet vehicle servicing regional retail distribution corridors',
  },
  {
    image_id: 'hero-showcase-cartons',
    file_path: '/src/assets/images/packaging_cartons_boxes_1790339472300.jpg',
    purpose: 'hero_showcase',
    section: 'HeroSection - Centre Showcase (Cartons)',
    alt_text: 'Eco-friendly corrugated supplier shipping cartons stacked for wholesale dispatch',
  },
  {
    image_id: 'hero-showcase-retail',
    file_path: '/src/assets/images/retail_supermarket_shelves_1790339497565.jpg',
    purpose: 'hero_showcase',
    section: 'HeroSection - Centre Showcase (Retail)',
    alt_text: 'Well-organized retail supermarket grocery aisles stocked with branded commercial goods',
  },

  // ==========================================
  // 2. FLOATING CONTINUOUS CAROUSEL (8 Images)
  // ==========================================
  {
    image_id: 'carousel-trade-routes',
    file_path: '/src/assets/images/distributor_route_map_1790339512931.jpg',
    purpose: 'carousel',
    section: 'FloatingContinuousCarousel (Routes)',
    alt_text: 'Regional distribution territory trade route planning map with logistics hubs',
  },
  {
    image_id: 'carousel-contracts',
    file_path: '/src/assets/images/business_documents_contract_1790339483742.jpg',
    purpose: 'carousel',
    section: 'FloatingContinuousCarousel (Contracts)',
    alt_text: 'Supply chain distribution partnership agreement paperwork and clipboard',
  },
  {
    image_id: 'carousel-freight-fleet',
    file_path: '/src/assets/images/freight_fleet_motion_1790227178146.jpg',
    purpose: 'carousel',
    section: 'FloatingContinuousCarousel (Freight)',
    alt_text: 'Commercial heavy freight transport fleet trucks in motion on logistics highway',
  },
  {
    image_id: 'carousel-intermodal',
    file_path: '/src/assets/images/logistics_hub_terminal_1790227162895.jpg',
    purpose: 'carousel',
    section: 'FloatingContinuousCarousel (Intermodal)',
    alt_text: 'Intermodal cargo staging terminal with container gantry cranes and rail connections',
  },
  {
    image_id: 'carousel-robotic-hub',
    file_path: '/src/assets/images/smart_fulfillment_hub_1790227209354.jpg',
    purpose: 'carousel',
    section: 'FloatingContinuousCarousel (Robotics)',
    alt_text: 'Automated robotic high-bay fulfillment center with high-speed parcel sorters',
  },
  {
    image_id: 'carousel-partnership',
    file_path: '/src/assets/images/hero_business_partnership_1790224106581.jpg',
    purpose: 'carousel',
    section: 'FloatingContinuousCarousel (Partnership)',
    alt_text: 'Corporate executives sealing brand and distributor partnership handshake',
  },
  {
    image_id: 'carousel-network-hub',
    file_path: '/src/assets/images/network_distribution_hub_1790222647553.jpg',
    purpose: 'carousel',
    section: 'FloatingContinuousCarousel (Hub)',
    alt_text: 'Global distribution network dispatch terminal with automated loading docks',
  },
  {
    image_id: 'carousel-panoramic',
    file_path: '/src/assets/images/network_panoramic_scene_1790224130839.jpg',
    purpose: 'carousel',
    section: 'FloatingContinuousCarousel (Panoramic)',
    alt_text: 'Connected regional and continental distribution corridor supply chain panorama',
  },

  // ==========================================
  // 3. RECOMMENDED BRANDS (8 Images)
  // ==========================================
  {
    image_id: 'brand-1-staples',
    file_path: '/src/assets/images/brand_organic_staples_1790340721824.jpg',
    purpose: 'brand_card',
    section: 'RecommendedBrandsSection (Verdant Harvest)',
    alt_text: 'Organic staples, cold-pressed oils, and grain packets for grocery distribution',
  },
  {
    image_id: 'brand-2-beverages',
    file_path: '/src/assets/images/brand_beverage_cans_1790340737307.jpg',
    purpose: 'brand_card',
    section: 'RecommendedBrandsSection (NovaSip Beverages)',
    alt_text: 'Sleek botanical cold brew electrolyte beverage cans on chilled ice display',
  },
  {
    image_id: 'brand-3-cosmetics',
    file_path: '/src/assets/images/brand_dermal_cosmetics_1790340752374.jpg',
    purpose: 'brand_card',
    section: 'RecommendedBrandsSection (DermaCare Organics)',
    alt_text: 'Clinical cosmetic skincare serum bottles with precision glass dropper pipettes',
  },
  {
    image_id: 'brand-4-ayurveda',
    file_path: '/src/assets/images/brand_herbal_wellness_1790340766133.jpg',
    purpose: 'brand_card',
    section: 'RecommendedBrandsSection (PureBotanica Ayurveda)',
    alt_text: 'Traditional ayurvedic herbal formulation containers, mortar, and botanical roots',
  },
  {
    image_id: 'brand-5-cleaning',
    file_path: '/src/assets/images/brand_cleaning_bottles_1790340782248.jpg',
    purpose: 'brand_card',
    section: 'RecommendedBrandsSection (BioClean Innovations)',
    alt_text: 'Eco-friendly biodegradable home cleaning spray bottles and laundry liquids',
  },
  {
    image_id: 'brand-6-agriculture',
    file_path: '/src/assets/images/brand_agro_nutrients_1790340798284.jpg',
    purpose: 'brand_card',
    section: 'RecommendedBrandsSection (SunHarvest AgriTech)',
    alt_text: 'Agricultural bio-fertilizer jugs and premium hybrid seed packaging pouches',
  },
  {
    image_id: 'brand-7-apparel',
    file_path: '/src/assets/images/brand_technical_wear_1790340814949.jpg',
    purpose: 'brand_card',
    section: 'RecommendedBrandsSection (AeroFlex Workwear)',
    alt_text: 'High-visibility technical workwear jackets and reinforced safety uniforms',
  },
  {
    image_id: 'brand-8-lubricants',
    file_path: '/src/assets/images/brand_synthetic_lube_1790340835479.jpg',
    purpose: 'brand_card',
    section: 'RecommendedBrandsSection (Apex Lubricants)',
    alt_text: 'Premium synthetic motor oil bottles and high-grade vehicle transmission fluids',
  },

  // ==========================================
  // 4. SUPPLIERS SECTION (8 Images)
  // ==========================================
  {
    image_id: 'supplier-1-cold-storage',
    file_path: '/src/assets/images/supplier_cold_warehouse_1790340853882.jpg',
    purpose: 'supplier_card',
    section: 'SuppliersSection (Pinnacle Trade Networks)',
    alt_text: 'Temperature controlled cold storage multi-level high bay pallet warehouse',
  },
  {
    image_id: 'supplier-2-pharma-depot',
    file_path: '/src/assets/images/supplier_pharma_depot_1790340874508.jpg',
    purpose: 'supplier_card',
    section: 'SuppliersSection (Apex Pharma Logistics)',
    alt_text: 'Certified cleanroom pharmaceutical distribution depot with automated monitors',
  },
  {
    image_id: 'supplier-3-hardware-yard',
    file_path: '/src/assets/images/supplier_hardware_yard_1790340890718.jpg',
    purpose: 'supplier_card',
    section: 'SuppliersSection (Great Lakes Industrial Supply)',
    alt_text: 'Industrial distributor yard with steel pipes, cable reels, and tooling',
  },
  {
    image_id: 'supplier-4-agro-silo',
    file_path: '/src/assets/images/supplier_agro_silo_1790340906777.jpg',
    purpose: 'supplier_card',
    section: 'SuppliersSection (Sunbelt Agri Solutions)',
    alt_text: 'Modern agricultural bulk grain storage facility with silver silos and conveyors',
  },
  {
    image_id: 'supplier-5-electrical-depot',
    file_path: '/src/assets/images/supplier_electrical_depot_1790340920079.jpg',
    purpose: 'supplier_card',
    section: 'SuppliersSection (Tri-State Electrical)',
    alt_text: 'Commercial electrical distributor showroom with switchgear and copper cables',
  },
  {
    image_id: 'supplier-6-textile-dispatch',
    file_path: '/src/assets/images/supplier_textile_dispatch_1790340935354.jpg',
    purpose: 'supplier_card',
    section: 'SuppliersSection (Pacific Metro Garments)',
    alt_text: 'Textile wholesale depot with stacked fabric bolts and bulk apparel dispatch',
  },
  {
    image_id: 'supplier-7-rail-intermodal',
    file_path: '/src/assets/images/supplier_rail_intermodal_1790340951752.jpg',
    purpose: 'supplier_card',
    section: 'SuppliersSection (Continental Freight Terminal)',
    alt_text: 'Inland container depot with double-stack freight rail and gantry cranes',
  },
  {
    image_id: 'supplier-8-fmcg-docks',
    file_path: '/src/assets/images/supplier_fmcg_docks_1790340973617.jpg',
    purpose: 'supplier_card',
    section: 'SuppliersSection (National FMCG Corridors)',
    alt_text: 'High throughput FMCG distribution terminal with truck fleet and dock doors',
  },

  // ==========================================
  // 5. EXPLORE CATEGORIES (12 Images)
  // ==========================================
  {
    image_id: 'cat-1-food-bev',
    file_path: '/src/assets/images/food_beverage_distribution_1790222660145.jpg',
    purpose: 'category_card',
    section: 'Categories - Food & Beverage',
    alt_text: 'Packaged foods, spices, beverages, and confectionery products distribution',
  },
  {
    image_id: 'cat-2-health',
    file_path: '/src/assets/images/health_personal_care_1790222672319.jpg',
    purpose: 'category_card',
    section: 'Categories - Health & Personal Care',
    alt_text: 'Dermatological skincare, hygiene bottles, and personal health care goods',
  },
  {
    image_id: 'cat-3-ayurveda',
    file_path: '/src/assets/images/ayurvedic_herbal_extracts_1790339378976.jpg',
    purpose: 'category_card',
    section: 'Categories - Ayurvedic & Herbal',
    alt_text: 'Herbal extracts, botanical dropper bottles, and holistic health formulations',
  },
  {
    image_id: 'cat-4-homecare',
    file_path: '/src/assets/images/modern_smart_warehouse_1790222685582.jpg',
    purpose: 'category_card',
    section: 'Categories - Home Care & Cleaning',
    alt_text: 'Household detergents, disinfectants, and sanitizers in distribution warehouse',
  },
  {
    image_id: 'cat-5-agriculture',
    file_path: '/src/assets/images/agriculture_farming_supplies_1790339394212.jpg',
    purpose: 'category_card',
    section: 'Categories - Agriculture & Farming',
    alt_text: 'Bio-fertilizers, high-yield seed packets, and modern farm sprayers',
  },
  {
    image_id: 'cat-6-apparel',
    file_path: '/src/assets/images/apparel_textile_garments_1790339409658.jpg',
    purpose: 'category_card',
    section: 'Categories - Apparel & Fashion',
    alt_text: 'Textile fabrics, ready-to-wear garments, and corporate workwear supplies',
  },
  {
    image_id: 'cat-7-auto',
    file_path: '/src/assets/images/auto_parts_lubricants_1790339426919.jpg',
    purpose: 'category_card',
    section: 'Categories - Automobile & Transportation',
    alt_text: 'Engine oils, industrial lubricants, and precision automotive spare assemblies',
  },
  {
    image_id: 'cat-8-building',
    file_path: '/src/assets/images/building_hardware_materials_1790339442404.jpg',
    purpose: 'category_card',
    section: 'Categories - Building & Construction',
    alt_text: 'Architectural hardware, power tools, sanitary fittings, and construction materials',
  },
  {
    image_id: 'cat-9-consumer-elec',
    file_path: '/src/assets/images/electronics_appliances_boxes_1790339456248.jpg',
    purpose: 'category_card',
    section: 'Categories - Consumer Electronics',
    alt_text: 'Smart home electronics, wireless audio devices, and packaged appliances',
  },
  {
    image_id: 'cat-10-electrical',
    file_path: '/src/assets/images/hero_central_hub_1790224023047.jpg',
    purpose: 'category_card',
    section: 'Categories - Electronics & Electrical',
    alt_text: 'Commercial switchgear, industrial wiring, LED luminaires, and electrical panels',
  },
  {
    image_id: 'cat-11-packaging',
    file_path: '/src/assets/images/hero_supplier_shipment_1790224082419.jpg',
    purpose: 'category_card',
    section: 'Categories - Packaging',
    alt_text: 'Corrugated cartons, industrial tape, and protective shipping supplies',
  },
  {
    image_id: 'cat-12-services',
    file_path: '/src/assets/images/services_consulting_ops_1790341029858.jpg',
    purpose: 'category_card',
    section: 'Categories - Business Services',
    alt_text: 'B2B supply chain consulting, digital trade analytics, and distributor management office',
  },

  // ==========================================
  // 6. REALISTIC 3D GLOBE (1 Image)
  // ==========================================
  {
    image_id: 'globe-satellite-earth',
    file_path: '/src/assets/images/realistic_earth_satellite_1790340991650.jpg',
    purpose: 'globe_texture',
    section: 'InteractiveEarthSection - Photorealistic Satellite Earth',
    alt_text: 'Photorealistic satellite view of planet Earth with sapphire oceans and highlighted India',
  },
];

/**
 * Validates that every image file path in the manifest is strictly unique.
 * Throws an error or returns false if any duplicate is found.
 */
export function validateImageUniqueness(): { isUnique: boolean; duplicates: string[] } {
  const pathCounts: Record<string, string[]> = {};

  for (const entry of IMAGE_MANIFEST) {
    if (!pathCounts[entry.file_path]) {
      pathCounts[entry.file_path] = [];
    }
    pathCounts[entry.file_path].push(entry.image_id);
  }

  const duplicates = Object.entries(pathCounts)
    .filter(([_, ids]) => ids.length > 1)
    .map(([path, ids]) => `${path} reused in: ${ids.join(', ')}`);

  return {
    isUnique: duplicates.length === 0,
    duplicates,
  };
}
