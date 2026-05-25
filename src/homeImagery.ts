/**
 * Contrato de assets da home (`public/` servido como raiz URL).
 * Adicione ficheiros com estes nomes em `public/imgs/` ou ajuste os caminhos.
 * Hero: `public/imgs/home.png` (ajuste aqui para outro asset).
 */
export const HOME_IMAGES = {
  heroOffice: "/imgs/home.png",
  service01: "/imgs/assessoria_imprensa.png",
  service02: "/imgs/comunicacao_interna.png",
  service03: "/imgs/marketing_influencia.png",
  service04: "/imgs/marketing%20conteudo.png",
  valuesWall: "/imgs/values-link-wall.jpg",
  caseBamaq: "/imgs/cases/bamaq.png",
  caseBhAirport: "/imgs/cases/bhair.png",
  caseGaloInox: "/imgs/cases/galoinox.png",
  caseImfg: "/imgs/cases/imfg.png",
  partnersStrip: "/imgs/home-partners-strip.jpg",
  /** Anéis pontilhados do CTA final (um único SVG; só a faixa central é visível no viewBox). */
  ctaCircleRings: "/imgs/circle.svg",
} as const;

/** Logos opcionais na barra de parceiros (deixar vazio e usar apenas placeholders até existirem). */
export const HOME_PARTNER_LOGOS: readonly string[] = [
  "/imgs/partner-01.png",
  "/imgs/partner-02.png",
  "/imgs/partner-03.png",
  "/imgs/partner-04.png",
  "/imgs/partner-05.png",
  "/imgs/partner-06.png",
];
