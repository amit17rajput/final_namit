import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import IndustryCard from "../components/IndustryCard";
import StaticNetwork from "../components/StaticNetwork";
import { industries } from "../data/industries";

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries"
        description="How Namitron Infotech approaches healthcare, fintech, education, retail, logistics, manufacturing, and SaaS."
        path="/industries"
      />

      <PageHero
        label="Industries"
        title="Different industries, the same engineering discipline."
        description="The right solution looks different in a hospital system than in a warehouse — but the discovery process that finds it looks the same."
        visual={<StaticNetwork />}
      />

      <Section className="border-t border-edge/10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <IndustryCard key={ind.slug} industry={ind} index={i} />
          ))}
        </div>
      </Section>
    </>
  );
}
