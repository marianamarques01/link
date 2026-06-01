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
  /** Anéis pontilhados do CTA final (um único SVG; só a faixa central é visível no viewBox). */
  ctaCircleRings: "/imgs/circle.svg",
} as const;

const CLIENT_LOGO_FILES = [
  "Rectangle 2.png",
  "Rectangle 2(1).png",
  "Rectangle 2(2).png",
  "Rectangle 2(3).png",
  "Rectangle 2(4).png",
  "Rectangle 2(5).png",
  "Rectangle 2(6).png",
  "Rectangle 2(7).png",
  "Rectangle 2(8).png",
  "Rectangle 2(9).png",
  "Rectangle 2(10).png",
  "Rectangle 2(11).png",
  "Rectangle 2(12).png",
  "Rectangle 2(13).png",
  "Rectangle 2(14).png",
  "Rectangle 2(15).png",
  "Rectangle 2(16).png",
  "Rectangle 2(17).png",
  "Rectangle 2(18).png",
  "Rectangle 2(19).png",
  "Rectangle 2(20).png",
  "Rectangle 2(21).png",
  "Rectangle 2(22).png",
  "Rectangle 2(23).png",
  "Rectangle 2(24).png",
] as const;

/** Logos de clientes na faixa animada da home (`public/clients/`). */
export const HOME_CLIENT_LOGOS: readonly string[] = CLIENT_LOGO_FILES.map(
  (file) => `/clients/${encodeURIComponent(file)}`,
);
