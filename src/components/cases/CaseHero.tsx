import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type CaseHeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

export function CaseHero({ title, subtitle, image }: CaseHeroProps) {
  return (
    <section className="case-hero" aria-labelledby="case-hero-title">
      <div className="case-hero__bg" aria-hidden>
        <img src={image} alt="" width={900} height={900} decoding="async" />
      </div>
      <div className="case-hero__inner">
        <Link to="/cases" className="case-hero__back">
          <span className="case-hero__back-icon" aria-hidden>
            <ArrowLeft size={15} strokeWidth={1.9} />
          </span>
          Voltar
        </Link>
        <div className="case-hero__copy">
          <h1 id="case-hero-title">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
