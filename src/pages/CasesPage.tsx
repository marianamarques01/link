import { Link } from "react-router-dom";
import { casesList } from "../data/casesData";
import { FinalCTA } from "../components/services/FinalCTA";
import "./cases.css";

export function CasesPage() {
  return (
    <div className="cases-page">
      <section className="cases-hero" aria-labelledby="cases-hero-title">
        <div className="cases-hero__inner">
          <h1 id="cases-hero-title" className="cases-hero__title">
            O Jeito Link
            <br />
            de fazer na
            <br />
            prática.
          </h1>
          <div className="cases-hero__copy">
            <p>Cada case representa um contexto específico e soluções desenvolvidas sob medida.</p>
            <p>Buscamos impacto positivo e relevância em cada ação.</p>
          </div>
        </div>
      </section>

      <section className="cases-grid-section" aria-label="Cases">
        <div className="cases-grid-section__inner">
          <div className="cases-grid">
            {casesList.map((c, i) => (
              <Link key={c.slug} to={`/cases/${c.slug}`} className="case-card">
                <div className="case-card__image-wrap">
                  <img
                    src={c.cardImage}
                    alt={c.title}
                    className="case-card__image"
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    width={400}
                    height={400}
                  />
                </div>
                <p className="case-card__name">{c.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
