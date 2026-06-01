import { Link } from "react-router-dom";
import "./news.css";

export function NewsPage() {
  return (
    <div className="news-page">
      <section className="news-hero" aria-labelledby="news-title">
        <div className="news-hero__inner">
          <p className="news-hero__eyebrow">News</p>
          <h1 id="news-title" className="news-hero__title">
            Em breve<span className="news-hero__dot">.</span>
          </h1>
          <p className="news-hero__lead">
            Estamos preparando conteúdos, novidades e insights da LINK. Em breve você encontra aqui
            artigos, tendências e bastidores do nosso trabalho.
          </p>
          <Link to="/contato" className="news-hero__cta">
            Fale com a gente
          </Link>
        </div>
      </section>
    </div>
  );
}
