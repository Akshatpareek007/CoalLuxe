export interface GalleryItem {
  id: string;
  title: string;
  category: 'production' | 'quality' | 'products' | 'logistics';
  categoryLabel: string;
  image: string;
  caption: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gallery-kilns',
    title: 'Traditional Masonry Brick Dome Kilns',
    category: 'production',
    categoryLabel: 'Production Facility',
    image: '/images/factory_kilns.jpg',
    caption: 'High-temperature carbonization inside traditional brick dome kilns with regulated oxygen venting.'
  },
  {
    id: 'gallery-mangrove',
    title: 'Natural Mangrove Lumpwood Charcoal',
    category: 'products',
    categoryLabel: 'Charcoal Products',
    image: '/images/mangrove_charcoal.jpg',
    caption: 'Dense black lumpwood chunks with metallic sheen fracture, dust-free sorting and grading.'
  },
  {
    id: 'gallery-sawdust-briquettes',
    title: 'Hexagonal Extruded Sawdust Briquettes',
    category: 'products',
    categoryLabel: 'Charcoal Products',
    image: '/images/sawdust_briquettes.jpg',
    caption: 'Precision extruded hexagonal sticks with central chimney draft hole for uniform commercial BBQ.'
  },
  {
    id: 'gallery-binchotan',
    title: 'Artisanal White Charcoal (Binchotan Grade)',
    category: 'products',
    categoryLabel: 'Charcoal Products',
    image: '/images/binchotan_white_charcoal.jpg',
    caption: 'High-temperature quenched Binchotan branches with iconic white mineral patina and metallic resonance.'
  },
  {
    id: 'gallery-coconut-cubes',
    title: 'Coconut Shell Shisha Charcoal Cubes',
    category: 'products',
    categoryLabel: 'Charcoal Products',
    image: '/images/coconut_charcoal.jpg',
    caption: 'Calibrated 25x25x25mm coconut shell cubes engineered for odorless, clean-burning hookah sessions.'
  },
  {
    id: 'gallery-quality-lab',
    title: 'Laboratory Quality Testing & Moisture Analysis',
    category: 'quality',
    categoryLabel: 'Quality Control',
    image: '/images/quality_lab.jpg',
    caption: 'Batch testing for calorific value, volatile matter, ash content, and digital moisture verification.'
  },
  {
    id: 'gallery-packaging',
    title: 'Export Packaging & Palletization Staging',
    category: 'logistics',
    categoryLabel: 'Packaging & Logistics',
    image: '/images/packaging_pallet.jpg',
    caption: 'Heavy-duty 10kg and 20kg export cartons shrink-wrapped on export wooden pallets with corner protection.'
  },
  {
    id: 'gallery-container-loading',
    title: 'Ocean Shipping Container Loading',
    category: 'logistics',
    categoryLabel: 'Packaging & Logistics',
    image: '/images/container_shipping.jpg',
    caption: 'Forklift stuffing 40ft High Cube ocean shipping container at maritime terminal loading dock.'
  },
  {
    id: 'gallery-khaya',
    title: 'Khaya Hardwood Lump Charcoal',
    category: 'products',
    categoryLabel: 'Charcoal Products',
    image: '/images/khaya_charcoal.jpg',
    caption: 'Extra-dense Khaya mahogany lump pieces providing long thermal retention in large smokers.'
  },
  {
    id: 'gallery-hero',
    title: 'Radiant Charcoal Embers & Heat Stability',
    category: 'quality',
    categoryLabel: 'Quality Control',
    image: '/images/hero_bg.jpg',
    caption: 'Deep thermal radiation test showcasing uniform red-hot embers with zero sparks and low ash.'
  },
  {
    id: 'gallery-biochar',
    title: 'Pure Agricultural Biochar Soil Amendment',
    category: 'products',
    categoryLabel: 'Charcoal Products',
    image: '/images/biochar.jpg',
    caption: 'High-purity porous carbon granules for agricultural soil conditioning, moisture retention, and organic farming.'
  },
  {
    id: 'gallery-pooja',
    title: 'Pure Pooja & Havan Ritual Charcoal',
    category: 'products',
    categoryLabel: 'Charcoal Products',
    image: '/images/pooja_charcoal.jpg',
    caption: 'Chemical-free sacred charcoal discs and tablets prepared for havan, sambrani, dhoop, and temple rituals.'
  },
  {
    id: 'gallery-water-filter',
    title: 'Activated Water Filtration Charcoal',
    category: 'products',
    categoryLabel: 'Charcoal Products',
    image: '/images/water_filtration_charcoal.jpg',
    caption: 'High-porosity granular carbon media for commercial water purification, municipal plants, and odor removal.'
  }
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'products', label: 'Products' },
  { id: 'production', label: 'Kilns & Factory' },
  { id: 'quality', label: 'Quality Lab' },
  { id: 'logistics', label: 'Packaging & Delivery' }
] as const;
