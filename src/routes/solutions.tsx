import { createFileRoute } from "@tanstack/react-router";
import { Coins, DatabaseZap, Gauge, Mail, Network, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import {
  CloudPlatformCard,
  CtaBand,
  Section,
  SectionHead,
  ServiceCard,
} from "@/components/site/primitives";

const TITLE = "Solutions — Azure Migration, Managed Cloud, Security, DevOps & FinOps | ZensusTech";
const DESCRIPTION =
  "Use ZenOps to understand your cloud environment and ZensusTech expertise to transform it: migration, managed cloud services, security and compliance, DevOps, cost optimization and Microsoft 365.";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const SOLUTIONS = [
  {
    icon: Network,
    eyebrow: "Solution 01",
    title: "Cloud Migration & Modernization",
    copy: "Move legacy workloads to Azure, AWS or GCP with structured planning, migration and post-migration validation.",
    capabilities: [
      "Cloud readiness",
      "Migration strategy",
      "Infrastructure modernization",
      "Hybrid / multi-cloud design",
      "Data migration",
      "Post-migration validation",
    ],
    cta: "Plan a Migration",
  },
  {
    icon: Gauge,
    eyebrow: "Solution 02",
    title: "Managed Cloud Services",
    copy: "24×7 monitoring, management, security and optimization so your team can focus on business priorities.",
    capabilities: [
      "24×7 monitoring",
      "Incident response",
      "Patch management",
      "Performance tuning",
      "Backup & disaster recovery",
      "Security monitoring",
      "Cost governance",
      "Health reporting",
    ],
    cta: "Talk to a Cloud Expert",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Solution 03",
    title: "Cloud Security & Compliance",
    copy: "Security that goes beyond configuration — assessment, detection and data protection, with evidence readiness in mind.",
    capabilities: [
      "Security assessment",
      "Compliance audit",
      "Threat detection",
      "Data protection",
      "Encryption",
      "Key management",
      "Evidence readiness",
    ],
    cta: "Request Azure Audit Evidence Report",
  },
  {
    icon: DatabaseZap,
    eyebrow: "Solution 04",
    title: "DevOps & Automation",
    copy: "Ship faster with automated pipelines, reproducible infrastructure and consistent release practices.",
    capabilities: [
      "CI/CD",
      "Infrastructure as Code",
      "Cloud automation",
      "Release management",
      "Kubernetes",
      "Configuration management",
    ],
    cta: "Talk to a Cloud Expert",
  },
  {
    icon: Coins,
    eyebrow: "Solution 05",
    title: "Cost Optimization / FinOps",
    copy: "Bring cloud spending under control with continuous analysis, right-sizing and clear savings reporting.",
    capabilities: ["Cost analysis", "Resource optimization", "Budget management", "Savings reporting"],
    cta: "Check My Azure Environment",
  },
  {
    icon: Mail,
    eyebrow: "Solution 06",
    title: "Microsoft 365",
    copy: "Move collaboration to Microsoft 365 with secure configuration and adoption support for your teams.",
    capabilities: [
      "Office 365 migration",
      "Teams deployment",
      "Security configuration",
      "User training",
    ],
    cta: "Talk to a Cloud Expert",
  },
];

function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden surface-mesh">
        <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-15 animate-grid-drift" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8 md:py-28">
          <Reveal>
            <p className="eyebrow text-azure-bright">Solutions</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-navy-foreground sm:text-5xl lg:text-6xl">
              From Cloud Intelligence to Cloud Transformation
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/70 sm:text-lg">
              Use ZenOps to understand your environment. Use ZensusTech expertise to transform it.
            </p>
          </Reveal>
        </div>
      </section>

      <Section tone="light">
        <div className="grid gap-6">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 50}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHead
          eyebrow="Platforms"
          title="ZenOps Is Azure-Focused. ZensusTech Services Are Multi-Cloud."
          copy="The product goes deep on Azure. Our delivery teams work across the major cloud platforms."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <Reveal>
            <CloudPlatformCard
              featured
              name="Microsoft Azure"
              role="ZenOps + services"
              points={[
                "ZenOps intelligence layer",
                "Security, identity and governance visibility",
                "Cost and operational optimization",
                "Managed Azure operations",
              ]}
            />
          </Reveal>
          <Reveal delay={80}>
            <CloudPlatformCard
              name="Amazon Web Services"
              role="ZensusTech services"
              points={["Migration and modernization", "Managed cloud services", "Security and compliance work", "Cost optimization"]}
            />
          </Reveal>
          <Reveal delay={160}>
            <CloudPlatformCard
              name="Google Cloud Platform"
              role="ZensusTech services"
              points={["Migration and modernization", "Managed cloud services", "DevOps and automation", "Cost optimization"]}
            />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Find the Right Cloud Strategy for Your Business"
        primary={{ label: "Book Free Cloud Assessment", to: "/contact" }}
        secondary={{ label: "Explore ZenOps", to: "/zenops" }}
      />
    </>
  );
}
