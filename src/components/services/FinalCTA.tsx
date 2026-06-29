import { Link } from "react-router-dom";
import { publicUrl } from "../../utils/publicUrl";
import "./final-cta.css";

export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__rings" aria-hidden="true">
        <img
          src={publicUrl("/imgs/circle.svg")}
          alt=""
          width={1098}
          height={427}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="final-cta__inner">
        <h2 className="final-cta__title">
          Estamos prontos para entender o que a sua marca precisa
          <span>
          e construir caminhos juntos.
          </span>
        </h2>
        <Link to="/contato" className="final-cta__btn">
          Entre em contato com a gente
        </Link>
      </div>
    </section>
  );
}
