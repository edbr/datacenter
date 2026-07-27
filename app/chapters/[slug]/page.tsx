import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { chapters, getChapter } from "@/lib/chapters";
import { SiteHeader } from "@/components/site-header";
import { ChapterVisual } from "@/components/visuals";
import { ChapterFigures } from "@/components/chapter-figures";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() { return chapters.map(({ slug }) => ({ slug })); }

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();
  const index = chapters.indexOf(chapter);
  const previous = chapters[index - 1]; const next = chapters[index + 1];
  return <main><SiteHeader/><article className="chapter">
    <header className="chapter-hero"><Reveal><p className="kicker">Chapter {chapter.number} <span>— {chapter.eyebrow}</span></p></Reveal><Reveal delay={.08}><h1>{chapter.title}</h1></Reveal><Reveal className="chapter-deck" delay={.16}><p>{chapter.intro}</p></Reveal></header>
    <section className="chapter-body"><div className="body-copy"><p className="section-index">The finding</p><p>{chapter.body}</p><aside><span>Key insight</span>{chapter.insight}</aside></div><ChapterVisual type={chapter.visual} embedUrl={chapter.embedUrl}/></section>
    {chapter.figures?.length ? <ChapterFigures figures={chapter.figures} /> : null}
    <footer className="chapter-nav">{previous ? <Link href={`/chapters/${previous.slug}`}><ArrowLeft/><span>Previous<br/><b>{previous.short}</b></span></Link> : <span/>}{next ? <Link href={`/chapters/${next.slug}`}><span>Next chapter<br/><b>{next.short}</b></span><ArrowRight/></Link> : <Link href="/"><span>Return<br/><b>Home</b></span><ArrowRight/></Link>}</footer>
  </article></main>;
}
