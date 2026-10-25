import { useState } from "react";
import { Mail, Phone, MapPin, AlertTriangle, CheckCircle2 } from "lucide-react";
import Seo from "../components/Seo";
import Section from "../components/Section";
import RevealText from "../components/RevealText";
import AmbientCanvas from "../three/AmbientCanvas";
import { siteConfig } from "../data/siteConfig";
import { services } from "../data/services";
import { submitContactForm, type ContactFormData } from "../lib/contactApi";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

const BUDGETS = ["Under $10k", "$10k – $50k", "$50k – $150k", "$150k+", "Not sure yet"];

type Status = "idle" | "submitting" | "sent" | "not_configured" | "failed";

export default function Contact() {
  const { reduced } = useMotionPrefs();
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    description: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(): boolean {
    const next: Partial<Record<keyof ContactFormData, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email address.";
    if (!form.service) next.service = "Please select a service.";
    if (!form.description.trim() || form.description.trim().length < 20)
      next.description = "Please describe your project in at least a sentence or two.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    const result = await submitContactForm(form);
    setStatus(result.status === "sent" ? "sent" : result.status);
  }

  function update<K extends keyof ContactFormData>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Start a project with Namitron Infotech — tell us what you're building and we'll get back to you."
        path="/contact"
      />

      <section className="relative overflow-hidden px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-mono-label mb-5 text-xs uppercase text-cyan">Get in touch</p>
            <RevealText
              text="Tell us what you're building."
              as="h1"
              reduced={reduced}
              className="font-display max-w-lg text-4xl leading-tight text-fog md:text-5xl"
            />
            <p className="mt-6 max-w-md text-muted">
              Fill in the form and we'll follow up within two business days. Prefer email or
              phone? Reach us directly below.
            </p>

            <ul className="mt-10 space-y-4 text-sm">
              <li className="flex items-center gap-3 text-muted">
                <Mail className="h-4 w-4 text-cyan" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-fog">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <Phone className="h-4 w-4 text-cyan" aria-hidden="true" />
                <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="hover:text-fog">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>

            <div className="relative mt-12 hidden h-56 md:block" aria-hidden="true">
              <AmbientCanvas />
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-edge/20 bg-navy/50 p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  aria-invalid={!!errors.name}
                  className="field-input"
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  className="field-input"
                />
              </Field>
              <Field label="Company (optional)">
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  className="field-input"
                />
              </Field>
              <Field label="Budget range">
                <select
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className="field-input"
                >
                  <option value="">Select a range</option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Service you need" error={errors.service}>
                <select
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  aria-invalid={!!errors.service}
                  className="field-input"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Not sure">Not sure yet</option>
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Project description" error={errors.description}>
                <textarea
                  rows={5}
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  aria-invalid={!!errors.description}
                  className="field-input resize-none"
                />
              </Field>
            </div>

            <button
              type="submit"
              data-cursor-hover
              disabled={status === "submitting"}
              className="mt-7 w-full rounded-full border border-cyan/50 bg-cyan/10 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-fog transition-colors hover:border-cyan hover:bg-cyan hover:text-space disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send Project Enquiry"}
            </button>

            {status === "sent" && (
              <p className="mt-4 flex items-center gap-2 text-sm text-cyan" role="status">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Thanks — your message has been sent. We'll follow up within two business days.
              </p>
            )}
            {status === "not_configured" && (
              <p className="mt-4 flex items-start gap-2 text-sm text-amber-400" role="alert">
                <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>
                  This form isn't yet connected to an email service, so nothing was sent. Please
                  reach us directly at{" "}
                  <a href={`mailto:${siteConfig.email}`} className="underline">
                    {siteConfig.email}
                  </a>{" "}
                  in the meantime — the site operator can connect this form by setting
                  VITE_CONTACT_ENDPOINT.
                </span>
              </p>
            )}
            {status === "failed" && (
              <p className="mt-4 flex items-center gap-2 text-sm text-red-400" role="alert">
                <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                Something went wrong sending your message. Please email {siteConfig.email} directly.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wide text-muted">{label}</span>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-red-400" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
