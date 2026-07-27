/**
 * STORY CONTENT
 * --------------------------------------------------------------------------
 * Edit chapter titles, narrative copy, and ordering in this file.
 *
 * - `slug` becomes the page URL and should normally stay unchanged.
 * - `number` controls the chapter number shown throughout the site.
 * - `short` appears in the chapter index and previous/next navigation.
 * - `eyebrow` is the small label above the main chapter title.
 * - `title` is the large headline.
 * - `intro` appears immediately below the headline.
 * - `body` appears beside the chapter visualization.
 * - `insight` appears in the highlighted Key Insight callout.
 * - `visual` selects the visualization defined in components/visuals.tsx.
 * - `embedUrl` is optional and currently powers the Chapter 2 iframe.
 *
 * Reordering objects in the `chapters` array changes the reading order.
 */

export type ChapterVisual =
  | "growth"
  | "map"
  | "energy"
  | "water"
  | "renewables"
  | "tradeoffs"
  | "future";

export type Chapter = {
  slug: string;
  number: string;
  short: string;
  eyebrow: string;
  title: string;
  intro: string;
  body: string;
  insight: string;
  visual: ChapterVisual;
  embedUrl?: string;
};

export const chapters: Chapter[] = [
  // ------------------------------------------------------------------------
  // CHAPTER 01 — THE AI BOOM
  // ------------------------------------------------------------------------
  {
    slug: "why-data-centers-matter",
    number: "01",
    short: "The AI Boom",
    eyebrow: "Why data centers matter",
    title: "Intelligence has a physical address.",
    intro:
      "A data center is a building where computation becomes infrastructure: racks of processors, electrical substations, cooling loops, backup generators, and dense webs of fiber.",
    body:
      "Cloud computing made these facilities essential. Generative AI is accelerating the shift. Training and serving larger models requires specialized chips operating continuously—and every operation produces heat that must be removed.",
    insight:
      "The digital economy is becoming more physical at the exact moment it appears most invisible.",
    visual: "growth",
  },

  // ------------------------------------------------------------------------
  // CHAPTER 02 — WHERE THEY'RE BUILT
  // ------------------------------------------------------------------------
  {
    slug: "mapping-data-centers",
    number: "02",
    short: "Where They’re Built",
    eyebrow: "Mapping the world’s data centers",
    title: "The cloud is concentrated on the ground.",
    intro:
      "Data centers are not evenly distributed. Capacity clusters around reliable grids, dense fiber networks, large markets, favorable policy, and access to land and water.",
    body:
      "A relatively small group of regions hosts a large share of global capacity. These clusters create efficiencies, but they also concentrate pressure on local electricity systems and natural resources.",
    insight:
      "Location determines which grid supplies the power, which watershed absorbs the demand, and which community carries the tradeoffs.",
    visual: "map",
    embedUrl: "https://data-center-map-world.vercel.app/",
  },

  // ------------------------------------------------------------------------
  // CHAPTER 03 — THE ENERGY CHALLENGE
  // ------------------------------------------------------------------------
  {
    slug: "energy-footprint",
    number: "03",
    short: "The Energy Challenge",
    eyebrow: "The energy footprint",
    title: "Every computation begins at the grid.",
    intro:
      "Servers draw electricity around the clock. So do the systems that cool them, move data, maintain power quality, and stand ready when the grid fails.",
    body:
      "As facilities become larger and denser, their electrical needs can resemble those of major industrial sites. The key question is no longer whether demand will grow, but where and how quickly grids can respond.",
    insight:
      "Capacity is only useful when dependable electricity can reach it—every hour of every day.",
    visual: "energy",
  },

  // ------------------------------------------------------------------------
  // CHAPTER 04 — THE WATER CHALLENGE
  // ------------------------------------------------------------------------
  {
    slug: "water-hidden-resource",
    number: "04",
    short: "The Water Challenge",
    eyebrow: "Water: the hidden resource",
    title: "Cooling the cloud has a local cost.",
    intro:
      "AI is often described in terms of electricity. Yet many facilities also depend on water to carry away heat, especially where evaporative cooling improves energy efficiency.",
    body:
      "Cooling design creates a tradeoff. A system can reduce electricity use by consuming more water, or conserve water while requiring more power. Climate and local scarcity change what responsible design looks like.",
    insight:
      "A liter saved at the facility can shift demand back to the grid. Efficiency is a system, not a single number.",
    visual: "water energy",
  },

  // ------------------------------------------------------------------------
  // CHAPTER 05 — CAN RENEWABLES KEEP UP?
  // ------------------------------------------------------------------------
  {
    slug: "renewable-energy",
    number: "05",
    short: "Can Renewables Keep Up?",
    eyebrow: "Renewable energy",
    title: "Clean power is a race against new demand.",
    intro:
      "Technology companies are among the largest buyers of renewable electricity. Their contracts can finance new wind and solar projects—but annual procurement does not guarantee clean power every hour.",
    body:
      "The deeper comparison is temporal and geographic: does new generation appear on the same grid, at the same time, as data-center consumption? Storage, transmission, and firm clean power shape the answer.",
    insight:
      "The question is not simply how much renewable energy exists, but whether clean supply grows where demand grows.",
    visual: "renewables",
  },

  // ------------------------------------------------------------------------
  // CHAPTER 06 — WINNERS & TRADEOFFS
  // ------------------------------------------------------------------------
  {
    slug: "winners-and-tradeoffs",
    number: "06",
    short: "Winners & Tradeoffs",
    eyebrow: "Winners and tradeoffs",
    title: "Growth creates value—and reallocates cost.",
    intro:
      "Data centers can bring tax revenue, construction, grid investment, and digital infrastructure. They can also compete for electricity, water, land, and public attention.",
    body:
      "The benefits and burdens rarely land in the same place or at the same time. Good policy makes these exchanges visible, measurable, and open to public scrutiny.",
    insight:
      "Data centers are neither inherently sustainable nor unsustainable. Their impact depends on the systems built around them.",
    visual: "tradeoffs",
  },

  // ------------------------------------------------------------------------
  // CHAPTER 07 — LOOKING AHEAD
  // ------------------------------------------------------------------------
  {
    slug: "looking-ahead",
    number: "07",
    short: "Looking Ahead",
    eyebrow: "The future of AI infrastructure",
    title: "The next model is also a planning decision.",
    intro:
      "AI capacity, electricity demand, renewable generation, water stress, and public planning are now moving together. Treating them as separate questions hides the choices ahead.",
    body:
      "Better disclosure and location-specific analysis can align infrastructure growth with grid capacity, water availability, and community priorities. The future is not predetermined; it is being permitted, financed, and built now.",
    insight:
      "AI is often viewed as a software revolution. Our findings suggest it is equally an infrastructure revolution.",
    visual: "future",
  },
];

export function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}
