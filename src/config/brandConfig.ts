/**
 * Configurable Brand & Company Data Layer
 * 
 * IMPORTANT: In accordance with project requirements, client details have not yet been provided.
 * Use this centralized configuration file to personalize the entire website with real client credentials
 * without rewriting components or page templates.
 */

export interface ExportMarket {
  country: string;
  code: string;
  primaryPort: string;
  flag: string;
}

export interface BrandConfig {
  isDemoMode: boolean;
  companyName: string;
  companyShortName: string;
  legalEntity: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  address: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  logoText: string;
  logoSubtext: string;
  logoUrl?: string;
  primaryMarket: string;
  productionCapacity: string;
  exportMarketsCount: string;
  monthlyContainersCount: string;
  satisfiedCustomersCount: string;
  repeatCustomerRate: string;
  exportMarketsList: ExportMarket[];
  certificationsSummary: string;
  certificationsList: { title: string; issuer: string; description: string }[];
  shippingIncoterms: string[];
  dgTransportClass: string;
  unNumber: string;
  packingGroup: string;
  formEndpoint?: string; // Optional backend submission URL
  companyAddress?: string;
  factoryAddress?: string;
  companyPhone?: string;
  companyEmail?: string;
  exportMarkets?: { region: string; countries: string }[];
  socialLinks: {
    linkedin?: string;
    whatsapp?: string;
    email?: string;
  };
}

export const BRAND_PLACEHOLDERS = {
  COMPANY_NAME: '[COMPANY_NAME]',
  COMPANY_TAGLINE: '[COMPANY_TAGLINE]',
  COMPANY_DESCRIPTION: '[COMPANY_DESCRIPTION]',
  COMPANY_ADDRESS: '[COMPANY_ADDRESS]',
  COMPANY_EMAIL: '[COMPANY_EMAIL]',
  COMPANY_PHONE: '[COMPANY_PHONE]',
  WHATSAPP_NUMBER: '[WHATSAPP_NUMBER]',
  COMPANY_LOGO: '[COMPANY_LOGO]',
  PRIMARY_MARKET: '[PRIMARY_MARKET]',
  PRODUCTION_CAPACITY: '[PRODUCTION_CAPACITY]',
  EXPORT_MARKETS: '[EXPORT_MARKETS]',
  CERTIFICATION_DETAILS: '[CERTIFICATION_DETAILS]',
} as const;

