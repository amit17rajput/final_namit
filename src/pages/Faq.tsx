import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import FaqAccordion from "../components/FaqAccordion";
import StaticAtom from "../components/StaticAtom";
import { faqGroups } from "../data/faq";

export default function Faq() {
  return (
    <>
      <Seo
        title="FAQ"
        description="Answers to common questions about Namitron Infotech's services, process, pricing, and support."
        path="/faq"
      />

      <PageHero
        label="FAQ"
        title="Answers, not sales copy."
        description="Questions we actually get, grouped by services, process, pricing, and support."
        visual={<StaticAtom animate={false} />}
      />

      <Section className="border-t border-edge/10">
        <div className="mx-auto max-w-3xl space-y-14">
          {faqGroups.map((group) => (
            <Reveal key={group.group}>
              <h2 className="font-display mb-2 text-2xl text-fog">{group.group}</h2>
              <FaqAccordion items={group.items} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
