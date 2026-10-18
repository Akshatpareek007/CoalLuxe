export interface ProductSpecification {
  parameter: string;
  value: string;
}

export type ProductCategory = 
  | 'shisha-hookah'
  | 'biochar'
  | 'tandoor-charcoal'
  | 'bbq-grill'
  | 'pooja-charcoal'
  | 'water-filtration';

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortTitle: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  image: string;
  gallery: string[];
  applications: string[];
  specifications: ProductSpecification[];
  packagingOptions: string[];
  moq: string;
  leadTime: string;
  availability: string;
  quoteEligible: boolean;
  featured: boolean;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'shisha-hookah-charcoal',
    slug: 'shisha-hookah-charcoal',
    name: 'Shisha / Hookah Charcoal',
    shortTitle: 'Shisha & Hookah Charcoal',
    category: 'shisha-hookah',
    categoryLabel: 'Shisha & Hookah',
    tagline: '100% Odorless & Sulfur-Free Charcoal for Hookah & Shisha Lounges Across India',
    description: 'Manufactured from selected natural shells and high-density carbonized hardwood, our Shisha/Hookah charcoal is engineered for premium hookah lounges, shisha cafes, and hospitality venues across India. It produces zero chemical spark, zero pungent odor, and leaves an ultra-low white ash (< 2.5%). With a steady burn time exceeding 90 minutes, it preserves the authentic flavor and aroma of flavored molasses without burning or bitter taste.',
    keyFeatures: [
      'Extended 90+ minutes consistent burn duration',
      '100% natural and sulfur-free — zero odor or chemical taint',
      'Ultra-low white ash (< 2.5%) for clean smoking sessions',
      'Zero sparks, zero headache-causing chemical binders',
      'High calorific value > 7,500 kcal/kg with uniform heat profile'
    ],
    image: '/images/coconut_charcoal.jpg',
    gallery: [
      '/images/coconut_charcoal.jpg',
      '/images/factory_kilns.jpg',
      '/images/packaging_pallet.jpg'
    ],
    applications: [
      'Hookah & Shisha lounges, cafes, and rooftop venues',
      'Hotel hospitality, banquets, and private catering events',
      'Retail consumer packaging and private labels across India',
      'FMCG wholesale and tobacco accessory distributors'
    ],
    specifications: [
      { parameter: 'Raw Material', value: '100% Natural Shell & Dense Hardwood Firewood' },
      { parameter: 'Fixed Carbon Content', value: '≥ 80%' },
      { parameter: 'Calorific Heating Value', value: '> 7,500 kcal / kg' },
      { parameter: 'Ash Content', value: '≤ 2.0% – 2.5% (Clean Natural White Ash)' },
      { parameter: 'Moisture Content', value: '≤ 4.0%' },
      { parameter: 'Volatile Matter', value: '≤ 12%' },
      { parameter: 'Burning Time', value: '90 – 120 Minutes' },
      { parameter: 'Form & Sizing', value: '25x25x25 mm Cubes / 26x26x26 mm / Hexagonal' }
    ],
    packagingOptions: [
      '1 kg Retail Inner Boxes with Moisture-Proof Poly-Wrap',
      '10 kg Heavy-Duty Master Carton (10 x 1 kg Boxes)',
      '20 kg Bulk Foodservice & Lounge Sacks',
      'Custom OEM / Private Label Packaging with Client Brand'
    ],
    moq: '500 kg (Commercial Wholesale) / Full Truckload (FTL)',
    leadTime: '3–5 business days dispatch across India',
    availability: 'Continuous production year-round',
    quoteEligible: true,
    featured: true
  },
  {
    id: 'biochar',
    slug: 'biochar',
    name: 'Pure Agricultural Biochar',
    shortTitle: 'Biochar',
    category: 'biochar',
    categoryLabel: 'Biochar',
    tagline: 'High-Purity Carbon Soil Conditioner & Soil Amendment for Farms & Nurseries',
    description: 'Produced through controlled oxygen-depleted pyrolysis of clean, legal firewood and woody biomass, our Biochar is an organic-grade soil conditioner. It permanently enhances soil physical structure, boosts cation exchange capacity (CEC), optimizes microbial populations, and drastically increases water retention in agricultural soils across India. Ideal for regenerative agriculture, horticulture, tea estates, polyhouses, and sustainable farming.',
    keyFeatures: [
      'Ultra-high stable carbon content (> 75%) for long-term soil carbon enrichment',
      'High internal surface area (> 300 m²/g) creating thriving microbial habitats',
      'Drastically improves soil water-holding capacity and drought resilience',
      'Reduces chemical fertilizer run-off and optimizes natural nutrient uptake',
      '100% natural, pH balanced, and free of heavy metals or harmful toxins'
    ],
    image: '/images/biochar.jpg',
    gallery: [
      '/images/biochar.jpg',
      '/images/quality_lab.jpg',
      '/images/factory_kilns.jpg'
    ],
    applications: [
      'Organic farming, horticulture, and commercial agriculture crops',
      'Commercial plant nurseries, green polyhouses, and landscaping',
      'Tea, coffee, spices, sugarcane, and fruit orchards',
      'Compost enrichment, vermicompost blending, and bio-fertilizer carriers'
    ],
    specifications: [
      { parameter: 'Raw Material', value: '100% Legally Sourced Hardwood & Woody Biomass' },
      { parameter: 'Fixed Carbon Content', value: '75% – 85%' },
      { parameter: 'Surface Area (BET)', value: '> 300 m² / g' },
      { parameter: 'pH Value', value: '7.5 – 8.5 (Alkaline Soil Balancing)' },
      { parameter: 'Moisture Content', value: '≤ 10%' },
      { parameter: 'Particle Sizing', value: '0–2 mm Powder / 2–8 mm Granules / Custom Crushed' },
      { parameter: 'Organic Matter Content', value: '≥ 85%' }
    ],
    packagingOptions: [
      '25 kg & 50 kg Heavy-Duty HDPE / PP Woven Sacks',
      '500 kg / 1 Ton Jumbo Bulk Bags (FIBC)',
      'Loose Truckload Dispatches for Large Farm Estates'
    ],
    moq: '1 Ton (Regional Delivery) / 10–16 Tons Full Truckload (FTL)',
    leadTime: '3–7 business days dispatch across Indian states',
    availability: 'Available in bulk inventory year-round',
    quoteEligible: true,
    featured: true
  },
  {
    id: 'hardwood-tandoor-charcoal',
    slug: 'hardwood-tandoor-charcoal',
    name: 'Hardwood Tandoor Charcoal',
    shortTitle: 'Hardwood Tandoor Charcoal',
    category: 'tandoor-charcoal',
    categoryLabel: 'Tandoor Charcoal',
    tagline: 'Dense Hardwood Charcoal for Restaurant Clay Tandoors, Bhatties & Indian Kitchens',
    description: 'Specially crafted for commercial Indian restaurants, dhaba kitchens, and hotel clay tandoors. Sourced from 100% legal dense firewood, carbonized slowly to produce solid, heavy lumps that light without blinding sparks or bitter smoke. Emits intense, long-lasting radiant heat (> 700°C) that maintains the optimal baking temperature inside clay tandoors for hours, delivering perfectly crisped rotis, naans, and succulent kebabs.',
    keyFeatures: [
      'Sustained high cooking temperatures exceeding 700°C for hours',
      'Spark-free and low-smoke — safe for busy indoor and open commercial kitchens',
      'Large uniform lump grading (5 cm to 15 cm) with minimal dust',
      'Zero chemical accelerators, starch, or synthetic additives',
      'Low ash residue (< 2.5%) prevents smothering of tandoor airflow'
    ],
    image: '/images/khaya_charcoal.jpg',
    gallery: [
      '/images/khaya_charcoal.jpg',
      '/images/hero_bg.jpg',
      '/images/factory_kilns.jpg'
    ],
    applications: [
      'Commercial restaurant clay tandoors, bhatties, and sigris',
      'Hotel kitchens, banquets, and live tandoori catering counters',
      'Highway dhabas and high-volume North Indian kitchens',
      'Commercial food service and restaurant bulk procurement'
    ],
    specifications: [
      { parameter: 'Timber Species', value: '100% Dense Indian Hardwood (Legal Firewood)' },
      { parameter: 'Form / Grading', value: 'Large Natural Lump (5 cm – 15 cm)' },
      { parameter: 'Calorific Heating Value', value: '> 7,200 kcal / kg' },
      { parameter: 'Fixed Carbon Content', value: '76% – 82%' },
      { parameter: 'Ash Content', value: '≤ 2.0% – 2.5%' },
      { parameter: 'Moisture Content', value: '≤ 4.0%' },
      { parameter: 'Burning Duration', value: '4.0 – 5.5 Hours' },
      { parameter: 'Spark Level', value: 'Non-Popping / Minimal Spark' }
    ],
    packagingOptions: [
      '20 kg, 25 kg & 30 kg Heavy-Duty PP Woven Sacks',
      'Multi-ply Moisture-Resistant Kraft Paper Sacks',
      'Direct Truckload Bulk Delivery to Restaurant Chains & Warehouses'
    ],
    moq: '1 Ton (Local/Regional) / 10–20 Tons Full Truckload (FTL)',
    leadTime: '2–4 business days dispatch',
    availability: 'Continuous high-volume production',
    quoteEligible: true,
    featured: true
  },
  {
    id: 'bbq-grill-charcoal',
    slug: 'bbq-grill-charcoal',
    name: 'BBQ / Grill Charcoal',
    shortTitle: 'BBQ & Grill Charcoal',
    category: 'bbq-grill',
    categoryLabel: 'BBQ & Grill',
    tagline: 'Premium Natural Hardwood Lumpwood & Briquettes for Steakhouses, Live Grills & Outdoor Catering',
    description: 'High-performance natural lump charcoal engineered for professional barbecue chefs, live grill buffets, and outdoor catering. Lights quickly, establishes a deep red glowing ember bed, and generates steady radiant infrared heat that sears meats, paneer, and vegetables to perfection without harsh chemical fumes or sulfur smell. Imparts a subtle, clean woody aroma that enhances barbecue flavor.',
    keyFeatures: [
      'Quick ignition with intense, enduring heat output (> 7,000 kcal/kg)',
      'Zero chemical binders, nitrates, or petroleum ignition aids',
      'Clean burning with pleasant natural wood aroma',
      'Solid chunk sizing (4–12 cm) ensuring consistent airflow in grills',
      'Low ash yield for easy disposal and uninterrupted heat'
    ],
    image: '/images/mangrove_charcoal.jpg',
    gallery: [
      '/images/mangrove_charcoal.jpg',
      '/images/packaging_pallet.jpg',
      '/images/hero_bg.jpg'
    ],
    applications: [
      'Steakhouses, smokehouses, and live barbecue counters',
      'Resort outdoor kitchens and event caterers',
      'Retail consumer BBQ packs and supermarket distribution',
      'Casual dining and cafe grill stations'
    ],
    specifications: [
      { parameter: 'Material', value: '100% Natural Hardwood Firewood' },
      { parameter: 'Fixed Carbon Content', value: '74% – 78%' },
      { parameter: 'Calorific Heating Value', value: '6,800 – 7,200 kcal / kg' },
      { parameter: 'Ash Content', value: '≤ 3.0%' },
      { parameter: 'Moisture Content', value: '≤ 5.0%' },
      { parameter: 'Burning Duration', value: '3.5 – 4.5 Hours' },
      { parameter: 'Lump Fraction', value: 'Medium-Large (4 cm – 12 cm)' }
    ],
    packagingOptions: [
      '5 kg & 10 kg Retail Corrugated Carton Boxes',
      '10 kg & 20 kg Kraft Paper Bags with Inner Moisture Liner',
      '25 kg Reinforced PP Sacks for Commercial Grills',
      'Custom OEM Private Label Box Printing'
    ],
    moq: '500 kg (Sample / Trial) / Full Truckload (FTL)',
    leadTime: '3–5 business days dispatch',
    availability: 'In stock for immediate dispatch',
    quoteEligible: true,
    featured: true
  },
  {
    id: 'pooja-charcoal',
    slug: 'pooja-charcoal',
    name: 'Pooja Charcoal',
    shortTitle: 'Pooja & Havan Charcoal',
    category: 'pooja-charcoal',
    categoryLabel: 'Pooja Charcoal',
    tagline: 'Chemical-Free Sacred Charcoal for Havan, Sambrani, Dhoop, Loban & Religious Rituals',
    description: 'Prepared with purity and sanctity from 100% legal firewood, our Pooja Charcoal is designed for sacred Indian rituals, daily temple aarti, havan/homam ceremonies, and fragrant dhoop/loban burning. Formulated to light easily, burn evenly, and produce zero harsh chemical odors or toxic fumes. Leaves behind clean, respectful white ash, allowing sacred herbal samagri, camphor, and resins to release their natural divine fragrance.',
    keyFeatures: [
      '100% natural, chemical-free, and prepared with ritual sanctity',
      'Burns completely spark-free with zero unpleasant black smoke',
      'Ideal heat level for burning pure Guggal, Loban, Sambrani, and Havan Samagri',
      'Pristine soft white ash residue with zero toxic residue or synthetic binders',
      'Convenient tablet, disc, and mini cube sizes for easy home and temple use'
    ],
    image: '/images/pooja_charcoal.jpg',
    gallery: [
      '/images/pooja_charcoal.jpg',
      '/images/factory_kilns.jpg'
    ],
    applications: [
      'Temples, ashrams, and religious ritual centers across India',
      'Vedic havan, homam, and yajna ceremonies',
      'Daily home pooja, prayer rooms, and aarti rituals',
      'Ayurvedic healing and dhoop/incense manufacturing',
      'Retail religious supply stores and FMCG brand packaging'
    ],
    specifications: [
      { parameter: 'Origin', value: '100% Legal Firewood / Clean Woody Biomass' },
      { parameter: 'Purity', value: '100% Natural, Free of Chemicals & Nitrates' },
      { parameter: 'Form / Shape', value: 'Round Tablets (33 mm / 40 mm) & Small Mini Cubes' },
      { parameter: 'Burning Duration', value: '45 – 60 Minutes per Tablet' },
      { parameter: 'Ash Color', value: 'Clean Soft White Ash' },
      { parameter: 'Smoke / Smell', value: 'Smokeless & Odor-Free Base Combustion' }
    ],
    packagingOptions: [
      'Roll Packs (10 tablets per roll) in foil wrap',
      '250g, 500g & 1 kg Consumer Retail Cartons',
      '5 kg & 10 kg Temple Bulk Master Cartons',
      'Bulk 25 kg bags for wholesale packagers & religious distributors'
    ],
    moq: '200 kg (Retail Bundles) / 1–5 Tons (Wholesale)',
    leadTime: '2–4 business days dispatch',
    availability: 'Ready stock year-round',
    quoteEligible: true,
    featured: true
  },
  {
    id: 'water-filtration-charcoal',
    slug: 'water-filtration-charcoal',
    name: 'Water Filtration Charcoal',
    shortTitle: 'Water Filtration Charcoal',
    category: 'water-filtration',
    categoryLabel: 'Water Filtration',
    tagline: 'High-Porosity Granular & Lump Carbon for Water Purification, Odor & Chlorine Removal',
    description: 'Carefully processed and washed carbon media with an extensive network of sub-microscopic pores. Engineered for water purification, municipal water treatment, industrial effluent plants (ETP), and domestic water filter cartridges across India. Features exceptional iodine value and adsorption capacity to capture chlorine, volatile organic compounds (VOCs), turbidity, unpleasant taste, and odor from municipal and borewell water.',
    keyFeatures: [
      'High iodine adsorption value (> 800 – 1,050 mg/g)',
      'Deeply porous internal surface area (> 800 m²/g) for superior contaminant capture',
      'Water-washed to ensure low dust and minimal initial water turbidity',
      'Effectively removes chlorine, chloramines, dissolved organic chemicals, and odor',
      'Food-grade and potable water treatment compliant'
    ],
    image: '/images/water_filtration_charcoal.jpg',
    gallery: [
      '/images/water_filtration_charcoal.jpg',
      '/images/quality_lab.jpg'
    ],
    applications: [
      'Commercial and municipal water filtration plants',
      'Domestic RO and gravity water purifier filter cartridges',
      'Industrial wastewater treatment (ETP / STP) and decolorization',
      'Aquarium and aquaculture water conditioning',
      'Borewell and well water conditioning systems'
    ],
    specifications: [
      { parameter: 'Base Material', value: 'Pure Carbonized Hardwood & Shell Carbon' },
      { parameter: 'Iodine Number', value: '800 – 1,050 mg / g' },
      { parameter: 'Surface Area (BET)', value: '850 – 1,100 m² / g' },
      { parameter: 'Ash Content', value: '≤ 4.0%' },
      { parameter: 'Moisture Content', value: '≤ 5.0%' },
      { parameter: 'Hardness / Abrasion', value: '≥ 95%' },
      { parameter: 'Mesh / Particle Sizes', value: '4x8, 8x16, 12x30, 20x40 Mesh Granules / Custom' }
    ],
    packagingOptions: [
      '25 kg Heavy-Duty Moisture-Proof HDPE Bags with Inner Liner',
      '500 kg / 650 kg Super Sacks (FIBC Jumbo Bags)',
      'Palletized stretch-wrapped bulk dispatches'
    ],
    moq: '1 Ton (Industrial Supply) / Full Truckload (FTL)',
    leadTime: '3–7 business days dispatch',
    availability: 'Continuous production year-round',
    quoteEligible: true,
    featured: true
  }
];

