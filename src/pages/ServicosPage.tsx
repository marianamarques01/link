import { Link } from "react-router-dom";
import { FinalCTA } from "../components/services/FinalCTA";
import { serviceOverviews } from "../data/servicesData";
import "./servicos.css";

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
              src="/imgs/services/image.png"
              alt=""
              width={180}
              height={180}
              aria-hidden="true"
            />
            <p>
              Atuamos em diferentes frentes da comunicação que se complementam e se conectam para
              responder aos desafios específicos de cada empresa. Da relação com a mídia ao diálogo
              com os colaboradores e clientes, nosso trabalho é construir posicionamentos
              consistentes e duradouros.
            </p>
            <p>
              Desenvolvemos estratégias completas e acompanhamos sua implementação, ajustando rotas
              sempre que o cenário exige.
            </p>
          </div>
        </div>
      </section>

      <div className="services-list">
        {serviceOverviews.map((service, index) => (
          <section
            className={`service-block ${index % 2 === 1 ? "service-block--muted" : ""}`}
            aria-labelledby={`service-${index}`}
            key={service.eyebrow}
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
                <p className="service-block__cases-title">Cases relacionados:</p>
                <div className="service-block__case-track">
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
        ))}
      </div>

      <FinalCTA />
    </div>
  );
}
