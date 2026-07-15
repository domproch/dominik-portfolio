"use client";

import { useState } from "react";
import ProjectBrowser from "@/components/ProjectBrowser";
import ProjectGrid from "@/components/ProjectGrid";
import type { Project } from "@/lib/projects";

export default function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [view, setView] = useState<"index" | "grid">("index");

  return (
    <div className="mt-16">
      <div className="mb-3 flex items-center justify-between font-mono text-xs uppercase tracking-wide">
        <span className="text-muted">
          <span className="text-muted">[8]</span> View
        </span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setView("index")}
            className={`transition-colors ${
              view === "index" ? "text-accent" : "text-muted hover:text-foreground"
            }`}
          >
            [ Index ]
          </button>
          <button
            type="button"
            onClick={() => setView("grid")}
            className={`transition-colors ${
              view === "grid" ? "text-accent" : "text-muted hover:text-foreground"
            }`}
          >
            [ Grid ]
          </button>
        </div>
      </div>

      {view === "index" ? (
        <ProjectBrowser projects={projects} />
      ) : (
        <ProjectGrid projects={projects} />
      )}
    </div>
  );
}
