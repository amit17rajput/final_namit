const ACCENT_MAP: Record<string, string> = {
  cyan: "#55E6FF",
  plasma: "#528BFF",
  violet: "#9A7BFF",
};

export default function ProjectMockup({ accent = "cyan" }: { accent?: "cyan" | "plasma" | "violet" }) {
  const color = ACCENT_MAP[accent];

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-edge/25 bg-space" aria-hidden="true">
      <div className="flex h-7 items-center gap-1.5 border-b border-edge/20 bg-navy px-3">
        <span className="h-2 w-2 rounded-full bg-fog/20" />
        <span className="h-2 w-2 rounded-full bg-fog/20" />
        <span className="h-2 w-2 rounded-full bg-fog/20" />
      </div>
      <div className="relative h-[calc(100%-1.75rem)] p-4">
        <div
          className="absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-25 blur-2xl"
          style={{ background: color }}
        />
        <div className="h-3 w-2/3 rounded bg-fog/15" />
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="h-16 rounded-lg border border-edge/20" style={{ background: `${color}14` }} />
          <div className="h-16 rounded-lg border border-edge/20 bg-navy" />
          <div className="h-16 rounded-lg border border-edge/20 bg-navy" />
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-2 w-full rounded bg-fog/10" />
          <div className="h-2 w-5/6 rounded bg-fog/10" />
          <div className="h-2 w-3/5 rounded bg-fog/10" />
        </div>
      </div>
    </div>
  );
}
