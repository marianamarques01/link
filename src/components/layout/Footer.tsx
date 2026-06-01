import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import "./footer.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/a-empresa", label: "A Empresa" },
  { to: "/servicos", label: "Serviços" },
  { to: "/cases", label: "Cases" },
  { to: "/news", label: "News" },
] as const;

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
              width={130}
              height={88}
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

        <nav className="site-footer__col site-footer__col--nav" aria-label="Navegação principal">
          <ul className="site-footer__nav-list">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="site-footer__nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="site-footer__col site-footer__col--contact">
          <div className="site-footer__block">
            <h2 className="site-footer__heading">Endereço</h2>
            <div className="site-footer__line">
              <span className="site-footer__line-icon">
                <MapPin size={16} strokeWidth={1.75} aria-hidden />
              </span>
              <span>
                Rua Buenos Aires, 10 - 4º andar,
                <br />
                São Pedro, Belo Horizonte - MG
              </span>
            </div>
          </div>

          <div className="site-footer__block site-footer__block--contato">
            <h2 className="site-footer__heading">Contato</h2>
            <div className="site-footer__line">
              <span className="site-footer__line-icon">
                <Phone size={16} strokeWidth={1.75} aria-hidden />
              </span>
              <a href="tel:+5531998400460" className="site-footer__text-link">
                (31) 99840-0460
              </a>
            </div>

            <div className="site-footer__line">
              <span className="site-footer__line-icon">
                <Mail size={16} strokeWidth={1.75} aria-hidden />
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
