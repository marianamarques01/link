import { Link } from "react-router-dom";
import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FinalCTA } from "../components/services/FinalCTA";
import "./empresa.css";

const carouselImages = [
  { src: "/imgs/about/img1.png", alt: "Equipe da LINK reunida em ambiente de trabalho" },
  { src: "/imgs/about/img2.png", alt: "Equipe da LINK colaborando no escritorio" },
  { src: "/imgs/about/img3.png", alt: "Equipe da LINK em reunião no escritorio" },
  { src: "/imgs/about/img4.png", alt: "Equipe da LINK trabalhando em projeto de comunicação" },
];

export function EmpresaPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = useCallback((direction: number) => {
    const node = carouselRef.current;
    if (!node) return;
    const amount = Math.min(node.clientWidth * 0.8, 480);
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero__orb" aria-hidden="true" />
        <div className="about-hero__inner">
          <h1 id="about-title" className="about-hero__title">
            Experiência
            <br />
            de quem
            <br />
            entende o
            <br />
            projeto por
            <br />
            dentro<span>.</span>
          </h1>

          <div className="about-hero__copy">
            <p>
              Desde 1998, desenvolvemos soluções eficazes de comunicação para empresas que buscam
              relevância, posicionamento e conexão com seus públicos. Ao longo dessa trajetória,
              ampliamos nossa expertise em assessoria de imprensa para diferentes frentes da
              comunicação, consolidando uma visão estratégica e integrada.
            </p>

            <Link className="about-hero__cta" to="/cases">
              Confira nossos cases
            </Link>
          </div>
        </div>
      </section>

      <section className="about-pillars" aria-label="Pilares da LINK">
        <div className="about-pillars__inner">
          <article className="about-pillar">
            <h2>Posicionamento</h2>
            <p>
              Acreditamos que comunicação é, antes de tudo, sobre pessoas. É sobre criar conexões,
              fortalecer relacionamentos e construir experiências relevantes, seja no on ou no off.
            </p>
          </article>

          <article className="about-pillar">
            <h2>Visão estratégica</h2>
            <p>
              Com um olhar 360°, cuidamos da comunicação das marcas com estratégia, criatividade e
              coerência, garantindo alinhamento entre posicionamento, narrativa e desdobramentos nos
              diferentes canais.
            </p>
          </article>
        </div>
      </section>

      <section className="about-carousel" aria-label="Fotos da equipe LINK">
        <div className="about-carousel__controls">
          <button
            type="button"
            className="about-carousel__arrow"
            aria-label="Foto anterior"
            onClick={() => scrollCarousel(-1)}
          >
            <ChevronLeft aria-hidden size={22} strokeWidth={2.25} />
          </button>
          <button
            type="button"
            className="about-carousel__arrow"
            aria-label="Próxima foto"
            onClick={() => scrollCarousel(1)}
          >
            <ChevronRight aria-hidden size={22} strokeWidth={2.25} />
          </button>
        </div>
        <div
          className="about-carousel__track"
          ref={carouselRef}
          role="region"
          aria-roledescription="carrossel"
        >
          {carouselImages.map((image) => (
            <figure className="about-carousel__slide" key={image.src}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
