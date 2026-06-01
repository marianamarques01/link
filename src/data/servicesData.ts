export type RelatedCase = {
  name: string;
  image: string;
  href?: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  description: string;
  introText: string[];
  heroImage: string;
  heroImageAlt: string;
  highlight: string;
  workDescription: string[];
  items: string[];
  relatedCases: RelatedCase[];
};

export type ServiceOverview = {
  slug: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  cardImage: string;
  cardLines: readonly [string, string];
  cases: RelatedCase[];
};

const caseAssets = {
  bamaq: { name: "Bamaq", image: "/imgs/cases/bamaq.png", href: "/cases/grupo-bamaq" },
  imfg: { name: "IMFG", image: "/imgs/cases/imfg.png", href: "/cases/imfg" },
  galoInox: { name: "Galo Inox", image: "/imgs/cases/galoinox.png", href: "/cases/galo-inox" },
  bhAirport: { name: "BH Airport", image: "/imgs/cases/bhair.png", href: "/cases/bh-airport" },
} as const satisfies Record<string, RelatedCase>;

export const services = {
  "assessoria-de-imprensa": {
    slug: "assessoria-de-imprensa",
    title: "Assessoria de Imprensa",
    description: "Relacionamento com a mídia para construir reputação.",
    introText: [
      "Em um cenário de comunicação em constante evolução, a imprensa - em plataformas digitais ou tradicionais - segue como um dos caminhos mais eficazes para ampliar visibilidade, fortalecer posicionamento e construir reputação. Mais do que divulgar informações, a assessoria de imprensa conecta marcas a pautas relevantes e conversas que realmente importam para a opinião pública.",
    ],
    heroImage: "/imgs/assessoria_imprensa.png",
    heroImageAlt: "Materiais digitais e jornalísticos representando assessoria de imprensa",
    highlight: "Reputação se constrói quando boas histórias encontram os canais certos.",
    workDescription: [
      "Aqui, entendemos que uma assessoria de imprensa eficiente nasce do equilíbrio entre estratégia, relacionamento e credibilidade. Atuamos como ponte entre marcas e jornalistas, com profundo entendimento das dinâmicas do jornalismo, da agenda pública e das oportunidades de exposição espontânea.",
      "Nosso trabalho envolve a construção de narrativas relevantes, relacionamento ativo com veículos e formadores de opinião, gestão de oportunidades e monitoramento contínuo de imagem, transformando histórias em presença qualificada na mídia e em valor reputacional para o negócio.",
    ],
    items: [
      "Planejamento estratégico de comunicação",
      "Diagnósticos e audit media",
      "Relacionamento e engajamento com a imprensa",
      "Produção de releases e artigos",
      "Matrizes de conteúdo personalizado",
      "Eventos exclusivos para jornalistas",
      "Presstrips e experiências de imersão",
      "Estratégias crossmedia e transmedia",
      "Análises de cenário e oportunidades",
      "Monitoramento de imagem e clipping",
    ],
    relatedCases: [caseAssets.bamaq, caseAssets.imfg, caseAssets.galoInox, caseAssets.bhAirport],
  },
  "comunicacao-interna": {
    slug: "comunicacao-interna",
    title: "Comunicação Interna",
    description: "Conexões internas que fortalecem cultura e resultado.",
    introText: [
      "Os colaboradores são os principais porta-vozes de uma empresa e, por isso, a comunicação interna deve receber o mesmo olhar estratégico dedicado aos públicos externos.",
      "Mais do que informar, ela é uma ferramenta essencial para fortalecer a cultura, engajar pessoas, conduzir mudanças e conectar equipes em torno de objetivos comuns.",
    ],
    heroImage: "/imgs/comunicacao_interna.png",
    heroImageAlt: "Equipe em ambiente corporativo com peças de comunicação interna",
    highlight: "Culturas fortes nascem de conversas claras, consistentes e humanas.",
    workDescription: [
      "Nosso trabalho começa pelo entendimento profundo da realidade de cada organização. A partir de diagnósticos, análises de clima e escuta ativa, estruturamos estratégias que unem planejamento, definição de canais, narrativas e jornadas de engajamento.",
      "Desenvolvemos campanhas, ações de relacionamento, programas de endomarketing e treinamentos que aproximam empresa e colaboradores, promovendo pertencimento, alinhamento e clareza sobre o papel de cada pessoa na construção dos resultados do negócio.",
    ],
    items: [
      "Diagnóstico e análise de clima organizacional",
      "Planejamento estratégico de comunicação interna",
      "Campanhas de engajamento com os times",
      "Endomarketing",
      "Treinamento de comunicação para times",
      "Estratégia de canais e de conteúdo",
      "Ações de relacionamento",
      "Storytelling para cultura e propósito",
    ],
    relatedCases: [caseAssets.galoInox, caseAssets.imfg],
  },
  "marketing-de-influencia": {
    slug: "marketing-de-influencia",
    title: "Marketing de Influência",
    description: "Conexões autênticas entre marcas, vozes e comunidades.",
    introText: [
      "Mais do que alcance, influência é sobre credibilidade. Construímos campanhas com creators e narrativas que geram identificação real com os públicos.",
      "Da seleção dos perfis à mensuração dos resultados, desenvolvemos ações que fortalecem reputação, relevância e conexão.",
    ],
    heroImage: "/imgs/marketing_influencia.png",
    heroImageAlt: "Pessoas criando conteúdo para uma ação de marketing de influência",
    highlight: "Influência ganha força quando marca, voz e comunidade compartilham verdade.",
    workDescription: [
      "Desenvolvemos estratégias de influência conectadas ao posicionamento da marca, aos objetivos da campanha e aos públicos que precisam ser mobilizados.",
      "Acompanhamos seleção de perfis, construção de narrativas, relacionamento, gestão de entregas e análise de resultados para transformar presença em conexão relevante.",
    ],
    items: [
      "Planejamento estratégico de campanhas",
      "Curadoria e seleção de creators",
      "Mapeamento de públicos e comunidades",
      "Roteiros e narrativas de campanha",
      "Gestão de relacionamento com influenciadores",
      "Acompanhamento de entregas",
      "Análise de performance",
      "Relatórios de resultados",
    ],
    relatedCases: [caseAssets.galoInox],
  },
  "marketing-de-conteudo": {
    slug: "marketing-de-conteudo",
    title: "Marketing de Conteúdo",
    description: "Conteúdo que posiciona, conecta e gera valor.",
    introText: [
      "Presença digital vai muito além de aparecer com frequência. Ela deve ser relevante, consistente e conectada aos objetivos da marca.",
      "Criamos estratégias de conteúdo alinhadas à jornada do público, transformando informação em relacionamento, autoridade e resultado.",
    ],
    heroImage: "/imgs/marketing%20conteudo.png",
    heroImageAlt: "Peças digitais representando uma estratégia de marketing de conteúdo",
    highlight: "Conteúdo relevante aproxima marcas das conversas que importam.",
    workDescription: [
      "Nosso processo combina planejamento editorial, storytelling, análise de canais e acompanhamento de performance para construir presença consistente.",
      "Da definição de pautas à produção e mensuração, estruturamos conteúdos que fortalecem posicionamento e geram valor para públicos estratégicos.",
    ],
    items: [
      "Planejamento editorial",
      "Definição de pilares de conteúdo",
      "Produção de textos e roteiros",
      "Storytelling institucional",
      "Calendários de publicação",
      "Estratégia de canais",
      "Análise de performance",
      "Relatórios e recomendações",
    ],
    relatedCases: [caseAssets.bamaq, caseAssets.imfg],
  },
  "media-training": {
    slug: "media-training",
    title: "Media Training",
    description: "Porta-vozes preparados para falar com segurança e estratégia.",
    introText: [
      "Em um cenário onde tudo expõe, quem fala importa. O Media Training prepara lideranças para entrevistas, eventos e situações sensíveis, com estratégia e clareza.",
      "Trabalhamos narrativa, postura, linguagem e mensagens-chave para transformar exposição em oportunidade de confiança.",
    ],
    heroImage: "/imgs/media_training.png",
    heroImageAlt: "Porta-voz em preparação para entrevista e comunicação pública",
    highlight: "Boas mensagens ganham potência quando porta-vozes falam com clareza.",
    workDescription: [
      "Preparamos executivos, especialistas e lideranças para diferentes contextos de exposição pública, sempre com foco em segurança, consistência e estratégia.",
      "O trabalho envolve diagnóstico, construção de mensagens, simulações práticas, orientação de postura e preparação para perguntas sensíveis.",
    ],
    items: [
      "Diagnóstico de porta-vozes",
      "Construção de mensagens-chave",
      "Simulações de entrevista",
      "Preparação para temas sensíveis",
      "Treinamento de postura e linguagem",
      "Orientação para eventos",
      "Feedback individualizado",
      "Guias de apoio para porta-vozes",
    ],
    relatedCases: [caseAssets.bamaq, caseAssets.galoInox],
  },
} as const satisfies Record<string, ServiceDetail>;

