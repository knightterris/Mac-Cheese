import fourCheeseImg from '../assets/images/mac-and-cheese-four_cheese_Bangkok_Chob Siam.png';
import jalapenosImg from '../assets/images/mac-and-cheese-jalapenos_Bangkok_Chob Siam.png';
import tomatoMozzImg from '../assets/images/mac-and-cheese-tomato_mozarella_Bangkok_Chob Siam.png';
import truffleImg from '../assets/images/mac-and-cheese-truffle_mushroom_Bangkok_Chob Siam.png';
import ambianceImg from '../assets/images/italian_ambiance_1789712634913.jpg';
import { Product, StoreLocation, FaqItem } from '../types';

export { ambianceImg };

export const PRODUCTS: Product[] = [
  {
    id: 'four-cheese',
    name: 'Four Cheese',
    italianName: 'Quattro Formaggi Cremoso',
    descriptor: 'Delicious FOUR CHEESE',
    image: fourCheeseImg,
    video: `${import.meta.env.BASE_URL}videos/mac-and-cheese-four-cheese-cooking_Bangkok_Chob Siam.mp4`,
    price: 139,
    accentColor: '#D97706',
    badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
    textColor: 'text-amber-800',
    headline: 'A Harmonious Symphony of Four Iconic Italian Cheeses',
    shortDesc: 'A velvety embrace of four traditional cheeses melted over ribbed shell pasta that captures every droplet of golden richness.',
    tastingNotes: ['Cheddar', 'Gouda', 'Mozzarella', 'Blue Cheese'],
    bullets: [
      'Masterfully blended with four classic Italian cheeses crafted to melt into an unctuous, silky coating without clumping.',
      'Bronze-die shell pasta engineered with deep ridges to trap maximum cheese sauce in every single bite.',
      'All-in-one pouch convenience — no butter, milk, or extra seasoning needed for rich, restaurant-style Italian creaminess. Delicious on its own, or finish with your favourite toppings to make it your own.',
    ],
    cookTimeMinutes: 9-11,
    weightGrams: 184,
    servings: 2-3,
    marketplaceLinks: {
      lazada: '',
      shopee: '',
      tiktok: '',
    },
  },
  {
    id: 'jalapenos',
    name: 'Jalapeños',
    italianName: 'Jalapeño Piccante Vivace',
    descriptor: 'Exciting JALAPEÑOS',
    image: jalapenosImg,
    video: `${import.meta.env.BASE_URL}videos/mac-and-cheese-jalapenos-cooking_Bangkok_Chob Siam.mp4`,
    price: 139,
    accentColor: '#DC2626',
    badgeBg: 'bg-red-100 text-red-900 border-red-300',
    textColor: 'text-red-700',
    headline: 'Fiery Crisp Jalapeño Meets Smooth Italian Creaminess',
    shortDesc: 'Vibrant sun-drenched jalapeño pepper heat carefully tempered by soothing sweet cream and rich cheese pasta shells.',
    tastingNotes: ['Zesty Jalapeño Kick', 'Warm Chili Aroma'],
    bullets: [
      'Infused with jalapeño flakes and aromatic spices that awaken your palate with an authentic, warming tingle.',
      'Balanced heat profile calibrated so the piquant kick enhances the savory Italian cheese notes without overpowering them.',
      'Perfect comfort meal for spice lovers desiring gourmet pasta with a lively, bold international twist in just 9-11 minutes.',
    ],
    cookTimeMinutes: 9-11,
    weightGrams: 184,
    servings: 2-3,
    spiceLevel: 2,
    marketplaceLinks: {
      lazada: '',
      shopee: '',
      tiktok: '',
    },
  },
  {
    id: 'tomato-mozzarella',
    name: 'Tomato Mozzarella',
    italianName: 'Pomodoro e Mozzarella Fresca',
    descriptor: 'Original TOMATO MOZZARELLA',
    image: tomatoMozzImg,
    video: `${import.meta.env.BASE_URL}videos/mac-and-cheese-tomato-mozzarella-cooking_Bangkok_Chob Siam.mp4`,
    price: 139,
    accentColor: '#15803D',
    badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    textColor: 'text-emerald-800',
    headline: 'Sun-Ripened San Marzano Tomatoes & Stringy Melted Mozzarella',
    shortDesc: 'The eternal soul of Mediterranean cooking — sweet Mediterranean tomato acidity cushioned by mild, stringy mozzarella cheese.',
    tastingNotes: ['Tomato', 'Melted Mozzarella'],
    bullets: [
      'Crafted with 100% Mediterranean tomato reduction and mild mozzarella that produces a luxuriant rose-hued sauce.',
      'Authentic Italian comfort flavor reminiscent of classic tomato pasta al forno right from your home stovetop.',
      'Clean label composition free from artificial colourings or preservatives, celebrating timeless Italian agriculture.',
    ],
    cookTimeMinutes: 9-11,
    weightGrams: 184,
    servings: 2-3,
    marketplaceLinks: {
      lazada: '',
      shopee: '',
      tiktok: '',
    },
  },
  {
    id: 'truffle-mushroom',
    name: 'Truffle & Mushrooms',
    italianName: 'Tartufo Nero e Funghi Porcini',
    descriptor: 'Premium TRUFFLE & MUSHROOMS',
    image: truffleImg,
    video: `${import.meta.env.BASE_URL}videos/mac-and-cheese-truffle-mushroom-cooking_Bangkok_Chob Siam.mp4`,
    price: 159,
    accentColor: '#78350F',
    badgeBg: 'bg-stone-200 text-stone-900 border-stone-400',
    textColor: 'text-stone-800',
    headline: 'Earth-Born Umbrian Black Truffle & Fragrant Woodland Porcini',
    shortDesc: 'An indulgent, sensory trip through the misty autumn forests of Northern Italy with black truffle essence and savoury mushrooms.',
    tastingNotes: ['Black Truffle', 'Porcini', 'Champignons'],
    bullets: [
      'Generously scented with authentic black truffle and wild forest mushrooms, yielding a deep, multi-layered aroma.',
      'An opulent, fine-dining pasta dish that turns an everyday dinner into an intimate Milanese culinary celebration.',
      'Silky emulsion that clings lovingly to every shell cavity, pairing exquisitely with dry white wine or crisp mineral water.',
    ],
    cookTimeMinutes: 9-11,
    weightGrams: 184,
    servings: 2-3,
    marketplaceLinks: {
      lazada: '',
      shopee: '',
      tiktok: '',
    },
  },
];

