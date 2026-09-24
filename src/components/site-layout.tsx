import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, MAPS_URL } from "@/lib/site";

const navigation = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "A barbearia" },
  { to: "/contato", label: "Contato" },
] as const;

function Brand() {
  return (
    <Link to="/" className="brand-lockup" aria-label="Barbearia Marconi — início">
      <span className="brand-mark" aria-hidden="true">M</span>
      <span className="brand-type">
        <strong>MARCONI</strong>
        <small>BARBEARIA · SÃO PAULO</small>
      </span>
    </Link>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="site-header">
        <div className="site-container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} className={pathname === item.to ? "nav-link is-active" : "nav-link"}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild variant="header" className="header-booking">
            <a href="/agendamento">
              Agendar horário <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <Button
            variant="iconMenu"
            size="icon"
            className="mobile-menu-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação para celular">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className={pathname === item.to ? "mobile-nav-link is-active" : "mobile-nav-link"}>
                {item.label}<ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            ))}
            <Button asChild variant="primary" className="mt-6 w-full">
              <a href="/agendamento">Agendar horário <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-container footer-main">
          <div>
            <Brand />
            <p className="footer-note">Cuidado nos detalhes. Presença em cada corte.</p>
          </div>
          <div className="footer-column">
            <span className="eyebrow">Explore</span>
            <Link to="/servicos">Serviços</Link>
            <Link to="/sobre">A barbearia</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/privacidade">Política de Privacidade</Link>
          </div>
          <div className="footer-column footer-address">
            <span className="eyebrow">Encontre-nos</span>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">Rua Marconi, 67<br />República, São Paulo — SP<br />01004-000</a>
            <a href="tel:+5511994648174">+55 11 99464-8174</a>
          </div>
        </div>
        <div className="site-container footer-bottom">
          <span>© {new Date().getFullYear()} Barbearia Marconi</span>
          <span>República · São Paulo</span>
        </div>
      </footer>
    </div>
  );
}