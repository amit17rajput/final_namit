import Seo from "../components/Seo";
import Section from "../components/Section";
import { siteConfig } from "../data/siteConfig";

export default function Terms() {
  return (
    <>
      <Seo title="Terms & Conditions" description={`Terms and conditions for ${siteConfig.name}.`} path="/terms" />

      <Section className="pt-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-display text-3xl text-fog md:text-4xl">Terms &amp; Conditions</h1>
          <p className="mt-3 text-sm text-muted">Last updated: placeholder date — review before publishing.</p>

          <div className="prose-invert mt-10 space-y-6 text-sm leading-relaxed text-muted">
            <p className="rounded-lg border border-edge/25 bg-navy/40 p-4 text-xs text-muted/80">
              This is placeholder terms content for {siteConfig.name} and has not been reviewed
              by legal counsel. Replace it with reviewed, jurisdiction-appropriate language,
              and a real services agreement, before this site goes live.
            </p>

            <section>
              <h2 className="font-display text-xl text-fog">1. Use of this site</h2>
              <p className="mt-2">
                This website is provided for informational purposes about {siteConfig.name}'s
                services. Content, including portfolio and case study pages, may include
                clearly labeled concept projects created for demonstration purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-fog">2. Project engagements</h2>
              <p className="mt-2">
                Any actual client engagement is governed by a separate, signed statement of
                work or services agreement, not by this website's content.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-fog">3. Intellectual property</h2>
              <p className="mt-2">
                Site content, design, and branding are the property of {siteConfig.name} unless
                otherwise noted.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-fog">4. Limitation of liability</h2>
              <p className="mt-2">
                Information on this site is provided "as is" without warranties of any kind.
                Final liability terms should be defined in a reviewed services agreement.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-fog">5. Contact</h2>
              <p className="mt-2">
                Questions about these terms can be sent to {siteConfig.email}.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
