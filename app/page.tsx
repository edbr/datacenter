import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { chapters } from "@/lib/chapters";

export default function Home() {
  return <main><SiteHeader/><section className="hero">
    <div className="hero-grid" aria-hidden="true"><div className="server-stack">{Array.from({length:8}).map((_,i)=><span key={i}><b/><b/><b/></span>)}</div><div className="pulse-line"/></div>
    <Reveal><p className="kicker">An interactive documentary <span>— 01 / 07</span></p></Reveal>
    <Reveal delay={.1}><h1>The Hidden Cost<br/>of Artificial<br/><em>Intelligence.</em></h1></Reveal>
    <div className="hero-bottom">
      <Reveal delay={.2}><p>Every prompt, search, and model response relies on physical infrastructure that consumes electricity, water, and land.</p></Reveal>
      <Reveal delay={.3}><Button asChild size="lg"><Link href={`/chapters/${chapters[0].slug}`}>Begin the journey <ArrowRight size={18}/></Link></Button></Reveal>
    </div>
    <a href="#prologue" className="scroll-cue" aria-label="Scroll to prologue"><ArrowDownRight/></a>
  </section>
  <section className="prologue" id="prologue"><p className="section-index">Prologue / The physical cloud</p><h2>A software revolution,<br/><span>built in concrete and steel.</span></h2><div><p>This project explores how the global expansion of data centers is reshaping energy systems—and why the choices made today will outlive the technology inside them.</p><Link href={`/chapters/${chapters[0].slug}`}>Enter chapter one <ArrowRight size={16}/></Link></div></section>
  </main>;
}
