"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { Chapter } from "@/lib/chapters";

type ChapterVisualProps = {
  type: Chapter["visual"];
  embedUrl?: string;
};

type VisualLabelProps = {
  left: string;
  right: React.ReactNode;
};

const GROWTH_BAR_HEIGHTS = [28, 35, 48, 60, 78, 94];
const GROWTH_BAR_YEARS = ["19", "20", "21", "22", "24", "26"];

const MAP_REGIONS = [
  [22, 35, 8],
  [27, 39, 4],
  [48, 32, 5],
  [69, 31, 6],
  [76, 42, 3],
  [84, 63, 3],
  [57, 54, 2],
] as const;

const ENERGY_USAGE = [
  { label: "Compute", value: 64 },
  { label: "Cooling", value: 24 },
  { label: "Other", value: 12 },
];

const TRADEOFFS = [
  ["Renewable investment", "Grid congestion"],
  ["Local jobs", "Water consumption"],
  ["Economic growth", "Higher electricity demand"],
  ["AI innovation", "Infrastructure costs"],
] as const;

const FUTURE_SIGNALS = [
  "AI",
  "Electricity",
  "Renewables",
  "Water",
  "Planning",
];

export function ChapterVisual({ type, embedUrl }: ChapterVisualProps) {
  switch (type) {
    case "growth":
      return <GrowthVisual />;
    case "map":
      return embedUrl ? <EmbeddedMapVisual url={embedUrl} /> : <MapVisual />;
    case "energy":
      return <EnergyVisual />;
    case "water":
      return <WaterVisual />;
    case "renewables":
      return <RenewablesVisual />;
    case "tradeoffs":
      return <TradeoffsVisual />;
    case "future":
      return <FutureVisual />;
  }
}

function VisualLabel({ left, right }: VisualLabelProps) {
  return (
    <div className="visual-label">
      <span>{left}</span>
      {typeof right === "string" ? <span>{right}</span> : right}
    </div>
  );
}

function GrowthVisual() {
  return (
    <figure className="visual growth-visual">
      <VisualLabel left="Illustrative demand index" right="2019—2026" />

      <div className="bars">
        {GROWTH_BAR_HEIGHTS.map((height, index) => (
          <motion.div
            key={height}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
          >
            <span>{GROWTH_BAR_YEARS[index]}</span>
          </motion.div>
        ))}
      </div>

      <div className="curve" />
    </figure>
  );
}

function EmbeddedMapVisual({ url }: { url: string }) {
  const openMapLink = (
    <a href={url} target="_blank" rel="noreferrer">
      Open full map <ExternalLink size={12} />
    </a>
  );

  return (
    <figure className="visual map-embed-visual">
      <VisualLabel left="Concentration of capacity" right={openMapLink} />

      <div className="map-embed">
        <iframe
          src={url}
          title="Interactive world data center map"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </figure>
  );
}

function MapVisual() {
  return (
    <figure className="visual map-visual">
      <VisualLabel left="Concentration of capacity" right="Global view" />

      <svg
        viewBox="0 0 100 68"
        aria-label="Abstract map showing concentrated data center regions"
      >
        <path
          className="land"
          d="M5 25 13 14l17-3 8 8 10-2 8 9-7 8-9 2-7 12-12-5-6-10Zm49-8 12-8 20 5 9 12-8 7 3 14-14 12-10-8-4-16-11-8Z"
        />

        {MAP_REGIONS.map(([x, y, radius], index) => (
          <motion.circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={radius}
            className={index < 3 ? "hot" : "cool"}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.12 }}
          />
        ))}
      </svg>

      <p className="map-caption">
        Dense digital clusters form where fiber, capital, land, and dependable
        power meet.
      </p>
    </figure>
  );
}

function EnergyVisual() {
  return (
    <figure className="visual energy-visual">
      <VisualLabel left="Facility electricity" right="Where the power goes" />

      <div className="energy-ring">
        <div>
          <strong>1.0</strong>
          <span>Total energy</span>
        </div>
      </div>

      <ul>
        {ENERGY_USAGE.map(({ label, value }) => (
          <li key={label}>
            <i style={{ width: `${value}%` }} />
            {label} <b>{value}%</b>
          </li>
        ))}
      </ul>
    </figure>
  );
}

function WaterVisual() {
  return (
    <figure className="visual water-visual">
      <VisualLabel left="Cooling tradeoff" right="Water ↔ energy" />

      <div className="drop">
        <span>W</span>
      </div>

      <div className="water-scale">
        <span>
          Lower water
          <br />
          Higher energy
        </span>
        <i />
        <span>
          Higher water
          <br />
          Lower energy
        </span>
      </div>
    </figure>
  );
}

function RenewablesVisual() {
  return (
    <figure className="visual renewable-visual">
      <VisualLabel
        left="New demand and clean supply"
        right="Illustrative pathways"
      />

      <svg viewBox="0 0 100 55" aria-label="Illustrative growth pathways">
        <path
          className="line orange"
          d="M0 48C19 45 21 39 36 37S60 20 100 8"
        />
        <path
          className="line blue"
          d="M0 50C22 49 28 43 43 41S70 31 100 23"
        />
      </svg>

      <div className="legend">
        <span>
          <i className="orange-dot" />
          Data-center demand
        </span>
        <span>
          <i className="blue-dot" />
          Renewable supply
        </span>
      </div>
    </figure>
  );
}

function TradeoffsVisual() {
  return (
    <figure className="visual tradeoff-visual">
      <VisualLabel left="One system, two outcomes" right="A framework" />

      {TRADEOFFS.map(([opportunity, challenge]) => (
        <div className="trade-row" key={opportunity}>
          <span>+</span>
          <strong>{opportunity}</strong>
          <i />
          <strong>{challenge}</strong>
          <span>−</span>
        </div>
      ))}
    </figure>
  );
}

function FutureVisual() {
  return (
    <figure className="visual future-visual">
      <VisualLabel left="Signals for the next decade" right="All connected" />

      <div className="future-words">
        {FUTURE_SIGNALS.map((signal, index) => (
          <motion.span
            key={signal}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.14 }}
          >
            {signal}
            <b>↑</b>
          </motion.span>
        ))}
      </div>
    </figure>
  );
}
