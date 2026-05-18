import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export interface UnitStat {
  value: string;
  label: string;
}
export interface UnitService {
  number: string;
  title: string;
  description: string;
  tags: string[];
}
export interface UnitPageProps {
  theme: string;
  logoSrc: string;
  logoAlt: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  stats?: UnitStat[];
  pillarsTitle: string;
  pillarsBody: string;
  pillarsBullets: string[];
  pillarsTags: string[];
  servicesTitle: string;
  servicesBody: string;
  services: UnitService[];
  ctaTitle: string;
  ctaBody: string;
}

export function UnitPage(p: UnitPageProps) {
  return (
    <div className={`${p.theme} min-h-screen bg-background`}>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(70% 60% at 50% 0%, color-mix(in oklab, var(--brand) 18%, transparent), transparent 70%), var(--grad-hero)",
            }}
          />
          <div className="container-x pt-16 pb-20">
            <Link to="/" className="text-sm text-muted-foreground hover:text-ink inline-flex items-center gap-1">
              ← Voltar ao Grupo
            </Link>
            <div className="mt-8 flex items-center gap-3">
              <img src={p.logoSrc} alt={p.logoAlt} className="h-9 w-auto" />
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                · Grupo Cipriano Ayala
              </span>
            </div>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] text-ink">
              {p.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{p.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cta" className="btn-primary">Falar com a equipe <ArrowRight className="h-4 w-4" /></a>
              <a href="#servicos" className="btn-ghost">Conhecer a atuação</a>
            </div>

            {p.stats && p.stats.length > 0 && (
              <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {p.stats.map((s) => (
                  <div key={s.label} className="card-soft p-6">
                    <div className="stat-num">{s.value}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Pillars */}
        <section className="container-x py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="pill">01 — Nossa atuação</span>
              <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-ink leading-tight">
                {p.pillarsTitle}
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">{p.pillarsBody}</p>
              <ul className="mt-6 space-y-3">
                {p.pillarsBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-ink">
                    <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-brand/15 text-brand">
                      <Check className="h-3 w-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {p.pillarsTags.map((t, i) => (
                <div key={t} className="card-soft p-6 aspect-square flex flex-col justify-end"
                  style={{
                    background: i % 2 === 0
                      ? "linear-gradient(160deg, color-mix(in oklab, var(--brand) 12%, white), white)"
                      : "white",
                  }}>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-2 text-xl font-semibold text-ink">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="container-x py-20">
          <div className="max-w-3xl">
            <span className="pill">02 — Serviços</span>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-ink leading-tight">
              {p.servicesTitle}
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">{p.servicesBody}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {p.services.map((s) => (
              <article key={s.number} className="card-soft p-7 flex flex-col gap-4 transition-transform hover:-translate-y-1">
                <div className="text-xs font-semibold tracking-[0.2em] text-brand">{s.number}</div>
                <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="container-x py-20">
          <div
            className="rounded-3xl p-10 md:p-16 text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, var(--brand), var(--brand-2))" }}
          >
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <h2 className="relative text-[clamp(1.6rem,3vw,2.4rem)] font-bold max-w-2xl">{p.ctaTitle}</h2>
            <p className="relative mt-4 max-w-2xl text-white/85">{p.ctaBody}</p>
            <div className="relative mt-8">
              <a href="mailto:contato@ciprianoayala.com.br"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink hover:bg-white/90">
                Fale com a equipe <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
