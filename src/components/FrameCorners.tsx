export default function FrameCorners() {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 h-4 w-4 border-l border-t border-accent/80"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-10 h-4 w-4 border-r border-t border-accent/80"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 z-10 h-4 w-4 border-b border-l border-accent/80"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 z-10 h-4 w-4 border-b border-r border-accent/80"
      />
    </>
  );
}