export const PRODUCT_CATEGORIES = [
  {
    id: 'all',
    name: 'All Products',
    count: 6,
    description: 'Complete commercial supply catalogue across India.'
  },
  {
    id: 'shisha-hookah',
    name: 'Shisha / Hookah',
    count: 1,
    description: 'Odorless, sparkless, and long-burning cubes for lounges & cafes.'
  },
  {
    id: 'biochar',
    name: 'Biochar',
    count: 1,
    description: 'High-purity carbon soil amendment for agricultural fertility and moisture retention.'
  },
  {
    id: 'tandoor-charcoal',
    name: 'Tandoor Charcoal',
    count: 1,
    description: 'High-calorific dense hardwood charcoal for commercial clay tandoors & restaurant bhatties.'
  },
  {
    id: 'bbq-grill',
    name: 'BBQ / Grill',
    count: 1,
    description: 'Natural hardwood lumpwood and briquettes for intense, clean grilling heat.'
  },
  {
    id: 'pooja-charcoal',
    name: 'Pooja Charcoal',
    count: 1,
    description: 'Pure, smoke-controlled sacred charcoal for havan, sambrani, dhoop, and temple rituals.'
  },
  {
    id: 'water-filtration',
    name: 'Water Filtration',
    count: 1,
    description: 'Porous activated carbon granules for municipal, industrial, and domestic water purification.'
  }
] as const;
