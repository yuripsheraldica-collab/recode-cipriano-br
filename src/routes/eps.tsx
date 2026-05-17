import { createFileRoute } from "@tanstack/react-router";
import { UnitPage } from "@/components/site/UnitPage";

export const Route = createFileRoute("/eps")({
  head: () => ({
    meta: [
      { title: "EPS — Escritório de Projetos Sociais · Grupo Cipriano Ayala" },
      { name: "description", content: "Da emenda à prestação de contas — gestão completa de recursos públicos com conformidade total." },
    ],
  }),
  component: () => (
    <UnitPage
      theme="theme-eps"
      logoSrc="/logos/logo-azul.svg"
      logoAlt="EPS — Escritório de Projetos Sociais"
      eyebrow="Escritório de Projetos Sociais"
      title={<>Da emenda à <em className="not-italic text-brand">prestação de contas</em>, com você em cada etapa.</>}
      description="O EPS é o braço técnico do Grupo Cipriano Ayala para gestão de recursos públicos — elaboração de projetos, aprovação, execução e prestação de contas com total conformidade."
      stats={[
        { value: "+R$ 2 bi", label: "em recursos captados" },
        { value: "+100", label: "instituições atendidas" },
        { value: "+8 anos", label: "de experiência" },
        { value: "100%", label: "de aderência à lei" },
      ]}
      pillarsTitle="Projetos sociais com excelência técnica e jurídica."
      pillarsBody="Cuidamos do ciclo completo: do diagnóstico inicial à entrega da prestação de contas final. Todo o processo é conduzido por equipe sênior com expertise em legislação, finanças públicas e gestão."
      pillarsBullets={[
        "Elaboração técnica de projetos para emendas e convênios",
        "Acompanhamento da execução físico-financeira",
        "Conformidade com TCU, CGU, TCEs e órgãos de controle",
        "Prestação de contas digital, transparente e auditável",
      ]}
      pillarsTags={["Projetos técnicos", "Conformidade total", "Execução financeira", "Prestação de contas"]}
      servicesTitle="Tudo o que sua instituição precisa para captar e executar."
      servicesBody="Atuação ponta a ponta na gestão de recursos públicos para hospitais, OSCs e fundações."
      services={[
        { number: "01", title: "Elaboração de Projetos", description: "Construção técnica de projetos alinhados às prioridades de governo e janelas de oportunidade.", tags: ["Emendas", "Convênios", "Editais"] },
        { number: "02", title: "Captação e Aprovação", description: "Articulação técnica e institucional para aprovação de propostas junto a órgãos públicos.", tags: ["Articulação", "Aprovação"] },
        { number: "03", title: "Execução Físico-Financeira", description: "Acompanhamento da execução, fluxo financeiro e indicadores de entrega.", tags: ["Execução", "Indicadores"] },
        { number: "04", title: "Prestação de Contas", description: "Encerramento técnico com conformidade total perante órgãos de controle.", tags: ["TCU", "CGU", "TCEs"] },
        { number: "05", title: "Compliance Público", description: "Assessoria jurídica e técnica para conformidade contínua e auditorias.", tags: ["Jurídico", "Auditoria"] },
        { number: "06", title: "Capacitação", description: "Treinamentos para equipes internas das instituições parceiras.", tags: ["Treinamento", "OSCs"] },
      ]}
      ctaTitle="Vamos estruturar seus próximos projetos públicos com excelência?"
      ctaBody="Nosso time técnico está pronto para conduzir sua instituição da elaboração à prestação de contas."
    />
  ),
});
