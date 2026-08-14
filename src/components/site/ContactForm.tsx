import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const COMPANY_SIZES = ["1–20", "21–50", "51–100", "101–250", "251–500", "500+"];
const CLOUDS = ["Microsoft Azure", "AWS", "Google Cloud", "Hybrid / Multi-cloud", "On-premises", "Not sure"];
const AZURE_SIZE = [
  "1 subscription",
  "2–5 subscriptions",
  "6–15 subscriptions",
  "15+ subscriptions",
  "Not sure",
];
const CHALLENGES = [
  "Security",
  "Compliance",
  "Cloud Costs",
  "Azure Operations",
  "Identity / Access",
  "Infrastructure Visibility",
  "Migration",
  "Modernization",
  "DevOps",
  "Managed Services",
  "Other",
];

const fieldClass =
  // 16px on phones so iOS Safari doesn't zoom the viewport when a field is focused.
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/30 sm:text-sm";
const labelClass = "mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-3xl border border-primary/30 bg-card p-10 text-center shadow-glow">
        <CheckCircle2 className="mx-auto size-10 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-extrabold">Thanks — your details are noted.</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Share the same details with{" "}
          <a href="mailto:info@zensustech.com" className="font-bold text-primary">
            info@zensustech.com
          </a>{" "}
          or call +91 9823 10 11 12 and our team will scope your Azure assessment.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <h2 className="text-2xl font-extrabold">Let's Start With Your Environment</h2>
      <p className="mt-2 text-sm text-muted-foreground">Fields marked * are required.</p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="fullName">
            Full Name*
          </label>
          <input id="fullName" name="fullName" required className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Business Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="+91 …" />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            Company Name*
          </label>
          <input id="company" name="company" required className={fieldClass} placeholder="Company" />
        </div>
        <div>
          <label className={labelClass} htmlFor="role">
            Job Role
          </label>
          <input id="role" name="role" className={fieldClass} placeholder="CTO, IT Head, DevOps…" />
        </div>
        <div>
          <label className={labelClass} htmlFor="size">
            Company Size
          </label>
          <select id="size" name="size" className={fieldClass} defaultValue="">
            <option value="">Select</option>
            {COMPANY_SIZES.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="cloud">
            Current Cloud Platform
          </label>
          <select id="cloud" name="cloud" className={fieldClass} defaultValue="">
            <option value="">Select</option>
            {CLOUDS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="azureSize">
            Azure Environment Size
          </label>
          <select id="azureSize" name="azureSize" className={fieldClass} defaultValue="">
            <option value="">Select</option>
            {AZURE_SIZE.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="challenge">
            Primary Challenge
          </label>
          <select id="challenge" name="challenge" className={fieldClass} defaultValue="">
            <option value="">Select</option>
            {CHALLENGES.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={fieldClass}
            placeholder="Tell us what you're trying to solve in your Azure environment"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-glow transition-all hover:brightness-110"
      >
        Book My Azure Assessment
      </button>
    </form>
  );
}
