import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="px-6 pt-10 md:px-10">
      <ol className="mx-auto flex max-w-7xl items-center gap-2 text-xs uppercase tracking-wide text-muted">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <ChevronRight className="h-3 w-3" aria-hidden="true" />}
            {item.href ? (
              <Link to={item.href} className="hover:text-cyan">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-fog/70">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
