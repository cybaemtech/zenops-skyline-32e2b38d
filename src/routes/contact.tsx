import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import contactAudio from "@/assets/contact-audio.mp3.asset.json";
import { BackgroundAudio } from "@/components/site/BackgroundAudio";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, Section } from "@/components/site/primitives";

const TITLE = "Book an Azure Assessment — ZenOps & ZensusTech Cloud Experts";
const DESCRIPTION =
  "Tell us about your Azure environment and challenges across security, compliance, cost and operations. We'll help identify the right next step.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const CONTACTS = [
  { icon: Mail, label: "Email", value: "info@zensustech.com", href: "mailto:info@zensustech.com" },
  { icon: Phone, label: "Phone", value: "+91 9823 10 11 12", href: "tel:+919823101112" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 9823 10 11 12", href: "https://wa.me/919823101112" },
  { icon: MapPin, label: "Locations", value: "India | United Kingdom" },
];

function ContactPage() {
  return (
    <>
      <BackgroundAudio src={contactAudio.url} loop={false} />

      <section className="relative overflow-hidden surface-mesh">
        <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-15 animate-grid-drift" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8 md:py-24">
          <Reveal>
            <p className="eyebrow text-azure-bright">Book assessment</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-navy-foreground sm:text-5xl">
              Let's Find Out What Your Azure Environment Is Hiding.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/70 sm:text-lg">
              Tell us about your Azure environment and the business challenges you're facing. We'll help identify
              the right next step.
            </p>
          </Reveal>
        </div>
      </section>

      <Section tone="light">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-4">
              {CONTACTS.map((c) => (
                <div key={c.label} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                    <c.icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="eyebrow mt-4 text-muted-foreground">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block text-base font-bold text-foreground hover:text-primary">
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base font-bold text-foreground">{c.value}</p>
                  )}
                </div>
              ))}
              <div className="rounded-2xl border border-primary/25 bg-accent/60 p-6">
                <p className="text-sm font-bold text-accent-foreground">What happens next</p>
                <ol className="mt-3 space-y-2 text-sm text-accent-foreground/85">
                  <li>1. We review your environment details.</li>
                  <li>2. We scope a focused Azure assessment.</li>
                  <li>3. You get a prioritised view of risk, cost and gaps.</li>
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title="Your Azure Environment Shouldn't Be a Black Box."
        primary={{ label: "Book My Azure Assessment", to: "/contact" }}
        secondary={{ label: "Talk to a ZenOps Expert", to: "/zenops" }}
      />
    </>
  );
}
