import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="surface-navy border-t border-navy-foreground/10">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <span className="text-base font-extrabold text-navy-foreground">ZensusTech</span>
          </div>
          <p className="mt-4 text-sm font-bold text-azure-bright">Stronger Security. Smarter Operations.</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
            Next-generation cloud technology and digital solutions for growing businesses across India and the UK.
          </p>
        </div>

        <nav aria-label="ZenOps and Solutions">
          <h2 className="eyebrow text-navy-foreground/60">ZenOps</h2>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
            <li>
              <Link to="/zenops" className="hover:text-azure-bright">
                Intelligent Azure Operations
              </Link>
            </li>
          </ul>
          <h2 className="eyebrow mt-8 text-navy-foreground/60">Solutions</h2>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
            {[
              "Cloud Migration",
              "Managed Cloud Services",
              "Cloud Security & Compliance",
              "DevOps & Automation",
              "Cost Optimization",
              "Application Modernization",
            ].map((item) => (
              <li key={item}>
                <Link to="/solutions" className="hover:text-azure-bright">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="eyebrow text-navy-foreground/60">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
            <li>
              <Link to="/zensustech" className="hover:text-azure-bright">
                ZensusTech
              </Link>
            </li>
            <li>
              <Link to="/industries" className="hover:text-azure-bright">
                Industries
              </Link>
            </li>
            <li>
              <Link to="/zensustech" hash="case-studies" className="hover:text-azure-bright">
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-azure-bright">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-navy-foreground/60">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/75">
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 text-azure-bright" aria-hidden="true" />
              <a href="mailto:info@zensustech.com" className="hover:text-azure-bright">
                info@zensustech.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 text-azure-bright" aria-hidden="true" />
              <a href="tel:+919823101112" className="hover:text-azure-bright">
                +91 9823 10 11 12
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 text-azure-bright" aria-hidden="true" />
              India | United Kingdom
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10 py-6">
        <p className="mx-auto max-w-7xl px-5 text-xs text-navy-foreground/50 sm:px-8">
          © {new Date().getFullYear()} ZensusTech. ZenOps is a product of ZensusTech.
        </p>
      </div>
    </footer>
  );
}
