import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, Clock3 } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

const services = [
  { id: "corte", name: "Corte de cabelo", duration: 45, price: "R$ 70" },
  { id: "barba", name: "Barba", duration: 30, price: "R$ 50" },
  { id: "combo", name: "Corte + Barba", duration: 75, price: "R$ 110" },
];
const times = ["09:00","09:45","10:30","11:15","13:00","13:45","14:30","15:15","16:00","16:45","17:30","18:15","19:00"];
function formatDate(value: string) { return value ? new Intl.DateTimeFormat("pt-BR",{weekday:"long",day:"2-digit",month:"long"}).format(new Date(value+"T12:00:00")) : ""; }

export const Route = createFileRoute("/agendamento")({
  head: () => ({ meta: [{ title: "Agendar horário | Barbearia Marconi" }, { name: "description", content: "Escolha seu serviço, data e horário para agendar na Barbearia Marconi." }] }),
  component: BookingPage,
});

function BookingPage() {
  const [service,setService]=useState("corte"), [date,setDate]=useState(""), [time,setTime]=useState(""), [name,setName]=useState(""), [phone,setPhone]=useState(""), [confirmed,setConfirmed]=useState(false);
  const selected=useMemo(()=>services.find(item=>item.id===service) ?? services[0],[service]);
  const minDate=new Date().toISOString().slice(0,10);
  function submit(event: React.FormEvent) { event.preventDefault(); if(!date||!time||!name||!phone)return; localStorage.setItem("marconi:last-booking",JSON.stringify({service:selected.name,date,time,name,phone,createdAt:new Date().toISOString()})); setConfirmed(true); }

  if(confirmed) return <section className="booking-page"><div className="site-container booking-confirmation"><span className="eyebrow"><Check size={15}/> HORÁRIO RESERVADO</span><h1>Seu horário está<br/><em>confirmado.</em></h1><p>Obrigado, {name}. Seu pedido de agendamento foi registrado neste dispositivo.</p><div className="booking-summary"><strong>{selected.name}</strong><span>{formatDate(date)} · {time}</span><span><Clock3 size={14}/> {selected.duration} minutos · {selected.price}</span></div><div className="booking-actions"><Link to="/" className="text-link"><ArrowLeft size={17}/> Voltar ao início</Link><Button asChild variant="primary" size="premium"><a href={"https://api.whatsapp.com/send?phone=5583999075713&text="+encodeURIComponent("Olá! Acabei de solicitar um horário na Barbearia Marconi: "+selected.name+", "+formatDate(date)+" às "+time+". Nome: "+name+".")} target="_blank" rel="noopener noreferrer">Enviar confirmação <ArrowUpRight/></a></Button></div></div></section>;

  return <section className="booking-page"><div className="site-container"><div className="booking-intro"><Link to="/" className="text-link"><ArrowLeft size={17}/> Início</Link><span className="eyebrow"><span className="eyebrow-line"/> RESERVE SEU MOMENTO</span><h1>Agendar <em>horário.</em></h1><p>Escolha o serviço, encontre um horário disponível e deixe seus dados para confirmar o atendimento.</p></div>
  <form className="booking-layout" onSubmit={submit}><div className="booking-form-card">
  <div className="booking-step"><span>01</span><div><label>Escolha o serviço</label><small>O que vamos preparar para você?</small></div></div>
  <div className="booking-service-grid">{services.map(item=><button type="button" key={item.id} className={service===item.id?"booking-service is-selected":"booking-service"} onClick={()=>setService(item.id)}><strong>{item.name}</strong><span>{item.duration} min · {item.price}</span></button>)}</div>
  <div className="booking-step"><span>02</span><div><label>Escolha a data</label><small>Atendimento de segunda a sábado</small></div></div>
  <input className="booking-input" type="date" min={minDate} value={date} onChange={event=>{setDate(event.target.value);setTime("");}} required/>
  <div className="booking-step"><span>03</span><div><label>Escolha o horário</label><small>{date?formatDate(date):"Selecione uma data primeiro"}</small></div></div>
  <div className="booking-times">{times.map(item=><button type="button" key={item} disabled={!date} className={time===item?"booking-time is-selected":"booking-time"} onClick={()=>setTime(item)}>{item}</button>)}</div>
  <div className="booking-step"><span>04</span><div><label>Seus dados</label><small>Para identificarmos sua reserva</small></div></div>
  <div className="booking-fields"><input className="booking-input" placeholder="Seu nome" value={name} onChange={event=>setName(event.target.value)} required/><input className="booking-input" placeholder="WhatsApp / telefone" type="tel" value={phone} onChange={event=>setPhone(event.target.value)} required/></div>
  <Button type="submit" variant="primary" size="premium" className="booking-submit" disabled={!date||!time||!name||!phone}>Confirmar agendamento <ArrowUpRight/></Button>
  </div><aside className="booking-aside"><span className="eyebrow">SEU AGENDAMENTO</span><h2>{selected.name}</h2><div className="booking-aside-line"><span>Duração</span><strong>{selected.duration} min</strong></div><div className="booking-aside-line"><span>Valor</span><strong>{selected.price}</strong></div><div className="booking-aside-note">Rua Marconi, 67<br/>República, São Paulo — SP</div></aside></form></div></section>;
}
