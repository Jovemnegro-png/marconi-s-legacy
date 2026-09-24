import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, Clock3, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";

const services = [
  { id: "corte", name: "Corte de cabelo", duration: 45, price: "R$ 70" },
  { id: "barba", name: "Barba", duration: 30, price: "R$ 50" },
  { id: "combo", name: "Corte + Barba", duration: 75, price: "R$ 110" },
];
const times = ["09:00","09:45","10:30","11:15","13:00","13:45","14:30","15:15","16:00","16:45","17:30","18:15","19:00"];

function formatDate(value: string) {
  return value
    ? new Intl.DateTimeFormat("pt-BR", { weekday: "long", day: "2-digit", month: "long" }).format(new Date(value + "T12:00:00"))
    : "";
}

function getLocalDate() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return new Date(now.getTime() - offset * 60_000).toISOString().slice(0, 10);
}

export const Route = createFileRoute("/agendamento")({
  head: () => ({
    meta: [
      { title: "Agendar horário | Barbearia Marconi" },
      { name: "description", content: "Solicite seu horário na Barbearia Marconi e confirme pelo WhatsApp." },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  const [service, setService] = useState("corte");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selected = useMemo(() => services.find(item => item.id === service) ?? services[0], [service]);
  const minDate = getLocalDate();

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const selectedDate = date ? new Date(date + "T12:00:00") : null;
    const isSunday = selectedDate?.getDay() === 0;

    if (!date || !time || !name || !phone || isSunday) return;

    localStorage.setItem(
      "marconi:last-booking",
      JSON.stringify({
        service: selected.name,
        date,
        time,
        name,
        phone,
        status: "solicitacao-pendente-whatsapp",
        createdAt: new Date().toISOString(),
      }),
    );
    setSubmitted(true);
  }

  if (submitted) {
    const whatsappMessage = encodeURIComponent(
      "Olá! Acabei de enviar uma solicitação de agendamento na Barbearia Marconi. " +
      "Serviço: " + selected.name +
      ". Data: " + formatDate(date) +
      ". Horário solicitado: " + time +
      ". Nome: " + name +
      ". Telefone/WhatsApp: " + phone +
      ". Aguardo a confirmação do horário por aqui.",
    );
    const whatsappUrl = WHATSAPP_URL + "?text=" + whatsappMessage;

    return (
      <section className="booking-page">
        <div className="site-container booking-confirmation">
          <span className="eyebrow"><Check size={15} /> SOLICITAÇÃO ENVIADA</span>
          <h1>Agora, confirme<br /><em>pelo WhatsApp.</em></h1>
          <p>
            Recebemos sua solicitação. O horário só estará confirmado depois que a equipe da
            Barbearia Marconi responder pelo WhatsApp.
          </p>

          <div className="booking-summary">
            <strong>{selected.name}</strong>
            <span>{formatDate(date)} · {time}</span>
            <span><Clock3 size={14} /> {selected.duration} minutos · {selected.price}</span>
          </div>

          <div className="booking-confirmation-note">
            <MessageCircle size={18} />
            <div>
              <strong>Falta só um passo</strong>
              <span>Envie a solicitação pelo WhatsApp e aguarde a confirmação da equipe.</span>
            </div>
          </div>

          <div className="booking-actions">
            <Link to="/" className="text-link"><ArrowLeft size={17} /> Voltar ao início</Link>
            <Button asChild variant="primary" size="premium">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Enviar pelo WhatsApp <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="booking-page">
      <div className="site-container">
        <div className="booking-intro">
          <Link to="/" className="text-link"><ArrowLeft size={17} /> Início</Link>
          <span className="eyebrow"><span className="eyebrow-line" /> SOLICITE SEU HORÁRIO</span>
          <h1>Agendar <em>horário.</em></h1>
          <p>Escolha o serviço, a data e o horário desejados. Depois, envie a solicitação pelo WhatsApp para receber a confirmação da equipe.</p>
        </div>

        <form className="booking-layout" onSubmit={submit}>
          <div className="booking-form-card">
            <div className="booking-step"><span>01</span><div><label>Escolha o serviço</label><small>O que vamos preparar para você?</small></div></div>
            <div className="booking-service-grid">
              {services.map(item => (
                <button type="button" key={item.id} className={service === item.id ? "booking-service is-selected" : "booking-service"} onClick={() => setService(item.id)}>
                  <strong>{item.name}</strong><span>{item.duration} min · {item.price}</span>
                </button>
              ))}
            </div>

            <div className="booking-step"><span>02</span><div><label>Escolha a data</label><small>Atendimento de segunda a sábado</small></div></div>
            <input
              className="booking-input"
              type="date"
              min={minDate}
              value={date}
              onChange={event => { setDate(event.target.value); setTime(""); }}
              required
            />

            <div className="booking-step"><span>03</span><div><label>Escolha o horário desejado</label><small>{date ? formatDate(date) : "Selecione uma data primeiro"}</small></div></div>
            <div className="booking-times">
              {times.map(item => (
                <button type="button" key={item} disabled={!date} className={time === item ? "booking-time is-selected" : "booking-time"} onClick={() => setTime(item)}>
                  {item}
                </button>
              ))}
            </div>

            <div className="booking-step"><span>04</span><div><label>Seus dados</label><small>Para identificarmos sua solicitação</small></div></div>
            <div className="booking-fields">
              <input className="booking-input" placeholder="Seu nome" value={name} onChange={event => setName(event.target.value)} required />
              <input className="booking-input" placeholder="WhatsApp / telefone" type="tel" value={phone} onChange={event => setPhone(event.target.value)} required />
            </div>

            <Button type="submit" variant="primary" size="premium" className="booking-submit" disabled={!date || !time || !name || !phone}>
              Enviar solicitação <ArrowUpRight />
            </Button>
            <p className="booking-form-disclaimer">
              <MessageCircle size={14} /> O horário é apenas solicitado nesta etapa. A confirmação será feita pela equipe pelo WhatsApp.
            </p>
          </div>

          <aside className="booking-aside">
            <span className="eyebrow">SOLICITAÇÃO DE HORÁRIO</span>
            <h2>{selected.name}</h2>
            <div className="booking-aside-line"><span>Duração</span><strong>{selected.duration} min</strong></div>
            <div className="booking-aside-line"><span>Valor</span><strong>{selected.price}</strong></div>
            <div className="booking-aside-note">Rua Marconi, 67<br />República, São Paulo — SP</div>
          </aside>
        </form>
      </div>
    </section>
  );
}
