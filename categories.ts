import { Category } from '../types';

import foodBeverageImg from '../assets/images/food_beverage_distribution_1790222660145.jpg';
import healthPersonalCareImg from '../assets/images/health_personal_care_1790222672319.jpg';
import ayurvedicHerbalImg from '../assets/images/ayurvedic_herbal_extracts_1790339378976.jpg';
import cleaningBottlesImg from '../assets/images/brand_cleaning_bottles_1790340782248.jpg';
import agricultureFarmingImg from '../assets/images/agriculture_farming_supplies_1790339394212.jpg';
import apparelTextileImg from '../assets/images/apparel_textile_garments_1790339409658.jpg';
import autoPartsImg from '../assets/images/auto_parts_lubricants_1790339426919.jpg';
import buildingHardwareImg from '../assets/images/building_hardware_materials_1790339442404.jpg';
import electronicsAppliancesImg from '../assets/images/electronics_appliances_boxes_1790339456248.jpg';
import electricalHubImg from '../assets/images/supplier_electrical_depot_1790340920079.jpg';
import packagingCartonsImg from '../assets/images/packaging_cartons_boxes_1790339472300.jpg';
import servicesConsultingImg from '../assets/images/services_consulting_ops_1790341029858.jpg';

export const CATEGORIES_DATA: Category[] = [
  {
    id: 'cat-1',
    slug: 'food-beverage',
    name: 'Food & Beverage',
    description: 'Packaged foods, spices, beverages, artisanal snacks, organic staples & confectionery.',
    imageUrl: foodBeverageImg,
    accentColor: '#0284C7',
    opportunityCount: 148,
    subcategories: ['Packaged Snacks', 'Organic Spices', 'Beverages & Juices', 'Grains & Pulses', 'Bakery & Confectionery'],
  },
  {
    id: 'cat-2',
    slug: 'health-personal-care',
    name: 'Health & Personal Care',
    description: 'Dermatological skincare, wellness supplements, personal hygiene & clinical care products.',
    imageUrl: healthPersonalCareImg,
    accentColor: '#0EA5E9',
    opportunityCount: 94,
    subcategories: ['Skincare & Serums', 'Hair Care Solutions', 'Dietary Supplements', 'Oral Hygiene', 'Baby Care Products'],
  },
  {
    id: 'cat-3',
    slug: 'ayurvedic-herbal',
    name: 'Ayurvedic & Herbal',
    description: 'Botanical extracts, traditional herbal remedies, organic wellness oils & holistic health formulations.',
    imageUrl: ayurvedicHerbalImg,
    accentColor: '#16A34A',
    opportunityCount: 76,
    subcategories: ['Herbal Juices', 'Ayurvedic Tablets', 'Therapeutic Oils', 'Natural Immunity Boosters', 'Organic Teas'],
  },
  {
    id: 'cat-4',
    slug: 'home-care-cleaning',
    name: 'Home Care & Cleaning',
    description: 'Eco-conscious household detergents, surface disinfectants, sanitizers & laundry essentials.',
    imageUrl: cleaningBottlesImg,
    accentColor: '#0369A1',
    opportunityCount: 62,
    subcategories: ['Liquid Detergents', 'Surface Cleaners', 'Air Fresheners', 'Dishwashing Concentrates', 'Industrial Sanitizers'],
  },
  {
    id: 'cat-5',
    slug: 'agriculture-farming',
    name: 'Agriculture & Farming',
    description: 'Bio-fertilizers, high-yield seeds, drip irrigation equipment, crop nutrients & farm mechanization.',
    imageUrl: agricultureFarmingImg,
    accentColor: '#15803D',
    opportunityCount: 88,
    subcategories: ['Organic Fertilizers', 'Certified Hybrid Seeds', 'Micro-Nutrients', 'Crop Protection', 'Sprayers & Drip Systems'],
  },
  {
    id: 'cat-6',
    slug: 'apparel-fashion',
    name: 'Apparel & Fashion',
    description: 'Ready-to-wear garments, technical workwear, activewear, knitwear fabrics & retail accessories.',
    imageUrl: apparelTextileImg,
    accentColor: '#0284C7',
    opportunityCount: 112,
    subcategories: ['Men’s & Women’s Casuals', 'Technical Workwear', 'Activewear', 'Footwear', 'Fashion Accessories'],
  },
  {
    id: 'cat-7',
    slug: 'automobile-transportation',
    name: 'Automobile & Transportation',
    description: 'Engine oils, industrial lubricants, brake systems, spare assemblies & vehicle accessories.',
    imageUrl: autoPartsImg,
    accentColor: '#0369A1',
    opportunityCount: 81,
    subcategories: ['Engine Lubricants', 'Brake Pads & Rotors', 'EV Charging Accessories', 'Filtration Systems', 'Auto Detailing'],
  },
  {
    id: 'cat-8',
    slug: 'building-construction',
    name: 'Building & Construction',
    description: 'Vitrified tiles, quartz surfaces, waterproofing adhesives, electrical conduit & structural hardware.',
    imageUrl: buildingHardwareImg,
    accentColor: '#0284C7',
    opportunityCount: 95,
    subcategories: ['Ceramic & Vitrified Tiles', 'Waterproofing Adhesives', 'Plywood & Laminates', 'Pipes & Fittings', 'Sanitaryware'],
  },
  {
    id: 'cat-9',
    slug: 'consumer-electronics',
    name: 'Consumer Electronics',
    description: 'Smart kitchen appliances, audio gadgets, portable power banks & home automation devices.',
    imageUrl: electronicsAppliancesImg,
    accentColor: '#0EA5E9',
    opportunityCount: 104,
    subcategories: ['Smart Home Automation', 'Audio Wearables', 'Kitchen Appliances', 'Power Banks & Cables', 'LED Televisions'],
  },
  {
    id: 'cat-10',
    slug: 'electronics-electrical',
    name: 'Electronics & Electrical',
    description: 'Industrial switchgears, LED luminaires, modular wiring boxes, solar inverters & transformers.',
    imageUrl: electricalHubImg,
    accentColor: '#0369A1',
    opportunityCount: 67,
    subcategories: ['Modular Switches', 'Commercial LED Lighting', 'Copper Cables & Wires', 'Circuit Breakers (MCB)', 'Solar Inverters'],
  },
  {
    id: 'cat-11',
    slug: 'packaging',
    name: 'Packaging',
    description: 'Corrugated cartons, biodegradable mailers, tamper-evident seals & flexible pouches.',
    imageUrl: packagingCartonsImg,
    accentColor: '#0284C7',
    opportunityCount: 53,
    subcategories: ['Corrugated Shipping Boxes', 'Biodegradable Pouches', 'Protective Bubble Wrap', 'Thermal Label Rolls', 'Food Packaging Film'],
  },
  {
    id: 'cat-12',
    slug: 'business-services',
    name: 'Business Services',
    description: 'B2B logistics systems, cold-chain freight, retail consulting & ERP solutions for distributors.',
    imageUrl: servicesConsultingImg,
    accentColor: '#0C4A6E',
    opportunityCount: 46,
    subcategories: ['Cold-Chain Logistics', 'Supply Chain Analytics', 'Retail Point-of-Sale ERP', 'Commercial Warehousing', 'Trade Finance'],
  },
];
