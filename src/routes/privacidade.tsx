import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Barbearia Marconi" },
      {
        name: "description",
        content: "Política de Privacidade da Barbearia Marconi e informações sobre o uso dos dados enviados pelo site.",
      },
      { property: "og:title", content: "Política de Privacidade | Barbearia Marconi" },
      { property: "og:description", content: "Saiba como a Barbearia Marconi trata os dados enviados pelo site." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacidade" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="page-intro site-container">
      <span className="eyebrow">PRIVACIDADE</span>
      <h1>Política de <em>Privacidade.</em></h1>
      <p>Esta política explica, de forma simples, como tratamos as informações fornecidas por você ao usar o site da Barbearia Marconi.</p>

      <div className="section-space" style={{ paddingBottom: 0 }}>
        <div className="about-story">
          <div>
            <span className="eyebrow">01 / DADOS COLETADOS</span>
            <h2>O que você <em>informa.</em></h2>
          </div>
          <div>
            <p>Quando você solicita um horário, podemos receber seu nome, telefone ou WhatsApp, serviço escolhido, data e horário solicitados. Esses dados são usados para identificar sua solicitação e permitir o contato da equipe.</p>
          </div>
        </div>

        <div className="about-story" style={{ marginTop: "4rem" }}>
          <div>
            <span className="eyebrow">02 / FINALIDADE</span>
            <h2>Para que <em>usamos.</em></h2>
          </div>
          <div>
            <p>Usamos as informações para responder à solicitação de agendamento, confirmar ou ajustar o horário e prestar atendimento relacionado ao pedido. Não solicitamos dados além do necessário para essa finalidade.</p>
          </div>
        </div>

        <div className="about-story" style={{ marginTop: "4rem" }}>
          <div>
            <span className="eyebrow">03 / COMPARTILHAMENTO</span>
            <h2>Com quem <em>compartilhamos.</em></h2>
          </div>
          <div>
            <p>O pedido é encaminhado pelo WhatsApp para a equipe da barbearia. O site não deve solicitar senhas, dados de cartão ou documentos de identificação.</p>
          </div>
        </div>

        <div className="about-story" style={{ marginTop: "4rem" }}>
          <div>
            <span className="eyebrow">04 / CONTROLE</span>
            <h2>Seus <em>direitos.</em></h2>
          </div>
          <div>
            <p>Você pode solicitar informações sobre os dados tratados, pedir correção ou exclusão quando aplicável e esclarecer dúvidas sobre privacidade entrando em contato com a Barbearia Marconi pelo WhatsApp ou telefone informado no site.</p>
            <p>Esta política pode ser atualizada para refletir mudanças no funcionamento do site ou nas práticas de tratamento de dados.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
