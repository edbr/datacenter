/**
 * STORY CONTENT
 * --------------------------------------------------------------------------
 * Revised narrative:
 *
 * AI growth → data-center concentration → electricity demand →
 * different grid responses → clean-energy readiness → policy tradeoffs →
 * future infrastructure choices.
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

export type ChapterFigure = {
  title: string;
  caption: string;
  src?: string;
  alt?: string;
  /** Display height in pixels. Defaults to 560. */
  height?: number;
};

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

export const chapters: Chapter[] = [
  {
    slug: "why-data-centers-matter",
    number: "01",
    short: "The AI Energy Boom",
    eyebrow: "Why data centers matter",
    title: "AI is becoming an infrastructure challenge.",
    intro:
      "Artificial intelligence may feel virtual, but every model, cloud service, and digital interaction ultimately depends on physical facilities connected to the electric grid.",
    body:
      "AI workloads require dense clusters of processors operating continuously. As facilities become larger and rack densities increase, data centers are emerging as one of the fastest-growing sources of electricity demand. The question is no longer only how much computing power can be built, but whether electricity infrastructure can expand alongside it.",
    insight:
      "AI is not only a software revolution. It is creating a major new source of physical electricity demand.",
    visual: "growth",
  },
  {
    slug: "mapping-data-centers",
    number: "02",
    short: "Where It Is Built",
    eyebrow: "Mapping global data centers",
    title: "The cloud is concentrated on the ground.",
    intro:
      "Data centers are not distributed evenly. Capacity clusters around reliable grids, dense fiber networks, large markets, favorable policy, and access to land and water.",
    body:
      "A relatively small number of countries and metropolitan regions host a large share of global data-center capacity. These clusters create operational advantages, but they also concentrate electricity demand and infrastructure pressure in the same communities.",
    insight:
      "Location determines which grid supplies the power and which community absorbs the infrastructure impact.",
    visual: "map",
    embedUrl: "https://data-center-map-world.vercel.app/",
    figures: [
      {
        title: "Data-center capacity expansion by country",
        caption:
          "Explore how estimated data-center capacity has expanded across countries outside the United States.",
        src: "/charts/data_center_capacity_by_country.html",
        height: 700,
        alt: "Interactive chart of data-center capacity expansion by country.",
      },
      {
        title: "Top 20 countries by data-center capacity",
        caption:
          "Focus the global comparison on the 20 largest national data-center markets outside the United States in 2025.",
        src: "/charts/data_center_capacity_by_country_top20.html",
        height: 1260,
        alt: "Interactive chart of the top 20 countries by estimated data-center capacity.",
      },
      {
        title: "Top 10 U.S. data-center markets",
        caption:
          "Highlight the concentration of capacity in the ten largest United States city markets.",
        src: "/charts/data_center_capacity_by_usa_city_top10.html",
        height: 720,
        alt: "Interactive chart of data-center capacity in the top 10 United States cities.",
      },
      {
        title: "Top 20 U.S. data-center markets",
        caption:
          "Expand the city comparison to show the broader geography of the 20 largest United States markets.",
        src: "/charts/data_center_capacity_by_usa_city_top20.html",
        height: 1200,
        alt: "Interactive chart of data-center capacity in the top 20 United States cities.",
      },
    ],
  },
  {
    slug: "energy-footprint",
    number: "03",
    short: "The Demand Challenge",
    eyebrow: "Global electricity demand",
    title: "The world already needed more electricity. AI accelerates the race.",
    intro:
      "Global electricity consumption has continued to rise as populations, industries, transportation systems, and digital services become more electrified.",
    body:
      "Data centers add a large, continuous load to an electricity system already under pressure. The challenge is not simply generating more power. New generation, transmission, and grid connections must appear in the same places and on the same timelines as new computing capacity.",
    insight:
      "Electricity demand is global, but grid constraints are local.",
    visual: "energy",
    figures: [
      {
        title: "World electricity generation by fuel",
        caption:
          "Show how total electricity generation has grown and how both renewable and fossil sources continue to contribute.",
        src: "/charts/world_electricity_generation_by_fuel.png",
        height: 760,
        alt: "Stacked area chart of world electricity generation by fuel source.",
      },
      {
        title: "Top electricity-demand countries",
        caption:
          "Compare the countries with the largest electricity systems and their current renewable shares.",
        src: "/charts/top_20_countries_by_electricity_demand.png",
        height: 700,
        alt: "Bar chart comparing national electricity demand and renewable electricity shares.",
      },
      {
        title: "Capacity versus electricity use",
        caption:
          "Connect estimated data-center capacity with the electricity required to operate it.",
        src: "/charts/capacity-vs-electricity.html",
        alt: "Interactive chart comparing data-center capacity with electricity consumption.",
      },
    ],
  },
  {
    slug: "regional-grid-readiness",
    number: "04",
    short: "Different Grids",
    eyebrow: "Electricity systems are not equal",
    title: "The same data center can produce very different energy outcomes.",
    intro:
      "A facility connected to a renewable-rich grid has a different operational footprint from one connected to a system dominated by coal or natural gas.",
    body:
      "Countries experiencing data-center growth are following different electricity pathways. Some are expanding renewable generation rapidly. Others are meeting new demand with fossil fuels, imports, or delayed power-plant retirements. Renewable capacity alone is not enough; grid carbon intensity, transmission, storage, and firm generation also matter.",
    insight:
      "Data centers do not determine sustainability by themselves. The surrounding electricity system does.",
    visual: "renewables",
    figures: [
      {
        title: "Renewable share over time",
        caption:
          "Compare renewable-generation trajectories across major data-center countries.",
        src: "/charts/renewable_share_selected_data_center_countries.png",
        height: 700,
        alt: "Line chart comparing renewable electricity shares across selected data-center countries.",
      },
      {
        title: "U.S. electricity generation by fuel",
        caption:
          "Show how coal declined while natural gas, wind, and solar expanded in the United States.",
        src: "/charts/us_generation_mix_stacked_area.png",
        height: 760,
        alt: "Stacked area chart of United States electricity generation by fuel source.",
      },
      {
        title: "Renewable share by U.S. state",
        caption:
          "Reveal how differently U.S. states are positioned to supply new large electricity loads.",
        src: "/charts/state_renewable_heatmap.png",
        height: 1200,
        alt: "Heatmap showing renewable electricity generation share by United States state and year.",
      },
      {
        title: "Clean versus fossil generation",
        caption:
          "Compare the national shares of electricity generated from clean and fossil sources.",
        src: "/charts/clean_vs_fossil_share.png",
        height: 700,
        alt: "Chart comparing clean and fossil shares of electricity generation.",
      },
      {
        title: "Generation in the top 10 data-center states",
        caption:
          "Compare total electricity generation across the United States states with the most data-center capacity.",
        src: "/charts/top10_states_generation.png",
        height: 700,
        alt: "Chart comparing electricity generation in the top 10 United States data-center states.",
      },
      {
        title: "Renewable share in the top 10 data-center states",
        caption:
          "Show the clean-energy readiness of the United States states hosting the most data-center capacity.",
        src: "/charts/top10_states_renewable_share.png",
        height: 700,
        alt: "Chart comparing renewable electricity shares in the top 10 United States data-center states.",
      },
    ],
  },
  {
    slug: "renewable-energy",
    number: "05",
    short: "Can Clean Energy Keep Up?",
    eyebrow: "Demand growth versus renewable growth",
    title: "Clean power is racing against new demand.",
    intro:
      "Technology companies can help finance new wind, solar, storage, and other low-carbon resources. But renewable procurement does not automatically mean that clean electricity is available on the same grid or during every hour of operation.",
    body:
      "The critical comparison is whether renewable generation is growing alongside electricity demand in countries receiving new data-center investment. Some regions are adding substantial clean generation while demand rises. Others are experiencing rapid demand growth with only limited improvement in renewable share.",
    insight:
      "The central question is not how much renewable energy exists, but whether clean supply grows where electricity demand grows.",
    visual: "renewables",
    figures: [
      {
        title: "Demand growth versus renewable-share growth",
        caption:
          "Plot the change in electricity demand against the change in renewable share to identify transition leaders and high-risk markets.",
        src: "/charts/demand_growth_vs_renewable_share_change.png",
        height: 700,
        alt: "Scatterplot comparing electricity-demand growth with growth in renewable-generation share.",
      },
      {
        title: "Data-center capacity and renewable power",
        caption:
          "Compare data-center capacity with renewable electricity availability across countries.",
        src: "/charts/data_center_capacity_vs_renewable_share.html",
        height: 760,
        alt: "Bubble chart comparing data-center capacity and renewable power capacity by country.",
      },
      {
        title: "Demand growth versus renewable-share level",
        caption:
          "Compare electricity-demand growth with each country's current renewable share to identify prepared and exposed markets.",
        src: "/charts/demand_growth_vs_renewable_share_level.png",
        height: 700,
        alt: "Scatterplot comparing electricity-demand growth with renewable-generation share.",
      },
    ],
  },
  {
    slug: "winners-and-tradeoffs",
    number: "06",
    short: "Readiness & Risk",
    eyebrow: "Where growth creates opportunity or pressure",
    title: "Some regions are ready for AI growth. Others face a widening energy gap.",
    intro:
      "Data-center expansion can support investment, tax revenue, and new energy infrastructure. It can also increase fossil generation, grid congestion, electricity costs, and competition for limited resources.",
    body:
      "The strongest locations combine low-carbon electricity, expanding generation, available transmission, and policies that require large customers to contribute to the infrastructure they need. High-risk locations combine rapid data-center growth with fossil dependence, constrained grids, weak cost protections, or limited clean-energy expansion.",
    insight:
      "The real winners will be the regions that align computing growth with new low-carbon generation and grid investment.",
    visual: "tradeoffs",
    figures: [
      {
        title: "Water use and infrastructure tradeoffs",
        caption:
          "Compare water demand across facilities and operating conditions as one of the local resource tradeoffs of data-center growth.",
        src: "/charts/wateruse.png",
        height: 700,
        alt: "Chart comparing water use associated with data-center operations.",
      },
    ],
  },
  {
    slug: "looking-ahead",
    number: "07",
    short: "Powering What Comes Next",
    eyebrow: "The future of AI infrastructure",
    title: "The next breakthrough in AI may depend on the electric grid.",
    intro:
      "Future AI growth will require more than faster processors and larger models. It will require electricity systems capable of supplying large, continuous loads without slowing the transition away from fossil fuels.",
    body:
      "Planning decisions made today will determine whether data centers become anchor customers for new clean energy or sources of additional grid pressure. Better disclosure, location-specific analysis, transmission investment, storage, and customer-funded infrastructure can help align AI expansion with long-term public goals.",
    insight:
      "The future of AI is being permitted, financed, connected, and powered now.",
    visual: "future",
  },
];

export function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}
