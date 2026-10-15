// ============================================================================
// B2B Platform Backend Data Models & Entity Types
// Replicating core backend features & flows of appointdistributors.com
// ============================================================================

export type UserRole = 'GUEST' | 'DISTRIBUTOR' | 'BRAND' | 'ADMIN';

export type ContactVisibility = 'show_all' | 'hide_phone' | 'hide_email' | 'hide_both';

export type LeadStatus = 'active' | 'closed' | 'expired';

export type RequirementStatus = 'active' | 'paused' | 'closed' | 'expired';

export type EnquiryStatus = 'new' | 'contacted' | 'resolved' | 'spam';

export type EnquiryTargetType = 'brand_profile' | 'distributor_profile' | 'brand_requirement' | 'distributor_lead';

export type PreferredDistributorType = 'state' | 'city' | 'pan-India' | 'export' | 'district' | 'region';

export type ContentStatus = 'draft' | 'published' | 'archived';

export type NotificationType =
  | 'new_enquiry'
  | 'new_lead'
  | 'new_requirement'
  | 'system'
  | 'profile_verified'
  | 'match_alert';

export type SubscriptionStatus = 'active' | 'cancelled' | 'expired';

export type FeaturedEntityType = 'lead' | 'requirement' | 'profile';

// ----------------------------------------------------------------------------
// 1. User & Authentication
// ----------------------------------------------------------------------------
export interface User {
  id: string;
  email: string;
  phone?: string;
  password_hash: string;
  role: UserRole;
  is_email_verified: boolean;
  is_phone_verified: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  // Security & Token rotation fields
  email_verification_token?: string;
  phone_verification_otp?: string;
  phone_otp_expires_at?: string;
  password_reset_token?: string;
  password_reset_expires_at?: string;
}

export interface RefreshToken {
  id: string;
  user_id: string;
  token: string;
  expires_at: string;
  created_at: string;
  revoked: boolean;
}

// ----------------------------------------------------------------------------
// 2. Profiles
// ----------------------------------------------------------------------------
export interface CommonProfile {
  id: string;
  user_id: string;
  full_name?: string;
  company_name: string;
  address_line?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  website?: string;
  bio?: string;
  created_at: string;
  updated_at: string;
}

export interface BrandProfile {
  id: string;
  user_id: string;
  brand_name: string;
  company_name: string;
  industry_ids: string[];
  product_category_ids: string[];
  target_regions: string[]; // List of states/cities or region codes
  min_investment_range: string; // e.g. "₹2 Lakhs - ₹5 Lakhs"
  min_warehouse_area_sqft: number;
  preferred_distributor_type: PreferredDistributorType;
  website?: string;
  bio?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  is_verified: boolean;
  is_suspended?: boolean;
  logo_url?: string;
  created_at: string;
  updated_at: string;
}

export interface DistributorProfile {
  id: string;
  user_id: string;
  full_name: string;
  company_name?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  years_of_experience: number;
  warehouse_area_sqft: number;
  investment_budget_range: string; // e.g. "₹5 Lakhs - ₹15 Lakhs"
  interested_category_ids: string[];
  past_experience_text?: string;
  preferred_regions: string[]; // JSON array of target states/cities
  is_verified: boolean;
  is_suspended?: boolean;
  website?: string;
  bio?: string;
  created_at: string;
  updated_at: string;
}

// ----------------------------------------------------------------------------
// 3. Leads & Requirements
// ----------------------------------------------------------------------------
export interface DistributorLead {
  id: string;
  user_id: string;
  distributor_profile_id: string;
  title: string;
  category_ids: string[];
  requirement_text: string;
  investment_range: string;
  years_of_experience: number;
  warehouse_area_sqft: number;
  location_city: string;
  location_state: string;
  location_pincode: string;
  contact_visibility: ContactVisibility;
  status: LeadStatus;
  is_featured: boolean;
  expires_at: string;
  created_at: string;
  updated_at: string;
  // Contact details stored for owner/admin and masked for public
  contact_name?: string;
  contact_phone?: string;
  contact_email?: string;
}

