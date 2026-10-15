// =========================================================================
// TERRITORY INTELLIGENCE TYPES & PAN-INDIA 28 OFFICIAL STATES
// =========================================================================

export type DistrictStockPoint = {
  id: string;
  districtName: string;
  stateName: string;
  countryName: string;
  latitude: number;
  longitude: number;
  verified: boolean;
  stockistCount?: number;
  opportunityCount?: number;
  categories?: string[];
  availability?: 'high' | 'available' | 'limited' | 'unknown';
  primaryMandi?: string;
  avgMargin?: string;
  routeQuery?: Record<string, string>;
  famousFor: string;
  famousBusinessType: string;
  keySpecialities: string[];
  hubDescription?: string;
};

export type TerritoryNetwork = {
  id: string;
  name: string;
  countryName: string;
  latitude: number;
  longitude: number;
  verifiedStockCount?: number;
  districtCount?: number;
  totalDistributors?: string;
  verifiedStockists?: string;
  readinessScore?: string;
  commercialStatus?: string;
  tradeCorridor?: string;
  keySectors?: string[];
  districts: DistrictStockPoint[];
};

export type NetworkArc = {
  id: string;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  status: 'primary' | 'secondary';
  label?: string;
  fromName?: string;
  toName?: string;
};

export type PulseRing = {
  id: string;
  lat: number;
  lng: number;
  type: 'selected' | 'verifiedHub';
  radius?: number;
};

// Strictly the 28 Official States of the Republic of India (Excluding Union Territories per specification)
export const ALL_INDIAN_TERRITORIES: string[] = [
  'All Territories',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
];

export const OFFICIAL_28_INDIAN_STATES: string[] = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
];
