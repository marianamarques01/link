import { Link } from "react-router-dom";
import "./final-cta.css";

export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__rings" aria-hidden="true">
        <img src="/imgs/circle.svg" alt="" width={1098} height={427} loading="lazy" decoding="async" />
      </div>
      <div className="final-cta__inner">
        <h2 className="final-cta__title">
          <span>Quer conversar sobre os desafios de</span>
          <span>comunicação da sua organização?</span>
        </h2>
        <Link to="/contato" className="final-cta__btn">
          Entre em contato
        </Link>
      </div>
    </section>
  );
}
