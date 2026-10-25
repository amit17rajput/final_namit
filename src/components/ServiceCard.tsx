import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "../data/services";
import TiltCard from "./TiltCard";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

export default function ServiceCard({ service }: { service: Service }) {
  const { interactive } = useMotionPrefs();
  const Icon = service.icon;

  return (
    <Link to={`/services/${service.slug}`} data-cursor-hover className="block h-full">
      <TiltCard enabled={interactive} className="h-full">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-edge/30 bg-space">
              <Icon className="h-5 w-5 text-cyan" aria-hidden="true" />
            </span>
            <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-cyan" aria-hidden="true" />
          </div>
          <h3 className="mt-6 font-display text-xl text-fog">{service.title}</h3>
          <p className="mt-3 flex-1 text-sm text-muted">{service.summary}</p>
          <ul className="mt-5 space-y-1.5 text-xs text-muted/90">
            {service.benefits.slice(0, 2).map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-cyan" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </TiltCard>
    </Link>
  );
}
