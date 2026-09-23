import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, PHONE_URL, MAPS_URL, MAP_EMBED_URL } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [
    { title: "Contato e Localização | Barbearia Marconi" },
    { name: "description", content: "Agende pelo WhatsApp ou encontre a Barbearia Marconi na Rua Marconi, 67, República, São Paulo - SP, 01004-000. Telefone: +55 11 99464-8174." },
    { property: "og:title", content: "Contato e Localização | Barbearia Marconi" },
    { property: "og:description", content: "Estamos na Rua Marconi, 67, República, São Paulo. Entre em contato e agende seu horário." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/contato" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/contato" }] }),
  component: ContactPage,
});

function ContactPage() {
  return <>
    <section className="page-intro site-container"><span className="eyebrow"><span className="eyebrow-line" /> FALE COM A GENTE</span><h1>Seu próximo corte<br /><em>começa aqui.</em></h1><p>Para agendar ou tirar uma dúvida, é só chamar.</p></section>
    <section className="site-container contact-grid"><div className="contact-details"><div className="contact-block"><span className="eyebrow">01 / AGENDAMENTO</span><h2>Vamos marcar?</h2><p>Converse diretamente com a barbearia e escolha o melhor horário para você.</p><Button asChild variant="primary" size="premium"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Chamar no WhatsApp <ArrowUpRight aria-hidden="true" /></a></Button></div><div className="contact-block"><span className="eyebrow">02 / TELEFONE</span><a className="contact-big-link" href={PHONE_URL}>+55 11 99464-8174</a></div><div className="contact-block"><span className="eyebrow">03 / ENDEREÇO</span><address>Rua Marconi, 67<br />República, São Paulo — SP<br />01004-000</address><a className="text-link" href={MAPS_URL} target="_blank" rel="noopener noreferrer">Abrir no mapa <ArrowUpRight size={17} aria-hidden="true" /></a></div></div><div className="contact-map"><iframe title="Mapa da Barbearia Marconi na Rua Marconi, 67" src={MAP_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></section>
  </>;
}