import ProjectExplorer from "@/components/ProjectExplorer";
import ThemeToggle from "@/components/ThemeToggle";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-6 pt-16 sm:pt-24">
        <header className="border-b-2 border-foreground pb-6">
          <div className="flex flex-col items-center gap-1 border-b border-foreground pb-4 text-center">
            <p className="text-xl font-semibold tracking-tight sm:text-2xl">
              Dominik Procházka{" "}
              <span className="align-super text-xs font-normal text-muted">
                [1]
              </span>
            </p>
            <p className="font-mono text-xs text-muted">
              Designer & Creative Technologist
            </p>
            <div className="mt-2 font-mono text-xs leading-relaxed text-muted">
              <p>
                <span className="text-muted">[2]</span>{" "}
                Portfolio No.: DP&ndash;2026
              </p>
              <p>
                <span className="text-muted">[3]</span>{" "}
                Date of Publication: Jul. 15, 2026
              </p>
              <p className="mt-1">
                <ThemeToggle />
              </p>
            </div>
          </div>

          <p className="mt-4 text-lg font-medium tracking-tight sm:text-xl">
            Product, Hardware, Interaction{" "}
            <span className="text-muted">&mdash;</span> Magical Tech.
          </p>

          <dl className="mt-4 grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-2 font-mono text-xs sm:grid-cols-[3rem_1fr]">
            <dt className="text-muted">[5]</dt>
            <dd>Location: London, United Kingdom</dd>

            <dt className="text-muted">[6]</dt>
            <dd>Experience: Ex-Intern, LEGO Creative Play Lab</dd>

            <dt className="text-muted">[7]</dt>
            <dd>
              Education: Product Design Engineering, Brunel University of
              London
            </dd>
          </dl>
        </header>
      </div>

      <div className="mx-auto max-w-2xl px-6 pb-16 sm:pb-24">
        <ProjectExplorer projects={projects} />
      </div>
    </>
  );
}
