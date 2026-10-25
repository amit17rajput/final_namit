const COLUMNS = [
  {
    heading: "Network",
    links: ["Status", "Node map", "Volunteer a telescope"],
  },
  {
    heading: "Data",
    links: ["Catalogue", "API docs", "Export formats"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Press"],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-brass/15 bg-ink-1 px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-ivory">
              Lumen
            </div>
            <p className="mt-4 text-sm text-ivory/55">
              A public telescope network, routing clear skies to anyone who asks.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <div className="text-xs uppercase tracking-[0.2em] text-brass">
                  {col.heading}
                </div>
                <ul className="mt-4 space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        data-cursor-hover
                        className="text-sm text-ivory/65 transition-colors hover:text-brass-light"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/40 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Lumen Network. All skies reserved.</span>
          <span className="font-mono uppercase tracking-[0.15em]">Node 7 · Online</span>
        </div>
      </div>
    </footer>
  );
}
