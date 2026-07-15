"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import FrameCorners from "@/components/FrameCorners";
import type { Project } from "@/lib/projects";

export default function ProjectBrowser({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  const openProject = useCallback(
    (slug: string) => router.push(`/work/${slug}`),
    [router],
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowDown" || event.key === "j") {
        event.preventDefault();
        setActiveIndex((i) => (i + 1) % projects.length);
      } else if (event.key === "ArrowUp" || event.key === "k") {
        event.preventDefault();
        setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
      } else if (event.key === "Enter") {
        event.preventDefault();
        openProject(projects[activeIndex].slug);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [projects, activeIndex, openProject]);

  return (
    <div className="font-mono">
      <p className="mb-3 text-xs text-muted">
        <span className="hidden sm:inline">
          ↑ / ↓ to browse records &middot; ↵ to open &middot;{" "}
        </span>
        {String(activeIndex + 1).padStart(3, "0")} / {String(projects.length).padStart(3, "0")}
      </p>

      {/* Desktop: index list + live record inspector */}
      <div className="hidden overflow-hidden border border-foreground/20 text-sm sm:grid sm:grid-cols-[280px_1fr]">
        <div className="divide-y divide-dashed divide-foreground/15 border-r border-foreground/20">
          {projects.map((project, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={project.slug}
                type="button"
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                onClick={() => openProject(project.slug)}
                className={`relative flex w-full items-center gap-3 px-4 py-3 text-left transition-colors duration-200 ease-out ${
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute inset-y-0 left-0 w-0.5 bg-accent transition-transform duration-200 ease-out ${
                    isActive ? "scale-y-100" : "scale-y-0"
                  }`}
                />
                <span className="tabular-nums">
                  {String(i + 1).padStart(3, "0")}
                </span>
                <span className="flex-1 truncate uppercase tracking-tight">
                  {project.title}
                </span>
                <span className="text-xs">{project.year}</span>
              </button>
            );
          })}
        </div>

        <div className="group/preview flex flex-col p-6">
          <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-muted">
            <span>Fig. {String(activeIndex + 1).padStart(2, "0")}</span>
            <span>Scale &mdash; N.T.S.</span>
          </div>
          <div className="relative mt-3 aspect-[16/10] w-full overflow-hidden border border-dashed border-foreground/20 bg-foreground/5">
            <FrameCorners />
            <Image
              key={active.slug}
              src={active.image}
              alt={active.title}
              fill
              sizes="(min-width: 640px) 640px, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover/preview:scale-[1.03]"
            />
          </div>
          <dl className="mt-6 grid grid-cols-[90px_1fr] gap-y-2 text-xs">
            <dt className="text-muted">record</dt>
            <dd className="truncate">{active.slug}</dd>
            <dt className="text-muted">focus</dt>
            <dd>{active.tags.join(", ")}</dd>
            <dt className="text-muted">role</dt>
            <dd>{active.role}</dd>
            <dt className="text-muted">tools</dt>
            <dd className="truncate">{active.tools}</dd>
          </dl>
          <Link
            href={`/work/${active.slug}`}
            className="group/link mt-6 inline-flex w-fit items-center gap-2 text-accent transition-opacity duration-200 hover:opacity-80"
          >
            open_record()
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 ease-out group-hover/link:translate-x-1"
            >
              &crarr;
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile: always-visible stacked records */}
      <div className="flex flex-col sm:hidden">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="border-b border-foreground/10 py-4 transition-colors duration-200 active:text-accent"
          >
            <div className="flex items-baseline justify-between gap-4 text-sm text-muted">
              <span className="tabular-nums">
                {String(i + 1).padStart(3, "0")}
              </span>
              <span>{project.year}</span>
            </div>
            <p className="mt-1 font-sans text-lg uppercase tracking-tight">
              {project.title}
            </p>
            <p className="mt-1 text-sm text-muted">
              {project.tags.join(", ")}
            </p>
            <div className="relative mt-3 aspect-[16/10] w-full overflow-hidden border border-dashed border-foreground/20 bg-foreground/5">
              <FrameCorners />
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
