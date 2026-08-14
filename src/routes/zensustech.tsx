import { createFileRoute } from "@tanstack/react-router";
import { Cloud, Handshake, HeadphonesIcon, Layers, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import {
  CaseStudyCard,
  CtaBand,
  FeatureCard,
  FlowSteps,
  MetricCard,
  Section,
  SectionHead,
  StatCard,
  TestimonialCard,
} from "@/components/site/primitives";

const TITLE = "ZensusTech — Cloud Technology, Security & Managed Operations Partner";
const DESCRIPTION =
  "ZensusTech is a next-generation cloud technology and digital solutions company helping growing businesses in India and the UK adopt, modernize and optimize their cloud environments.";

export const Route = createFileRoute("/zensustech")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/zensustech" },
    ],
    links: [{ rel: "canonical", href: "/zensustech" }],
  }),
  component: ZensusTechPage,
});

const WHY = [
  { icon: Cloud, title: "Multi-Cloud Expertise", copy: "Delivery experience across Azure, AWS and Google Cloud." },
  { icon: Users, title: "SMB-Focused Approach", copy: "Built for growing organizations, not only large enterprises." },
  { icon: ShieldCheck, title: "Security First", copy: "Security and compliance considered from design onwards." },
  { icon: HeadphonesIcon, title: "24×7 Support", copy: "Continuous monitoring and response for critical environments." },
  { icon: Layers, title: "Scalable Solutions", copy: "Architectures that grow with demand instead of being rebuilt." },
  { icon: Handshake, title: "Partnership Mindset", copy: "Long-term engagement, not one-off project handovers." },
];

const DELIVERY = [
  { title: "Discover", copy: "Understand the environment." },
  { title: "Design", copy: "Create the target architecture." },
  { title: "Implement", copy: "Execute the transformation." },
  { title: "Optimize", copy: "Continuously improve." },
];

const TESTIMONIALS = [
  {
    quote:
      "ZensusTech helped us modernise our cloud setup and gave us far more confidence in how our environment is run.",
    author: "Client team",
    company: "Codinker",
  },
  {
    quote:
      "Our deployment process and reliability improved significantly after working with the ZensusTech team.",
    author: "Client team",
    company: "ByteKode Labs",
  },
  {
    quote:
      "The team designed a cloud platform that scales with our growth while keeping costs predictable.",
    author: "Client team",
    company: "UrbanVistaa",
  },
];

function ZensusTechPage() {
  return (
    <>
      <section className="relative overflow-hidden surface-mesh">
        <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-15 animate-grid-drift" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8 md:py-28">
          <Reveal>
            <p className="eyebrow text-azure-bright">The company behind ZenOps</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-navy-foreground sm:text-5xl lg:text-6xl">
              Technology Should Enable Your Business — Not Become Its Bottleneck.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/70 sm:text-lg">
              ZensusTech is a next-generation cloud technology and digital solutions company helping businesses
              adopt, modernize and optimize digital environments. We focus on secure, scalable cloud foundations
              and intelligent applications for growing organizations.
            </p>
          </Reveal>
        </div>
      </section>

      <Section tone="light">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <MetricCard value={5} suffix="+" label="Years Experience" />
          </Reveal>
          <Reveal delay={70}>
            <MetricCard value={150} suffix="+" label="Projects" />
          </Reveal>
          <Reveal delay={140}>
            <MetricCard value={98} suffix="%" label="Client Retention" />
          </Reveal>
          <Reveal delay={210}>
            <StatCard value="India + UK" label="Delivery Presence" />
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <SectionHead eyebrow="Why ZensusTech" title="Depth Where Growing Businesses Need It Most" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 60}>
              <FeatureCard icon={w.icon} title={w.title} copy={w.copy} className="bg-background" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHead eyebrow="Delivery model" title="A Structured Path From Discovery to Continuous Improvement" invert />
        <div className="mt-14">
          <FlowSteps steps={DELIVERY} invert />
        </div>
      </Section>

      <Section tone="light" id="case-studies">
        <SectionHead eyebrow="Proof" title="Outcomes We've Delivered" />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <Reveal>
            <CaseStudyCard
              region="UK Retail SMB"
              title="Cloud cost and resilience programme"
              results={["32% Cost Reduction", "99.9% Uptime", "4× Scalability"]}
            />
          </Reveal>
          <Reveal delay={80}>
            <CaseStudyCard
              region="India SaaS Startup"
              title="DevOps and delivery acceleration"
              results={["90% Faster Deployments", "75% Fewer Errors", "3× Team Productivity"]}
            />
          </Reveal>
          <Reveal delay={160}>
            <CaseStudyCard
              region="Manufacturing Firm"
              title="Managed cloud operations"
              results={["40% Cost Savings", "100% Compliance", "60% Faster Issue Resolution"]}
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <SectionHead eyebrow="Testimonials" title="What Our Clients Say" />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.company} delay={i * 80}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Need more than a product?"
        title="ZenOps Gives You Intelligence. ZensusTech Gives You the Expertise to Act on It."
        primary={{ label: "Talk to a Cloud Expert", to: "/contact" }}
        secondary={{ label: "Explore ZenOps", to: "/zenops" }}
      />
    </>
  );
}