export interface BrandRequirement {
  id: string;
  user_id: string;
  brand_profile_id: string;
  title: string;
  category_ids: string[];
  requirement_text: string;
  target_regions: string[];
  min_investment_range: string;
  min_warehouse_area_sqft: number;
  preferred_experience_years?: number;
  contact_person_name: string;
  contact_person_phone: string;
  contact_person_email: string;
  status: RequirementStatus;
  is_urgent: boolean;
  is_featured: boolean;
  expires_at: string;
  created_at: string;
  updated_at: string;
}

// ----------------------------------------------------------------------------
// 4. Categories & Taxonomy
// ----------------------------------------------------------------------------
export interface Industry {
  id: string;
  name: string;
  slug: string;
  parent_id?: string | null;
  is_active: boolean;
  created_at: string;
}

export interface ProductCategory {
  id: string;
  industry_id: string;
  name: string;
  slug: string;
  is_active: boolean;
  created_at: string;
}

// ----------------------------------------------------------------------------
// 5. Enquiries & Messaging
// ----------------------------------------------------------------------------
export interface Enquiry {
  id: string;
  from_user_id?: string | null; // Nullable for guest
  from_name: string;
  from_email: string;
  from_phone: string;
  to_user_id: string; // Recipient brand or distributor
  target_type: EnquiryTargetType;
  target_id: string; // Logical reference to profile, lead, or requirement
  message: string;
  status: EnquiryStatus;
  created_at: string;
  updated_at: string;
}

// ----------------------------------------------------------------------------
// 6. Blog & Content
// ----------------------------------------------------------------------------
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string; // Markdown or HTML
  author_user_id: string;
  author_name?: string;
  status: ContentStatus;
  published_at?: string;
  meta_title?: string;
  meta_description?: string;
  featured_image_url?: string;
  category_ids?: string[];
  tags?: string[];
  created_at: string;
  updated_at: string;
}

export interface StaticPage {
  id: string;
  slug: string;
  title: string;
  content: string;
  meta_title?: string;
  meta_description?: string;
  is_published: boolean;
  updated_at: string;
}

// ----------------------------------------------------------------------------
// 7. Notifications
// ----------------------------------------------------------------------------
export interface Notification {
  id: string;
  user_id: string;
  type: NotificationType;
  title: string;
  message: string;
  is_read: boolean;
  related_entity_type?: string;
  related_entity_id?: string;
  created_at: string;
}

// ----------------------------------------------------------------------------
// 8. Monetization
// ----------------------------------------------------------------------------
export interface Plan {
  id: string;
  name: string;
  slug: string;
  price: number;
  currency: string;
  billing_period: 'monthly' | 'yearly';
  features_json: string[];
  is_active: boolean;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan_id: string;
  status: SubscriptionStatus;
  start_at: string;
  end_at: string;
  created_at: string;
  updated_at: string;
}

export interface FeaturedListing {
  id: string;
  entity_type: FeaturedEntityType;
  entity_id: string;
  starts_at: string;
  ends_at: string;
  is_active: boolean;
  created_at: string;
}

// ----------------------------------------------------------------------------
// 9. API DTOs & Search
// ----------------------------------------------------------------------------
export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface SearchFilterParams extends PaginationParams {
  q?: string;
  category_id?: string;
  industry_id?: string;
  state?: string;
  city?: string;
  min_investment?: string;
  max_investment?: string;
  min_warehouse_sqft?: number;
  min_experience_years?: number;
  status?: string;
  is_featured?: boolean;
  sort_by?: 'newest' | 'featured_first' | 'relevance';
}

export interface MatchScoreResult<T> {
  item: T;
  match_score: number; // 0 - 100
  match_reasons: string[];
}

export interface JwtPayload {
  userId: string;
  email: string;
  role: UserRole;
  iat?: number;
  exp?: number;
}
