import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SouthAmericaMap } from "@/components/site/SouthAmericaMap";
import { ArrowRight, Sparkles, ShieldCheck, BarChart3, Lock, HeartHandshake } from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";
import founder from "@/assets/founder.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grupo Cipriano Ayala — Excelência e inovação para transformar instituições" },
      { name: "description", content: "Ecossistema de soluções estratégicas para gestão pública e terceiro setor. Inteligência fiscal, captação, ESG e tecnologia em um só lugar." },
      { property: "og:title", content: "Grupo Cipriano Ayala" },
      { property: "og:description", content: "Ecossistema de soluções para gestão pública e terceiro setor." },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "+R$ 2 bi", label: "em recursos captados" },
  { value: "+1.200", label: "projetos estruturados" },
  { value: "+450", label: "instituições atendidas" },
  { value: "+8 anos", label: "de experiência" },
  { value: "Brasil + Mundo", label: "atuação e expansão internacional" },
];

const units = [
  { slug: "/eps", logo: "/logos/logo-azul.svg", name: "Escritório de Projetos Sociais [EPS]", desc: "Assessoria completa na gestão de recursos públicos: elaboração, aprovação, execução e prestação de contas." },
  { slug: "/fundify", logo: "/logos/logo-fundify.svg", name: "Fundify", desc: "Plataforma de captação de recursos e crowdfunding para projetos de impacto." },
  { slug: "/certisafe", logo: "/logos/logo-certisafe.svg", name: "Certisafe", desc: "Certificações ESG e consultoria em compliance e governança institucional." },
  { slug: "/cataliza", logo: "/logos/logo-cataliza.svg", name: "Instituto Cataliza", desc: "Fomento à educação, pesquisa e inovação social para transformar realidades." },
  { slug: "/3s-marketing", logo: "/logos/logo-3s.svg", name: "3s Marketing", desc: "Comunicação estratégica para fortalecer marcas e gerar impacto." },
  { slug: "/otimistas", logo: "/logos/logo-otimistas.svg", name: "Otimistas", desc: "Articulação institucional em Brasília para captação de recursos e network de alto nível." },
];

const timeline = [
  { year: "2016", title: "O início da jornada", desc: "Atuação na Santa Casa de Tietê com captação de recursos, gestão de emendas parlamentares e estruturação de projetos para instituições filantrópicas." },
  { year: "2018", title: "Nascimento da empresa", desc: "Abertura da empresa com serviços especializados para hospitais filantrópicos." },
  { year: "2020", title: "Dedicação integral e Sorocaba", desc: "Cipriano passa a atuar integralmente como empresário; mudança para Sorocaba aproxima a empresa dos clientes." },
  { year: "2021", title: "Expansão e autoridade", desc: "Participação ativa em eventos da FEHOSP, palestras e capacitações sobre gestão de recursos públicos." },
  { year: "2024", title: "Consolidação nacional", desc: "Mais de 100 clientes atendidos e R$ 1,5 bilhão em projetos gerenciados. Nova sede própria na Av. JK." },
  { year: "2025", title: "Nasce o Grupo Cipriano Ayala", desc: "Ecossistema com Otimistas, 3S Marketing, Instituto Cataliza, CertSafe e Fundify." },
  { year: "2026", title: "Internacionalização", desc: "Expansão internacional levando metodologia, experiência e visão de impacto além das fronteiras brasileiras." },
];

const partners = ["Santa Casa", "Hospital São Luiz", "FEMICE", "CEJAM", "Bairral", "Hospital Beneficente", "Casa de David", "Hospital Piedade", "FESFBA", "Fehosmt"];

