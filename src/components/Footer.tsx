import { Link } from "react-router-dom";
import { Link2, MessageCircle, Code2, Palette } from "lucide-react";
import AtomMark from "./AtomMark";
import { siteConfig } from "../data/siteConfig";

const SOCIAL_ICONS = [
  { key: "linkedin", icon: Link2 },
  { key: "twitter", icon: MessageCircle },
  { key: "github", icon: Code2 },
  { key: "dribbble", icon: Palette },
] as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-edge/15 bg-navy px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2.5">
              <AtomMark className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-fog">
                Namitron
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted">{siteConfig.statement}</p>
            <div className="mt-6 flex items-center gap-4">
              {SOCIAL_ICONS.map(({ key, icon: Icon }) => (
                <a
                  key={key}
                  href={siteConfig.social[key]}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  aria-label={key}
                  className="text-muted transition-colors hover:text-cyan"
                >
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {siteConfig.footerColumns.map((col) => (
              <div key={col.heading}>
                <div className="text-xs uppercase tracking-[0.2em] text-cyan">{col.heading}</div>
                <ul className="mt-4 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        data-cursor-hover
                        className="text-sm text-muted transition-colors hover:text-fog"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-edge/15 pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center gap-4">
            {siteConfig.legalLinks.map((l) => (
              <Link key={l.href} to={l.href} className="hover:text-fog">
                {l.label}
              </Link>
            ))}
            <span className="font-mono-label">{siteConfig.email}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
