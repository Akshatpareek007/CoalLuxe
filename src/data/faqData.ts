export interface FAQItem {
  id: string;
  category: 'ordering' | 'packaging' | 'shipping' | 'quality';
  categoryLabel: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-oem-packaging',
    category: 'packaging',
    categoryLabel: 'Packaging & Private Label',
    question: 'Are customized OEM packaging and private label designs supported for international partners?',
    answer: 'Yes. We provide complete turn-key OEM/ODM private label packaging solutions. Partners can customize carton box dimensions (3kg, 5kg, 10kg, 15kg, 20kg), multi-color brand printing, barcoding, and internal PE moisture liners. For bulk shipments, we offer multi-wall kraft paper bags and reinforced polypropylene (PP) sacks with UV and water protection.'
  },
  {
    id: 'faq-moq-leadtime',
    category: 'ordering',
    categoryLabel: 'Ordering & Capacity',
    question: 'What is the Minimum Order Quantity (MOQ) and standard delivery lead time for export orders?',
    answer: 'Our standard Minimum Order Quantity (MOQ) is one 20ft container (approx. 12–14 metric tons for lump charcoal or 18 metric tons for briquettes) or one 40ft High Cube container (22–28 metric tons depending on the product). Production lead time is typically 14 to 18 business days for standard packaging, and 21 business days for initial custom OEM plate engraving and box printing.'
  },
  {
    id: 'faq-dangerous-goods-dg',
    category: 'shipping',
    categoryLabel: 'Shipping & Compliance',
    question: 'Charcoal is classified as Dangerous Goods (DG Class 4.2). How do you ensure smooth maritime customs clearance?',
    answer: 'We have specialized protocols for UN 1361 Class 4.2 Dangerous Goods exports. Every export lot comes accompanied by a comprehensive 16-section GHS-compliant Material Safety Data Sheet (MSDS), a certified Self-Heating Test Report from an accredited laboratory (SGS/Vilas compliant), and verified container stuffing temperature certificates. Our compliance guarantees 100% acceptance by major ocean carriers (Maersk, MSC, CMA CGM, ONE).'
  },
  {
    id: 'faq-incoterms-payment',
    category: 'shipping',
    categoryLabel: 'Shipping & Compliance',
    question: 'Which Incoterms and international payment terms are supported?',
    answer: 'We support standard international commercial terms including FOB (port of origin), CIF (delivered to buyer destination port), CFR, EXW, and DDP (select markets). Payment terms commonly include Telegraphic Transfer (T/T: 30% advance deposit with the remaining 70% payable against scanned copies of the Bill of Lading and inspection certificate) or Irrevocable Letter of Credit (L/C at sight) issued by a reputable international bank.'
  },
  {
    id: 'faq-quality-control',
    category: 'quality',
    categoryLabel: 'Quality & Testing',
    question: 'How is product quality, fixed carbon %, and moisture consistency verified before dispatch?',
    answer: 'Every batch undergoes rigorous four-stage quality assurance: 1) Raw timber density inspection, 2) Kiln thermal monitoring, 3) Laboratory moisture and volatile matter testing with digital moisture balances, and 4) Pre-shipment container stuffing inspection. Test reports indicating calorific value, ash percentage, and fixed carbon are provided with export documentation.'
  },
  {
    id: 'faq-samples',
    category: 'ordering',
    categoryLabel: 'Ordering & Capacity',
    question: 'Can prospective buyers request physical product sample batches for testing?',
    answer: 'Yes. We provide sample packages (typically 2kg to 5kg) of any charcoal category for commercial buyers and laboratory evaluation. Samples are dispatched via DHL/FedEx international express along with technical specification sheets. The sample product is free; clients typically cover express courier freight or provide their courier account number.'
  },
  {
    id: 'faq-wood-sourcing',
    category: 'quality',
    categoryLabel: 'Quality & Testing',
    question: 'Are wood raw materials legally and sustainably sourced?',
    answer: 'Strictly yes. We operate exclusively with legally harvested forestry concessions and certified plantation timber (Mangrove, Acacia, Eucalyptus, and fruitwoods like Coffee and Lychee). All raw material is fully documented and traceable in accordance with forestry regulations and FSC® chain-of-custody standards.'
  }
];
