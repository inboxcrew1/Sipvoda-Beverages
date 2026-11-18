/**
 * SIPVODA Machinery Catalogue & Pricing Data
 * All specifications and baseline pricing sourced directly from supplier catalogue
 * (Maa Brijeshwari Engineering, Bulandshahr / UP).
 */

export const WHATSAPP_PHONE = '919528021068';

export const MACHINERY_CATEGORIES = [
  { id: 'all', name: 'All Machinery', icon: 'Grid' },
  { id: 'ro-plants', name: 'RO Water Treatment Plants', icon: 'Droplets' },
  { id: 'filling-machines', name: 'Water Filling Machines', icon: 'Gauge' },
  { id: 'labelling-machines', name: 'Bottle Labelling Machines', icon: 'Tag' },
  { id: 'group-packing', name: 'Group Packing (Shrink)', icon: 'Package' },
  { id: 'date-coding', name: 'Date & Batch Coders', icon: 'Binary' },
  { id: 'blowing-machines', name: 'PET Bottle Blowing', icon: 'Wind' },
  { id: 'storage-tanks', name: 'SS Storage Tanks', icon: 'Cylinder' },
  { id: 'ozone-generators', name: 'Ozone Generators', icon: 'Sparkles' },
];

export const MACHINERY_CATALOGUE = [
  // ── CATEGORY 1: RO WATER TREATMENT PLANTS ──────────────────
  {
    id: 'ro-plant-frp',
    category: 'ro-plants',
    categoryName: 'RO Water Treatment Plants',
    name: 'FRP RO Water Plant',
    subtitle: 'High Recovery Commercial RO with Skid Frame & Dosing Pump',
    image: '/assets/images/machinery/ro-plant-frp.jpg',
    operation: 'Automatic',
    material: 'FRP (Plastic) with Steel Frame',
    included: 'Antiscalant Dosing Pump, Pressure Gauges, Flow Meters',
    description: 'Heavy-duty commercial Reverse Osmosis system featuring corrosion-resistant FRP pressure vessels on a structural steel frame. Ideal for packaged drinking water plants with raw water TDS up to 2,000 PPM.',
    features: [
      'Automatic high & low pressure cut-off protection',
      'Integrated chemical dosing pump for membrane scaling control',
      'Dual multi-port valve filtration (Sand & Carbon)',
      'Digital TDS and conductivity online monitoring',
      'Rigid MS skid frame with powder-coated anti-corrosion finish'
    ],
    hasDropdown: true,
    selectorLabel: 'Select Production Capacity',
    options: [
      { label: '500 LPH (Compact / Pilot Plant)', capacity: '500 LPH', price: 80000, formattedPrice: '₹80,000', usedFor: 'Boutique Bottling / Small Units' },
      { label: '1,000 LPH (Commercial Model)', capacity: '1,000 LPH', price: 120000, formattedPrice: '₹1,20,000', usedFor: '10–12 BPM Line' },
      { label: '2,000 LPH (Standard Industrial)', capacity: '2,000 LPH', price: 280000, formattedPrice: '₹2,80,000', usedFor: '24 BPM Bottling Line' },
      { label: '3,000 LPH (Medium High Output)', capacity: '3,000 LPH', price: 380000, formattedPrice: '₹3,80,000', usedFor: '40 BPM Bottling Line' },
      { label: '4,000 LPH (High Output)', capacity: '4,000 LPH', price: 510000, formattedPrice: '₹5,10,000', usedFor: '60 BPM Bottling Line' },
      { label: '6,000 LPH (Industrial Scale)', capacity: '6,000 LPH', price: 610000, formattedPrice: '₹6,10,000', usedFor: '90 BPM Bottling Line' },
    ],
    defaultOptionIndex: 2, // 2000 LPH default
    verificationNote: 'Note: Material verified as FRP composite vessels on structural steel frame.'
  },
  {
    id: 'ro-plant-ss304',
    category: 'ro-plants',
    categoryName: 'RO Water Treatment Plants',
    name: 'Stainless Steel 304 RO Water Plant',
    subtitle: 'Premium Food-Grade SS 304 Architecture for BIS IS 14543 Standards',
    image: '/assets/images/machinery/ro-plant-ss304.jpg',
    operation: 'Automatic',
    material: 'Stainless Steel 304 (Vessels & Skid Frame)',
    included: 'Dosing Pump, Multistage SS Pump, SS Pressure Tubes, Control Panel',
    description: 'Fully sanitary grade Stainless Steel 304 Reverse Osmosis purification plant engineered for BIS/FSSAI packaged drinking water compliance. Complete SS vessels, piping, and instrumentation.',
    features: [
      'Food-grade 304 Stainless Steel pressure vessels & sanitary piping',
      'Vertical multistage high-pressure SS booster pump',
      'Electronic panel board with automatic backwash timer',
      'Integrated micron cartridge filter housing in SS304',
      'Suitable for premium mineral water & glass bottling lines'
    ],
    hasDropdown: true,
    selectorLabel: 'Select Production Capacity',
    options: [
      { label: '500 LPH (Sanitary SS304)', capacity: '500 LPH', price: 100000, formattedPrice: '₹1,00,000', usedFor: 'Small Capacity / Lab Standards' },
      { label: '1,000 LPH (Sanitary SS304)', capacity: '1,000 LPH', price: 180000, formattedPrice: '₹1,80,000', usedFor: '10–12 BPM Line' },
      { label: '2,000 LPH (Industrial SS304)', capacity: '2,000 LPH', price: 380000, formattedPrice: '₹3,80,000', usedFor: '24 BPM Bottling Line' },
      { label: '3,000 LPH (Industrial SS304)', capacity: '3,000 LPH', price: 480000, formattedPrice: '₹4,80,000', usedFor: '40 BPM Bottling Line' },
      { label: '4,000 LPH (Industrial SS304)', capacity: '4,000 LPH', price: 650000, formattedPrice: '₹6,50,000', usedFor: '60 BPM Bottling Line' },
      { label: '6,000 LPH (Industrial SS304)', capacity: '6,000 LPH', price: 750000, formattedPrice: '₹7,50,000', usedFor: '90 BPM Bottling Line' },
    ],
    defaultOptionIndex: 2, // 2000 LPH default
    verificationNote: 'Note: Supplier listing flags SS 304 skid and columns. Material specifications verified prior to quotation.'
  },

  // ── CATEGORY 2: BOTTLE LABELLING MACHINES ──────────────────
  {
    id: 'labelling-round-bottle',
    category: 'labelling-machines',
    categoryName: 'Bottle Labelling Machines',
    name: 'Round Bottle Labelling Machine',
    subtitle: 'Shrink Sleeve Applicator for Cylindrical Water Bottles',
    image: '/assets/images/machinery/labelling-round-bottle.jpg',
    operation: 'Semi-Automatic',
    material: 'Mild Steel (MS)',
    labelType: 'Shrink Sleeve',
    speed: 'Variable Speed Drive',
    suitableRange: '24 – 90 BPM',
    description: 'High-precision shrink sleeve applicator designed for round PET and glass bottles. Features uniform heat distribution tunnel for wrinkle-free 360-degree bottle sleeve wrapping.',
    features: [
      'Accommodates 200ml, 500ml, 1L and 2L round bottle formats',
      'Variable conveyor speed synchronizes with filling output',
      'Uniform thermal air circulation preventing sleeve burning',
      'Sturdy mild steel construction with vibration damping feet'
    ],
    hasDropdown: true,
    selectorLabel: 'Select Configuration',
    options: [
      { label: 'HETER BACE Configuration (Electric Heating)', capacity: '24–90 BPM', price: 55000, formattedPrice: '₹55,000', configuration: 'HETER BACE' },
      { label: 'STEM BACE Configuration (Steam Tunnel Base)', capacity: '24–90 BPM', price: null, formattedPrice: 'Price on Request', configuration: 'STEM BACE' },
    ],
    defaultOptionIndex: 0
  },
  {
    id: 'labelling-square-bottle',
    category: 'labelling-machines',
    categoryName: 'Bottle Labelling Machines',
    name: 'Square Bottle Labelling Machine',
    subtitle: 'Self-Adhesive Sticker Labelling Machine for Square & Flat Containers',
    image: '/assets/images/machinery/labelling-square-bottle.jpg',
    operation: 'Automatic',
    material: 'Stainless Steel',
    labelType: 'Sticker / Self-Adhesive',
    speed: 'Variable Speed Drive',
    suitableRange: '24 – 90 BPM',
    description: 'Fully automatic self-adhesive sticker labelling system optimized for square, rectangular, and oval beverage bottles. Guarantees millimeter-accurate label positioning.',
    features: [
      'Microprocessor / PLC controlled stepper motor applicator',
      'Synchronized top hold-down belt for zero bottle tilting',
      'Available in single-side front or dual-side front & back labelling',
      'All product contact and external cladding in Stainless Steel'
    ],
    hasDropdown: true,
    selectorLabel: 'Select Labelling Option',
    options: [
      { label: 'One-Side Labelling (Front Only)', capacity: '24–90 BPM', price: 210000, formattedPrice: '₹2,10,000', configuration: 'One-Side' },
      { label: 'Two-Side Labelling (Front & Back Simultaneous)', capacity: '24–90 BPM', price: 260000, formattedPrice: '₹2,60,000', configuration: 'Two-Side' },
    ],
    defaultOptionIndex: 0
  },

  // ── CATEGORY 3: WATER FILLING MACHINES ─────────────────────
  {
    id: 'filling-machine-24bpm',
    category: 'filling-machines',
    categoryName: 'Water Filling Machines',
    name: '24–26 BPM Water Filling Machine',
    subtitle: 'Semi-Automatic Monoblock Rinsing, Filling & Capping System',
    image: '/assets/images/machinery/filling-machine-24bpm.jpg',
    operation: 'Semi-Automatic',
    material: 'Stainless Steel',
    capacity: '24 – 26 Bottles Per Minute',
    description: 'Compact and highly reliable semi-automatic water bottling monoblock station. Incorporates bottle neck clamping, pressure filling nozzles, rotary capping, and conveyor integration.',
    features: [
      'Input Conveyor: 48 Inches heavy-duty SS slat chain',
      'Output Conveyor: 96 Inches with drive gearbox',
      'Backlit Inspection Light Panel included for particulate check',
      'Sanitary SS304 contact nozzles with zero-drip cut-off',
      'Pneumatic cap tightening with torque calibration'
    ],
    hasDropdown: false,
    price: 410000,
    formattedPrice: '₹4,10,000',
    specs: [
      { label: 'Rated Capacity', value: '24 – 26 Bottles / Min (approx. 1,500 BPH)' },
      { label: 'Infeed Conveyor', value: '48 Inches' },
      { label: 'Outfeed Conveyor', value: '96 Inches' },
      { label: 'Inspection Panel', value: 'Fluorescent / LED Backlight Panel Included' },
      { label: 'Chassis Material', value: 'Stainless Steel 304 Clad' }
    ]
  },
  {
    id: 'filling-machine-40bpm',
    category: 'filling-machines',
    categoryName: 'Water Filling Machines',
    name: '40 BPM Automatic Water Filling Line',
    subtitle: 'High-Throughput Rotary Monoblock Bottling System',
    image: '/assets/images/machinery/filling-machine-40bpm.jpg',
    operation: 'Automatic',
    material: 'Stainless Steel',
    capacity: '40 Bottles Per Minute',
    description: 'Fully automatic rotary monoblock filling line designed for medium-scale commercial bottling operations. Complete PLC controlled synchronization with extended conveyors.',
    features: [
      'Input Conveyor: 96 Inches heavy-duty slat chain system',
      'Output Conveyor: 190 Inches extended outfeed conveyor',
      'Integrated Inspection Light Panel for quality control',
      'Automatic cap elevator and sorting bowl',
      'No Bottle - No Fill - No Cap sensor interlocks'
    ],
    hasDropdown: true,
    selectorLabel: 'Select Filling Line Speed',
    options: [
      { label: '40 BPM Automatic Line (Full Specs Included)', capacity: '40 BPM', price: 610000, formattedPrice: '₹6,10,000', note: 'Standard line with 96" input & 190" output conveyor' },
      { label: '60 BPM High-Speed Line', capacity: '60 BPM', price: 960000, formattedPrice: '₹9,60,000', note: 'High-capacity bottling configuration' },
      { label: '90 BPM Industrial Line', capacity: '90 BPM', price: 1280000, formattedPrice: '₹12,80,000', note: 'Large scale packaging facility configuration' },
      { label: '120 BPM High-Volume Line', capacity: '120 BPM', price: 1680000, formattedPrice: '₹16,80,000', note: 'Continuous automated industrial line' },
    ],
    defaultOptionIndex: 0
  },

  // ── CATEGORY 4: STAINLESS STEEL WATER STORAGE TANKS ────────
  {
    id: 'ss-storage-tanks',
    category: 'storage-tanks',
    categoryName: 'SS Storage Tanks',
    name: 'Stainless Steel 304 Storage Tanks',
    subtitle: 'Sanitary Grade Liquid Storage for Raw & Treated Mineral Water',
    image: '/assets/images/machinery/ss-storage-tanks.jpg',
    operation: 'Static Storage',
    material: 'Stainless Steel 304 (0.5 mm Sheet Gauge)',
    description: 'Hygienic vertical water storage tanks built with SS 304 food-grade sheet metal. Essential for pre-filtration raw water buffer and post-RO treated pure water holding before filling.',
    features: [
      '0.5 mm calibrated SS 304 food-grade sheet construction',
      'Conical or dished bottom with central drain valve',
      'Sanitary top manhole inspection cover with breather vent',
      'Inlet, outlet, drain and overflow stainless steel fittings',
      'Internal mirror finish and passivated weld seams'
    ],
    hasDropdown: true,
    selectorLabel: 'Select Tank Capacity',
    options: [
      { label: '500 Litre SS 304 (0.5 mm Gauge)', capacity: '500 Litres', price: 16000, formattedPrice: '₹16,000' },
      { label: '1,000 Litre SS 304 (0.5 mm Gauge)', capacity: '1,000 Litres', price: 28000, formattedPrice: '₹28,000' },
    ],
    defaultOptionIndex: 1
  },

  // ── CATEGORY 5: OZONE GENERATORS ───────────────────────────
  {
    id: 'ozone-generator',
    category: 'ozone-generators',
    categoryName: 'Ozone Generators',
    name: 'Corona Discharge Ozone Generator',
    subtitle: 'Advanced Disinfection & Microbial Protection for Bottled Water',
    image: '/assets/images/machinery/ozone-generator.jpg',
    operation: 'Automatic Continuous',
    material: 'Powder-Coated SS / Heavy Enclosure',
    description: 'Industrial corona discharge ozone generator engineered to infuse dissolved ozone into treated water right before bottling, ensuring microbial destruction and meeting BIS shelf-life criteria.',
    features: [
      'High-frequency corona discharge dielectric tube technology',
      'Built-in oxygen concentrator / air preparation dryer',
      'Maintains optimum 0.2 – 0.4 ppm dissolved ozone in final bottle',
      'Protects against bacterial and algal contamination post-packaging'
    ],
    hasDropdown: true,
    selectorLabel: 'Select Ozone Output',
    options: [
      { label: '5 Gram / Hr Ozone Generator', capacity: '5g / hr', price: 28000, formattedPrice: '₹28,000', usedFor: 'Up to 2,000 LPH Plant' },
      { label: '10 Gram / Hr Ozone Generator', capacity: '10g / hr', price: 55000, formattedPrice: '₹55,000', usedFor: '3,000 – 6,000 LPH Plant' },
    ],
    defaultOptionIndex: 0
  },

  // ── CATEGORY 6: GROUP PACKING MACHINES (SHRINK TUNNEL) ─────
  {
    id: 'shrink-pack-fully-auto',
    category: 'group-packing',
    categoryName: 'Group Packing (Shrink)',
    name: 'Fully Automatic Group Packing Machine',
    subtitle: 'End-of-Line Secondary Shrink Film Bundling Machine',
    image: '/assets/images/machinery/shrink-pack-fully-auto.jpg',
    operation: 'Fully Automatic',
    material: 'Mild Steel Chassis with Heavy-Duty Conveyor',
    speed: 'Variable Speed Controlled',
    description: 'High-speed automatic collating, wrapping, sealing and shrink tunnel packing line. Groups 12 or 24 bottles per bundle with LDPE shrink film automatically without manual intervention.',
    features: [
      'Automatic pneumatic bottle grouping (e.g., 3x4 or 4x6 matrices)',
      'Teflon-coated constant temperature impulse cutting & sealing blade',
      'High-velocity dual air blower circulation shrink tunnel',
      'Roller discharge table with rapid cooling fans for tight bundles'
    ],
    hasDropdown: true,
    selectorLabel: 'Select Machine & Compressor Package',
    options: [
      { label: 'Fully Automatic Machine (₹4,90,000)', capacity: 'Up to 12 Packs/Min', price: 490000, formattedPrice: '₹4,90,000', compressorPrice: '3 HP Compressor: ₹54,500' },
      { label: 'Complete Combo (Machine + 3 HP Air Compressor)', capacity: 'Up to 12 Packs/Min', price: 544500, formattedPrice: '₹5,44,500', breakdown: 'Machine ₹4,90,000 + 3 HP Compressor ₹54,500' }
    ],
    defaultOptionIndex: 0,
    addonNote: '3 HP Air Compressor available separately for ₹54,500'
  },
  {
    id: 'shrink-pack-semi-auto',
    category: 'group-packing',
    categoryName: 'Group Packing (Shrink)',
    name: 'Semi-Automatic Group Packing Machine',
    subtitle: 'Pneumatic Push-Type Shrink Wrapping Tunnel for Case Bundling',
    image: '/assets/images/machinery/shrink-pack-semi-auto.jpg',
    operation: 'Semi-Automatic',
    material: 'Mild Steel',
    speed: 'Variable Speed Controlled',
    description: 'Cost-effective group bundling machine featuring manual bottle tray loading with pneumatic push-rod feed into the thermal shrink heating tunnel.',
    features: [
      'Pneumatically operated bottle pusher and film sealing jaw',
      'Digital temperature controller with thermocouple precision',
      'Heavy-duty mesh conveyor belt handling up to 35 kg load',
      'Ideal for small-to-medium bottling plants packaging 12/24 bottle packs'
    ],
    hasDropdown: true,
    selectorLabel: 'Select Machine & Compressor Package',
    options: [
      { label: 'Semi-Automatic Machine (₹2,50,000)', capacity: 'Up to 6–8 Packs/Min', price: 250000, formattedPrice: '₹2,50,000', compressorPrice: '2 HP Compressor: ₹42,500' },
      { label: 'Complete Combo (Machine + 2 HP Air Compressor)', capacity: 'Up to 6–8 Packs/Min', price: 292500, formattedPrice: '₹2,92,500', breakdown: 'Machine ₹2,50,000 + 2 HP Compressor ₹42,500' }
    ],
    defaultOptionIndex: 0,
    addonNote: '2 HP Air Compressor available separately for ₹42,500'
  },

  // ── CATEGORY 7: DATE CODING MACHINES ───────────────────────
  {
    id: 'coding-industrial-inkjet',
    category: 'date-coding',
    categoryName: 'Date & Batch Coders',
    name: 'Industrial Continuous Inkjet (CIJ) Coding Machine',
    subtitle: 'Continuous Inkjet Printer for High-Speed Bottle Batch & MRP Coding',
    image: '/assets/images/machinery/coding-industrial-inkjet.jpg',
    operation: 'Automatic Online',
    material: 'Stainless Steel Enclosure (IP55)',
    type: 'Continuous Inkjet (CIJ)',
    speed: 'Variable Online Speed',
    price: 225000,
    formattedPrice: '₹2,25,000',
    description: 'Heavy-duty industrial CIJ printer designed for 24/7 non-contact coding on curved bottle necks, caps, and glass shoulders. Prints MRP, Batch No., Exp. Date, and QR codes.',
    features: [
      'Full Stainless Steel washdown-resistant enclosure',
      'Non-contact printing up to 4 lines of alpha-numeric text',
      'Automatic printhead flushing cycle preventing nozzle clogging',
      'Fast-drying MEK / solvent inks adhering firmly to PET and glass'
    ],
    hasDropdown: false,
    specs: [
      { label: 'Print Type', value: 'Continuous Inkjet (Non-Contact)' },
      { label: 'Housing Material', value: 'Industrial Stainless Steel' },
      { label: 'Print Lines', value: '1 to 4 Lines (Batch, Mfg, Exp, MRP)' },
      { label: 'Line Speed', value: 'Synchronized with conveyor optical sensor' }
    ]
  },
  {
    id: 'coding-hp-inkjet',
    category: 'date-coding',
    categoryName: 'Date & Batch Coders',
    name: 'HP Thermal Inkjet (TIJ) Date Coding Machine',
    subtitle: 'Cartridge-Based High-Resolution Online Batch Coder',
    image: '/assets/images/machinery/coding-hp-inkjet.jpg',
    operation: 'Automatic Online',
    material: 'Aluminium Alloy Body',
    type: 'HP Thermal Inkjet (TIJ Cartridge)',
    speed: 'Variable Online Speed',
    price: 45000,
    formattedPrice: '₹45,000',
    description: 'Economical, zero-maintenance cartridge-based online date coding printer. Mounts directly on filling conveyors to print clean, high-resolution 600 DPI batch data on bottle caps.',
    features: [
      'Maintenance-free HP TIJ 2.5 disposable cartridge technology',
      'Lightweight anodized aluminium body with bracket mounting',
      '7-inch color touchscreen controller for instant message editing',
      'No make-up solvent or messy pump maintenance required'
    ],
    hasDropdown: false,
    specs: [
      { label: 'Technology', value: 'HP TIJ 2.5 Cartridge-Based' },
      { label: 'Body Material', value: 'Anodized Aluminium Body' },
      { label: 'Resolution', value: 'Up to 600 DPI High-Definition' },
      { label: 'Maintenance', value: 'Zero routine maintenance / clean snap-in' }
    ]
  },

  // ── CATEGORY 8: PET BOTTLE BLOWING MACHINES ─────────────────
  {
    id: 'blowing-machine-semi-auto',
    category: 'blowing-machines',
    categoryName: 'PET Bottle Blowing',
    name: 'Semi-Automatic PET Bottle Blowing Machine',
    subtitle: 'Two-Stage Infrared Preform Reheat Stretch Blow Moulding Machine',
    image: '/assets/images/machinery/blowing-machine-semi-auto.jpg',
    operation: 'Semi-Automatic',
    material: 'Mild Steel Frame with Alloy Clamping',
    included: 'High-Pressure Air Compressor + Online Water Chiller Included in Price',
    description: 'Robust semi-automatic PET stretch blow moulding system with rotary infrared preform heating oven and pneumatic mould clamping. Produces 200ml to 2000ml bottles.',
    features: [
      'PACKAGE INCLUDES: High-pressure air compressor and online chiller',
      'Infrared preform heating oven with 8-zone independent temperature control',
      'Double toggle mould clamping structure under high pressure',
      'Low initial capital expenditure for emerging bottling brands'
    ],
    hasDropdown: true,
    selectorLabel: 'Select Mould Cavities & Output',
    options: [
      { label: '2 Cavity — 1,200 Bottles Per Hour', capacity: '1,200 BPH', price: 750000, formattedPrice: '₹7,50,000', cavities: '2 Cavity', compressorIncluded: true },
      { label: '4 Cavity — 2,000 Bottles Per Hour', capacity: '2,000 BPH', price: 950000, formattedPrice: '₹9,50,000', cavities: '4 Cavity', compressorIncluded: true },
    ],
    defaultOptionIndex: 0
  },
  {
    id: 'blowing-machine-auto',
    category: 'blowing-machines',
    categoryName: 'PET Bottle Blowing',
    name: 'Fully Automatic Rotary PET Bottle Blowing Machine',
    subtitle: 'High-Speed 4-Cavity Linear Automatic Stretch Blow Moulding System',
    image: '/assets/images/machinery/blowing-machine-auto.jpg',
    operation: 'Fully Automatic',
    material: 'Mild Steel Chassis with Safety Cladding',
    included: 'High-Pressure Air Compressor + Online Chiller Included in Price',
    capacity: '4,000 Bottles Per Hour (4 Cavity)',
    price: 2215000,
    formattedPrice: '₹22,15,000',
    description: 'Fully automatic high-speed blow moulding machine featuring automatic preform hopper, unscrambler, robotic loading arm, infrared heating, and synchronous blowing. Perfectly sized for 40–60 BPM filling lines.',
    features: [
      'PACKAGE INCLUDES: Dedicated high-pressure air compressor + industrial online chiller',
      'Production Capacity: 4,000 Bottles Per Hour (BPH)',
      'Configuration: 4 Mould Cavities',
      'Suitable for: Direct air conveyor link to 40 BPM / 60 BPM filling lines',
      'Servo-driven stretch rod mechanism for uniform wall thickness distribution',
      'Touchscreen PLC interface with pre-stored bottle recipe memories'
    ],
    hasDropdown: false,
    specs: [
      { label: 'Operation', value: 'Fully Automatic with Robotic Preform Feeder' },
      { label: 'Production Output', value: '4,000 BPH' },
      { label: 'Mould Cavities', value: '4 Cavity' },
      { label: 'Included Equipment', value: 'High-Pressure Compressor + Online Chiller' },
      { label: 'Ideal For', value: '40 BPM / 60 BPM Continuous Bottling Lines' }
    ]
  }
];

