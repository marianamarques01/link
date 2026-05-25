import { Outlet, useLocation } from "react-router-dom";
import { JumpToTop } from "../ScrollToTop";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./layout.css";

export function Layout() {
  const isHome = useLocation().pathname === "/";

  return (
    <div className={`site-shell ${isHome ? "site-shell--home" : ""}`}>
      <JumpToTop />
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
