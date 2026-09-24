import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";
import corteImage from "@/assets/destaque-cabelo-em-v-masculino.webp";
import barbaImage from "@/assets/marconi-barba.jpg";

export const Route = createFileRoute("/servicos")({
  head: () => ({ meta: [
    { title: "Serviços | Barbearia Marconi, São Paulo" },
    { name: "description", content: "Conheça os serviços da Barbearia Marconi na República: corte de cabelo, barba e cuidado completo. Consulte a disponibilidade pelo WhatsApp." },
    { property: "og:title", content: "Serviços | Barbearia Marconi" },
    { property: "og:description", content: "Corte, barba e cuidado completo na Rua Marconi, 67, República. Agende seu horário pelo WhatsApp." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/servicos" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/servicos" }] }),
  component: ServicesPage,
});

function ServicesPage() {
  return <>
    <section className="page-intro site-container"><span className="eyebrow"><span className="eyebrow-line" /> NOSSO OFÍCIO</span><h1>Serviços <em>Marconi.</em></h1><p>O cuidado que faz diferença está no detalhe. Escolha o seu momento e fale com a gente para agendar.</p></section>
    <section className="site-container services-list">
      <div className="service-row"><div className="service-row-image"><img src={corteImage} alt="Corte masculino com degradê e desenho na lateral" width={300} height={200} /></div><div className="service-row-body"><span className="eyebrow">01 / CABELO</span><h2>Corte de cabelo</h2><p>Um corte pensado para acompanhar seu estilo, com atenção ao desenho, à textura e ao acabamento.</p><Button asChild variant="outlinePremium" size="premium"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Consultar horário <ArrowUpRight aria-hidden="true" /></a></Button></div></div>
      <div className="service-row"><div className="service-row-image"><img src={barbaImage} alt="Barbeiro fazendo acabamento de barba" width={912} height={1200} loading="lazy" /></div><div className="service-row-body"><span className="eyebrow">02 / BARBA</span><h2>Barba</h2><p>Contornos, proporção e acabamento para uma barba que combine com você.</p><Button asChild variant="outlinePremium" size="premium"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Consultar horário <ArrowUpRight aria-hidden="true" /></a></Button></div></div>
    </section>
    <section className="closing-section"><div className="site-container closing-inner"><span className="eyebrow">03 / COMBO</span><h2>Corte + <em>Barba.</em></h2><p>Os dois serviços no mesmo atendimento: 75 minutos por R$ 110.</p><Button asChild variant="primary" size="premium"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp <ArrowUpRight aria-hidden="true" /></a></Button></div></section>
  </>;
}