// Authentic Verified Plant Feedback (Using User Photos)
export const VERIFIED_PLANT_INSTALLATIONS = [
  {
    id: 'review-1',
    plantName: 'AquaFlow Beverages & Packaged Water',
    location: 'Sikandrabad Industrial Area, Bulandshahr (U.P.)',
    owner: 'Rajeshwar Sharma',
    designation: 'Managing Partner',
    machineType: '2,000 LPH Stainless Steel 304 RO Plant',
    images: [
      '/assets/images/machinery/feedback-ro-plant-1.jpg',
      '/assets/images/machinery/feedback-ro-plant-2.jpg'
    ],
    verifiedBadge: 'Verified Live Installation',
    review: 'We commissioned our 2,000 LPH SS-304 RO plant in early 2024 for our 24 BPM line. Raw water TDS at our borewell is around 850 PPM, and post-RO with the remineralization dosing pump it stays steady at 110–130 PPM meeting BIS IS 14543 parameters consistently. The SS fabrication and skid alignment are solid, very low vibration on the vertical pump, and membranes are performing smoothly. Great on-site commissioning support.',
    capacityOutput: '2,000 Litres / Hour',
    operatingSince: 'March 2024'
  },
  {
    id: 'review-2',
    plantName: 'NeerShree Bottlers & Mineral Water',
    location: 'Phase-2 Industrial Area, Greater Noida (NCR)',
    owner: 'Arvind Chauhaan',
    designation: 'Plant Operations Head',
    machineType: '24–26 BPM Semi-Automatic Water Filling Machine',
    images: [
      '/assets/images/machinery/feedback-filling-24bpm.jpg'
    ],
    verifiedBadge: 'Verified Live Installation',
    review: 'We needed a dependable, low-maintenance filling line for our 500ml and 1-litre bottles. The 24 BPM unit has been running 9 to 10 hours every shift with practically zero bottle jamming. The neck gripping mechanism and pneumatic torque on the capping head give leak-proof seals on both short and normal neck caps. Inspection light panel made quality checks effortless.',
    capacityOutput: '24–26 Bottles / Minute',
    operatingSince: 'October 2023'
  },
  {
    id: 'review-3',
    plantName: 'Trident Pure Packaged Beverages',
    location: 'Murthal Industrial Area, Sonepat (Haryana)',
    owner: 'Vikas Malik',
    designation: 'Plant Founder & Director',
    machineType: 'Shrink Tunnel Group Packer + 3,000 LPH RO Line',
    images: [],
    verifiedBadge: 'Verified Live Installation',
    review: 'Transitioning from manual packing to the shrink group packer saved us 3 packaging workers per shift. The bottles come out tightly wrapped in 12 and 24 bottle bundle packs ready for distributor loading. Pricing was transparent with clear supplier quotation.',
    capacityOutput: '3,000 LPH + 10 Packs/Min',
    operatingSince: 'January 2024'
  }
];

