import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, BarChart3, Lock, Headphones, Zap, ShieldCheck } from "lucide-react";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";

export const Route = createFileRoute("/area-cliente")({
  head: () => ({
    meta: [
      { title: "Portal GCA — Área do Cliente | Grupo Cipriano Ayala" },
      { name: "description", content: "Acesse seu Dashboard de indicadores ou a Área do Cliente com documentos, contratos e relatórios." },
    ],
  }),
  component: AreaClientePage,
});

function AreaClientePage() {
  return (
    <div className="theme-gca min-h-screen bg-background">
      <Header />
      <main className="relative">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--grad-hero)" }} />
        <div className="container-x pt-12">
          <Link to="/" className="text-sm text-muted-foreground hover:text-ink inline-flex items-center gap-1">
            ← Voltar ao site
          </Link>
        </div>

        <section className="container-x pt-10 pb-6 text-center">
          <span className="pill">— Acesso exclusivo</span>
          <h1 className="mt-5 text-[clamp(2.2rem,4.6vw,3.6rem)] font-bold text-ink leading-tight">
            Bem-vindo ao seu <span className="text-brand">portal GCA</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">
            Escolha por onde deseja entrar: acompanhe indicadores no Dashboard ou acesse sua
            Área do Cliente para documentos, contratos e suporte.
          </p>
        </section>

        <section className="container-x py-12 grid gap-6 lg:grid-cols-2">
          {/* Dashboard */}
          <div className="card-soft p-8 md:p-10 flex flex-col">
            <div className="pill self-start">— Dashboard</div>
            <h2 className="mt-5 text-[clamp(1.6rem,2.4vw,2rem)] font-bold text-ink leading-tight">
              Indicadores e <span className="text-brand">decisões estratégicas</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Plataforma exclusiva com dados em tempo real, KPIs de captação, projetos
              estruturados e métricas de impacto institucional. Tudo com a transparência e a
              segurança que sua instituição precisa.
            </p>
            <ul className="mt-6 space-y-3 text-ink">
              {[
                { i: BarChart3, t: "Relatórios personalizados em tempo real" },
                { i: Zap, t: "Gestão de projetos e indicadores de impacto" },
                { i: ShieldCheck, t: "Compliance, segurança e auditoria" },
              ].map(({ i: Icon, t }) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand/10">
                    <Icon className="h-4 w-4 text-brand" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <a
              href="https://yuripsheraldica-collab.github.io/portal-gca/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 justify-center"
            >
              Acessar Dashboard <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Cliente */}
          <div className="card-soft p-8 md:p-10 flex flex-col">
            <div className="pill self-start">— Área do Cliente</div>
            <h2 className="mt-5 text-[clamp(1.6rem,2.4vw,2rem)] font-bold text-ink leading-tight">
              Tudo o que você precisa, <span className="text-brand">em um só lugar</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Sua área exclusiva para gerenciar contratos, baixar relatórios, acompanhar
              projetos em andamento e contar com atendimento prioritário do time GCA, sempre
              que precisar.
            </p>
            <ul className="mt-6 space-y-3 text-ink">
              {[
                { i: Lock, t: "Acesso seguro e personalizado" },
                { i: Headphones, t: "Suporte dedicado e atendimento prioritário" },
                { i: Zap, t: "Documentos, contratos e relatórios em um só lugar" },
              ].map(({ i: Icon, t }) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand/10">
                    <Icon className="h-4 w-4 text-brand" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <a
              href="https://yuripsheraldica-collab.github.io/portal-gca/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 justify-center"
            >
              Acessar Área do Cliente <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="container-x pb-20 text-center">
          <p className="text-muted-foreground">
            Ainda não é cliente?{" "}
            <LeadFormDialog source="Área do Cliente">
              <button className="font-semibold text-brand hover:underline">
                Fale com um especialista
              </button>
            </LeadFormDialog>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
