import { createFileRoute } from "@tanstack/react-router";
import { UnitPage } from "@/components/site/UnitPage";

export const Route = createFileRoute("/fundify")({
  head: () => ({
    meta: [
      { title: "Fundify — Captação digital e transparência · Grupo Cipriano Ayala" },
      { name: "description", content: "Plataforma de captação digital, doação recorrente e portal de transparência automatizado." },
    ],
  }),
  component: () => (
    <UnitPage
      theme="theme-fundify"
      logoSrc="/logos/logo-fundify.svg"
      logoAlt="Fundify"
      eyebrow="Fundify"
      title={<>Tecnologia para <em className="not-italic text-brand">captar mais</em> e prestar contas com confiança.</>}
      description="Fundify é a plataforma do GCA para captação digital e transparência. Crowdfunding para causas, doações recorrentes e portal de transparência automático em conformidade com TCU, CGU e TCEs."
      stats={[
        { value: "+R$ 50M", label: "captados em campanhas digitais" },
        { value: "+200", label: "instituições conectadas" },
        { value: "100%", label: "transparência automatizada" },
        { value: "24/7", label: "operação na nuvem" },
      ]}
      pillarsTitle="Doações, transparência e dados — em uma plataforma só."
      pillarsBody="Fundify une o que toda instituição social precisa: ferramentas para arrecadar com público amplo e um portal de transparência que se atualiza sozinho com base nos dados da execução."
      pillarsBullets={[
        "Páginas de campanha customizadas para cada causa",
        "Doações recorrentes via Pix, cartão e boleto",
        "Portal de transparência automatizado",
        "Painéis com indicadores em tempo real",
      ]}
      pillarsTags={["Captação digital", "Portal público", "Dados em tempo real", "Comunidade engajada"]}
      servicesTitle="Plataforma completa para captar e prestar contas."
      servicesBody="Tudo o que uma instituição social precisa para operar com tecnologia de ponta e transparência total."
      services={[
        { number: "01", title: "Crowdfunding", description: "Campanhas para projetos específicos com landing pages, vídeos e gestão de doadores.", tags: ["Campanhas", "Pix", "Cartão"] },
        { number: "02", title: "Doação Recorrente", description: "Programa de mantenedores com cobrança automática e dashboard de retenção.", tags: ["Recorrência", "CRM"] },
        { number: "03", title: "Portal de Transparência", description: "Atualização automática de prestação de contas com base em dados de execução.", tags: ["Transparência", "Auto"] },
        { number: "04", title: "Painéis de Indicadores", description: "KPIs em tempo real para diretoria, conselho e órgãos de controle.", tags: ["KPI", "BI"] },
        { number: "05", title: "Integração GCA", description: "Conexão direta com o EPS para fluxo único do projeto ao doador.", tags: ["EPS", "API"] },
        { number: "06", title: "Compliance Digital", description: "Conformidade com LGPD, PCI e exigências regulatórias do terceiro setor.", tags: ["LGPD", "PCI"] },
      ]}
      ctaTitle="Pronto para captar mais e prestar contas com transparência total?"
      ctaBody="Conecte sua instituição ao Fundify e tenha tecnologia de ponta a serviço da sua causa."
    />
  ),
});
