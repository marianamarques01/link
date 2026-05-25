import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type ServiceHeroProps = {
  title: string;
};

export function ServiceHero({ title }: ServiceHeroProps) {
  return (
    <section className="service-detail-hero" aria-labelledby="service-detail-title">
      <div className="service-detail-hero__inner">
        <Link to="/servicos" className="service-detail-hero__back">
          <span className="service-detail-hero__back-icon" aria-hidden>
            <ArrowLeft size={18} strokeWidth={1.8} />
          </span>
          Voltar
        </Link>
        <h1 id="service-detail-title" className="service-detail-hero__title">
          {title}
        </h1>
      </div>
    </section>
  );
}
