import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, MAPS_URL } from "@/lib/site";
import heroImage from "@/assets/marconi-hero.jpg";
import corteImage from "@/assets/marconi-corte.jpg";
import barbaImage from "@/assets/marconi-barba.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barbearia Marconi | Corte e barba na República, São Paulo" },
      { name: "description", content: "Barbearia Marconi na Rua Marconi, 67, República, São Paulo. Corte, barba e atenção aos detalhes. Agende seu horário pelo WhatsApp." },
      { property: "og:title", content: "Barbearia Marconi | Corte e barba em São Paulo" },
      { property: "og:description", content: "Uma barbearia na República para quem valoriza o cuidado nos detalhes. Rua Marconi, 67. Agende pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Barbershop",
        name: "Barbearia Marconi",
        telephone: "+55 11 99464-8174",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Marconi, 67",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          postalCode: "01004-000",
          addressCountry: "BR",
        },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "786", bestRating: "5" },
      }),
    }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={heroImage} alt="Barbeiro trabalhando com tesoura e pente em um corte masculino" width={1920} height={1088} fetchPriority="high" />
        <div className="hero-shade" />
        <div className="site-container hero-content">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> RUA MARCONI, 67 · REPÚBLICA</span>
            <h1 id="hero-title">Barbearia<br /><em>Marconi.</em></h1>
            <p>O cuidado de sempre. A presença de agora.</p>
            <Button asChild variant="primary" size="premium"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Agendar meu horário <ArrowUpRight aria-hidden="true" /></a></Button>
          </div>
          <Link to="/servicos" className="hero-scroll" aria-label="Conheça os serviços"><ArrowDown size={15} aria-hidden="true" /> EXPLORE</Link>
          <span className="hero-side-label">SÃO PAULO · SP</span>
        </div>
      </section>

      <div className="proof-band">
        <div className="site-container proof-inner">
          <div className="proof-rating"><span className="proof-stars" aria-label="4,8 de 5 estrelas">★★★★★</span><strong>4,8</strong><span>em 786 avaliações</span></div>
          <span className="proof-divider" />
          <span className="proof-location">No coração da República, em São Paulo</span>
          <span className="proof-score">SCORE <strong>92</strong></span>
        </div>
      </div>

      <section className="section-space intro-section">
        <div className="site-container intro-grid">
          <div className="intro-heading">
            <span className="eyebrow"><span className="eyebrow-line" /> A ESSÊNCIA</span>
            <h2>Mais que um corte.<br /><em>O seu momento.</em></h2>
          </div>
          <div className="intro-copy">
            <p>Em meio ao ritmo do centro de São Paulo, existe espaço para fazer uma pausa. Para cuidar da imagem com atenção, conversa e precisão.</p>
            <p>Na Marconi, cada detalhe importa — do primeiro cumprimento ao último acabamento.</p>
            <Link to="/sobre" className="text-link">Conheça a barbearia <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section-space services-section">
        <div className="site-container">
          <div className="section-header">
            <div><span className="eyebrow"><span className="eyebrow-line" /> NOSSO OFÍCIO</span><h2>O essencial, <em>bem feito.</em></h2></div>
            <Link to="/servicos" className="text-link desktop-text-link">Ver serviços <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="service-grid">
            <Link to="/servicos" className="service-feature">
              <div className="service-image-wrap"><img src={corteImage} alt="Corte masculino feito com tesoura e pente" loading="lazy" width={912} height={1200} /></div>
              <div className="service-caption"><div><span>01 / CORTE</span><h3>Corte de cabelo</h3></div><ArrowUpRight aria-hidden="true" /></div>
            </Link>
            <Link to="/servicos" className="service-feature">
              <div className="service-image-wrap"><img src={barbaImage} alt="Acabamento de barba feito com navalha" loading="lazy" width={912} height={1200} /></div>
              <div className="service-caption"><div><span>02 / BARBA</span><h3>Barba</h3></div><ArrowUpRight aria-hidden="true" /></div>
            </Link>
          </div>
          <Link to="/servicos" className="text-link mobile-text-link">Ver todos os serviços <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="location-section">
        <div className="site-container location-grid">
          <div className="location-copy"><span className="eyebrow"><span className="eyebrow-line" /> ONDE ESTAMOS</span><h2>Um endereço.<br /><em>O seu lugar.</em></h2><p>Na Rua Marconi, no coração da República. Um ponto de encontro no centro de São Paulo.</p><address>Rua Marconi, 67<br />República, São Paulo — SP<br />01004-000</address><a className="text-link" href={MAPS_URL} target="_blank" rel="noopener noreferrer">Traçar rota <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className="location-visual"><img src={heroImage} alt="Detalhe do trabalho em uma barbearia" loading="lazy" width={1920} height={1088} /><span className="location-visual-caption">23°32′ S · 46°38′ W / REPÚBLICA</span></div>
        </div>
      </section>

      <section className="closing-section"><div className="site-container closing-inner"><span className="eyebrow">O PRÓXIMO HORÁRIO É SEU</span><h2>Seu melhor visual<br />começa <em>aqui.</em></h2><Button asChild variant="primary" size="premium"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp <ArrowUpRight aria-hidden="true" /></a></Button><p>Ou ligue: <a href="tel:+5511994648174">+55 11 99464-8174</a></p></div></section>
    </>
  );
}