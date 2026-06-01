import { publicUrl } from '../utils/publicUrl';

export type GalleryImage = string | { src: string; zoom?: boolean };

export type CaseRelated = {
  slug: string;
  name: string;
  image: string;
};

export type CaseDetail = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  cardImage: string;
  project: {
    title: string;
    content: string[];
    image: string;
  };
  challenge: {
    title: string;
    content: string[];
    images: GalleryImage[];
  };
  solution: {
    title: string;
    content: string[];
    items: string[];
    afterItems?: string[];
  };
  result: {
    title: string;
    content: string[];
    image: string;
  };
  relatedCases: string[];
};

export const cases = {
  "grupo-bamaq": {
    slug: "grupo-bamaq",
    title: "Grupo Bamaq",
    subtitle: "Assessoria de imprensa para reputação, posicionamento e resultado",
    heroImage: publicUrl("/imgs/cases/bamaq.png"),
    cardImage: publicUrl("/imgs/cases/bamaq.png"),
    project: {
      title: "O projeto",
      content: [
        "O Grupo Bamaq, uma das maiores referências do país em automóveis premium, máquinas pesadas e serviços financeiros, buscava fortalecer a presença institucional e comercial de suas diferentes frentes de negócio.",
        "A Link atua na assessoria de imprensa estratégica do grupo, conduzindo um trabalho integrado para as divisões de Automóveis (concessionárias Porsche, GWM e Mercedes-Benz), Máquinas Pesadas e Financeira.",
        "Nosso principal objetivo é ampliar visibilidade, reputação e relevância regional e nacional, garantindo presença qualificada na mídia e fortalecendo o posicionamento das marcas nas cidades em que o grupo atua.",
      ],
      image: publicUrl("/imgs/cases/bamaq/banner.png"),
    },
    challenge: {
      title: "O desafio",
      content: [
        "Em um mercado altamente competitivo, em que a decisão de compra é fortemente influenciada por confiança, reputação e autoridade local, não basta ter presença nacional.",
        "O grande desafio da Bamaq era construir capilaridade de comunicação, conectando a força institucional do grupo às realidades regionais de cada praça.",
        "A complexidade aumentava pela diversidade das operações: diferentes segmentos, públicos distintos, concessionárias em múltiplas cidades e necessidades específicas por mercado.",
        "Ou seja: era preciso manter uma narrativa centralizada de marca, sem perder a aderência local.",
      ],
      images: [
        publicUrl("/imgs/cases/bamaq/image.png"),
        publicUrl("/imgs/cases/bamaq/image2.png"),
        publicUrl("/imgs/cases/bamaq/image3.png"),
        publicUrl("/imgs/cases/bamaq/image4.png"),
      ],
    },
    solution: {
      title: "A solução",
      content: [
        "A Link estruturou uma atuação de atendimento centralizado com linguagem, tom e mensagens estratégicas próprias para cada divisão, aliada a uma divulgação pulverizada com apoio de correspondentes locais, que conhecem profundamente os mercados regionais.",
      ],
      items: [
        "Planejamento estratégico de imprensa por divisão",
        "Regionalização de pautas e narrativas",
        "Relacionamento com imprensa nacional e local",
        "Ativação de correspondentes regionais",
        "Gestão de oportunidades por praça",
        "Produção de releases, artigos e posicionamentos",
        "Monitoramento contínuo de imagem e presença na mídia",
      ],
    },
    result: {
      title: "Resultado",
      content: [
        "945 publicações espontâneas",
        "R$ 10 milhões em retorno de mídia",
        "Ampliação da presença local nas principais praças",
        "Fortalecimento da reputação das marcas representadas",
        "Maior aderência regional da comunicação",
      ],
      image: publicUrl("/imgs/cases/bamaq/banner.png"),
    },
    relatedCases: ["imfg", "galo-inox", "bh-airport"],
  },
  imfg: {
    slug: "imfg",
    title: "IMFG",
    subtitle: "Comunicação 360º para consolidar referência no terceiro setor",
    heroImage: publicUrl("/imgs/cases/imfg.png"),
    cardImage: publicUrl("/imgs/cases/imfg.png"),
    project: {
      title: "O projeto",
      content: [
        "O Instituto Marina e Flávio Guimarães nasceu com o propósito de ampliar o impacto social de iniciativas voltadas para a transformação de vidas em Minas Gerais.",
        "A Link atua em uma frente de comunicação 360º, integrando estratégia, conteúdo, imprensa, comunicação interna, redes sociais e relacionamento com stakeholders para consolidar o Instituto como referência no terceiro setor no estado.",
        "Nosso objetivo é fortalecer a reputação institucional por meio de uma comunicação clara, humana e estratégica, capaz de evidenciar não apenas os projetos apoiados, mas principalmente as histórias, personagens e transformações geradas.",
      ],
      image: publicUrl("/imgs/cases/imfg.png"),
    },
    challenge: {
      title: "O desafio",
      content: [
        "O principal desafio era posicionar o Instituto em um cenário no qual o terceiro setor exige credibilidade, transparência, clareza de propósito e capacidade de mobilização.",
        "Mais do que comunicar ações isoladas, era necessário construir uma narrativa institucional guarda-chuva, que organizasse diferentes frentes de atuação e dialogasse com múltiplos públicos: colaboradores, parceiros, associações, imprensa, comunidades beneficiadas e público em geral.",
        "Outro ponto estratégico foi garantir alinhamento visual, consistência de discurso e unidade de informações em todos os pontos de contato, fortalecendo a percepção de solidez e profissionalismo do Instituto.",
      ],
      images: [],
    },
    solution: {
      title: "A solução",
      content: [
        "A Link desenvolveu uma estratégia integrada de reputação e presença, conectando conteúdo institucional, histórias de impacto e campanhas de mobilização.",
      ],
      items: [
        "Planejamento estratégico de comunicação 360º",
        "Estruturação de narrativa institucional",
        "Produção de conteúdos guarda-chuva com múltiplos desdobramentos",
        "Gestão de redes sociais",
        "Assessoria de imprensa",
        "Campanhas internas de engajamento",
        "Cobertura e divulgação de projetos apoiados",
        "Valorização de personagens e beneficiados",
        "Padronização visual e alinhamento de informações",
        "Estratégia para stakeholders e parceiros",
      ],
      afterItems: [
        "Um dos destaques foi o desenvolvimento do projeto editorial 'Só notícia boa', frente de conteúdo criada para amplificar histórias positivas e dar visibilidade às transformações promovidas pelo Instituto.",
      ],
    },
    result: {
      title: "Resultado",
      content: [
        "+400% de publicações espontâneas",
        "+285% de publicações espontâneas",
        "+1000% de publicações espontâneas",
        "+14 mil visualizações em 5 publicações do projeto 'Só notícia boa'",
        "Alinhamento visual e informacional para todos os públicos estratégicos",
        "Fortalecimento da reputação institucional no terceiro setor",
      ],
      image: publicUrl("/imgs/cases/imfg.png"),
    },
    relatedCases: ["grupo-bamaq", "galo-inox", "bh-airport"],
  },
  "galo-inox": {
    slug: "galo-inox",
    title: "Galo Inox",
    subtitle: "De monumento a movimento de marca: o lançamento do Galo Inox Aperam",
    heroImage: publicUrl("/imgs/cases/galoinox.png"),
    cardImage: publicUrl("/imgs/cases/galoinox.png"),
    project: {
      title: "O projeto",
      content: [
        "A Aperam, cliente da Link há mais de cinco anos, idealizou um presente emblemático para Belo Horizonte e para a torcida atleticana: o Galo Inox Aperam, escultura monumental em aço inox instalada na esplanada da Arena MRV.",
        "Com 8 metros de altura, 13 toneladas e cerca de 4 mil penas em inox, o monumento nasceu para se tornar um novo símbolo da relação entre marca, cidade e paixão pelo futebol.",
        "A Link foi responsável por toda a estratégia de comunicação e lançamento do projeto, desde a criação do naming e posicionamento digital até a construção da narrativa de marca e relacionamento com públicos estratégicos.",
        "O principal objetivo foi conectar emocionalmente a Aperam à torcida do Atlético, reforçando atributos como inovação, resistência, legado e brasilidade do inox.",
      ],
      image: publicUrl("/imgs/cases/galoinox/banner.png"),
    },
    challenge: {
      title: "O desafio",
      content: [
        "O grande desafio era transformar uma entrega institucional em um movimento de marca com forte valor afetivo e potencial de comunidade.",
        "Mais do que lançar um monumento, precisávamos ter a marca para além do ambiente corporativo, transformar a escultura em assunto nas redes e na imprensa, valorizar o inox como protagonista do projeto e ampliar a percepção pública sobre a presença da Aperam na cultura mineira.",
        "A complexidade também envolvia a necessidade de acompanhar toda a jornada do projeto, desde a produção da obra até sua instalação final, garantindo conteúdo, expectativa e storytelling em todas as fases.",
      ],
      images: [
        publicUrl("/imgs/cases/galoinox/image.png"),
        publicUrl("/imgs/cases/galoinox/image2.png"),
        publicUrl("/imgs/cases/galoinox/image3.png"),
        publicUrl("/imgs/cases/galoinox/image4.png"),
      ],
    },
    solution: {
      title: "A solução",
      content: [
        "A Link criou uma estratégia de comunicação 360°, transformando o lançamento em uma experiência multiplataforma e altamente emocional.",
      ],
      items: [
        "Criação do naming @galoinoxaperam",
        "Estratégia editorial e posicionamento do perfil",
        "Planejamento de campanha digital",
        "Conteúdos de bastidores da produção da escultura",
        "Acompanhamento com equipe de filmagem desde a fabricação até a instalação",
        "Ações com influenciadores",
        "Envio de kits personalizados para stakeholders e públicos estratégicos",
        "Coletiva de imprensa",
        "Comunicação da inauguração do monumento",
        "Produção de conteúdos de engajamento orgânico",
        "Ativações com imprensa e comunidade atleticana",
      ],
      afterItems: [
        "A cobertura audiovisual dos bastidores foi um diferencial importante para gerar expectativa, mostrando a grandiosidade do projeto, que envolveu cerca de 100 trabalhadores e mais de 13 mil pontos de solda ao longo de sete meses de produção.",
      ],
    },
    result: {
      title: "Resultado",
      content: [
        "13 mil seguidores conquistados em 3 meses",
        "Forte engajamento orgânico",
        "Alta repercussão espontânea na imprensa esportiva e local",
        "Consolidação do monumento como novo ponto turístico da Arena MRV",
      ],
      image: publicUrl("/imgs/cases/galoinox/banner.png"),
    },
    relatedCases: ["grupo-bamaq", "imfg", "bh-airport"],
  },
  "bh-airport": {
    slug: "bh-airport",
    title: "BH Airport",
    subtitle: "Comunicação integrada para uma operação de alta visibilidade",
    heroImage: publicUrl("/imgs/cases/bhair.png"),
    cardImage: publicUrl("/imgs/cases/bhair.png"),
    project: {
      title: "O projeto",
      content: [
        "O BH Airport, concessionária responsável pela administração do Aeroporto Internacional de Confins, demandava uma atuação estratégica de comunicação capaz de responder à alta complexidade do setor aeroportuário, especialmente em períodos de maior fluxo.",
        "A Link assumiu a assessoria de imprensa do aeroporto, com foco em garantir agilidade no atendimento às demandas da mídia, ampla divulgação de informações de interesse público e fortalecimento da imagem institucional.",
        "O objetivo central do projeto foi construir uma percepção contínua de responsabilidade, segurança e confiança junto aos passageiros, imprensa e stakeholders, especialmente durante a alta temporada.",
      ],
      image: publicUrl("/imgs/cases/bhair/banner.png"),
    },
    challenge: {
      title: "O desafio",
      content: [
        "O setor aéreo opera em um ambiente de alta exposição pública, sensibilidade reputacional e necessidade de resposta imediata.",
        "Em períodos de alta temporada, o volume de pautas relacionadas a fluxo de passageiros, operações especiais, obras e infraestrutura, segurança, serviços ao usuário e crises e intercorrências cresce exponencialmente.",
        "Nesse cenário, o grande desafio era transformar informação operacional em comunicação clara, útil e confiável para milhões de usuários, reduzindo ruídos e fortalecendo a credibilidade do aeroporto.",
        "Além disso, havia a necessidade de preparar a marca para situações críticas, em um ambiente onde vazamentos, fake news e pressão da opinião pública podem escalar em minutos.",
      ],
      images: [
        publicUrl("/imgs/cases/bhair/image.png"),
        publicUrl("/imgs/cases/bhair/image2.png"),
        publicUrl("/imgs/cases/bhair/image3.png"),
        { src: publicUrl("/imgs/cases/bhair/image4.png"), zoom: true },
      ],
    },
    solution: {
      title: "A solução",
      content: [
        "A Link estruturou uma operação de atendimento especializado, dinâmico e orientado por interesse público, garantindo relacionamento próximo com a imprensa e entregas altamente contextualizadas.",
      ],
      items: [
        "Atendimento diário e ágil à imprensa",
        "Produção de pautas de serviço e utilidade pública",
        "Gestão de reputação institucional",
        "Planejamento de alta temporada",
        "Relacionamento estratégico com veículos prioritários",
        "Hiperpersonalização de pautas exclusivas",
        "Cobertura in loco de operações especiais",
        "Suporte em simulações de crise",
      ],
      afterItems: [
        "Um dos destaques foi a estratégia de hiperpersonalização de conteúdo para o jornal O Tempo, no contexto de um simulado de acidente com Airbus A320 e 142 passageiros, com matéria publicada em 29/10/2025.",
        "Nossa atuação incluiu cobertura presencial com seis jornalistas da Link, que participaram ativamente do exercício para reproduzir o ambiente real de pressão da imprensa, disseminação de fake news e vazamentos de informação, testando a capacidade de resposta e gestão de crise do aeroporto.",
        "A ação foi considerada um grande sucesso e reforçou o posicionamento do BH Airport em transparência e preparo operacional.",
      ],
    },
    result: {
      title: "Resultado",
      content: [
        "359 publicações espontâneas",
        "R$ 6,2 milhões em retorno de mídia",
        "Reforço da imagem institucional de segurança e responsabilidade",
        "Alta capilaridade na imprensa regional e nacional",
        "Fortalecimento do protocolo de comunicação em crise",
      ],
      image: publicUrl("/imgs/cases/bhair/banner.png"),
    },
    relatedCases: ["grupo-bamaq", "imfg", "galo-inox"],
  },
} as const satisfies Record<string, CaseDetail>;

export type CaseSlug = keyof typeof cases;

export const casesList = Object.values(cases);

export function getCaseBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return cases[slug as CaseSlug];
}

export function getRelatedCases(slugs: readonly string[]): CaseRelated[] {
  return slugs.flatMap((slug) => {
    const relatedCase = cases[slug as CaseSlug];
    if (!relatedCase) return [];

    return [
      {
        slug: relatedCase.slug,
        name: relatedCase.title,
        image: relatedCase.cardImage,
      },
    ];
  });
}