export const TURNKEY_SERVICES = [
  {
    title: 'Plant Layout & CAD Engineering',
    desc: 'Civil foundation diagrams, pipe routing, electrical single-line diagrams, and hygienic zoning according to BIS IS 14543 standards.'
  },
  {
    title: 'Testing & BIS Lab Setup',
    desc: 'Complete microbiological and chemical testing laboratory setup guidance with laminar airflow, autoclave, incubator, and spectrophotometers.'
  },
  {
    title: 'Machinery Commissioning & Trial Runs',
    desc: 'On-site factory erection, mechanical alignment, pipeline sanitary passivation, and 72-hour continuous production trial batches.'
  },
  {
    title: 'Operator Training & SOP Handover',
    desc: 'Hands-on operator training for CIP (Clean-in-Place), backwashing procedures, chemical dosing titration, and preventive maintenance.'
  }
];

/**
 * Generate WhatsApp enquiry link for a specific machine and configuration
 */
export function buildMachineryWhatsAppUrl(machineName, selectedCapacityOrConfig, priceString) {
  const text = `Hello SIPVODA Team,\n\nI am interested in purchasing the ${machineName}.\n\nSelected Capacity: ${selectedCapacityOrConfig}\nListed Price: ${priceString}\n\nPlease share the complete quotation and further details.\n\nThank you.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export function buildGeneralMachineryWhatsAppUrl() {
  const text = `Hello SIPVODA Team,\n\nI am looking for a Complete Water Bottling Plant Setup and would like to discuss machinery requirements, customized plant capacity, layout engineering, and complete quotations.\n\nThank you.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
