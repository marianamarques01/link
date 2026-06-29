import { Link } from "react-router-dom";
import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FinalCTA } from "../components/services/FinalCTA";
import { serviceOverviews } from "../data/servicesData";
import { publicUrl } from "../utils/publicUrl";
import "./servicos.css";

function ServiceBlock({
  service,
  index,
}: {
  service: (typeof serviceOverviews)[number];
  index: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTrack = useCallback((dir: number) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({ left: dir * Math.min(node.clientWidth * 0.7, 300), behavior: "smooth" });
  }, []);

  return (
    <section
      className={`service-block ${index % 2 === 1 ? "service-block--muted" : ""}`}
      aria-labelledby={`service-${index}`}
    >
      <div className="service-block__inner">
        <article className="service-block__content">
          <p className="service-block__eyebrow">
            <span aria-hidden="true" />
            {service.eyebrow}
          </p>
          <h2 id={`service-${index}`} className="service-block__title">
            {service.title}
          </h2>
          <div className="service-block__body">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link to={`/servicos/${service.slug}`} className="service-block__button">
            Saiba mais
          </Link>
        </article>

        <aside className="service-block__cases" aria-label={`Cases de ${service.eyebrow}`}>
          <div className="service-block__cases-header">
            <p className="service-block__cases-title">Cases relacionados:</p>
            {service.cases.length > 1 && (
              <div className="service-block__case-arrows">
                <button
                  type="button"
                  className="service-block__case-arrow"
                  aria-label="Cases anteriores"
                  onClick={() => scrollTrack(-1)}
                >
                  <ChevronLeft aria-hidden size={18} strokeWidth={2.25} />
                </button>
                <button
                  type="button"
                  className="service-block__case-arrow"
                  aria-label="Próximos cases"
                  onClick={() => scrollTrack(1)}
                >
                  <ChevronRight aria-hidden size={18} strokeWidth={2.25} />
                </button>
              </div>
            )}
          </div>
          <div className="service-block__case-track" ref={trackRef}>
            {service.cases.map((relatedCase) => (
              <figure className="service-case" key={`${service.eyebrow}-${relatedCase.name}`}>
                <img src={relatedCase.image} alt="" loading="lazy" decoding="async" />
                <figcaption>{relatedCase.name}</figcaption>
              </figure>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export function ServicosPage() {
  return (
    <div className="services-page">
      <section className="services-hero" aria-labelledby="services-title">
        <div className="services-hero__inner">
          <h1 id="services-title" className="services-hero__title">
            <span>
              Visão 360<span className="services-hero__dot">.</span>
            </span>
            <span>Comunicação</span>
            <span>
              Integrada<span className="services-hero__dot">.</span>
            </span>
          </h1>

          <div className="services-hero__copy">
            <img
              className="services-hero__seal"
              src={publicUrl("/imgs/services/image.png")}
              alt=""
              width={180}
              height={180}
              aria-hidden="true"
            />
            <p>
              A comunicação de uma empresa acontece em várias frentes e todas elas precisam conversar
              entre si. Da imprensa ao relacionamento com colaboradores e clientes, trabalhamos para
              construir posicionamentos consistentes e duradouros.
            </p>
            <p>
              Criamos estratégias completas e acompanhamos sua implementação, com flexibilidade para
              ajustar rotas sempre que necessário.
            </p>
          </div>
        </div>
      </section>

      <div className="services-list">
        {serviceOverviews.map((service, index) => (
          <ServiceBlock key={service.eyebrow} service={service} index={index} />
        ))}
      </div>

      <FinalCTA />
    </div>
  );
}