export type ServiceSlug = keyof typeof services;

export const serviceOverviews: ServiceOverview[] = [
  {
    slug: "assessoria-de-imprensa",
    eyebrow: "Assessoria de imprensa",
    title: services["assessoria-de-imprensa"].description,
    paragraphs: [
      "Assessoria de imprensa vai além do envio de releases. É sobre identificar boas histórias, transformá-las em pautas relevantes e construir presença qualificada nos veículos certos.",
      "Da estratégia ao acompanhamento de cobertura, atuamos para posicionar marcas de forma consistente na esfera pública e fortalecer sua credibilidade.",
    ],
    cardImage: services["assessoria-de-imprensa"].heroImage,
    cardLines: ["Assessoria de", "Imprensa"],
    cases: [caseAssets.bamaq, caseAssets.imfg, caseAssets.galoInox, caseAssets.bhAirport],
  },
  {
    slug: "comunicacao-interna",
    eyebrow: "Comunicação interna",
    title: services["comunicacao-interna"].description,
    paragraphs: [
      "Uma cultura forte começa na forma como a empresa conversa com as pessoas que fazem o negócio acontecer. Comunicação interna é alinhamento, clareza e pertencimento.",
      "Criamos estratégias, campanhas e jornadas de engajamento que aproximam colaboradores do propósito e impulsionam resultados coletivos.",
    ],
    cardImage: services["comunicacao-interna"].heroImage,
    cardLines: ["Comunicação", "Interna"],
    cases: [caseAssets.galoInox, caseAssets.imfg],
  },
  {
    slug: "marketing-de-influencia",
    eyebrow: "Marketing de influência",
    title: "Conexões autênticas entre marcas, vozes e comunidades.",
    paragraphs: [
      "Mais do que alcance, influência é sobre credibilidade. Construímos campanhas com creators e narrativas que geram identificação real com os públicos.",
      "Da seleção dos perfis à mensuração dos resultados, desenvolvemos ações que fortalecem reputação, relevância e conexão.",
    ],
    cardImage: "/imgs/marketing_influencia.png",
    cardLines: ["Marketing de", "Influência"],
    cases: [caseAssets.galoInox],
  },
  {
    slug: "marketing-de-conteudo",
    eyebrow: "Marketing de conteúdo",
    title: "Conteúdo que posiciona, conecta e gera valor.",
    paragraphs: [
      "Presença digital não se sustenta apenas com frequência, mas com relevância. Criamos estratégias de conteúdo alinhadas aos objetivos da marca e à jornada do público.",
      "Com planejamento, storytelling e análise de performance, transformamos conteúdo em relacionamento e resultado.",
    ],
    cardImage: "/imgs/marketing%20conteudo.png",
    cardLines: ["Marketing de", "Conteúdo"],
    cases: [caseAssets.bamaq, caseAssets.imfg],
  },
  {
    slug: "media-training",
    eyebrow: "Media training",
    title: "Porta-vozes preparados para falar com segurança e estratégia.",
    paragraphs: [
      "Em um cenário de alta exposição, cada fala importa. O Media Training prepara lideranças para entrevistas, coletivas, apresentações e momentos de crise.",
      "Trabalhamos narrativa, postura, linguagem e mensagens-chave para transformar a exposição em autoridade e confiança.",
    ],
    cardImage: "/imgs/media_training.png",
    cardLines: ["Media", "Training"],
    cases: [caseAssets.bamaq, caseAssets.galoInox],
  },
];

export function getServiceBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return services[slug as ServiceSlug];
}