export const INITIAL_LOCATIONS: StoreLocation[] = [
  // ============================================================
  // SIAM PARAGON
  // ============================================================
  {
    id: 'gourmet-siam-paragon',

    name: 'Gourmet Market — Siam Paragon',

    mall: 'Siam Paragon',

    floorZone: 'G Floor, Gourmet Market',

    city: 'Bangkok, Thailand',

    launchDate: '24 September 2026',

    hours: '10:00 AM – 10:00 PM Daily',

    status: 'Available 24 Sept 2026',

    address:
      '991 Rama I Rd, Pathum Wan, Bangkok 10330',

    transitTip:
      'BTS Siam Station — direct connection to Siam Paragon',

    mapCoordinates: {
      lat: 13.7466,
      lng: 100.5348,
    },
  },


  // ============================================================
  // EMSPHERE
  // CURRENTLY HIDDEN
  // ============================================================

  // {
  //   id: 'gourmet-emsphere',

  //   name: 'Gourmet Market — Emsphere',

  //   mall: 'Emsphere',

  //   floorZone: 'G Floor, Gourmet Market',

  //   city: 'Bangkok, Thailand',

  //   launchDate: '24 September 2026',

  //   hours:
  //     '10:00 AM – 10:00 PM Mon–Thu, 10:00 AM – 11:00 PM Fri–Sun',

  //   status: 'Featured Showcase',

  //   address:
  //     '628 Sukhumvit Rd, Khlong Tan, Khlong Toei, Bangkok 10110',

  //   transitTip:
  //     'BTS Phrom Phong Station — connected through EM District',

  //   mapCoordinates: {
  //     lat: 13.7308,
  //     lng: 100.5697,
  //   },
  // },


  // ============================================================
  // EMQUARTIER
  // ============================================================
  {
    id: 'gourmet-emquartier',

    name: 'Gourmet Market — EmQuartier',

    mall: 'EmQuartier',

    floorZone: 'G Floor, Gourmet Market',

    city: 'Bangkok, Thailand',

    launchDate: '24 September 2026',

    hours: '10:00 AM – 10:00 PM Daily',

    status: 'Available 24 Sept 2026',

    address:
      '693 Sukhumvit Rd, Khlong Tan Nuea, Watthana, Bangkok 10110',

    transitTip:
      'BTS Phrom Phong Station — direct skywalk connection',

    mapCoordinates: {
      lat: 13.7317,
      lng: 100.5698,
    },
  },


  // ============================================================
  // EMPORIUM
  // ============================================================
  {
    id: 'gourmet-emporium',

    name: 'Gourmet Market — Emporium',

    mall: 'Emporium',

    floorZone: '4th Floor, Gourmet Market',

    city: 'Bangkok, Thailand',

    launchDate: '24 September 2026',

    hours: '10:00 AM – 10:00 PM Daily',

    status: 'Grand Launch',

    address:
      '622 Sukhumvit Rd, Khlong Tan, Khlong Toei, Bangkok 10110',

    transitTip:
      'BTS Phrom Phong Station — direct connection to Emporium',

    mapCoordinates: {
      lat: 13.7301,
      lng: 100.5684,
    },
  },


  // ============================================================
  // THE MALL
  // ALL BRANCHES GROUPED INTO ONE LOCATION CARD
  // ============================================================
  {
    id: 'gourmet-the-mall',

    name: 'Gourmet Market — The Mall',

    mall: 'Selected The Mall Branches',

    floorZone: '4 Gourmet Market Locations',

    city: 'Bangkok & Nonthaburi, Thailand',

    launchDate: '24 September 2026',

    hours: 'Opening hours vary by branch',

    status: 'Available 24 Sept 2026',

    address:
      'Multiple The Mall locations across Bangkok & Nonthaburi',

    transitTip:
      'Select a branch below for location and transit information',

    branches: [
      // --------------------------------------------------------
      // BANGKAPI
      // --------------------------------------------------------
      {
        id: 'the-mall-bangkapi',

        name: 'The Mall Lifestore Bangkapi',

        floorZone: 'G Floor, Gourmet Market',

        address:
          '3522 Lat Phrao Rd, Khlong Chan, Bang Kapi, Bangkok 10240',

        hours:
          '10:00 AM – 10:00 PM Daily',

        transitTip:
          'MRT Yellow Line — Bang Kapi Station, with convenient access to The Mall Lifestore Bangkapi',

        mapCoordinates: {
          lat: 13.7652,
          lng: 100.6423,
        },
      },


      // --------------------------------------------------------
      // BANGKAE
      // --------------------------------------------------------
      {
        id: 'the-mall-bangkae',

        name: 'The Mall Lifestore Bangkae',

        floorZone: 'G Floor, Gourmet Market',

        address:
          '275 Moo 1 Kanchanaphisek Rd, Bang Khae Nuea, Bang Khae, Bangkok 10160',

        hours:
          '10:00 AM – 10:00 PM Daily',

        transitTip:
          'MRT Blue Line — Lak Song Station, with convenient access to The Mall Lifestore Bangkae',

        mapCoordinates: {
          lat: 13.7138,
          lng: 100.407,
        },
      },


      // --------------------------------------------------------
      // NGAMWONGWAN
      // --------------------------------------------------------
      {
        id: 'the-mall-ngamwongwan',

        name: 'The Mall Lifestore Ngamwongwan',

        floorZone: 'G Floor, Gourmet Market',

        address:
          '30/39-50 Moo 2 Ngamwongwan Rd, Bang Khen, Mueang Nonthaburi, Nonthaburi 11000',

        hours:
          '10:00 AM – 10:00 PM Daily',

        transitTip:
          'Accessible via Ngamwongwan Road with public bus and taxi connections',

        mapCoordinates: {
          lat: 13.8557,
          lng: 100.5423,
        },
      },


      // --------------------------------------------------------
      // THA PHRA
      // --------------------------------------------------------
      {
        id: 'the-mall-tha-phra',

        name: 'The Mall Lifestore Tha Phra',

        floorZone: 'B Floor, Gourmet Market',

        address:
          '99 Ratchadaphisek Rd, Bukkhalo, Thon Buri, Bangkok 10600',

        hours:
          '10:00 AM – 9:00 PM Mon–Thu; 10:00 AM – 10:00 PM Fri–Sun',

        transitTip:
          'BTS Talat Phlu Station — short walk to The Mall Lifestore Tha Phra',

        mapCoordinates: {
          lat: 13.7139,
          lng: 100.4799,
        },
      },


      // --------------------------------------------------------
      // RAMKHAMHAENG
      // --------------------------------------------------------
      // {
      //   id: 'the-mall-ramkhamhaeng',

      //   name: 'The Mall Ramkhamhaeng',

      //   floorZone: 'Gourmet Market',

      //   address:
      //     '49 Ramkhamhaeng Rd, Hua Mak, Bang Kapi, Bangkok 10240',

      //   hours:
      //     '10:00 AM – 10:00 PM Daily',

      //   transitTip:
      //     'Located on Ramkhamhaeng Road with public bus and taxi connections',

      //   mapCoordinates: {
      //     lat: 13.7546,
      //     lng: 100.6127,
      //   },
      // },
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to prepare MAC&CHEESE?',
    answer: 'Cooking takes just 9 to 11 minutes on a standard stovetop. Simply bring 560ml of fresh water to a gentle boil, pour the contents of the pouch, and stir occasionally over medium heat until the sauce transforms into a velvety, creamy glaze and the pasta is tenderly al dente.',
    category: 'Preparation',
  },
  {
    id: 'faq-2',
    question: 'Is MAC&CHEESE authentically 100% made and packaged in Italy?',
    answer: 'Yes, unconditionally. Every box of MAC&CHEESE is produced and packed in Italy, using 100% Italian durum wheat semolina and traditional cheese drying techniques.',
    category: 'Authenticity',
  },
  {
    id: 'faq-3',
    question: 'Do I need to add fresh milk, butter, or extra cheese?',
    answer: 'No additional dairy or butter is required! The proprietary "All In! Ready to Cook" formula already contains premium dehydrated Italian cheeses, rich milk solids, and savory spices within the pouch. However, you are always welcome to garnish with freshly cracked black pepper, a sprig of basil, or shaved Parmigiano to elevate your personal presentation.',
    category: 'Ingredients',
  },
  // {
  //   id: 'faq-4',
  //   question: 'Why are small shell pasta (conchigliette) used instead of macaroni?',
  //   answer: 'Traditional Italian culinary science dictates that conchiglie (shells) feature an inner cup and ribbed exterior specifically engineered to capture and hold dense cheese emulsions, delivering significantly more sauce per mouthful compared to straight smooth macaroni tubes.',
  //   category: 'Pasta Design',
  // },
  {
    id: 'faq-5',
    question: 'How should the boxes be stored, and how many servings does each pack yield?',
    answer: 'Store in a cool, dry ambient pantry at room temperature away from direct sunlight — no refrigeration needed prior to cooking. Each 184g pack makes around 3 meal portions (approx. 225g each once prepared with water), perfect for sharing or a lavish solo feast.',
    category: 'Storage & Servings',
  },
  {
    id: 'faq-6',
    question: 'When will MAC&CHEESE launch in Thailand, and what stores will carry it?',
    answer: 'Official retail launches in Thailand on 24 September 2026 across 3 Main Gourmet Market branches at Siam Paragon, EmQuartier, and Emporium and selected The Mall branches. Online flagship stores on Lazada, Shopee, and TikTok Shop will follow shortly.',
    category: 'Availability',
  },
];
