import { Link } from "react-router-dom";
import { useCallback, useRef, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight, Copy, Newspaper, ShieldCheck, Star } from "lucide-react";
import { HOME_CLIENT_LOGOS, HOME_IMAGES } from "../homeImagery";
import { serviceOverviews } from "../data/servicesData";
import { FinalCTA } from "../components/services/FinalCTA";
import "./home.css";

const HOME_CASES_ITEMS = [
  {
    src: HOME_IMAGES.caseBamaq,
    label: "Bamaq",
    anchor: "case-bamaq",
    slug: "grupo-bamaq",
    squareTile: false,
  },
  {
    src: HOME_IMAGES.caseBhAirport,
    label: "BH Airport",
    anchor: "case-bh-airport",
    slug: "bh-airport",
    squareTile: false,
  },
  {
    src: HOME_IMAGES.caseGaloInox,
    label: "Galo Inox",
    anchor: "case-galo-inox",
    slug: "galo-inox",
    squareTile: true,
  },
  {
    src: HOME_IMAGES.caseImfg,
    label: "IMFG",
    anchor: "case-imfg",
    slug: "imfg",
    squareTile: true,
  },
] as const;

const DIFERENCIAIS_ITEMS = [
  {
    icon: Newspaper,
    title: "Onde a reputação ganha voz",
    body: "Construir reputação passa por construir confiança. E poucas ferramentas são tão poderosas para isso quanto uma relação sólida, transparente e estratégica com a imprensa.",
  },
  {
    icon: Copy,
    title: "Uma só estratégia, muitas vozes",
    body: "Quando cada frente de comunicação trabalha em sintonia, a mensagem ganha força. Conectamos ações, alinhamos discursos e garantimos que tudo faça sentido para todos os públicos.",
  },
  {
    icon: Star,
    title: "Experiência que vem da prática",
    body: "Nossa experiência foi construída a partir de projetos diversos, com desafios reais e contextos complexos.",
  },
  {
    icon: ShieldCheck,
    title: "Mais do que comunicar, construir confiança",
    body: "Em comunicação, cada ação deixa uma marca. Por isso, responsabilidade, discrição e compromisso com resultados duradouros são inegociáveis para nós.",
  },
] as const;

