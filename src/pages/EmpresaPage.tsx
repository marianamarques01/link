import { Link } from "react-router-dom";
import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FinalCTA } from "../components/services/FinalCTA";
import { publicUrl } from "../utils/publicUrl";
import "./empresa.css";

const carouselImages = [
  {
    src: publicUrl("/imgs/about/img1.png"),
    alt: "Equipe da LINK reunida em ambiente de trabalho",
  },
  {
    src: publicUrl("/imgs/about/img3.png"),
    alt: "Equipe da LINK em reunião no escritorio",
  },
  {
    src: publicUrl("/imgs/about/img4.png"),
    alt: "Equipe da LINK trabalhando em projeto de comunicação",
  },
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
              Desde 1998, ajudamos empresas a construir relevância, fortalecer posicionamentos e se
              conectar de forma mais consistente com seus públicos.
            </p>
            <p>
              Com o tempo, expandimos nossa atuação para além da assessoria de imprensa, desenvolvendo
              uma visão mais ampla, estratégica e integrada da comunicação.
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
              Acreditamos que comunicação é, antes de tudo, sobre pessoas. Sobre criar conexões reais,
              fortalecer relacionamentos e construir experiências que fazem sentido. On ou off-line.
            </p>
          </article>

          <article className="about-pillar">
            <h2>Visão estratégica</h2>
            <p>
              Com um olhar 360° para a comunicação, conectamos estratégia, criatividade e narrativa para
              manter coerência entre a marca e o que ela quer conectar em diferentes canais.
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
