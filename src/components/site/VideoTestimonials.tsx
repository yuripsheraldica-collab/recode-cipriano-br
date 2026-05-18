const VIDEOS = [
  { id: "Fv3m7NUsW1A", title: "Depoimento — Parceiro Institucional" },
  { id: "LYp5GAalvJ8", title: "História de Transformação" },
  { id: "W6pSS5F-G-Q", title: "Impacto na Gestão Pública" },
  { id: "ATo_Lzo9zQ0", title: "Resultados em Captação" },
];

export function VideoTestimonials() {
  return (
    <section id="depoimentos" className="container-x py-20">
      <div className="max-w-2xl">
        <span className="pill">Prova social</span>
        <h2 className="mt-4 text-[clamp(1.9rem,3.2vw,2.8rem)] font-bold text-ink leading-tight">
          Quem trabalha com a gente, conta a história.
        </h2>
        <p className="mt-5 text-muted-foreground text-lg">
          Lideranças e instituições parceiras compartilham os resultados e o impacto do
          trabalho conjunto com o Grupo Cipriano Ayala.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {VIDEOS.map((v) => (
          <div key={v.id} className="card-soft overflow-hidden">
            <div className="relative aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <div className="text-sm font-semibold text-ink">{v.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const STORIES = [
  {
    name: "Santa Casa de Tietê",
    headline: "De déficit estrutural a referência regional",
    body: "Reestruturação financeira e captação de R$ 18M em emendas, viabilizando ampliação de leitos e modernização de equipamentos.",
    metric: "R$ 18M captados",
  },
  {
    name: "Hospital Beneficente",
    headline: "Gestão profissionalizada e ESG implementado",
    body: "Implantação de governança, compliance e relatórios de impacto que destravaram novos parceiros institucionais.",
    metric: "+40% em parcerias",
  },
  {
    name: "FEMICE",
    headline: "Captação nacional com articulação em Brasília",
    body: "Articulação institucional e estruturação técnica de projetos que ampliaram o alcance a múltiplos estados.",
    metric: "5 estados atendidos",
  },
];

export function TransformationStories() {
  return (
    <section className="container-x py-20">
      <div className="max-w-2xl">
        <span className="pill">Histórias de transformação</span>
        <h2 className="mt-4 text-[clamp(1.9rem,3.2vw,2.8rem)] font-bold text-ink leading-tight">
          Resultados reais para instituições reais.
        </h2>
        <p className="mt-5 text-muted-foreground text-lg">
          Cada parceria é uma transformação concreta — em receita, governança e impacto.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {STORIES.map((s) => (
          <article key={s.name} className="card-soft p-7 flex flex-col gap-4">
            <div className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">{s.name}</div>
            <h3 className="text-xl font-semibold text-ink leading-tight">{s.headline}</h3>
            <p className="text-sm text-muted-foreground flex-1">{s.body}</p>
            <div className="stat-num text-2xl">{s.metric}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
