import { createFileRoute } from "@tanstack/react-router";
import { UnitPage } from "@/components/site/UnitPage";

export const Route = createFileRoute("/cataliza")({
  head: () => ({
    meta: [
      { title: "Instituto Cataliza — Educação e inovação social · Grupo Cipriano Ayala" },
      { name: "description", content: "Formação executiva, mentoria e pesquisa aplicada para o terceiro setor." },
    ],
  }),
  component: () => (
    <UnitPage
      theme="theme-cataliza"
      logoSrc="/logos/logo-cataliza.svg"
      logoAlt="Instituto Cataliza"
      eyebrow="Instituto Cataliza"
      title={<>Da ideia à <em className="not-italic text-brand">organização pronta</em> para captar e transformar.</>}
      description="O Instituto Cataliza é o braço de educação e inovação social do Grupo Cipriano Ayala — formando lideranças, fortalecendo organizações e produzindo conhecimento aplicável ao terceiro setor."
      pillarsTitle="Conhecimento aplicado para transformar realidades."
      pillarsBody="Formação executiva, mentoria e pesquisa aplicada — conectando teoria, prática e impacto para gestores e empreendedores sociais."
      pillarsBullets={[
        "Programas de formação para lideranças sociais",
        "Mentorias para empreendedores de impacto",
        "Pesquisa aplicada ao terceiro setor",
        "Cursos abertos e in-company",
      ]}
      pillarsTags={["Formação", "Mentoria", "Inovação", "Impacto social"]}
      servicesTitle="Trilhas de aprendizado para todo o ciclo de vida de uma OSC."
      servicesBody="Programas estruturados em níveis para empreendedores, gestores e conselhos."
      services={[
        { number: "01", title: "Formação Executiva", description: "Programa para gestores de OSCs, fundações e hospitais filantrópicos.", tags: ["Executivo", "Gestão"] },
        { number: "02", title: "Trilha do Empreendedor Social", description: "Da ideia à organização legalmente constituída e pronta para captar.", tags: ["Trilha", "Constituição"] },
        { number: "03", title: "Mentoria 1:1", description: "Acompanhamento individual com mentores experientes do setor.", tags: ["1:1", "Mentor"] },
        { number: "04", title: "Cursos Abertos", description: "Conteúdo prático e acessível para profissionais do terceiro setor.", tags: ["Cursos", "Aberto"] },
        { number: "05", title: "Pesquisa Aplicada", description: "Produção de conhecimento conectado à realidade das organizações.", tags: ["Pesquisa", "Aplicada"] },
        { number: "06", title: "In-company", description: "Programas customizados para equipes e conselhos de grandes OSCs.", tags: ["In-company", "Custom"] },
      ]}
      ctaTitle="Vamos formar a próxima geração de lideranças sociais juntos?"
      ctaBody="Conheça os programas do Instituto Cataliza e fortaleça sua organização com conhecimento aplicado."
    />
  ),
});
