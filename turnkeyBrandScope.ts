export interface TurnkeyServiceDetail {
  id: string;
  slug: string;
  title: string;
  tag: string;
  desc: string;
  longDescription: string;
  image: string;
  badge: string;
  deliverables: string[];
  techStack: string[];
  timeline: Array<{ phase: string; days: string; title: string; detail: string }>;
  commercialValue: string;
  deliverableHighlights: Array<{ label: string; value: string }>;
  faqs: Array<{ q: string; a: string }>;
}

export const TURNKEY_BRAND_SERVICES: TurnkeyServiceDetail[] = [
  {
    id: 'turnkey-website',
    slug: 'turnkey-website',
    title: 'High-Conversion Turnkey Brand Website & Custom Domain',
    tag: 'Fast & Secure • Custom Domain',
    desc: 'Enterprise-grade, mobile-first brand website engineered for rapid load speed, high SEO indexation, and maximum buyer inquiry conversion.',
    longDescription:
      'We design and build a high-velocity, responsive digital flagship for your brand. Built on modern web architecture with sub-second page loading, conversion-focused copywriting, interactive distributor inquiry funnels, and enterprise SSL security. Complete with custom domain DNS setup and automatic mobile optimization.',
    image: '/src/assets/images/digital_brand_website_1791634307052.jpg',
    badge: 'Flagship Web Presence',
    deliverables: [
      'Custom Domain (.com / .in / .co.in) setup & Cloudflare SSL encryption',
      'Fully responsive 5-8 page interactive web portal (Home, About, Products, Territories, Distributorship, Contact)',
      'Automated Lead Qualification & Direct WhatsApp Click-to-Chat trigger buttons',
      'Downloadable Product Catalog & Margin Sheet gate for verified stockists',
      'Built-in Google Analytics 4, Meta Pixel & Search Console sitemap indexing',
      'Lightning-fast CDN deployment with 99.9% uptime SLA',
      'Full administrative CMS access with training documentation',
    ],
    techStack: ['React 19', 'Tailwind CSS', 'Vite', 'Cloudflare CDN', 'Google Search Console', 'GA4'],
    timeline: [
      { phase: 'Phase 1', days: 'Days 1–3', title: 'Architecture & Wireframing', detail: 'Information architecture, brand color integration, and catalog structure approval.' },
      { phase: 'Phase 2', days: 'Days 4–7', title: 'UI Design & Copywriting', detail: 'High-impact copywriting, responsive UI layout, and product photography integration.' },
      { phase: 'Phase 3', days: 'Days 8–11', title: 'Interactive Development', detail: 'Lead capture form hooks, WhatsApp integration, and SEO meta tags setup.' },
      { phase: 'Phase 4', days: 'Days 12–14', title: 'Domain Launch & Handover', detail: 'DNS propagation, SSL handshake, live testing, and ownership transfer.' },
    ],
    commercialValue: 'Establishes instant institutional credibility with super stockists and modern trade buyers.',
    deliverableHighlights: [
      { label: 'Delivery Time', value: '10–14 Business Days' },
      { label: 'Hosting & Domain', value: '1 Year Free Included' },
      { label: 'Mobile Optimization', value: '100% Score' },
      { label: 'Ownership', value: '100% Client IP' },
    ],
    faqs: [
      { q: 'Will I own the domain and website source code?', a: 'Yes, 100%. All domains, code repositories, and hosting accounts are registered under your business name.' },
      { q: 'Can distributors download our wholesale price list?', a: 'Yes. We include a protected lead gate where buyers enter their GST and phone number to unlock the catalog.' },
      { q: 'Is the website optimized for mobile phones?', a: 'Every page is designed mobile-first with rapid loading on 4G and 5G connections across India.' },
    ],
  },
  {
    id: 'ai-whatsapp-chatbot',
    slug: 'ai-whatsapp-chatbot',
    title: '24/7 AI WhatsApp Sales Agent & Conversational Chatbot',
    tag: 'Instant 24/7 Replies • Zero Lead Loss',
    desc: 'Intelligent AI agent trained on your brand catalog that engages inbound buyers, answers FAQs, qualifies distributorship requests, and captures verified contact details automatically.',
    longDescription:
      'Never lose a high-value distributor inquiry because of after-hours delays. Our AI sales agent operates 24/7 on WhatsApp and on your website, greeting buyers, answering product MOQ and pricing questions, qualifying their state and investment capacity, and notifying your sales team in real time.',
    image: '/src/assets/images/laptop_leads_3d_1790841801593.jpg',
    badge: 'Sales Automation',
    deliverables: [
      'Official Meta WhatsApp Business Cloud API verification & Green Tick guidance',
      'Custom LLM prompt engineering trained on your product specs, MOQs, and distribution policy',
      'Automated Lead Qualification flow (capturing Name, City, State, Warehouse Size, Investment Capacity)',
      'Instant Email & SMS alerts sent to your sales manager the moment a hot distributor reaches out',
      'Multi-agent dashboard to let human sales reps take over live chats at any second',
      'Pre-approved WhatsApp template messages for bulk product updates and order confirmations',
    ],
    techStack: ['Meta WhatsApp Cloud API', 'Gemini AI Engine', 'Webhooks', 'Live Dashboard', 'Automated CRM'],
    timeline: [
      { phase: 'Phase 1', days: 'Days 1–2', title: 'Catalog Training', detail: 'Ingestion of product catalog, pricing slabs, FAQ responses, and territory boundaries.' },
      { phase: 'Phase 2', days: 'Days 3–5', title: 'Conversation Flow Design', detail: 'Configuring conversational branches, fallback prompts, and qualification checkpoints.' },
      { phase: 'Phase 3', days: 'Days 6–8', title: 'WhatsApp API Integration', detail: 'Connecting business phone number, testing sandbox webhooks, and routing triggers.' },
      { phase: 'Phase 4', days: 'Days 9–10', title: 'Staff Training & Live Go', detail: 'Simulated customer conversations, team onboarding, and live broadcast test.' },
    ],
    commercialValue: 'Converts 3.8x more website visitors into verified distributor conversations.',
    deliverableHighlights: [
      { label: 'Response Speed', value: '< 2 Seconds 24/7' },
      { label: 'Language Support', value: 'English, Hindi & Hinglish' },
      { label: 'Lead Capture Rate', value: '88% Completion' },
      { label: 'Setup Time', value: '7–10 Days' },
    ],
    faqs: [
      { q: 'Can my human sales team intervene in the chat?', a: 'Yes! The dashboard allows any team member to step in seamlessly and chat directly with the distributor.' },
      { q: 'Does it work with my existing WhatsApp number?', a: 'Yes, we can migrate your existing business number or configure a dedicated new corporate number.' },
    ],
  },
  {
    id: 'social-branding',
    slug: 'social-branding',
    title: 'Instagram & Social Media Launch Kit with Visual Guidelines',
    tag: 'Social Authority • Viral Reach',
    desc: 'Complete visual identity kit including 30 ready-to-post grid templates, story highlights, distributor recruitment carousel ads, and brand voice guidelines.',
    longDescription:
      'Distributors search for your brand on Instagram before signing agreements. We build a high-authority social media presence with professionally branded banners, carousel templates, factory behind-the-scenes graphics, and promotional launch campaigns that signal market leadership.',
    image: '/src/assets/images/veloni_skincare_ad_1790841786092.jpg',
    badge: 'Visual Authority',
    deliverables: [
      '30 Custom High-Resolution Feed Creatives & Educational Carousels (Canva & PSD editable files)',
      '12 Branded Story Highlight Covers & Bio copy with custom call-to-action link',
      'Distributor Recruitment Ad Creatives specifically crafted for Meta B2B campaigns',
      'Brand Social Guidelines sheet with hex color codes, typography hierarchy, and tone of voice',
      '3 Animated Reel Video Intros & Outros with your logo animation',
      'Monthly Content Calendar Blueprint tailored to your industry niche',
    ],
    techStack: ['Adobe Photoshop', 'Illustrator', 'Canva Pro', 'After Effects', 'Meta Business Suite'],
    timeline: [
      { phase: 'Phase 1', days: 'Days 1–3', title: 'Visual Theme Conception', detail: 'Mood board creation, competitor analysis, and aesthetic direction alignment.' },
      { phase: 'Phase 2', days: 'Days 4–7', title: 'Creative Production', detail: 'Graphic design of 30 feed posts, story banners, and highlight icons.' },
      { phase: 'Phase 3', days: 'Days 8–10', title: 'Ad Asset Finalization', detail: 'Creating targeted distributor recruitment ad creatives and video motion graphics.' },
      { phase: 'Phase 4', days: 'Days 11–12', title: 'Delivery & Editable Kits', detail: 'Packaging open files and scheduling first week social launch.' },
    ],
    commercialValue: 'Builds immediate brand prestige so retail stockists view your product as an established market player.',
    deliverableHighlights: [
      { label: 'Ready-to-Post Assets', value: '30 Premium Posts' },
      { label: 'File Formats', value: 'PNG, MP4, Editable Canva' },
      { label: 'Story Highlights', value: '12 Branded Sets' },
      { label: 'Ad Creatives', value: '5 Meta Ad Variations' },
    ],
    faqs: [
      { q: 'Will I be able to edit these graphics later?', a: 'Yes! We provide complete editable Canva and layered design links so your internal team can reuse templates anytime.' },
    ],
  },
  {
    id: 'packaging-design',
    slug: 'packaging-design',
    title: 'Retail Product Packaging & Premium Carton Design',
    tag: 'Barcode Ready • Shelf Dominance',
    desc: 'Industrial & retail packaging design with FSSAI/regulatory compliance, EAN/UPC barcode positioning, and premium die-cut box layouts.',
    longDescription:
      'Retail shelf space is cut-throat. We engineer product packaging, labels, pouches, and corrugated master shippers that stand out in retail aisles, protect goods during transit, and comply with all legal labeling standards (Weights & Measures, FSSAI, MRP, Batch details).',
    image: '/src/assets/images/packaging_cartons_boxes_1790339472300.jpg',
    badge: 'Industrial Packaging',
    deliverables: [
      'Production-ready print vector dielines (AI, PDF, EPS with 300+ DPI CMYK calibration)',
      'Primary packaging design (Bottles, Pouches, Cans, Jars, or Rigid Boxes)',
      'Secondary outer carton & master shipper box branding with handling icons',
      'Full statutory compliance layout: FSSAI license, nutrition tables, barcoding, and batch fields',
      'Photorealistic 3D packaging renders for marketing catalogues and e-commerce listings',
      'Direct coordination with your chosen packaging printer to ensure accurate print finish (Matte, UV, Foil)',
    ],
    techStack: ['Adobe Illustrator', 'Esko Studio', 'Cinema 4D', 'Pantone Color Bridge', 'GS1 Barcodes'],
    timeline: [
      { phase: 'Phase 1', days: 'Days 1–3', title: 'Dieline & Dimension Verification', detail: 'Matching printer specifications, carton burst strength, and label substrates.' },
      { phase: 'Phase 2', days: 'Days 4–7', title: 'Creative Concepts', detail: 'Presenting 3 distinct packaging front-of-pack design directions.' },
      { phase: 'Phase 3', days: 'Days 8–11', title: 'Statutory Layout & Barcodes', detail: 'Applying legal text, ingredient statements, nutritional charts, and GS1 barcodes.' },
      { phase: 'Phase 4', days: 'Days 12–14', title: 'Print Proof Approval', detail: 'Color separation, spot UV layers, and printer-ready vector handover.' },
    ],
    commercialValue: 'Dramatically improves supermarket shelf pickup rates and prevents costly printing rework.',
    deliverableHighlights: [
      { label: 'Dieline Formats', value: '100% Vector Print Ready' },
      { label: '3D Mockups', value: '8 Photorealistic Angles' },
      { label: 'Color System', value: 'Pantone + CMYK' },
      { label: 'Printer Support', value: 'Technical Pre-Press Check' },
    ],
    faqs: [
      { q: 'Can you work with our existing printer?', a: 'Yes! We communicate directly with your corrugation and label printers to align file specifications and tolerances.' },
    ],
  },
  {
    id: 'google-business-seo',
    slug: 'google-business-seo',
    title: 'Verified Google Business Profile & Local Search Map Dominance',
    tag: 'Local Map Pack • 5-Star Reviews',
    desc: 'Pin-point verified Google Maps ranking, local citation building, and commercial address verification to capture regional buyer searches.',
    longDescription:
      'When buyers search for "[Your Industry] distributor near me", your verified Google Business Profile should rank #1. We set up, verify, and optimize your commercial office or depot on Google Maps, configure product catalogs, and generate trust badges.',
    image: '/src/assets/images/three_d_location_map_1790740385428.jpg',
    badge: 'Local Search SEO',
    deliverables: [
      'Official Google Business Profile setup, pin verification, and category optimization',
      'Local Map Pack SEO optimization targeting commercial B2B keywords in your home city',
      'Product catalogue integration inside Google Maps profile with pricing & inquiry links',
      'Automated QR Code review generator card to collect verified buyer reviews',
      '50 High-Authority Indian B2B local business directory citations (Indiamart, TradeIndia, Justdial sync)',
      'Google Maps 360 photo and office verification guidance',
    ],
    techStack: ['Google Business Profile Manager', 'Schema.org LocalBusiness', 'Google Maps API', 'Local Citation Network'],
    timeline: [
      { phase: 'Phase 1', days: 'Days 1–2', title: 'Location Setup & Submission', detail: 'Submitting commercial address, official phone, and business category.' },
      { phase: 'Phase 2', days: 'Days 3–5', title: 'Verification Tracking', detail: 'Video verification / postcard tracking and profile activation.' },
      { phase: 'Phase 3', days: 'Days 6–8', title: 'Product Showcase & Bio', detail: 'Uploading high-res photos, product cards, operating hours, and catalog links.' },
      { phase: 'Phase 4', days: 'Days 9–10', title: 'Citation Network Push', detail: 'Distributing consistent NAP (Name, Address, Phone) across 50 regional directories.' },
    ],
    commercialValue: 'Drives high-intent local trade buyers who search Google directly for nearby suppliers.',
    deliverableHighlights: [
      { label: 'Verification', value: '100% Verified Profile' },
      { label: 'Keywords Mapped', value: '15 High-Volume Search Terms' },
      { label: 'Citations Built', value: '50 Business Directories' },
      { label: 'Turnaround', value: '5–8 Days' },
    ],
    faqs: [
      { q: 'What if Google requires video verification?', a: 'Our local SEO team guides you step-by-step through the video verification process to ensure immediate approval.' },
    ],
  },
  {
    id: 'brand-identity',
    slug: 'brand-identity',
    title: 'Corporate Brand Identity, Logo Suite & Trademark Assets',
    tag: 'Vector Assets • Trademark Ready',
    desc: 'End-to-end brand architecture including primary vector logos, monochrome stamps, bespoke color palettes, and trademark registration assistance.',
    longDescription:
      'A memorable brand logo commands respect and pricing power. We develop complete visual identity systems: primary emblem, responsive horizontal logo, app icon favicon, luxury business stationery, brand style manual, and class-specific trademark search validation.',
    image: '/src/assets/images/make_distributors_md_emblem_1791207036055.jpg',
    badge: 'Corporate Branding',
    deliverables: [
      '3 Master Vector Logo Concepts with unlimited revisions on the selected direction',
      'Full Vector Asset Suite: SVG, EPS, AI, PDF, Transparent PNGs in light & dark modes',
      'Corporate Stationery Package: Luxury Letterhead, Business Cards, Envelope, and ID Card layouts',
      '32-Page Brand Identity Manual detailing color codes (HEX, RGB, CMYK, Pantone), font pairings, and safe zones',
      'Social Media Avatar & Favicon package in 12 standardized pixel dimensions',
      'Indian Trademark Registry preliminary class search check to prevent legal conflicts',
    ],
    techStack: ['Vector AI', 'Pantone Library', 'Typography Hierarchy', 'Trademark Class Registry'],
    timeline: [
      { phase: 'Phase 1', days: 'Days 1–3', title: 'Design Discovery & Concepts', detail: 'Market positioning review, sketching 3 distinct emblem & wordmark concepts.' },
      { phase: 'Phase 2', days: 'Days 4–7', title: 'Refinement & Typography', detail: 'Fine-tuning geometry, custom kerning, and color palette harmonies.' },
      { phase: 'Phase 3', days: 'Days 8–10', title: 'Stationery & Collateral', detail: 'Applying the finalized emblem to commercial stationery, invoices, and signage.' },
      { phase: 'Phase 4', days: 'Days 11–12', title: 'Brand Guidelines Book', detail: 'Compiling the comprehensive PDF brand manual and all vector exports.' },
    ],
    commercialValue: 'Turns generic products into recognizable national consumer brands.',
    deliverableHighlights: [
      { label: 'Concepts Provided', value: '3 Distinct Master Directions' },
      { label: 'File Exports', value: 'Full Vector Package (AI, SVG, PDF)' },
      { label: 'Stationery', value: 'Letterhead, Cards, Invoices' },
      { label: 'Brand Guidelines', value: '32-Page Comprehensive PDF' },
    ],
    faqs: [
      { q: 'Can we register a trademark with this logo?', a: 'Yes. All logo designs are custom-crafted from scratch and checked against Indian IP registries to avoid trademark conflicts.' },
    ],
  },
  {
    id: 'distributor-portal',
    slug: 'distributor-portal',
    title: 'B2B Distributor Wholesale Portal & Digital Product Catalog',
    tag: 'Wholesale Orders • Live Inventory',
    desc: 'Dedicated B2B ordering portal where channel stockists browse bulk price tiers, check MOQ requirements, download GST rate sheets, and place re-orders.',
    longDescription:
      'Streamline your supply chain operations with a private B2B portal. Registered distributors log in to see their specific tier pricing, track dispatched freight shipments, download e-way bills and invoices, and submit replenishment orders directly without phone friction.',
    image: '/src/assets/images/smart_fulfillment_hub_1790227209354.jpg',
    badge: 'B2B Channel Software',
    deliverables: [
      'Password-protected distributor login and self-service registration desk',
      'Tiered Wholesale Pricing Engine (Super Stockist vs Master Distributor vs Retail Wholesaler)',
      'Instant GST invoice calculation and payment gateway integration (UPI, NEFT, Net Banking)',
      'Real-time order tracking dashboard with dispatch status and transporter LR (Lorry Receipt) numbers',
      'Automated PDF order invoice generator with your brand header and bank details',
      'Distributor ledger and credit limit management dashboard for your accounts team',
    ],
    techStack: ['Secure Auth', 'Stripe / Razorpay B2B', 'PostgreSQL / Cloud DB', 'Automated PDF Engine'],
    timeline: [
      { phase: 'Phase 1', days: 'Days 1–3', title: 'Database & Price Tier Schema', detail: 'Structuring tier discounts, minimum order quantities, and tax calculations.' },
      { phase: 'Phase 2', days: 'Days 4–8', title: 'Portal Development', detail: 'Developing the distributor dashboard, shopping bag, and catalog browser.' },
      { phase: 'Phase 3', days: 'Days 9–12', title: 'Payment & Invoicing Integration', detail: 'Connecting payment gateway, invoice generation, and SMS alerts.' },
      { phase: 'Phase 4', days: 'Days 13–15', title: 'Channel Pilot & Rollout', detail: 'Testing with 3 pilot distributors and launching live across your channel.' },
    ],
    commercialValue: 'Eliminates 90% of manual order-taking phone calls and accelerates cash recovery.',
    deliverableHighlights: [
      { label: 'Tier Support', value: 'Up to 5 Pricing Levels' },
      { label: 'Invoicing', value: 'Automated GST Compliant' },
      { label: 'Payment Modes', value: 'UPI, IMPS, RTGS, Credit Terms' },
      { label: 'Uptime', value: '99.9% Enterprise Cloud' },
    ],
    faqs: [
      { q: 'Can different distributors see different pricing?', a: 'Yes! You can assign specific pricing tiers (e.g. Tier-1 Super Stockist vs Tier-2 City Distributor) per account.' },
    ],
  },
  {
    id: 'performance-ads',
    slug: 'performance-ads',
    title: 'Performance Marketing Ads Engine & Verified Lead Pipeline',
    tag: 'Meta & Google Ads • Qualified Leads',
    desc: 'Targeted B2B advertising campaigns across Meta, Google Search, and LinkedIn to generate daily inquiries from active distributors and stockists in your target states.',
    longDescription:
      'Accelerate your state-by-state expansion with laser-targeted digital ad campaigns. We build custom audience funnels reaching business owners, FMCG stockists, wholesale traders, and commercial retailers across your chosen target states, delivering qualified inbound leads directly to your sales CRM.',
    image: '/src/assets/images/aromix_spices_ad_1790841764730.jpg',
    badge: 'Paid Ads Growth',
    deliverables: [
      'Custom B2B ad campaigns engineered across Meta Ads (Facebook & Instagram) and Google Search',
      'Geo-targeted ad sets focusing strictly on your chosen expansion states (e.g. Maharashtra, Gujarat, UP)',
      '10 High-converting static and animated video ad creatives with compelling commercial margin angles',
      'High-velocity Lead Form setup capturing business name, annual turnover, and warehouse square footage',
      'Instant CRM sync pushing leads directly to your WhatsApp and Google Sheets within 3 seconds',
      'Bi-weekly ad optimization, A/B creative testing, and transparent cost-per-lead reporting',
    ],
    techStack: ['Meta Ads Manager', 'Google Ads B2B', 'Zapier / Webhooks', 'Google Sheets CRM', 'Conversion API'],
    timeline: [
      { phase: 'Phase 1', days: 'Days 1–3', title: 'Audience & State Strategy', detail: 'Audience profiling, competitor ad analysis, and state priority allocation.' },
      { phase: 'Phase 2', days: 'Days 4–7', title: 'Ad Creative Production', detail: 'Drafting 10 high-impact ad creatives, copy hooks, and lead form questions.' },
      { phase: 'Phase 3', days: 'Days 8–9', title: 'Conversion Tracking Setup', detail: 'Setting up Meta Pixel, Conversions API, and real-time CRM webhook triggers.' },
      { phase: 'Phase 4', days: 'Days 10–14', title: 'Live Campaign Launch & Scaling', detail: 'Launching campaigns, monitoring CPL (Cost Per Lead), and scaling winners.' },
    ],
    commercialValue: 'Generates 40 to 120+ verified distributor inquiries per month directly into your inbox.',
    deliverableHighlights: [
      { label: 'Expected Leads', value: '40–120+ Verified Inquiries/Mo' },
      { label: 'Geo-Targeting', value: 'Pinpoint State & District Level' },
      { label: 'Ad Creatives', value: '10 High-Conversion Assets' },
      { label: 'Lead Sync Speed', value: '< 3 Seconds to WhatsApp' },
    ],
    faqs: [
      { q: 'How quickly will we start receiving leads?', a: 'Once the campaigns go live (around Day 10), verified leads typically start arriving within 24 to 48 hours.' },
      { q: 'Can we pause or shift ad budgets between states?', a: 'Yes! Budgets can be shifted to any new state or paused at any time based on your warehouse readiness.' },
    ],
  },
];
