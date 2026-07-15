import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import FrameCorners from "@/components/FrameCorners";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Dominik Procházka`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <Link
        href="/"
        className="group/back inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
      >
        <span className="inline-block transition-transform duration-200 ease-out group-hover/back:-translate-x-0.5">
          &larr;
        </span>
        Home
      </Link>

      <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        Fig. {String(currentIndex + 1).padStart(2, "0")}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-4 leading-relaxed text-muted">{project.tagline}</p>
      <p className="mt-3 font-mono text-xs uppercase tracking-wide text-muted">
        {project.role} <span className="mx-2 text-foreground/25">/</span>
        {project.timeline} <span className="mx-2 text-foreground/25">/</span>
        {project.tools}
      </p>

      <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden border border-dashed border-foreground/20 bg-foreground/5">
        <FrameCorners />
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 640px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Overview
        </h2>
        <p className="mt-3 leading-relaxed">{project.overview}</p>
      </div>

      <div className="mt-10">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Process
        </h2>
        <p className="mt-3 leading-relaxed text-muted">{project.process}</p>
      </div>

      <div className="mt-10">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Outcome
        </h2>
        <p className="mt-3 leading-relaxed text-muted">{project.outcome}</p>
      </div>

      <div className="mt-20 border-t border-dashed border-foreground/20 pt-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Next
        </p>
        <Link
          href={`/work/${nextProject.slug}`}
          className="group/next mt-2 inline-flex items-center gap-2 text-2xl font-semibold tracking-tight transition-colors hover:text-accent"
        >
          {nextProject.title}
          <span className="inline-block transition-transform duration-200 ease-out group-hover/next:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
