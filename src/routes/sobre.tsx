import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";
import heroImage from "@/assets/marconi-hero.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [
    { title: "A Barbearia | Barbearia Marconi, República" },
    { name: "description", content: "Conheça a Barbearia Marconi: um lugar para cuidar da imagem com atenção aos detalhes, na Rua Marconi, 67, República, São Paulo." },
    { property: "og:title", content: "A Barbearia | Barbearia Marconi" },
    { property: "og:description", content: "Cuidado, precisão e presença no coração da República, em São Paulo. Conheça a Barbearia Marconi." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/sobre" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/sobre" }] }),
  component: AboutPage,
});

function AboutPage() {
  return <>
    <section className="page-intro site-container"><span className="eyebrow"><span className="eyebrow-line" /> A BARBEARIA</span><h1>Um lugar para<br /><em>ser você.</em></h1><p>Uma pausa no ritmo da cidade. Um tempo dedicado a você.</p></section>
    <section className="about-photo"><img src={heroImage} alt="Barbeiro atento aos detalhes de um corte masculino" width={1920} height={1088} /></section>
    <section className="section-space"><div className="site-container about-story"><div><span className="eyebrow"><span className="eyebrow-line" /> NOSSA ESSÊNCIA</span><h2>O tempo certo para <em>cada detalhe.</em></h2></div><div><p>Um bom atendimento começa antes mesmo da primeira tesourada: ouvir, entender e dedicar atenção ao que faz sentido para cada pessoa.</p><p>Na Barbearia Marconi, acreditamos no valor do ofício bem feito. No encontro entre técnica, cuidado e a confiança de sair da cadeira se sentindo bem.</p><Button asChild variant="primary" size="premium"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Agendar meu horário <ArrowUpRight aria-hidden="true" /></a></Button></div></div></section>
    <div className="about-bottom site-container"><span>RUA MARCONI, 67</span><span>REPÚBLICA · SÃO PAULO</span><span>4,8 ★ · 786 AVALIAÇÕES</span></div>
  </>;
}