import ProjectExplorer from "@/components/ProjectExplorer";
import ThemeToggle from "@/components/ThemeToggle";
import { projects } from "@/lib/projects";

const socials = [
  { label: "Email", href: "mailto:hello@dominikprochazka.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-6 pt-16 sm:pt-24">
        <header className="pb-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pb-4">
            <div>
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                Dominik Procházka{" "}
                <span className="align-super text-xs font-normal text-muted">
                  [1]
                </span>
              </p>
              <p className="mt-0.5 font-mono text-xs text-muted">
                Designer & Creative Technologist
              </p>
            </div>
            <div className="text-right font-mono text-xs leading-relaxed text-muted">
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

          <div className="my-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-dashed border-foreground/30 pt-4 font-mono text-xs text-muted">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="underline decoration-dashed underline-offset-4 transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>

          {/*
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
          */}
        </header>
      </div>

      <div className="mx-auto max-w-2xl px-6 pb-16 sm:pb-24">
        <ProjectExplorer projects={projects} />
      </div>
    </>
  );
}
