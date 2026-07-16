export type Project = {
  slug: string;
  title: string;
  year: string;
  tags: string[];
  tagline: string;
  gradient: string;
  image: string;
  role: string;
  timeline: string;
  tools: string;
  overview: string;
  process: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "tessera",
    title: "Tessera",
    year: "2024",
    tags: ["Hardware", "Sustainability"],
    tagline:
      "A modular speaker kit tackling e-waste and extending the product lifespan.",
    gradient: "from-[#e2726a] via-[#a33a30] to-[#3a0f0d]",
    image: "/work/tessera.svg",
    role: "Product & mechanical design, electronics R&D",
    timeline: "University project — 10 weeks, 2024, individual",
    tools:
      "Foam & card modelling, laser-cut panels, machined & knurled aluminum, custom PCB/crossover",
    overview:
      "Roughly 62 billion kilograms of e-waste are generated every year, and home speakers are one of the quieter contributors — undercut not by failure but by new connectivity standards, ageing components, and shifting style trends. Tessera is a home speaker kit designed around the opposite assumption: that it should be taken apart, not thrown out. Every module — tweeter, woofer, and controls — is built to be opened, repaired, and upgraded by the person who owns it.",
    process:
      "The project moved from sketch ideation into low-fidelity foam and card models to work out scale, part layout, and human factors, then into electronics R&D — researching wire connectors and prototyping the crossover and PCB circuitry. Mid- and high-fidelity modelmaking followed: laser-cut panels, hand-threaded screw holes, and machined, knurled aluminum detailing, aimed at a rugged, honest-mechanics, \u2018scientific equipment\u2019 aesthetic.",
    outcome:
      "The project resolved into a fully assembled black model with swappable tweeter, woofer, and controls modules — each accessible without special tools, so the speaker can be repaired or upgraded piece by piece instead of replaced whole.",
  },
  {
    slug: "numa",
    title: "Numa",
    year: "2025",
    tags: ["IoT", "Interaction"],
    tagline:
      "A near-future IoT device giving context-based reminders at the right moment.",
    gradient: "from-[#5a5a56] via-[#2a2a28] to-[#0a0a0a]",
    image: "/work/numa.svg",
    role: "Interaction design, embedded prototyping",
    timeline: "Mini personal project — 1 week, 2025, individual",
    tools: "ESP32, e-ink display, Wi-Fi, Powerfoyle solar cell, PIR sensor",
    overview:
      "Numa is grounded in Amber Case\u2019s principles of calm technology: minimal attention, informing without noise, working even when it fails, and respecting social norms. The brief started as a before/after comic — forgetting your keys on the way out — and resolved into a small display by the door that quietly covers the weather, essential-item reminders, transit tracking, and delivery tracking, staying silent until it\u2019s actually useful.",
    process:
      "The concept called for a device that could power and inform itself: a Powerfoyle solar cell layer, a PIR sensor to wake the display, a mic and speaker for the rare moment it needs to speak up, an e-ink display for the rest, and USB-C as backup power. As proof of concept, an ESP32 pulls live weather data over Wi-Fi and renders it directly on the e-ink screen.",
    outcome:
      "The interface settled into a set of rotating, card-style reminders — bus times, delivery windows, key tracking — shown on a warm beige e-ink display that only asks for attention when there\u2019s something worth saying.",
  },
  {
    slug: "terratap",
    title: "TerraTap",
    year: "2024",
    tags: ["Product", "Sustainability"],
    tagline: "A solar-powered, mushroom-shaped smart plant sensor.",
    gradient: "from-[#eef0df] via-[#8fae6a] to-[#33402a]",
    image: "/work/terratap.svg",
    role: "Product design; group research, individual product concept",
    timeline:
      "University project — 10 weeks, 2024, group research + individual concept",
    tools:
      "r-PLA 3D printing, Powerfoyle solar layer, nRF52832 BLE, NFC, multicolor LED",
    overview:
      "The brief called for a single, independently-powered domestic product built around energy harvesting and sustainable plastics. Market research pointed toward plant care — a plant sensor market heading toward $475M and an IoT market toward $4B by the early 2030s — with room for tech-savvy gardeners, plant enthusiasts, and sustainability-conscious buyers who weren\u2019t well served by existing sensors like Krado, Xiaomi\u2019s Mi Flora, or Whisperer Gen2.",
    process:
      "Competitor benchmarking (Krado, Monk Makes, One Plant Monitor, Xiaomi Mi Flora, Willow, Whisperer Gen2, roughly $9\u2013$100) surfaced a gap: no single product combined self-charging, on-device indicators, NFC/BLE/Wi-Fi connectivity, indoor/outdoor use, and water resistance in one considered object. Form studies started in sculpted clay, exploring a mushroom-cap silhouette, before resolving into a semi-transparent r-PLA cap over a Powerfoyle solar layer, a multicolor LED, and an nRF52832 BLE chip with NFC.",
    outcome:
      "TerraTap monitors light, temperature, moisture, and humidity, and reports back through color-coded light feedback — a soft cue for \u2018I need water\u2019 or \u2018I need light\u2019 — with NFC-enabled pairing to a companion app for anyone who wants the detail behind the glow.",
  },
  {
    slug: "speralux",
    title: "Speralux",
    year: "2025",
    tags: ["Product", "Lighting"],
    tagline: "A Spitfire-inspired table lamp designed for the RAF Museum.",
    gradient: "from-[#4a4a48] via-[#222220] to-[#050505]",
    image: "/work/speralux.svg",
    role: "Product & mechanical design, metalwork",
    timeline: "University project — 8 weeks, 2025, individual",
    tools: "Aluminum lathe turning & machining, hand-formed metalwork, brass detailing",
    overview:
      "Designed for the RAF Museum, Speralux borrows its geometry directly from the Spitfire: a curved, wing-like arm and a propeller-inspired shade, reduced to the proportions of a table lamp rather than an aircraft.",
    process:
      "The arm and shade pivot mechanism went through sketch exploration and a cardboard-and-paper form study before moving into metal — an aluminum base turned and machined on a lathe, a hand-formed bent metal arm, and a brass base detailed around the wiring.",
    outcome:
      "The final lamp pairs a brushed-aluminum body with a warm-glow bulb set at the junction of wing and arm, keeping the Spitfire reference legible without literally reproducing the aircraft.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
