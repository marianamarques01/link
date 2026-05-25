import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import "./footer.css";

const empresaLinks = [
  { to: "/", label: "Home" },
  { to: "/a-empresa", label: "A Empresa" },
  { to: "/cases", label: "Cases" },
] as const;

const servicosLinks = [{ to: "/servicos", label: "Serviços" }] as const;

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__col site-footer__col--brand">
          <Link to="/" className="site-footer__logo-link">
            <img
              src="/logo/image.png"
              alt="LINK comunicação"
              width={200}
              height={135}
              className="site-footer__logo-img"
            />
          </Link>
          <p className="site-footer__social-title">Siga nas redes sociais</p>
          <div className="site-footer__social-icons">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="site-footer__icon-link"
              aria-label="LinkedIn da LINK comunicação"
            >
              <IconLinkedIn />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="site-footer__icon-link"
              aria-label="Instagram da LINK comunicação"
            >
              <IconInstagram />
            </a>
          </div>
        </div>

        <nav className="site-footer__col" aria-labelledby="footer-empresa">
          <h2 id="footer-empresa" className="site-footer__heading">
            Empresa
          </h2>
          <ul className="site-footer__nav-list">
            {empresaLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="site-footer__nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="site-footer__col" aria-labelledby="footer-servicos">
          <h2 id="footer-servicos" className="site-footer__heading">
            Serviços
          </h2>
          <ul className="site-footer__nav-list">
            {servicosLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="site-footer__nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="site-footer__col site-footer__col--contact">
          <h2 id="footer-contato" className="site-footer__heading">
            Contato
          </h2>
          <p className="site-footer__cta-line">
            <Link to="/contato" className="site-footer__nav-link">
              Fale com a gente
            </Link>
          </p>

          <div className="site-footer__block">
            <div className="site-footer__line">
              <span className="site-footer__line-icon">
                <MapPin size={18} strokeWidth={1.75} aria-hidden />
              </span>
              <span>
                Rua Buenos Aires, 10 - 4º andar, São Pedro, Belo Horizonte - MG
              </span>
            </div>

            <div className="site-footer__line">
              <span className="site-footer__line-icon">
                <Phone size={18} strokeWidth={1.75} aria-hidden />
              </span>
              <a href="tel:+5531998400460" className="site-footer__text-link">
                (31) 99840-0460
              </a>
            </div>

            <div className="site-footer__line">
              <span className="site-footer__line-icon">
                <Mail size={18} strokeWidth={1.75} aria-hidden />
              </span>
              <a href="mailto:recepcao@linkcomunicacao.com.br" className="site-footer__mail-link">
                recepcao@linkcomunicacao.com.br
              </a>
            </div>
          </div>
        </address>
      </div>

      <div className="site-footer__copyright">
        <p className="site-footer__copyright-text">
          &copy; {year} LINK comunicação. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
