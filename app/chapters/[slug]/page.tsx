/* eslint-disable @next/next/no-html-link-for-pages */

import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { ChapterFigures } from "@/components/chapter-figures";
import { ChapterVisual } from "@/components/visuals";
import { Chapter, chapters, getChapter } from "@/lib/chapters";

type ChapterPageProps = {
  params: Promise<{ slug: string }>;
};

type ChapterNavigationProps = {
  previous?: Chapter;
  next?: Chapter;
};

export function generateStaticParams() {
  return chapters.map(({ slug }) => ({ slug }));
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = getChapter(slug);

  if (!chapter) {
    notFound();
  }

  const chapterIndex = chapters.indexOf(chapter);
  const previousChapter = chapters[chapterIndex - 1];
  const nextChapter = chapters[chapterIndex + 1];

  return (
    <main>
      <article className="chapter">
        {/* Chapter title and introduction */}
        <header className="chapter-hero">
        
            <p className="kicker">
              Chapter {chapter.number}
              <span> — {chapter.eyebrow}</span>
            </p>
   

            <h1>{chapter.title}</h1>

          <div className="chapter-deck">
            <p>{chapter.intro}</p>
          </div>
        </header>

        {/* Main finding, key insight, and chapter visualization */}
        <section className="chapter-body">
          <div className="body-copy">
            <p className="section-index">The finding</p>
            <p>{chapter.body}</p>

            <aside>
              <span>Key insight</span>
              {chapter.insight}
            </aside>
          </div>

          <ChapterVisual
            type={chapter.visual}
            embedUrl={chapter.embedUrl}
          />
        </section>

        {/* Optional supporting graphs configured in lib/chapters.ts */}
        {chapter.figures?.length ? (
          <ChapterFigures figures={chapter.figures} />
        ) : null}

        <ChapterNavigation
          previous={previousChapter}
          next={nextChapter}
        />
      </article>
    </main>
  );
}

function ChapterNavigation({ previous, next }: ChapterNavigationProps) {
  return (
    <footer className="chapter-nav">
      {previous ? (
        <a href={`/chapters/${previous.slug}`}>
          <ArrowLeft />
          <span>
            Previous
            <br />
            <b>{previous.short}</b>
          </span>
        </a>
      ) : (
        <span />
      )}

      {next ? (
        <a href={`/chapters/${next.slug}`}>
          <span>
            Next chapter
            <br />
            <b>{next.short}</b>
          </span>
          <ArrowRight />
        </a>
      ) : (
        <a href="/">
          <span>
            Return
            <br />
            <b>Home</b>
          </span>
          <ArrowRight />
        </a>
      )}
    </footer>
  );
}
