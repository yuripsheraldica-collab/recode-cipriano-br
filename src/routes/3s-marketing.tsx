import { createFileRoute } from "@tanstack/react-router";
import { UnitPage } from "@/components/site/UnitPage";

export const Route = createFileRoute("/3s-marketing")({
  head: () => ({
    meta: [
      { title: "3s Marketing — Comunicação para o terceiro setor · Grupo Cipriano Ayala" },
      { name: "description", content: "Agência de comunicação dedicada ao terceiro setor — branding, conteúdo, mídia e captação digital." },
    ],
  }),
  component: () => (
    <UnitPage
      theme="theme-3s"
      logoSrc="/logos/logo-3s.svg"
      logoAlt="3s Marketing"
      eyebrow="3S Marketing"
      title={<>Comunicação que <em className="not-italic text-brand">fortalece marcas</em> e gera doação.</>}
      description="A 3S Marketing é a agência do GCA dedicada exclusivamente ao terceiro setor — branding, conteúdo, mídia e captação digital com o tom certo para causas sociais."
      stats={[
        { value: "+30", label: "marcas atendidas" },
        { value: "+R$ 1 Mi", label: "captados em campanhas digitais" },
        { value: "+1 Mi", label: "pessoas alcançadas por ano" },
        { value: "100%", label: "foco no terceiro setor" },
      ]}
      pillarsTitle="Estratégia, criatividade e dados para causas que importam."
      pillarsBody="Equipe sênior em branding, performance e conteúdo, com profundo entendimento da linguagem e dos limites éticos do setor social."
      pillarsBullets={[
        "Branding e posicionamento de marcas sociais",
        "Sites institucionais e landing pages de captação",
        "Mídia paga e SEO orientados a doação",
        "Conteúdo, vídeos e gestão de redes sociais",
      ]}
      pillarsTags={["Branding", "Sites e SEO", "Conteúdo e vídeo", "Captação digital"]}
      servicesTitle="Tudo o que sua causa precisa para ser vista e apoiada."
      servicesBody="Atuação 360º — da identidade da marca à campanha de doação que entrega resultado."
      services={[
        { number: "01", title: "Branding & Identidade", description: "Construção ou reposicionamento de marca, manuais, naming e narrativa.", tags: ["Marca", "Naming"] },
        { number: "02", title: "Sites e Landing Pages", description: "Sites institucionais, hotsites de campanha e landing pages de captação.", tags: ["Site", "Landing"] },
        { number: "03", title: "Conteúdo e Redes Sociais", description: "Planejamento editorial, produção e gestão de redes sociais.", tags: ["Social", "Conteúdo"] },
        { number: "04", title: "Mídia Paga e SEO", description: "Performance orientada a doação, leads e engajamento qualificado.", tags: ["Ads", "SEO"] },
        { number: "05", title: "Vídeo e Documentário", description: "Storytelling em vídeo para causas, campanhas e relatórios anuais.", tags: ["Vídeo", "Story"] },
        { number: "06", title: "Captação Digital", description: "Campanhas integradas com Fundify para resultado mensurável.", tags: ["Captação", "Fundify"] },
      ]}
      ctaTitle="Vamos transformar sua causa em uma marca que arrecada?"
      ctaBody="Conte com a única agência 360º dedicada exclusivamente ao terceiro setor brasileiro."
    />
  ),
});
