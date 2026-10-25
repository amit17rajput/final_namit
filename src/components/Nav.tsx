import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AtomMark from "./AtomMark";
import MagneticButton from "./MagneticButton";
import { siteConfig } from "../data/siteConfig";
import { services } from "../data/services";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm tracking-wide transition-colors ${
      isActive ? "text-cyan" : "text-fog/75 hover:text-fog"
    }`;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-edge/15 bg-space/70 backdrop-blur-md">
        <div className="mx-auto flex items-center justify-between px-6 py-4 md:px-10">
          <Link to="/" data-cursor-hover className="flex items-center gap-2.5">
            <AtomMark className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-fog">
              Namitron
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>

            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                data-cursor-hover
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1 text-sm tracking-wide transition-colors ${
                  location.pathname.startsWith("/services") ? "text-cyan" : "text-fog/75 hover:text-fog"
                }`}
              >
                Services
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full z-50 mt-3 w-[560px] -translate-x-1/2 rounded-2xl border border-edge/20 bg-navy/95 p-4 shadow-2xl"
                    role="menu"
                  >
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          role="menuitem"
                          data-cursor-hover
                          className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-space"
                        >
                          <s.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan" aria-hidden="true" />
                          <span>
                            <span className="block text-sm font-medium text-fog">{s.title}</span>
                            <span className="mt-0.5 block text-xs text-muted">{s.tagline}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      to="/services"
                      data-cursor-hover
                      className="mt-2 block rounded-xl p-3 text-center text-xs uppercase tracking-[0.15em] text-cyan hover:bg-space"
                    >
                      View all services →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/technologies" className={linkClass}>
              Technologies
            </NavLink>
            <NavLink to="/industries" className={linkClass}>
              Industries
            </NavLink>
            <NavLink to="/portfolio" className={linkClass}>
              Portfolio
            </NavLink>
            <NavLink to="/blog" className={linkClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </nav>

          <div className="hidden lg:block">
            <MagneticButton to="/contact" enabled className="!px-6 !py-2.5 !text-xs">
              Start a Project
            </MagneticButton>
          </div>

          <button
            type="button"
            data-cursor-hover
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }} className="block h-px w-6 bg-fog" />
            <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="block h-px w-6 bg-fog" />
            <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }} className="block h-px w-6 bg-fog" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ clipPath: "circle(0% at 95% 5%)" }}
            animate={{ clipPath: "circle(150% at 95% 5%)" }}
            exit={{ clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-space px-6 pt-28 pb-10 lg:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-5">
              {siteConfig.nav.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.5 }}
                >
                  <Link to={link.href} data-cursor-hover className="font-display text-3xl text-fog">
                    {link.label}
                  </Link>
                  {link.label === "Services" && (
                    <ul className="mt-3 flex flex-col gap-2 border-l border-edge/20 pl-4">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link to={`/services/${s.slug}`} className="text-sm text-muted hover:text-cyan">
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="mt-10">
              <MagneticButton to="/contact" enabled={false}>
                Start a Project
              </MagneticButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
