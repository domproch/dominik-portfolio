import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

const CELL = 88;
const GAP = 12;
const PITCH = CELL + GAP;
const COLS = 5;
const ROWS = 4;

// Fixed, curated scatter of grid positions (1-indexed row/col) so most cells
// stay empty — just the dotted backdrop — like a pinned-up reference board
// rather than a dense uniform grid. Not runtime-random, to avoid layout shift.
const positions = [
  { row: 1, col: 1 },
  { row: 1, col: 4 },
  { row: 2, col: 2 },
  { row: 3, col: 5 },
  { row: 4, col: 3 },
];

function ImageTag({ index }: { index: number }) {
  return (
    <span className="absolute left-1.5 top-1.5 z-10 bg-foreground px-1 py-0.5 font-mono text-[9px] uppercase tracking-wide text-background">
      Img-{String(index + 1).padStart(3, "0")}
    </span>
  );
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <>
      {/* Desktop: fixed grid of uniform square tiles — some filled, some empty.
          Each track is a full PITCH wide/tall (dots mark the track corners);
          tiles are inset by half the gap on every side so they sit centered
          between the surrounding dots rather than hugging one corner. */}
      <div
        className="relative hidden text-muted sm:grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, ${PITCH}px)`,
          gridTemplateRows: `repeat(${ROWS}, ${PITCH}px)`,
          backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
          backgroundSize: `${PITCH}px ${PITCH}px`,
          backgroundPosition: `-${PITCH / 2}px -${PITCH / 2}px`,
        }}
      >
        {projects.map((project, i) => {
          const pos = positions[i % positions.length];
          return (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative block overflow-hidden border border-dashed border-foreground/20 bg-foreground/5"
              style={{
                gridColumn: pos.col,
                gridRow: pos.row,
                margin: `${GAP / 2}px`,
              }}
            >
              <ImageTag index={i} />
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
            </Link>
          );
        })}
      </div>

      {/* Mobile: simple two-column grid */}
      <div className="grid grid-cols-2 gap-3 sm:hidden">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group relative block aspect-square overflow-hidden border border-dashed border-foreground/20 bg-foreground/5"
          >
            <ImageTag index={i} />
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="50vw"
              className="object-cover"
            />
          </Link>
        ))}
      </div>
    </>
  );
}
