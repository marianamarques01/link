import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import "./header.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/a-empresa", label: "A Empresa" },
  { to: "/servicos", label: "Serviços" },
  { to: "/cases", label: "Cases" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isAbout = pathname === "/a-empresa";
  const isServices = pathname === "/servicos" || pathname.startsWith("/servicos/");
  const isCaseDetail = pathname.startsWith("/cases/");
  const isCasesList = pathname === "/cases";
  const isContato = pathname === "/contato";
  const usesMinimalHeader = isHome || isAbout || isServices || isCaseDetail || isCasesList || isContato;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`site-header${usesMinimalHeader ? " site-header--home-minimal" : ""}${
        isAbout ? " site-header--about-hero" : ""
      }${
        isServices ? " site-header--services-hero" : ""
      }${
        isCaseDetail ? " site-header--case-hero" : ""
      }${
        isCasesList ? " site-header--cases-list" : ""
      }${
        isContato ? " site-header--services-hero" : ""
      }${
        scrolled ? " site-header--scrolled" : ""
      }`}
    >
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo" aria-label="LINK comunicação — início">
          <img src={isCasesList ? "/logo/logo2.png" : "/logo/image.png"} alt="" width={148} height={100} />
        </Link>

        <nav className="site-header__desktop-nav" aria-label="Principal">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `site-header__desktop-link ${isActive ? "site-header__desktop-link--active" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link
            to="/contato"
            className={`site-header__cta ${isHome ? "site-header__cta--home" : ""}`}
          >
            Fale com a gente
          </Link>

          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={isHome ? 28 : 26} strokeWidth={isHome ? 2.15 : 1.75} aria-hidden />
            ) : (
              <Menu size={isHome ? 28 : 26} strokeWidth={isHome ? 2.15 : 1.75} aria-hidden />
            )}
            <span className="visually-hidden">{open ? "Fechar menu" : "Abrir menu"}</span>
          </button>
        </div>

        <nav
          id="site-nav"
          className={`site-header__nav ${open ? "site-header__nav--open" : ""}`}
          aria-label="Menu"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `site-header__link ${isActive ? "site-header__link--active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
