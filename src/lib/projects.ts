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
    slug: "aperture",
    title: "Aperture",
    year: "2025",
    tags: ["Hardware", "Interaction"],
    tagline:
      "An ambient light with a mechanical iris that breathes with the room.",
    gradient: "from-[#f4c17d] via-[#e2734f] to-[#6f3a3a]",
    image: "/work/aperture.svg",
    role: "Product & interaction design, mechanical design",
    timeline: "4 months — concept to working prototype",
    tools: "SolidWorks, Arduino, brushed aluminum, laser-cut acrylic",
    overview:
      "Aperture began with a simple question: what would a light look like if it had a pupil instead of a switch? Rather than a dimmer dial or an app, the fixture reads the room through a light sensor and slowly irises open or closed, the way an eye adjusts to a change in daylight.",
    process:
      "Early sketch models used paper iris mechanisms borrowed from camera lenses, scaled up and rebuilt in aluminum leaflets. Dozens of linkage geometries were tested by hand before landing on a nine-blade iris that opens smoothly without the linkages ever crossing. A small stepper motor and a light-dependent resistor let the piece feel autonomous rather than remote-controlled.",
    outcome:
      "The working prototype holds up to daily use on a desk and has quietly become the object people reach for first when a room feels wrong. The next revision focuses on quieting the motor and finishing the blades in a warmer, hand-brushed metal.",
  },
  {
    slug: "cadence",
    title: "Cadence",
    year: "2024",
    tags: ["Wearable", "Hardware"],
    tagline: "A haptic metronome that keeps time on your wrist, not your ears.",
    gradient: "from-[#f6d9a0] via-[#d98c4b] to-[#4a2f2b]",
    image: "/work/cadence.svg",
    role: "Product design, embedded systems, industrial design",
    timeline: "6 months — research through prototype",
    tools: "Fusion 360, nRF52, ERM motors, 3D-printed nylon, silicone",
    outcome:
      "Musicians who tested Cadence during rehearsal reported it disappeared into muscle memory within a session or two — the goal from the outset. A future version explores a slimmer enclosure and multi-limb pairing for drummers.",
    overview:
      "Musicians practicing with a metronome are stuck choosing between a click that competes with the music or a flashing light that pulls focus to a screen. Cadence moves the beat to the skin: a soft pulse against the wrist marks tempo, leaving ears and eyes free for the music.",
    process:
      "Prototyping started with off-the-shelf vibration motors taped to a wristband to validate that a pulse could be felt clearly at tempos from 40 to 200 BPM without numbing out. From there the enclosure was designed around a coin-cell battery and a single button, with the electronics potted in silicone so the whole band could be worn through a two-hour rehearsal.",
  },
  {
    slug: "glassware",
    title: "Glassware",
    year: "2024",
    tags: ["Interaction", "Software"],
    tagline: "A gesture-based interface for controlling audio without a screen.",
    gradient: "from-[#cfe0e8] via-[#7fa7b8] to-[#2f4653]",
    image: "/work/glassware.svg",
    role: "Interaction design, computer vision prototyping",
    timeline: "3 months — sprint project",
    tools: "TouchDesigner, MediaPipe, Python, an old webcam",
    overview:
      "Glassware explores what it feels like to conduct a room of sound with your hands instead of a phone screen. A single camera watches for a small vocabulary of gestures — a raised palm to pause, a turning wrist to adjust volume, a pinch to skip — and maps them to whatever is playing.",
    process:
      "The bulk of the work was in restraint: cutting the gesture set down from an initial fourteen to a final four so that nothing needed to be memorized. Every gesture had to feel like something you'd already do to say 'quieter' or 'skip this,' tested informally on people who had never seen the system before.",
    outcome:
      "The prototype runs reliably in a living room with normal lighting and has become the default way music gets controlled during dinner. It's a proof of concept for a broader idea: technology that responds to how we already move, rather than teaching us a new set of motions.",
  },
  {
    slug: "loam",
    title: "Loam",
    year: "2023",
    tags: ["Product", "Hardware"],
    tagline: "A soil sensor planter that texts you before your plant wilts.",
    gradient: "from-[#d9d2b8] via-[#8a9a6b] to-[#33402a]",
    image: "/work/loam.svg",
    role: "Product design, PCB layout, firmware",
    timeline: "5 months — concept to small batch",
    tools: "KiCad, ESP32, capacitive soil probes, thrown ceramic, Twilio",
    overview:
      "Loam is a planter with a capacitive moisture probe built into the base and a small ceramic body thrown to hide it completely — no visible electronics, no app to open. When the soil gets too dry, it sends a plain text message, and nothing more.",
    process:
      "The hardest constraint was self-imposed: the electronics had to disappear. That meant designing a probe geometry that could be cast into unglazed ceramic without shorting, and a battery and antenna layout that fit inside a base thin enough to still look like pottery rather than a gadget.",
    outcome:
      "Six planters have been running unattended for over a year, watering reminders and all. The project became a small case study in the studio's thinking on quiet technology — devices that are only ever heard from when they truly need to be.",
  },
  {
    slug: "nightstand-os",
    title: "Nightstand OS",
    year: "2023",
    tags: ["Interaction", "Product"],
    tagline: "A screen-free bedside device for the last and first five minutes of the day.",
    gradient: "from-[#e7d6c9] via-[#b98866] to-[#3a2a22]",
    image: "/work/nightstand-os.svg",
    role: "Interaction design, industrial design, sound design",
    timeline: "4 months — concept to prototype",
    tools: "Rhino, Arduino, capacitive touch, a small speaker, felt",
    overview:
      "Nightstand OS is an attempt to remove the phone from the first and last five minutes of the day. A single felt-topped dial controls an alarm, a soft wake-up light, and a short ambient soundscape — no screen, no notifications, no scrolling.",
    process:
      "Every interaction was reduced to a twist, a press, or a tap, tested at 6am in an actual bedroom rather than on a desk. The light curve, the volume ramp, and even the resistance of the dial itself went through a dozen iterations to feel calm rather than urgent.",
    outcome:
      "People who tried it for a week described reaching for their phone noticeably less first thing in the morning. The next step is exploring a version that syncs gently with sunrise rather than a fixed alarm time.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
