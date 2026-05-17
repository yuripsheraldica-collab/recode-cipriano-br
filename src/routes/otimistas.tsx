import { createFileRoute } from "@tanstack/react-router";
import { UnitPage } from "@/components/site/UnitPage";

export const Route = createFileRoute("/otimistas")({
  head: () => ({
    meta: [
      { title: "Otimistas — Articulação institucional em Brasília · Grupo Cipriano Ayala" },
      { name: "description", content: "Captação de recursos públicos, articulação institucional e network de alto nível em Brasília." },
    ],
  }),
  component: () => (
    <UnitPage
      theme="theme-otimistas"
      logoSrc="/logos/logo-otimistas.svg"
      logoAlt="Otimistas"
      eyebrow="Otimistas"
      title={<>Articulação que faz <em className="not-italic text-brand">recursos chegarem</em> onde mais importa.</>}
      description="A Otimistas é o braço de articulação institucional do Grupo Cipriano Ayala em Brasília. Captação de recursos públicos, network de alto nível e presença estratégica nos corredores de decisão do país."
      stats={[
        { value: "+8 anos", label: "de articulações em Brasília" },
        { value: "+R$ 2 bi", label: "em recursos viabilizados para o terceiro setor" },
        { value: "+300", label: "instituições atendidas em todo o país" },
        { value: "100%", label: "foco em causas de impacto social" },
      ]}
      pillarsTitle="Quando a articulação certa acontece, o impacto se multiplica."
      pillarsBody="Em Brasília, decisões de bilhões de reais são tomadas todos os dias. A Otimistas garante que sua organização esteja na sala certa, na hora certa, com a abordagem certa — transformando agendas políticas em recursos executados para causas reais."
      pillarsBullets={[
        "Acesso direto a tomadores de decisão em Brasília",
        "Equipe sênior com trajetória no setor público",
        "Network construído ao longo de anos de atuação",
        "Integração com todo o ecossistema GCA",
      ]}
      pillarsTags={["Foco estratégico", "Articulação direta", "Rede consolidada", "Presença em Brasília"]}
      servicesTitle="Articulação completa para quem precisa de resultado real."
      servicesBody="Da identificação da oportunidade à execução do recurso — tudo conduzido por quem conhece os caminhos de Brasília."
      services={[
        { number: "01", title: "Captação de Recursos Públicos", description: "Identificação e viabilização de emendas, convênios e editais federais.", tags: ["Emendas", "Convênios"] },
        { number: "02", title: "Articulação Institucional", description: "Relacionamento estratégico com Congresso, ministérios e órgãos federais.", tags: ["Congresso", "Ministérios"] },
        { number: "03", title: "Inteligência Política", description: "Monitoramento de agendas, relatorias e janelas de oportunidade em tempo real.", tags: ["Monitoramento", "Agenda"] },
        { number: "04", title: "Network de Alto Nível", description: "Conexões estratégicas com lideranças do setor público e privado.", tags: ["Network", "Lideranças"] },
        { number: "05", title: "Presença em Brasília", description: "Representação contínua para garantir velocidade e proximidade nas decisões.", tags: ["Brasília", "Presença"] },
        { number: "06", title: "Integração GCA", description: "Conexão direta com EPS, Fundify e demais unidades para execução completa.", tags: ["EPS", "Fundify"] },
      ]}
      ctaTitle="Sua causa merece estar na sala onde as decisões acontecem."
      ctaBody="Fale com a equipe Otimistas e leve sua organização aos corredores certos de Brasília."
    />
  ),
});
