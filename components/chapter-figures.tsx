import Image from "next/image";
import { ImageIcon, Plus } from "lucide-react";
import { ChapterFigure } from "@/lib/chapters";

export function ChapterFigures({ figures }: { figures: ChapterFigure[] }) {
  return (
    <section className="chapter-figures" aria-label="Chapter figures">
      {figures.map((figure, index) => (
        <figure className={`figure-card figure-card-${index + 1}`} key={figure.title}>
          <div className="figure-image">
            {figure.src ? (
              <Image
                src={figure.src}
                alt={figure.alt ?? figure.title}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            ) : (
              <div className="figure-placeholder">
                <ImageIcon aria-hidden="true" />
                <span>Image placeholder</span>
                <Plus aria-hidden="true" />
              </div>
            )}
          </div>
          <figcaption>
            <span>Figure {String(index + 1).padStart(2, "0")}</span>
            <h3>{figure.title}</h3>
            <p>{figure.caption}</p>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