export function HomePage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = useCallback((direction: number) => {
    const node = carouselRef.current;
    if (!node) return;
    const amount = Math.min(node.clientWidth * 0.55, 420);
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  }, []);

  const onCarouselKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollCarousel(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollCarousel(-1);
      }
    },
    [scrollCarousel],
  );

  return (
    <div className="home-page">
      <section className="hero hero--landing" aria-label="Destaque">
        <div className="hero--landing__bg" aria-hidden>
          <div className="hero--landing__stripe" />
          <div className="hero--landing__photo-wrap">
            <video
              className="hero--landing__video"
              src="/04-27_LINK-VIDEO-SITE-1.MOV"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
            />
          </div>
        </div>

        <div className="hero--landing__content">
          <h1 className="hero--landing__title">
            <span className="hero--landing__title-row">
              Criatividade que
              <br />
              aproxima,
              <br />
              <span className="hero--landing__hl">estratégia que</span>
              <br />
              <span className="hero--landing__hl">transforma.</span>
            </span>
          </h1>

          <p className="hero--landing__sub">
            Desde 1998 criando soluções em comunicação <br />
            que conectam ideias e fortalecem marcas.
          </p>

          <Link className="hero--landing__cta hero--landing__cta--outline" to="/a-empresa">
            Conheça a Link
          </Link>
        </div>
      </section>

      <section className="home-intro" aria-labelledby="home-intro-title">
        <div className="home-intro__inner page__inner home-page__wide">
          <div className="home-intro__col home-intro__col--lead">
            <p className="home-intro__eyebrow">
              <span className="home-intro__eyebrow-line" aria-hidden />
              Visão integrada
            </p>
            <h2 id="home-intro-title" className="home-intro__title">
              Comunicação
              <br />
              não acontece
              <br />
              <span className="home-intro__title-last-line">
                em partes<span className="home-intro__title-period">.</span>
              </span>
            </h2>
          </div>
          <div className="home-intro__col home-intro__col--copy">
            <p className="home-intro__p">
              Uma entrevista, uma campanha interna, um post nas redes sociais ou a fala de um porta-voz podem
              parecer ações isoladas. Mas, para quem está do outro lado, tudo faz parte da mesma percepção
              sobre um negócio.
            </p>
            <p className="home-intro__p">
              Por isso, olhamos para a comunicação de forma integrada. Nosso papel é conectar histórias em
              uma estratégia única, autêntica e que faça sentido para os objetivos do cliente.
            </p>
          </div>
        </div>
      </section>

      <section
        id="home-servicos"
        className="home-services"
        aria-labelledby="home-services-title"
      >
        <div className="home-services__shell page__inner home-page__wide">
          <header className="home-services__head">
            <p className="home-services__eyebrow">
              <span className="home-services__eyebrow-line" aria-hidden />
              Áreas de atuação
            </p>
            <div className="home-services__title-row">
              <h2 id="home-services-title" className="home-services__title">
                Frentes diferentes,
                <br />
                um <span className="home-services__hl">único</span> objetivo.
              </h2>
              <div className="home-services__arrows">
                <button
                  type="button"
                  className="home-services__arrow home-services__arrow--prev"
                  aria-label="Áreas de atuação anteriores"
                  onClick={() => scrollCarousel(-1)}
                >
                  <ChevronLeft aria-hidden size={22} strokeWidth={2.25} />
                </button>
                <button
                  type="button"
                  className="home-services__arrow home-services__arrow--next"
                  aria-label="Próximas áreas de atuação"
                  onClick={() => scrollCarousel(1)}
                >
                  <ChevronRight aria-hidden size={22} strokeWidth={2.25} />
                </button>
              </div>
            </div>
          </header>

          <div
            className="home-services__track-wrap"
            ref={carouselRef}
            role="region"
            aria-roledescription="carrossel"
            aria-label="Áreas de atuação"
            tabIndex={0}
            onKeyDown={onCarouselKeyDown}
          >
            <div className="home-services__track">
              {serviceOverviews.map((s, i) => {
                const caption = `${s.cardLines[0]} ${s.cardLines[1]}`;
                return (
                  <Link
                    key={s.slug}
                    to={`/servicos/${s.slug}`}
                    className="home-services__card"
                    aria-label={`Ver serviço de ${caption}`}
                  >
                    <div className="home-services__media">
                      <img
                        src={s.cardImage}
                        alt=""
                        className="home-services__img"
                        decoding="async"
                        loading={i === 0 ? "eager" : "lazy"}
                        width={480}
                        height={640}
                      />
                      <div className="home-services__media-shade" aria-hidden />
                      <div className="home-services__label">
                        {s.cardLines[0]}
                        <br />
                        {s.cardLines[1]}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="home-values" id="diferenciais" aria-labelledby="home-values-title">
        <div className="home-values__inner page__inner home-page__wide">
          <div className="home-values__text">
            <p className="home-values__eyebrow">
              <span className="home-values__eyebrow-line" aria-hidden />
              Diferenciais
            </p>
            <h2 id="home-values-title" className="home-values__heading">
              Experiência estratégica com atuação prática
              <span className="home-values__heading-dot" aria-hidden>
                .
              </span>
            </h2>
            <ul className="home-values__list">
              {DIFERENCIAIS_ITEMS.map(({ icon: Icon, title, body }) => (
                <li key={title} className="home-values__item">
                  <span className="home-values__icon" aria-hidden>
                    <Icon size={26} strokeWidth={1.35} />
                  </span>
                  <div className="home-values__item-copy">
                    <div className="home-values__item-title">{title}</div>
                    <p className="home-values__item-body">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="home-values__media">
            <div className="home-values__media-frame">
              <video
                className="home-values__video"
                src="/04-27_LINK-VIDEO-SITE-2.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-cases" aria-labelledby="home-cases-title">
        <div className="home-cases__inner page__inner home-page__wide">
          <div className="home-cases__intro">
            <div className="home-cases__intro-left">
              <p className="home-cases__eyebrow">
                <span className="home-cases__eyebrow-line" aria-hidden />
                Cases
              </p>
              <h2 id="home-cases-title" className="home-cases__title">
                Experiência construída no dia a dia<span className="home-cases__title-dot">.</span>
              </h2>
            </div>
            <div className="home-cases__intro-right">
              <p className="home-cases__lead">
                Cada projeto é único. Nosso papel é transformar cenários complexos em caminhos claros,
                conectando prioridades e resultados.
              </p>
              <Link to="/cases" className="home-cases__cta">
                Ver todos
              </Link>
            </div>
          </div>

          <div className="home-cases__grid">
            {HOME_CASES_ITEMS.map((item) => (
              <figure key={item.label} id={item.anchor} className="home-cases__card-wrap">
                <Link
                  to={`/cases/${item.slug}`}
                  className={
                    item.squareTile ? "home-cases__tile home-cases__tile--square" : "home-cases__tile"
                  }
                  aria-label={`Ver case ${item.label}`}
                >
                  <img
                    src={item.src}
                    alt=""
                    className="home-cases__tile-img"
                    loading="lazy"
                    decoding="async"
                    width={512}
                    height={512}
                  />
                </Link>
                <figcaption className="home-cases__card-label">{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="home-partners" aria-label="Clientes e parceiros">
        <div className="home-partners__marquee-wrap">
          <div className="home-partners__marquee">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="home-partners__track"
                aria-hidden={copy === 1 ? true : undefined}
              >
                {HOME_CLIENT_LOGOS.map((src) => (
                  <li key={`${copy}-${src}`} className="home-partners__item">
                    <img
                      className="home-partners__logo"
                      src={src}
                      alt=""
                      decoding="async"
                      loading="lazy"
                      height={80}
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
