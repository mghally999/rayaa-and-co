export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;        // AED
  compareAt?: number;   // optional strike-through
  image: string;
  swatches: string[];   // hex codes
  tag?: "New" | "Limited" | "Bestseller";
}

export const products: Product[] = [
  {
    id: "noor-mirror-jalabiya",
    name: "Noor",
    category: "Mirror-work Jalabiya",
    description: "Hand-stitched mirror embroidery on rose-blush silk. Drop sleeves, A-line cut.",
    price: 2400,
    compareAt: 2900,
    image: "/images/look-01.jpg",
    swatches: ["#c97b6d", "#8d3b3f", "#1a1410"],
    tag: "New",
  },
  {
    id: "layla-bangle-set",
    name: "Layla",
    category: "Mirror Bangle Set",
    description: "Gold-toned bangles inset with cushion-cut mirror stones. Set of two.",
    price: 480,
    image: "/images/look-05.jpg",
    swatches: ["#b88a4a", "#5e1a1d"],
    tag: "Bestseller",
  },
  {
    id: "sahar-coral-abaya",
    name: "Sahar",
    category: "Coral Embellished Abaya",
    description: "Coral silk crepe with mirror-edge cuff. Sweeps the floor; cinches at the waist.",
    price: 3200,
    image: "/images/look-08.jpg",
    swatches: ["#d97b66", "#1a1410"],
  },
  {
    id: "dana-ivory-kaftan",
    name: "Dana",
    category: "Ivory Hand-beaded Kaftan",
    description: "Tonal ivory bugle-beading on raw silk. An heirloom evening piece.",
    price: 4100,
    compareAt: 4600,
    image: "/images/look-12.jpg",
    swatches: ["#faf3e0", "#b88a4a"],
    tag: "Limited",
  },
  {
    id: "amira-sand-set",
    name: "Amira",
    category: "Sand Two-Piece",
    description: "Cropped embroidered jacket with wide-leg trousers. Champagne thread on sand.",
    price: 2800,
    image: "/images/look-15.jpg",
    swatches: ["#c8a878", "#5e1a1d"],
  },
  {
    id: "yara-rose-mules",
    name: "Yara",
    category: "Rose Embellished Mules",
    description: "Soft rose suede with antique mirror appliqué across the vamp.",
    price: 950,
    image: "/images/look-18.jpg",
    swatches: ["#c97b6d", "#3f1012"],
    tag: "New",
  },
  {
    id: "majd-evening-shawl",
    name: "Majd",
    category: "Hand-painted Evening Shawl",
    description: "Wool-silk blend, hand-painted gold leaf across deep maroon ground.",
    price: 1800,
    image: "/images/look-20.jpg",
    swatches: ["#5e1a1d", "#b88a4a"],
  },
  {
    id: "leen-pearl-earrings",
    name: "Leen",
    category: "Baroque Pearl Drops",
    description: "Hand-knotted silk with freshwater baroque pearls. Featherlight.",
    price: 420,
    image: "/images/look-22.jpg",
    swatches: ["#f0e6cf", "#b88a4a"],
    tag: "Bestseller",
  },
];

export const journalEntries = [
  { date: "May 2026", title: "Inside the Atelier", excerpt: "A morning with our master karchobi embroiderer.", image: "/images/look-03.jpg" },
  { date: "Apr 2026", title: "On Mirror Work", excerpt: "Why the smallest fragment can change the whole light of a piece.", image: "/images/look-07.jpg" },
  { date: "Mar 2026", title: "Edition 01 — Behind The Lens", excerpt: "Notes from our first editorial shoot in old Jumeirah.", image: "/images/look-11.jpg" },
];
