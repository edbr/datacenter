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
 * - `figures` adds editable image placeholders or finished figures to a chapter.
 *   Add `src: "/figures/example.png"` when the final image is available.
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
  figures?: ChapterFigure[];
};

export type ChapterFigure = {
  title: string;
  caption: string;
  src?: string;
  alt?: string;
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
    figures: [
      {
        title: "AI demand timeline",
        caption: "A timeline showing the milestones that accelerated AI infrastructure demand.",
      },
      {
        title: "Growth of cloud computing",
        caption: "A figure tracing the expansion of cloud capacity over time.",
      },
      {
        title: "One impressive statistic",
        caption: "A headline number that communicates the scale of data-center growth.",
      },
    ],
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
    figures: [
      {
        title: "Facilities by country",
        caption:
          "A country-level comparison showing where data-center facilities are concentrated.",
      },
      {
        title: "Capacity by region",
        caption:
          "A regional comparison of installed and planned data-center capacity.",
      },
    ],
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
    figures: [
      {
        title: "Capacity vs. electricity",
        caption:
          "A comparison of data-center capacity and the electricity required to support it.",
      },
      {
        title: "Distribution of electricity usage",
        caption:
          "A breakdown showing how electricity consumption is distributed across facilities.",
      },
      {
        title: "Country comparisons",
        caption:
          "A country-level comparison of data-center electricity demand.",
      },
    ],
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
    visual: "water",
    figures: [
      {
        title: "Water consumption",
        caption:
          "A comparison of water consumed by data-center facilities and regions.",
      },
      {
        title: "Water usage effectiveness (WUE)",
        caption:
          "A comparison of water usage effectiveness across facilities and operating conditions.",
      },
      {
        title: "Cooling types",
        caption:
          "A breakdown of cooling technologies and their water and energy tradeoffs.",
      },
    ],
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
    figures: [
      {
        title: "Renewable generation vs. data-center concentration",
        caption:
          "A comparison of renewable electricity generation and the geographic concentration of data centers.",
      },
      {
        title: "Electricity generation by source",
        caption:
          "A breakdown of electricity supplied by wind, solar, natural gas, and coal.",
      },
      {
        title: "Regional energy mix",
        caption:
          "A regional view showing where wind, solar, natural gas, and coal shape the electricity mix.",
      },
    ],
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
    figures: [
      {
        title: "Opportunity vs. risk quadrant",
        caption:
          "Signature scatterplot where each point represents a country or state. Plot renewable electricity share (%) on the x-axis and data-center capacity (MW) or facility count on the y-axis. Scale each point by total electricity consumption and color it by water-stress tier.",
      },
      {
        title: "Tradeoff bubble chart",
        caption:
          "Plot daily electricity usage on the x-axis and daily water usage on the y-axis. Size each bubble by facility capacity (MW) and color it by cooling system to reveal environmental tradeoffs among facilities.",
      },
      {
        title: "Country opportunity score",
        caption:
          "Create a composite index weighted by renewable share (40%), water availability (25%), existing infrastructure (20%), and grid capacity (15%). Rank countries such as Norway, Canada, Sweden, Spain, the USA, and India in a horizontal bar chart for policy discussion.",
      },
      {
        title: "Country profile radar charts",
        caption:
          "Select four countries and normalize renewables, water availability, data-center capacity, and electricity metrics from 0–100. Draw one polygon per country to make contrasting infrastructure profiles immediately visible.",
      },
      {
        title: "Infrastructure flow Sankey",
        caption:
          "Show how infrastructure choices connect through a flow such as country → cooling type → electricity demand → water stress, or energy source → generation → data centers → cooling technology.",
      },
      {
        title: "Country comparison heatmap",
        caption:
          "Use countries as rows and renewable share, water, electricity, capacity, PUE, and WUE as columns. Normalize the values and use color intensity to make strengths, constraints, and outliers easy to compare.",
      },
      {
        title: "Country small multiples",
        caption:
          "Create a separate scatterplot for Spain, India, the USA, and Norway using identical axes, domains, and visual encodings. The repeated scale makes differences in distribution and country-level patterns easy to identify without relying on one crowded chart.",
      },
      {
        title: "Four-quadrant efficiency plot",
        caption:
          "Plot electricity use on the x-axis and water use on the y-axis, with each point representing a facility or country. Divide the chart into Sustainable Leaders, Water Intensive, Energy Intensive, and Resource Intensive quadrants to directly communicate operational tradeoffs.",
      },
      {
        title: "Before and after renewable mix",
        caption:
          "Use a stacked area chart from approximately 2015–2025 to show how coal, natural gas, solar, wind, and hydro changed over time. Overlay data-center growth to examine whether cleaner generation expanded alongside new infrastructure demand.",
      },
      {
        title: "The infrastructure balance",
        caption:
          "Build a conceptual balance between benefits—renewable investment, economic growth, jobs, and AI innovation—and costs—water demand, grid congestion, peak load, and carbon emissions. Pair every item with an icon and one supporting statistic from the analysis.",
      },
    ],
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
    figures: [
      {
        title: "AI growth vs. grid readiness",
        caption:
          "Use two conceptual growth lines to compare AI compute demand with energy-infrastructure expansion. This is not a forecast; it frames the risk that compute demand may outpace generation, transmission, and cooling investment. Supporting message: Meeting future AI demand will require parallel investment in generation, transmission, and cooling technologies.",
      },
      {
        title: "Resource intensity by cooling technology",
        caption:
          "Create a roadmap comparing air cooling (medium electricity efficiency, low water use, medium AI readiness), evaporative cooling (high efficiency, high water use, medium readiness), and liquid cooling (highest efficiency, low-to-medium water use depending on implementation, and highest AI readiness).",
      },
    ],
  },
];

export function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}