export const brandConfig: BrandConfig = {
  // Flag indicating demonstration mode with configurable placeholders
  isDemoMode: true,

  // Company Brand Identity
  companyName: 'CoalLuxe Industrial Charcoal',
  companyShortName: 'CoalLuxe',
  legalEntity: '[COMPANY_NAME] Global Charcoal Manufacturing & Export Ltd.',
  tagline: 'The Essence of Fire',
  
  heroHeadline: 'Premium Charcoal, Made from Carefully Selected Wood',
  heroSubheadline: 'Direct manufacturer and bulk supplier of high-quality wood charcoal, lumpwood, and briquettes. Consistent quality, reliable supply, and delivery across India for commercial and industrial requirements.',
  
  description: 'Direct manufacturer and bulk supplier of high-quality wood charcoal, lumpwood, and briquettes. Consistent quality, reliable supply, and delivery across India for commercial and industrial requirements.',

  // Contact Details
  address: '[COMPANY_ADDRESS] (Demo: Industrial Logistics Park)',
  city: 'Industrial Logistics Hub',
  country: 'India',
  email: 'sales@[COMPANY_DOMAIN].com (Demo: inquiries@coalluxe-demo.com)',
  phone: '+91 [COMPANY_PHONE]',
  whatsappNumber: '+910000000000', // Set to real WhatsApp number when supplied
  whatsappMessage: 'Hello, I am interested in bulk commercial quotation for charcoal supply across India.',

  logoText: 'COALLUXE',
  logoSubtext: 'THE ESSENCE OF FIRE',
  logoUrl: '/images/logo_transparent.png',

  // Operational Metrics (India Domestic Focus)
  primaryMarket: 'Pan-India Commercial & Industrial Distribution',
  productionCapacity: '400+ Metric Tons / Month (Bulk Truckload Supply)',
  exportMarketsCount: '4+',
  monthlyContainersCount: '400+ Tons',
  satisfiedCustomersCount: '1000+',
  repeatCustomerRate: '94.8%',

  // Domestic Distribution Hubs Across India
  exportMarketsList: [
    { country: 'Maharashtra', code: 'MH', primaryPort: 'Mumbai / Pune / Nagpur Hubs', flag: '🇮🇳' },
    { country: 'Delhi NCR', code: 'DL', primaryPort: 'Delhi / Gurugram / Noida Logistics', flag: '🇮🇳' },
    { country: 'Gujarat', code: 'GJ', primaryPort: 'Ahmedabad / Surat / Rajkot Corridor', flag: '🇮🇳' },
    { country: 'Karnataka', code: 'KA', primaryPort: 'Bengaluru / Mangaluru Hub', flag: '🇮🇳' },
    { country: 'Tamil Nadu', code: 'TN', primaryPort: 'Chennai / Coimbatore Distribution', flag: '🇮🇳' },
    { country: 'Telangana & AP', code: 'TS', primaryPort: 'Hyderabad / Visakhapatnam Hub', flag: '🇮🇳' },
    { country: 'West Bengal', code: 'WB', primaryPort: 'Kolkata / Durgapur Hub', flag: '🇮🇳' },
    { country: 'Rajasthan', code: 'RJ', primaryPort: 'Jaipur / Jodhpur / Kota Hub', flag: '🇮🇳' },
    { country: 'Uttar Pradesh', code: 'UP', primaryPort: 'Kanpur / Lucknow / Varanasi Corridor', flag: '🇮🇳' },
    { country: 'Punjab & Haryana', code: 'PB', primaryPort: 'Ludhiana / Chandigarh Logistics', flag: '🇮🇳' },
    { country: 'Madhya Pradesh', code: 'MP', primaryPort: 'Indore / Bhopal Central Hub', flag: '🇮🇳' },
    { country: 'Kerala', code: 'KL', primaryPort: 'Kochi / Kozhikode Hub', flag: '🇮🇳' },
  ],

  // Certifications & Regulatory
  certificationsSummary: 'FSC® certified legal timber sourcing, UN 1361 Dangerous Goods maritime compliance, ISO 9001 certified batch consistency, and Vilas/SGS self-heating certified.',
  certificationsList: [
    {
      title: 'Dangerous Goods UN 1361',
      issuer: 'IMO / Maritime Safety Authority',
      description: 'Class 4.2 Spontaneously Combustible Solid testing passed, Packing Group III approved container stuffing.'
    },
    {
      title: 'FSC® Chain of Custody Sourcing',
      issuer: 'Forest Stewardship Council',
      description: '100% legally harvested forestry concessions and plantation timber validation with full traceability.'
    },
    {
      title: 'Independent Laboratory Verification',
      issuer: 'SGS / Vinacontrol Audits',
      description: 'Every production lot tested for Fixed Carbon %, Ash Content %, Moisture %, and Calorific Value.'
    },
    {
      title: 'Multilingual MSDS & Self-Heating Test',
      issuer: 'Accredited Safety Testing Labs',
      description: 'Material Safety Data Sheets available in English, Japanese, and Arabic to ensure rapid customs clearance.'
    }
  ],

  // Logistics terms
  shippingIncoterms: ['FOB (Free On Board)', 'CIF (Cost, Insurance & Freight)', 'CFR (Cost and Freight)', 'EXW (Ex Works)', 'DDP (Delivered Duty Paid - Select Markets)'],
  dgTransportClass: 'Class 4.2 (Dangerous Goods - Maritime Approved)',
  unNumber: 'UN 1361',
  packingGroup: 'Packing Group III',

  // Backend submission endpoint (null = runs in client-side simulated B2B queue mode)
  formEndpoint: undefined,

  // Extended convenience aliases
  companyAddress: '[COMPANY_ADDRESS] (Demo: Industrial Area, Logistics Hub, India)',
  factoryAddress: '[FACTORY_ADDRESS] (Demo: Kiln Unit, Industrial Corridor, India)',
  companyPhone: '+91 [COMPANY_PHONE]',
  companyEmail: 'sales@[COMPANY_DOMAIN].com (Demo: inquiries@coalluxe-demo.com)',
  exportMarkets: [
    { region: 'Northern India', countries: 'Delhi NCR, Punjab, Haryana, Uttar Pradesh, Rajasthan, Uttarakhand' },
    { region: 'Western India', countries: 'Maharashtra (Mumbai, Pune), Gujarat (Ahmedabad, Surat), Goa' },
    { region: 'Southern India', countries: 'Karnataka (Bengaluru), Tamil Nadu (Chennai), Telangana (Hyderabad), Kerala, Andhra Pradesh' },
    { region: 'Eastern & Central India', countries: 'West Bengal (Kolkata), Madhya Pradesh (Indore), Odisha, Bihar, Chhattisgarh' }
  ],

  socialLinks: {
    linkedin: 'https://linkedin.com/company/coalluxe-charcoal',
    whatsapp: 'https://wa.me/10000000000',
    email: 'mailto:inquiries@coalluxe-demo.com'
  }
};

export const BRAND_CONFIG = brandConfig;
