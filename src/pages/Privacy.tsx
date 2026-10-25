import Seo from "../components/Seo";
import Section from "../components/Section";
import { siteConfig } from "../data/siteConfig";

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy" description={`Privacy policy for ${siteConfig.name}.`} path="/privacy" />

      <Section className="pt-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-display text-3xl text-fog md:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted">Last updated: placeholder date — review before publishing.</p>

          <div className="prose-invert mt-10 space-y-6 text-sm leading-relaxed text-muted">
            <p className="rounded-lg border border-edge/25 bg-navy/40 p-4 text-xs text-muted/80">
              This is placeholder policy content for {siteConfig.name} and has not been reviewed
              by legal counsel. Replace it with reviewed, jurisdiction-appropriate language
              before this site goes live.
            </p>

            <section>
              <h2 className="font-display text-xl text-fog">1. Information we collect</h2>
              <p className="mt-2">
                We collect information you provide directly, such as through our contact form
                (name, email, company, and project details), and standard technical data such
                as browser type and pages visited.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-fog">2. How we use information</h2>
              <p className="mt-2">
                Information submitted through our contact form is used solely to respond to
                your enquiry. We do not sell personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-fog">3. Data retention</h2>
              <p className="mt-2">
                We retain enquiry information for as long as reasonably necessary to respond to
                it and maintain business records, after which it is deleted.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-fog">4. Your rights</h2>
              <p className="mt-2">
                Depending on your jurisdiction, you may have rights to access, correct, or
                delete personal information we hold about you. Contact{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-cyan hover:underline">
                  {siteConfig.email}
                </a>{" "}
                to make a request.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-fog">5. Contact</h2>
              <p className="mt-2">
                Questions about this policy can be sent to {siteConfig.email} or {siteConfig.address}.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
