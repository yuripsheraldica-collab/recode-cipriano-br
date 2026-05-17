import { createFileRoute } from "@tanstack/react-router";
import { UnitPage } from "@/components/site/UnitPage";

export const Route = createFileRoute("/certisafe")({
  head: () => ({
    meta: [
      { title: "Certisafe — Certificação ESG e governança · Grupo Cipriano Ayala" },
      { name: "description", content: "Certificação independente em compliance, governança, ESG e transparência." },
    ],
  }),
  component: () => (
    <UnitPage
      theme="theme-certisafe"
      logoSrc="/logos/logo-certisafe.svg"
      logoAlt="Certisafe"
      eyebrow="Certisafe"
      title={<>A certificação que <em className="not-italic text-brand">abre portas</em> para captar mais.</>}
      description="CertSafe é a certificação independente que atesta a maturidade da sua organização em compliance, governança, ESG e transparência — credibilidade que se traduz em mais recursos."
      stats={[
        { value: "6", label: "pilares avaliados" },
        { value: "+150", label: "instituições certificadas" },
        { value: "ISO", label: "metodologia internacional" },
        { value: "ESG", label: "incorporado à avaliação" },
      ]}
      pillarsTitle="Compliance, governança e ESG em uma certificação só."
      pillarsBody="Avaliamos sua instituição em 6 pilares — Governança, Compliance, Financeiro, Operações, ESG e Transparência — entregando um selo público que comprova maturidade e idoneidade."
      pillarsBullets={[
        "Diagnóstico inicial gratuito da maturidade",
        "Avaliação independente em 6 pilares",
        "Selo público reconhecido por financiadores",
        "Plano de evolução com indicadores claros",
      ]}
      pillarsTags={["Compliance", "Governança", "Transparência", "Selo público"]}
      servicesTitle="Certificação que se traduz em credibilidade real."
      servicesBody="Trilhas de certificação adaptadas ao porte e à maturidade de cada organização."
      services={[
        { number: "01", title: "Diagnóstico de Maturidade", description: "Análise inicial dos 6 pilares com plano de ação para evolução.", tags: ["Diagnóstico", "Plano"] },
        { number: "02", title: "Trilha de Certificação", description: "Acompanhamento estruturado para alcance dos níveis Bronze, Prata e Ouro.", tags: ["Trilha", "Níveis"] },
        { number: "03", title: "Auditoria Independente", description: "Avaliação externa com metodologia inspirada em padrões ISO e GRI.", tags: ["Auditoria", "ISO"] },
        { number: "04", title: "Selo CertSafe", description: "Selo público reconhecido por financiadores, governos e parceiros.", tags: ["Selo", "Público"] },
        { number: "05", title: "ESG Aplicado", description: "Apoio para integrar critérios ESG à operação e à comunicação.", tags: ["ESG", "Operação"] },
        { number: "06", title: "Renovação Anual", description: "Manutenção contínua da maturidade certificada com avaliações periódicas.", tags: ["Renovação", "Contínuo"] },
      ]}
      ctaTitle="Certifique sua instituição e amplie sua capacidade de captação."
      ctaBody="O selo CertSafe é o atalho entre maturidade institucional e novos recursos."
    />
  ),
});