function Home() {
  return (
    <div className="theme-gca min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10" style={{ background: "var(--grad-hero)" }} />
          <div className="container-x grid gap-12 pt-12 pb-24 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="pill"><Sparkles className="h-3.5 w-3.5" /> Grupo Cipriano Ayala</span>
              <h1 className="mt-5 text-[clamp(2.4rem,5.2vw,4.4rem)] font-bold leading-[1.02] text-ink">
                Excelência e inovação <span className="text-brand">para transformar instituições</span> e gerar impacto real.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Somos um ecossistema de soluções estratégicas para gestão pública e terceiro setor.
                Inteligência fiscal, captação, ESG e tecnologia em um só lugar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#solucoes" className="btn-primary">Conheça nossas soluções <ArrowRight className="h-4 w-4" /></a>
                <a href="#contato" className="btn-ghost">Área do Cliente</a>
              </div>
            </div>

            {/* Hero image — single photo (corrected: no extra circles) */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] shadow-elegant ring-1 ring-black/5">
                <img src={heroTeam} alt="Equipe Grupo Cipriano Ayala em reunião estratégica" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute top-6 right-6 rounded-full bg-white/95 backdrop-blur px-4 py-2 text-sm font-semibold text-brand shadow-lg ring-1 ring-black/5 flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Impacto desde 2009
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="container-x pb-16">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {stats.map((s) => (
                <div key={s.label} className="card-soft p-6">
                  <div className="stat-num">{s.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS / UNITS */}
        <section id="solucoes" className="container-x py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="pill">Nosso ecossistema</span>
              <h2 className="mt-4 text-[clamp(1.9rem,3.2vw,2.8rem)] font-bold text-ink leading-tight">
                Soluções integradas para cada desafio da sua instituição.
              </h2>
            </div>
            <a href="#unidades" className="btn-ghost">Conheça todas as unidades</a>
          </div>

          <div id="unidades" className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {units.map((u) => (
              <Link
                key={u.slug}
                to={u.slug}
                className="card-soft p-7 flex flex-col gap-5 group transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="h-12 flex items-center">
                  <img src={u.logo} alt={u.name} className="h-9 w-auto max-w-[180px]" />
                </div>
                <h3 className="text-lg font-semibold text-ink">{u.name}</h3>
                <p className="text-sm text-muted-foreground flex-1">{u.desc}</p>
                <span className="text-sm font-semibold text-brand inline-flex items-center gap-1">
                  Saiba mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* HISTORY / TIMELINE */}
        <section id="grupo" className="container-x py-20">
          <div className="max-w-2xl">
            <span className="pill">Nossa história</span>
            <h2 className="mt-4 text-[clamp(1.9rem,3.2vw,2.8rem)] font-bold text-ink leading-tight">
              Uma trajetória construída com propósito e visão de futuro.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Ao longo dos anos, fortalecemos nossa atuação, expandindo fronteiras e impactando milhares de vidas por meio de uma gestão ética, transparente e inovadora.
            </p>
          </div>
          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <div key={t.year} className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                    <div className="absolute left-4 md:left-1/2 top-2 h-3 w-3 rounded-full bg-brand md:-translate-x-1/2 ring-4 ring-background" />
                    <div className="text-sm font-semibold text-brand">{t.year}</div>
                    <h3 className="mt-1 text-xl font-semibold text-ink">{t.title}</h3>
                  </div>
                  <div className="pl-12 md:pl-12 mt-2 md:mt-0 text-muted-foreground">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="container-x py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-accent to-background ring-1 ring-border">
                <img src={founder} alt="Cipriano Ayala — fundador" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div>
              <span className="pill">Nosso fundador</span>
              <h2 className="mt-4 text-[clamp(1.9rem,3.2vw,2.8rem)] font-bold text-ink">Cipriano Ayala</h2>
              <p className="mt-5 text-muted-foreground text-lg">
                Empresário, consultor e visionário, Cipriano Ayala dedica sua trajetória a transformar a gestão pública e o terceiro setor no Brasil.
                Lidera um ecossistema que une estratégia, inovação e propósito para gerar impacto real.
              </p>
              <blockquote className="mt-6 border-l-4 border-brand pl-5 italic text-ink">
                "Acreditamos que uma gestão <strong>inteligente e transparente</strong> é a chave para transformar recursos em <strong>oportunidades</strong> e pessoas em protagonistas de suas histórias."
                <footer className="mt-3 not-italic text-sm text-muted-foreground">— Cipriano Ayala</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="container-x py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl">
              <span className="pill">Parceiros</span>
              <h2 className="mt-4 text-[clamp(1.9rem,3vw,2.6rem)] font-bold text-ink">Instituições que caminham conosco</h2>
            </div>
            <a href="#contato" className="btn-ghost">Seja um parceiro</a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {partners.map((p) => (
              <div key={p} className="card-soft px-4 py-6 text-center text-sm font-semibold text-ink/80">
                {p}
              </div>
            ))}
          </div>
        </section>

        {/* DASHBOARD */}
        <section id="resultados" className="container-x py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="pill">Tecnologia e transparência</span>
              <h2 className="mt-4 text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold text-ink leading-tight">
                Dashboard inteligente para decisões estratégicas.
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">
                Acompanhe indicadores, projetos, captações e resultados em tempo real com nossa plataforma exclusiva.
              </p>
              <ul className="mt-6 space-y-3 text-ink">
                {[
                  { i: BarChart3, t: "Relatórios personalizados" },
                  { i: Sparkles, t: "Indicadores de impacto" },
                  { i: HeartHandshake, t: "Gestão de projetos" },
                  { i: ShieldCheck, t: "Segurança e compliance" },
                ].map(({ i: Icon, t }) => (
                  <li key={t} className="flex items-center gap-3"><Icon className="h-5 w-5 text-brand" /> {t}</li>
                ))}
              </ul>
            </div>

            {/* Stylized dashboard mock */}
            <div className="card-soft p-6">
              <div className="flex items-center gap-2 pb-4 border-b border-border">
                <span className="h-3 w-3 rounded-full bg-destructive/60" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
                <span className="ml-3 text-xs text-muted-foreground">GCA · Painel de Indicadores</span>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-5">
                {["Captação", "Projetos", "Aderência"].map((k, idx) => (
                  <div key={k} className="rounded-2xl bg-accent/60 p-4">
                    <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{k}</div>
                    <div className="mt-2 text-xl font-bold text-ink">{["R$ 218M", "184", "99%"][idx]}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-44 rounded-2xl bg-gradient-to-br from-brand/10 via-brand/5 to-transparent p-4 relative overflow-hidden">
                <svg viewBox="0 0 400 160" className="absolute inset-0 w-full h-full">
                  <polyline
                    fill="none"
                    stroke="oklch(0.62 0.2 250)"
                    strokeWidth="2.5"
                    points="0,120 40,100 80,110 120,80 160,90 200,60 240,70 280,40 320,55 360,30 400,40"
                  />
                  <polyline
                    fill="oklch(0.62 0.2 250)"
                    fillOpacity="0.12"
                    stroke="none"
                    points="0,120 40,100 80,110 120,80 160,90 200,60 240,70 280,40 320,55 360,30 400,40 400,160 0,160"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT AREA */}
        <section className="container-x py-20">
          <div className="rounded-3xl card-soft p-8 md:p-12 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="pill">Área do cliente</span>
              <h2 className="mt-4 text-[clamp(1.7rem,2.6vw,2.2rem)] font-bold text-ink">
                Tudo o que você precisa, em um só lugar.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Sua área exclusiva com documentos, contratos, relatórios e atendimento prioritário.
              </p>
              <ul className="mt-5 space-y-2 text-ink">
                <li className="flex items-center gap-3"><Lock className="h-4 w-4 text-brand"/> Acesso seguro</li>
                <li className="flex items-center gap-3"><HeartHandshake className="h-4 w-4 text-brand"/> Suporte dedicado</li>
                <li className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-brand"/> Agilidade nos processos</li>
              </ul>
              <a href="#contato" className="btn-primary mt-6">Acessar minha área <ArrowRight className="h-4 w-4"/></a>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand/20 via-brand/5 to-accent grid place-items-center">
              <div className="text-center px-6">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-white grid place-items-center shadow-lg ring-1 ring-border">
                  <Lock className="h-7 w-7 text-brand" />
                </div>
                <div className="mt-4 font-semibold text-ink">Portal seguro 24/7</div>
                <div className="mt-1 text-sm text-muted-foreground">Documentos, contratos e relatórios</div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERNATIONALIZATION — South America focused */}
        <section className="container-x py-20">
          <div className="max-w-2xl">
            <span className="pill">Atuação regional</span>
            <h2 className="mt-4 text-[clamp(1.9rem,3vw,2.6rem)] font-bold text-ink leading-tight">
              Da nossa sede no Brasil para toda a América do Sul.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Atuamos em parceria com organizações da região, com foco no Mercosul, para ampliar oportunidades,
              compartilhar conhecimento e gerar impacto regional a partir do Brasil.
            </p>
          </div>
          <div className="mt-10">
            <SouthAmericaMap />
          </div>
        </section>

        {/* CONTACT CTA */}
        <section id="contato" className="container-x py-20">
          <div className="rounded-3xl p-10 md:p-16 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--brand), var(--brand-2))" }}>
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <h2 className="relative text-[clamp(1.8rem,3vw,2.6rem)] font-bold max-w-2xl">
              Vamos transformar juntos a gestão da sua instituição?
            </h2>
            <p className="relative mt-4 max-w-2xl text-white/85">
              Fale com nossos especialistas e descubra como podemos gerar mais impacto e resultados.
            </p>
            <a href="mailto:contato@ciprianoayala.com.br" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink hover:bg-white/90">
              Fale com um especialista <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
