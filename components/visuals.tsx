"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Chapter } from "@/lib/chapters";

const bars = [28, 35, 48, 60, 78, 94];
const regions = [
  [22, 35, 8], [27, 39, 4], [48, 32, 5], [69, 31, 6], [76, 42, 3], [84, 63, 3], [57, 54, 2]
];

export function ChapterVisual({ type, embedUrl }: { type: Chapter["visual"]; embedUrl?: string }) {
  if (type === "growth") return <figure className="visual growth-visual"><div className="visual-label"><span>Illustrative demand index</span><span>2019—2026</span></div><div className="bars">{bars.map((h,i)=><motion.div key={h} initial={{height:0}} whileInView={{height:`${h}%`}} transition={{duration:.7,delay:i*.08}}><span>{["19","20","21","22","24","26"][i]}</span></motion.div>)}</div><div className="curve"/></figure>;
  if (type === "map" && embedUrl) return <figure className="visual map-embed-visual"><div className="visual-label"><span>Concentration of capacity</span><a href={embedUrl} target="_blank" rel="noreferrer">Open full map <ExternalLink size={12}/></a></div><div className="map-embed"><iframe src={embedUrl} title="Interactive world data center map" loading="lazy" allowFullScreen /></div></figure>;
  if (type === "map") return <figure className="visual map-visual"><div className="visual-label"><span>Concentration of capacity</span><span>Global view</span></div><svg viewBox="0 0 100 68" aria-label="Abstract map showing concentrated data center regions"><path d="M5 25 13 14l17-3 8 8 10-2 8 9-7 8-9 2-7 12-12-5-6-10Zm49-8 12-8 20 5 9 12-8 7 3 14-14 12-10-8-4-16-11-8Z" className="land"/>{regions.map(([x,y,r],i)=><motion.circle key={i} cx={x} cy={y} r={r} className={i<3?"hot":"cool"} initial={{scale:0}} whileInView={{scale:1}} transition={{delay:i*.12}}/>)}</svg><p className="map-caption">Dense digital clusters form where fiber, capital, land, and dependable power meet.</p></figure>;
  if (type === "energy") return <figure className="visual energy-visual"><div className="visual-label"><span>Facility electricity</span><span>Where the power goes</span></div><div className="energy-ring"><div><strong>1.0</strong><span>Total energy</span></div></div><ul><li><i style={{width:"64%"}}/>Compute <b>64%</b></li><li><i style={{width:"24%"}}/>Cooling <b>24%</b></li><li><i style={{width:"12%"}}/>Other <b>12%</b></li></ul></figure>;
  if (type === "water") return <figure className="visual water-visual"><div className="visual-label"><span>Cooling tradeoff</span><span>Water ↔ energy</span></div><div className="drop"><span>W</span></div><div className="water-scale"><span>Lower water<br/>Higher energy</span><i/><span>Higher water<br/>Lower energy</span></div></figure>;
  if (type === "renewables") return <figure className="visual renewable-visual"><div className="visual-label"><span>New demand and clean supply</span><span>Illustrative pathways</span></div><svg viewBox="0 0 100 55"><path d="M0 48C19 45 21 39 36 37S60 20 100 8" className="line orange"/><path d="M0 50C22 49 28 43 43 41S70 31 100 23" className="line blue"/></svg><div className="legend"><span><i className="orange-dot"/>Data-center demand</span><span><i className="blue-dot"/>Renewable supply</span></div></figure>;
  if (type === "tradeoffs") return <figure className="visual tradeoff-visual"><div className="visual-label"><span>One system, two outcomes</span><span>A framework</span></div>{[["Renewable investment","Grid congestion"],["Local jobs","Water consumption"],["Economic growth","Higher electricity demand"],["AI innovation","Infrastructure costs"]].map((r,i)=><div className="trade-row" key={i}><span>+</span><strong>{r[0]}</strong><i/><strong>{r[1]}</strong><span>−</span></div>)}</figure>;
  return <figure className="visual future-visual"><div className="visual-label"><span>Signals for the next decade</span><span>All connected</span></div><div className="future-words">{["AI","Electricity","Renewables","Water","Planning"].map((x,i)=><motion.span key={x} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:i*.14}}>{x}<b>↑</b></motion.span>)}</div></figure>;
}
