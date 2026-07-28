import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { chapters } from "@/lib/chapters";

const firstChapterUrl = `/chapters/${chapters[0].slug}`;

const projectTeam = [
  { name: "Cristina Navarro", image: "/cris.png" },
  { name: "Eric Elms", image: "/eric.jpeg" },
  { name: "Vladimir Boskovic", image: "/vlad.jpeg" },
  { name: "Eduardo Belluti", image: "/ed.png" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <HeroBackground />

        <Reveal>
          <p className="kicker">
            An interactive documentary <span>— 01 / 07</span>
          </p>
        </Reveal>

        <Reveal>
          <h1>
            The Hidden Cost
            <br />
            of Artificial
            <br />
            <em>Intelligence.</em>
          </h1>
        </Reveal>

        <div className="hero-bottom">
          <Reveal>
            <p>
              Every prompt, search, and model response relies on physical
              infrastructure that consumes electricity, water, and land.
            </p>
          </Reveal>

          <Reveal>
            <Button asChild size="lg">
              <a href={firstChapterUrl}>
                Begin the journey <ArrowRight size={18} />
              </a>
            </Button>
          </Reveal>
        </div>

        <a
          href="#prologue"
          className="scroll-cue"
          aria-label="Scroll to prologue"
        >
          <ArrowDownRight />
        </a>
      </section>

      <section className="prologue" id="prologue">
        <p className="section-index">Prologue / The physical cloud</p>

        <h2>
          A software revolution,
          <br />
          <span>built in concrete and steel.</span>
        </h2>

        <div>
          <p>
            This project explores how the global expansion of data centers is
            reshaping energy systems, and what it means for our planet.
          </p>

          <a href={firstChapterUrl}>
            Enter chapter one <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="project-team" aria-labelledby="project-team-title">
        <p className="section-index">Credits / Project team</p>

        <div className="team-content">
          <h2 id="project-team-title">Research <br></br> team</h2>

          <ol className="team-list">
            {projectTeam.map((member, index) => (
              <li key={member.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Image
                  className="team-portrait"
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  width={56}
                  height={56}
                />
                <strong>{member.name}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}

function HeroBackground() {
  return (
    <div className="hero-grid" aria-hidden="true">
      <div className="server-stack">
        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            style={{ "--server-row": index } as CSSProperties}
          >
            <b />
            <b />
            <b />
          </span>
        ))}
      </div>

      <div className="pulse-line" />
    </div>
  );
}
